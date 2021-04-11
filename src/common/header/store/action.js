import axios from "axios";

export const SEARCH_FOCUS = "search_focus";
export const SEARCH_BLUR = "search_blur";
export const CHANGE_LIST = "change_list";
export const MOUSE_ENTER = "mouse_enter";
export const MOUSE_LEAVE = "mouse_leave";
export const CHANGE_PAGE = "change_page";


const changeListAction = (data) => {
    return {
        type: CHANGE_LIST,
        data,
        totalPage: Math.ceil(data.length / 8)
    };
}
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

export const mouseEnterAction = () =>{
    return{
        type: MOUSE_ENTER
    };
}

export const mouseLeaveAction = () =>{
    return{
        type: MOUSE_LEAVE
    };
}

export const changePageAction = () =>{
    return{
        type: CHANGE_PAGE
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
