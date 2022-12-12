import { AuthContext } from "@contexts/AuthContext";
import { useState } from "react";

function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;