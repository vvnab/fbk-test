import gitFetch from "../../../utils/gitFetch";
import fetch from "node-fetch";
import {IIssue} from "../../../models";

export default async function (req, res): Promise<string[]> {
  const [user, repository, id] = req.query.slug;
  const result = await gitFetch({
    path: `repos/${user}/${repository}/issues/${id}`
  });
  if (result.status !== 200) {
    return res.status(result.status).end(result.statusText);
  } else {
    const issue: IIssue = await result.json();
    const comments = await fetch(issue.comments_url);
    issue.comments = await comments.json();
    return res.json(issue);
  }
}