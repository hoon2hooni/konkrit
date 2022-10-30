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

function App() {
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    if (window.klaytn) {
      window.klaytn.on("accountsChanged", () => {
        window.location.reload();
      });
    }
  }, []);

  useEffect(() => {
    const account = localStorage.getItem("persist:auth");
    if (account) {
      setUser({ tokenId: account, isLogin: true });
      console.log("I am okay");
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
