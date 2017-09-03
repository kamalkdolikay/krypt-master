import nconf from 'nconf';

nconf.argv()
    .env()
    .file({ file: './connections.js' });

module.exports = nconf;