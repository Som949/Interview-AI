import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./src/db/db.js";
import app from "./src/app.js";

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});
