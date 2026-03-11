const express = require('express');
const dotenv = require('dotenv');
const routeUser = require('./routes/user.route');
dotenv.config()
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', routeUser)

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})