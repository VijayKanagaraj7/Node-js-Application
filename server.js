const express = require('express');
const credentials = require('./data');
const cors = require('cors');  // Add this line

const app = express();
app.use(express.json());
app.use(cors());  // Enable CORS

const port = 3000;

app.get("/fetchdata", (req, resp) => {
  resp.send({ success: true, data: credentials });
  console.log(credentials);
});

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ success: false, message: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
