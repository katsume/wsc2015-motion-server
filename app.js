var app= require('express')(),
	http= require('http').Server(app),
	io= require('socket.io')(http);

// app.use(function(req, res, next){
// 	res.set({
// 		'Access-Control-Allow-Origin': '*'
// 	});
// 	next();
// });

app.get('/', function(req, res){
	res.sendStatus(404);
});

io.on('connection', function(socket){
	socket.on('walk', function(position){
		socket.broadcast.emit('walk', position);
	});
});

http.listen(8000, function(){
});
