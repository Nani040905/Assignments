import exp from 'express'
import { userApp } from './APIS/userAPI.js'
import { productApp } from './APIS/productAPI.js'

const app=exp()

app.listen(3000,()=>console.log("HTTP server is running on port 3000"))

app.use(exp.json())

app.use('/user-api',userApp)

app.use('/product-api',productApp)