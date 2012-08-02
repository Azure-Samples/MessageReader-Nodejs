#!/usr/bin/env node

var program = require('commander');
var azure = require('azure');

var namespace = '<sb-namespace>';
var issuer = '<sb-issuer>';
var accessKey = '<sb-access-key>';
var queue = '<sb-queue-name>';

program.version('0.0.1')
	.parse(process.argv);

var loop = setInterval(function() {
		var serviceBus = azure.createServiceBusService(namespace, accessKey, issuer);
		serviceBus.receiveQueueMessage(queue, function(error, serverMessage){
			if(!error){
				console.log(serverMessage.body);
			}
		});
	   }, 10);

