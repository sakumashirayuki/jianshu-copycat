import axios from "axios";

export const CHANGE_DETAIL = "change_detail";
export const TOGGLETOPSHOW = "toggle_top_show";

const changeDetailAction = (title, content) => {
    return {
        type: CHANGE_DETAIL,
        title,
        content
    };
}

export const getDetailAction = () => {
    return (dispatch) => {
        axios.get('/api/detail.json')
        .then((res)=>{
            const result = res.data.data;
            dispatch(changeDetailAction(result.title, result.content));
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