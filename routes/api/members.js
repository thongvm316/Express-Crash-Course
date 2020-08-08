const express = require('express');
const uuid = require('uuid');
const router = express.Router()
const members = require('../../members');

// Get all member
router.get('/', (req, res) => {
    console.log('After Middleware')
    res.json(members);
})

// Get single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    console.log(found)

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id))) // req.params.id return a string so must use parseInt to convert number
    } else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
    }
    
})

// Create member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
        res.status(400).json({ msg: 'Please include a name and email' })
    }

    members.push(newMember)
    res.json(members)
});

module.exports = router