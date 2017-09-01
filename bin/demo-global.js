#!/usr/bin/env node

var myLibrary = require('../lib/index.js');
var args = process.argv.splice(process.execArgv.length + 2);

if( args[0] == 'init'){
    myLibrary.say({data:args[0]});
}

if( args[0] == undefined){
    myLibrary.say({data:undefined});
}

if( args[0] == 'generate' ){
    if( args[1] == 'model' || args[1] == 'controller' || args[1] == 'services' ){
        if( args[2] !== undefined ){
            myLibrary.say({data:args[0], g_type:args[2]});
        } else {
            myLibrary.say({data:args[0],result:"seek help generate " + args[1]});
        }
    } else {
        myLibrary.say({data:args[0],result:"seek help generate"});
    }
}