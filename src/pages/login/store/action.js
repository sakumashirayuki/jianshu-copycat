import axios from "axios";

export const CHANGELOGIN = "change_login";
export const CHANGELOGOUT = "change_logout";

const changeLoginAction = () => {
    return {
        type: CHANGELOGIN
    };
}

export const loginAction = (account, password) => { // async
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&password=${password}`)
        .then((res)=>{
            const result = res.data.data;
            if(result){
                dispatch(changeLoginAction());
            }else{
                alert("用户名或密码错误");
            }
        })
    }
}

export const logoutAction = () => {
    return {
        type: CHANGELOGOUT
    };
}