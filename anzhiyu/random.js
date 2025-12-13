var posts=["posts/4b60812/","posts/3e101a1c/","posts/9e1e9509/","posts/beeac218/","posts/4d0f8001/","posts/48ced98/","posts/d7178a05/","posts/7949d787/","posts/53427649/","posts/744e4646/","posts/a806c713/","posts/2891e33e/","posts/f1673a6/","posts/83ff2157/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };