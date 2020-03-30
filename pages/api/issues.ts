import fetch from "../../utils/gitFetch";

export default async function (req, res): Promise<string[]> {
  const { q, page = 1, per_page = 10 } = req.query;
  const result = await fetch({
    path: "search/issues",
    query: { q, per_page, page, order: "asc" }
  });
  if (result.status !== 200) {
    return res.status(result.status).end(result.statusText);
  } else {
    const issues = await result.json();
    return res.json(issues);
  }
}