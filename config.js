const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ" 


global.devs = "923357433862" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "48459233217";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "48459233217,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_59_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM3LFxuICAgICAgICA4OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDY4LFxuICAgICAgICA0NCxcbiAgICAgICAgODYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDY5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjI2LFxuICAgICAgICA2NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICA3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4MyxcbiAgICAgICAgODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk4LFxuICAgICAgICA0LFxuICAgICAgICA5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MixcbiAgICAgICAgMTI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDkxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMTI1LFxuICAgICAgICAzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk5LFxuICAgICAgICA3MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxZ3hESmN6ZmxZMlQzZGd2L3pXK2xqUk5qeTloUk9mN1BCcCtOMTFHL2ZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ4NDU5MjMzMjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NzgxNkE5Q0JFRTMyRjhBQTM4MjIwNzZDQjk1MDM0MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIwNTYzNjFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0ODQ1OTIzMzIxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkFEMDBBNjlEMjZFNzkyMUMwQUFDQjJGRjg2QzlGRTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDU2MzYxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIktEWjc2SDZFU01pN0dtaHlwbnZSQndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTE5OGUzYTktY2U3Mi00MDQ0LThmY2MtMGNlMzViMzRjYTkzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgNzQsXG4gICAgICAzNSxcbiAgICAgIDI0OCxcbiAgICAgIDE1MSxcbiAgICAgIDEwOSxcbiAgICAgIDkxLFxuICAgICAgNDUsXG4gICAgICAyNSxcbiAgICAgIDE4NCxcbiAgICAgIDEzMixcbiAgICAgIDE5OSxcbiAgICAgIDE3MSxcbiAgICAgIDI1NSxcbiAgICAgIDE2NixcbiAgICAgIDEwNSxcbiAgICAgIDEzNSxcbiAgICAgIDI1MixcbiAgICAgIDM1LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDE2MixcbiAgICAgIDYsXG4gICAgICA1OCxcbiAgICAgIDIwOSxcbiAgICAgIDY4LFxuICAgICAgMTQ2LFxuICAgICAgOTksXG4gICAgICAxMDgsXG4gICAgICAxNTEsXG4gICAgICA5NyxcbiAgICAgIDIzMSxcbiAgICAgIDEyNCxcbiAgICAgIDg5LFxuICAgICAgMTk0LFxuICAgICAgNTcsXG4gICAgICAyNDIsXG4gICAgICAyMjQsXG4gICAgICA2OCxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmpCMzZFQkVLTDlrYlVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJxRUxPQXZHYWxFdCtHemRiWEZjNWp5ZDlwWFF6cldEYXg5MWhYRnJkRlFjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFMR1N6eUxnbS8rOGZ5VnMwekhRWVhVTTl5emgzOWJPenVCd0M0Zzk0Y1lya05vdGVHM04ydERaUDJ5N2loM0JrNEpXWDVMby9QRld3dmdkd2g3TUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1oUWVJaW9tNnh6RDNGcjlBYnRjVHpxbjN3K1laMEFaK0RkVFI0d2lZeHMzNlYzTnZVQTdYVW13a1V6QzkzamNMSHJWWnpvcGlWL0hNa292Q0o2aWhRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDg0NTkyMzMyMTc6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU3MjY1MzUyNjI2MjI3OjE0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkF5ZXNoYSDwn6WwXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0ODQ1OTIzMzIxNzoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDU2MzU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRlRGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGVEYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpcmZJSlRHZjJiaFF0V0dWUzZKSUc1RldpQjRlaCtrNElmNHZlbng5ZjdnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMzOTIwNjM2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMDU2MjU0MzMwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ 』```",
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Itx Ayesha",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
