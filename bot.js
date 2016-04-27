var DiscordClient = require('discord.io');
var bot = new DiscordClient({
    autorun: true,
    email: "", // email
    password: "", // password
	game: "Test test penis test",
    //OR
    token: "MTcyODk1NTAwNDczNzI5MDI0.Cfsc-w.zs2X_njFMZaDbBdocq7usFh-R00"
});

bot.on("message", function(user, userID, channelID, message, rawEvent) {
	console.log(user + " - " + userID);
	console.log("in " + channelID);
	console.log(message);
	console.log("----------");

});

bot.on("presence", function(user, userID, status, rawEvent) {
	/*console.log(user + " is now: " + status);*/
});

bot.on("debug", function(rawEvent) {
	/*console.log(rawEvent)*/ //Logs every event
});

bot.on("disconnected", function() {
	console.log("Bot disconnected");
	/*bot.connect()*/ //Auto reconnect
});



bot.on('ready', function() {
    console.log(bot.username + " - (" + bot.id + ")");
	require('fs').writeFileSync('./bot.json', JSON.stringify(bot, null, '\t'));

});

function sendFiles(channelID, fileArr, interval) {
	var callback, resArr = [], len = fileArr.length;
	typeof(arguments[2]) === 'function' ? callback = arguments[2] : callback = arguments[3];
	if (typeof(interval) !== 'number') interval = 1000;
	
	function _sendFiles() {
		setTimeout(function() {
			if (fileArr[0]) {
				bot.uploadFile({
					to: channelID,
					file: require('fs').createReadStream(fileArr.shift())
				}, function(res) {
					resArr.push(res);
					if (resArr.length === len) if (typeof(callback) === 'function') callback(resArr);
				});
				_sendFiles();
			}
		}, interval);
	}
	_sendFiles();
}

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    message = message.toLowerCase();
 if (message == "!start" && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1) {
	     bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      var interval = setInterval (function (){
        bot.sendMessage({
          to: channelID,
          message: "Hey Guys! I am here to help you with what ever you need, seeing as Flux hurt herself trying to get some bacon weed I'll be here awhile. So to find out more about me just do **!help**" // message to send
        });
      }, 3600000); // time between each interval in milliseconds
    }  
    // New command starts here
    // Ends here
    else if (message === "!start") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: userID,
          message: "You do not have permission to run this command"      
		  });
    }
    // Ends here
    else if (message.indexOf("!info ") > -1){
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: userID,
          message: " Bureau News!  \n \n- Patch 1.0.6 is in  testing! Want to Get it Early?! Follow the link here: http://bit.ly/1OZc7UQ \n\nMissed the Dev Hang out a Few Days Back?! No Worries You can find the Transcript & Video Here: http://bit.ly/209e7Vc  \n \n" // message to send
		});
    }
    // New command starts here
   else if (message === "!help") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: userID,
          message: "Hi I'm Juicebot, here are the commands I respond to! (Note All Comands **Need** a ! before it.)\n________________________________________\n\n- help - Provides bot comands via pm\n- mhelp - Forces help into main chat\n- info - Bscotch Community Updates\n- beta - Info on patch testing beta\n- alert - Copy Paste For forum alert\n- 2p - Copy Paste For Crashlands Multiplayer Question\n- wasd - Copy Paste For Alt. Crashlands Controls\n- key - Copy Paste For Crashlands Key Fix\n- howget - Copy Paste For Players Who Can't Find Items\n- whereis - Copy Paste For Players Who Can't Find NPCs\n"
      });
    }
    // Ends here
else if (message == "!stop" && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1) {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
	  bot.disconnect({
      });
    }
	
else if (message == "!stop" && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("153748525283278848") > -1) {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
	  bot.disconnect({
      });
    }
    // Ends here	
    else if (message === "!stop") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: userID,
          message: "You do not have permission to run this command"      
		  });
    }
    // Ends here
else if (message == "!mhelp" && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1) {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: userID,
          message: "Hi I'm Juicebot, here are the commands I respond to! (Note All Comands **Need** a ! before it.)\n________________________________________\n\n- help - Provides bot comands via pm\n- mhelp - Forces help into main chat\n- info - Bscotch Community Updates\n- beta - Info on patch testing beta\n- alert - Copy Paste For forum alert\n- 2p - Copy Paste For Crashlands Multiplayer Question\n- wasd - Copy Paste For Alt. Crashlands Controls\n- key - Copy Paste For Crashlands Key Fix\n- howget - Copy Paste For Players Who Can't Find Items\n- whereis - Copy Paste For Players Who Can't Find NPCs\n- say - Broadcasts a message to all users\n- post - Posts an announcement to #rules-n-stuff"
      });
    }
    // Ends here	
    else if (message === "!mhelp") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: userID,
          message: "You do not have permission to run this command"      
		  });
    }
    // Ends here
