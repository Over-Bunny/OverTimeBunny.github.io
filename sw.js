/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2024/05/index.html","82e81ba04938e08d9dd8f4bc95fbdc7c"],["/archives/2024/06/index.html","8c4317fdd5b62f88b5a8d94d6c8ef347"],["/archives/2024/08/index.html","a914efeeefbd26f02bcf8f154c8372c3"],["/archives/2024/index.html","bde68151166ff733b82a2bcbfaeaa481"],["/archives/2024/page/2/index.html","eccf09eb0f757f624d69db055893c3c2"],["/archives/2025/01/index.html","946578e500c195ad02b16a609feaa041"],["/archives/2025/03/index.html","dc6f5bab1a2e8732b8fdc4acfb6d82f9"],["/archives/2025/index.html","0238a655ce57c4650f6cba392f816f5f"],["/archives/index.html","781751bf52172f9785255f5bfd185b0a"],["/archives/page/2/index.html","d35474b01307f7164d184ad463dc075e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","23792d31c5b57b5438a768a69764bf52"],["/categories/Linux/index.html","8854169b47263f4b8e41a81e91f51a82"],["/categories/QQBot/index.html","a15476f693cc0bda3b160523804d34b9"],["/categories/Termux/index.html","61469084f84552a94a5cfb999e45d506"],["/categories/Termux/安卓/index.html","21f129744f19e7d47a4449b31ae575e9"],["/categories/Windows/Hype-v/index.html","d6e7081db317066898d8d24aacfde080"],["/categories/Windows/WSL/index.html","43ff45852ec3280b37f8985d40376e84"],["/categories/Windows/index.html","7451374b32d435a84c93eb477f340b80"],["/categories/index.html","2229634416543477c1b8b3d13a106fbe"],["/categories/qsign/index.html","dbff70f7200806a5c92349c64e1451ad"],["/categories/qsign/安卓/index.html","a5cd1ebb1dba1dd37157b9a905456a26"],["/categories/博客告知/index.html","2afab9d3681c43137c82228e346b67c7"],["/categories/好物推荐/index.html","c960592e2c92c3472328865c398fbfd7"],["/categories/常见问题汇总/index.html","d7349a08f1165e048fd75379f7c65ce5"],["/categories/网络工具/index.html","d800bb952046c43a168432bec2f62a21"],["/css/custom.css","aa416c0a6b316483dc3966a9233f51f7"],["/css/index.css","5b80b564e9972fd9144b6b6d38585d3a"],["/css/sweetalert.css","bb958a910616b991fb7b5ef279fbd837"],["/css/universe.css","634bbccd301760e7e1d016c7a5512783"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1.png","e8b8758beb225ced2abfc8f2261f7be7"],["/img/2.png","8f79696c74e8e0a93c7496022522f40a"],["/img/3.png","447acfa503b16e96fee086862abfa847"],["/img/4.jpg","c85585e510eed719dc202bade1ab397c"],["/img/404.jpg","1f6abd4f8abaf450a58eedf4dee834cd"],["/img/FAQ/1.png","f86f55239bb29c6c949e995d3e19bbbe"],["/img/FAQ/10.png","847d7309d5e63465c040874bbc3b4ef4"],["/img/FAQ/11.png","d9c267ae0ca6f31659be1d412686dac6"],["/img/FAQ/2.png","fd5dfb2874dae3a06b085bb53c26e4c1"],["/img/FAQ/3.jpg","d71fcb48c16dd9935af4a0352d5d4f66"],["/img/FAQ/3.png","2d7e927423d83a88a6ebf219f3263236"],["/img/FAQ/4.png","96d520e593de043c58d99a485ef5fc92"],["/img/FAQ/5.jpg","090d4dd2b2c775cee2cbe2229907ab11"],["/img/FAQ/5.png","910d8aa95c81e25295f7772bf96f21a3"],["/img/FAQ/6.png","451e7384ad43f3daa804e488a42986dd"],["/img/FAQ/7.png","25111001dc1b7506434db8b4dc4d8f85"],["/img/FAQ/8.png","fa6484a5656f4adb3fbc21a0fdfee27a"],["/img/FAQ/9.png","7a7d756b86aadf5267c86e94c9bb0630"],["/img/FRP/1.png","016d743d5bad1ea776d35186c02d064c"],["/img/FRP/2.png","7fdef0bb845c1f160866b88ed6e1cfbc"],["/img/FRP/3.png","b4a52dae69251a287dd3096efb4584c3"],["/img/FRP/4.png","7cffa79f650e2cc6563869a3984983b0"],["/img/FRP/5.png","20d562680ee76e55c0aa7260b035b202"],["/img/FRP/6.png","0168d18332e6dcba6ee7373f9a8f0c36"],["/img/Goods/1.png","dbdd3b2aeec843f67f1eb32ec74b428a"],["/img/Goods/10.png","58385980150680ea0caa325b177d768b"],["/img/Goods/11.png","94f3c1c13c702ed59041519c9ef5fa2b"],["/img/Goods/12.png","d7b02b1554b822dab0c5036eadbe0779"],["/img/Goods/2.png","9b0a15765d8af172d6a7ceeb2c0564be"],["/img/Goods/3.png","c02b160ae1db14ee70d85c10125d9cf2"],["/img/Goods/4.png","48d61a351a634e3cb4827a46bee73867"],["/img/Goods/5.png","8a9d4512debdc8965907cf70229fb9c6"],["/img/Goods/6.png","c00049ded3f4792b4b47a67faad9613b"],["/img/Goods/7.png","a1cf3404826bbd4ce3b86bf42d2208b9"],["/img/Goods/8.png","85acd3b50115f350979419e59d589dc9"],["/img/Goods/9.png","2c5df2515cb4533cea3d6866de1061dd"],["/img/Hexo/1.png","670a6393ee50c2c389eeb0d92b847105"],["/img/Hexo/2.png","951c8cc8f21822d7e1e38686a75508c4"],["/img/Hexo/3.png","739d50c662220ccaf1fbc25d7191abcd"],["/img/Hexo/4.jpg","54338d3d7e9425a0fb930b4859bdcde0"],["/img/Hype_v/1.jpg","ebcf582af18aba8b901136b6dd9e1b44"],["/img/Hype_v/1.png","b9d8b75f54aa80754f3314a7029d1e8c"],["/img/Hype_v/10.png","df9b52a0bbe5c9878efec3c2fc8086d1"],["/img/Hype_v/11.png","a921aecc44a0cbb06c05ed428f740f3c"],["/img/Hype_v/12.png","562176e2f346447e9b27b12c436855a7"],["/img/Hype_v/13.png","b691f6eb52d77f08e0c9b5a8601062b3"],["/img/Hype_v/14.png","2d267ac574eae4978adc01d008f5e800"],["/img/Hype_v/15.png","0bf0f6de4c849e9616556c8801e6e457"],["/img/Hype_v/16.png","05b66497ce5a440b3b02436871866176"],["/img/Hype_v/17.png","471424f2f53c2c5dea4f2a84bf21af63"],["/img/Hype_v/18.png","ef4fb3f12ff2b078d98f8d0a813b59e6"],["/img/Hype_v/19.png","216f55f1493472ac23167936aedfc529"],["/img/Hype_v/2.png","18924a2c02504e7db4172aa4b70d10ec"],["/img/Hype_v/20.png","fd54baf17f181f49ce5982df529951a1"],["/img/Hype_v/21.png","7f622582933cdf07624537b26bdee62a"],["/img/Hype_v/22.png","7af7abc881fd54556aee20f38dd33259"],["/img/Hype_v/23.png","05938f032c98724440450f54d3a459ae"],["/img/Hype_v/24.png","1dc97e68a0e363fc8f0946a6155a1f12"],["/img/Hype_v/25.png","195619bc4cb80afabf20e37879aa09a9"],["/img/Hype_v/26.png","be79197d33cc48e4d5dd6de45dc57d51"],["/img/Hype_v/27.png","039df0b7810a231e99a982ec1a1c5a32"],["/img/Hype_v/28.png","6e7112d4d259674b97e0b106262c3881"],["/img/Hype_v/29.png","52cddaf79e9beb40f49a81419da7a72a"],["/img/Hype_v/3.png","673e5f8de77f9fb67be4680cb960ed50"],["/img/Hype_v/30.png","93607844453dbb28161486979d5f87d3"],["/img/Hype_v/31.png","70b67d8c85c9fd676b277b4222458559"],["/img/Hype_v/32.png","526f24842ef01cb42e6abd0bb2d26192"],["/img/Hype_v/33.png","37164db6a1c90f369802880ec7540194"],["/img/Hype_v/34.png","10bfa0562e9ba522c529e5f59113538c"],["/img/Hype_v/35.png","e01530634b5f946d31d13b168da49b6b"],["/img/Hype_v/36.png","f5ea8179b5880926fd6e357dce3c5604"],["/img/Hype_v/4.png","30eba5a4b8f3c8793ea9dbb295b21462"],["/img/Hype_v/5.png","0a379f89e316208057dc239d51c1c2a2"],["/img/Hype_v/6.png","a1b7b4af970a483307ff2cd65fecaf1e"],["/img/Hype_v/7.png","edf94f4e95e40d4ecae37e50cb0a8a22"],["/img/Hype_v/8.png","b881ff1b21fa8f9ea8b55c085acbf92b"],["/img/Hype_v/9.png","dbaca1ac95c8f78ff6473bde62840973"],["/img/Linux/1.png","54982b666ccd9f2bd6466f0665f63f4b"],["/img/Linux/10.png","1cbfa993ec29e62ca871c5b39316c15a"],["/img/Linux/11.png","fd72693c5ad3d3cb9763d24cadaeeaa1"],["/img/Linux/12.png","e3c18cf2eb909ff656c09364d1dbdeac"],["/img/Linux/13.png","b776c75ff8c0d4b331774445bcbe1617"],["/img/Linux/14.png","7f862a01d9bf7604ffea5afe44a95591"],["/img/Linux/15.png","097c5e68b88bb88939cb8d1d1a5c1b88"],["/img/Linux/16.png","d41d060bc8adfdfceba3935bad52c00d"],["/img/Linux/17.png","7ce93cba01fb1425b573129bc3d4a438"],["/img/Linux/18.png","5f726cba639e07b5f7d74b4ded720d86"],["/img/Linux/19.jpg","4e30017ce52902a086a771c7b30817cb"],["/img/Linux/2.jpg","999cd1a1946e050f10c09c24749652ed"],["/img/Linux/20.png","2be0d78adabaeec4ceb1fce10a57666a"],["/img/Linux/21.png","092c8276cfbb61b457ad0da38f595574"],["/img/Linux/3.png","263ae368d9d99416548f64cc7d3b2759"],["/img/Linux/4.png","ff41c89e4b5847ad6c8ee2bb94b7b869"],["/img/Linux/5.png","fe8dd5e266ece22931985c0fd9e2b18a"],["/img/Linux/6.png","0587924f9849bf13fe797ececa11a16c"],["/img/Linux/7.png","857624b61f18a494304aef66ab4dab70"],["/img/Linux/8.png","718355a076d84aa345354244d3900213"],["/img/Linux/9.png","aeeacbf26238a5ca2646a6cf8a1d5a89"],["/img/MYSY2/1.png","6f4ba0fa119f6bfb50bed288548e5a9f"],["/img/MYSY2/10.png","1cbfa993ec29e62ca871c5b39316c15a"],["/img/MYSY2/11.png","4bb151ae4f5845090228245b700fae32"],["/img/MYSY2/12.png","74d3b7978c79f9bc449384c0d69b691a"],["/img/MYSY2/13.png","6f8893e196d8e193b38a0ff72109593b"],["/img/MYSY2/14.png","0cf4bc775bc4c327c40305d2c993db56"],["/img/MYSY2/15.png","c06a4a9ead5c5a3bd05f62f6d3d8670e"],["/img/MYSY2/16.png","0cf4bc775bc4c327c40305d2c993db56"],["/img/MYSY2/17.png","7ce93cba01fb1425b573129bc3d4a438"],["/img/MYSY2/18.png","5f726cba639e07b5f7d74b4ded720d86"],["/img/MYSY2/19.png","3a6449fe8e7ce5da121ed9e9ad34924b"],["/img/MYSY2/2.png","0aad606e087f123792d3aa26e63ae2f9"],["/img/MYSY2/3.jpg","9eecb7d519e194fd27d708643d10a0f1"],["/img/MYSY2/4.png","80a708b15f9073dd478e6005cfd66310"],["/img/MYSY2/5.png","6f4ba0fa119f6bfb50bed288548e5a9f"],["/img/MYSY2/6.png","cac5d7735c9a38e33190632b77c85d45"],["/img/MYSY2/7.jpg","de4baab4c26fe409de5a2d99a7b28930"],["/img/MYSY2/8.png","10801fa4b9e3cfaa45daff04da0e3964"],["/img/MYSY2/9.png","20b453f70b13879b83d0d28005369211"],["/img/QQBot/1.png","0b683c4f97bce9bd2ac7629554f5400a"],["/img/QQBot/10.png","ca51198aed4842211a7c6c72bf8f2d3d"],["/img/QQBot/11.jpg","2d7f6aa30d9838224c379b6d5942643d"],["/img/QQBot/12.png","6c7d26d1c9cfac2802c96a118ba08598"],["/img/QQBot/13.jpg","e4d792dac1bae03712fff1e68cf614a1"],["/img/QQBot/13.png","68e3201166951e4b351a180283f8bd03"],["/img/QQBot/2.png","9bfc82d32615d1caa3225f3e6ab0e410"],["/img/QQBot/3.png","564e75acf130575bf85c23ea395439cf"],["/img/QQBot/4.png","6301533043725aec8cbf5334f3b2686e"],["/img/QQBot/5.png","8426f47021660a61e6e28292898146c8"],["/img/QQBot/6.png","c895e67b12c1248dd85e206b331dd664"],["/img/QQBot/7.png","bc5ef2fd484b352ee3e365d26bce89ee"],["/img/QQBot/8.png","3f2ca1288cd8bc25744816873ed1fac0"],["/img/QQBot/9.png","f6dc490190bdbd8b9bd831aa7faa30ec"],["/img/Qsgin/1.png","89541fd68250b1c96f0375507479c960"],["/img/Qsgin/2.png","aa64f896034d7345b4e9aa189b535b8e"],["/img/Qsgin/3.png","89fd3c3b8ec4117743cda4f61060476f"],["/img/SPS/1.png","409ca9e7bc35723ebb97eb87c4ef09f2"],["/img/SPS/2.png","2b07d45af1668d6d0e0fb248aea9ae5d"],["/img/SPS/3.png","363e7eee139e18f5fa9d55534d9634b6"],["/img/Shizuku/1.jpg","d6ef19d393ce22307648f341f5172322"],["/img/Shizuku/10.jpg","c4a4f5f01128a2576c6b8e6fb3a66f88"],["/img/Shizuku/2.jpg","d6dbae88f5a0f2319c53f147761b6403"],["/img/Shizuku/3.jpg","0919d5ca8924c8470340c94c0f6ffd0b"],["/img/Shizuku/4.jpg","0919d5ca8924c8470340c94c0f6ffd0b"],["/img/Shizuku/5.jpg","64659108c7f4177322dfc4314d8c4767"],["/img/Shizuku/6.jpg","7091d00959edfeea640784cbc1102de9"],["/img/Shizuku/7.jpg","cfe33ea2726a27655eff7aef841d1156"],["/img/Shizuku/8.jpg","76cf95fa1e8be7bab10c499095118bbf"],["/img/Shizuku/9.jpg","d6ef19d393ce22307648f341f5172322"],["/img/Termux/1.jpg","a3a8838eb758510db00f1be85e3321d3"],["/img/Termux/10.png","85acd3b50115f350979419e59d589dc9"],["/img/Termux/11.png","be544ae0792e4a378eba5719e6d3a855"],["/img/Termux/12.png","69763a0d8b93682cde00c21841c37165"],["/img/Termux/2.jpg","a3a8838eb758510db00f1be85e3321d3"],["/img/Termux/3.jpg","b1b4867abc77acb319f6b0ff17caa965"],["/img/Termux/4.jpg","777df98cc4f589f7ff03670489e83b6a"],["/img/Termux/5.jpg","73620e1493b9534802b58ae81ff9f558"],["/img/Termux/6.jpg","fbc6d1e5f2b8fd72830765f0666cbb2d"],["/img/Termux/7.png","6b152ce9816bf6750cc26b3bbb16efb0"],["/img/Termux/8.jpg","5bb394d6836c189b1dfb70e2a0f33064"],["/img/Termux/9.png","2c5df2515cb4533cea3d6866de1061dd"],["/img/WSL/1.png","07f69480770fc560a303cfdbdab2e6a5"],["/img/WSL/10.png","eb2062d9510e423909d570e630aaaadb"],["/img/WSL/11.png","56a485de3c259fc131398511366e5b91"],["/img/WSL/12.png","53527e7dc436bf00d4d43debe8c82d56"],["/img/WSL/13.png","3f5f1c08d131b26d0a9305d17851a7f5"],["/img/WSL/14.png","8c983b5b76d53d868e1163908c0d79f1"],["/img/WSL/15.png","bbdd142c392677ce86e0a595153fa94d"],["/img/WSL/16.png","e06b64263b0fd5800b8ae9ceab27077f"],["/img/WSL/17.png","ed7715b3844bf35edfd725f59df62063"],["/img/WSL/18.png","16c3f93ba14a6b7689911558795d8a2c"],["/img/WSL/19.png","27a0c0c28e87be849a2b225199a5a236"],["/img/WSL/2.png","52d565e15b20861c2a4e35842185aef9"],["/img/WSL/20.jpg","3ed147e68808ed680833b41d918fd6da"],["/img/WSL/21.png","e101765c56d4b370473e6f65e3f4827b"],["/img/WSL/22.png","0148879c268828b5654a2b3da15877b5"],["/img/WSL/23.png","697ea85c6fcacc552f4515527fffb45c"],["/img/WSL/24.png","e66450357ec70641196c10eb403782f7"],["/img/WSL/25.png","07f69480770fc560a303cfdbdab2e6a5"],["/img/WSL/26.png","96c9da131b8ba3ad22106f4298f42774"],["/img/WSL/27.png","b69a8bb59ea2551fba0916003cc81df2"],["/img/WSL/28.png","12e3d9598df4951c55cb7a46ae6174db"],["/img/WSL/29.png","7ce93cba01fb1425b573129bc3d4a438"],["/img/WSL/3.png","5d7c0a91e36e17d02ae9791afe55731a"],["/img/WSL/30.png","5f726cba639e07b5f7d74b4ded720d86"],["/img/WSL/4.png","a14e56727a485223f321aa0691490906"],["/img/WSL/5.png","75653683ad6920ac8c4770c613141838"],["/img/WSL/6.png","95d840b1bf49218c5221bb6aa638c9a8"],["/img/WSL/7.png","95d840b1bf49218c5221bb6aa638c9a8"],["/img/WSL/8.png","33683be9876da02b61f590d750d52183"],["/img/WSL/9.png","156cf666fa5cf0a9e71689bfb62e060f"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","4a6d93d29ab2c45065b667e49d682606"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sweetalert.js","b97aa462f0f914593d471a7da27fddc3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","84d9e61790877da26de594963374e736"],["/music/index.html","c1a7122a67b219702d201c26238a55b2"],["/page/2/index.html","be0001388f4cda8b52e40467917fd5d4"],["/page/3/index.html","305b03f5fd7c346486d00589346a525d"],["/page/4/index.html","e2d7853136f85912560d80bb0322cea4"],["/posts/2891e33e/index.html","67356da66d78755e7cbed555d23451a5"],["/posts/3e101a1c/index.html","4d34a88888e6e08d5ea12e16692fef9b"],["/posts/48ced98/index.html","812562e6eed80d3380c38c323c95e4f0"],["/posts/4b60812/index.html","fb68091759b749ed5147fe261eee1292"],["/posts/4d0f8001/index.html","d379a7f6aded0482af75e3fef7028185"],["/posts/53427649/index.html","541c0ce96e2cde19adfb81ee8e3ee786"],["/posts/70f38985/index.html","5f33907bbca4041f254bf676fe02ac5c"],["/posts/744e4646/index.html","22c98e449f187fe8a924550cf1b63bfc"],["/posts/7949d787/index.html","15221769331773aa85ece0b2de6bf4a6"],["/posts/83ff2157/index.html","d401f53e3bd878e6b2cc906486ca4b67"],["/posts/9e1e9509/index.html","6f1affe7806e5c1aae16d078889362e6"],["/posts/a806c713/index.html","7bcb065ba251506264c0cc64ddf21a79"],["/posts/a8ef42b/index.html","41a031612ef7027fb92a4733b178cb48"],["/posts/beeac218/index.html","fc41337ee028a1529fcb5d09eb77d955"],["/posts/d7178a05/index.html","d2ea71e73662ca2a03632a433d4fc6f9"],["/posts/e66f6c3/index.html","8df276e179e5e0ff36c0a84a242ee5e5"],["/posts/f1673a6/index.html","b1aa11b94cf93b3842a7fa753ee65c0d"],["/sw-register.js","4dd6d4e7f7a1f48a8c31ca97af1b1c94"],["/tags/index.html","a353816f715b9e9da645d90584e4a816"]];
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
