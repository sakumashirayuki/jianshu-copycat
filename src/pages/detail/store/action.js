import axios from "axios";

export const CHANGE_DETAIL = "change_detail";

const changeDetailAction = (title, content) => {
    return {
        type: CHANGE_DETAIL,
        title,
        content
    };
}

export const getDetailAction = () => {
    return (dispatch) => {
        axios.get('api/detail.json')
        .then((res)=>{
            const result = res.data.data;
            dispatch(changeDetailAction(result.title, result.content));
        })
    }
}