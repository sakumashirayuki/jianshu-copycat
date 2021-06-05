import styled from "styled-components";

export const WriteWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
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

export const ListWrapper = styled.div`
    padding: 4rem;
    grid-column-start: 2;
    grid-column-end: 3;
    overflow-y: scroll;
`;

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