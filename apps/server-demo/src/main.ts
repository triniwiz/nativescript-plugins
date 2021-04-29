const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Pusher = require('pusher');
const pusher = new Pusher({
	appId: 'APP_ID',
	key: 'APP_KEY',
	secret: 'APP_SECRET',
	cluster: 'APP_CLUSTER',
	useTLS: true,
});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.post('/pusher/auth', function (req, res) {
	const socketId = req.body.socket_id;
	const channel = req.body.channel_name;
	const presenceData = {
		user_id: 'unique_user_id_868',
		user_info: { name: `${req.query.first} ${req.query.last}`, twitter_id: '@triniwiz', place: req.headers.place },
	};
	const auth = pusher.authenticate(socketId, channel, presenceData);
	res.send(auth);
});
const port = process.env.PORT || 5000;
app.listen(port);
