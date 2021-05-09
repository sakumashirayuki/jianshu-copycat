import styled from "styled-components";

export const WriteWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
`;

export const CatalogWrapper = styled.div`
    padding: 4rem;
    grid-column-start: 1;
    grid-column-end: 2;
`;

export const EditWrapper = styled.div`
    padding: 4rem;
    grid-column-start: 2;
    grid-column-end: 3;
`;

export const PreviewWrapper = styled.div`
    padding: 4rem;
    grid-column-start: 3;
    grid-column-end: 4;
`;