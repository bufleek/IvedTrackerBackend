import wss from './socket'
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('home')
})

app.listen(process.env.PORT || 8080, () => { console.log("express running on 8080"); });
wss();