function hex(bytes) {
  var buf = require('crypto').randomBytes(bytes);
  return buf.toString('hex');
}

module.exports.hex = hex;
