const exec = require('child_process').exec;

var consoleOutput2 = function(msg) {
  console.log('php: ' + msg);
};
const cmd2 = exec('php -S 0.0.0.0:8000 -t lumen/public', {maxBuffer: 1024 * 1024}, function(error, stdout, stderr) {
  console.log(error, stdout, stderr);
});
cmd2.stdout.on('data', consoleOutput2);
cmd2.stderr.on('data', consoleOutput2);

console.log('php: Server started at: http://localhost:8000');