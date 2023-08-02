const User = require("../models/user");
const fs = require('fs');
const path = require('path');

// let's keep it same as before
module.exports.profile = function (req, res) {
User.findById(req.params.id, function(err, user){
        return res.render('user_profile', {
            title: 'User Profile',
            profile_user: user
        });
    });

}
// module.exports.profile = function (req, res) {

//   if(req.cookies.user_id){
//           User.findById(req.cookies.user_id, function(err, user){
//             if (user){
//                 return res.render('user_profile', {
//                     title: "User Profile",
//                     user: user
//                 })
//             }else{
//                 return res.redirect('/users/sign-in');

//             }
//         });
//     }
//     else{
//         return res.redirect('/users/sign-in');

//     }

//   // return res.render("user_profile", {
//   //   title: "User Profile",
//   // });
// };

module.exports.update = async function(req, res){
    // if(req.user.id == req.params.id){
    //     User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
    //         return res.redirect('back');
    //     });
    // }else{
    //     return res.status(401).send('Unauthorized');
    // }

    if(req.user.id == req.params.id){

      try{
        let user = await User.findById(req.params.id);
        User.uploadedAvatar(req, res, function(err){
          if(err){
            console.log('*****Multer Error: ' , err)}

            user.name = req.body.name;
            user.email = req.body.email;

            if(req.file){

              // fs.unlink("./uploads/users" + req.file.filename,(err)=> {
              //   if(err){
              //     console.log('failed to delete local image:' + err);

              //   }else{
              //     console.log('successfully deleted local image');

              //   }
              // });

              if (user.avatar){
             fs.unlinkSync(path.join(__dirname, '..', user.avatar));
                    }

              //  this is saving the path of the uploaded file into the avatar field in the user
              user.avatar = User.avatarPath + '/' + req.file.filename;
            }
            user.save();
            console.log(req.body);
            console.log(req.file);
            return res.redirect('back');
        });

      }catch(err){
        req.flash('error' ,err);
        return res.redirect('back');
      }

    }else{
      req.flash('error', 'Unauthorized');
      return res.status(401).send('Unauthorized');
    }
}





// render the sign up page
module.exports.signUp = function (req, res) {
    if(req.isAuthenticated()){
     return res.redirect('/users/profile');
    }

  return res.render("user_sign_up", {
    title: "Codeial | Sign Up",
  });
};

// render the sign in page
module.exports.signIn = function (req, res) {

    if(req.isAuthenticated()){
     return res.redirect('/users/profile');
    }


  return res.render("user_sign_in", {
    title: "Codeial | Sign In",
  });
};

// get the sign up data
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user in signing up");
      return;
    }

    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("error in creating user while signing up");
          return;
        }

        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};
 
  module.exports.createSession = function (req, res) {
     // TODO later
    // steps to authenticate
    // find the user (this is the manual way )
    // User.findOne({ email: req.body.email }, function (err, user) {
    //   if (err) {
    //     console.log("error in finding user in signing in");
    //     return;
    //   }
    //   // handle user found
    //   if (user) {
    //     // handle password which doesn't match
    //     if (user.password != req.body.password) {
    //       return res.redirect("back");
    //     }

    //     // handle session creation
    //     res.cookie("user_id", user.id);
    //     return res.redirect("/users/profile");
    //   } else {
    //     // handle user not found
    //     return res.redirect("back");
    //   }
    // });
    req.flash('success', 'Logged in Successfully');
    return res.redirect('/');
  }

  module.exports.destroySession = function(req, res){
    req.logout(function(){
          req.flash('success', 'Logged out Successfully');

      return res.redirect('/');
    }
    );

    // return res.redirect('/');
}




  