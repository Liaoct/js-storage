#!/usr/bin/env node

'use strict';

const babel = require('babel-core');
const uglifyJS = require('uglify-js');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const yargs = require('yargs');
const async = require('async');

const argv = yargs.argv;
const libDir = path.join(__dirname, '../lib');

const exitIfError = (err) => {
    if (err) {
        console.log(err.message);
        process.exit(1);
    }
};

const build = () => {
    console.log('Building...');

    babel.transformFile('./src/index.js', (err, result) => {
        exitIfError(err);

        async.parallel([
            (callback) => {
                const uglifyCode = uglifyJS.minify(result.code).code
                mkdirp.mkdirp(libDir, (err) => {
                    exitIfError(err);
                    fs.writeFile(path.join(libDir, 'index.js'), uglifyCode, callback);
                });
            },
            (callback) => {
                fs.createReadStream('./src/index.d.ts')
                    .pipe(fs.createWriteStream('./lib/index.d.ts'))
                    .on('finish', callback);
            }
        ], () => {
            console.log('Build complete.')
        });
    });
};

if (argv.watch) {
    // When watching, we don't build until something changes. This gives us greater flexibility
    // with where we use the watch flag.
    fs.watchFile(path.join(__dirname, '../src/index.js'), {
        interval: 100
    }, () => build())

    if (!argv.skipInitialRun) {
        build();
    }
} else {
    build();
}