import config from '../config.cjs'

let greetedUsers = new Set()

export default {
  name: 'pmwelcome',
  description: 'Auto greet users in private chat',
  category: 'general',
  async execute(sock, m) {

    if (!m.isGroup) {

      const user = m.key.remoteJid

      if (!greetedUsers.has(user)) {
        greetedUsers.add(user)

        await sock.sendMessage(user, {
          text: `👋 Hello!

I'm currently not available right now.

Please wait, I will reply you as soon as possible. 🙏`
        })
      }
    }
  }
}
