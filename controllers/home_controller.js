const Post = require('../models/post');

module.exports.home = function(req, res){
  //  console.log(req.cookies);
  //  res.cookie('lalaal',25);
  // return res.end('<h1>Express is up for codeial</h1>')
  
  //     Post.find({}, function(err, posts){

//         return res.render('home', {
  //         title:"Codeial | Home",
 //         posts: posts
//   });

// });


// populate the user of each post
Post.find({}).populate('user').exec(function(err, posts){
  return res.render('home', {
    title: "Codeial | Home",
    posts: posts
  });
})

 
}

//module.exports.actionName = function(req, res){}