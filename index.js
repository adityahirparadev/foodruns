import app from "./config/app.js";
import path from 'path';
import { fileURLToPath } from 'url';
import mongodbConnection from "./database/mongodb.connection.js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
mongodbConnection();


// const { PORT } = process.env;
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server run at port : ${PORT}`);
})