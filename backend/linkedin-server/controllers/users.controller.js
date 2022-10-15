const User = require('../models/users.model')

const updateUser = async (req, res) => {
    const id=req.params.id
    const {image,bio,location} = req.body
    await User.findByIdAndUpdate(id,{
        image: image,
        bio: bio,
        location: location,
    })
    .then((user)=>res.send(user))
    .catch((err)=>res.status(400).send(err))
}
    
module.exports = {
    updateUser
}