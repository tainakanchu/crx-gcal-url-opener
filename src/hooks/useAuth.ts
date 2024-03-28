import { useCallback, useEffect, useState, useRef } from "react";
import { getAuthToken } from "../auth";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const isSigningIn = useRef(false);

  const signIn = useCallback(() => {
    if (isSigningIn.current) {
      return;
    }
    isSigningIn.current = true;
    chrome.runtime.sendMessage({ type: "SignInRequest" }).finally(() => {
      isSigningIn.current = false;
    });
  }, []);

  const signOut = useCallback(() => {
    chrome.runtime.sendMessage({ type: "SignOutRequest" }).then(() => {
      setIsAuthenticated(false);
    });
  }, []);

  useEffect(() => {
    getAuthToken(false).then(
      () => setIsAuthenticated(true),
      () => setIsAuthenticated(false)
    );
  }, []);

  return {
    isAuthenticated,
    signIn,
    signOut,
  };
}
