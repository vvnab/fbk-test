import fetch from "node-fetch";

export default async function (url) {
  const result = await fetch(url);
  if (result.status !== 200) {
    throw new Error(result.statusText);
  } else {
    return await result.json();
  }
}