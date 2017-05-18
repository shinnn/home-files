'use strict';

var enumerateFiles = require('enumerate-files');
var osHomedir = require('os-homedir');

var home = osHomedir();

module.exports = function homeFiles() {
  return enumerateFiles(home);
};
