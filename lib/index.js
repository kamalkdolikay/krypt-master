#!/usr/bin/env node --harmony

/**
 * Displays a string in the console
 *
 * @param {string_to_say} String string to show in the console
 */
var say = function(string_to_say) {

    var shell = require('shelljs');

    if (!shell.which('git')) {
    console.log("in");
        shell.echo('Sorry, this script requires git');
        shell.exit(1);
    } else {
    // shell.echo('hello world');
    }

    // var version = shell.exec('node --version').stdout;

    var chalk       = require('chalk');
    var clear       = require("cli-clear");
    var CLI         = require('clui');
    var figlet      = require('figlet');
    var inquirer    = require('inquirer');
    var Spinner     = CLI.Spinner;
    var fs          = require('fs');
    var term        = require( 'terminal-kit' ).terminal ;

    // clear();

    // console.log(
    //     chalk.yellow(
    //         figlet.textSync('By KD', { horizontalLayout: 'full' })
    //     )
    // );

    const CFonts = require('cfonts');

    CFonts.say('Krypt Master', {
        font: 'block',
        align: 'left',
        colors: ['yellow','red'],
        background: 'Black',
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
        maxLength: '20'
    });

    CFonts.say('ONE KRYPT TO RULE THEM ALL', {
        font: 'chrome',
        align: 'center',
        colors: ['green','red'],
        background: 'Black',
        letterSpacing: 1,
        lineHeight: 1,
        space: false,
        maxLength: '0'
    });

    // term.drawImage( '124.png', { shrink: {width: 90, height: 90}}, function(err){
    //     console.log(err)
    //     image.draw( { dst: screen , blending: true } ) ;
	// 	screen.draw() ;
    // } )

    // console.log(figlet.textSync('Boo!', {
    //     font: 'Ghost',
    //     horizontalLayout: 'default',
    //     verticalLayout: 'default'
    // }));

    // const chalkAnimation = require('chalk-animation');
    // const rainbow = chalkAnimation.rainbow('Lorem ipsum'); // Animation starts

    // setTimeout(() => {
    //     rainbow.stop(); // Animation stops
    // }, 1000);

    // setTimeout(() => {
    //     rainbow.start(); // Animation resumes
    // }, 2000);

    CFonts.say('By KD', {
        font: 'simple',
        align: 'center',
        colors: ['magenta'],
        background: 'Black',
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
        maxLength: '0'
    });


    function getGithubCredentials(callback) {
    var questions = [
        // {
        //     name: 'username',
        //     type: 'input',
        //     message: 'Enter your Github username or e-mail address:',
        //     validate: function( value ) {
        //         if (value.length) {
        //             return true;
        //         } else {
        //             return 'Please enter your username or e-mail address';
        //         }
        //     }
        // },
        // {
        //     name: 'password',
        //     type: 'password',
        //     message: 'Enter your password:',
        //     validate: function(value) {
        //         if (value.length) {
        //             return true;
        //         } else {
        //             return 'Please enter your password';
        //         }
        //     }
        // },
        {
            type: 'list',
            name: 'list',
            message: 'Select one of the following',
            choices: ['mern', 'express-sails' ],
            default: 'public'
        },
        // {
        //     type: 'confirm',
        //     name: 'confirm',
        //     message: 'Public or private:',
        //     choices: [ 'public', 'private' ],
        //     default: 'public'
        // },
        // {
        //     type: 'rawlist',
        //     name: 'rawlist',
        //     message: 'Public or private:',
        //     choices: [ 'public', 'private' ],
        //     default: 'public'
        // },
        // {
        //     type: 'checkbox',
        //     name: 'checkbox',
        //     message: 'Public or private:',
        //     choices: [ 'public', 'private' ],
        //     default: 'public'
        // },
        // {
        //     type: 'editor',
        //     name: 'editor',
        //     message: 'Public or private:',
        //     choices: [ 'public', 'private' ],
        //     default: 'public'
        // }
    ];

    inquirer.prompt(questions).then(callback);
    }

    getGithubCredentials(function(credentials) {
        // var status = new Spinner('Authenticating you, please wait...');
        // status.start();
        // status.stop();
        if(credentials.list == 'express-sails'){
            shell.echo('please wait...');
            var repo = shell.exec('git clone -b dev https://github.com/kamalkdolikay/express-koder.git',{silent:true}).stdout;
            shell.echo('All done.. cd express-koder && npm i');
        } else if(credentials.list == 'mern'){
            shell.echo('please wait...');
            var repo1 = shell.exec('git clone https://github.com/kamalkdolikay/kadmus-mern.git',{silent:true}).stdout;
            shell.echo('All done.. cd express-koder && npm i');
            shell.echo('npm run bundle && npm start');
        }
    });

    // var stdio = require('stdio');
    // var pbar = stdio.progressBar(100, 10);
    // var i = setInterval(function () {
    //     pbar.tick();
    // }, 1000);
    // pbar.onFinish(function () {
    //     console.log('finish');
    //     clearInterval(i);
    // });

    // var term = require( 'terminal-kit' ).terminal ;
    // term.slowTyping(
    //     'What a wonderful world!\n' ,
    //     { flashStyle: term.brightWhite } ,
    //     function() { process.exit() ; }
    // ) ;

    // return console.log(string_to_say);
};

// Allows us to call this function from outside of the library file.
// Without this, the function would be private to this file.
exports.say = say;