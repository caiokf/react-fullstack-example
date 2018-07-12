export default method => (req, res, next) => {
  if (!req.userJwt) {
    return res.status(401).json({ error: 'Request not authenticated' })
  }

  if (method.authorize && !method.authorize(req, res, next)) {
    return res.status(403).json({ error: 'Unauthorized' })
  }

  if (method.validate && !method.validate(req, res, next)) {
    return res.status(400).json({ error: 'Bad Request' })
  }

  return method.action(req, res, next)
}
