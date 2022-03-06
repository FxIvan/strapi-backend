require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Stripe = require('stripe')
const app = express()

const stripe = new Stripe(`${process.env.NODE_API_KEY}`)

app.use(cors())
app.use(express.json())

app.post('/api/pago', async(req,res)=>{

    const { id , amount } = req.body

    const payment = await stripe.paymentIntents.create({
        amount,
        currency:"usd",
        description:'Esta es una descripcion del producto en esta caso la nootbook',
        payment_method:id,
        confirm:true /* lo que hace es confirmar el pago y esto quiero decir que se realizo la compra */
    })

    console.log(payment)

    res.send({message: 'Pago realizo con exito'})
    res.redirect('/api/pago')
})

module.exports = app