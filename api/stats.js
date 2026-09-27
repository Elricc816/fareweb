export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const token = process.env.DISCORD_BOT_TOKEN;
  if (!token) return res.status(503).json({ error: 'DISCORD_BOT_TOKEN is not configured.' });
  try {
    const response = await fetch('https://discord.com/api/v10/users/@me/guilds?with_counts=true&limit=200');
    const text = await response.text();
    if (!response.ok) return res.status(response.status).json({ error: 'Discord API request failed.' });
    const guilds = JSON.parse(text);
    const users = guilds.reduce((sum, g) => sum + Number(g.approximate_member_count || 0), 0);
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return res.status(200).json({ servers: guilds.length, users, updatedAt: new Date().toISOString() });
  } catch (error) {
    return res.status(500).json({ error: 'Unable to load live statistics.' });
  }
}
