import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const useGlobal = () => {
  const globalContext = useContext(GlobalContext);

  if (!globalContext) {
    throw new Error("useGlobal has to be used within <GlobalContext.Provider>");
  }

  return globalContext;
};

export default useGlobal;
