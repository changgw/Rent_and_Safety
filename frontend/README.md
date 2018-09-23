NOTES
==========
- `facilityName` is missing from dvh data
    - we should use centerId everywhere 
- using interquarttile(iqr) values for whiskers instead we should use 10% and 90%
- [x] some coloumn names have . in them which causes error 
- [ ] vertical and horizontal bar chart 
- [ ] we need to use some sort of router  (page.js)
- [x] fix webpack to server index for all all routes
- [x] fix webpack to load images from asset dir relative to the view
- [x] maybe we should use a url loader or set intepolation on
- [ ] use webpack to bundle bootstrap
- [ ] refactor all functions to use named and optional parameters
Parts
==========
Box: 


Webpack 4 Boilerplate
===========

[![Dependency Status](https://david-dm.org/cvgellhorn/webpack-boilerplate.svg)](https://david-dm.org/cvgellhorn/webpack-boilerplate) 
[![devDependency Status](https://david-dm.org/cvgellhorn/webpack-boilerplate/dev-status.svg)](https://david-dm.org/cvgellhorn/webpack-boilerplate)

> Plain webpack 4 boilerplate with Babel, SASS and lodash on board

## Requirements
You only need <b>node.js</b> pre-installed and you’re good to go. 

If you don’t want to work with lodash, just remove it from the node packages and the webpack config.

## Download
Download in current directory
```sh
$ curl -L -o master.zip https://github.com/cvgellhorn/webpack-boilerplate/archive/master.zip && unzip master.zip && rm master.zip && mv ./webpack-boilerplate-master/{.,}* ./ && rm -r ./webpack-boilerplate-master
```

## Setup
Install dependencies
```sh
$ npm install
```

## Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:8080/](http://localhost:8080/)
```sh
$ npm run dev
```
## Deployment
Build the current application
```sh
$ npm run build
```

## [webpack](https://webpack.js.org/)
If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
