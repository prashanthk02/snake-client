const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //print a msg on successful connection
  conn.on('connect', () => {
    console.log('connected to a bunch of snakes')
  });

  //send a msg to the server to set name
  conn.on('connect', () => {
    conn.write('Name: pk')
  });

  //move up
  // conn.on('connect', () => {
  //   conn.write('Move: up')
  // });

  //handling incoming data and ending the connection
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  //printing the following on end of connection
  conn.on('end', () => {
    console.log('you\'re dead meat')
  });

  return conn;

};

module.exports = {connect};