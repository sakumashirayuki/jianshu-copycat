import styled from "styled-components";

export const WriteWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 0.8fr 1fr 4fr;
`;

export const CatalogWrapper = styled.div`
    background-color: #404040;
    color: #f2f2f2;
    grid-column-start: 1;
    grid-column-end: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CatalogItem = styled.li`
    line-height: 40px;
    font-size: 15px;
    padding: 0 15px;
    cursor: pointer;
    position: relative;
    &.active{
        background-color: #666;
        border-left: 3px solid #ec7259;
        .setting-icon{
            visibility: visible;
        }
    }
    &:hover{
        background-color: #666;
    }
    .setting-icon{
        visibility: hidden;
    }
`;

export const CatalogFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    color: #999;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    font-size: 17px;
`;

export const ListWrapper = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    overflow-y: scroll;
    .bottom-line{
        border-bottom: 1px solid #d9d9d9;
    }
`;

export const BlogItem = styled.li`
    position: relative;
    height: 90px;
    color: #595959;
    padding: 15px 10px 15px 60px;
    cursor: pointer;
    .title{
        font-size: 18px;
    }
    .setting-icon{
        visibility: hidden;
    }
    &:hover{
        background-color: #e6e6e6;
    }
    &.active{
        background-color: #e6e6e6;
        border-left: 5px solid #ec7259;
        .setting-icon{
            visibility: visible;
        }
    }
`;

export const LeftIcon = styled.div`
    position: absolute;
    top: 30px;
    left: 22px;
    font-size: 28px;
    color: #999;
`;

export const RightIcon = styled.div`
    position: absolute;
    top: 36px;
    right: 22px;
`;

export const CreateNew = styled.div`
    line-height: 30px;
    padding: 20px 0 20px 25px;
    cursor: pointer;
    color: #999;
    margin-bottom: 80px;
`

export const EditWrapper = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
`;

export const EditTitle = styled.input`
    width: 100%;
    padding: 20px 80px 10px 40px;
    border: none;
    border: none;
    font-size: 30px;
    font-weight: 400;
    line-height: 30px;
    color: #595959;
    outline: none;
`;

export const EditorContainer = styled.div`
    textarea{
        height: calc(100vh - 113px);
    }
`;