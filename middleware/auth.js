function authenticate(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== '123456') return res.status(403).json({ error: 'Forbidden' });
  next();
}
module.exports = { authenticate };
