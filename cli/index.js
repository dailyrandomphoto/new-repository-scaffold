#!/usr/bin/env node

'use strict';

const {resolve} = require('path');

function main(filepath) {
  if (!filepath) {
    exit('filepath is Required.');
  }

  console.log(filepath);
}

function exit(msg) {
  if (msg) {
    console.error('\n' + msg);
  }

  if (require.main === module) { // Called directly
    process.exit(1);
  } else { // Required as a module
    throw msg;
  }
}

if (require.main === module) { // Called directly
  const filename = process.argv.slice(2, 3)[0];
  if (!filename) {
    exit('Usage: cli-name FILENAME');
  }

  const filepath = resolve(process.cwd(), filename);

  console.log('file name: ' + filename);
  console.log('full path: ' + filepath);
  main(filepath);
} else { // Required as a module
  module.exports = main;
}
