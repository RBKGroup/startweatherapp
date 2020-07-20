const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
// const port = 3000;

app.set('port', PORT);
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.PORT || 3000, function () {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});
