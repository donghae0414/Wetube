//const express = require('express'); // import(find) express file
import express from "express"; // transform to ugly javascript by babel-env
import morgan from "morgan"; // morgan improve loging
import helmet from "helmet"; // for security of nodejs and functionallity
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express(); // make express application

const handleHome = (req, res) => res.send('Hello from home');
const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app;