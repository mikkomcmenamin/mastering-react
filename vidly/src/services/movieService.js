import httpService from "./httpService";
import config from "../config";

const endPointUrl = config.apiEndPoint + "/movies";

function movieUrl(id){
  return `${endPointUrl}/${id}`;
}

export function getMovies(){
  return httpService.get(endPointUrl);
}

export function getMovie(id) {
  return httpService.get(movieUrl(id));
}

export function deleteMovie(movie) {
  return httpService.delete(movieUrl(movie._id));
}

export function saveMovie(movie) {
  if(movie._id){
    const { body } = {...movie};
    delete body._id;
    return httpService.put(movieUrl(movie._id), body);
  }

  return httpService.post(endPointUrl, movie);
}