const http = require("http");

const host = 'localhost';
const port = 3000;

const requestListener = (req, res) => {
	res.setHeader("Content-Type", "text/csv");
	res.setHeader("Content-Disposition", "attachement;filname=oceanpals.csv");
	res.writeHead(200);
	res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`);
});
