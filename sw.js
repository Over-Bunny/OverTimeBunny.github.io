/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2024/05/index.html","0a722c3a95a8b75f7e795cebe8c0e92b"],["/archives/2024/06/index.html","5f2d0c180bf1b0a3ec1c16025ee614ad"],["/archives/2024/08/index.html","2aac2614c167c682f162740b4e198731"],["/archives/2024/index.html","e89113ac6cf2f651dff70d16cd9dce4e"],["/archives/2024/page/2/index.html","7fe813e426148c223723a3bafb07571c"],["/archives/index.html","f604427ddc2661e1167bc126d0b12817"],["/archives/page/2/index.html","c77ce830c33e76ec10e56250fadedf92"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Hexo/index.html","a8f1fa01e2ed530a1594a6df52765dca"],["/categories/Linux/index.html","8cb74c44099366bc8b0b3b149a590f3a"],["/categories/QQBot/index.html","41ad4656329ff871467fbd8060e7e99f"],["/categories/Termux/index.html","ad929b0682b431709754eac64acd5920"],["/categories/Termux/安卓/index.html","12c5fe01e94ae0bb3aed8015c2e92e82"],["/categories/Windows/Hype-v/index.html","be6b2ad234f26ead3ac5be8933658960"],["/categories/Windows/WSL/index.html","99053b0bdba3c218f0586e7a65b2e623"],["/categories/Windows/index.html","62e1ddd9a85906093e76047d3f28d6c4"],["/categories/index.html","6739a7fe7eafc9a86888490bd9831831"],["/categories/qsign/index.html","6ced7fc475c5a9b3018b7298a52b3903"],["/categories/qsign/安卓/index.html","2e124f5f6f0c5b80700dd8c49fdc219e"],["/categories/博客告知/index.html","3e453e374e29ce8fabbd3120e030bc64"],["/categories/好物推荐/index.html","d7347ae7ddbef22cb8e9e057f78d7c65"],["/categories/常见问题汇总/index.html","9de5e2821fc381f018fcb1b6dc0f74ad"],["/categories/网络工具/index.html","c07f888468b28deada2124ac93b34d78"],["/css/custom.css","95c8e8e1d65850291de6c5b128ae5655"],["/css/index.css","2465cf262476af7873ffae19e19f84f4"],["/css/sweetalert.css","bb958a910616b991fb7b5ef279fbd837"],["/css/universe.css","634bbccd301760e7e1d016c7a5512783"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/1.png","7f116412e8974795fe5834584170a6d2"],["/img/2.png","88b993d001366dcc9241e371f6d775d7"],["/img/3.png","ece5df091b8ea5491dfa9d0079ab427a"],["/img/4.png","c8077ca0c18c948bf225801b054f4cfd"],["/img/404.jpg","d919ce81021d462eb496b29f62394de0"],["/img/90/1.png","d74b19d9e59f3de19fb49528eabe0ec1"],["/img/90/2.png","750831aa5ced1136cb248dd2036f9554"],["/img/90/3.png","e0ff155d8ba4c6f06f673cb97dfb4a5e"],["/img/90/4.png","a3799ce123606d81a98e927f859d7cf7"],["/img/FAQ/1.png","c8af9716c16a15d96c4dd44cc67d3bd4"],["/img/FAQ/2.png","a4b3c8a7db66d765eaf27eb7d4499112"],["/img/FAQ/3.png","e29ba78eff342d24db071f770044a10a"],["/img/FAQ/4.png","31dc43869bc27b2bf792145de81fc433"],["/img/FAQ/5.png","a814212565eff4c90cfcb5d97e7886dd"],["/img/FAQ/6.png","2211e1f79b5e503799c21eb10ecc1698"],["/img/FAQ/7.png","77ff6fdd0b3e504020b4fe770b5d8c63"],["/img/FAQ/8.png","35a9ddac8c6bd5dc4d9413bb52dceb7d"],["/img/Goods/1.png","52bd65894fb1f12e66ffab9273959fc0"],["/img/Goods/10.png","48a2b4729cae09a74f07cbad8bd3e6f8"],["/img/Goods/11.png","a48796b1cc219f61ca0063d4b7bdfdad"],["/img/Goods/2.png","f97fbeee6938a8116f5472b2c8eb560b"],["/img/Goods/3.png","daee30f8ad352871f738dc9188184267"],["/img/Goods/4.png","adfdffbd97b5c717e9b8826f66aa4631"],["/img/Goods/5.png","0b83261820e327a01568e5e7354cb381"],["/img/Goods/6.png","013295b45e1115fafbb2c521059cf035"],["/img/Goods/7.png","4d584b53082e20d8a0c73f9b59bf533a"],["/img/Goods/8.png","0f39c81b23f904107515d51da1d74987"],["/img/Goods/9.png","4ab682db1c569ecbf16ef911da51d256"],["/img/Hexo/1.png","554313e276cf0cc5534de4fdfba62e5f"],["/img/Hexo/2.png","6a361465a2d2ddbaad1d74e77a30ae32"],["/img/Hexo/3.png","757eb844c8c675a096d2bf2423c65f1f"],["/img/Hexo/4.png","f65532360a9b9917b586497022005b29"],["/img/Hype_v/1.png","580b3ca879fa6b87ab25d10c9bd0e3ed"],["/img/Hype_v/10.png","a9331e8e646297d41465aab03ee17bc7"],["/img/Hype_v/11.png","1a392a0ed13b1b2877e0f5e0b858406e"],["/img/Hype_v/12.png","29c996d028406912746b03a26d21650d"],["/img/Hype_v/13.png","580b3ca879fa6b87ab25d10c9bd0e3ed"],["/img/Hype_v/14.png","adfa43baca36ba06d4762f7b860ce904"],["/img/Hype_v/15.png","e9fd424632c11cd678fd96d3edb2c360"],["/img/Hype_v/16.png","b0c1c5a7f70e89320fef7e470b090b87"],["/img/Hype_v/17.png","e9424ff4f2e84129afcd5411b7c45aa9"],["/img/Hype_v/18.png","323e9a55562bceab3cd3031aa89dc558"],["/img/Hype_v/19.png","d711fa0db4fa874e299043bb14b6da9b"],["/img/Hype_v/2.png","7f4e1402371b98d375000dad2a50c1fc"],["/img/Hype_v/20.png","ecabc81867d6c4b80982ce489b7a8c16"],["/img/Hype_v/21.png","960974b0bd2ecf9cc643636ef226ffc5"],["/img/Hype_v/22.png","0a1ebd2ef061175c75a33fa2c230c58e"],["/img/Hype_v/23.png","be50a5b31867873e62c9d91cdc8efed3"],["/img/Hype_v/24.png","6382366aba0bad66f723520d1e990b1f"],["/img/Hype_v/25.png","359dc6671049616457921ceccebc149f"],["/img/Hype_v/26.png","fa55435ec4c7bf698bde5832525ba479"],["/img/Hype_v/27.png","662f489c03e2675fa2e12bb6d27ff2ff"],["/img/Hype_v/28.png","ba079cdca695d8ea0a087b7d18748d6e"],["/img/Hype_v/29.png","2af73deb7d5ee4b6caf3c76a55a74d93"],["/img/Hype_v/3.png","92d6a0a4ae3bf04eb9864958b4c36e97"],["/img/Hype_v/30.png","6bc0ea9ef84d1230055963587dd41690"],["/img/Hype_v/31.png","caa9b2d6df2901525a4451b733310c99"],["/img/Hype_v/32.png","3cf9bb6b7c6126132e028f0c0ac1d6e9"],["/img/Hype_v/33.png","e9817137d23e0d0ff091be376a71fa26"],["/img/Hype_v/34.png","dc4d3f2e6c52e6ae77cbddb3591d639a"],["/img/Hype_v/35.png","048ecc315e3c8cd4af27496dc3c0bc8d"],["/img/Hype_v/36.png","62e2533d7f0a8019ee8bae321a9fe569"],["/img/Hype_v/37.png","e567ba9a7ef7285cab978ad12025eff7"],["/img/Hype_v/38.png","f9f20df4569cca687130eb5821d827d3"],["/img/Hype_v/4.png","7a996253aba7a2f77d1bd6866c0ce677"],["/img/Hype_v/5.png","580b3ca879fa6b87ab25d10c9bd0e3ed"],["/img/Hype_v/6.png","b9af1bbabca4998a01cea982965945e6"],["/img/Hype_v/7.png","6d2477e2a639bb1e4160f937719c5b3d"],["/img/Hype_v/8.png","82b3bba3332784ea7f4edf332f509e2c"],["/img/Hype_v/9.png","ec797f743aa3efd0846883173be2f1f6"],["/img/Linux/1.png","43c118cc93a905cf0c6a9845df0c0d32"],["/img/Linux/10.png","a38e51042da42fa9d20c1d2e067fa9e5"],["/img/Linux/11.png","e55ff6cdaa4aed479a457112f75a08e2"],["/img/Linux/12.png","bd53a70c1c3dad5c185f47d2162dea0a"],["/img/Linux/13.png","27c65f4718886610f989605a066afed6"],["/img/Linux/14.png","a56ef671e526a4b0d2400b9d47f68491"],["/img/Linux/15.png","a9b0dfd8be21e154e32912a6464a3bf2"],["/img/Linux/16.png","cd9d7bb71e42431803b8ae4432a9100b"],["/img/Linux/17.png","f9f20df4569cca687130eb5821d827d3"],["/img/Linux/18.png","b5c437e2306274893e42f13ae30251b2"],["/img/Linux/2.png","b73d0415286602a2a4369ba5d7db65ef"],["/img/Linux/3.png","21a88dbf9955ab2823f64f22a98660d4"],["/img/Linux/4.png","1e45458eddfb6a66b3df0a5dc3016158"],["/img/Linux/5.png","a60838562da2747eef6238d5ce46b760"],["/img/Linux/6.png","6ea13280e6dc805fafab4135943c4210"],["/img/Linux/7.png","908fa1c927f3905eff21a20ec9cdcd2f"],["/img/Linux/8.png","2755b03f9af64971dc911e59c8c1ee9c"],["/img/Linux/9.png","e791b4c92c9fa81284deee55e3158bee"],["/img/MYSY2/1.png","35e38a5e8cef442ea6e2287877f464a0"],["/img/MYSY2/10.png","141b72334dfe7962cdb8359e69ef7abf"],["/img/MYSY2/11.png","fca45078e01e00ddae2540d5b1a8d6a9"],["/img/MYSY2/12.png","a6c6a380d374aebbeed108ae2e30fab6"],["/img/MYSY2/13.png","f90169d65103b04c8aa456ae683d7cdb"],["/img/MYSY2/14.png","1ad8a4e5e17cc39dffc3c004283ca9a5"],["/img/MYSY2/15.png","6104e6d2714a623ddea7d90b4ec878c4"],["/img/MYSY2/16.png","1ad8a4e5e17cc39dffc3c004283ca9a5"],["/img/MYSY2/17.png","f9f20df4569cca687130eb5821d827d3"],["/img/MYSY2/18.png","b5c437e2306274893e42f13ae30251b2"],["/img/MYSY2/2.png","e751d1bfde31e27b28ec846c5ee95790"],["/img/MYSY2/3.png","8e408690c801df8947291c745d7be2a4"],["/img/MYSY2/4.png","e61108c4e95d039dff2def543772ae62"],["/img/MYSY2/5.png","35e38a5e8cef442ea6e2287877f464a0"],["/img/MYSY2/6.png","554157c367e2fd23c45946a427c050dc"],["/img/MYSY2/7.png","eecf90ba14b04d01719e0b7776ffa752"],["/img/MYSY2/8.png","b765725ecba0d3ae2099e242e6860804"],["/img/MYSY2/9.png","54d619c3b88e1cd83d0f3ab3d78a4f51"],["/img/QQBot/1.png","22329673cd781b57bb3de8a15c584bbf"],["/img/QQBot/10.png","eccfb2cc7c67e529be40d7ef9ec53f73"],["/img/QQBot/11.png","c6fd61208062342de708708038845dce"],["/img/QQBot/12.png","70b7ebdf4dabf1d116e4eb5af1eba619"],["/img/QQBot/13.jpg","693960708a6d196c80b1ed105f036746"],["/img/QQBot/2.png","5c0d3edf4a53d5921eb99bbc64759a24"],["/img/QQBot/3.png","14a4d03f103b6e943b8fc3c2706646eb"],["/img/QQBot/4.png","b1360f0e34579065166ebc5f6d635af5"],["/img/QQBot/5.png","822ee1dcc1ae2e2bfb75cd0a57ee16f1"],["/img/QQBot/6.png","b29b7d487b9e345f96fdbebe9f75016f"],["/img/QQBot/7.png","32b1d6d32638ca9664cd69c0dde2688f"],["/img/QQBot/8.png","fe5ea53c52f2fb89b894354990bcd340"],["/img/QQBot/9.png","7952b8b9ae1109fbe8f8dcdcb70d08a0"],["/img/Qsgin/1.png","b87851d9beef5b2b03124078d4653189"],["/img/Qsgin/2.png","9635edfff6a2e2301db839abcd131c5b"],["/img/Qsgin/3.png","36b8b27956fee7e58b9edc2354fa7286"],["/img/SPS/1.png","8d46de8b2b78e0353d066d62e5396530"],["/img/SPS/22.png","520552d55f678c1c357b78f5d72ca8dc"],["/img/Shizuku/1.png","8c5f2a8ea87e636afd0274ecc8c668ab"],["/img/Shizuku/10.png","5154ab9ec94fcf6c99d183ae2dfc411c"],["/img/Shizuku/2.png","69a9f1e1f37f1d08994bf51beb35d362"],["/img/Shizuku/3.png","c9f2746daab8eedc800e87322d3e1cb4"],["/img/Shizuku/4.png","c9f2746daab8eedc800e87322d3e1cb4"],["/img/Shizuku/5.png","9e78c58f6e97683f28daaa29b040f6e8"],["/img/Shizuku/6.png","0242442351827e14e9243cdd02a145a6"],["/img/Shizuku/7.png","a970885609839a87bc148258c38219fd"],["/img/Shizuku/8.png","0d91413b39a2f740698fe6bc1f17f8a6"],["/img/Shizuku/9.png","8c5f2a8ea87e636afd0274ecc8c668ab"],["/img/Termux/1.png","bff7d338f7606bbfa6d200a5e57fe4dc"],["/img/Termux/2.png","bff7d338f7606bbfa6d200a5e57fe4dc"],["/img/Termux/3.png","4945eff1fc436fbe8bcbbbbf8ef6c6f9"],["/img/Termux/4.png","c8e191f9dbd85d66e8e738b4cfedea2c"],["/img/Termux/5.png","97382f1fa7449b2add1de43dc8a1d346"],["/img/Termux/6.png","532a1e3317e85de4b5d322c6c9b38cec"],["/img/Termux/7.png","94248599fc6f736b126a8dee1d71240b"],["/img/Termux/8.png","4ab682db1c569ecbf16ef911da51d256"],["/img/Termux/9.png","0f39c81b23f904107515d51da1d74987"],["/img/WSL/1.png","3225843d24bf15e7a82932ef96382715"],["/img/WSL/10.png","434ce91d000db2758e6c6dcc6e284d7d"],["/img/WSL/11.png","dd028c03d44a92e6400da506053b65bf"],["/img/WSL/12.png","1cb0346c73b83a776c2d5232ecb9158a"],["/img/WSL/13.png","1e707bfd0eccade50dbf4d4dadd377d9"],["/img/WSL/14.png","e183852744f4918cc5c5b631dc9634d4"],["/img/WSL/15.png","f16855180b47409b9aa4e062de0e0e1f"],["/img/WSL/16.png","a36c71a41e788fcda6ed6d6a95818391"],["/img/WSL/17.png","f464bc4d9d18f61d234e556c968b8683"],["/img/WSL/18.png","6d2f9bd36572b57767b769dbe22e3267"],["/img/WSL/19.png","fa3861dc7f40f1aca7fe7d4ef13415c6"],["/img/WSL/2.png","ae744d0981c1477e20a8f3bbc7260c1b"],["/img/WSL/20.png","2ce6a25659c8b4007c05ff253647bafb"],["/img/WSL/21.png","71f930aac1d2db7df516d307c9057273"],["/img/WSL/22.png","a0e3894e20d7c7614ce54923d0800862"],["/img/WSL/23.png","f4b1cc4712fa89014cb10d52263bdc2f"],["/img/WSL/24.png","fffb45350eff59d588e67bc046b53c89"],["/img/WSL/25.png","3225843d24bf15e7a82932ef96382715"],["/img/WSL/26.png","78adb7ce1d46503e2842a6852619d224"],["/img/WSL/27.png","cd655080a0b3c14762c290593d0d228e"],["/img/WSL/28.png","aad3cd2acb8b080cf5d2349b3d2a8348"],["/img/WSL/29.png","f9f20df4569cca687130eb5821d827d3"],["/img/WSL/3.png","e1c0555d05dbba86e0a6c64b12c2480d"],["/img/WSL/30.png","b5c437e2306274893e42f13ae30251b2"],["/img/WSL/4.png","aa911e2aa92f15544dc6549341b25084"],["/img/WSL/5.png","b1539452ecd00c85a010d324c0ce5339"],["/img/WSL/6.png","35ffd46c76a1cb747ca2e9e73041a7eb"],["/img/WSL/7.png","35ffd46c76a1cb747ca2e9e73041a7eb"],["/img/WSL/8.png","e15f7bcdcdab132387b641fa46424ba6"],["/img/WSL/9.png","3acbd7127a7a9431fa30670235e8cd7e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0d8e2d43b16f0e6fdc0d01859961439f"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/sweetalert.js","b97aa462f0f914593d471a7da27fddc3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","e8e59fb65932d2aa88adb0c9a32640cf"],["/live2d-widget/README.html","ec3ce6299bfaf5467b14553b15dbd0c9"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","9214bc5446cd3a8a40ba118a23b1c3b9"],["/live2d-widget/demo/demo.html","f73fa87ae4dacb036e860209956f2d79"],["/live2d-widget/demo/login.html","490036430748c9cbbbeee7848067da28"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/rollup.config.js","171b7912f3e5340c9fc61251ef193bd1"],["/live2d-widget/src/index.js","85aef69a57f70ca34b1da98da0a854c8"],["/live2d-widget/src/message.js","5f980402bfc065345253e6ce024dc1de"],["/live2d-widget/src/model.js","b5562a236eeda01308e5a4107e6ec80f"],["/live2d-widget/src/tools.js","fda693610457903a19c3861298fb416a"],["/live2d-widget/src/utils.js","2578501ad87a8d99ceec05d79fe2c64b"],["/live2d-widget/src/waifu-tips.js","e49236cc73dbcfda841588bba50dbfd3"],["/live2d-widget/waifu-tips.js","7ef813587dba0e4bc55c7ccafcaea531"],["/live2d-widget/waifu.css","6c95aef3daffa5cdb0b4429ec2f6076d"],["/music/index.html","1b45afbe13a5786dcc6797a50cc6846c"],["/page/2/index.html","b65124faa4ceba60ff924d06c508ecb9"],["/page/3/index.html","5c51f8efce30e88783d5078d8d619577"],["/posts/2891e33e/index.html","ddd1ebf17b407c6dcac3122f1adc5e7e"],["/posts/3e101a1c/index.html","2ee64000558ca8dff5e00729dd4c09a1"],["/posts/48ced98/index.html","a306aa14e09d518f74c4789db4539744"],["/posts/4d0f8001/index.html","e76c8a52bd57c7a066cd899a619cf972"],["/posts/53427649/index.html","62f3d36c417979347e768ae247d977d9"],["/posts/70f38985/index.html","b5136d6444b4814150a21a40b5b7dcae"],["/posts/744e4646/index.html","3a0ea6e063548b029c70d2b8bbf240a1"],["/posts/7949d787/index.html","528f02c845ec3b2a3db570d6757731f3"],["/posts/83ff2157/index.html","9ccf43cf9e94d1bb517191e97a72c345"],["/posts/9e1e9509/index.html","0cf0f3b3d6a35bfe5ae42a88d737aa77"],["/posts/a806c713/index.html","10d55bcdf0ae085b0686eac76afa7a8f"],["/posts/a8ef42b/index.html","37cd000ae5c12016ae8728b8b28a5529"],["/posts/beeac218/index.html","208fdc05608f0d4b641b62094b2517c4"],["/posts/e66f6c3/index.html","873069c9941b9df56fcc78ff3352ab49"],["/posts/f1673a6/index.html","8bdef63eb6236e1d7babbc01f2e75ec6"],["/sw-register.js","f7bc419c2bfb23f1bdccc451dd217393"],["/tags/index.html","47d44c4aa293cdb7ab7a5362f24867f5"]];
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
