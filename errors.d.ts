// Typings for the error classes exposed by `require('request-promise-native/errors')`.
// The implementation lives in ./deps/promise-core/lib/errors.js

import { Options, Response } from "./lib/request";

declare namespace errors {
    /**
     * Thrown when the request failed, for example because of a network error or
     * a timeout. No response was received.
     */
    class RequestError extends Error {
        name: "RequestError";
        /** The error that caused the request to fail. */
        cause: any;
        /** Legacy attribute, same as `cause`. */
        error: any;
        /** The options the failed request was made with. */
        options: Options;
        /** Only set if the error was caused while processing an already received response. */
        response: Response | undefined;

        constructor(cause: any, options: Options, response?: Response);
    }

    /**
     * Thrown when the response had a non-2xx status code and the request was
     * made with the default `simple: true` option.
     */
    class StatusCodeError extends Error {
        name: "StatusCodeError";
        /** The status code of the response. */
        statusCode: number;
        /** The body of the response. Legacy attribute. */
        error: any;
        /** The options the request was made with. */
        options: Options;
        /** The response. Holds the transformed response if a `transform` function was applied to it. */
        response: Response;

        constructor(statusCode: number, body: any, options: Options, response: Response);
    }

    /**
     * Thrown when the `transform` function threw an error or returned a rejected
     * promise.
     */
    class TransformError extends Error {
        name: "TransformError";
        /** The error thrown by the `transform` function. */
        cause: any;
        /** Legacy attribute, same as `cause`. */
        error: any;
        /** The options the request was made with. */
        options: Options;
        /** The response that was passed to the `transform` function. */
        response: Response;

        constructor(cause: any, options: Options, response: Response);
    }
}

export = errors;
