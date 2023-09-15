import styled from "styled-components";
import { Link } from "react-router-dom";

const Gnbwrap = styled.div`
    font-size: 16px;
`;

const Wrap = styled.div`
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    border: 0;
    background: none;
    text-decoration: none;
`;

const Items = styled.div`
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
`;

const Title = styled.h1`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0;
    font-weight: 500;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const Anchor = styled(Link)`
    display: block;
    padding: 15px 0;
    line-height: 100%;
    color: #333;
    text-decoration: none;
    font-style: normal;
    font-size: 16px;
    font-family: "Noto Sans KR", "ë‹ì›€", sans-serif;
    font-weight: 400;
    user-select: none;
    img {
        width: 200px;
        height: 30px;
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
    }
`;

export default function Header() {
    return (
        <Gnbwrap>
            <Wrap>
                <Items>
                    <In>
                        <Title>
                            <Anchor to="">
                                <img
                                    src="https://d10erikh2ay4p8.cloudfront.net/common/logo.png"
                                    alt="SECURIST"
                                ></img>
                            </Anchor>
                        </Title>
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
                                        <a href="">부가서비스</a>
                                    </li>
                                </Depth1>
                            </Gnb>
                        </Flexgroup>
                    </In>
                </Items>
            </Wrap>
        </Gnbwrap>
    );
}
