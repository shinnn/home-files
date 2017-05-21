'use strict';

const homedir = require('os').homedir;

const enumerateFiles = require('enumerate-files');

module.exports = function homeFiles() {
  return enumerateFiles(homedir());
};
