
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
*🤡 SL Adult video downloader 🤡*
‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌
┌─⊷ *XVIDEO DL*
▢ .xvideo (n) (l)
▢ .xnxx (n) (l)
└───────────⦁

┌─⊷ *OWNER*
▢ .addprem <@tag>
▢ .banchat
▢ .ban @user
▢ .delexpired
▢ .delprem @user
▢ .join <link>
▢ .restart
▢ .unbanchat
▢ .unban @user
▢ .update
└───────────⦁

🧩 *Use the commands with the prefix* \`\`\`${usedPrefix}\`\`\`

https://chat.whatsapp.com/HnXMFgC8QNSBsNtiM6mAND

© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀɴᴅᴜɴ ᴍɪʜɪʀᴀɴɢᴀ
`
    /*let pp = './Guru.jpg'
    conn.sendButton(m.chat, m2, '▢ ᴳᵁᴿᵁ  ┃ ᴮᴼᵀ\n▢ Follow on Instagram\nhttps://www.instagram.com/asli_guru69\n', pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Groups', `${usedPrefix}gpguru`]
    ],m, rpyt) */
    conn.sendMessage(m.chat,{text: m2}, m.sender)
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['list'] 

export default handler
