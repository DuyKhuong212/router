import React, { useEffect, useState } from "react";
import AuthContext from "./store/auth-context";
import Router from "./router/Router";
import CryptoJS from "crypto-js"


const App = () => {
  const key = "isAuthenticated";
  const gettInistvalue = () => {
    const encryptedDataFromStorage = localStorage.getItem(key) as string;

    if (encryptedDataFromStorage != null){
      const bytes = CryptoJS.AES.decrypt(encryptedDataFromStorage, key);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      return  decryptedData === 'true'
    }
    return false;
  }
  const [isLoggedIn, setIsLoggedIn] = useState(gettInistvalue);


  // useEffect(() => {
  //   const encryptedDataFromStorage = localStorage.getItem(key) as string;

  //   if (encryptedDataFromStorage != null){
  //     const bytes = CryptoJS.AES.decrypt(encryptedDataFromStorage, key);
  //     const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

  //     if (decryptedData === 'true') {
  //       setIsLoggedIn(true);
  //     }
  //   }
  //   console.log(" decryptedData");
  // }, []);


  const logoutHandler = () => {
    localStorage.removeItem(key);
    setIsLoggedIn(false);
  };

  const encryptedData = CryptoJS.AES.encrypt("true", key).toString();
  const loginHandler = () => {
    localStorage.setItem(key, encryptedData);
    setIsLoggedIn(true);
  };
  console.log("aaa")

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




