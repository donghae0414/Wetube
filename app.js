//const express = require('express'); // import(find) express file
import express from "express"; // transform to ugly javascript by babel-env
import morgan from "morgan"; // morgan improve loging
import helmet from "helmet"; // for security of nodejs and functionallity
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares"; // sort by alphabet
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";


const app = express(); // make express application

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;