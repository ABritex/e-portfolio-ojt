const SR_TOTAL = 285;
const PR_TOTAL = 285;
const SICR_TOTAL = 283;
const ASR_TOTAL = 284;
const MAX = 57;

const srScore = (SR_TOTAL / MAX) * 0.10;
const prScore = (PR_TOTAL / MAX) * 0.10;
const sicrScore = (SICR_TOTAL / MAX) * 0.30;
const asrScore = (ASR_TOTAL / MAX) * 0.50;
const overall = srScore + prScore + sicrScore + asrScore;

const ratingLabel = (n: number) => {
    if (n >= 4.96) return "Outstanding";
    if (n >= 4.91) return "Very Satisfactory";
    if (n >= 4.86) return "Satisfactory";
    if (n >= 4.81) return "Needs Improvement";
    return "Poor";
};

export { SR_TOTAL, PR_TOTAL, SICR_TOTAL, ASR_TOTAL, MAX, srScore, prScore, sicrScore, asrScore, overall, ratingLabel };