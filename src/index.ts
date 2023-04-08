import express from 'express';

const PORT = 3001;

const app = express();

try {
	app.listen(PORT, () => console.log(`SERVER WAS STARTED ON PORT ${PORT}`));
} catch (e) {
	console.log(e);
}
