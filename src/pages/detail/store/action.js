import axios from "axios";

export const CHANGE_DETAIL = "change_detail";
export const TOGGLETOPSHOW = "toggle_top_show";

const changeDetailAction = (result) => {
    return {
        type: CHANGE_DETAIL,
        title: result.title,
        content: result.content,
        postTime: result.postTime,
        authorInfo: result.authorInfo,
        recommendList: result.recommendList
    };
}

export const getDetailAction = () => {
    return (dispatch) => {
        axios.get('/api/detail.json')
        .then((res)=>{
            const result = res.data.data;
            console.log(result);
            dispatch(changeDetailAction(result));
        }).catch(()=>{
            alert('加载失败，请刷新重试');
        });
    };
};

export const toggleTopShowAction = (flag) => {
    return {
        type: TOGGLETOPSHOW,
        flag
    };
}