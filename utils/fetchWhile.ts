import fetch from "node-fetch";

async function _wait(ms: number) {
  return new Promise((resolve: Function) => {
    setTimeout(resolve, ms);
  });
}

export default async function fetchWhile(url, maxCount = 10, wait = 5000) {
  let count = 0;
  const loop = async () => {
    if (++count > maxCount) {
      throw new Error("Max count loop exceeded");
    } else {
      const result = await fetch(url);
      if (result.status === 200) {
        return result.json();
      } else if (result.status === 403) {
        console.log(`403: waiting ${wait / 1000} sec`);
        await _wait(wait);
        wait += wait;
        return loop();
      } else {
        throw new Error(result.statusText);
      }
    }
  }
  return loop();
}