const STORE_AUTH_TOKEN = "STORE_AUTH_TOKEN";

const storeAuthToken = (token: string) => ({
  type: STORE_AUTH_TOKEN,
  payload: token,
});

export { storeAuthToken, STORE_AUTH_TOKEN };
