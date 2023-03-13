import { Alert, Snackbar, Typography } from "@mui/material";
import { createContext, useState } from "react";

type ShowType = {
  show: true;
  messageType: "success" | "error";
  message: "";
};

type HideType = {
  show: false;
  messageType?: never;
  message?: never;
};

type SnackbarType = ShowType | HideType;

type SnackbarProviderProps = {
  children: React.ReactNode;
};

type SnackbarContextType = React.Dispatch<React.SetStateAction<SnackbarType>>;

export const SnackbarContext = createContext<SnackbarContextType>(null!);

export const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const [snackBarState, setSnackBarState] = useState<SnackbarType>({
    show: false,
  });

  return (
    <SnackbarContext.Provider value={setSnackBarState}>
      {children}

      <Snackbar
        sx={{ maxWidth: "30%" }}
        open={snackBarState.show}
        autoHideDuration={6000}
        onClose={() => {
          setSnackBarState({ show: false });
        }}
      >
        {snackBarState.messageType && (
          <Alert
            onClose={() => {
              setSnackBarState({ show: false });
            }}
            severity={snackBarState.messageType}
          >
            <Typography flexWrap="wrap">{snackBarState.message}</Typography>
          </Alert>
        )}
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
