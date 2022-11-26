require("dotenv").config();

const auth = {
  type: "OAuth2",
  user: "manoaxchange@gmail.com",
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
};

const mailoptions = {
  from: "ManoaXchange <manoaxchange@gmail.com>",
  to: "ttran2@hawaii.edu",
  subject: "Gmail API NodeJS",
};

module.exports = {
  auth,
  mailoptions,
};