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
    margin-bottom: 0;
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
  font-size: 13px;
  color: #969696;
  line-height: 31px;
  & * {
    margin-right: 10px;
  }
  .level{
    color: #ec7259;
    text-align: center;
  }
  .iconfont{
    position: relative;
    font-size: 20px;
  }
`

export const Content = styled.div`
  color: #2f2f2f;
  img{
      width: 100%;
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

export const SponseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  *{
    margin-bottom: 1rem;
  }
  margin-bottom: 1rem;
  text-align: center;
`

// main-comment section
export const CommentWrapper = styled.div`
  width: 730px;
  padding: 32px;
  margin-bottom: 50px;
  background: #fff;
`

export const MainCommentCompose = styled.div`
  display: flex;
  align-content: flex-start;
  img{
    margin-right: 1rem;
  }
  margin-bottom: 3rem;
`;

export const CommentOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  color: #969696;
  font-size: 14px;
  &.slideY-enter{
    opacity: 0;
    transform: translateY(-50%);
  }
  &.slideY-enter-active{
    opacity: 1;
    transform: translateY(0);
    transition: opacity 200ms, transform 200ms;
  }
  &.slideY-exit{
    opacity: 1;
    transform: translateY(0);
  }
  &.slideY-exit-active{
    opacity: 0;
    transform: translateY(-50%);
    transition: opacity 200ms, transform 200ms;
  }
`

export const CommentListHeader = styled.h3`
  border-left: 4px solid #ec7259;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-left: 12px;
`
export const AuthorOnly = styled.span`
  font-size: 12px;
  margin-left: 12px;
  padding: 2px 8px;
  border: 1px solid #eee;
  border-radius: 16px;
  cursor: pointer;
  color: #969696;
`

export const TimeOrder = styled.div`
  color: #2d2d2d;
  font-size: 14px;
  margin-left: 12px;
  &.no-select{
    color: #969696;
  }
`

export const CommentListContainer = styled.div`
  &:last-child{
    .break-line{
      display: none;
    }
  }
`

export const CommentInfo = styled.div`
  margin-left: 10px;
  width: 100%;
  padding-bottom: 16px;
  .name{
    font-size: 15px;
  }
  .info{
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
  .content{
    margin-top: 10px;
    font-size: 16px;
  }
  .operation{
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    color: #b0b0b0;
    div{
      display: flex;
    }
  }
`;

export const CommentButton = styled.div`
  cursor: pointer;
  &:hover{
    color: #9c9c9c;
  }
  &.left{
    margin-right: 16px;
  }
  &.right{
    margin-left: 16px;
  }
  &.hide{
    opacity: 0;
  }
  &.orange{
    &:hover{
      color: #ec7259;
    }
  }
`;

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
export const FooterWrapper = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgb(0 0 0 / 5%);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
`

export const FooterCompose = styled.textarea`
  width: 400px;
  height: 36px;
  margin-right: 16px;
  resize: none;
  padding: 8px 18px;
  border-radius: 18px;
  border: none;
  background-color: #f2f2f2;
  outline: none;
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 560px;
    height: 56px;
    padding-right: 80px;
    border-radius: 4px;
  }
  &.slide-enter-done{
    width: 560px;
    height: 56px;
    padding-right: 80px;
    border-radius: 4px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 400px;
    height: 36px;
  } 
`

export const FooterButton = styled.div`
  margin-right: 24px;
  cursor: pointer; 
  display: flex;
  align-items: center;
  &.activate{
    color: #ec7259;
  }
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
    transform: translateY(0);
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

// can be used for Modal
// off-screen component
export const Mask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MiddleWindow = styled.div`
  position: relative;
  min-height: 10vh;
  max-height: 60vh;
  width: 30vw;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgb(26 26 26 / 10%);
  box-sizing: border-box;
  color: #404040;
  font-size: 14px;
  overflow: auto;
`

export const CloseBtn = styled.button`
  position: fixed;
  margin-left: 510px;
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  background-color: #fff;
  cursor: pointer;
  overflow-y: hidden;
  z-index: 1000;
`
export const ModalHeader = styled.h2`
  position: fixed;
  background-color: #fff;
  width: inherit;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eee;
  overflow-y: hidden;
  display: inline-block;
  z-index:999;
`
export const ModalContent = styled.div`
  position: relative;
  top: 54px;
  padding: 0 1.5rem;
`

export const UserItem = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  .avatar {
    height: 46px;
    width: 46px;
    border-radius: 50%;
    border: 1px solid #ddd;
    margin-right: 1rem;
  }
  .follow {
    font-size: 13px;
    color: #42c02e;
    text-decoration: none;
  }
  .iconfont {
    font-size: 10px;
  }
`

export const SponseTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-bottom: 24px;
  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

export const SponseSelection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 1rem;
`;

export const SponseOption = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 10px;
  border: 1px solid #eee;
  cursor: pointer;
  color: #969696;
  &.activate{
    border-color: #ec7259;
    color: #ec7259;
  }
  &.disable{
    pointer-events: none;
  }
  input{
    position: absolute;
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    text-align: center;
    font-size: 28px;
  }
  .hide{
    opacity: 0;
  }
`