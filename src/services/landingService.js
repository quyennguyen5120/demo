import {Axios} from "./Axios";

export function getBaner() {
    const url = "banner/findAll";
    return Axios.get(url);
}

export function findByMainCampus(payload) {
    const url = "post/findByMainCampus";
    return Axios.get(url, payload);
}

export function feedbackStudent(payload) {
    const url = "feedback_student";
    return Axios.get(url, payload);
}

function getDetailNews(payload) {
    const url = `post`;
    return Axios.get(url, payload);
}
function  getDetailNew3(payload) {
    const url = `feedback_student/findById`;
    return Axios.get(url, payload);
}

const landingService = {
    getBaner,
    findByMainCampus,
    feedbackStudent,
    getDetailNews,
    getDetailNew3
};

export default landingService;