else if (message == "!minfo" && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1) {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: channelID,
          message: " Bureau News!  \n \n- Patch 1.0.6 is in  testing! Want to Get it Early?! Follow the link here: http://bit.ly/1OZc7UQ \n\nMissed the Dev Hang out a Few Days Back?! No Worries You can find the Transcript & Video Here: http://bit.ly/209e7Vc  \n \n" // message to send
      });
    }
    // Ends here
    else if (message === "!minfo") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: userID,
          message: "You do not have permission to run this command"      
		  });
    }
    // Ends here
    // Ends here	
else if (message == "how's my mixtape?" && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1) {
      bot.sendMessage({
        to: channelID,
        message: "" + user + ", it's :fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire:"
      });
    }
    // Ends here	
    else if (message.indexOf("my mixtape?") > -1){
      bot.sendMessage({
        to: channelID,
        message: "" + user + ", it's eh..."
      });
    }
    // Ends here	
   else if (message === "!beta") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: userID,
        message: "To learn how help out with the beta please visist this link: \n \n http://bit.ly/1OZc7UQ"
      });
    }
    // Ends here
   else if (message === "!chelp") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: channelID,
        message: "For Crashlands Help Please Visit one of the Following Links they Provided to get Assistance on your Problem! - https://www.reddit.com/r/crashlands - http://crashlands.gamepedia.com/Crashlands_Wiki \n \n*(Please remember* *our mods are here to guide* *the community and make sure* *no one is being a jerk* *They are*  ***NOT*** *here to answer your questions.* *So please be kind to them* *if they don't* *know the answer* *to your* *problem.)* \n \n"
      });
    }
    // Ends here
else if (message == "!forcemsg" && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1) {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: channelID,
          message: "Hey Guys! I am here to help you with what ever you need, seeing as Flux hurt herself trying to get some bacon weed I'll be here awhile. So to find out more about me just do **!help**" // message to send
      });
    }
    // Ends here
    else if (message === "!forcemsg") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: userID,
          message: "You do not have permission to run this command"      
		  });
    }
    // Ends here
   else if (message === "!alert") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: channelID,
          message: "Please see the BIG BOLD NOTE AT THE TOP OF THE FORUMS. For ease I've copy/pasted it for you. \n\nALERT: Posting has been temporarily disabled. The moderators havee been completely overwhelmed by the burst of activity from the Crashlands launch, especially because the new users are unfamiliar with the rules (and need a lot of moderating). So we (the developers) are giving them a break. Please remember that this is a community, and the moderators are real people volunteering their time. Search before you ask questions (your question is almost definitely already answered somewhere in here). If you havee unanswered questions, head over to the Crashlands subreddit, check out the FAQ, read the manual, and remember that Crashlands is about exploration and adventure -- you can probably find your own answers! \n \nLinks are active in the original. Just head to the board index and it should be right in front of you. Thanks."
      });
    }
    // Ends here
   else if (message === "!key") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: channelID,
          message: "Key *Fix* \n\nIt's been noted with a lot of people. One of the questions that's frustrating everyone. Just clear your cache, reboot your device, restart Crashlands, and resync your game with the server (use Main Menu > Saves > Sync Saves a couple times). There's a minor patch that MIGHT fix your bug. If not a day or two an the major patch will be out. Keep an eye out for notifications everywhere as soon as it's on it's way. It won't really interefere too much with the rest of your game, you can continue exploring, bashing things with your pets, and finishing some other side quests and all in the meantime."
      });
    }
    // Ends here
   else if (message === "!wasd") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: channelID,
          message: "We aren’t 100% opposed to ANY of those. Maybe 98%. We believe that Crashlands plays very well using the one-touch control scheme (+ hotkeys). Yes, it is technically possible to make those things work, but Crashlands’ gameplay is built around the current control scheme. It would take a lot of work to break away from the current setup, and that’s dev time we would rather spend adding cool new content and features."
      });
    }
    // Ends here
   else if (message === "!2p") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: channelID,
          message: "Nope! It was designed as a story-based single-player experience, and as a small team, we would rather spend our time creating new games that are designed to havee multiplayer, instead of shoehorning it into a game that wasn’t meant to havee it!"
      });
    }
    // Ends here
   else if (message === "!whereis") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: channelID,
          message: "NPCs need union-mandated lunch breaks too, so maybe they're off getting a snack. Just wander around aimlessly for a while until they come back. If not, maybe they're not where you left them? Check your quest log to see if they've moved and wanted you to follow them. If that fails run a quick search in our custom search engine (http://bit.ly/1L9YnoL. Now if even that fails ask in #crashlands-advice or at /r/Crashlands, as somebody must havee seen where they wandered off too. Pesky NPCs."
      });
    }
    // Ends here
    else if (message === "!howget") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: channelID,
          message: "Items tend to wander off much like our NPCs. Silly items, no worries though. We have a custom search engine built to help you out (http://bit.ly/1L9YnoL) If you can'y find your answer there head over to #crashlands-advice"
      });
    }
    // Ends here
