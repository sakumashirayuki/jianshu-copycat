import axios from "axios"

export const GETHOMEDATA = "get_home_data";
export const ADDHOMEDATA = "add_home_data";
export const TOGGLETOPSHOW = "toggle_top_show";
export const CHANGEWRITERPAGE = "change_writer_page";
export const ADDRECOMMENDIMG = "add_recommend_img";


const setHomeDataAction = (result)=>{
    return {
        type: GETHOMEDATA,
        topicList: result.topicList,
        articleList: result.articleList,
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

const addRecommendImgAction = (recommendList)=>{
    return {
        type: ADDRECOMMENDIMG,
        recommendList
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

const promises = (filenames) => {
    filenames.forEach((filename, index)=>{
        axios.get(`/api/imgs/${filename}`, { responseType: "blob" }).then((response) => {
            const reader = new window.FileReader();
            reader.readAsDataURL(response.data);
            let currentImgObj;
            reader.onload = () => {
                return ()=>{
                    const imageDataUrl = reader.result;
                    currentImgObj = {
                      id: index + 1,
                      imgUrl: imageDataUrl
                    };
                    console.log(currentImgObj);
                  //   console.log("here1");
                  //   console.log(recommendList);
                  //   console.log(currentImgObj);
                  //   console.log(recommendList[index]);
                }
            };
            console.log(currentImgObj);
            return currentImgObj;
        }).catch((e)=>{
            alert(e);
        });
    });
}

export const getRecommendImg = () => {
    return async (dispatch) => {
        const filenames = ["banner-s-daily.png", "banner-s-club.png", "banner-s-7-serial.png", "banner-s-copyright.png"];
        const recommendList = await Promise.all(promises(filenames)).then(values=>{
            return values;
        }).catch((e)=>{
            alert(e);
        }); // {id, imgUrl}
    
        dispatch(addRecommendImgAction(recommendList));
    }
}

export const toggleTopShowAction = (flag) => {
    return {
        type: TOGGLETOPSHOW,
        flag
    };
}