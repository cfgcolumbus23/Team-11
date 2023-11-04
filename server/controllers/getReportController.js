const assessmentQuestionsModel = require("../models/assessmentQuestions_models");
const rawAssessmentScoresModel = require("../models/rawAssessmentScores_models");

const getreport = async (req, res) => {
    const {studentId} = req.params;
    try {
        const assessmentScores = await rawAssessmentScoresModel.findOne({studentId});
        const testId = 2;//assessmentScores.testId;
        const questions = await assessmentQuestionsModel.findOne({testId});
        const answersList = assessmentScores.question_scores;
        
        math_points = 0;
        physical_points = 0;
        social_points = 0;
        reading_points = 0;

        math_score_student = 0;
        physical_score_student = 0;
        social_score_student = 0;
        reading_score_student = 0;

        questions.questions.forEach((element, i) => {
            curr_category = element.questionCategory;
            curr_points = element.totalPoints;

            if (curr_category == "math") {
                math_points += curr_points;
                math_score_student += answersList[i];
            } else if (curr_category == "reading") {
                reading_points += curr_points;
                reading_score_student += answersList[i];
            } else if (curr_category == "physical") {
                physical_points += curr_points;
                physical_score_student += answersList[i];
            } else {
                social_points += "socialemotional";
                social_score_student += answersList[i];
            }
        })

        res.status(200).json({reading_score_student});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = {
    getreport
}

// const categorizing = () => {

//     const recommendations = new Array(4);

//     if (physical_total <= 8) {
//         recommendations[0] = "Neurologist";
//         physical_rating = "Below Average";
//     } else if (physical_total <= 11) {
//         recommendations[0] = "Physical Therapy";
//         physical_rating = "Slightly Below Average";
//     } else {
//         recommendations[0] = "None";
//         physical_rating = "Great";
//     }

//     if (social_total <= 18) {
//         recommendations[1] = "Educational Psychologist";
//         social_rating = "Below Average";
//     } else {
//         recommendations[1] = "None";
//         social_rating = "Great";
//     }

//     if (math_total <= 8) {
//         recommendations[2] = "Educational Psychologist";
//         math_rating = "Below Average";
//     } else if (math_total <= 11) {

//         recommendations[2] = "Math Tutor";
//         math_rating = "Slightly Below Average";
//     } else {
//         recommendations[2] = "None";
//         math_rating = "Great";
//     }

//     if (reading_total <= 33) {
//         recommendations[3] = "Speech Language Pathologist";
//         reading_rating = "Below Average";
//     } else if (reading_total <= 38) {
//         recommendations[3] = "Local Library";
//         reading_rating = "Slightly Below Average";
//     } else {
//         recommendations[3] = "None";
//         reading_rating = "Great"
//     }
//     returningValues = {
//         recommendations,
//         physical_rating,
//         social_rating,
//         math_rating,
//         reading_rating
//     }
//     return returningValues;
// }