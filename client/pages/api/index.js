// client/pages/api/index.js
import register from './register';

export default ((req, res) => {
  if (req.method === 'POST') {
    return register(req, res);
  }

  res.status(405).json({ message: 'Method not allowed' });
})();
