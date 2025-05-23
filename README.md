Request-Promise-Native
======================

[![Test with mocha](https://github.com/Automattic/request-promise-native/actions/workflows/test.yml/badge.svg)](https://github.com/Automattic/request-promise-native/actions/workflows/test.yml)

# Important note

As of Feb 11th 2020, [`request`](https://github.com/request/request) is fully deprecated. Hence, we're using [the forked version of it - `@cypress/request`](https://github.com/cypress-io/request).

---

This package is similar to [`request-promise`](https://www.npmjs.com/package/request-promise) but uses native ES6+ promises.

Please refer to the [`request-promise` documentation](https://www.npmjs.com/package/request-promise). Everything applies to `request-promise-native` except the following:
- Instead of using Bluebird promises this library uses native ES6+ promises.
- Native ES6+ promises may have fewer features than Bluebird promises do. In particular, the `.finally(...)` method was not included until Node v10.

## Installation

This module is installed via npm:

```
npm i --save "request-promise-native@npm:@automattic/request-promise-native@latest"
```


## Migration from `request-promise` to `request-promise-native`

1. Go through the [migration instructions](https://github.com/request/request-promise#migration-from-v3-to-v4) to upgrade to `request-promise` v4.
2. Ensure that you don't use Bluebird-specific features on the promise returned by your request calls. In particular, you can't use `.finally(...)` anymore.
3. You are done.

## Contributing

To set up your development environment:

1. clone the repo to your desktop,
2. in the shell `cd` to the main folder,
3. hit `npm install`,
4. hit `npm install gulp -g` if you haven't installed gulp globally yet, and
5. run `gulp dev`. (Or run `node ./node_modules/.bin/gulp dev` if you don't want to install gulp globally.)

`gulp dev` watches all source files and if you save some changes it will lint the code and execute all tests. The test coverage report can be viewed from `./coverage/lcov-report/index.html`.

If you want to debug a test you should use `gulp test-without-coverage` to run all tests without obscuring the code by the test coverage instrumentation.

## Change History

- v1.1.0 (2025-02-95)
    - Dependencies cleaned up and updated.
- v1.0.9 (2020-07-21)
    - Security fix: bumped `request-promise-core` which bumps `lodash` to `^4.17.19` following [this advisory](https://www.npmjs.com/advisories/1523).
- v1.0.8 (2019-11-03)
    - Security fix: bumped `request-promise-core` which bumps `lodash` to `^4.17.15`. See [vulnerabilty reports](https://snyk.io/vuln/search?q=lodash&type=npm).
      *(Thanks to @aw-davidson for reporting this in issue [#49](https://github.com/request/request-promise-native/issues/49).)*
- v1.0.7 (2019-02-14)
    - Corrected mistakenly set `tough-cookie` version, now `^2.3.3`
      *(Thanks to @evocateur for pointing this out.)*
    - If you installed `request-promise-native@1.0.6` please make sure after the upgrade that `request` and `request-promise-native` use the same physical copy of `tough-cookie`.
- v1.0.6 (2019-02-14)
    - Using stricter `tough-cookie@~2.3.3` to avoid installing `tough-cookie@3` which introduces breaking changes
      *(Thanks to @jasonmit for pull request [#33](https://github.com/request/request-promise-native/pull/33/))*
    - Security fix: bumped `lodash` to `^4.17.11`, see [vulnerabilty reports](https://snyk.io/vuln/search?q=lodash&type=npm)
- v1.0.5 (2017-09-22)
    - Upgraded `tough-cookie` to a version without regex DoS vulnerability
      *(Thanks to @sophieklm for [pull request #13](https://github.com/request/request-promise-native/pull/13))*
- v1.0.4 (2017-05-07)
    - Fix that allows to use `tough-cookie` for [cookie creation](https://github.com/request/request-promise#include-a-cookie)
- v1.0.3 (2016-08-08)
    - Renamed internally used package `@request/promise-core` to `request-promise-core` because there where [too](https://github.com/request/request-promise/issues/137) [many](https://github.com/request/request-promise/issues/141) issues with the scoped package name
- v1.0.2 (2016-07-18)
    - Fix for using with module bundlers like Webpack and Browserify
- v1.0.1 (2016-07-17)
    - Fixed `@request/promise-core` version for safer versioning
- v1.0.0 (2016-07-15)
    - Initial version similar to [`request-promise`](https://www.npmjs.com/package/request-promise) v4

## License (ISC)

In case you never heard about the [ISC license](http://en.wikipedia.org/wiki/ISC_license) it is functionally equivalent to the MIT license.

See the [LICENSE file](LICENSE) for details.
