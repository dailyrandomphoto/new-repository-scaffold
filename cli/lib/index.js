#!/usr/bin/env node

'use strict';

const { resolve } = require('path');

function main(filepath) {
  if (!filepath) {
    throw new TypeError('filepath is Required.');
  }

  console.log(filepath);
}

function exit(err) {
  if (err) {
    console.error('\n' + err);

    process.exit(1);
  }

  process.exit();
}

if (require.main === module) {
  // Called directly
  const filename = process.argv.slice(2, 3)[0];
  if (!filename) {
    exit('Usage: cli-name FILENAME');
  }

  const filepath = resolve(process.cwd(), filename);

  console.log('file name: ' + filename);
  console.log('full path: ' + filepath);

  try {
    main(filepath);
  } catch (error) {
    exit(error);
  }

  // main(filepath)
  //   .catch(exit);
} else {
  // Required as a module
  module.exports = main;
}
