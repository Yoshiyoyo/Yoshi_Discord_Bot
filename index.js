//import discord.js
const Discord=require('discord.js')
//Create instance of discord 
const bot=new Discord.Client();

//TOKEN
const token='NDA1Mzg5NDQ2OTMwODkwNzUy.DUjsrQ.ZAY5dEhGht6eUc-4GFsPTJ-B3Hs';

//Entry message
//bot.on('ready', () => {
  //  console.log('Hello World!');
//});

bot.on('ready',()=> {
	console.log('Hello World!');
});
bot.on('message',message => {
	if (message.author.bot)
		return;
	if (message.content.indexOf('!')===0)
	{
		if (message.content.indexOf('l')===1)
		{
			var text=message.content.substring(1);
			var length=text.length;
			message.reply("The length of the message is "+length);
		}
		else if (message.content.substring(1,6)=="clear")
		{
			//Check Permissions
			if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES"))
			{
				message.channel.sendMessage("No can do");
				return;
			}
			else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES"))
			{
				message.channel.sendMessage("Can't do that either");
				return;
			}
			else
			{
				var format=/\d/;
				var amt=message.content.match(format);
				var secondary=messages.before(message).limit(1);
				for (i=0;i<1;i++)
				{
					
					secondary.delete();
					secondary=message.before;
				}
			//	message.channel.bulkDelete();
				message.channel.sendMessage("deleted "+amt+" messages.");
				return;
			}
		}
		/*else if (message.content.substring(1,4)=="rps")
		{
			message.reply("RPS intiiated");
			var choice=Math.floor(Math.random()*4);
			switch(choice) //figure out bot's RPS
			{
				case 0:
					choice="rock";
					break;
				case 1:
					choice="scissors";
					break;
				case 2:
					choice="paper";
					break;
			}
			bot.on('message',message2=> {
				if (message2.author==message.author&&message2.content.indexOf('!')==0) //take user input
				{
				}
			}
			
		}*/
	}
});

bot.login(token);