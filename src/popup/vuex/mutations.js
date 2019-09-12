export const userStatus = (state,user) =>{
  // state.isLogin = true;
  state.password = user;
}
export const isLogin = (state,isLogin) =>{
  state.isLogin = isLogin;
}