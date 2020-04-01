import fetch from "../../utils/gitFetch";
import {IList, IUser} from "../../models";

export default async function (req, res): Promise<string[]> {
  const { q, per_page = 10 } = req.query;
    const result = await fetch({
      path: "search/users",
      query: { q, per_page }
    });
    if (result.status !== 200) {
      return res.status(result.status).end(result.statusText);
    } else {
      const users: IList<IUser> = await result.json();
      return res.json(users.items.map(i => i.login));
    }
}