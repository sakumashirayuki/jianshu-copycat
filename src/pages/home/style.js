import styled from "styled-components";

export const HomeWrapper = styled.div`
  padding-top: 58px;
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  margin-top: 30px;
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;
`;

export const TopicWrapper = styled.div`
  padding: 0 0 -10px 0;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #f0f0f0;
`;

export const TopicItem = styled.div`
  background: #f7f7f7;
  height: 32px;
  display: inline-block;
  padding-right: 10px;
  margin-right: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .item-img {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const MoreTopic = styled.a`
  margin-left: 18px;
  color: #999999;
  font-size: 12px;
  line-height: 40px;
  text-decoration: none;
  .iconfont {
    font-size: inherit;
  }
`;
// for List
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
  img {
    display: block;
    float: right;
    width: 150px;
    height: 100px;
    border-radius: 2px;
    border: 1px solid #f0f0f0;
    margin-left: 10px;
  }
`;

export const ListInfo = styled.div`
  float: left;
  width: 458px;
  h3 {
    line-height: 27px;
    font-size: 18px;
    color: #333;
  }
  p {
    font-size: 13px;
    line-height: 18px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px 0;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

// for recommend
export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

// for download
export const DownloadWrapper = styled.div`
  overflow: hidden;
  margin-top: 10px;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  img {
    float: left;
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }
  .title {
    font-weight: 600;
    margin-top: 10px;
    .iconfont {
      font-size: 10px;
    }
  }
  .description {
    margin-top: 10px;
    font-size: 13px;
    color: #999;
  }
`;
export const StyledDownloadPop = styled.div`
  position: absolute;
  top: -195px;
  left: 48px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
  img {
    width: 160px;
    height: 160px;
    padding: 10px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 80px;
    top: 183px;
    border: 11px solid transparent;
    border-top-color: #fff;
    bottom: 99%;
  }
  &.fade-enter {
    transition: all 0.15s linear;
  }
  &.fade-enter-active {
    opacity: 1;
  }
  &.fade-exit {
    transition: all 0.15s linear;
  }
  &.fade-exit-active {
    opacity: 0;
  }
  &.fade-exit-done {
    opacity: 0;
  }
`;

export const BoardItem = styled.a`
  margin-bottom: 5px;
  img {
    width: 280px;
    height: 50px;
  }
`;

// for writer
export const WriterInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const WriterInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all 0.2s ease-in;
    transform-origin: center center;
  }
`;

export const WriterItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  img {
    float: left;
    height: 46px;
    width: 46px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
  .follow {
    position: absolute;
    right: 0;
    top: 5px;
    font-size: 13px;
    color: #42c02e;
    text-decoration: none;
  }
  .iconfont {
    font-size: 10px;
  }
`;
export const WriterDes = styled.div`
  margin-left: 10px;
  a {
    font-size: 14px;
    text-decoration: none;
    color: black;
  }
  p {
    font-size: 12px;
    color: #969696;
    margin-top: 10px;
  }
`;

export const FindMore = styled.a`
  text-decoration: none;
  display: block;
  margin: 0 auto;
  padding: 7px 7px 7px 12px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 13px;
  width: 259px;
  line-height: 19px;
  text-align: center;
  .iconfont {
    font-size: 10px;
  }
`;
// backToTop
export const BackTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 52px;
  height: 52px;
  line-height: 52px;
  text-align: center;
  border: 1px solid #ccc;
  .iconfont {
    font-size: 20px;
  }
  &:hover {
    background-color: hsla(0, 0%, 71%, 0.1);
  }
`;

export const BackDescribe = styled.div`
  position: fixed;
  right: 112px;
  bottom: 50px;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 80px;
    top: 9px;
    border: 6px solid transparent;
    border-left-color: #333;
    bottom: 99%;
  }
  &.fade-enter {
    transition: all 0.2s ease-out;
  }
  &.fade-enter-active {
    opacity: 1;
  }
  &.fade-exit {
    transition: all 0.2s ease-out;
  }
  &.fade-exit-active {
    opacity: 0;
  }
  &.fade-exit-done {
    opacity: 0;
  }
`;
