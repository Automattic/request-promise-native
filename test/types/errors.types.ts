// Type tests for ../../errors.d.ts - run with `npm run check-dts`

import { RequestError, StatusCodeError, TransformError } from "../../errors";
import errors = require("../../errors");

declare const thrown: unknown;

if (thrown instanceof StatusCodeError) {
    const statusCode: number = thrown.statusCode;
    const body: any = thrown.error;
    const message: string = thrown.message;
    const responseStatusCode: number = thrown.response.statusCode;
    const headers: unknown = thrown.response.headers;

    console.log(statusCode, body, message, responseStatusCode, headers);
}

if (thrown instanceof RequestError) {
    const cause: any = thrown.cause;
    // `response` is not set when no response was received
    const responseStatusCode: number | undefined = thrown.response?.statusCode;

    console.log(cause, thrown.error, thrown.options, responseStatusCode);
}

if (thrown instanceof TransformError) {
    console.log(thrown.cause, thrown.error, thrown.options, thrown.response.statusCode);
}

// The namespace import exposes the very same classes
const error: errors.StatusCodeError = new errors.StatusCodeError(
    404,
    "Not Found",
    { uri: "http://example.com/" },
    {} as errors.StatusCodeError["response"],
);

const name: "StatusCodeError" = error.name;
const isError: boolean = error instanceof Error;

console.log(name, isError);
