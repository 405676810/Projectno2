// Handle uncaught exceptions and unhandled rejections
process.on('uncaughtException', (err) => {
    console.error('There was an uncaught error:', err);
    process.exit(1); // Exit the process to avoid undefined behavior
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

console.log('This is the correct server.js file!');
console.log('Starting server.js...');

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize Express app
const app = express();
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data

// Serve static files (e.g., CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for handling signup
app.post('/signup', (req, res) => {
    console.log('Received a signup request'); // Debugging log
    const { email, username } = req.body;

    // Check if email and username are provided
    if (!email || !username) {
        console.log('Email or username not provided'); // Debugging log
        return res.status(400).send('Email and username are required.');
    }

    console.log(`User signed up with email: ${email} and username: ${username}`);

    // Redirect the user to the account page
    res.redirect(`/account?username=${encodeURIComponent(username)}`);
});

// Endpoint for the account page
app.get('/account', (req, res) => {
    const { username } = req.query;

    if (!username) {
        return res.status(400).send('Username is required to access the account page.');
    }

    // Render the account page with the user's username
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome, ${username}</title>
            <link rel="stylesheet" href="/css/account.css"> <!-- Link to your CSS file -->
        </head>
        <body>
            <h1>Welcome to your account, ${username}!</h1>
            <p>This is your account page. Customize it as needed.</p>
        </body>
        </html>
    `);
});

// Start the server
const PORT = 4000;
console.log('About to start the server...');
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});