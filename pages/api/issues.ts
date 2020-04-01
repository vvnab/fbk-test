import fetch from "../../utils/gitFetch";
import {IList, IIssue} from "../../models";

export default async function (req, res): Promise<any[]> {
  const { q, page = 1, per_page = 10 } = req.query;
  const result = await fetch({
    path: "search/issues",
    query: { q, per_page, page, order: "asc" }
  });
  if (result.status !== 200) {
    return res.status(result.status).end(result.statusText);
  } else {
    const issues: IList<IIssue> = await result.json();
    return res.json(issues);
  }
}