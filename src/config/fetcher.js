import req from "./api";

export const getFetcher = (url, params) =>
  req
    .get(url, {
      params,
    })
    .then((res) => {
      return res;
    });
