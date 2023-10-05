const path=require('path')
const express=require('express')
const bodyParser=require('body-parser')
const  sequelize=require('./db_config');

const app = express();



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('views'))

const route=require('./route')
app.use(route)
// sequelize.sync().then(res=>{

        app.listen(3000);
// })
// .catch(err=>console.log(err))