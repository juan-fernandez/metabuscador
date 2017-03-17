const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/src'));

app.get('/*',function(req,res){
    res.sendFile(__dirname + '/src/index.html')
})

http.listen(port, () => console.log('listening on port ' + port));
