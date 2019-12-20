const core = require("@actions/core");

try {
  const mySecret = core.getInput("my-secret");
  console.log(`DO SOMETHING REALLY COOL WITH THE SECRET FOR YEARS`);
} catch (error) {
  core.setFailed(error.message);
}
