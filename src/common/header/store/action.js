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
