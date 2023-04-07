const express = require("express");
const mongoose=require("mongoose");
const authRouter=require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const PORT = process.env.PORT || 3000;
const app = express();
const cors=require("cors");
const DB="mongodb+srv://naveenmicro:2002@cluster0.se0wrya.mongodb.net/?retryWrites=true&w=majority"
// app.get("/hi",(req,res)=>{
//     res.send(" jvn bnfj");
// });
app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);
mongoose.connect(DB).then(()=>{
    console.log('connection successful')
}

).catch(e=>{
    console.log(e)
})
app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT} `);
  });
