import fetch from "../../utils/gitFetch";
import { IList, IRepository } from "../../models";

export default async function (req, res): Promise<string[]> {
  const { q, per_page = 10 } = req.query;
  const result = await fetch({
    path: "search/repositories",
    query: { q, per_page }
  });
  if (result.status !== 200) {
    return res.status(result.status).end(result.statusText);
  } else {
    const repositories: IList<IRepository> = await result.json();
    return res.json(repositories.items.map(i => i.name));
  }
}