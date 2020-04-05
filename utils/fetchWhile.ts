import fetch from "node-fetch";

export default async function (url, maxCount = 10, wait = 5000) {
  var count = 0;
  function loop() {
    return fetch(url)
      .then(async function (result: any) {
        if (++count > maxCount) {
          throw new Error("Max count loop exceeded");
        } else {
          if (result.status === 200) {
            return await result.json();
          } else if (result.status === 403) {
            wait *= count;
            console.log(`403: waiting ${wait / 1000} sec`);
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve(loop());
              }, wait);
            });
          } else {
            throw new Error(result.statusText);
          }
        }
      });
  }
  return loop();
}