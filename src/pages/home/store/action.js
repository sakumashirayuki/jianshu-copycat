import axios from "axios"

export const GETHOMEDATA = "get_home_data"

const setHomeDataAction = (result)=>{
    return {
        type: GETHOMEDATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
        writerList: result.writerList
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