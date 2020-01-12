import httpService from "./httpService";
import config from "../config";

export function getGenres(){
  return httpService.get(config.apiEndPoint + "/genres");
}
