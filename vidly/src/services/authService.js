import httpService from "./httpService";
import config from "../config";

const endPointUrl = config.apiEndPoint + "/auth";

export function login(email, password){
  return httpService.post(endPointUrl, {email, password});
}