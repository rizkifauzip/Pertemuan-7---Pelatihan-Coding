const yargs = require("yargs");
const app = require("./contact"); 

yargs.command({
  command: "add",
  describe: "add new contact",
  builder: {
    nama: {
      describe: "name",
      demandOption: true,
      type: "string",
    },
    mobile: {
      describe: "phone Number",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "email address",
      demandOption: false,
      type: "string",
    },
  },

  handler(argv) {
    app.simpanData(argv.nama, argv.mobile, argv.email);
  },
});
yargs.parse();