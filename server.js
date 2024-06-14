import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config() 
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});
console.log(process.env.CLODUINARY_CLIENT_API);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port: ${process.env.PORT}`);
});
