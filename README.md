# University of Arizona Libraries LibCal Customizations

[![Build Status](https://travis-ci.org/ualibraries/ual-libcal.svg?branch=master)](https://travis-ci.org/ualibraries/ual-libcal)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Dependencies](https://david-dm.org/ualibraries/ual-libcal.svg)](https://david-dm.org/ualibraries/ual-libcal)

![Screenshot](screenshot.png)

## Getting started

Install the dependencies: `npm install`

Build the project for production with `npm run build:prod`

## Deploying

The contents of the `build` directory are served from an Amazon S3 bucket named `ualibr-libcal-assets`.

You can deploy the project by running `npm run deploy`. You might need to specify an AWS profile
like this: `npm run deploy -- --profile=profilename`.

## Scripts

You can build the project with [Webpack](https://webpack.github.io/) by running
`npm run build:prod` (builds for production) or `npm run build:dev` (builds for development).

This project uses [JavaScript Standard Style](https://standardjs.com/).
Test it by running `npm test`.

## LibCal settings

In the LibCal dashboard, go to 'Admin' -> 'Look & Feel'.

Paste the following code into 'Code Customizations' field.

```
<script type="text/javascript" src="https://ualibr-libcal-assets.s3-us-west-2.amazonaws.com/bundle.js"></script>
```

## Local testing

Start a local static webserver by running `npm run serve`. You will then be provided
with a script tag which you can paste into the LibCal's 'Code Customizations' field.
The `bundle.js` file will be served from your local disk.

## Learn more

* [PostCSS](http://postcss.org/) and [PostCSS-cssnext](http://cssnext.io/)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.js.org/)
* [JavaScript Standard Style](https://standardjs.com/)
* [Shipit](https://github.com/shipitjs/shipit)
* [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/)
* [Travis CI](https://travis-ci.org/)
