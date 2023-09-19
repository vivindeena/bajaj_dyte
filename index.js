const express = require("express")

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bfhl = require("./routes/bfhl");

app.use("/bfhl", bfhl);

app.listen(3000, ()=>{
    console.log(`listening on port ${3000}`);
});