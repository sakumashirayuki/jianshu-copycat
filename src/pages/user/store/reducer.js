import { original, produce } from "immer";

import { GET_USERINFO } from "./action";

const defaultState = {
    avatarUrl: ""
};

const userReducer = produce((draft, action)=>{
    switch (action.type) {
        case GET_USERINFO:
            draft.avatarUrl = action.avatarUrl;
            break;
    }
},defaultState);

export default userReducer;