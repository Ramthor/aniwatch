import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { FaRandom } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
const Header = () => {
  const [toggle, setToggle] = useState(true);
  const [mobileSearch, setMobileSearch] = useState(false);

  const HandleToggle = () => {
    setToggle(!toggle);
  };

  const HandleSearch = () => {
    setMobileSearch(!mobileSearch);
  };

  return (
    <Nav>
      <Container>
        <MainNav>
          <BurgerIcon>
            <img src="/images/burger-icon.png" alt="" />
          </BurgerIcon>
          <Wrap>
            <img src="/images/logo.png" />
          </Wrap>

          <SearchContent>
            {mobileSearch ? (
              <button className="filter-btntwo">
                <FaFilter />
              </button>
            ) : (
              ""
            )}
            <Search className={mobileSearch ? "isactive" : "  isnotactive"}>
              <input type="text" placeholder="Search anime..." />
              <button className="submit-btn">
                <i>
                  <FaSearch />
                </i>
              </button>
              <button className="filter-btn">
                {mobileSearch ? "" : "Filter"}
              </button>
            </Search>
          </SearchContent>

          <SocialMedia>
            <div className="join">
              <span>Join now</span>
            </div>
            <Media>
              <Wraper>
                <Link>
                  <img src="/images/discord-icon.png" alt="" />
                </Link>
              </Wraper>
              <Wraper>
                <Link>
                  <img src="/images/Telegram.png" alt="" />
                </Link>
              </Wraper>
              <Wraper>
                <Link>
                  <img src="/images/reddit-icon.png" alt="" />
                </Link>
              </Wraper>
              <Wraper>
                <Link>
                  <img src="/images/twitter-icon.png" alt="" />
                </Link>
              </Wraper>
            </Media>
          </SocialMedia>
          <Toggles>
            <TogglesWraper>
              <img src="./images/live.svg" alt="" />
              <span>Watch2gether</span>
            </TogglesWraper>
            <TogglesWraper>
              <FaRandom style={{ fontSize: "20px", color: "#ffdd95" }} />
              <span>Random</span>
            </TogglesWraper>
            <TogglesWraper>
              <SelectLanguage
                onClick={HandleToggle}
                className={toggle ? "en-on" : "jp-on"}
              >
                <span className={toggle ? "en-on off" : "off"}>EN</span>
                <span className={toggle ? "off" : "jp-on off"}>JP</span>
              </SelectLanguage>
              <span>Anime Name</span>
            </TogglesWraper>
            <TogglesWraper>
              <IoChatbubbles style={{ fontSize: "20px", color: "#ffdd95" }} />
              <span>Community</span>
            </TogglesWraper>
          </Toggles>
        </MainNav>
        <LoginContent>
          <MobileSearch onClick={HandleSearch}>
            <FaSearch />
          </MobileSearch>
          <Login>
            <LoginBtn>Login</LoginBtn>
          </Login>
        </LoginContent>
      </Container>
    </Nav>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 320px) {
    width: 100vw;
  }
  @media only screen and (max-width: 575px) {
    width: calc(100%);
  }
  @media only screen and (max-width: 375px) {
    width: calc(100vw);
  }
  @media only screen and (max-width: 425px) {
    width: calc(100%);
  }
  @media only screen and (max-width: 1199px) {
    width: calc(100%);
  }
  @media only screen and (max-width: 1023px) {
    width: 100%;
  }
`;

const Nav = styled.div`
  background: #242428;
  height: 70px;
  max-width: 1800px;
  display: flex;
  align-items: center;
  flex: 2fr 1fr;
  margin: 0 53px;
  padding: 0 15px;

  @media only screen and (max-width: 575px) {
    margin: 0 15px;

    height: 50px;
    padding: 0;
  }

  @media only screen and (max-width: 1023px) {
    margin: 0;
  }
  @media only screen and (max-width: 1199px) {
    margin: 0px 10px;
    height: 80px;
  }
  @media only screen and (max-width: 1599px) {
    margin: 0px 10px;
    height: 80px;
  }
  @media only screen and (max-width: 759px) {
    margin: 0 15px;
    height: 55px;
    padding: 0;
  }
`;
const MainNav = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const BurgerIcon = styled.div`
  height: 40px;
  width: 25px;
  display: flex;
  align-items: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 1199px) {
    height: 35px;
    width: 25px;
    margin: 0 15px 0px 0;
  }
  @media only screen and (max-width: 1599px) {
    height: 35px;
    width: 25px;
  }
  @media only screen and (max-width: 575px) {
    width: 20px;
    height: 30px;
  }
