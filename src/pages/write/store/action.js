import axios from "axios";

export const LOADWRITE = "load_write"; // load write page data
export const SELECTCATALOGITEM = "select_catalog_item";
export const SELECTBLOGITEM = "select_blog_item";
export const CHANGEBLOGCONTENT = "change_blog_content";
export const CHANGEBLOGTITLE = "change_blog_title";

const loadWriteAction = (data) => {
    return {
        type: LOADWRITE,
        catalogList: data.catalogList
    };
};

export const getWriteAction = () => {
    return async (dispatch) => {
        const result = await axios.get('/api/write.json');
        const data = result.data;
        if(data.success){
            dispatch(loadWriteAction(data.data));
        }else{
            alert('加载失败，请刷新重试');
        }
    }
};

export const selectCatalogAction = (index) => {
    return{
        type: SELECTCATALOGITEM,
        selectedCatId: index
    };
};

export const selectBlogAction = (index) => {
    return{
        type: SELECTBLOGITEM,
        selectedBlogId: index
    };
};

export const changeContentAction = (newContent) => {
    return{
        type: CHANGEBLOGCONTENT,
        newContent
    };
};

export const changeTitleAction = (newTitle) => {
    return{
        type: CHANGEBLOGTITLE,
        newTitle
    };
};