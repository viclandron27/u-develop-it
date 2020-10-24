const express = require('express');
const { OPEN_READWRITE } = require('sqlite3');
const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

//starts Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});