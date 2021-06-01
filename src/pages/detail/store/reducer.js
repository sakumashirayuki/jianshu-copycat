import { original, produce } from "immer";

import {
    CHANGE_DETAIL,
    TOGGLETOPSHOW,
    LIKE,
    DISLIKE,
    REMOVEPREFERNCE,
    OPENREPORT,
    CLOSEREPORT,
    OPENMESSAGE,
    HIDEMESSAGE
} from "./action";

const defaultState = {
    title: "",
    content: "",
    postTime: "",
    likes: 0,
    likedUsers: [],
    sponse: 0,
    preference: "",
    showScroll: false,
    showReport: false,
    showMessage: false,
    authorInfo: {
        name: "",
        imgUrl: "",
        level: 0,
        wordAmount: 0,
        readAmount: 0,
        asset: 0,
        workList: [],
    },
    recommendList: [],
    comments: [],
};

const homeReducer = produce((draft, action) => {
    switch (action.type) {
        case CHANGE_DETAIL:
            draft.title = action.title;
            draft.content = action.content;
            draft.likes = action.likes;
            draft.likedUsers = action.likedUsers;
            draft.sponse = action.sponse;
            draft.authorInfo = action.authorInfo;
            draft.recommendList = action.recommendList;
            draft.comments = action.comments;
            break;
        case TOGGLETOPSHOW:
            draft.showScroll = action.flag;
            break;
        case LIKE:
            console.log(draft.likes);
            draft.likes = original(draft).likes + 1;
            draft.preference = "like";
            break;
        case DISLIKE:
            draft.likes = original(draft).likes - 1;
            draft.preference = "dislike";
            break;
        case REMOVEPREFERNCE:
            const previousPre = original(draft).preference;
            if (previousPre === "like") {
                draft.likes = original(draft).likes - 1;
            } else if (previousPre === "dislike") {
                draft.likes = original(draft).likes + 1;
            }
            draft.preference = "";
            break;
        case OPENREPORT:
            draft.showReport = true;
            break;
        case CLOSEREPORT:
            draft.showReport = false;
            break;
        case OPENMESSAGE:
            draft.showMessage = true;
            break;
        case HIDEMESSAGE:
            draft.showMessage = false;
            break;
    }
}, defaultState);

export default homeReducer;
