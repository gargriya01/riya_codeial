const development = {
  name: "development",
  asset_path: "./assets",
  session_cookie_key: "blahsomething",
  // db: 'codeial_development',
  db: "codeial_develsdsadsopment",
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      // user: 'alchemy.cn18',
      user: "riyagarg10620@gmail.com",
      // pass: 'codingninjas'
      pass: "yiludyirhilschrs",
    },
  },
  google_client_id:
    "696250796610-dcmda0ea5l2ruqksse4ar8utmrn9vo3o.apps.googleusercontent.com",
  google_client_secret: "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",
  google_call_back_url: "http://localhost:8000/users/auth/google/callback",
  jwt_secret: "codeial",
};

const production = {
  name: "production",
  asset_path: process.env.CODEIAL_ASSET_PATH,
  session_cookie_key: process.env.CODEIAL_SESSION_COOKIE_KEY,
  db: process.env.CODEIAL_DB,
  smtp: {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.CODEIAL_GMAIL_USERNAME,
      pass: process.env.CODEIAL_GMAIL_PASSWORD,
    },
  },
  google_client_id: process.env.CODEIAL_GOOGLE_CLIENT_ID,
  google_client_secret: process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
  google_call_back_url: process.env.CODEIAL_GOOGLE_CALLBACK_URL,
  jwt_secret: process.env.CODEIAL_JWT_SECRET,
};

module.exports = production;
// module.exports =
//   eval(process.env.NODE_ENV) == undefined
//     ? development
//     : eval(process.env.CODEIAL_ENVIRONMENT);
