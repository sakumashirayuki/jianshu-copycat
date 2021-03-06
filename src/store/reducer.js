import { combineReducers } from "redux";

import { reducer as headerReducer } from "../common/header/store/";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as detailReducer } from "../pages/detail/store";
import { reducer as loginReducer } from "../pages/login/store";
import { reducer as userReducer } from "../pages/user/store";
import { reducer as writeReducer } from "../pages/write/store";

const rootReducer = combineReducers({
    headerReducer,
    homeReducer,
    detailReducer,
    loginReducer,
    userReducer,
    writeReducer
});

export default rootReducer;