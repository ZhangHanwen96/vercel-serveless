
import exress from 'express'
import cors from 'cors';


const app = exress();
app.use(cors());
app.use(exress.json());
app.use(exress.urlencoded({ extended: true }));

app.get('/ping', (_, res) => {
    res.send('ping ping pong!')
});

app.get('/hello', (_, res) => {
    res.send('Hello there!')
});
