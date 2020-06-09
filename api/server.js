const path = require("path");
const jsonServer = require("json-server");
const chalk = require("chalk");
const server = jsonServer.create();
const database = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", database);
server.listen(3000, () => {
  console.log(chalk.green("JSON Server is running im port 3000"));
});
