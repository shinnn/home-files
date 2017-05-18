'use strict';

const {join} = require('path');
const os = require('os');

os.homedir = () => __dirname;

const homeFiles = require('.');
const test = require('tape');

test('homeFiles()', async t => {
  const paths = await homeFiles();

  t.ok(
    Number.isSafeInteger(paths.size),
    'should return a Set.'
  );

  t.ok(
    paths.has(__filename),
    'should return the absolute file paths in the home directory.'
  );

  t.notOk(
    paths.has(join(__dirname, 'node_modules')),
    'should exclude non-file paths from the resultant Set.'
  );

  t.end();
});
