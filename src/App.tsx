import React, { useEffect, useState } from "react";
import AuthContext from "./store/auth-context";
import Router from "./router/Router";
import CryptoJS from "crypto-js"
import { useNavigate } from "react-router-dom";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const key = "isAuthenticated";

  useEffect(() => {
    const encryptedDataFromStorage = localStorage.getItem(key) as string;

    if (encryptedDataFromStorage != null){
      const bytes = CryptoJS.AES.decrypt(encryptedDataFromStorage, key);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

      if (decryptedData === 'true') {
        setIsLoggedIn(true);
      }
      console.log(decryptedData+" decryptedData");
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem(key);
    setIsLoggedIn(false);
  };

  const encryptedData = CryptoJS.AES.encrypt("true", key).toString();
  const loginHandler = () => {
    localStorage.setItem(key, encryptedData);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
    value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler,
    }}
  >
    <Router/>
  </AuthContext.Provider>
  );
};

export default App;




