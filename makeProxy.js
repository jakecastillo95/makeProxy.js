export default async function handler(req, res) {
  const data = req.body;

  await fetch("https://hook.us1.make.com/your-webhook-id", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  res.status(200).json({ status: "forwarded" });
}
