import { createContext, useCallback, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";

type AuthContextValue = {
  // Selects
  signedIn: boolean;
  // Dispatchs
  onSignin(accessToken: string, refreshToken: string): void;
  onSignout(): void;
};

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const hasToken = window.localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return !!hasToken;
  });

  const onSignout = useCallback(() => {
    window.localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    window.localStorage.removeItem(localStorageKeys.REFRESH_TOKEN);

    setSignedIn(false);
  }, []);

  const onSignin = useCallback((accessToken: string, refreshToken: string) => {
    window.localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    window.localStorage.setItem(localStorageKeys.REFRESH_TOKEN, refreshToken);

    setSignedIn(true);
  }, []);

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
