//base by DGXeon
//NTEEJ MD




const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: NTEEJ" //ur yt chanel name
global.socialm = "GitHub: NTEEJ MD" //ur github or insta name
global.location = "Zimbabwe, Kwekwe" //ur location

//new
global.botname = 'NTEEJ MD' //ur bot name
global.ownernumber = '263714497545' //ur owner number
global.ownername = 'Nteej' //ur owner name
global.websitex = "https://chat.whatsapp.com/Er6RNNNVWV5LORN9Nr6hL7"
global.wagc = "https://whatsapp.com/channel/0029Vae3GZF9Bb658QgSCl1I"
global.themeemoji = '🪀'
global.wm = "Nteej Tech"
global.botscript = 'https://github.com/Ntee-j01/NTEEJ-MD' //script link
global.packname = "Sticker By"
global.author = "Nteej\n\n+263714497545"
global.creator = "263714497545@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["263714497545"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '27' //set autoblock country code
global.antiforeignnumber = '263' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
