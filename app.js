const express = require('express');
const app = express();
const PORT = 3000;


function hello(name) {
  return "Minu lemmik reisisihtkoht on " + name + "!";
}

app.get('/travel', (req, res) => {
  res.send("Minu lemmik reisisihtkoht on Jaapan.");
});

if (require.main === module) {
app.listen(PORT, () => {
console.log(`App listening at http://localhost:${PORT}`);
});
}
module.exports = { app, hello };