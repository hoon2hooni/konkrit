import SearchIcon from "@components/atoms/SearchIcon";
import Logo from "@components/atoms/Logo";
import MetaMaskIcon from "@components/atoms/MetaMaskIcon";
import HamburgerIcon from "@components/atoms/HamburgerIcon";
import * as colors from "@styles/colors";
import Wallet from "@components/atoms/Wallet";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "@contexts/AuthContext";

const Container = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 999;
  background-color: ${colors.bgBlack};
`;

const LogoWrapper = styled.div`
  margin-right: 16px;
  margin-left: 16px;
`;

const SearchBarWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SearchIconWrapper = styled.div`
  margin-left: 16px;
`;

const GrayRoundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.bgSecondary};
  border-radius: 20px;
  width: 40px;
  height: 40px;
`;

const WalletBox = styled(GrayRoundBox)`
  margin-right: 8px;
  background-color: ${colors.textYellow};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MenuBox = styled(GrayRoundBox)`
  margin-right: 20px;
`;

// const TokenBox = styled`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100px;
//   height: 40px;
//   border-radius: 20px;
//   font-family: MarkPro-Heavy;
// `;

function Header() {
  const { user, setUser } = useContext(AuthContext);
  async function loginKaikas() {
    if (window.klaytn) {
      try {
        const accounts = await window.klaytn.enable();
        setUser({ tokenId: accounts[0], isLogin: true });
        localStorage.setItem("persist:auth", accounts[0]);
      } catch {
        console.error("에러");
      }
    } else {
      console.log("false");
    }
  }

  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SearchBarWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </SearchBarWrapper>
      <WalletBox
        onClick={() => {
          loginKaikas();
        }}
      >
        {user.isLogin ? <MetaMaskIcon /> : <Wallet />}
      </WalletBox>
      <MenuBox>
        <HamburgerIcon />
      </MenuBox>
    </Container>
  );
}

export default Header;
