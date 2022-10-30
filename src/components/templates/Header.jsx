import SearchIcon from "@components/atoms/SearchIcon";
import Logo from "@components/atoms/Logo";
import MetaMaskIcon from "@components/atoms/MetaMaskIcon";
import HamburgerIcon from "@components/atoms/HamburgerIcon";
import * as colors from "@styles/colors";
import styled from "styled-components";

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
  background-color: ${colors.bgSecondaryBlack};
  border-radius: 20px;
  width: 40px;
  height: 40px;
`;

const WalletBox = styled(GrayRoundBox)`
  margin-right: 8px;
`;

const MenuBox = styled(GrayRoundBox)`
  margin-right: 20px;
`;

function Header() {
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
      <WalletBox>
        <MetaMaskIcon />
      </WalletBox>
      <MenuBox>
        <HamburgerIcon />
      </MenuBox>
    </Container>
  );
}

export default Header;
