import axios from "axios"

export const GETHOMEDATA = "get_home_data";
export const ADDHOMEDATA = "add_home_data";
export const TOGGLETOPSHOW = "toggle_top_show";
export const CHANGEWRITERPAGE = "change_writer_page";


const setHomeDataAction = (result)=>{
    return {
        type: GETHOMEDATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
        writerList: result.writerList,
        writerTotalPage: Math.ceil(result.writerList.length / 5)
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
        }).catch(()=>{
            alert('加载失败，请刷新重试');
        });
    };
};

export const changeWriterPageAction = () => {
    return {
        type: CHANGEWRITERPAGE
    };
}

export const getMoreList = ()=>{
    return (dispatch)=>{
        axios.get('api/homeList.json')
        .then((res)=>{
            const result = res.data.data;
            dispatch(addHomeListAction(result));
        }).catch(()=>{
            alert('加载失败，请刷新重试');
        });
    };
};

export const toggleTopShowAction = (flag) => {
    return {
        type: TOGGLETOPSHOW,
        flag
    };
}