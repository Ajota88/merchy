export default async function handler(req, res) {
  const { name } = req.body;
  return res.send(`Hello ${name}, you just parsed the request body!`);
}
