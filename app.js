const express = require('express')
const app = express()
const PORT = 3000

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('build'))
    app.get('*', (req, res) => {
        req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    })
}

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server running at ${PORT}`)
})