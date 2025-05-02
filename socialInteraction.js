const mongoose = require('mongoose');

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/socialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mesaj şeması
const messageSchema = new mongoose.Schema({
  channelName: String,
  user: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// Kullanıcı durumu şeması
const userStatusSchema = new mongoose.Schema({
  username: String,
  online: Boolean,
  lastSeen: Date,
});

const UserStatus = mongoose.model('UserStatus', userStatusSchema);

class ChatSystem {
  constructor() {
    this.channels = {}; // Geçici bellek (isteğe bağlı)
  }

  // Yeni bir sohbet kanalı oluştur
  async createChannel(channelName) {
    if (!this.channels[channelName]) {
      this.channels[channelName] = [];
      console.log(`Kanal oluşturuldu: ${channelName}`);
    }
  }

  // Mesaj gönder ve veritabanına kaydet
  async sendMessage(channelName, user, message) {
    const newMessage = new Message({ channelName, user, message });
    await newMessage.save();
    console.log(`Mesaj gönderildi: ${message}`);
  }

  // Bir kanaldaki mesajları al
  async getMessages(channelName) {
    return await Message.find({ channelName }).sort({ timestamp: 1 });
  }

  // Kullanıcıyı çevrimiçi yap
  async setUserOnline(username) {
    await UserStatus.findOneAndUpdate(
      { username },
      { online: true, lastSeen: null },
      { upsert: true }
    );
    console.log(`${username} çevrimiçi oldu.`);
  }

  // Kullanıcıyı çevrimdışı yap
  async setUserOffline(username) {
    await UserStatus.findOneAndUpdate(
      { username },
      { online: false, lastSeen: new Date() },
      { upsert: true }
    );
    console.log(`${username} çevrimdışı oldu.`);
  }

  // Çevrimiçi kullanıcıları listele
  async getOnlineUsers() {
    return await UserStatus.find({ online: true }).select('username');
  }
}

module.exports = ChatSystem;