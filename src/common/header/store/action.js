import axios from "axios";

export const SEARCH_FOCUS = "search_focus";
export const SEARCH_BLUR = "search_blur";

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

export const getList = () => {
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{

        }).catch(()=>{
            console.log('error');
        });
    }
}
