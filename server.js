const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// To serve or access static files from a public folder in a browser,
app.use(express.static(path.join(__dirname, "public")));

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
