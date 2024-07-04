import { createContext, useState } from 'react';

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children  } : any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</DarkModeContext.Provider>
    </>
  );
};
export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;