const User = require('../models/users.model')

//update User
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

//add company
const addCompany = async (req,res)=>{
    const id=req.params.id;
    const user=await User.findById(id);
    user.company=req.body
    user.save()
    res.json(user)
}

//update company
const updateCompany = async (req, res) => {
    const {bio,name,category} = req.body
    const id=req.params.id
    await User.findByIdAndUpdate(id,{
        company:{
            bio: bio,
            name: name,
            company_category: category, 
        },
    })
    .then((user)=>res.send(user))
    .catch((err)=>res.status(400).send(err))
}

//get user by ID
const getUser = async (req, res) => {
    const id = req.params.id;
    await User.findById(id).then((user)=>res.send(user))
}
        
module.exports = {
    updateUser,
    addCompany,
    updateCompany,
    getUser
}