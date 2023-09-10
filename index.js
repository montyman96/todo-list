import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));

const items = [];
const workItems = [];

app.get("/", (req, res) => {
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayName = days[today.getDay()];
    const monthName = months[today.getMonth()];
    const dayOfMonth = today.getDate();
    const formattedDate = `${dayName}, ${monthName} ${dayOfMonth}`;
    res.render("index.ejs", { formattedDate: formattedDate, items: items});
});

app.post("/", (req, res) => {
    const newItem = req.body.newItem;
    if (newItem) {
        items.push(newItem);
    }
    res.redirect("/");
});

app.get("/work", (req, res) => {
    res.render("work.ejs", { items: workItems});
});

app.post("/work", (req, res) => {
    const newItem = req.body.newItem;
    if (newItem) {
        workItems.push(newItem);
    }
    res.redirect("/work");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});