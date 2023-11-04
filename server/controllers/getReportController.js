const assessmentQuestionsModel = require("../models/assessmentQuestions_models");
const rawAssessmentScoresModel = require("../models/rawAssessmentScores_models");

const getreport = async (req, res) => {
    const {studentId} = req.params;
    try {
        const assessmentScores = await rawAssessmentScoresModel.findOne({studentId});
        const testId = assessmentScores.testId;
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

        console.log(answersList);
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
                social_points += curr_points;
                social_score_student += answersList[i];
            }
        })

        const math_percent = math_score_student/math_points * 100;
        const reading_percent = reading_score_student/reading_points* 100;
        const physical_percent = physical_score_student/physical_points* 100;
        const social_percent = social_score_student/social_points * 100;

        const percentArr = [math_percent, reading_percent, physical_percent, social_percent];
        recs = givingRecommendations(percentArr);

        const recommendations = {
            "Math":recs.get("Math"),
            "Reading":recs.get("Reading"),
            "Physical":recs.get("Physical"),
            "Socialemotional":recs.get("Social/Emotional")
        };
        const results = {
            "Math":math_percent,
            "Reading":reading_percent,
            "Physical":physical_percent,
            "Socialemotional":social_percent
        };

        res.status(200).json({recommendations, results});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = {
    getreport
}

const givingRecommendations = (percentArray) => {
    recommendations = new Map();
    if (percentArray[0] <= 50) {
        recommendations.set("Math", "Educational Psychologist");
    } else if (percentArray[0] <= 75) {
        recommendations.set("Math", "Math Tutor");
    } else {
        recommendations.set("Math", "None");
    }

    if (percentArray[1] <= 50) {
        recommendations.set("Reading", "Speech Language Pathologist");
        reading_rating = "Below Average";
    } else if (percentArray[1] <= 75) {
        recommendations.set("Reading", "Local Library");
    } else {
        recommendations.set("Reading", "None");
    }

    if (percentArray[2] <= 50) {
        recommendations.set("Physical", "Neurologist");
    } else if (percentArray[2] <= 75) {
        recommendations.set("Physical", "Physical Therapy");
    } else {
        recommendations.set("Physical", "None");
    }

    if (percentArray[3] <= 65) {
        recommendations.set("Social/Emotional", "Educational Psychologist");
    } else {
        recommendations.set("Social/Emotional", "None");
    }

    return recommendations;
}