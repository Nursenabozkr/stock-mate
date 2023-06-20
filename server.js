const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000;

// MongoDB bağlantısı
mongoose.connect('mongodb+srv://nursena:nv12345.@stockmate.apmx0qk.mongodb.net/stockmate', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB bağlantısı başarılı.');
  })
  .catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
  });

// E-posta gönderme için konfigürasyon
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'stockmatecontact@gmail.com', // Gönderici e-posta adresi
    pass: 'uktscpffpzeudjlh' // Gönderici e-posta hesap şifresi
  }
});

// JSON verileri için body-parser kullanımı
app.use(bodyParser.json());

// POST isteği için /api/send-mail endpointi
app.post('/api/send-mail', (req, res) => {
  const { email, subject, message } = req.body;

  // E-posta içeriği oluşturma
  const mailOptions = {
    from: 'stockmatecontact@gmail.com', // Gönderici e-posta adresi
    to: 'nursenaabozkr@gmail.com', // Alıcı e-posta adresi (kendi e-posta adresiniz)
    subject: `[${email}] ${subject}`, // E-posta konusu (gönderenin e-posta adresi ile başlık oluşturuluyor)
    text: message // E-posta içeriği
  };

  // E-posta gönderme işlemi
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('E-posta gönderme hatası:', error);
      res.status(500).send('E-posta gönderme hatası');
    } else {
      console.log('E-posta gönderildi:', info.response);
      res.sendStatus(200);
    }
  });
});






// Depo modeli
const Stock = mongoose.model('stock', {
  stockName: String,
  stockStatus: String,
  stockSupervisor: String,
  stockDescription: String
});

const Product = mongoose.model('products', {
  productName: String,
  productCode: String,
  productGroup: String,
  productSaleAmount: String,
  productPurschareAmount:String,
  productStockName:String,
  productAmount:String,
},'products');
const Person = mongoose.model('person', {
  personName: String,
  personLastName: String,
  personRole: String,
  personMail: String,
  personPhone:String,
  personDescription:String
},'persons');
const Client = mongoose.model('clients', {
  clientName: String,
  clientLastName: String,
  clientMail: String,
  clientPhone:String,
  clientDescription:String
},'clients');
const Operation = mongoose.model('operation', {
  clientName: String,
  operationDescription: String,
  operationType: String,
  operationAmount:String,
  operationPayMethod:String,
  operationPayNote:String
},'operation');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Tüm depoları getiren GET isteği
app.get('/api/stocks', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
//Tüm personeleri getiren liste
app.get('/api/persons', async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
//Tüm ürünleri getiren liste
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
//Tüm müşterileri getiren liste
app.get('/api/clients', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
// Tüm işlemleri getiren liste

app.get('/api/operations', async (req, res) => {
  try {
    const operations = await Operation.find();
    res.json(operations);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
// Silme ve Düzenleme Endpointleri


// İşlem Gider silme endpoint'i
app.delete('/api/operation/:id', async (req, res) => {
  try {
    const operationId = req.params.id;
    await Operation.findByIdAndRemove(operationId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

// İşlem düzenleme endpoint'i
app.put('/api/operation/:id', async (req, res) => {
  try {
    const operationId = req.params.id;
    const updatedOperation = req.body;
    mongoose.Types.ObjectId.isValid(operationId)
    await Operation.findByIdAndUpdate(operationId, updatedOperation);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

/////////////////////////////////////////////////
// Müşteri silme endpoint'i
app.delete('/api/client/:id', async (req, res) => {
  try {
    const clientId = req.params.id;
    await Client.findByIdAndRemove(clientId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

// Müşteri düzenleme endpoint'i
app.put('/api/client/:id', async (req, res) => {
  try {
    const clientId = req.params.id;
    const updatedClient = req.body;
    mongoose.Types.ObjectId.isValid(clientId)
    await Client.findByIdAndUpdate(clientId, updatedClient);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});


/////////////////////////////////////////////////
// Personel silme endpoint'i
app.delete('/api/person/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    await Person.findByIdAndRemove(personId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

// Personel düzenleme endpoint'i
app.put('/api/person/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPerson = req.body;
    mongoose.Types.ObjectId.isValid(personId)
    await Person.findByIdAndUpdate(personId, updatedPerson);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});










/////////////////////////////////////////////////
// Ürün silme endpoint'i
app.delete('/api/product/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndRemove(productId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

// Ürün düzenleme endpoint'i
app.put('/api/product/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = req.body;
    mongoose.Types.ObjectId.isValid(productId)
    await Product.findByIdAndUpdate(productId, updatedProduct);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// Client silme endpoint'i
app.delete('/api/client/:id', async (req, res) => {
  try {
    const clientId = req.params.id;
    await Client.findByIdAndRemove(clientId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

// Client düzenleme endpoint'i
app.put('/api/client/:id', async (req, res) => {
  try {
    const clientId = req.params.id;
    const updatedClient = req.body;
    mongoose.Types.ObjectId.isValid(clientId)
    await Client.findByIdAndUpdate(clientId, updatedClient);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});












//////////////////////////////////////////////
// Depo silme endpoint'i
app.delete('/api/stocks/:id', async (req, res) => {
  try {
    const stockId = req.params.id;
    await Stock.findByIdAndRemove(stockId);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});

// Depo düzenleme endpoint'i
app.put('/api/stocks/:id', async (req, res) => {
  try {
    const stockId = req.params.id;
    const updatedStock = req.body;
    mongoose.Types.ObjectId.isValid(stockId)
    await Stock.findByIdAndUpdate(stockId, updatedStock);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Sunucu hatası');
  }
});


// Sayfa yönlendirmeleri
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
// Router

const registerRouter = require('./routers/register');
app.use('/api/register', registerRouter);

const personRouter = require('./routers/person');
app.use('/api/persons', personRouter);

const loginRouter = require('./routers/login');
app.use('/api/login', loginRouter);

const depoRouter = require('./routers/depo');
app.use('/api/stocks', depoRouter);

const productRouter = require('./routers/product');
app.use('/api/products', productRouter);

const clientRouter = require('./routers/client');
app.use('/api/clients', clientRouter);

const operationRouter = require('./routers/operation');
app.use('/api/operations', operationRouter);



// Sunucu dinlemesi
app.listen(port, function () {
  console.log(`Sunucu ${port} numaralı bağlantı noktasında çalışıyor.`);
});


