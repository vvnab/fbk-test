import fetch from "node-fetch";
import querystring from "querystring";

const GIT_URL = `https://api.github.com`;

interface IFetch {
  path: string;
  method?: "GET" | "POST" | "DELETE" | "PUT" | "PATCH"
  query?: any
  data?: any
  headers?: any
}


export default function ({ path, method = "GET", query, data, headers }: IFetch): Promise<any> {
  const queryString = querystring.stringify(query);
  const url = `${GIT_URL}/${path}?${queryString}`;
  return fetch(url, {
    method,
    headers,
    body: JSON.stringify(data)
  });
}