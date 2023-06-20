const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Kullanıcı bulunamadı.' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!(password === user.password)) {
      return res.status(401).json({ message: 'Geçersiz şifre.' });
    }

    // TODO: Generate and send JWT token for authentication

    res.json({ message: 'Başarılı giriş.' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

module.exports = router;
