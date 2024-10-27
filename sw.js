/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2024/05/index.html","5980852e0813b599bf3f014737fb06dd"],["/archives/2024/06/index.html","9e7465a63d45dc3bb798424b03e598f1"],["/archives/2024/08/index.html","15bcc724d8f466b22a2e6f41d122ca1b"],["/archives/2024/index.html","5b008ad9a6820c10a46d518f29fdec69"],["/archives/2024/page/2/index.html","269d23ad927d888ceec781e728fa61ea"],["/archives/index.html","5ee95765f7e56e2a078fa194ae25838b"],["/archives/page/2/index.html","78ed09adf91c86360d0f0997cb56ca47"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","c6bc91db05e33f2729e1b352de2c35e2"],["/categories/Linux/index.html","56ca078462d927c99ab0b38a5b1f4aab"],["/categories/QQBot/index.html","07bcc6b6de5e73fa825126d13296cd54"],["/categories/Termux/index.html","9b945a6cf1831f99283829d8ea176ad1"],["/categories/Termux/安卓/index.html","2d5cb663e95410e64cc77071e60c7824"],["/categories/Windows/Hype-v/index.html","75346ff2e14ad573fd1140bcbb80a834"],["/categories/Windows/WSL/index.html","403a977a5422d037ed9de574e19c52e3"],["/categories/Windows/index.html","3be0f156d4e7f6174d702b50b193a42b"],["/categories/index.html","b9d44f34823654922273a8a9fe6a229b"],["/categories/qsign/index.html","12dae0c9ccafa967722a811730ab3479"],["/categories/qsign/安卓/index.html","a1b5fe10855ddb5a996015f422a9f2ff"],["/categories/博客告知/index.html","0fb33517ea7f8cb4758191da7c73b6fd"],["/categories/好物推荐/index.html","b5427b3de42789e4219203e4e0a98ac1"],["/categories/常见问题汇总/index.html","05e15210ae9ad6ed370afe5e800f418e"],["/categories/网络工具/index.html","f3d02743ec0d406062f6e0c67cdf5431"],["/css/custom.css","95c8e8e1d65850291de6c5b128ae5655"],["/css/index.css","5b80b564e9972fd9144b6b6d38585d3a"],["/css/sweetalert.css","bb958a910616b991fb7b5ef279fbd837"],["/css/universe.css","634bbccd301760e7e1d016c7a5512783"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1.png","e8b8758beb225ced2abfc8f2261f7be7"],["/img/2.png","8f79696c74e8e0a93c7496022522f40a"],["/img/3.png","447acfa503b16e96fee086862abfa847"],["/img/4.jpg","c85585e510eed719dc202bade1ab397c"],["/img/404.jpg","1f6abd4f8abaf450a58eedf4dee834cd"],["/img/FAQ/1.png","f86f55239bb29c6c949e995d3e19bbbe"],["/img/FAQ/2.png","fd5dfb2874dae3a06b085bb53c26e4c1"],["/img/FAQ/3.jpg","d71fcb48c16dd9935af4a0352d5d4f66"],["/img/FAQ/3.png","2d7e927423d83a88a6ebf219f3263236"],["/img/FAQ/4.png","96d520e593de043c58d99a485ef5fc92"],["/img/FAQ/5.jpg","090d4dd2b2c775cee2cbe2229907ab11"],["/img/FAQ/5.png","910d8aa95c81e25295f7772bf96f21a3"],["/img/FAQ/6.png","451e7384ad43f3daa804e488a42986dd"],["/img/FAQ/7.png","25111001dc1b7506434db8b4dc4d8f85"],["/img/FAQ/8.png","fa6484a5656f4adb3fbc21a0fdfee27a"],["/img/Goods/1.png","dbdd3b2aeec843f67f1eb32ec74b428a"],["/img/Goods/10.png","58385980150680ea0caa325b177d768b"],["/img/Goods/11.png","94f3c1c13c702ed59041519c9ef5fa2b"],["/img/Goods/2.png","9b0a15765d8af172d6a7ceeb2c0564be"],["/img/Goods/3.png","c02b160ae1db14ee70d85c10125d9cf2"],["/img/Goods/4.png","48d61a351a634e3cb4827a46bee73867"],["/img/Goods/5.png","8a9d4512debdc8965907cf70229fb9c6"],["/img/Goods/6.png","c00049ded3f4792b4b47a67faad9613b"],["/img/Goods/7.png","a1cf3404826bbd4ce3b86bf42d2208b9"],["/img/Goods/8.png","85acd3b50115f350979419e59d589dc9"],["/img/Goods/9.png","2c5df2515cb4533cea3d6866de1061dd"],["/img/Hexo/1.png","670a6393ee50c2c389eeb0d92b847105"],["/img/Hexo/2.png","951c8cc8f21822d7e1e38686a75508c4"],["/img/Hexo/3.png","739d50c662220ccaf1fbc25d7191abcd"],["/img/Hexo/4.jpg","54338d3d7e9425a0fb930b4859bdcde0"],["/img/Hype_v/1.png","b9d8b75f54aa80754f3314a7029d1e8c"],["/img/Hype_v/10.png","4f35a538f135f3f7a1e703eae384cd86"],["/img/Hype_v/11.png","1ca4bdcecd34db5e7f928e09371837e5"],["/img/Hype_v/12.png","e689301d7a5f2001a3cca83667265cd0"],["/img/Hype_v/13.png","fdb4c48054e69ded29b26311b74f75c7"],["/img/Hype_v/14.png","8152d1a27bdc2d51f4adbaa4f0bc70c5"],["/img/Hype_v/15.png","a7fdf60c7b07f6cdf3f79fc4f8421841"],["/img/Hype_v/16.png","d7026fb2ce3513aae1b5dc2349eaf7a3"],["/img/Hype_v/17.png","91bfe84530338fc1829659c4ba22cabd"],["/img/Hype_v/18.png","4f9dca18b7dd63a29265883c5781461c"],["/img/Hype_v/19.png","cfdc97b7f9ee5a70b438bfb1166bc7c7"],["/img/Hype_v/2.png","3e0dc974d071049c4c2fe4cd5652eb38"],["/img/Hype_v/20.png","486eb91a5ca1f82efc10e0e38c7a20bd"],["/img/Hype_v/21.png","07f8910d5d49d3c8bfe48630f188fea3"],["/img/Hype_v/22.png","e30ed663eeaf816ce964234283d64081"],["/img/Hype_v/23.png","d6ccb733595d923b57bc37f76cd9aae9"],["/img/Hype_v/24.png","a8319c0c75b901684856dddd2d2c4d6b"],["/img/Hype_v/25.png","538a79e7b88c58fdd9ad8045ea3546d3"],["/img/Hype_v/26.png","4b6a578506e2c5e2bb996ca68ad21ff9"],["/img/Hype_v/27.png","a942a865bb7d86a5307462769db0193d"],["/img/Hype_v/28.png","57a122bb194a1d8074c57567d47e3d0f"],["/img/Hype_v/29.png","86b9e7a6eed0c14b4c64b9495861fb86"],["/img/Hype_v/3.png","c8b441749dfe547fddc1b36e04455f64"],["/img/Hype_v/30.png","30fa811e520d094ef57cf09803db0a07"],["/img/Hype_v/31.png","e24cc916657bb9952392edd4f7df0319"],["/img/Hype_v/32.png","55529a9d555476d50512f0edd036e599"],["/img/Hype_v/33.png","16905d87832c7202fe959f9e8e5d5b51"],["/img/Hype_v/34.png","b2d0f03d5a0ec7f018598e782c4ea9a7"],["/img/Hype_v/4.png","2a029dbdd03cff480ed0beb6008468f5"],["/img/Hype_v/5.png","6b0875c3c045b1dd1f781cad84b23bf9"],["/img/Hype_v/6.png","17b119a0f71ea99f0986db90dc77861c"],["/img/Hype_v/7.png","59a1000a0da5eb4851965bea3c335519"],["/img/Hype_v/8.png","22cdf48c102cefc3f07e588873e80d04"],["/img/Hype_v/9.png","8b4c81f127d0396443ad37867aa0d471"],["/img/Linux/1.png","54982b666ccd9f2bd6466f0665f63f4b"],["/img/Linux/10.png","1cbfa993ec29e62ca871c5b39316c15a"],["/img/Linux/11.png","fd72693c5ad3d3cb9763d24cadaeeaa1"],["/img/Linux/12.png","e3c18cf2eb909ff656c09364d1dbdeac"],["/img/Linux/13.png","b776c75ff8c0d4b331774445bcbe1617"],["/img/Linux/14.png","7f862a01d9bf7604ffea5afe44a95591"],["/img/Linux/15.png","097c5e68b88bb88939cb8d1d1a5c1b88"],["/img/Linux/16.png","d41d060bc8adfdfceba3935bad52c00d"],["/img/Linux/17.png","7ce93cba01fb1425b573129bc3d4a438"],["/img/Linux/18.png","5f726cba639e07b5f7d74b4ded720d86"],["/img/Linux/2.jpg","999cd1a1946e050f10c09c24749652ed"],["/img/Linux/3.png","263ae368d9d99416548f64cc7d3b2759"],["/img/Linux/4.png","ff41c89e4b5847ad6c8ee2bb94b7b869"],["/img/Linux/5.png","fe8dd5e266ece22931985c0fd9e2b18a"],["/img/Linux/6.png","0587924f9849bf13fe797ececa11a16c"],["/img/Linux/7.png","857624b61f18a494304aef66ab4dab70"],["/img/Linux/8.png","718355a076d84aa345354244d3900213"],["/img/Linux/9.png","aeeacbf26238a5ca2646a6cf8a1d5a89"],["/img/MYSY2/1.png","6f4ba0fa119f6bfb50bed288548e5a9f"],["/img/MYSY2/10.png","1cbfa993ec29e62ca871c5b39316c15a"],["/img/MYSY2/11.png","4bb151ae4f5845090228245b700fae32"],["/img/MYSY2/12.png","74d3b7978c79f9bc449384c0d69b691a"],["/img/MYSY2/13.png","6f8893e196d8e193b38a0ff72109593b"],["/img/MYSY2/14.png","0cf4bc775bc4c327c40305d2c993db56"],["/img/MYSY2/15.png","c06a4a9ead5c5a3bd05f62f6d3d8670e"],["/img/MYSY2/16.png","0cf4bc775bc4c327c40305d2c993db56"],["/img/MYSY2/17.png","7ce93cba01fb1425b573129bc3d4a438"],["/img/MYSY2/18.png","5f726cba639e07b5f7d74b4ded720d86"],["/img/MYSY2/19.png","3a6449fe8e7ce5da121ed9e9ad34924b"],["/img/MYSY2/2.png","0aad606e087f123792d3aa26e63ae2f9"],["/img/MYSY2/3.jpg","9eecb7d519e194fd27d708643d10a0f1"],["/img/MYSY2/4.png","80a708b15f9073dd478e6005cfd66310"],["/img/MYSY2/5.png","6f4ba0fa119f6bfb50bed288548e5a9f"],["/img/MYSY2/6.png","cac5d7735c9a38e33190632b77c85d45"],["/img/MYSY2/7.jpg","de4baab4c26fe409de5a2d99a7b28930"],["/img/MYSY2/8.png","10801fa4b9e3cfaa45daff04da0e3964"],["/img/MYSY2/9.png","20b453f70b13879b83d0d28005369211"],["/img/QQBot/1.png","0b683c4f97bce9bd2ac7629554f5400a"],["/img/QQBot/10.png","ca51198aed4842211a7c6c72bf8f2d3d"],["/img/QQBot/11.jpg","2d7f6aa30d9838224c379b6d5942643d"],["/img/QQBot/12.png","6c7d26d1c9cfac2802c96a118ba08598"],["/img/QQBot/13.jpg","e4d792dac1bae03712fff1e68cf614a1"],["/img/QQBot/2.png","9bfc82d32615d1caa3225f3e6ab0e410"],["/img/QQBot/3.png","564e75acf130575bf85c23ea395439cf"],["/img/QQBot/4.png","6301533043725aec8cbf5334f3b2686e"],["/img/QQBot/5.png","8426f47021660a61e6e28292898146c8"],["/img/QQBot/6.png","c895e67b12c1248dd85e206b331dd664"],["/img/QQBot/7.png","bc5ef2fd484b352ee3e365d26bce89ee"],["/img/QQBot/8.png","3f2ca1288cd8bc25744816873ed1fac0"],["/img/QQBot/9.png","f6dc490190bdbd8b9bd831aa7faa30ec"],["/img/Qsgin/1.png","89541fd68250b1c96f0375507479c960"],["/img/Qsgin/2.png","aa64f896034d7345b4e9aa189b535b8e"],["/img/Qsgin/3.png","89fd3c3b8ec4117743cda4f61060476f"],["/img/SPS/1.png","409ca9e7bc35723ebb97eb87c4ef09f2"],["/img/SPS/2.png","2b07d45af1668d6d0e0fb248aea9ae5d"],["/img/SPS/3.png","363e7eee139e18f5fa9d55534d9634b6"],["/img/Shizuku/1.jpg","d6ef19d393ce22307648f341f5172322"],["/img/Shizuku/10.jpg","c4a4f5f01128a2576c6b8e6fb3a66f88"],["/img/Shizuku/2.jpg","d6dbae88f5a0f2319c53f147761b6403"],["/img/Shizuku/3.jpg","0919d5ca8924c8470340c94c0f6ffd0b"],["/img/Shizuku/4.jpg","0919d5ca8924c8470340c94c0f6ffd0b"],["/img/Shizuku/5.jpg","64659108c7f4177322dfc4314d8c4767"],["/img/Shizuku/6.jpg","7091d00959edfeea640784cbc1102de9"],["/img/Shizuku/7.jpg","cfe33ea2726a27655eff7aef841d1156"],["/img/Shizuku/8.jpg","76cf95fa1e8be7bab10c499095118bbf"],["/img/Shizuku/9.jpg","d6ef19d393ce22307648f341f5172322"],["/img/Termux/1.jpg","a3a8838eb758510db00f1be85e3321d3"],["/img/Termux/10.png","85acd3b50115f350979419e59d589dc9"],["/img/Termux/11.png","be544ae0792e4a378eba5719e6d3a855"],["/img/Termux/12.png","69763a0d8b93682cde00c21841c37165"],["/img/Termux/2.jpg","a3a8838eb758510db00f1be85e3321d3"],["/img/Termux/3.jpg","b1b4867abc77acb319f6b0ff17caa965"],["/img/Termux/4.jpg","777df98cc4f589f7ff03670489e83b6a"],["/img/Termux/5.jpg","73620e1493b9534802b58ae81ff9f558"],["/img/Termux/6.jpg","fbc6d1e5f2b8fd72830765f0666cbb2d"],["/img/Termux/7.png","6b152ce9816bf6750cc26b3bbb16efb0"],["/img/Termux/8.jpg","5bb394d6836c189b1dfb70e2a0f33064"],["/img/Termux/9.png","2c5df2515cb4533cea3d6866de1061dd"],["/img/WSL/1.png","07f69480770fc560a303cfdbdab2e6a5"],["/img/WSL/10.png","eb2062d9510e423909d570e630aaaadb"],["/img/WSL/11.png","56a485de3c259fc131398511366e5b91"],["/img/WSL/12.png","53527e7dc436bf00d4d43debe8c82d56"],["/img/WSL/13.png","3f5f1c08d131b26d0a9305d17851a7f5"],["/img/WSL/14.png","8c983b5b76d53d868e1163908c0d79f1"],["/img/WSL/15.png","bbdd142c392677ce86e0a595153fa94d"],["/img/WSL/16.png","e06b64263b0fd5800b8ae9ceab27077f"],["/img/WSL/17.png","ed7715b3844bf35edfd725f59df62063"],["/img/WSL/18.png","16c3f93ba14a6b7689911558795d8a2c"],["/img/WSL/19.png","27a0c0c28e87be849a2b225199a5a236"],["/img/WSL/2.png","52d565e15b20861c2a4e35842185aef9"],["/img/WSL/20.jpg","3ed147e68808ed680833b41d918fd6da"],["/img/WSL/21.png","e101765c56d4b370473e6f65e3f4827b"],["/img/WSL/22.png","0148879c268828b5654a2b3da15877b5"],["/img/WSL/23.png","697ea85c6fcacc552f4515527fffb45c"],["/img/WSL/24.png","e66450357ec70641196c10eb403782f7"],["/img/WSL/25.png","07f69480770fc560a303cfdbdab2e6a5"],["/img/WSL/26.png","96c9da131b8ba3ad22106f4298f42774"],["/img/WSL/27.png","b69a8bb59ea2551fba0916003cc81df2"],["/img/WSL/28.png","12e3d9598df4951c55cb7a46ae6174db"],["/img/WSL/29.png","7ce93cba01fb1425b573129bc3d4a438"],["/img/WSL/3.png","5d7c0a91e36e17d02ae9791afe55731a"],["/img/WSL/30.png","5f726cba639e07b5f7d74b4ded720d86"],["/img/WSL/4.png","a14e56727a485223f321aa0691490906"],["/img/WSL/5.png","75653683ad6920ac8c4770c613141838"],["/img/WSL/6.png","95d840b1bf49218c5221bb6aa638c9a8"],["/img/WSL/7.png","95d840b1bf49218c5221bb6aa638c9a8"],["/img/WSL/8.png","33683be9876da02b61f590d750d52183"],["/img/WSL/9.png","156cf666fa5cf0a9e71689bfb62e060f"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e3b739898b5f96400322d1feff6045d6"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sweetalert.js","b97aa462f0f914593d471a7da27fddc3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","8cc83bd6bdea3364f9f1ec5ad40f645d"],["/live2d-widget/README.html","777ac98ba773e85cebd4ec8d531db927"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","9214bc5446cd3a8a40ba118a23b1c3b9"],["/live2d-widget/demo/demo.html","be233317c1fc3ad99ce7311bd777a56e"],["/live2d-widget/demo/login.html","131a7743877b113340726c0b0a45bda2"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","85aef69a57f70ca34b1da98da0a854c8"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/music/index.html","436004425c0291194802485bf064c0f3"],["/page/2/index.html","f220b12b5f003356c0a7bd0aa5250dfd"],["/page/3/index.html","aa519842c7d4aa3b366ea2a13601470b"],["/posts/2891e33e/index.html","3f55345e240e4dcf06f1d0a0818d1ecb"],["/posts/3e101a1c/index.html","feceeb3f19a6628068d1d84daba2b884"],["/posts/48ced98/index.html","2d2dfce319c5c66460eb1cdd96216fe4"],["/posts/4d0f8001/index.html","938fd7eabca6b7031265ffe29837ae2d"],["/posts/53427649/index.html","294a600ae1e8ad21bd6d3e5234919a02"],["/posts/70f38985/index.html","954604adced386e8299f148273616958"],["/posts/744e4646/index.html","8797d8b081fcd63aaeaa191595e1c2ca"],["/posts/7949d787/index.html","2d712290c61f9a5fc68b2db9b26d49f7"],["/posts/83ff2157/index.html","5687f3ab5f058e99a5fb61b869028118"],["/posts/9e1e9509/index.html","eb0a947b1b07871b8e934a435135089a"],["/posts/a806c713/index.html","e7d4cfc1c8216e3a3f0b69c1459684ff"],["/posts/a8ef42b/index.html","c2d109f5538c0f375efb23e92d77c824"],["/posts/beeac218/index.html","a1739d986b426904a1fdb3e238088a86"],["/posts/e66f6c3/index.html","92186ffb996f43ec138278200627f31f"],["/posts/f1673a6/index.html","a3c9e40a0e491bae66c5e48acd3772a3"],["/sw-register.js","3fb105fe3a48bc0e83f03f28cbe8ba2e"],["/tags/index.html","2a1b6e1ab419ed9375b2d0182294caab"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
