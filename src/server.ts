import Application from "./app";

const app = new Application();

app.server.listen(3001, () => console.log('Server listening on port 3001'));