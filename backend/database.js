const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/kevintask", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected Successfully."))
    .catch((err) => console.log(err));
