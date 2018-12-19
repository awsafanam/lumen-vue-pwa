const exec = require('child_process').exec;
var fs = require('fs');
const rimraf = require('rimraf');

const projectRoot = process.cwd();
process.chdir( projectRoot + '/vue');


fs.rmdir(projectRoot + "/lumen/public/css", function(err){
  console.log('cleared css folder')
})
fs.rmdir(projectRoot + "/lumen/public/js", function(err){
  console.log('cleared js folder')
})

rimraf(projectRoot + "/lumen/public/css", function () { console.log('cleared css folder'); });
rimraf(projectRoot + "/lumen/public/js", function () { console.log('cleared js folder'); });
rimraf(projectRoot + "/lumen/public/fonts", function () { console.log('cleared fonts folder'); });
rimraf(projectRoot + "/lumen/public/img", function () { console.log('cleared img folder'); });
rimraf(projectRoot + "/lumen/public/*.js", function () { console.log('removed all js files'); });

var consoleOutput = function(msg) {
  console.log('npm: ' + msg);
};
const cmd = exec('npm run build', {maxBuffer: 1024 * 1024}, function(error, stdout, stderr) {
  console.log('Build Done');
});
cmd.stdout.on('data', consoleOutput);
cmd.stderr.on('data', consoleOutput);
