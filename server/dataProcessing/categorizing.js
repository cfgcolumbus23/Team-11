const categorizing = () => {

    const physical_total = array[5] + array[8];
    const social_total = array[0] + array[7] + array[2];
    const math_total = array[9] + array[6];
    const reading_total = array[1] + array[3] + array[4] + array[10] + array[11];
    const recommendations = new Array(4);

    if (physical_total <= 8) {
        recommendations[0] = "Neurologist";
        physical_rating = "Below Average";
    } else if (physical_total <= 11) {
        recommendations[0] = "Physical Therapy";
        physical_rating = "Slightly Below Average";
    } else {
        recommendations[0] = "None";
        physical_rating = "Great";
    }

    if (social_total <= 18) {
        recommendations[1] = "Educational Psychologist";
        social_rating = "Below Average";
    } else {
        recommendations[1] = "None";
        social_rating = "Great";
    }

    if (math_total <= 8) {
        recommendations[2] = "Educational Psychologist";
        math_rating = "Below Average";
    } else if (math_total <= 11) {

        recommendations[2] = "Math Tutor";
        math_rating = "Slightly Below Average";
    } else {
        recommendations[2] = "None";
        math_rating = "Great";
    }

    if (reading_total <= 33) {
        recommendations[3] = "Speech Language Pathologist";
        reading_rating = "Below Average";
    } else if (reading_total <= 38) {
        recommendations[3] = "Local Library";
        reading_rating = "Slightly Below Average";
    } else {
        recommendations[3] = "None";
        reading_rating = "Great"
    }
    returningValues = {
        recommendations,
        physical_rating,
        social_rating,
        math_rating,
        reading_rating
    }
    return returningValues;
}