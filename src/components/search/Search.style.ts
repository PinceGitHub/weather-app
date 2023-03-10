import { styled, alpha } from "@mui/material/styles";
import { Stack, Autocomplete, TextField } from "@mui/material";

export const SearchContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

export const SearchIconWrapper = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  position: "absolute",
  pointerEvents: "none",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledAutoComplete = styled(Autocomplete)(({ theme }) => ({
  "&": {
    width: "100%",
  },
  "& .MuiOutlinedInput-root": {
    padding: "0",
  },
}));

export const SearchInputField = styled(TextField)(({ theme }) => ({
  "& .MuiAutocomplete-input": {
    color: theme.palette.common.white,
    textAlign: "center",
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));
