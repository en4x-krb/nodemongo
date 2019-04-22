const app = require('./app');

const port = process.env.PORT;

//Start the server
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});