#!/usr/bin/env node

var program = require('commander');
var azure   = require('azure');
var config  = require('./config');

program.version('0.0.1')
	.parse(process.argv);

var loop = setInterval(function() {
		var serviceBus = azure.createServiceBusService(config.namespace, config.accessKey, config.issuer);
		serviceBus.receiveQueueMessage(config.queue, function(error, serverMessage){
			if(!error){
				console.log(serverMessage.body);
			}
		});
	   }, 10);