else if (message == "!mod" && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1) {
         bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
	  bot.sendMessage({
        to: userID,
          message: "Hi I'm Juicebot, here are the commands I respond to! (Note All Comands **Need** a ! before it.)\n________________________________________\n\n- help - Provides bot comands via pm\n- mhelp - Forces help into main chat\n- info - Bscotch Community Updates\n- minfo - Forces info into chat\n- beta - Info on patch testing beta\n- mbeta - Forces beta into chat\n- alert - Copy Paste For forum alert\n- 2p - Copy Paste For Crashlands Multiplayer Question\n- wasd - Copy Paste For Alt. Crashlands Controls\n- key - Copy Paste For Crashlands Key Fix\n- howget - Copy Paste For Players Who Can't Find Items\n- whereis - Copy Paste For Players Who Can't Find NPCs\n- forceclosethebot - Closes the bot god forbid he goes haywire\n- timeout @<username> - Forces the user into a mute for 30 min"
      });
    }
    // Ends here
    else if (message === "!mod") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: userID,
          message: "You do not have permission to run this command"      
		  });
    }
    // Ends here
    // Ends here	
	
	
	// Revoked Perms
 else if (message.indexOf("wat") > - 1 && (userID == "149666726588579844")  ){
	} //Revoks Iron's "wat"
	
 else if (message.indexOf("wut") > - 1 && (userID == "149666726588579844")  ){
	} //Revoks Iron's "wat"
	 
else if (message.indexOf("bug", "bugged", "glitch", "error", "glitched", "is broken", "bugs") > - 1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1) {  
    }
	
else if (message.indexOf("bug", "bugged", "glitch", "error", "glitched", "is broken", "bugs") > - 1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("142086080097812480") > -1) {  
    }
	
else if (message.indexOf("bug", "bugged", "glitch", "error", "glitched", "is broken", "bugs") > - 1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("142351911784284160") > -1) {  
    }	

else if (message.indexOf("bug", "bugged", "glitch", "error", "glitched", "is broken", "bugs") > - 1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("153748525283278848") > -1) {  

    }	//cleans up co de
	
//end of revoked
	 
    // Ends here
else if (message == "!search" && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1) {
         bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
	  bot.sendMessage({
        to: channelID,
          message: "Before we assist you please run a search here (http://bit.ly/1L9YnoL) to ensure that your question has not been asked/answered before"      
      });
    }

    else if (message === "!search") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: userID,
          message: "Sorry as of now I can't search for you, but **you** can run a search yourself here (http://bit.ly/1L9YnoL)"      
		  });
    }

 
 else if (message.indexOf("wat") > -1 && message[0] == "w"){
bot.uploadFile({
    to: channelID,
    file: "wat.png",
    filename: "wat.png", //File will be uploaded to Discord as 'fillCIRCLE.png'
    message: "**DID SOMEONE SAY WAT?!**"
});
  
 } 
 
  else if (message.indexOf("wut") > -1 && message[0] == "w"){
bot.uploadFile({
    to: channelID,
    file: "wat.png",
    filename: "wat.png", //File will be uploaded to Discord as 'fillCIRCLE.png'
    message: "**DID SOMEONE SAY WAT?!**"
});
  
 } 

  else if (message.indexOf("league of legends") > -1 && message[0] == "l"){
bot.uploadFile({
    to: channelID,
    file: "league.png",
    filename: "league.png", //File will be uploaded to Discord as 'fillCIRCLE.png'
    message: "*- Love Jordan*"
});
   
  }
		  
  else if (message === "!id") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: userID,
          message: "Your UID is " + userID + ""      
		  });
    }
 
else if (message == "#zuglyff" && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1) {
bot.uploadFile({
    to: channelID,
    file: "zug.gif",
    filename: "zug.gif", //File will be uploaded to Discord as 'fillCIRCLE.png'
	
	});
  
 } 
  
	else if (message == "#zuglyff") {
      bot.sendMessage({
        to: channelID,
          message: "Sorry, but you're not Zug enough for the Zug Lyff."
});
  
 } 

 
