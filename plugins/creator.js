let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Gwa gak nerima save contact
• Gwa berhak tak membalas cht
• Spam/menggunakan kata kotor ga gw respon
• Selain tenteang bot no respon
• Jangan Telp Asw`

//------------ BIO
let ppown = 'https://i.pinimg.com/originals/e9/d5/46/e9d5466eed88731e3dd4211d2cc89c9b.jpg'
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : Marxell
${htjava} *✉️ Nama RL* : Ya itu
${htjava} *♂️ Gender* : Berbatang
${htjava} *🕋 Agama* : Private
${htjava} *⏰ Tanggal lahir* : 248
${htjava} *🎨 Umur* : -
${htjava} *🧮 Kelas* : -
${htjava} *🧩 Hobby* : Belajar Ngoding, Futsal dll
${htjava} *💬 Sifat* : Baik, Agak sibuk
${htjava} *🗺️ Tinggal* : Indonesia - JawaTimur - Madiun
${htjava} *❤️ Suka* : Kucing dan Waifu
${htjava} *💔 Benci* : User kont
•·––––––––––––––––––––––––––·•
${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *🇫  ғᴀᴄᴇʙᴏᴏᴋ* : Fay Cat's Kun
${htjava} *🐈 ɢɪᴛʜᴜʙ:* ${sgh}
•·––––––––––––––––––––––––––·•
`
  let teks = 'Pilih dibawah Ini sesuaikan kebutuhan!'
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	    {title: "👻 • Nomor", rowId: ".owner nomor"},
	{title: "👻 • Biodata", rowId: ".owner bio"},
	{title: "🌱 • Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT –––––––·•`,
	rows: [
	    {title: "💎 • Donasi", rowId: ".owner nomor"},
	{title: "💎 • Sewa", rowId: ".sewa"},
	{title: "💎 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER GW* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creaor']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
