const fs = require("fs");
module.exports.config = {
name: "hi",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Syn",
	description: "hi",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
        var tl = ["Chào bé nha, tôi là Wibu Bot Chúc Bạn Có Một Ngày Tốt Lành <3","Chào bé nha, Tương tác hoặc ăn đấm nè"];
        var rand = tl[Math.floor(Math.random() * tl.length)];
	if (event.body.indexOf("Hi")==0 || (event.body.indexOf("hi")==0)) {
		var msg = {
				body: rand
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}