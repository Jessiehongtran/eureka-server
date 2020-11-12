const app = require('./app');

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`API is up on running on PORT ${PORT}`)
})

