import httpService from "./httpService";
import config from "../config";
import jwtDecode from "jwt-decode";

const endPointUrl = config.apiEndPoint + "/auth";
const tokenKey = "token";

export async function login(email, password){
  const {data: jwt} = await httpService.post(endPointUrl, {email, password});
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export function logout(){
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser(){
  try{
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  }catch (e) {
    console.log("Exception: " + e);
    return null;
  }
}

export default {
  login,
  logout,
  loginWithJwt,
  getJwt,
  getCurrentUser
}