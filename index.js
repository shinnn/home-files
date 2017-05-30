'use strict';

const {homedir} = require('os');

const enumerateFiles = require('enumerate-files');

module.exports = function homeFiles(...args) {
  const argLen = args.length;

  if (argLen !== 0 && argLen !== 1) {
    return Promise.reject(new TypeError(`Expected 0 or 1 argument (Object), but got ${argLen} arguments.`));
  }

  return enumerateFiles(homedir(), ...args);
};
