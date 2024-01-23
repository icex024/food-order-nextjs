const TOKEN_KEY = "foodOrderSessionToken";

const tokenStorage = {
  setToken: (token: string) =>
    wrapper(() => localStorage.setItem("foodOrderSessionToken", token)),
  getToken: () => wrapper(() => localStorage.getItem(TOKEN_KEY)),
  removeToken: () => wrapper(() => localStorage.removeItem(TOKEN_KEY)),
};

function wrapper<T>(callback: () => T) {
  try {
    if (localStorage) {
      return callback();
    }
  } catch (error) {
    console.error(error);
  }
  return null;
}
export default tokenStorage;
