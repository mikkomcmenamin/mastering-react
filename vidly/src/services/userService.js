import httpService from "./httpService";
import config from "../config";

const endPointUrl = config.apiEndPoint + "/users";

export function register(user) {
  return httpService.post(endPointUrl, { email: user.username, password: user.password, name: user.name });
}
