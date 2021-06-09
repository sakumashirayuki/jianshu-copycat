import styled from "styled-components";

export const WriteWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 0.8fr 1fr 4fr;
`;

export const CatalogWrapper = styled.div`
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.fontColor};
    grid-column-start: 1;
    grid-column-end: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
CatalogWrapper.defaultProps = {
    theme: {
        main: "#404040",
        fontColor: "#f2f2f2"
    }
}

export const CatalogItem = styled.li`
    line-height: 40px;
    font-size: 15px;
    padding: 0 15px;
    cursor: pointer;
    position: relative;
    &.active{
        background-color: ${props => props.theme.main};
        border-left: 3px solid #ec7259;
        .setting-icon{
            visibility: visible;
        }
    }
    &:hover{
        background-color: ${props => props.theme.main};
    }
    .setting-icon{
        visibility: hidden;
    }
`;
CatalogItem.defaultProps = {
    theme: {
        main: "#666"
    }
}

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
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.fontColor};
    .bottom-line{
        border-bottom: 1px solid ${props => props.theme.line};
    }
`;
ListWrapper.defaultProps = {
    theme: {
        main: "#fff",
        line: "#d9d9d9",
        fontColor: "#595959"
    }
}

export const CreateTop = styled.div`
    line-height: 20px;
    font-size: 15px;
    padding: 20px 0 20px 25px;
    cursor: pointer;
`

export const BlogItem = styled.li`
    position: relative;
    height: 90px;
    padding: 15px 10px 15px 60px;
    cursor: pointer;
    span{
        display: block;
        line-height: 30px;
    }
    .title{
        font-size: 18px;
    }
    .setting-icon{
        visibility: hidden;
    }
    &:hover{
        background-color: ${props => props.theme.main};
    }
    &.active{
        background-color: ${props => props.theme.main};
        border-left: 5px solid #ec7259;
        .setting-icon{
            visibility: visible;
        }
    }
`;
BlogItem.defaultProps = {
    theme: {
        main: "#e6e6e6"
    }
}

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
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.main};
    outline: none;
`;
EditTitle.defaultProps = {
    theme:{
        main: "#fff",
        fontColor: "#595959"
    }
}

export const EditorContainer = styled.div`
    .react-mde{
        color: ${props => props.theme.headerColor};
        border: 1px solid ${props => props.theme.border};
    }
    .mde-header{
        border-bottom: 1px solid ${props => props.theme.border};
        background: ${props => props.theme.headerBack};
    }
    .svg-icon{
        color: ${props => props.theme.buttonColor};
    }
    .mde-preview{
        background-color: ${props => props.theme.main};
        color: ${props => props.theme.fontColor};
    }
    textarea{
        height: calc(100vh - 113px);
        background-color: ${props => props.theme.main};
        color: ${props => props.theme.fontColor};
    }
`;
EditorContainer.defaultProps={
    theme:{
        main: "#fff",
        fontColor: "#595959",
        headerColor: "rgba(0, 0, 0, 0.85)",
        headerBack: "#f9f9f9",
        border: "#c8ccd0",
        buttonColor: "#242729"
    }
}

export const PlainEditor = styled.div`
    height: 100vh;
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-size: 64px;
        color: #e6e6e6;
        text-shadow: 0 1px 0 #fff;
        vertical-align: middle;
    }
`