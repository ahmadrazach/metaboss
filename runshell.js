// const express = require('express');
const express = require('express')
const { exec } = require('child_process')
// const { exec } = require('child_process');
// const dotenv = require('dotenv')

// dotenv.config()

// const port = process.env.PORT
const port = 8000;
// express initialization
const app = express();

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

const command="metaboss update uri -a 4KQf2PMWNePhHmRbwvzc2Fv9sEj9fXr5qoXFxWCr9ipT -k ../solana-nft-project/.config/solana/devnet-wallet.json -u https://raw.githubusercontent.com/ahmadrazach/Javascript-Challanges/main/web3/upload/1.json"
// api for the checking node version
app.get('/check', (req, res) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    res.send(`Node version : ${stdout}`);
    console.log(`Node version : ${stdout}`);
  });
});
