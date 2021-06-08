import { original, produce } from "immer";

import {
    LOADWRITE,
    SELECTCATALOGITEM,
    SELECTBLOGITEM,
    CHANGEBLOGCONTENT,
    CHANGEBLOGTITLE
} from "./action";

const defaultState = {
    catalogList: [],
    selectedCatId: 0,
    selectedBlogId: 0,
};

const writeReducer = produce((draft, action) => {
    switch (action.type) {
        case LOADWRITE:
            draft.catalogList = action.catalogList;
            break;
        case SELECTCATALOGITEM:
            draft.selectedCatId = action.selectedCatId;
            break;
        case SELECTBLOGITEM:
            draft.selectedBlogId = action.selectedBlogId;
            break;
        case CHANGEBLOGCONTENT:
            draft.catalogList[draft.selectedCatId].list[draft.selectedBlogId].content = action.newContent;
            break;
        case CHANGEBLOGTITLE:
            draft.catalogList[draft.selectedCatId].list[draft.selectedBlogId].title = action.newTitle;
            break;
    }
}, defaultState);

export default writeReducer;
