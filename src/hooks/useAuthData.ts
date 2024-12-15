import { useEffect, useState } from "react";

export const useAuthData = () => {
  const [authData, setAuthData] = useState<{ token: string; userId: string }>({
    token: '',
    userId: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    const userId = localStorage.getItem('userId') || '';

    setAuthData({ token, userId });
  }, []);

  return authData;
};
