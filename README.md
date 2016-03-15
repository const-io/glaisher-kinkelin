Glaisher-Kinkelin Constant
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Glaisher-Kinkelin][glaisher-constant] constant.

[Glaisher-Kinkelin][glaisher-constant] constant is defined as

<div class="equation" align="center" data-raw-text="A = \lim_{n\to\infty} \frac{K(n + 1)}{n^{n^2/2 + n/2 + 1/12}e^{-n^2/4}}" data-equation="eq:glaisher_kinkelin_constant">
	<img src="https://cdn.rawgit.com/const-io/glaisher-kinkelin/979ab7b20f0acf814018e5f63511565f86aa6b5c/docs/img/glaisher.svg" alt="Glaisher-Kinkelin constant">
	<br>
</div>

where

<div class="equation" align="center" data-raw-text="K(n) = \prod_{k=1}^{n-1} k^k" data-equation="eq:k_function">
	<img src="https://cdn.rawgit.com/const-io/glaisher-kinkelin/d18262b41c15a93644d7d91061a8b27d4db555a1/docs/img/k_function.svg" alt="K-function">
	<br>
</div>

is the [K-function][k-function].


## Installation

``` bash
$ npm install const-glaisher-kinkelin
```


## Usage

``` javascript
var A = require( 'const-glaisher-kinkelin' );
```

#### A

The [Glaisher-Kinkelin][glaisher-constant] constant.

``` javascript
A === 1.2824271291006226;
```


## Examples

``` javascript
var A = require( 'const-glaisher-kinkelin' );

console.log( 'Glaisher\'s constant: %d', A );
// returns 1.2824271291006226
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/const-glaisher-kinkelin.svg
[npm-url]: https://npmjs.org/package/const-glaisher-kinkelin

[build-image]: http://img.shields.io/travis/const-io/glaisher-kinkelin/master.svg
[build-url]: https://travis-ci.org/const-io/glaisher-kinkelin

[coverage-image]: https://img.shields.io/codecov/c/github/const-io/glaisher-kinkelin/master.svg
[coverage-url]: https://codecov.io/github/const-io/glaisher-kinkelin?branch=master

[dependencies-image]: http://img.shields.io/david/const-io/glaisher-kinkelin.svg
[dependencies-url]: https://david-dm.org/const-io/glaisher-kinkelin

[dev-dependencies-image]: http://img.shields.io/david/dev/const-io/glaisher-kinkelin.svg
[dev-dependencies-url]: https://david-dm.org/dev/const-io/glaisher-kinkelin

[github-issues-image]: http://img.shields.io/github/issues/const-io/glaisher-kinkelin.svg
[github-issues-url]: https://github.com/const-io/glaisher-kinkelin/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[glaisher-constant]: https://en.wikipedia.org/wiki/Glaisher%E2%80%93Kinkelin_constant
[k-function]: https://en.wikipedia.org/wiki/K-function
[compute-io]: https://github.com/compute-io
