import { original, produce } from "immer";

import { LOADWRITE, SELECTCATALOGITEM } from "./action";

const defaultState = {
    catalogList: [],
    selectedCatId: 0
};

const writeReducer = produce((draft, action)=>{
    switch (action.type) {
        case LOADWRITE:
            draft.catalogList = action.catalogList;
            break;
        case SELECTCATALOGITEM:
            draft.selectedCatId = action.selectedCatId
            break;
    }
}, defaultState);

export default writeReducer;