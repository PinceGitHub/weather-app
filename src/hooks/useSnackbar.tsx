import { useContext } from "react";
import { SnackbarContext } from "../contexts/SnackbarContext";

const useSnackbar = () => {
  const snackBar = useContext(SnackbarContext);

  if (!snackBar) {
    throw new Error(
      "useSnackbar has to be used within <SnackbarContext.Provider>"
    );
  }

  return snackBar;
};

export default useSnackbar;
