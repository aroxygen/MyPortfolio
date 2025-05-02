// Sosyal Etkileşim: Sohbet ve mesajlaşma
class ChatSystem {
  constructor() {
    this.channels = {};
  }

  createChannel(channelName) {
    if (!this.channels[channelName]) {
      this.channels[channelName] = [];
    }
  }

  sendMessage(channelName, user, message) {
    if (this.channels[channelName]) {
      this.channels[channelName].push({ user, message, timestamp: new Date() });
    }
  }

  getMessages(channelName) {
    return this.channels[channelName] || [];
  }
}

module.exports = ChatSystem;