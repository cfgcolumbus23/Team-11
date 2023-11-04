const assessmentResults = require("../dataProcessing/categorizing")

const processAssessmentResults = async (req, res) => {
    const {
        username,
        password,
        role
    } = req.body

    try{
        const userProfile = await UserProfileModel.create({
             
        })

        res.status(200).json(userProfile)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    makeUserProfile
}