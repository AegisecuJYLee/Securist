import styled from "styled-components";
import { Link } from "react-router-dom";

const Gnbwrap = styled.div`
    font-size: 16px;
    a {
        color: #333;
        text-decoration: none;
        font-style: normal;
        font-size: 16px;
        font-family: "Noto Sans KR", "돋움", sans-serif;
        font-weight: 400;
    }
    img {
        max-width: 100%;
        vertical-align: top;
    }
`;

const Wrap = styled.div`
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    border: 0;
    background: none;
    text-decoration: none;
`;

const Menu = styled.div`
    border-bottom: 1px solid #e3e3e3;
    position: relative;
    z-index: 20;
    background: #fff;
`;

const In = styled.div`
    padding: 20px 0;
    text-align: right;
    font-size: 0;
    width: 1200px;
    margin: 0 auto;
    position: relative;
    box-sizing: border-box;
    h1 {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 0;
        a {
            display: block;
            padding: 15px 0;
            line-height: 100%;
            img {
                width: 200px;
                height: 30px;
            }
        }
    }
`;

const Flexgroup = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Gnb = styled.div`
    display: inline-block;
    vertical-align: top;
`;

const Depth1 = styled.ul`
    width: 100%;
    height: 62px;
    position: sticky;
    top: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    li {
        display: inline-block;
        position: relative;
        a {
            color: #000;
            font-size: 16px;
            font-weight: 700;
            padding: 15px 20px;
            display: block;
        }
    }
`;

const Toputil = styled.div`
    display: inline-block;
    vertical-align: top;
    ul li a {
        color: #222;
        padding: 15px 0 15px 25px;
        background-size: 20px 20px !important;
        position: relative;
    }
    .login {
        margin-left: 30px;
        display: inline-block;
        vertical-align: top;
        position: relative;
        a {
            background: url(https://d10erikh2ay4p8.cloudfront.net/common/ico_member1.png)
                0 no-repeat;
            font-weight: 700;
        }
    }
    .join {
        margin-left: 30px;
        display: inline-block;
        vertical-align: top;
        position: relative;
        a {
            background: url(https://d10erikh2ay4p8.cloudfront.net/common/ico_member2.png)
                0 no-repeat;
            font-weight: 700;
        }
    }
`;

export default function Header() {
    return (
        <Gnbwrap>
            <Wrap>
                <Menu>
                    <In>
                        <h1>
                            <Link to="">
                                <img
                                    src="https://d10erikh2ay4p8.cloudfront.net/common/logo.png"
                                    alt="SECURIST"
                                ></img>
                            </Link>
                        </h1>
                        <Flexgroup>
                            <Gnb>
                                <Depth1>
                                    <li>
                                        <a href="">자격증</a>
                                    </li>
                                    <li>
                                        <a href="">이용방법</a>
                                    </li>
                                    <li>
                                        <a href="">정보보호 인증 관리 솔루션</a>
                                    </li>
                                    <li>
                                        <Link to="/service">부가서비스</Link>
                                    </li>
                                </Depth1>
                            </Gnb>
                            <Toputil>
                                <ul>
                                    <li className="login">
                                        <a href="">로그인</a>
                                    </li>
                                    <li className="join">
                                        <a href="">회원가입</a>
                                    </li>
                                </ul>
                            </Toputil>
                        </Flexgroup>
                    </In>
                </Menu>
            </Wrap>
        </Gnbwrap>
    );
}
