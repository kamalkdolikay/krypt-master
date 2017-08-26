[![Krypt-Master](http://img10.deviantart.net/d87c/i/2010/342/8/0/stock_gothic_coffin_2_by_vashkranfeld-d34hh7u.png)](https://www.npmjs.com/~kamaldolikay)
<h1>
<a href="https://www.npmjs.com/~kamaldolikay"><img alt="Krypt-master logo" src="http://img10.deviantart.net/d87c/i/2010/342/8/0/stock_gothic_coffin_2_by_vashkranfeld-d34hh7u.png" title="Krypt-Master"/></a>
</h1>

### [Website](https://github.com/kamalkdolikay)  &nbsp; [Get Started](https://www.npmjs.com/~kamaldolikay) &nbsp;  [Docs](https://github.com/kamalkdolikay)  &nbsp; [News](https://www.npmjs.com/~kamaldolikay) &nbsp; [Submit Issue](https://github.com/kamalkdolikay)

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
```

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