'use strict';

const {homedir} = require('os');

const enumerateFiles = require('enumerate-files');

module.exports = function homeFiles(...args) {
  return enumerateFiles(homedir(), ...args);
};
