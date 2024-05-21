import { createContext, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";

type AuthContextValue = {
  // Selects
  signedIn: boolean;
  // Dispatchs
  onSignin(): void;
  onSignout(): void;
};

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const hasToken = window.localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return !!hasToken;
  });

  function onSignin() {
    setSignedIn(true);
  }

  function onSignout() {
    setSignedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        // Selects
        signedIn,
        // Dispatchs
        onSignin,
        onSignout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
