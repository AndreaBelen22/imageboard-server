const express = require("express");
const PORT = 4000;
const app = express();
const jsonParser = express.json();

app.use(jsonParser);

const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");

app.use("/users", userRouter);
app.use("/images", imageRouter);

app.listen(PORT, () => console.log(`I'm running in port: ${PORT}`));
