function redisClient(host, port,db = 0) {
  return {
    host,
    port,
    db
  }
}
module.exports = {
  redisClient
}