import GlobalStyle from "./GlobalStyle";
import Header from "@components/templates/Header";
import TopBanner from "@components/templates/TopBanner";
import Events from "@components/templates/Events";
import ItemsOnSale from "@components/templates/ItemsOnSale";
import OpenseaTopCollections from "@components/templates/OpenseaTopCollections";
import Onboarding from "@components/templates/Onboarding";
import Footer from "@components/templates/Footer";

import { useEffect, useContext } from "react";
import { AuthContext } from "@contexts/AuthContext";

const klaytn = window?.klaytn;

function App() {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    if (klaytn) {
      klaytn.on("accountsChanged", () => {
        setUser({ tokenId: klaytn.selectedAddress, isLogin: true });
        if (klaytn.selectedAddress) {
          localStorage.setItem("persist:auth", klaytn.selectedAddress);
        }
      });
    }
  }, [setUser]);

  useEffect(() => {
    async function loginKaikas() {
      if (klaytn) {
        try {
          const accounts = await klaytn.enable();
          setUser({ tokenId: accounts[0], isLogin: true });
          localStorage.setItem("persist:auth", accounts[0]);
        } catch {
          console.error("에러");
        }
      } else {
        console.log("false");
      }
    }

    const account = localStorage.getItem("persist:auth");

    if (!account) {
      return;
    }

    if (account !== klaytn.selectedAddress) {
      loginKaikas();
    } else {
      setUser({ tokenId: account, isLogin: true });
    }
  }, [setUser]);
  return (
    <>
      <GlobalStyle />
      <Header />
      <TopBanner></TopBanner>
      <Events></Events>
      <ItemsOnSale />
      <OpenseaTopCollections />
      <Onboarding></Onboarding>
      <Footer></Footer>
    </>
  );
}

export default App;
