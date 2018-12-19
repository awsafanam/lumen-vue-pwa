const exec = require('child_process').exec;

const projectRoot = process.cwd();
exec('npm i', {maxBuffer: 1024 * 1024}, function(error, stdout, stderr) {
  console.log(error, stdout, stderr);
});
process.chdir( projectRoot + '/vue');

var consoleOutput = function(msg) {
  console.log('npm: ' + msg);
};
const cmd = exec('npm i', {maxBuffer: 1024 * 1024}, function(error, stdout, stderr) {
  console.log(error, stdout, stderr);
});
cmd.stdout.on('data', consoleOutput);
cmd.stderr.on('data', consoleOutput);

process.chdir( projectRoot + '/lumen');
var consoleOutput2 = function(msg) {
  console.log('php: ' + msg);
};
const cmd2 = exec('composer update', {maxBuffer: 1024 * 1024}, function(error, stdout, stderr) {
  console.log(error, stdout, stderr);
});
cmd2.stdout.on('data', consoleOutput2);
cmd2.stderr.on('data', consoleOutput2);