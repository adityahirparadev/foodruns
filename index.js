import app from "./config/app.js";

const { PORT } = process.env;
app.listen(PORT, () => {
    console.log(`Server run at port : ${PORT}`);
})