import mongoose from 'mongoose';
import Promise from 'bluebird';
mongoose.Promise = global.Promise;
const promisify = Promise.promisify;

const log = require('./log')(module);
const connections = require('./connections');

mongoose.connection.openUri("mongodb://admin:admin@ds161833.mlab.com:61833/express-koder").then(() => {
    log.info('Connected to DB!');
}).catch((error) => {
    log.error(error);
});