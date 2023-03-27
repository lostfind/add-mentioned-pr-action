import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  const token = core.getInput("repo-token", { required: true });
} catch (error) {
  if (error instanceof Error) core.setFailed(error.message);
}
