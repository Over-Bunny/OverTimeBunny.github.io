/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2024/05/index.html","2879ba9e13013b0b8f8ba70b5736a12e"],["/archives/2024/06/index.html","052eb57ffc52dcc603eebb77b853a990"],["/archives/2024/08/index.html","f2d4e6fd679d1e531d0c13909b5de169"],["/archives/2024/index.html","8fdfd8bb4ba0da65e5e1939d75a9bdd1"],["/archives/2024/page/2/index.html","ceac0acb0867f0a95508435ad7eb9a77"],["/archives/index.html","0c46b35e85626fc4b89dda06d996081a"],["/archives/page/2/index.html","dae305270e201a14f0270fee88342290"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","df0cb25f593d4075b652e588329e8cd7"],["/categories/Linux/index.html","e21686dd2c1c8a762826fa11bc5f5544"],["/categories/QQBot/index.html","2bdabb7530934653e78dd53c83af2519"],["/categories/Termux/index.html","8819a1edc70f950d0e617faf088da7aa"],["/categories/Termux/安卓/index.html","3f51412d3a41b8167d8329c014a97a07"],["/categories/Windows/WSL/index.html","0160257965c78bf3bfa12f9048a6f26e"],["/categories/Windows/index.html","26b0b5bb312243c3f5884c7bff80f89e"],["/categories/index.html","9f29a497bdb3850fac030bae5c751d7e"],["/categories/qsign/index.html","d00c6e600f313eaa8c4da5216e22e34c"],["/categories/qsign/安卓/index.html","d669932e0499f5207f75460e2afa63a9"],["/categories/博客告知/index.html","355fde7ccc28b0f398ddb9e051ae91b2"],["/categories/好物推荐/index.html","f43288cca4920b91ea8402f5132abe95"],["/categories/常见问题汇总/index.html","3eb3035bc34c7b167eb8d84f81dfae84"],["/categories/网络工具/index.html","116e89d7f29e33c3fd13093182dc1fd6"],["/css/custom.css","95c8e8e1d65850291de6c5b128ae5655"],["/css/index.css","5b80b564e9972fd9144b6b6d38585d3a"],["/css/sweetalert.css","bb958a910616b991fb7b5ef279fbd837"],["/css/universe.css","634bbccd301760e7e1d016c7a5512783"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1.png","e8b8758beb225ced2abfc8f2261f7be7"],["/img/2.png","8f79696c74e8e0a93c7496022522f40a"],["/img/3.png","447acfa503b16e96fee086862abfa847"],["/img/4.jpg","c85585e510eed719dc202bade1ab397c"],["/img/404.jpg","1f6abd4f8abaf450a58eedf4dee834cd"],["/img/FAQ/1.png","f86f55239bb29c6c949e995d3e19bbbe"],["/img/FAQ/2.png","fd5dfb2874dae3a06b085bb53c26e4c1"],["/img/FAQ/3.jpg","d71fcb48c16dd9935af4a0352d5d4f66"],["/img/FAQ/3.png","2d7e927423d83a88a6ebf219f3263236"],["/img/FAQ/4.png","96d520e593de043c58d99a485ef5fc92"],["/img/FAQ/5.jpg","090d4dd2b2c775cee2cbe2229907ab11"],["/img/FAQ/5.png","910d8aa95c81e25295f7772bf96f21a3"],["/img/FAQ/6.png","451e7384ad43f3daa804e488a42986dd"],["/img/FAQ/7.png","25111001dc1b7506434db8b4dc4d8f85"],["/img/FAQ/8.png","fa6484a5656f4adb3fbc21a0fdfee27a"],["/img/Goods/1.png","dbdd3b2aeec843f67f1eb32ec74b428a"],["/img/Goods/10.png","58385980150680ea0caa325b177d768b"],["/img/Goods/11.png","94f3c1c13c702ed59041519c9ef5fa2b"],["/img/Goods/2.png","9b0a15765d8af172d6a7ceeb2c0564be"],["/img/Goods/3.png","c02b160ae1db14ee70d85c10125d9cf2"],["/img/Goods/4.png","48d61a351a634e3cb4827a46bee73867"],["/img/Goods/5.png","8a9d4512debdc8965907cf70229fb9c6"],["/img/Goods/6.png","c00049ded3f4792b4b47a67faad9613b"],["/img/Goods/7.png","a1cf3404826bbd4ce3b86bf42d2208b9"],["/img/Goods/8.png","85acd3b50115f350979419e59d589dc9"],["/img/Goods/9.png","2c5df2515cb4533cea3d6866de1061dd"],["/img/Hexo/1.png","670a6393ee50c2c389eeb0d92b847105"],["/img/Hexo/2.png","951c8cc8f21822d7e1e38686a75508c4"],["/img/Hexo/3.png","739d50c662220ccaf1fbc25d7191abcd"],["/img/Hexo/4.jpg","54338d3d7e9425a0fb930b4859bdcde0"],["/img/Hype_v/1.png","6b1c5a3cfc695f0b9f67596f2eba1a3f"],["/img/Hype_v/10.png","c5749d597bf6ce589622674ac0b04070"],["/img/Hype_v/11.png","eaedb8f33f84315fedfa7cccbfa83f3f"],["/img/Hype_v/12.png","296e5103f6e64e535beadadb94488a23"],["/img/Hype_v/13.png","6b1c5a3cfc695f0b9f67596f2eba1a3f"],["/img/Hype_v/14.png","9c88ac24d4f57f375fde4971e1827104"],["/img/Hype_v/15.png","d6409a8be72390cdcff727067a842bfe"],["/img/Hype_v/16.png","3a0a97f1811d6763265f974c9b1f3916"],["/img/Hype_v/17.png","2e20ba90d7e734618bb9e6407ed07ade"],["/img/Hype_v/18.png","002e5ef22ff853f2e01e6c2c407e2f77"],["/img/Hype_v/19.png","c82f5594994fe3e3f096d42d1dd943ec"],["/img/Hype_v/2.png","5875ec32134fa6dcafbaa0710e7319c9"],["/img/Hype_v/20.png","bab113f9a7747e78c92db42c716d60b3"],["/img/Hype_v/21.png","856eccc5d808c9c2f14a5d4160439a02"],["/img/Hype_v/22.png","07137d82ebeba67de365929dec861d85"],["/img/Hype_v/23.png","b0616388f3e0c5ad5129901715db209a"],["/img/Hype_v/24.png","79aa7a5355fedc1b994bd1ff4c54fe9f"],["/img/Hype_v/25.png","c2a5c861406643bca628bfc00aa52d6b"],["/img/Hype_v/26.png","2b0a0dfacf2347cce577a556cb780e44"],["/img/Hype_v/27.png","6b08da472ce92161a8216e27e99d4484"],["/img/Hype_v/28.png","bbfe7ef071d53f34fe07e9c67d87b825"],["/img/Hype_v/29.png","09ada43e73674bb687a4861f1a04a855"],["/img/Hype_v/3.jpg","4953b9f0eba8e14bf3170cb98dfe19e2"],["/img/Hype_v/30.png","1a3e657f34ebf91ad9c7d42250fc5798"],["/img/Hype_v/31.png","704d040f9d73e627bfd0699c1f6d08a2"],["/img/Hype_v/32.png","2dc7e61db5ecf1a2fb693f3c554022a3"],["/img/Hype_v/33.png","15938de316b128e4625c6f6264b696eb"],["/img/Hype_v/34.png","c8dc5521c1132a9186d5c7d15d5d0bb3"],["/img/Hype_v/35.png","7d7a7125b1cc365e0b25527bfa1f4afc"],["/img/Hype_v/36.png","9acf3b6f7932ae83e97360de3a1b9a91"],["/img/Hype_v/37.png","44a390bedb6c13cdf0b59636cf2ef7ec"],["/img/Hype_v/38.png","7ce93cba01fb1425b573129bc3d4a438"],["/img/Hype_v/4.png","d1e04ada8880bd206f97c5f4db5c224b"],["/img/Hype_v/5.png","6b1c5a3cfc695f0b9f67596f2eba1a3f"],["/img/Hype_v/6.png","b0f10dc038a1f38bff276435a2bbfc27"],["/img/Hype_v/7.png","df57d247216042eefada972dcc5c1a15"],["/img/Hype_v/8.png","60a696df3f01f56aad537673e63cbba0"],["/img/Hype_v/9.png","192ae80b8c90930ac73265cfb7c639e0"],["/img/Linux/1.png","54982b666ccd9f2bd6466f0665f63f4b"],["/img/Linux/10.png","1cbfa993ec29e62ca871c5b39316c15a"],["/img/Linux/11.png","fd72693c5ad3d3cb9763d24cadaeeaa1"],["/img/Linux/12.png","e3c18cf2eb909ff656c09364d1dbdeac"],["/img/Linux/13.png","b776c75ff8c0d4b331774445bcbe1617"],["/img/Linux/14.png","7f862a01d9bf7604ffea5afe44a95591"],["/img/Linux/15.png","097c5e68b88bb88939cb8d1d1a5c1b88"],["/img/Linux/16.png","d41d060bc8adfdfceba3935bad52c00d"],["/img/Linux/17.png","7ce93cba01fb1425b573129bc3d4a438"],["/img/Linux/18.png","5f726cba639e07b5f7d74b4ded720d86"],["/img/Linux/2.jpg","999cd1a1946e050f10c09c24749652ed"],["/img/Linux/3.png","263ae368d9d99416548f64cc7d3b2759"],["/img/Linux/4.png","ff41c89e4b5847ad6c8ee2bb94b7b869"],["/img/Linux/5.png","fe8dd5e266ece22931985c0fd9e2b18a"],["/img/Linux/6.png","0587924f9849bf13fe797ececa11a16c"],["/img/Linux/7.png","857624b61f18a494304aef66ab4dab70"],["/img/Linux/8.png","718355a076d84aa345354244d3900213"],["/img/Linux/9.png","aeeacbf26238a5ca2646a6cf8a1d5a89"],["/img/MYSY2/1.png","6f4ba0fa119f6bfb50bed288548e5a9f"],["/img/MYSY2/10.png","1cbfa993ec29e62ca871c5b39316c15a"],["/img/MYSY2/11.png","4bb151ae4f5845090228245b700fae32"],["/img/MYSY2/12.png","74d3b7978c79f9bc449384c0d69b691a"],["/img/MYSY2/13.png","6f8893e196d8e193b38a0ff72109593b"],["/img/MYSY2/14.png","0cf4bc775bc4c327c40305d2c993db56"],["/img/MYSY2/15.png","c06a4a9ead5c5a3bd05f62f6d3d8670e"],["/img/MYSY2/16.png","0cf4bc775bc4c327c40305d2c993db56"],["/img/MYSY2/17.png","7ce93cba01fb1425b573129bc3d4a438"],["/img/MYSY2/18.png","5f726cba639e07b5f7d74b4ded720d86"],["/img/MYSY2/19.png","3a6449fe8e7ce5da121ed9e9ad34924b"],["/img/MYSY2/2.png","0aad606e087f123792d3aa26e63ae2f9"],["/img/MYSY2/3.jpg","9eecb7d519e194fd27d708643d10a0f1"],["/img/MYSY2/4.png","80a708b15f9073dd478e6005cfd66310"],["/img/MYSY2/5.png","6f4ba0fa119f6bfb50bed288548e5a9f"],["/img/MYSY2/6.png","cac5d7735c9a38e33190632b77c85d45"],["/img/MYSY2/7.jpg","de4baab4c26fe409de5a2d99a7b28930"],["/img/MYSY2/8.png","10801fa4b9e3cfaa45daff04da0e3964"],["/img/MYSY2/9.png","20b453f70b13879b83d0d28005369211"],["/img/QQBot/1.png","0b683c4f97bce9bd2ac7629554f5400a"],["/img/QQBot/10.png","ca51198aed4842211a7c6c72bf8f2d3d"],["/img/QQBot/11.jpg","2d7f6aa30d9838224c379b6d5942643d"],["/img/QQBot/12.png","6c7d26d1c9cfac2802c96a118ba08598"],["/img/QQBot/13.jpg","e4d792dac1bae03712fff1e68cf614a1"],["/img/QQBot/2.png","9bfc82d32615d1caa3225f3e6ab0e410"],["/img/QQBot/3.png","564e75acf130575bf85c23ea395439cf"],["/img/QQBot/4.png","6301533043725aec8cbf5334f3b2686e"],["/img/QQBot/5.png","8426f47021660a61e6e28292898146c8"],["/img/QQBot/6.png","c895e67b12c1248dd85e206b331dd664"],["/img/QQBot/7.png","bc5ef2fd484b352ee3e365d26bce89ee"],["/img/QQBot/8.png","3f2ca1288cd8bc25744816873ed1fac0"],["/img/QQBot/9.png","f6dc490190bdbd8b9bd831aa7faa30ec"],["/img/Qsgin/1.png","89541fd68250b1c96f0375507479c960"],["/img/Qsgin/2.png","aa64f896034d7345b4e9aa189b535b8e"],["/img/Qsgin/3.png","89fd3c3b8ec4117743cda4f61060476f"],["/img/SPS/1.png","409ca9e7bc35723ebb97eb87c4ef09f2"],["/img/SPS/2.png","2b07d45af1668d6d0e0fb248aea9ae5d"],["/img/SPS/3.png","363e7eee139e18f5fa9d55534d9634b6"],["/img/Shizuku/1.jpg","d6ef19d393ce22307648f341f5172322"],["/img/Shizuku/10.jpg","c4a4f5f01128a2576c6b8e6fb3a66f88"],["/img/Shizuku/2.jpg","d6dbae88f5a0f2319c53f147761b6403"],["/img/Shizuku/3.jpg","0919d5ca8924c8470340c94c0f6ffd0b"],["/img/Shizuku/4.jpg","0919d5ca8924c8470340c94c0f6ffd0b"],["/img/Shizuku/5.jpg","64659108c7f4177322dfc4314d8c4767"],["/img/Shizuku/6.jpg","7091d00959edfeea640784cbc1102de9"],["/img/Shizuku/7.jpg","cfe33ea2726a27655eff7aef841d1156"],["/img/Shizuku/8.jpg","76cf95fa1e8be7bab10c499095118bbf"],["/img/Shizuku/9.jpg","d6ef19d393ce22307648f341f5172322"],["/img/Termux/1.jpg","a3a8838eb758510db00f1be85e3321d3"],["/img/Termux/10.png","85acd3b50115f350979419e59d589dc9"],["/img/Termux/11.png","be544ae0792e4a378eba5719e6d3a855"],["/img/Termux/12.png","69763a0d8b93682cde00c21841c37165"],["/img/Termux/2.jpg","a3a8838eb758510db00f1be85e3321d3"],["/img/Termux/3.jpg","b1b4867abc77acb319f6b0ff17caa965"],["/img/Termux/4.jpg","777df98cc4f589f7ff03670489e83b6a"],["/img/Termux/5.jpg","73620e1493b9534802b58ae81ff9f558"],["/img/Termux/6.jpg","fbc6d1e5f2b8fd72830765f0666cbb2d"],["/img/Termux/7.png","6b152ce9816bf6750cc26b3bbb16efb0"],["/img/Termux/8.jpg","5bb394d6836c189b1dfb70e2a0f33064"],["/img/Termux/9.png","2c5df2515cb4533cea3d6866de1061dd"],["/img/WSL/1.png","07f69480770fc560a303cfdbdab2e6a5"],["/img/WSL/10.png","eb2062d9510e423909d570e630aaaadb"],["/img/WSL/11.png","56a485de3c259fc131398511366e5b91"],["/img/WSL/12.png","53527e7dc436bf00d4d43debe8c82d56"],["/img/WSL/13.png","3f5f1c08d131b26d0a9305d17851a7f5"],["/img/WSL/14.png","8c983b5b76d53d868e1163908c0d79f1"],["/img/WSL/15.png","bbdd142c392677ce86e0a595153fa94d"],["/img/WSL/16.png","e06b64263b0fd5800b8ae9ceab27077f"],["/img/WSL/17.png","ed7715b3844bf35edfd725f59df62063"],["/img/WSL/18.png","16c3f93ba14a6b7689911558795d8a2c"],["/img/WSL/19.png","27a0c0c28e87be849a2b225199a5a236"],["/img/WSL/2.png","52d565e15b20861c2a4e35842185aef9"],["/img/WSL/20.jpg","3ed147e68808ed680833b41d918fd6da"],["/img/WSL/21.png","e101765c56d4b370473e6f65e3f4827b"],["/img/WSL/22.png","0148879c268828b5654a2b3da15877b5"],["/img/WSL/23.png","697ea85c6fcacc552f4515527fffb45c"],["/img/WSL/24.png","e66450357ec70641196c10eb403782f7"],["/img/WSL/25.png","07f69480770fc560a303cfdbdab2e6a5"],["/img/WSL/26.png","96c9da131b8ba3ad22106f4298f42774"],["/img/WSL/27.png","b69a8bb59ea2551fba0916003cc81df2"],["/img/WSL/28.png","12e3d9598df4951c55cb7a46ae6174db"],["/img/WSL/29.png","7ce93cba01fb1425b573129bc3d4a438"],["/img/WSL/3.png","5d7c0a91e36e17d02ae9791afe55731a"],["/img/WSL/30.png","5f726cba639e07b5f7d74b4ded720d86"],["/img/WSL/4.png","a14e56727a485223f321aa0691490906"],["/img/WSL/5.png","75653683ad6920ac8c4770c613141838"],["/img/WSL/6.png","95d840b1bf49218c5221bb6aa638c9a8"],["/img/WSL/7.png","95d840b1bf49218c5221bb6aa638c9a8"],["/img/WSL/8.png","33683be9876da02b61f590d750d52183"],["/img/WSL/9.png","156cf666fa5cf0a9e71689bfb62e060f"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","24691ebae4f5be4f710e49b642c7d02d"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sweetalert.js","b97aa462f0f914593d471a7da27fddc3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","23f0f2fb38cfc2eb879a06e7da3b050b"],["/live2d-widget/README.html","39a40fcb29e188bb40d3b560560c6433"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","9214bc5446cd3a8a40ba118a23b1c3b9"],["/live2d-widget/demo/demo.html","258da4206625d557b1069080eb379e66"],["/live2d-widget/demo/login.html","e52d1d2321d47956abaac87bf23b7159"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","85aef69a57f70ca34b1da98da0a854c8"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/music/index.html","4bccae83c8e0e7b52083b9f01ed0324f"],["/page/2/index.html","9abfbb18b27e9673abc5dce44e3b4ae8"],["/page/3/index.html","ba165cf45b49b9025166228b3842c1e4"],["/posts/2891e33e/index.html","aa5f6087dcffe4af5beab58654a8e619"],["/posts/3e101a1c/index.html","d729b42c5584b6cec095aee8a2ebc716"],["/posts/4d0f8001/index.html","db20cbe4285ccd427d9d6001e35cfbda"],["/posts/53427649/index.html","fdcbcb26cb045c629004a4c4f977610d"],["/posts/70f38985/index.html","1c17d16b71ec657f48fcf1dfa8fb288e"],["/posts/744e4646/index.html","8b5e0dc4a4d97067ebec6b91c1a4a2bf"],["/posts/7949d787/index.html","325f989edfe53d83927f40e3450e931b"],["/posts/83ff2157/index.html","7fbae95cbf6120dccb0219648604dc02"],["/posts/9e1e9509/index.html","8afe9786b9ae2b1c029cbc2f3f7a903d"],["/posts/a806c713/index.html","e543ba4a1d2d035ec3929d201668371e"],["/posts/a8ef42b/index.html","3b55148f1dffe5a15de9c14337d38d44"],["/posts/beeac218/index.html","a942de74f0cc156c060877632811c9fe"],["/posts/e66f6c3/index.html","5dc920dc9cbbcb1405d3e4d3b5584b02"],["/posts/f1673a6/index.html","c2c833523602b0952b36ecd7df7163b7"],["/sw-register.js","f9514d3f7c5a1e5f8ce2e95ea055b999"],["/tags/index.html","ee9d2b2eb8bf3c8df522ce5e9b4d024c"]];
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
