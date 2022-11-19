import cors from "cors";

app.use(cors())


fetch('https://fakestoreapi.com/products').then((data)=> {
 console.log(data);
})