# Krypt Master
[![NPM version](http://img.shields.io/npm/v/krypt-master.svg)](https://www.npmjs.com/package/krypt-master) [![Build Status](https://travis-ci.org/kamalkdolikay/krypt-master.svg?branch=dev)](https://travis-ci.org/kamalkdolikay/krypt-master) [![npm](https://img.shields.io/npm/dt/krypt-master.svg)](https://www.npmjs.com/package/krypt-master) [![GitHub stars](https://img.shields.io/github/stars/kamalkdolikay/krypt-master.svg?style=social&label=Star)](https://github.com/kamalkdolikay/krypt-master/tree/dev2)

Krypt Master is a node package that is Express CLI in Sails.js style

[![NPM](https://nodei.co/npm/krypt-master.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/krypt-master/)

### [Github](https://github.com/kamalkdolikay/krypt-master/tree/dev2)  &nbsp; [Get Started](https://www.npmjs.com/~kamaldolikay) &nbsp;  [Docs](https://github.com/kamalkdolikay)  &nbsp; [News](https://www.npmjs.com/~kamaldolikay) &nbsp; [Submit Issue](https://github.com/kamalkdolikay)

### Express CLI (Sails.js Structure)

A Sails.js like file structure using Express.js which provides the following services:
* install with simple auth or oauth2 (in progress)
* generate controllers, models, services with single command (in progress)
* generate logs(in progress)
* one click dummy db import(in progress)

Currently the project is still work in progress. Pull requests are definitely welcome.

### Installation

```sh
$ npm install -g krypt-master
```

Run the app:

```bash
$ krypt init
```

generate(controller, model, service):

```bash
$ krypt generate controller users
  > created    api/controllers/UsersController.js
  > updated    config/routes.js
```

Install dependencies:

```bash
$ cd project && npm install
```

Start your Express.js app at `http://localhost:1337/`:

```bash
$ npm start
```

Once run, it will generate the following file structure:

````
.
├── api
│   └── contollers
│   └── models
│   └── policies
│   └── services
├── assets
├── bin
├── config
│   ├── config.js
│   └── connections.js
│   └── logs.js
│   └── mongoose.js
│   └── routes.js
├── logs
│   └── logs.log
├── .gitignore
├── app.js
├── README.md
└── package.json
````

## Bundled services

| Service Name                                                          | Implemented providers                            |
|:---------------------------------------------------------------------:|:------------------------------------------------:|
| CipherService                                                         | OAuth2.0/Simple Auth(passport)                   |
| HashService                                                           | bcryptjs                                         |
| ImageService                                                          | GraphicsMagick, ImageMagick(Soon to implemented) |
| Logs                                                                  | Winston                                          |
| MailerService                                                         | Nodemailer                                       |
| PaymentService                                                        | BrainTreePayments, Stripe(Soon to implemented)   |
| SmsService                                                            | Twilio(Soon to implemented)                      |
| SocialService                                                         | Facebook(Soon to implemented)                    |