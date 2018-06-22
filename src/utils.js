import fs from 'fs';

export const print = console.log; // eslint-disable-line no-console

export const writeFile = (path, content, cb) => fs.writeFile(path, content, 'utf8', cb);

export const readFile = (path, cb) => fs.readFile(path, 'utf8', cb);
