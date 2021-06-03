import React, { useEffect, useState, useRef } from "react";
import { Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import {
    AiFillLike,
    AiFillDislike,
    AiFillSwitcher,
    AiOutlineEllipsis,
} from "react-icons/ai";

import { actions } from "./store";
import { debounce } from "../../util/utils";

import Popup from "./component/Popup";
import LikedUser from "./component/LikedUser";
import SponseDialog from "./component/SponseDialog";
import ReportDialog from "./component/ReportDialog";
import CommentSection from "./component/CommentSection";
import Footer from "./component/Footer";

import {
    DetailWrapper,
    Main,
    BlogWrapper,
    Header,
    AuthorColumn,
    AuthorDescribe,
    TextInformation,
    Content,
    BottomLine,
    SponseWrapper,
    Container,
    RoundButton,
    SideWrapper,
    SideSection,
    BreakLine,
    WorkItem,
    RecommendHeader,
    Mask,
} from "./style";

import { BackTop, BackDescribe } from "../home/style";
import { Button } from "../../common/header/style";

function Detail() {
    const detailState = useSelector((state) => state.detailReducer);
    const loginState = useSelector((state) => state.loginReducer);
    const userState = useSelector((state) => state.userReducer);

    const refRecommend = useRef(null);
    const refTitle = useRef(null);

    const dispatch = useDispatch();

    let history = useHistory();

    const [mouseInState, setMouseInState] = useState(false);
    const [showLikedUsers, setShowLikedUsers] = useState(false);
    const [fixRecommend, setFixRecommend] = useState(false);
    // const [originOffset, setOriginOffset] = useState(0); // get this when the component is mounted
    let originOffset = 0;
    let titleOffset = 0; // offsetTop + offsetHeight;

    const { SubMenu } = Menu;

    const menu = (
        <Menu>
            <SubMenu title="分享文章">
                <Menu.Item>分享到微信</Menu.Item>
                <Menu.Item>分享到微博</Menu.Item>
            </SubMenu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    收入专题
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    收藏文章
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">
                    举报文章
                </a>
            </Menu.Item>
        </Menu>
    );

    // scroll to top
    const handleScrollTop = () => {
        window.scrollTo(0, 0);
    };

    const handleOnMouseEnter = () => {
        setMouseInState(true);
    };

    const handleOnMouseLeave = () => {
        setMouseInState(false);
    };

    const changeScrollTopShow = () => {
        // scrolltop function
        if (document.documentElement.scrollTop > 400) {
            // scroll down 400, show the backtop button
            dispatch(actions.toggleTopShowAction(true));
        } else {
            dispatch(actions.toggleTopShowAction(false));
        }
        // fix recommend function
        const headerHeight = 58;
        if (window.scrollY + headerHeight >= originOffset) {
            setFixRecommend(true);
        } else {
            setFixRecommend(false);
        }
        // switch header
        if (window.scrollY >= titleOffset) {
            dispatch(actions.showTitleHeaderAction());
        } else {
            dispatch(actions.showOriginHeaderAction());
        }
    };

    const debounceChangeScrollTopShow = debounce(changeScrollTopShow, 100);

    const bindEvents = () => {
        // listening to some events
        window.addEventListener("scroll", debounceChangeScrollTopShow);
    };

    // like and dislike
    const handleLike = () => {
        if (loginState.login && detailState.preference === "") {
            dispatch(actions.likeAction());
        } else if (detailState.preference === "like") {
            // remove like
            dispatch(actions.removePreferenceAction());
        } else if (detailState.preference === "dislike") {
            // alert
            dispatch(actions.showMessageAction());
        } else {
            history.push("/login");
        }
    };

    const handleDislike = () => {
        if (loginState.login && detailState.preference === "") {
            dispatch(actions.dislikeAction());
        } else if (detailState.preference === "dislike") {
            // remove dislike
            dispatch(actions.removePreferenceAction());
        } else if (detailState.preference === "like") {
            // alert
            dispatch(actions.showMessageAction());
        } else {
            history.push("/login");
        }
    };

    const handleOnClickLikedUser = () => {
        setShowLikedUsers(true);
    };

    const handleOnClickSponse = () => {
        dispatch(actions.openSponseAction());
    };

    const closeModal = (name) => {
        switch (name) {
            case "likedUser":
                setShowLikedUsers(false);
                break;
            case "sponseDialog":
                dispatch(actions.hideSponseAction());
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        dispatch(actions.getDetailAction());
        bindEvents();
        originOffset = refRecommend.current.offsetTop;
    }, []);

    useEffect(() => {
        titleOffset =
            refTitle.current.offsetTop + refTitle.current.clientHeight;
    }, [refTitle.current]);

    useEffect(() => {
        if (detailState.showMessage) {
            setTimeout(() => {
                dispatch(actions.hideMessageAction());
            }, 3000);
        }
    }, [detailState.showMessage]);

    return (
        <div>
            {showLikedUsers && (
                <Mask>
                    <LikedUser
                        handleOnClose={closeModal}
                        title={`${detailState.likes}人点赞`}
                        list={detailState.likedUsers}
                    />
                </Mask>
            )}
            {detailState.showSponse && (
                <Mask>
                    <SponseDialog
                        handleOnClose={closeModal}
                        authorAvatar={detailState.authorInfo.imgUrl}
                    />
                </Mask>
            )}
            {detailState.showReport && (
                <Mask>
                    <ReportDialog />
                </Mask>
            )}
            <DetailWrapper>
                <CSSTransition
                    in={detailState.showMessage}
                    timeout={300}
                    classNames="alert"
                    appear={false}
                    unmountOnExit
                >
                    <Popup content="You can't like while dislike!" />
                </CSSTransition>
                <Main>
                    <BlogWrapper>
                        <Header ref={refTitle}>{detailState.title}</Header>
                        <AuthorColumn>
                            <img
                                src={detailState.authorInfo.imgUrl}
                                alt="author avatar"
                            />
                            <AuthorDescribe>
                                <div className="name">
                                    <p style={{ lineHeight: "25px" }}>
                                        {detailState.authorInfo.name}
                                    </p>
                                    <a
                                        href="/"
                                        className="follow"
                                        style={{ lineHeight: "25px" }}
                                    >
                                        <span className="iconfont">
                                            &#xe60d;
                                        </span>
                                        关注
                                    </a>
                                </div>
                                <TextInformation>
                                    <span className="level iconfont">
                                        &#xe6b2;
                                    </span>
                                    <span className="level">
                                        {detailState.authorInfo.level}
                                    </span>
                                    <p>{detailState.postTime}</p>
                                    <span>
                                        字数 {detailState.authorInfo.wordAmount}
                                    </span>
                                    <span>
                                        阅读 {detailState.authorInfo.readAmount}
                                    </span>
                                </TextInformation>
                            </AuthorDescribe>
                        </AuthorColumn>
                        <Content
                            dangerouslySetInnerHTML={{
                                __html: detailState.content,
                            }}
                        ></Content>
                        <BottomLine>
                            <Container>
                                <RoundButton
                                    style={{ marginRight: "1rem" }}
                                    onClick={() => {
                                        handleLike();
                                    }}
                                    className={`${
                                        detailState.preference === "like" &&
                                        "activate"
                                    }`}
                                >
                                    <AiFillLike />
                                </RoundButton>
                                <div
                                    style={{
                                        marginRight: "1rem",
                                        cursor: "pointer",
                                    }}
                                    onClick={handleOnClickLikedUser}
                                >
                                    {detailState.likes}人点赞
                                    <span className="iconfont">&#xe607;</span>
                                </div>
                                <RoundButton
                                    onClick={() => {
                                        handleDislike();
                                    }}
                                    className={`${
                                        detailState.preference === "dislike" &&
                                        "activate"
                                    }`}
                                >
                                    <AiFillDislike />
                                </RoundButton>
                            </Container>
                            <Container>
                                <a
                                    href="/"
                                    style={{
                                        marginRight: "1rem",
                                        color: "inherit",
                                        textDecoration: "none",
                                    }}
                                >
                                    <AiFillSwitcher />
                                    随笔
                                </a>
                                <div>
                                    <Dropdown
                                        overlay={menu}
                                        placement="topCenter"
                                    >
                                        {/* <Button>topCenter</Button> */}
                                        <RoundButton>
                                            <AiOutlineEllipsis />
                                        </RoundButton>
                                    </Dropdown>
                                </div>
                            </Container>
                        </BottomLine>
                        <BreakLine />
                        <SponseWrapper>
                            <p>“小礼物走一走，来简书关注我”</p>
                            <Button
                                className="solid"
                                onClick={handleOnClickSponse}
                            >
                                赞赏支持
                            </Button>
                            {detailState.sponse > 0 ? (
                                <p>共{detailState.sponse}人赞赏</p>
                            ) : (
                                <p>还没有人赞赏，支持一下</p>
                            )}
                        </SponseWrapper>
                        <AuthorColumn
                            style={{
                                backgroundColor: "#fafafa",
                                padding: "12px 16px",
                            }}
                        >
                            <img
                                src={detailState.authorInfo.imgUrl}
                                alt="author avatar"
                            />
                            <AuthorDescribe>
                                <div className="name">
                                    <p style={{ lineHeight: "25px" }}>{detailState.authorInfo.name}</p>
                                    <a
                                        href="/"
                                        className="follow"
                                        style={{ lineHeight: "25px" }}
                                    >
                                        <span className="iconfont">
                                            &#xe60d;
                                        </span>
                                        关注
                                    </a>
                                </div>
                                <TextInformation>
                                    <span className="level iconfont">
                                        &#xe6b2;
                                    </span>
                                    <span className="level">
                                        {detailState.authorInfo.level}
                                    </span>
                                    <p>{detailState.postTime}</p>
                                    <span>
                                        字数 {detailState.authorInfo.wordAmount}
                                    </span>
                                    <span>
                                        阅读 {detailState.authorInfo.readAmount}
                                    </span>
                                </TextInformation>
                            </AuthorDescribe>
                        </AuthorColumn>
                    </BlogWrapper>
                    <CommentSection
                        avatarUrl={userState.avatarUrl}
                        comments={detailState.comments}
                    />
                </Main>
                <SideWrapper>
                    <SideSection>
                        <AuthorColumn>
                            <img
                                src={detailState.authorInfo.imgUrl}
                                alt="author avatar"
                            />
                            <AuthorDescribe>
                                <div className="name">
                                    <p>{detailState.authorInfo.name}</p>
                                    <a href="/" className="follow">
                                        <span className="iconfont">
                                            &#xe60d;
                                        </span>
                                        关注
                                    </a>
                                </div>
                                <TextInformation>
                                    <p>
                                        总资产{detailState.authorInfo.asset}（约
                                        {(
                                            detailState.authorInfo.asset / 15
                                        ).toFixed(2)}
                                        元）
                                    </p>
                                </TextInformation>
                            </AuthorDescribe>
                        </AuthorColumn>
                        <BreakLine />
                        {detailState.authorInfo.workList
                            .slice(0, 3)
                            .map((work) => (
                                <WorkItem key={work.id}>
                                    <a href="/">{work.title}</a>
                                    <p>阅读{work.readTimes}</p>
                                </WorkItem>
                            ))}
                    </SideSection>
                    <SideSection
                        ref={refRecommend}
                        className={`${fixRecommend && "fix"}`}
                    >
                        <RecommendHeader>推荐阅读</RecommendHeader>
                        {detailState.recommendList.map((work) => (
                            <WorkItem key={work.id}>
                                <a href="/">{work.title}</a>
                                <p>阅读{work.readTimes}</p>
                            </WorkItem>
                        ))}
                    </SideSection>
                </SideWrapper>
                <Footer />
                {detailState.showScroll && (
                    <div>
                        <BackTop
                            onClick={handleScrollTop}
                            onMouseEnter={handleOnMouseEnter}
                            onMouseLeave={handleOnMouseLeave}
                        >
                            <span className="iconfont">&#xe633;</span>
                        </BackTop>
                        <CSSTransition
                            in={mouseInState}
                            appear={false}
                            unmountOnExit
                            timeout={200}
                            classNames="fade"
                        >
                            <BackDescribe>回到顶部</BackDescribe>
                        </CSSTransition>
                    </div>
                )}
            </DetailWrapper>
        </div>
    );
}

export default Detail;
