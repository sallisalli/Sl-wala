let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = './Saduwa.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `╭───❮ *𝙱𝙾𝚃 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}xnxx <name>_
│ _${usedPrefix}xnxxdl <link>_
│ _${usedPrefix}xvideos <name>_
│ _${usedPrefix}xvideos <link>_
│ _${usedPrefix}script_
│ _${usedPrefix}runtime_
╰─────────────⦁

╭───❮ *𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}autoadmin_
│ _${usedPrefix}left_
│ _${usedPrefix}banchat_
│ _${usedPrefix}unbanchat_
│ _${usedPrefix}ban_
│ _${usedPrefix}unban_
│ _${usedPrefix}banlist_
│ _${usedPrefix}blocklist_
│ _${usedPrefix}join <link>_
│ _${usedPrefix}update_ 
│ _${usedPrefix}restart_
│ _${usedPrefix}setppbot_
│ _${usedPrefix}setprefix_
│ _${usedPrefix}resetprefix_
│ _${usedPrefix}getfile_
│ _${usedPrefix}getplugin_
╰─────────────⦁

╭───❮  *SL Adult Video DL* ❯
│https://chat.whatsapp.com/HnXMFgC8QNSBsNtiM6mAND
│
│© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀɴᴅᴜɴ ᴍɪʜɪʀᴀɴɢᴀ
╰────────────⦁`  
conn.sendFile(m.chat, pp, './Saduwa.jpg', lkr, m, false, { mentions: [who] })
m.react('📃')
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['allmenu', 'menu'] 

export default handler
