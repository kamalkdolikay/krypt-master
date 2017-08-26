<h1>
[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)
<a href="http://sailsjs.com"><img alt="Sails.js logo" src="http://balderdashy.github.io/sails/images/logo.png" title="Sails.js"/></a>
</h1>

### [Website](http://sailsjs.com/)  &nbsp; [Get Started](http://sailsjs.com/get-started) &nbsp;  [Docs](http://sailsjs.com/documentation)  &nbsp; [News](http://twitter.com/sailsjs) &nbsp; [Submit Issue](http://sailsjs.com/bugs)

[![Build Status](https://travis-ci.org/kamalkdolikay/krypt.svg?branch=dev)](https://travis-ci.org/kamalkdolikay/krypt)

Krypt Master is a node package that generates various boilerplates. The project is still work in progress, and pull requests are definitely welcome.


### Scaffolding

* [express-sails]: A Sails.js like file structure using Express.js
* [mern]: React.js implemented with Express & Node using webpack
* lot more to come

## Installation

```sh
$ npm install -g krypt-master
```

Run the app:

```bash
$ hail-krypt
```

Select express-sails:

```bash
$ hail-krypt
```

Install dependencies:

```bash
$ cd express-koder && npm install
```

Start your Express.js app at `http://localhost:1337/`:

```bash
$ npm start

Once run, `hail-krypt` will generate the following file structure:

````
.
├── api
│   └── contollers
│   └── models
│   └── policies
│   └── services
│       ├── default.opts
│       └── doctest.opts
├── assets
├── bin
├── config
│   └── config.js
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
| [CipherService]                                                       | OAuth2.0                                         |
| [HashService](https://www.npmjs.com/package/bcryptjs)                 | bcryptjs                                         |
| [ImageService]                                                        | GraphicsMagick, ImageMagick(Soon to implemented) |
| [Logs](https://www.npmjs.com/package/winston)                         | Winston                                          |
| [MailerService](https://www.npmjs.com/package/nodemailer)             | Nodemailer                                       |
| [PaymentService]                                                      | BrainTreePayments, Stripe(Soon to implemented)   |
| [SmsService]                                                          | Twilio(Soon to implemented)                      |
| [SocialService]                                                       | Facebook                                         |
| [StorageService]                                                      | Amazon S3, Local                                 |