const postsJSON = require('../posts.json')


exports.home = (req, res)=>{
   const posts = postsJSON.posts;
   res.render('home', {
       title: 'Posts',
       posts: posts
   })
}

exports.test = (req, res)=>{
   res.render('test');
}