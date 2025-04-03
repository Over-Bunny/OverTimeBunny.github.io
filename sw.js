/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2024/05/index.html","cc15b10a005df422ef496e214ffd1270"],["/archives/2024/06/index.html","2656c436f6ad982aa5381ceba7f87455"],["/archives/2024/08/index.html","71f77b03e5f0f0c8f88f59771e1b66c4"],["/archives/2024/index.html","37ae2d19e62fc7d970af5cd2fb06feee"],["/archives/2024/page/2/index.html","8bc1c5c464a85bf1bdfe0b972843d5ed"],["/archives/2025/01/index.html","774becc2db23439c0c72f06cfe152a0c"],["/archives/2025/03/index.html","0b5a120da789ef1ebd025516bc7c2696"],["/archives/2025/index.html","66533ccfbd4982517fb8c089724193bd"],["/archives/index.html","64accabd440282f6728fd2fa62b03052"],["/archives/page/2/index.html","f797f95e92b95095d3de4823bf791776"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","1f48c73b564baa3e67e834921ab9d1c7"],["/categories/Linux/index.html","27eefa7388a71d7108ba966be1cb6c66"],["/categories/QQBot/index.html","ca0db87e897e79121c376fd251bca9e9"],["/categories/Termux/index.html","d430d2be24f514ce6b1215e33e240970"],["/categories/Termux/安卓/index.html","98933de299f3d73fe30cb77f5fa03540"],["/categories/Windows/Hype-v/index.html","6ff6c70d004d7a557c5712a01ff4d63e"],["/categories/Windows/WSL/index.html","09f7e19a41f4bd77edd03be62f7ad2eb"],["/categories/Windows/index.html","b0e75d4653b422786f1082ef2c13ddc2"],["/categories/index.html","a3bd0ce0c981d06afaee1b76228957b3"],["/categories/qsign/index.html","134d13f870a0bfbafbc96e877b2d1696"],["/categories/qsign/安卓/index.html","bcfc1783729009ee7a3396a574d828f4"],["/categories/博客告知/index.html","bdfb3560f14b1e955b04d8457e1ba96e"],["/categories/好物推荐/index.html","69c7fc9148f099e74410496d9dbfbb9e"],["/categories/常见问题汇总/index.html","cb4806ebeab7d9342166c92fc297b150"],["/categories/网络工具/index.html","e12f7a266a0c9c653e2ad0227743e629"],["/css/custom.css","aa416c0a6b316483dc3966a9233f51f7"],["/css/index.css","5b80b564e9972fd9144b6b6d38585d3a"],["/css/sweetalert.css","bb958a910616b991fb7b5ef279fbd837"],["/css/universe.css","634bbccd301760e7e1d016c7a5512783"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1.png","e8b8758beb225ced2abfc8f2261f7be7"],["/img/2.png","8f79696c74e8e0a93c7496022522f40a"],["/img/3.png","447acfa503b16e96fee086862abfa847"],["/img/4.jpg","c85585e510eed719dc202bade1ab397c"],["/img/404.jpg","1f6abd4f8abaf450a58eedf4dee834cd"],["/img/FAQ/1.png","f86f55239bb29c6c949e995d3e19bbbe"],["/img/FAQ/10.png","847d7309d5e63465c040874bbc3b4ef4"],["/img/FAQ/11.png","d9c267ae0ca6f31659be1d412686dac6"],["/img/FAQ/2.png","fd5dfb2874dae3a06b085bb53c26e4c1"],["/img/FAQ/3.jpg","d71fcb48c16dd9935af4a0352d5d4f66"],["/img/FAQ/3.png","2d7e927423d83a88a6ebf219f3263236"],["/img/FAQ/4.png","96d520e593de043c58d99a485ef5fc92"],["/img/FAQ/5.jpg","090d4dd2b2c775cee2cbe2229907ab11"],["/img/FAQ/5.png","910d8aa95c81e25295f7772bf96f21a3"],["/img/FAQ/6.png","451e7384ad43f3daa804e488a42986dd"],["/img/FAQ/7.png","25111001dc1b7506434db8b4dc4d8f85"],["/img/FAQ/8.png","fa6484a5656f4adb3fbc21a0fdfee27a"],["/img/FAQ/9.png","7a7d756b86aadf5267c86e94c9bb0630"],["/img/FRP/1.png","016d743d5bad1ea776d35186c02d064c"],["/img/FRP/2.png","7fdef0bb845c1f160866b88ed6e1cfbc"],["/img/FRP/3.png","b4a52dae69251a287dd3096efb4584c3"],["/img/FRP/4.png","7cffa79f650e2cc6563869a3984983b0"],["/img/FRP/5.png","20d562680ee76e55c0aa7260b035b202"],["/img/FRP/6.png","0168d18332e6dcba6ee7373f9a8f0c36"],["/img/Goods/1.png","dbdd3b2aeec843f67f1eb32ec74b428a"],["/img/Goods/10.png","58385980150680ea0caa325b177d768b"],["/img/Goods/11.png","94f3c1c13c702ed59041519c9ef5fa2b"],["/img/Goods/12.png","d7b02b1554b822dab0c5036eadbe0779"],["/img/Goods/2.png","9b0a15765d8af172d6a7ceeb2c0564be"],["/img/Goods/3.png","c02b160ae1db14ee70d85c10125d9cf2"],["/img/Goods/4.png","48d61a351a634e3cb4827a46bee73867"],["/img/Goods/5.png","8a9d4512debdc8965907cf70229fb9c6"],["/img/Goods/6.png","c00049ded3f4792b4b47a67faad9613b"],["/img/Goods/7.png","a1cf3404826bbd4ce3b86bf42d2208b9"],["/img/Goods/8.png","85acd3b50115f350979419e59d589dc9"],["/img/Goods/9.png","2c5df2515cb4533cea3d6866de1061dd"],["/img/Hexo/1.png","670a6393ee50c2c389eeb0d92b847105"],["/img/Hexo/2.png","951c8cc8f21822d7e1e38686a75508c4"],["/img/Hexo/3.png","739d50c662220ccaf1fbc25d7191abcd"],["/img/Hexo/4.jpg","54338d3d7e9425a0fb930b4859bdcde0"],["/img/Hype_v/1.jpg","ebcf582af18aba8b901136b6dd9e1b44"],["/img/Hype_v/1.png","b9d8b75f54aa80754f3314a7029d1e8c"],["/img/Hype_v/10.png","df9b52a0bbe5c9878efec3c2fc8086d1"],["/img/Hype_v/11.png","a921aecc44a0cbb06c05ed428f740f3c"],["/img/Hype_v/12.png","562176e2f346447e9b27b12c436855a7"],["/img/Hype_v/13.png","b691f6eb52d77f08e0c9b5a8601062b3"],["/img/Hype_v/14.png","2d267ac574eae4978adc01d008f5e800"],["/img/Hype_v/15.png","0bf0f6de4c849e9616556c8801e6e457"],["/img/Hype_v/16.png","05b66497ce5a440b3b02436871866176"],["/img/Hype_v/17.png","471424f2f53c2c5dea4f2a84bf21af63"],["/img/Hype_v/18.png","ef4fb3f12ff2b078d98f8d0a813b59e6"],["/img/Hype_v/19.png","216f55f1493472ac23167936aedfc529"],["/img/Hype_v/2.png","18924a2c02504e7db4172aa4b70d10ec"],["/img/Hype_v/20.png","fd54baf17f181f49ce5982df529951a1"],["/img/Hype_v/21.png","7f622582933cdf07624537b26bdee62a"],["/img/Hype_v/22.png","7af7abc881fd54556aee20f38dd33259"],["/img/Hype_v/23.png","05938f032c98724440450f54d3a459ae"],["/img/Hype_v/24.png","1dc97e68a0e363fc8f0946a6155a1f12"],["/img/Hype_v/25.png","195619bc4cb80afabf20e37879aa09a9"],["/img/Hype_v/26.png","be79197d33cc48e4d5dd6de45dc57d51"],["/img/Hype_v/27.png","039df0b7810a231e99a982ec1a1c5a32"],["/img/Hype_v/28.png","6e7112d4d259674b97e0b106262c3881"],["/img/Hype_v/29.png","52cddaf79e9beb40f49a81419da7a72a"],["/img/Hype_v/3.png","673e5f8de77f9fb67be4680cb960ed50"],["/img/Hype_v/30.png","93607844453dbb28161486979d5f87d3"],["/img/Hype_v/31.png","70b67d8c85c9fd676b277b4222458559"],["/img/Hype_v/32.png","526f24842ef01cb42e6abd0bb2d26192"],["/img/Hype_v/33.png","37164db6a1c90f369802880ec7540194"],["/img/Hype_v/34.png","10bfa0562e9ba522c529e5f59113538c"],["/img/Hype_v/35.png","e01530634b5f946d31d13b168da49b6b"],["/img/Hype_v/36.png","f5ea8179b5880926fd6e357dce3c5604"],["/img/Hype_v/4.png","30eba5a4b8f3c8793ea9dbb295b21462"],["/img/Hype_v/5.png","0a379f89e316208057dc239d51c1c2a2"],["/img/Hype_v/6.png","a1b7b4af970a483307ff2cd65fecaf1e"],["/img/Hype_v/7.png","edf94f4e95e40d4ecae37e50cb0a8a22"],["/img/Hype_v/8.png","b881ff1b21fa8f9ea8b55c085acbf92b"],["/img/Hype_v/9.png","dbaca1ac95c8f78ff6473bde62840973"],["/img/Linux/1.png","54982b666ccd9f2bd6466f0665f63f4b"],["/img/Linux/10.png","1cbfa993ec29e62ca871c5b39316c15a"],["/img/Linux/11.png","fd72693c5ad3d3cb9763d24cadaeeaa1"],["/img/Linux/12.png","e3c18cf2eb909ff656c09364d1dbdeac"],["/img/Linux/13.png","b776c75ff8c0d4b331774445bcbe1617"],["/img/Linux/14.png","7f862a01d9bf7604ffea5afe44a95591"],["/img/Linux/15.png","097c5e68b88bb88939cb8d1d1a5c1b88"],["/img/Linux/16.png","d41d060bc8adfdfceba3935bad52c00d"],["/img/Linux/17.png","7ce93cba01fb1425b573129bc3d4a438"],["/img/Linux/18.png","5f726cba639e07b5f7d74b4ded720d86"],["/img/Linux/19.jpg","4e30017ce52902a086a771c7b30817cb"],["/img/Linux/2.jpg","999cd1a1946e050f10c09c24749652ed"],["/img/Linux/20.png","2be0d78adabaeec4ceb1fce10a57666a"],["/img/Linux/21.png","092c8276cfbb61b457ad0da38f595574"],["/img/Linux/3.png","263ae368d9d99416548f64cc7d3b2759"],["/img/Linux/4.png","ff41c89e4b5847ad6c8ee2bb94b7b869"],["/img/Linux/5.png","fe8dd5e266ece22931985c0fd9e2b18a"],["/img/Linux/6.png","0587924f9849bf13fe797ececa11a16c"],["/img/Linux/7.png","857624b61f18a494304aef66ab4dab70"],["/img/Linux/8.png","718355a076d84aa345354244d3900213"],["/img/Linux/9.png","aeeacbf26238a5ca2646a6cf8a1d5a89"],["/img/MYSY2/1.png","6f4ba0fa119f6bfb50bed288548e5a9f"],["/img/MYSY2/10.png","1cbfa993ec29e62ca871c5b39316c15a"],["/img/MYSY2/11.png","4bb151ae4f5845090228245b700fae32"],["/img/MYSY2/12.png","74d3b7978c79f9bc449384c0d69b691a"],["/img/MYSY2/13.png","6f8893e196d8e193b38a0ff72109593b"],["/img/MYSY2/14.png","0cf4bc775bc4c327c40305d2c993db56"],["/img/MYSY2/15.png","c06a4a9ead5c5a3bd05f62f6d3d8670e"],["/img/MYSY2/16.png","0cf4bc775bc4c327c40305d2c993db56"],["/img/MYSY2/17.png","7ce93cba01fb1425b573129bc3d4a438"],["/img/MYSY2/18.png","5f726cba639e07b5f7d74b4ded720d86"],["/img/MYSY2/19.png","3a6449fe8e7ce5da121ed9e9ad34924b"],["/img/MYSY2/2.png","0aad606e087f123792d3aa26e63ae2f9"],["/img/MYSY2/3.jpg","9eecb7d519e194fd27d708643d10a0f1"],["/img/MYSY2/4.png","80a708b15f9073dd478e6005cfd66310"],["/img/MYSY2/5.png","6f4ba0fa119f6bfb50bed288548e5a9f"],["/img/MYSY2/6.png","cac5d7735c9a38e33190632b77c85d45"],["/img/MYSY2/7.jpg","de4baab4c26fe409de5a2d99a7b28930"],["/img/MYSY2/8.png","10801fa4b9e3cfaa45daff04da0e3964"],["/img/MYSY2/9.png","20b453f70b13879b83d0d28005369211"],["/img/QQBot/1.png","0b683c4f97bce9bd2ac7629554f5400a"],["/img/QQBot/10.png","ca51198aed4842211a7c6c72bf8f2d3d"],["/img/QQBot/11.jpg","2d7f6aa30d9838224c379b6d5942643d"],["/img/QQBot/12.png","6c7d26d1c9cfac2802c96a118ba08598"],["/img/QQBot/13.jpg","e4d792dac1bae03712fff1e68cf614a1"],["/img/QQBot/13.png","68e3201166951e4b351a180283f8bd03"],["/img/QQBot/2.png","9bfc82d32615d1caa3225f3e6ab0e410"],["/img/QQBot/3.png","564e75acf130575bf85c23ea395439cf"],["/img/QQBot/4.png","6301533043725aec8cbf5334f3b2686e"],["/img/QQBot/5.png","8426f47021660a61e6e28292898146c8"],["/img/QQBot/6.png","c895e67b12c1248dd85e206b331dd664"],["/img/QQBot/7.png","bc5ef2fd484b352ee3e365d26bce89ee"],["/img/QQBot/8.png","3f2ca1288cd8bc25744816873ed1fac0"],["/img/QQBot/9.png","f6dc490190bdbd8b9bd831aa7faa30ec"],["/img/Qsgin/1.png","89541fd68250b1c96f0375507479c960"],["/img/Qsgin/2.png","aa64f896034d7345b4e9aa189b535b8e"],["/img/Qsgin/3.png","89fd3c3b8ec4117743cda4f61060476f"],["/img/SPS/1.png","409ca9e7bc35723ebb97eb87c4ef09f2"],["/img/SPS/2.png","2b07d45af1668d6d0e0fb248aea9ae5d"],["/img/SPS/3.png","363e7eee139e18f5fa9d55534d9634b6"],["/img/Shizuku/1.jpg","d6ef19d393ce22307648f341f5172322"],["/img/Shizuku/10.jpg","c4a4f5f01128a2576c6b8e6fb3a66f88"],["/img/Shizuku/2.jpg","d6dbae88f5a0f2319c53f147761b6403"],["/img/Shizuku/3.jpg","0919d5ca8924c8470340c94c0f6ffd0b"],["/img/Shizuku/4.jpg","0919d5ca8924c8470340c94c0f6ffd0b"],["/img/Shizuku/5.jpg","64659108c7f4177322dfc4314d8c4767"],["/img/Shizuku/6.jpg","7091d00959edfeea640784cbc1102de9"],["/img/Shizuku/7.jpg","cfe33ea2726a27655eff7aef841d1156"],["/img/Shizuku/8.jpg","76cf95fa1e8be7bab10c499095118bbf"],["/img/Shizuku/9.jpg","d6ef19d393ce22307648f341f5172322"],["/img/Termux/1.jpg","a3a8838eb758510db00f1be85e3321d3"],["/img/Termux/10.png","85acd3b50115f350979419e59d589dc9"],["/img/Termux/11.png","be544ae0792e4a378eba5719e6d3a855"],["/img/Termux/12.png","69763a0d8b93682cde00c21841c37165"],["/img/Termux/2.jpg","a3a8838eb758510db00f1be85e3321d3"],["/img/Termux/3.jpg","b1b4867abc77acb319f6b0ff17caa965"],["/img/Termux/4.jpg","777df98cc4f589f7ff03670489e83b6a"],["/img/Termux/5.jpg","73620e1493b9534802b58ae81ff9f558"],["/img/Termux/6.jpg","fbc6d1e5f2b8fd72830765f0666cbb2d"],["/img/Termux/7.png","6b152ce9816bf6750cc26b3bbb16efb0"],["/img/Termux/8.jpg","5bb394d6836c189b1dfb70e2a0f33064"],["/img/Termux/9.png","2c5df2515cb4533cea3d6866de1061dd"],["/img/WSL/1.png","07f69480770fc560a303cfdbdab2e6a5"],["/img/WSL/10.png","eb2062d9510e423909d570e630aaaadb"],["/img/WSL/11.png","56a485de3c259fc131398511366e5b91"],["/img/WSL/12.png","53527e7dc436bf00d4d43debe8c82d56"],["/img/WSL/13.png","3f5f1c08d131b26d0a9305d17851a7f5"],["/img/WSL/14.png","8c983b5b76d53d868e1163908c0d79f1"],["/img/WSL/15.png","bbdd142c392677ce86e0a595153fa94d"],["/img/WSL/16.png","e06b64263b0fd5800b8ae9ceab27077f"],["/img/WSL/17.png","ed7715b3844bf35edfd725f59df62063"],["/img/WSL/18.png","16c3f93ba14a6b7689911558795d8a2c"],["/img/WSL/19.png","27a0c0c28e87be849a2b225199a5a236"],["/img/WSL/2.png","52d565e15b20861c2a4e35842185aef9"],["/img/WSL/20.jpg","3ed147e68808ed680833b41d918fd6da"],["/img/WSL/21.png","e101765c56d4b370473e6f65e3f4827b"],["/img/WSL/22.png","0148879c268828b5654a2b3da15877b5"],["/img/WSL/23.png","697ea85c6fcacc552f4515527fffb45c"],["/img/WSL/24.png","e66450357ec70641196c10eb403782f7"],["/img/WSL/25.png","07f69480770fc560a303cfdbdab2e6a5"],["/img/WSL/26.png","96c9da131b8ba3ad22106f4298f42774"],["/img/WSL/27.png","b69a8bb59ea2551fba0916003cc81df2"],["/img/WSL/28.png","12e3d9598df4951c55cb7a46ae6174db"],["/img/WSL/29.png","7ce93cba01fb1425b573129bc3d4a438"],["/img/WSL/3.png","5d7c0a91e36e17d02ae9791afe55731a"],["/img/WSL/30.png","5f726cba639e07b5f7d74b4ded720d86"],["/img/WSL/4.png","a14e56727a485223f321aa0691490906"],["/img/WSL/5.png","75653683ad6920ac8c4770c613141838"],["/img/WSL/6.png","95d840b1bf49218c5221bb6aa638c9a8"],["/img/WSL/7.png","95d840b1bf49218c5221bb6aa638c9a8"],["/img/WSL/8.png","33683be9876da02b61f590d750d52183"],["/img/WSL/9.png","156cf666fa5cf0a9e71689bfb62e060f"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","487d99e784031a99d9d17f54df0aef27"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sweetalert.js","b97aa462f0f914593d471a7da27fddc3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","a0918f0f6c0813282d129c85a70050ce"],["/music/index.html","8c760fa7d9bf8d5870a46600619731f8"],["/page/2/index.html","90d601a8d5af19952ed37c1123b46dcc"],["/page/3/index.html","722d296826a5e3a4db2d48d7883572b6"],["/page/4/index.html","445d1fe10c342c5a260c7dbbbd30d828"],["/posts/2891e33e/index.html","c3fddb76da3ebc776873ef50c0a8461b"],["/posts/3e101a1c/index.html","2c7b0e1e9161e8a8661f56422d7f30a5"],["/posts/48ced98/index.html","a904166a37ba5f06e7e6f0a06d3e6334"],["/posts/4b60812/index.html","539a8c97b3b791e20f07bba81c783c32"],["/posts/4d0f8001/index.html","da7e8e7dba86e23994543b3d97ee2afc"],["/posts/53427649/index.html","2b638b14774090bce0b1e26e50891d19"],["/posts/70f38985/index.html","60885d7ecbb7d34831bce94eec34abbd"],["/posts/744e4646/index.html","bcc5c97fb538d66dc52592c9bc346acd"],["/posts/7949d787/index.html","72c660cf749f7e600e76088d4c9fa00d"],["/posts/83ff2157/index.html","1e45990357e3db102b30e7659f567122"],["/posts/9e1e9509/index.html","ab0e620719974c2ef1a30ff9a8ee14c5"],["/posts/a806c713/index.html","8a80ebe575a8c23725dfa356c73902c5"],["/posts/a8ef42b/index.html","4fbd295750720840776f57d755c01f08"],["/posts/beeac218/index.html","5e2b8bc4ec16e46d03ae3992b2d18d8f"],["/posts/d7178a05/index.html","c263565b85109837532f4931547ef272"],["/posts/e66f6c3/index.html","73155b8eec18d41f4a23b92ce804901f"],["/posts/f1673a6/index.html","58f1551f2d54398d99ccd574bf8f93a6"],["/sw-register.js","56020f1681142964b5e0f0ff7f3aa9a5"],["/tags/index.html","20796593502bfbc658c3c6a58f35c871"]];
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
