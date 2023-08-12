const userSchema= require('../Modeles/user')

//Add a user
 exports.AddUser = async (req,res)=>{
    try{
  const newUser= new userSchema(req.body)
  await newUser.save()
  res.status(200).send({msg:'the new user has been added successfully',newUser})

    }catch(err){
        res.status(500).send('can not add this user')
        console.log(error)
    }
    
 }
 //get all users
 exports.getAllUsers = async(req,res)=>{
    try{
        const Users = await userSchema.find()
        res.status(200).send(Users)
    }catch(err){
        res.status(500).send('error in getting users')
        console.log(err)

    }
 }
 //edit a user by id

 exports.updateUser = async (req,res)=>{
    try {
        const {id}= req.params
        await userSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(200).send('the user has been updated succufully')
    } catch (error) {
        res.status(500).send('cannot update the selected user')
        console.log(error)
    }
}

//delete a user by id

exports.deleteUser = async (req,res)=>{
    try {
        const {id} = req.params
    await userSchema.findByIdAndRemove(id)
    res.status(200).send('the user has been removed succesfully')
    } catch (error) {
        res.status(500).send('cannot delete the selected user')
        console.log(error)
    }
}