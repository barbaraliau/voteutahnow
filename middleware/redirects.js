export default function (req, res, next) {
  console.log(req)
  if (req.url !== '/organizations' || req.url !== '/vote') {
    res.writeHead(301, {
      Location: '/vote'
    })
    res.end()
  } else {
    next()
  }
}
