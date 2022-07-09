const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// default response for any other request (not found) KEEP LAST 
app.use((req, res) => {
    res.status(404).end();
});

// start express.js sever on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});