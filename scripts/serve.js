const exec = require('child_process').exec;

const projectRoot = process.cwd();
process.chdir( projectRoot + '/vue');


var consoleOutput2 = function(msg) {
  console.log('php: ' + msg);
};
const cmd2 = exec('php -S 0.0.0.0:8000 -t ../lumen/public', {maxBuffer: 1024 * 1024}, function(error, stdout, stderr) {
  console.log(error, stdout, stderr);
});
cmd2.stdout.on('data', consoleOutput2);
cmd2.stderr.on('data', consoleOutput2);

var consoleOutput = function(msg) {
  console.log('npm: ' + msg);
};
const cmd = exec('npm run serve', {maxBuffer: 1024 * 1024}, function(error, stdout, stderr) {
  console.log(error, stdout, stderr);
});
cmd.stdout.on('data', consoleOutput);
cmd.stderr.on('data', consoleOutput);
