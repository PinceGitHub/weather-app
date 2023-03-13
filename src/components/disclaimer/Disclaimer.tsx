import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Disclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(false);

  const handleClose = () => {
    sessionStorage.setItem("DISCLAIMER", "agreed");
    setShowDisclaimer(false);
  };

  useEffect(() => {
    const disclaimerConsent = sessionStorage.getItem("DISCLAIMER");
    if (!disclaimerConsent) setShowDisclaimer(true);

    // eslint-disable-next-line
  }, []);

  return (
    <Dialog
      open={showDisclaimer}
      TransitionComponent={Transition}
      keepMounted
      onClose={(e, r) => {
        if (r && r === "backdropClick") {
          return;
        }
      }}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        <Typography component="p" textAlign="center" color="red">
          Disclaimer
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Welcome to Weather App, which has been created solely for proof of
          concept purposes. The app is not intended to be a full-fledged product
          that will be released to the public.
        </DialogContentText>
        <DialogContentText mt={1}>
          Thank you for taking the time to explore this app.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Disclaimer;
