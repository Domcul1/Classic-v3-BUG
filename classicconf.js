const fs = require('fs-extra')
if (fs.existsSync('.env') require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jastinmtewa@yahoo.com"
global.location="Morogoro,Tanzania."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Pakistan";
global.github=process.env.GITHUB|| "https://github.com/wasixd/WASI-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/wasixd/WASI-MD/blob/main/lib/assets/suhail.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923192173398" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923192173398";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923135673658,923192173398";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923135673658,923192173398";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923135673658,923192173398";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://myqr-43bb863fa5eb.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "{"noiseKey":{"private":{"type":"Buffer","data":"yLyIvzRPa7X4LDA0AnBdwuAm3rpxdBdUq8ybIZCfOWU="},"public":{"type":"Buffer","data":"BPve6R72arFYL+pGSvy/tGxpCL2oW4UcGcaYyRWmsEY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"gPxufXcAcQ5EkyMoo55f5ykGZ28eTe2SDI+dTHxTcmE="},"public":{"type":"Buffer","data":"0SQuzJDWeXBFnJ2VOubGz3gnDbwE7ou0FWh7u2yueiY="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"6JQB0doDoE3vvsNZinO+/0yphrxlwOnh7tNsY4/2TEk="},"public":{"type":"Buffer","data":"IRpkovo0WrDy5T3dboHnXjWxuG/Clkp+yxr00WTj9lY="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"2Kzv8Y9+qi5McDVvMkehWVU/AZFnYyfRMH1O5dm8J3Q="},"public":{"type":"Buffer","data":"4sWxARUMOzX+ufl8UfNZsAr5+yPrDTmwqDxqfXzjOiE="}},"signature":{"type":"Buffer","data":"dprHhdSnL5rn9Zmu0ZBccI3/SuaRq3nbf89qZEeKcDNdykaZBc33iQwiy3Ryto6xFWM0FdxNkMDzebB5ygyeAQ=="},"keyId":1},"registrationId":7,"advSecretKey":"WMO6qEZS9R1MZElk3JlrSN5G8MGGO8z8D8t8OkrVvUM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"WmDXP_lARP66D871J0Q5fw","phoneId":"57de743e-fac3-4c9f-8e1b-e159c21abecd","identityId":{"type":"Buffer","data":"g7HjakveX0a4h45mzDEvhhwuTXs="},"registered":true,"backupToken":{"type":"Buffer","data":"1tzbZIScCeViD9hxgiORG6aaYkw="},"registration":{},"pairingCode":"RNR66623","me":{"id":"2347068041303:87@s.whatsapp.net","lid":"115874056904878:87@lid"},"account":{"details":"COGhvbMCEKP9oLYGGAwgACgA","accountSignatureKey":"yH52riCpETfURx7mBgA2eDAuU6Yfc7tE6Yqh3XzwcmE=","accountSignature":"IKG1csONo4NVqTwY1oAU7P+2mGQrUq3O+ubY9aDaDtKnEvGfN0YtZcXu3icalJWvn90ZMSjsog0ZyXgTWoCaDA==","deviceSignature":"EUaDaptV2/f3cvbusJGR6sRdq/teofAzzYIIqnDREO14ZvRexE1hLgl8RqFiwO4jc43BIJBUMsSAFq7bFWTXCA=="},"signalIdentities":[{"identifier":{"name":"2347068041303:87@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bch+dq4gqRE31Ece5gYANngwLlOmH3O7ROmKod188HJh"}}],"platform":"android","lastAccountSyncTimestamp":1724399271,"myAppStateKeyId":"AAAAAGuD"}=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venocyber-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.0.0",
  caption : process.env.CAPTION || "𝙵𝙸𝙻𝙴 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ＷＡＳＩ ＭＤ🚩" , // ```『 ²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ-ᴍᴅ 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@JASTINMTEWA-vn9pl"),
 
  author : process.env.PACK_AUTHER|| "𝗪𝗔𝗦𝗜 ",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝗪𝗔𝗦𝗜 𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "It's 𝗜𝗧𝗫𝗫𝗪𝗔𝗦𝗜",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "01",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "WASI",



};

























global.rank = "updated"
global.isMongodb = true ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
