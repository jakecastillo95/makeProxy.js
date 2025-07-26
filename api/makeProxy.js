export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;

    const response = await fetch("https://hook.us1.make.com/b7n9h1edvsq54pqhu36bwfx6hruuf584", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    res.status(200).json({ status: "forwarded", webhookResponse: await response.text() });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
