function hex(bytes) {
  var buf = require('crypto').randomBytes(bytes);
  return token = buf.toString('hex');
}

module.exports.hex = hex;
