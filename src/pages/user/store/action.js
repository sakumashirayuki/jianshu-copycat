import axios from "axios";

export const GET_USERINFO = "get_userinfo";

const getUserInformation = (data) => {
    return {
        type: GET_USERINFO,
        avatarUrl: data.avatarUrl
    }
}

export const fetchUserinfoAction = () => {
    return async (dispatch) => {
        const result = await axios.get('/api/userInfo.json');
        const data = result.data;
        if(data.success){
            dispatch(getUserInformation(data.data));
        }else{
            alert('加载失败，请刷新重试');
        }
    }
}