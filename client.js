const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //handling incoming data and ending the connection
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  })

  //printing the following on end of connection
  conn.on('end', () => {
    console.log('you\'re dead meat')
  })

  return conn;

};

module.exports = {connect};