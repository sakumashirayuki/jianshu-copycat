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

export const AuthorColumn = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img{
    border-radius: 50%;
    border: 1px solid #eee;
    width: 50px;
    height: 50px;
  }
  .name{
    font-size: 16px;
    color: #404040;
    display: flex;
  }
  .follow{
    font-size: 13px;
    color: #42c02e;
    text-decoration: none;
    margin-left: 8px;
  }
  .iconfont {
    font-size: 10px;
  }
`

export const AuthorDescribe = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`

export const TextInformation = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 12px;
  font-size: 13px;
  color: #969696;
  & * {
    margin-right: 10px;
  }
  .level{
    color: #ec7259;
    text-align: center;
  }
  .iconfont{
    position: relative;
    bottom: 2px;
    font-size: 20px;
  }
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

export const BottomLine = styled.div`
  display: flex;
  justify-content: space-between;
  color: #969696;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const RoundButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #969696;
  border: 1px solid #eee;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  &.activate{
    background-color: #ec7259;
    color: #fff;
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
`

export const SideSection = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
`

export const BreakLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: #eee;
  box-sizing: border-box; 
`

export const WorkItem = styled.div`
  margin-top: 16px;
  a{
    text-decoration: none;
    color: inherit;
    line-height: 22px;
  }
  p{
    margin-top: 4px;
    font-size: 12px;
    color: #969696;
  }
`

export const RecommendHeader = styled.div`
  border-left: 4px solid #ec7259;
  padding-left: 6px;
  margin-bottom: 16px;
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

// message popup
export const PopupContainer = styled.div`
  position: fixed;
  top: 5rem;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.25rem;
  opacity: 1;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgb(0 0 0 / 10%);
  display: flex;
  align-items: center;
  &.alert-enter {
    opacity: 0;
    transform: translateY(-50%);
  }
  &.alert-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.alert-exit {
    opacity: 1;
  }
  &.alert-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
  
`;