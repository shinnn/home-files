# home-files

[![NPM version](https://img.shields.io/npm/v/home-files.svg)](https://www.npmjs.com/package/home-files)
[![Build Status](https://travis-ci.org/shinnn/home-files.svg?branch=master)](https://travis-ci.org/shinnn/home-files)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/home-files.svg)](https://coveralls.io/github/shinnn/home-files?branch=master)

List all files in the [home directory](https://nodejs.org/api/os.html#os_os_homedir)

```javascript
const homeFiles = require('home-files');

async () => await homeFiles() /* => Set {
  '/Users/shinnn/.DS_Store',
  '/Users/shinnn/.bash_history',
  '/Users/shinnn/.bash_profile',
  '/Users/shinnn/.bashrc',
  '/Users/shinnn/.gitconfig',
  ...
  '/Users/shinnn/.zshrc'
} */);
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install home-files
```

## API

```javascript
const homeFiles = require('home-files');
```

### homeFiles([*options*])

*options*: `Object` (used as [`readdir-sorted` options](https://github.com/shinnn/readdir-sorted#readdirsortedpath--options))  
Return: `Promise<Set<string>>`

The promise will be fulfilled with a [`Set`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set) of strings — absolute paths of all *files* included in the home directory. Symbolic links and directories are excluded.

Options are directly passed to the underlying [`readdir-sorted`](https://github.com/shinnn/readdir-sorted) to control the order of results.

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
