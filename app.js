import  express  from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"

const app = express();
dotenv.config({
    path: './.env'
})


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(cookieParser())

const PORT = process.env.PORT || 8000
app.listen(PORT || 8000, () => {
    console.log(`⚙️ Server is running at port : ${PORT}`);
})
// import Routes
import healthCheck from "./routes/healthCheck.route.js"
import characterRoute from "./routes/character.route.js"
app.use(healthCheck)
app.use("/api/v1",characterRoute)
