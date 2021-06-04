import styled from "styled-components";

export const WriteWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 4fr;
`;

export const CatalogWrapper = styled.div`
    background-color: #404040;
    color: #f2f2f2;
    padding: 4rem;
    grid-column-start: 1;
    grid-column-end: 2;
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

export const EditorContainer = styled.div`
    textarea{
        height: calc(100vh - 65px);
    }
`