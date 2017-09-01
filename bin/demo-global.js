#!/usr/bin/env node
var fs          = require("fs");

var myLibrary = require('../lib/index.js');
var args = process.argv.splice(process.execArgv.length + 2);

if( args[0] == 'init'){
    myLibrary.say({data:args[0]});
}

if( args[0] == undefined){
    myLibrary.say({data:undefined});
}

if( args[0] == 'generate' ){
    if (fs.existsSync(process.cwd()+'/.kryptmaster')) {
        if( args[1] == 'model' || args[1] == 'controller' || args[1] == 'service' ){
            if( args[2] !== undefined ){
                myLibrary.say({data:args[0], g_path:args[1]+'s', g_type:args[1], g_value:args[2]});
            } else {
                myLibrary.say({data:args[0],result:"seek help generate " + args[1]});
            }
        } else {
            myLibrary.say({data:args[0],result:"seek help generate"});
        }
    } else {
        console.log("You have to be inside an Krypt CLI project in order to use the generate command.");
    }
}