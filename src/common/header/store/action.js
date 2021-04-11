import axios from "axios";

export const SEARCH_FOCUS = "search_focus";
export const SEARCH_BLUR = "search_blur";
export const CHANGE_LIST = "change_list";

export const searchFocusAction = () =>{
    return {
        type: SEARCH_FOCUS
    };
}

export const searchBlurAction = () =>{
    return {
        type: SEARCH_BLUR
    };
}

export const changeListAction = (data) => {
    return {
        type: CHANGE_LIST,
        data
    };
}

export const getList = () => {
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data;
            dispatch(changeListAction(data.data)); // the array
        }).catch(()=>{
            console.log('error');
        });
    }
}
