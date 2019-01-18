const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('message', message => {
    
     	//AJAX REQUEST
	    $.ajax({
	                type : 'GET',
	                url  : 'https://api.torn.com/user/',
	            }).done(function(data){
	                message.channel.send(data.rank);
	            }).fail(function(data){
	                alert(data);
	            });   
    
});

client.login(config.token);
