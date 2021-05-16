import axios from "axios";

export const CHANGELOGIN = "change_login";
export const CHANGELOGOUT = "change_logout";
export const CHANGEREMEMBER = "change_remember";

export const changeLoginAction = () => {
    return {
        type: CHANGELOGIN
    };
}

export const loginAction = (account, password, isRemember) => { // async
    return (dispatch) => {
        if(isRemember)
            localStorage.setItem('userData', account);
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
    localStorage.removeItem('userData');
    return {
        type: CHANGELOGOUT
    };
}

export const changeRememberAction = () => {
    return {
        type: CHANGEREMEMBER
    };
}