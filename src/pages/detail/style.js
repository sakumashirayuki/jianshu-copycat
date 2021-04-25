import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 68px;
  background: #f9f9f9;
`;
// main section
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`
// main-blog section
export const BlogWrapper = styled.div`
  width: 730px;
  padding: 32px;
  margin-bottom: 24px;
  margin-right: 10px;
  background: #fff;
`

export const Header = styled.div`
  margin: 10px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: 900;
`

export const Content = styled.div`
  color: #2f2f2f;
  img{
      width: 730px;
  }
  p{
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
`
// main-comment section
export const CommentWrapper = styled.div`
  width: 730px;
  padding: 32px;
  margin-bottom: 10px;
  background: #fff;
`
// side section
export const SideWrapper = styled.aside`
  width: 260px;
  background: #fff;
`
// footer section
export const Footer = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgb(0 0 0 / 5%);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 16px;
`

export const FooterCompose = styled.textarea`

`