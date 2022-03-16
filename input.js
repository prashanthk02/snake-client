let connection;// Stores the active TCP connection object.

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

  const handleUserInput = (data) => {
    if (data === '\u0003') {
      process.exit();
    }
    if (data === 'w') {
      connection.write('Move: up');
    }
    if (data === 'a') {
      connection.write('Move: left');
    }
    if (data === 's') {
      connection.write('Move: down');
    }
    if (data === 'd') {
      connection.write('Move: right');
    }
    if (data === 'q') {
      connection.write('Say: Have fun snakes');
    }
    if (data === 't') {
      connection.write('Say: having fun!!!');
    }

  };

module.exports = { setupInput };