const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const request = require('ajax-request');
//const api = require('./apiRequest.js');

client.on('message', message => {
    if (message.content === '!ping') {
        message.channel.send('Hello Im a bad BOT.');
    }
    /*else if (message.content === `${prefix}newChannel`){
		message.guild.createChannel('new-channel', 'text')
	  .then(console.log)
	  .catch(console.error);
	}*/
	else if (message.content === '!api') {
        //AJAX REQUEST
	    request({
				  url: 'https://api.torn.com/user/135372?selections=profile&key=F1CHZeeZ0AT715RO',
				  method: 'GET',
			}, function(err, res, body) {
				//const json = JSON.parse(body);
				// const block = json['data']['name']; 
			  	// message.channel.send('Block = ' + block);
			  	message.channel.send(body);
		});
    }

});

client.login(config.token);
