import { createContext } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
import { useHistory } from "react-router-dom";

const AuthContextProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useLocalStorage("0323Auth", {});
 
  const history = useHistory();
  let isLoggedIn = authInfo && authInfo.token;

  const initAuth = (authFormData) => {
    axios
      .post("http://localhost:9000/api/login", authFormData)
      .then(function (response) {
        
        response.data && setAuthInfo(response.data);
      })
      .catch(function (error) {
        console.log("authError", error);
      });
  };

  const logOut = () => {
    console.log("logout");
    setAuthInfo({});
    history.push("/login");
  };

  return (
    <AuthContext.Provider value={{ initAuth, logOut, isLoggedIn, authInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext();
export default AuthContextProvider;
