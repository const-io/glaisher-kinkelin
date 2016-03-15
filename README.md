Glaisher-Klinkelin Constant
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Glaisher-Klinkelin][glaisher-constant] constant.

[Glaisher-Klinkelin][glaisher-constant] constant is defined as

<div class="equation" align="center" data-raw-text="A = \lim_{n\to\infty} \frac{K(n + 1)}{n^{n^2/2 + n/2 + 1/12}e^{-n^2/4}}" data-equation="eq:glaisher_klinkelin_constant">
	<img src="https://cdn.rawgit.com/const-io/glaisher-klinkelin/979ab7b20f0acf814018e5f63511565f86aa6b5c/docs/img/glaisher.svg" alt="Glaisher-Klinkelin constant">
	<br>
</div>

where

<div class="equation" align="center" data-raw-text="K(n) = \prod{k=1}^{n-1} k^k" data-equation="eq:K_function">
	<img src="" alt="K function">
	<br>
</div>


## Installation

``` bash
$ npm install const-glaisher-klinkelin
```


## Usage

``` javascript
var A = require( 'const-glaisher-klinkelin' );
```

#### A

The [Glaisher-Klinkelin][glaisher-constant] constant.

``` javascript
A === 1.2824271291006226;
```


## Examples

``` javascript
var A = require( 'const-glaisher-klinkelin' );

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


[npm-image]: http://img.shields.io/npm/v/const-glaisher-klinkelin.svg
[npm-url]: https://npmjs.org/package/const-glaisher-klinkelin

[build-image]: http://img.shields.io/travis/const-io/glaisher-klinkelin/master.svg
[build-url]: https://travis-ci.org/const-io/glaisher-klinkelin

[coverage-image]: https://img.shields.io/codecov/c/github/const-io/glaisher-klinkelin/master.svg
[coverage-url]: https://codecov.io/github/const-io/glaisher-klinkelin?branch=master

[dependencies-image]: http://img.shields.io/david/const-io/glaisher-klinkelin.svg
[dependencies-url]: https://david-dm.org/const-io/glaisher-klinkelin

[dev-dependencies-image]: http://img.shields.io/david/dev/const-io/glaisher-klinkelin.svg
[dev-dependencies-url]: https://david-dm.org/dev/const-io/glaisher-klinkelin

[github-issues-image]: http://img.shields.io/github/issues/const-io/glaisher-klinkelin.svg
[github-issues-url]: https://github.com/const-io/glaisher-klinkelin/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[glaisher-constant]: https://en.wikipedia.org/wiki/Glaisher%E2%80%93Kinkelin_constant
[compute-io]: https://github.com/compute-io
