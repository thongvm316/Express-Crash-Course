const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();


// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Init Middleware
app.use(logger)

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// // Get all member
// app.get('/api/members', (req, res) => {
//     console.log('After Middleware')
//     res.json(members);
// })

// // Get single member
// app.get('/api/members/:id', (req, res) => {
//     const found = members.some(member => member.id === parseInt(req.params.id))
//     console.log(found)

//     if (found) {
//         res.json(members.filter(member => member.id === parseInt(req.params.id))) // req.params.id return a string so must use parseInt to convert number
//     } else {
//         res.status(400).json({msg: `No member with the id of ${req.params.id}`})
//     }
    
// }) ---> Chuyen qua Router

// Member API Router
app.use('/api/members', require('./routes/api/members'));







const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));