require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt')
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser")
app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser())
app.use(cors());
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_KEY)
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'mail.google.com',
    port: 465,
    secure: true,
    service: 'gmail',

    auth: {
        user: process.env.EMAIL,
        pass: process.env.app_password,
    },
    tls: {
        rejectUnauthorized: false
    }
});

//mongo code
const connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE);
        console.log("connected to mondodb");
    } catch (error) {
        throw error;
    }
};
mongoose.connection.on('disconnected', () => { //if mongodb got disconnected
    console.log("mongodb disconnected");
});


/////----user schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    busname: { type: String },
    destination: { type: String },
    totalprice: { type: Number },
    date: { type: String },
    time: { type: String },
    seats: { type: Number }

});
const User = mongoose.model('User', userSchema);




/////routes----User

app.post('/signup-user', async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const user = await User.findOne({ email: req.body.email })
        console.log(user);
        if (!user) {
            console.log(user);
            const newperson = new User(
                { ...req.body, password: hash }
            );
            try {

                const saveduser = await newperson.save();
                res.status(200).json(saveduser)

            } catch (err) {
                console.log(err);
            }
        }
        else {

            res.status(200).json(0)
        }
    }
    catch (err) {
        console.log(err);
    }

});

app.post('/login-user', async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email })
        console.log(user);
        // console.log(user.password);
        // console.log(req.body.password);
        if (user === null) {
            res.status(200).json(0)  //incorrect email
        } else {
            let isPasswordCorrect
            isPasswordCorrect = await bcrypt.compare(req.body.password[0], user.password);
            if (isPasswordCorrect) {
                res.status(200).json(user)  //correct
            }
            else
                res.status(200).json(-1)  //incorrect password
        }
    } catch (err) {
        console.log(err);
        res.status(200).json("error came")

    }
})
app.post("/finduser", async (req, res) => {
    const emaily = req.body.email
    console.log(emaily);
    try {
        const workers = await User.findOne({ email: emaily });
        console.log(workers);
        res.status(200).json(workers)
    } catch (err) {
        return next(err);
    }

})



///------worker schema

const workerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    phone: { type: Number },
    work: { type: String },
    date: { type: String },
    seats: { type: Number },
    time: { type: String },
    amount: { type: Number },
    photo: { type: String },



});
const Worker = mongoose.model('Worker', workerSchema);



//////routes---worker

app.post('/carrers/signup-worker', async (req, res) => {

    try {
        const worker = await Worker.findOne({ email: req.body.email })
        if (worker == null) {
            const newworker = new Worker(
                { ...req.body }
            );
            try {
                // console.log(newworker);


                const savedworker = await newworker.save();
                res.status(200).json(1)

            } catch (err) {
                console.log(err);
            }
        }
        else {

            res.status(200).json(0)
        }
    }
    catch (err) {
        console.log(err);
    }

})
app.post("/findbyservice", async (req, res) => {
    const work = req.body.work //sorting according to service


    try {
        const workers = await Worker.find({ work: work });
        // console.log(workers);
        res.status(200).json(workers)
    } catch (err) {
        return next(err);
    }

})



app.put("/book-worker", async (req, res) => {
    console.log(req.body);
    const workerflight = await Worker.findOne({ phone: req.body.number })
    console.log(workerflight);
    const userflight = await User.findOne({ email: req.body.email })
    console.log(userflight);
    let w = workerflight.seats - req.body.seat
    await Worker.findByIdAndUpdate(workerflight._id, { $set: { seats: w } }, { new: true });
    await User.findByIdAndUpdate(userflight._id, { $set: { seats: req.body.seat, date: req.body.date, time: req.body.time, totalprice: req.body.price, busname: req.body.name, destination: req.body.work } }, { new: true });


    // for Worker
    var mailOptions = {
        from: process.env.EMAIL,
        to: req.body.email,//email to be sended
        subject: "Regarding Booking",
        html: `<div className="outer-flight-div" style='max-width: 100vw;'><div className="flight-section" style='width:60%;background-color: blue;margin:auto;@media screen and (max-width:640px) {.flight-section{width:80%;}}'><h1 style='text-align: center;margin-top: 2rem;padding-top:4rem;@media screen and (max-width:640px) {h1{text-align: center;margin-top: 2rem;padding-top:3rem;}}'>Confirmed Ticket</h1><p style='margin-top: 2rem;text-align: center;font-size: 1.2rem;font-weight: 600;@media screen and (max-width:640px) { .flight-section p{margin:1.2rem}}'>Bus Name: <span style='color:#0b1560;'>${req.body.custname} ${req.body.custlname}</span></p><p style='margin-top: 2rem;text-align: center;font-size: 1.2rem;font-weight: 600;@media screen and (max-width:640px) { .flight-section p{margin:1.2rem}}'>Bus Number: <span style='color:#0b1560;'>${req.body.number}</span></p><p style='margin-top: 2rem;text-align: center;font-size: 1.2rem;font-weight: 600;@media screen and (max-width:640px) { .flight-section p{margin:1.2rem}}'>From: <span style='color:#0b1560;'>Dehradun to ${req.body.work}</span></p><p style='margin-top: 2rem;text-align: center;font-size: 1.2rem;font-weight: 600;@media screen and (max-width:640px) { .flight-section p{margin:1.2rem}}'>Time: <span style='color:#0b1560;'>${req.body.time}</span></p><p style='margin-top: 2rem;text-align: center;font-size: 1.2rem;font-weight: 600;@media screen and (max-width:640px) { .flight-section p{margin:1.2rem}}'>Date: <span style='color:#0b1560;'>${req.body.date}</span></p><p style='margin-top: 2rem;text-align: center;font-size: 1.2rem;font-weight: 600;@media screen and (max-width:640px) { .flight-section p{margin:1.2rem}}'>Total seats: <span style='color:#0b1560;'>${req.body.seat}</span></p><p style='margin-top: 2rem;text-align: center;font-size: 1.2rem;font-weight: 600;@media screen and (max-width:640px) { .flight-section p{margin:1.2rem}}'>Total price: <span style='color:#0b1560;'>${req.body.price}</span></p></div></div></div>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });





})
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    connect();
    console.log(`Listening on port ${PORT}`)
})
