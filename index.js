const express = require('express')

const app = express()
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("."));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'index.html'));
    });

}

app.use(express.static("."));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});




const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('starting at port : ' + PORT)
})