`;

const Wrap = styled.div`
  height: 40px;
  display: block;
  margin: 0 20px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  @media only screen and (max-width: 1199px) {
    width: 120px;
    height: auto;
    margin-left: 10px;
  }

  @media only screen and (max-width: 1599px) {
    height: 80px;
    width: 120px;
  }

  @media only screen and (max-width: 575px) {
    width: 100px;
    margin-left: 10px;
  }
`;
const SearchContent = styled.div`
  .filter-btntwo {
    display: none;
  }
  @media only screen and (max-width: 1299px) {
    .filter-btntwo {
      position: absolute;

      padding: 10px;
      top: 70px;
      left: 0;
      right: 0px;
      z-index: 1;
      display: flex;
      align-items: center;
      width: 40px;
      background-color: #fafdff;
    }
    .isnotactive {
      display: none;
    }
    .isactive {
      display: flex;
      position: absolute;
      top: 70px;
      left: 50px;
      right: 0px;

      width: calc(100vw - 100px);
      background-color: #fafdff;
    }
  }
`;

const Search = styled.div`
  position: relative;
  background-color: #fff;
  width: 400px;
  height: 40px;
  display: flex;
  align-items: center;
  color: #111;
  font-weight: 900;
  padding: 6px 100px 6px 15px;
  margin-right: 25px;

  input {
    border: none;
    outline: none;
    font-size: 14px;

    &::placeholder {
      font-family: var(--poppins);
    }
  }
  .submit-btn {
    right: 50px;
    position: absolute;
    border: none;
    height: 40px;
    width: 40px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      color: #111111da;
      font-size: 16.2px;
      cursor: pointer;
      display: flex;
      z-index: 2;
    }
  }

  .filter-btn {
    position: absolute;
    border-radius: 3px;
    font-size: 12.8px;
    font-family: var(--poppins);
    font-weight: 300;
    right: 7px;
    background: #757575;
    height: 26px;
    color: #fff;
    padding: 0 6px;
    border: none;
    z-index: 3;

    @media only screen and (max-width: 1299px) {
      display: none;
    }
  }

  @media only screen and (max-width: 759px) {
  }
`;

const SocialMedia = styled.div`
  height: 44px;
  display: flex;
  margin-right: 8.1px;

  .join {
    font-size: 16px;
    display: block;
    margin-right: 22px;
    font-weight: 400;
    opacity: 0.5;
    width: 38px;
    line-height: 1;
    padding: 8px 4.5px;
  }
  @media only screen and (max-width: 759px) {
    display: none;
  }
  @media only screen and (max-width: 1023px) {
    display: none;
  }
  @media only screen and (max-width: 1599px) {
    .join {
      display: none;
    }
  }
`;
const Media = styled.div`
  height: 40px;
  display: flex;
  padding: 6px 3px;
`;
const Wraper = styled.div`
  height: 32px;
  width: 31px;
  margin-right: 6px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Toggles = styled.div`
  display: flex;
  height: 40px;

  align-items: center;
  @media only screen and (max-width: 759px) {
    display: none;
  }
`;
const TogglesWraper = styled.div`
  color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 8px;
  padding-top: 3px;
  cursor: pointer;
  img {
    height: 20px;
  }
  gap: 6px;

  span {
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
  }
  @media only screen and (max-width: 759px) {
    display: none;
  }
`;

const SelectLanguage = styled.div`
  background: #757575;
  display: flex;

  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 13px;
  font-weight: 500;
  .en-on {
    background-color: #ffdd95;
    color: #111;
  }
  .jp-on {
    background-color: #ffdd95;
    color: #111;
  }
  .off {
    font-size: 12px;
    display: flex;
    width: 26px;
    height: 20px;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
  }
  @media only screen and (max-width: 759px) {
    display: none;
  }
`;
const LoginContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  @media only screen and (max-width: 759px) {
  }
  @media only screen and (max-width: 575px) {
    font-size: 20px;
  }
`;
const MobileSearch = styled.div`
  display: none;

  @media only screen and (max-width: 1299px) {
    display: flex;
    align-items: center;
  }
`;
const Login = styled.div`
  width: 85px;
  @media only screen and (max-width: 759px) {
  }
  @media only screen and (max-width: 575px) {
    margin-right: 0px;
  }
`;

const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px 0 15px;
  height: 40px;
  width: 70px;
  font-size: 14px;
  font-weight: 600;
  font-family: var(--poppins);
  border: 1px solid #ffdd95;
  background-color: #ffdd95;
  margin-left: 15px;
  border-radius: 3.2px;
  text-align: center;
  line-height: 40px;
  vertical-align: middle;

  @media only screen and (max-width: 759px) {
    height: 40px;
    width: 60px;
    font-size: 14px;
  }

  @media only screen and (max-width: 575px) {
    width: 55px;
    height: 35px;
    font-size: 13px;
  }
`;
