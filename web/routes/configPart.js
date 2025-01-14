const _ = require('lodash');
const fs = require('co-fs');

const parts = {
  candleWriter: 'config/plugins/candleWriter'
}

const gekkoRoot = __dirname + '/../../';

module.exports = function *() {
  if(!_.has(parts, this.params.part))
    return this.body = 'error :(';

  const fileName = gekkoRoot + '/' + parts[this.params.part] + '.toml';
  this.body = {
    part: yield fs.readFile(fileName, 'utf8') 
  }
}