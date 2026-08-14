const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// 1. Serve static files (CSS, images, JS) from public folder
app.use(express.static(path.join(__dirname, 'public')));

// 2. Explicitly send index.html on root '/' request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});