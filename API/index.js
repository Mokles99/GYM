const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary')



require('dotenv').config();

const app = express();
const port =5000;



app.listen(port,()=> {
  console.log("Server is runinng on port : ",port)
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(fileUpload());

app.use(cors());
app.use(express.json());


const uri = process.env.MONGO_URL;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
});

/* 
after create our models and routes we require our routes here and use them
*/
const postRoutes = require('./routes/posts');

const products = require('./routes/Product');

const coachs = require('./routes/Coach');





app.use('/posts', postRoutes);
app.use("/api/v1",products);
app.use("/api/v2",coachs)

//app.use("/api/v2",coachs);


