navigator.serviceWorker&&navigator.serviceWorker.register('/sw.js?v=20250327234254').then(function(){navigator.serviceWorker.addEventListener('message',function(a){if('sw.update'===a.data){let a=document.querySelector('meta[name=theme-color]'),b=document.createElement('div');a&&(a.content='#000'),b.innerHTML='<div><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Colsrch/CDN/hexo-offline-popup.css"><div class="c-message animated animated-lento slideInRight"><i class="c-message--icon c-message--success"></i><div class="el-notification__group"><h2 class="c-message__title">更新通知</h2><div class="el-notification__content">小兔已更新博客内容，请刷新看看吧~</div><div class="c-message--close" onclick="location.reload()">×</div></div></div></div>',document.body.appendChild(b),setTimeout(function(){document.getElementById('app-refresh').className+=' app-refresh-show'},16)}})});