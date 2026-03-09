var childProcess = require('child_process'),
    errors = require('../../errors'),
    path = require('path'),
    rp = require('../../'),
    tough = require('tough-cookie'),
    startServer = require('../fixtures/server.js');

const { afterAll, beforeAll, describe, expect } = require('@jest/globals');


describe('Request-Promise-Native', function () {

    var stopServer = null;

    beforeAll(function (done) {
        startServer(4000, function (stop) {
            stopServer = stop;
            done();
        });
    });

    afterAll(function (done) {
        stopServer(done);
    });

    describe('should expose', function () {

        it('.then(...)', function (done) {

            rp('http://localhost:4000/200')
                .then(function (body) {
                    expect(body).toEqual('GET /200');
                    done();
                })
                .catch(function (err) {
                    done(err);
                });

        });

        it('.catch(...) and the error types', function (done) {

            rp('http://localhost:4000/404')
                .catch(function (err) {
                    expect(err).toBeInstanceOf(errors.StatusCodeError);
                    return 'catch called';
                })
                .then(function (info) {
                    expect(info).toEqual('catch called');
                    done();
                })
                .catch(function (err) {
                    done(err);
                });

        });

        it('.promise() returning a native ES6 promise', function () {

            var p = rp('http://localhost:4000/200').promise();

            expect(p).toBeInstanceOf(Promise);
        });

    });

    describe('should still allow to require Request independently', function () {

        it('by not interfering with Request required afterwards', function (done) {

            childProcess.exec('node ' + path.join(__dirname, '../fixtures/require/afterwards.js'), function (err, stdout, stderr) {

                if (err) {
                    done(err);
                    return;
                }

                try {
                    expect(stdout).toContain('rp: true, request: true');
                    done();
                } catch (e) {
                    done(e);
                }

            });

        });

        it('by not interfering with Request required beforehand', function (done) {

            childProcess.exec('node ' + path.join(__dirname, '../fixtures/require/beforehand.js'), function (err, stdout, stderr) {

                if (err) {
                    done(err);
                    return;
                }

                try {
                    expect(stdout).toContain('request: true, rp: true');
                    done();
                } catch (e) {
                    done(e);
                }

            });

        });

        it('by not interfering with Request required beforehand and afterwards being identical', function (done) {

            childProcess.exec('node ' + path.join(__dirname, '../fixtures/require/beforehandAndAfterwards.js'), function (err, stdout, stderr) {

                if (err) {
                    done(err);
                    return;
                }

                try {
                    expect(stdout).toContain('request1: true, rp: true, request2: true');
                    done();
                } catch (e) {
                    done(e);
                }

            });

        });

    });

    it('should allow the use of tough-cookie - issue request-promise#183', function () {

        var sessionCookie = new tough.Cookie({
            key: 'some_key',
            value: 'some_value',
            domain: 'api.mydomain.com',
            httpOnly: true,
            maxAge: 31536000
        });

        var cookiejar = rp.jar();

        expect(() => {
            cookiejar.setCookie(sessionCookie.toString(), 'https://api.mydomain.com');
        }).not.toThrow();

    });

});