else if (message == "void") {
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id}); 
    }
	
else if (message.indexOf("bug", "bugged", "glitch", "error", "glitched", "is broken", "bugs") > - 1) { 
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: channelID,
          message: "Whoops looks like you posted that in the wrong channel @" + user + ". It looks like you're having a bug of some sort so let me help you out!. Head on over to #bugreports and follow the instructions there to squash that pesky bug!"
      });
	  
    }
	
    // Ends here

    // Ends here

    // Ends here	
   else if (message.indexOf("!serverinfo") > -1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("153748525283278848") > -1){ 
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});	
  }
  
      else if (message.indexOf("!mute ") > -1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("153748525283278848") > -1){ 
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
  }
      else if (message.indexOf("!kick ") > -1  && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("153748525283278848") > -1){ 
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
  }

      else if (message.indexOf("!ban ") > -1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("153748525283278848") > -1){ 
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
  }
  
     else if (message.indexOf("!purge ") > -1  && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("153748525283278848") > -1){ 
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
  }
	  //153748525283278848
   else if (message.indexOf("!serverinfo") > -1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1){ 
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});	
  }
  
      else if (message.indexOf("!mute ") > -1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1){ 
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
  }
      else if (message.indexOf("!kick ") > -1  && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1){ 
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
  }

      else if (message.indexOf("!ban ") > -1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1){ 
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
  }
  
     else if (message.indexOf("!purge ") > -1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1){ 
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
	  //153748525283278848
  }
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    var argument = message.replace(/^\D+/g, '');  // create argument variable and remove everything except for numbers in the message.  This will return something like "141319865175769088>"
    argument = argument.substring(0, argument.length -1); // since there is a ">" at the end, this removes it.
     if (message.indexOf("!timeout ") > -1){
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
bot.addToRole({
    server: "120295792266182656",
    user: "" + argument + "",
    role: "141885253970034688"
});
    }
	
if (message.indexOf("!timeout ") > -1){
      var interval = setInterval (function (){
bot.removeFromRole({
    server: "120295792266182656",
    user: "" + argument + "",
    role: "141885253970034688"
        });
      }, 1800000); // time between each interval in milliseconds
    }  

	else if (message.indexOf("http://www.twitch.tv/metapopgaming") > -1){
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
		  to: "66360848485978112",
          message: ""+ user +"'s Twitch Link Removed"
		});
    }
	
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    var argument = message.replace('!post','');  // create argument variable and remove everything except for numbers in the message.  This will return something like "141319865175769088>"
if (message.indexOf("!post") > -1){
	   bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: "146081069664436225",
          message: ""+ argument +""      
		  });
    }

});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    var argument = message.replace('!say',"");  // create argument variable and remove everything except for numbers in the message.  This will return something like "141319865175769088>"
if (message.indexOf("!say") > -1){
	   bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: channelID,
          message: "@everyone " + argument + ""      
		  });
    }

});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    var argument = message.replace('!talk ', '');  // create argument variable and remove everything except for numbers in the message.  This will return something like "141319865175769088>"

if (message.indexOf("!talk") > -1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1 && message[0] == "!"){ 
	   bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: channelID,
          message: argument   
		  });
		  }

else if (message.indexOf("!talk") > -1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("153748525283278848") > -1 && message[0] == "!"){ 
	   bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
      bot.sendMessage({
        to: channelID,
          message: argument   
		  });
		  }

else if (message.indexOf("!talk") > -1)  {
	   bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});     
	 bot.sendMessage({
        to: userID,
          message: "Sorry, but you do not have access to this command"
		  
});
  
 }
		  
});

bot.on('message', function(user, userID, channelID, message, rawEvent) {
    var argument = message.replace('!game ', '');
if (message.indexOf("!game ") > -1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("120296129635024899") > -1 && message[0] == "!"){ 
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
	bot.setPresence({
    game: argument 
	});
  
  }
  
 else if (message.indexOf("!game ") > -1 && bot.servers[bot.serverFromChannel(channelID)].members[userID].roles.indexOf("153748525283278848") > -1){ 
      bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});
	bot.setPresence({
    game: argument 
	});
  
  }
  
if (message === "!game ")  {
	   bot.deleteMessage({
        channel: channelID,
        messageID: rawEvent.d.id});     
	 bot.sendMessage({
        to: userID,
          message: "Sorry, but you do not have access to this command"
   });
  }
});
// Delete Commands fom Python Bot