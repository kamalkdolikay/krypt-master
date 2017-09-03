import winston from 'winston';

winston.emitErrs = true;

function logger(module) {

    return new winston.Logger({
        transports : [
            new winston.transports.File({
                level: 'debug',
                filename: process.cwd() + '/logs/logs.log',
                handleException: true,
                json: true,
                maxSize: 5242880, //5mb
                maxFiles: 2,
                colorize: true
            }),
            new winston.transports.Console({
                level: 'debug',
                label: getFilePath(module),
                handleException: true,
                json: false,
                colorize: true
            })
        ]
    });
}

function getFilePath(module) {
    //using filename in log statements
    return module.filename.split('/').slice(-2).join('/');
}

module.exports = logger;