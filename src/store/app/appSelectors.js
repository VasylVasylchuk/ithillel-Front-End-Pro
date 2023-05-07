export const getToken = (state) => state.app.token;
export const getIsLogin = (state) => !state.app.token;