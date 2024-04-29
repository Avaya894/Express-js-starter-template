const app  = require('./index')
const { ServerConfig } = require("./config");


app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  });
  