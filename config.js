const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~hT8mmZya#DhxZC_lTGUFLP9X8FFR-AOCfBpgiitGLIIGl7RwClNk", // ඔයාගේ session id එක දාන්න
MONGODB: process.env.MONGODB || "mongodb://mongo:UhARYigGUaPXvFIdQOwjPnrzktsxskIm@mainline.proxy.rlwy.net:23844", // ඔයාගේ mongodb url එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/KjQqQWL7",
BOT_NAME: process.env.BOT_NAME || "MD",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
};
