const development = {
    name: 'development',
    asset_path: './assets',
    session_cookie_key: 'blahsomething',
    // db: 'codeial_development',
    db: 'codeial_develsdsadsopment',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            // user: 'alchemy.cn18',
             user: 'riyagarg10620@gmail.com',
            // pass: 'codingninjas'
            pass: 'yiludyirhilschrs'
        }
    },
    google_client_id:'696250796610-dcmda0ea5l2ruqksse4ar8utmrn9vo3o.apps.googleusercontent.com',
    google_client_secret: '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',
    google_call_back_url:  "http://localhost:8000/users/auth/google/callback",       
    jwt_secret: 'codeial',
}


const production =  {
    name: 'production'
}



module.exports = development;