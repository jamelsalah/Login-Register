const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json())

app.post('/auth', async (req, res) => {
    const { login, pass } = req.body;

    if(login == "james"  &&  pass == "123") {
        res.status(200).send('Login Successful');
    } else {
        res.status(400).send('Incorrect Login or Password');
    }
});

app.post('/register', (req, res) => {
    const { login, pass, pass2, name } = req.body;

    if( login && pass && pass2 && name ) {
        res.status(400).send('Missing fields');
    } else {
        if( pass !== pass2 ) {
            
            res.status(400).send("Different passwords");
        } else {
            res.status(200).send('Register Successful');
        }
    }
});

app.listen(3001, () => console.log('Example app is listening on port 3001.'));