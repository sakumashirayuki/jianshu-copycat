import axios from "axios"

export const GETHOMEDATA = "get_home_data";
export const ADDHOMEDATA = "add_home_data";
export const TOGGLETOPSHOW = "toggle_top_show";


const setHomeDataAction = (result)=>{
    return {
        type: GETHOMEDATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
        writerList: result.writerList
    }
}

const addHomeListAction = (list)=>{
    return {
        type: ADDHOMEDATA,
        list
    }
}

export const getHomeDataAction = ()=>{
    return (dispatch) =>{
        axios.get('/api/home.json')
        .then((res)=>{
            const result = res.data.data;
            dispatch(setHomeDataAction(result));
        })
    }
}

export const getMoreList = ()=>{
    return (dispatch)=>{
        axios.get('api/homeList.json')
        .then((res)=>{
            const result = res.data.data;
            dispatch(addHomeListAction(result));
        })
    }
}

export const toggleTopShowAction = (flag) => {
    return {
        type: TOGGLETOPSHOW,
        flag
    };
}