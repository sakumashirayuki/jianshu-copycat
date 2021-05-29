import axios from "axios";

export const CHANGE_DETAIL = "change_detail";
export const TOGGLETOPSHOW = "toggle_top_show";
export const LIKE = "like";
export const DISLIKE = "dislike";
export const REMOVEPREFERNCE = "remove_preference";

const changeDetailAction = (result) => { // load the detail information
    return {
        type: CHANGE_DETAIL,
        title: result.title,
        content: result.content,
        postTime: result.postTime,
        likes: result.likes,
        likedUsers: result.likedUsers,
        sponse: result.sponse,
        authorInfo: result.authorInfo,
        recommendList: result.recommendList,
        comments: result.comments
    };
}

export const getDetailAction = () => { // request for the information
    return (dispatch) => {
        axios.get('/api/detail.json')
        .then((res)=>{
            const result = res.data.data;
            // console.log(result);
            dispatch(changeDetailAction(result));
        }).catch(()=>{
            alert('加载失败，请刷新重试');
        });
    };
};

export const toggleTopShowAction = (flag) => { // toggle back-to-top show
    return {
        type: TOGGLETOPSHOW,
        flag
    };
};

export const likeAction = () => {
    return {
        type: LIKE,
    };
};

export const dislikeAction = () => {
    return {
        type: DISLIKE
    };
};

export const removePreferenceAction = () => {
    return {
        type: REMOVEPREFERNCE
    };
}