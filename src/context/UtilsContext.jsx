import { useState,useContext,createContext } from "react";
export const UtilsContext = createContext(null);

export default function UtilsContextProvider({ children }) {
    const [isSidebar, setIsSidebar] = useState(false);
    const [mobileShow, setMobileShow] = useState(false);

    return (
        <UtilsContext.Provider value={{ isSidebar, setIsSidebar, mobileShow, setMobileShow}}>
          {children}
        </UtilsContext.Provider>
      );
}

export const useUtils = () => {
    const utilsContext = useContext(UtilsContext)
    if(!utilsContext) return null;

    return utilsContext;
} 
