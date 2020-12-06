import { DISPLAY_SNACKBAR, REMOVE_SNACKBAR } from "./index";

const setDisplaySnackbar = (message: string) => ({
  type: DISPLAY_SNACKBAR,
  payload: message,
});

const removeDisplaySnackbar = () => ({
  type: REMOVE_SNACKBAR,
});

export { setDisplaySnackbar, removeDisplaySnackbar };
