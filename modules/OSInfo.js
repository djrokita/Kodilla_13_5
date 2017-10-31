var os = require('os');
var colors = require('colors');
var newTime = require('./Time');

function getOsInfo() {
  var type = os.type();
  var release = os.release();
  var cpu = os.cpus()[0];
  var uptime = os.uptime();
  var userInfo = os.userInfo();
  if (type == 'Darwin') type = 'OSX';
  else if (type == 'Windows_NT') type = 'Windows';
  console.log('System: '.grey, type);
  console.log('Release: '.red, release);
  console.log('CPU model: '.cyan, cpu.model);
  console.log('CPU speed: '.rainbow, cpu.speed);
  console.log('Uptime: ~'.green, uptime.toFixed(0), 's');
  console.log('Uptime in hours/minutes: ~'.bgRed, newTime.timeCount(uptime));
  console.log('User name: '.yellow, userInfo.username);
  console.log('Home dir: '.magenta, userInfo.homedir);
}

exports.get = getOsInfo; //Aha, czyli ten "print" to tutaj był taki randomowy :)