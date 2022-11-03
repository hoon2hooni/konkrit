import SearchIcon from "@components/atoms/SearchIcon";
import Logo from "@components/atoms/Logo";
import HamburgerIcon from "@components/atoms/HamburgerIcon";
import * as colors from "@styles/colors";
import Wallet from "@components/atoms/Wallet";
import styled from "styled-components";
import KaiKas_image from "@assets/image/kaikas.png";
import useAuth from "@hooks/useAuth";
import { toast } from "react-toastify";

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

const KaiKasImage = styled.img`
  width: 20px;
  height: 20px;
`;

function Header() {
  const { user, setUser } = useAuth();
  async function loginWithKaikas() {
    const provider = window?.klaytn;
    if (!provider) {
      toast.error("Kaikas를 설치해주세요 !", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    try {
      const accounts = await toast.promise(provider.enable(), {
        pending: "Kaikas 지갑 연결중",
      });
      setUser(accounts[0]);
      localStorage.setItem("_user", accounts[0]);
      toast.success(`안녕하세요 ${accounts[0].slice(0, 13)}...님`);
    } catch {
      toast.error("다시 로그인해주세요");
    }
  }
  function handleLogin() {
    loginWithKaikas();
  }

  function handleDone() {
    toast.success(`안녕하세요 ${user.slice(0, 13)}...님`);
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
      <WalletBox onClick={user ? handleDone : handleLogin}>
        {user ? <KaiKasImage src={KaiKas_image} /> : <Wallet />}
      </WalletBox>
      <MenuBox>
        <HamburgerIcon />
      </MenuBox>
    </Container>
  );
}

export default Header;
