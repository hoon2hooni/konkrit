import { AuthContext } from "@contexts/AuthContext";

import { useState } from "react";

function AuthContextWrapper({ children }) {
  const [user, setUser] = useState({ tokenId: "", isLogin: false });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextWrapper;
