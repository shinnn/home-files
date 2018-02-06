'use strict';

const {homedir} = require('os');

const enumerateFiles = require('enumerate-files');

module.exports = async function homeFiles(...args) {
	const argLen = args.length;

	if (argLen !== 0 && argLen !== 1) {
		throw new TypeError(`Expected 0 or 1 argument (<Object>), but got ${argLen} arguments.`);
	}

	return enumerateFiles(homedir(), ...args);
};
