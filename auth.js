const bcrypt = require('bcrypt');

// Şifre hashleme
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

// Şifre doğrulama
async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}