# AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) and other agents when working with code in this repository.

## Overview

This is `request-promise-native`, a Promise-enabled wrapper for the HTTP request library. It uses native ES6+ promises (not Bluebird) and is a fork maintained by Automattic that uses `@cypress/request` instead of the deprecated original `request` package.

## Development Commands

```bash
# Run linting
npm run lint

# Auto-fix linting issues
npm run lint:fix

# Run all tests (both main tests and promise-core tests)
npm test

# Check for unused dependencies
npm run check-dependencies

# Verify TypeScript definitions
npm run check-dts
```

## Test Structure

Tests are run with Mocha in two separate test suites:
- Main package tests: `test/spec/request-test.js`
- Promise core tests: `deps/promise-core/test/spec/`

Both test suites run sequentially with the `npm test` command.

## Architecture

### Core Structure

The package has a unique architecture that wraps the `request` library with promise functionality:

1. **Entry point** (`lib/rp.js`):
   - Uses `stealthy-require` to load a fresh instance of `request` to avoid polluting user's require cache
   - Configures promise plumbing with native `Promise` implementation
   - Exposes `then`, `catch`, and `promise` methods on request objects

2. **Promise Core** (`deps/promise-core/`):
   - Contains the core promise wrapping logic embedded in this repository
   - `configure/request2.js`: Intercepts the `request.Request.prototype.init` method to inject promise functionality
   - `lib/plumbing.js`: Core promise integration logic that wraps request callbacks with promise resolve/reject
   - `lib/errors.js`: Custom error classes (`RequestError`, `StatusCodeError`, `TransformError`)

3. **Error Handling**:
   - `RequestError`: Network/request-level errors
   - `StatusCodeError`: Non-2xx status codes when `simple: true` (default)
   - `TransformError`: Errors thrown during response transformation

### Key Concepts

- **Promise interception**: The package modifies `request`'s prototype to inject promise handling before the original init method runs
- **Transform functions**: Optional response transformers can be applied, with special handling for `transform2xxOnly` option
- **Options**:
  - `simple` (default: true): Reject on non-2xx status codes
  - `resolveWithFullResponse` (default: false): Resolve with full response object instead of just body
  - `transform2xxOnly` (default: true): Only transform 2xx responses

### Dependencies

- Uses `@cypress/request` (aliased as `request`) because the original `request` is deprecated
- `qs` is pinned to v6.14.2 via package.json overrides
- Requires Node.js >=20.x

## Important Notes

- This package maintains API compatibility with `request-promise` but uses native promises instead of Bluebird
- The `stealthy-require` pattern ensures users can still require an unaltered `request` instance if needed
- The promise-core dependency is embedded in `deps/` rather than being an external npm package
