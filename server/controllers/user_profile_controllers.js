const UserProfileModel = require("../models/user_models")

const makeUserProfile = async (req, res) => {
    const {
        username,
        password,
        role
    } = req.body

    try{
        const userProfile = await UserProfileModel.create({
            username,
            password,
            role
        })

        res.status(200).json(userProfile)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    makeUserProfile
}
