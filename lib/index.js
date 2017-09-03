#!/usr/bin/env node

/**
 * Displays a string in the console
 *
 * @param {string_to_say} String string to show in the console
 */
var say = function(req_command) {

    var fs          = require("fs");
    const fse       = require('fs-extra');
    var shell       = require('shelljs');
    const CFonts    = require('cfonts');
    var chalk       = require('chalk');
    // var clear       = require("cli-clear");
    var CLI         = require('clui');
    var figlet      = require('figlet');
    var inquirer    = require('inquirer');
    var Spinner     = CLI.Spinner;
    var term        = require( 'terminal-kit' ).terminal;
    var unzip       = require('unzip');
    var _           = require('underscore');

    if (!shell.which('git')) {
        shell.echo('Sorry, this script requires git');
        shell.exit(1);
    }

    // var version = shell.exec('node --version').stdout;
    // clear();

    // console.log(
    //     chalk.yellow(
    //         figlet.textSync('By KD', { horizontalLayout: 'full' })
    //     )
    // );

    // console.log(figlet.textSync('Krypt!', '3-D', {
    //     horizontalLayout: 'default',
    //     verticalLayout: 'default'
    // }));

    // console.log(figlet.textSync('Krypt Master', 'Banner', {
    //     horizontalLayout: 'default',
    //     verticalLayout: 'default'
    // }));

    // console.log(figlet.textSync('Krypt!', '3D-ASCII', {
    //     horizontalLayout: 'default',
    //     verticalLayout: 'default'
    // }));

    // console.log(figlet.textSync('By KD', 'ANSI Shadow', {
    //     horizontalLayout: 'default',
    //     verticalLayout: 'default'
    // }));

    // console.log(figlet.textSync('Krypt!', 'Banner3-D', {
    //     horizontalLayout: 'default',
    //     verticalLayout: 'default'
    // }));

    // console.log(figlet.textSync('Krypt Master', 'Big', {
    //     horizontalLayout: 'default',
    //     verticalLayout: 'default'
    // }));

    // console.log(figlet.textSync('Krypt!', 'DOS Rebel', {
    //     horizontalLayout: 'default',
    //     verticalLayout: 'default'
    // }));

    // console.log(figlet.textSync('Krypt!', 'Delta Corps Priest 1', {
    //     horizontalLayout: 'default',
    //     verticalLayout: 'default'
    // }));

    // console.log(figlet.textSync('Krypt Master', {
    //     horizontalLayout: 'fitted',
    //     verticalLayout: 'default',
    //     kerning: 'full'
    // }));

    // console.log(figlet.textSync('KD', {
    //     font: 'Ghost',
    //     horizontalLayout: 'universal smushing',
    //     verticalLayout: 'default'
    // }));

    /*CFonts.say('Krypt Master', {
        font: 'simple',
        align: 'left',
        colors: ['yellow','red'],
        background: '',
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
        maxLength: '0'
    });

    CFonts.say('ONE KRYPT TO RULE THEM ALL', {
        font: 'chrome',
        align: 'center',
        colors: ['green','red'],
        background: '',
        letterSpacing: 1,
        lineHeight: 1,
        space: false,
        maxLength: '0'
    });

    CFonts.say('By KD', {
        font: 'simple',
        align: 'center',
        colors: ['magenta'],
        background: '',
        letterSpacing: 1,
        lineHeight: 1,
        space: true,
        maxLength: '0'
    });*/

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


    function init(callback) {
    var questions = [
        {
            name: 'name',
            type: 'input',
            message: 'name',
            default: 'kryptapp'
        },
        {
            name: 'version',
            type: 'input',
            message: 'version',
            default: '0.0.1'
        },
        {
            name: 'description',
            type: 'input',
            message: 'description',
            default: 'kryptapp description'
        },
        {
            name: 'repository',
            type: 'input',
            message: 'repository'
        },
        {
            name: 'author',
            type: 'input',
            message: 'author'
        },
        {
            name: 'license',
            type: 'input',
            message: 'license'
        },

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
        // {
        //     type: 'list',
        //     name: 'list',
        //     message: 'Select one of the following',
        //     choices: ['mern', 'express-sails' ],
        //     default: 'mern'
        // },
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

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    if(req_command.data == undefined){
        console.log("seek help");
    }

    if(req_command.data == 'init'){

        console.log(figlet.textSync('Krypt!', 'Big Money-ne', {
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }));

        console.log(figlet.textSync('By KD', 'Calvin S', {
            horizontalLayout: 'default',
            verticalLayout: 'default'
        }));

        init(function(info) {

            // console.log(info);
            var pkg = {
                name: info.name,
                version: info.version,
                description: info.description,
                main: 'app.js',
                scripts: {
                    start: 'node ./bin/www'
                },
                repository: info.repository,
                author: info.author,
                license: info.license,
                dependencies: {
                    'babel-core': '^6.26.0',
                    'babel-polyfill': '^6.26.0',
                    'babel-preset-es2015': '^6.24.1',
                    'babel-preset-stage-0': '^6.24.1',
                    'bluebird': '^3.5.0',
                    'body-parser': '~1.17.1',
                    'cookie-parser': '~1.4.3',
                    'debug': '~2.6.3',
                    'express': '~4.15.2',
                    'mongoose': '^4.11.8',
                    'morgan': '~1.8.1',
                    'serve-favicon': '~2.4.2',
                    'winston': '^2.3.1'
                },
                'devDependencies': {
                    'babel-eslint': '^7.2.3',
                    'eslint': '^4.5.0',
                    'eslint-config-airbnb': '^15.1.0',
                    'eslint-plugin-import': '^2.7.0',
                    'eslint-plugin-jsx-a11y': '^6.0.2',
                    'eslint-plugin-mocha': '^4.11.0',
                    'eslint-plugin-react': '^7.3.0'
                }
            };
            // var writeStream = fs.createWriteStream("package1.json"); //create
            // writeStream.write(info); // write
            // writeStream.end();

            function readData(err, data) {
                // console.log(data);
            }

            fs.readFile('package1.json', 'utf8', readData);


            // var status = new Spinner('Authenticating you, please wait...');
            // status.start();
            // status.stop();

            shell.exec('mkdir ' + info.name, {silent:true} ).stdout;
            var repo = shell.exec('npm root -g', {silent:true} ).stdout;
            var src = repo.slice(0,-1) + '/krypt-master/template/';
            var current_path = process.cwd() + '/' + info.name + '/';

            // if(fs.createReadStream(src).pipe(unzip.Extract({ path: current_path }))){
                // fs.writeFile(current_path + 'package.json' , JSON.stringify(pkg, null, 4) + '\n', function(err){
                //     if(err){
                //         console.log(err);
                //     };
                // })

                // console.log("all done");
                // console.log("cd "+info.name+ " && npm install");
            // } else {
            //     console.log('please try again');
            // }

            // fse.copy(src, current_path, err => {
            //     if (err) return console.error(err);
            //     console.log('success!');
            // });

            fse.copy(src, current_path, err => {
                if (err) return console.error(err);
                fs.writeFile(current_path + 'package.json', JSON.stringify(pkg, null, 4) + '\n', function(err){
                    if(err) return console.log(err);
                    let data = fs.readFileSync( current_path + 'bin/www' ).toString().split('\n');
                    data.splice(17, 0, "const debug = require('debug')('" + info.name + ":server');");
                    var text = data.join("\n");

                    fs.writeFile( current_path + 'bin/www', text, function(err) {
                        if (err) return console.log(err);
                        console.log("all done");
                        console.log("cd "+info.name+ " && npm install");
                    });
                });
            });

            // if(info.list == 'express-sails'){
            //     shell.echo('please wait...');
            //     var repo = shell.exec('git clone -b dev https://github.com/kamalkdolikay/express-koder.git',{silent:true}).stdout;
            //     shell.echo('All done.. cd express-koder && npm i');
            // } else if(info.list == 'mern'){
            //     shell.echo('please wait...');
            //     var repo1 = shell.exec('git clone https://github.com/kamalkdolikay/kadmus-mern.git',{silent:true}).stdout;
            //     shell.echo('All done.. cd express-koder && npm i');
            //     shell.echo('npm run bundle && npm start');
            // }
        });
    }

    if(req_command.data == 'generate'){
        if(_.has(req_command, 'g_type')){
            var generateDir = process.cwd() + '/api/';

            if(req_command.g_type == 'model') req_command.generatetype = ''; else req_command.generatetype = req_command.g_type;

            var userGeneratefile = capitalize(req_command.g_value) + capitalize(req_command.generatetype);
            var generateFile = generateDir + req_command.g_path + '/' + userGeneratefile + '.js';

            if( fs.existsSync(generateFile) ){
                console.log(req_command.generatetype + " " + req_command.g_value + " already exists");
            } else {
                var html = '/**'+'\n';
                html += '  * ' + userGeneratefile +'\n';
                html += '  *'+'\n';
                html += '  * @author      :: Krypt'+'\n';
                html += '  * @description :: Server-side logic for managing users'+'\n';
                html += '  * @email       :: kamaldolikay@gmail.com'+'\n';
                html += '  */'+'\n';
                html += '\n\n';
                html += 'module.exports = {'+'\n\n';
                html += '};';

                fs.writeFile(generateFile, html, function(err){
                    if(err){
                        console.log(err);
                    } else {
                        // var i = 1;
                        // fs.readFileSync(process.cwd()+'/config/routes.js').toString().split('\n').forEach(function (line) {
                        //     if(i == 2){
                        //         console.log(line);
                        //     }
                        //     i++;
                        // });
                        if(req_command.g_type == 'controller'){
                            var data = fs.readFileSync( process.cwd() + '/config/routes.js' ).toString().split('\n');
                            data.splice(2, 0, "\nimport " + userGeneratefile + " from '../api/controllers/" + userGeneratefile +"';");
                            var text = data.join("\n");

                            fs.writeFile( process.cwd() + '/config/routes.js', text, function(err) {
                                if (err) return console.log(err);
                                console.log("created    api/" + req_command.g_path + "/" + userGeneratefile + ".js");
                                console.log("updated    config/routes.js");
                            });
                        } else {
                            console.log("created    api/" + req_command.g_path + "/" + userGeneratefile + ".js");
                        }
                    }
                });
            }
        } else {
            console.log(req_command.result);
        }
    }

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