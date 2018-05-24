var express = require('express');
var SockJS = require('sockjs-client-node');
var Stomp = require('stompjs');
var compression = require('compression');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(compression());

app.get('/', function(req, res) {
	res.render('index');
});

var stomp = {
	url: new SockJS('https://app.jouliette.net/stomp/'),
	client: null,
	data: [],
	init: function() {
		this.client = Stomp.over(this.url);
		this.client.connect('web', 'mnwdTGgQu5zPmSrz', this.onConnect, console.error, '/');
	},
	onConnect: function() {
		console.log('stomp connected');
		stomp.client.subscribe('/exchange/aquaponics/deceuvel', stomp.onData);
	},

	onData: function(d) {
		var data = JSON.parse(d.body);
		console.log(data);
	}
};

// stomp.init();

io.on('connection', function(socket) {
	console.log('a user connected');
	socket.on('spawnworm', function(x, y) {
		socket.broadcast.emit('spawnworm', x, y);
	});

	socket.on('fishjump', function() {
		socket.broadcast.emit('fishjump');
	});

	io.sockets.emit('totalUsers', {
		count: io.engine.clientsCount
	});

	//Disconnect
	socket.on('disconnect', function(data) {
		//added this below
		io.sockets.emit('totalUsers', {
			count: io.engine.clientsCount
		});
	});

});

http.listen(process.env.PORT || 3000, function() {
	console.log('server is running on port 3000');
});
