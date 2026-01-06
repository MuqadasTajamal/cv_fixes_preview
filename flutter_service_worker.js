'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
".git/config": "19acbb8b01a9fa8d0aedd0b247de3b3a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9e634f2f7b14a1ea2ba75b324a7d06da",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7fbdb141b4ad3c9ef20572ac55a6bf46",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4bbd4124ca20113a1d07967506bbfbf8",
".git/logs/refs/heads/master": "4bbd4124ca20113a1d07967506bbfbf8",
".git/logs/refs/remotes/origin/HEAD": "04c079ffbb063ae31bbb8097d727465d",
".git/logs/refs/remotes/origin/master": "55ac1c0afa6954b3df7c7366db85e618",
".git/objects/00/085948ecaf5b63c9310f067e188a3fac0bf7a0": "916fb89bce699ffda8a27f24162f91d5",
".git/objects/01/45c43b529e58e843961f0300f7239caaca1638": "3147b83b1dd07a7123e0c072a9dc68e6",
".git/objects/07/3dde43729d5d0ae14fd98d26808d9f8d9b8b0d": "187c5b1e421a67a934df05d9ed809171",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/b3dc3f1835975cb29b4fc76ca9e6fa08756480": "e53f258361e33d1a897f9b8faaee81cf",
".git/objects/0b/f98e0fded66819e67a57106f6b4213de2fd70d": "fcef4e161fc14c4b283c594a728c4567",
".git/objects/0e/12e452af4b226a8417044d1dd9ee68c0e429d5": "323fa1651e16b7256f4d9d17ecf3d145",
".git/objects/13/c7b7449fa4a896cee9f130f0ab9ed4d3cbdfe2": "01a9605d81f0e62c688a1ddc781325ca",
".git/objects/14/cf34afe44b6f22a13bcd323c23665a6bd9bb39": "566f94e17e19f722c9fd48fef997262e",
".git/objects/15/1e9e9207ca82ab69281bb5e9f0ed035bd3a2a2": "64df428f2069273587c1c94d3f6a9aa2",
".git/objects/15/b2c54fe666aff153b0416f23633be44604ad5b": "71647320b5bced5af8d289e03e872bf9",
".git/objects/16/e7b781f3ecd1518d8f5e6f366c7c5b0cb03729": "b586289ddb17eb0ab3af10fa5c0e3838",
".git/objects/1d/371ef3bc0a11833962c7839bca376c4cdcdb8d": "a1e1b0424c3c7aae601dd59c767ea89c",
".git/objects/1e/5ddbb3948c45e1da8dd61c7af1db67b50e4815": "3fd6e4f6b99aa46429241a1ff9279fd7",
".git/objects/21/13f58d175cfaff1116678b3dddc2724ee6727c": "43a6d1507f9c7bb4332721138aec580d",
".git/objects/25/0592747bc9ce331777e5ff326340f80ffa42aa": "a315ebc952c2013fa92f9192134410c5",
".git/objects/36/5535556a0cb0e4977055f5d29b8c33aaf09646": "b8f7a7e22cf9d026d0cfe5af59224cd4",
".git/objects/39/577425e87fc688ad64a4a1c41ca7a7a31c0967": "0371b960562114e4bfef653c01506ea6",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/b9c30ca30403dd12b7a8bddc76099f7b1cfddc": "3880ba1ab02fe1798611b9f2e253f402",
".git/objects/48/8e6d27cd79b83aa2f2c95833db623dcfddfd71": "006597ffad9e70a22a94a9eb50cd839f",
".git/objects/4f/40dabe4430b4d7288c6ae92d8fc3e17cf8e410": "7c1843130f2c3787540ded5445c7793a",
".git/objects/51/03b98ea040925b8cf419bf4eeb36f4026bc857": "d49fdd001d0701ab215f44e450a71cd2",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/deb719b4f41488c5e4b7579786ad9bda957add": "ba91da58774a65c16878b76e2f65bf56",
".git/objects/53/2047d36ebab39cca7b43153f853cbb9b8950cd": "74eabe641e5b67580453d64c8ed62e45",
".git/objects/53/96b9c74b168429555cd41784b933f58463e2da": "4a8cce76d82745c892350a2e024a46f5",
".git/objects/54/79cbf835a8e874666e04731df9beeeb50a59e2": "1280a1377320628734158410ab948aa1",
".git/objects/5a/037d715ff5a8d3f9a0921ca018313aa390f715": "fbac9d2a19660593acb417e011d873e7",
".git/objects/5f/21579328b9aa54f1998e9773cce67d244da65f": "c757332ea70c8b281e806463acf9cab1",
".git/objects/63/cc532f2ffb0cd9fbddcbd9fe62b6f7603dc430": "300e2a97af62956fa112f4fb662a3b35",
".git/objects/65/0ae1dcbde6bd052a5a2126b608afac5e59661f": "994a102e4be798d46bb787a7ea8b63cd",
".git/objects/65/b38a753b03e9ce2d25302b5271fe09eda5e6df": "23ee0b3fd878fa5ff5b2ad23d3707cb7",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/ed2f35814176a14db777dff86d17d3caa0ad66": "8796c7371d495a09081a5ee1cb0358b5",
".git/objects/69/c1e5d0f610e02659f34c32a220b80cf46be45c": "0d15f94007bfbe30063e05390fbea818",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/2460c64070bb610400bbf2ff30956480c19eed": "30be8a71d4c750e40e487070f8fbc8f5",
".git/objects/77/e07c4981c1b18844f497581e55a049b8c1318b": "e3ed773e369f10420b656e2df45796f8",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/82/039646eae58381941a128edf3dd254c98a2961": "ba71a4099c57c699fe2ac9b609735b8e",
".git/objects/82/f439e1f87bad20c48c8beae58ea125a462105a": "e849c42d17653a340ac76602592acee6",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/335b9a44c302eace7b6b27862d3f35946d24b7": "8b253f430d156877f6cedc1375cd0ef8",
".git/objects/8e/b38be35c1a1daa80b7ee7517f7b76404474b71": "e93bcd79fa24fec0f78d9eb4a27c4659",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/30d84d564033577d4e985b703e5df42e1884ca": "1298e80928d09609b301daac6bb7f676",
".git/objects/95/f8fd9c516aedcbb9534b0146f3a0c75448f8c1": "e4060b97653d7f80455658161ec6038b",
".git/objects/98/77f39ced2af353fea92fb707ee1d27e1d51db8": "d2a7b28b5b19d7aff91c224d59bfe12c",
".git/objects/99/efe7b9a90c7ee9520e57ac67647ed97fd5805b": "767dbc9f78e27ffdf5c3b1d398a03d74",
".git/objects/9a/7f87d0cdcc3f52f31cd2aea40b9bfbadb293fa": "99d8da1942c70106b64a87c7bae04e15",
".git/objects/9d/c203bc2ad647b89e99e768069232aca231919c": "5c114e8b2b90fadad98d443740a54793",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b4/c3cdf977cdf666b1f02cfa1c5e0ecd3323ff59": "128247d820f97d1b38d751ecbdc1bdd1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/a55f616c811c4ee31535667dd2ed30229e5e71": "87e8270b4443b55645967860cb2b8253",
".git/objects/be/22cc62cbf48472d1db86d8e472a355b608246c": "a87bf09aee6633568c702499ba9a58a9",
".git/objects/c0/b949c41005dd31b7a27f37e4ff22db2cba9aab": "e8458978247607e105220e3661221d63",
".git/objects/c1/196228de6f7553850e9179eb126e6541257baa": "d232b1eacb2ce53eb91c7d5d14f66b52",
".git/objects/c6/bd90e9c14a5ab797a20b94ffc4f50ab7bdc379": "d77019adf3b7b66758c7e0d483fc62b9",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/fb16e772ef2a54056cb7c5461b1742ddfbea93": "5a197080216ed12cced0bb6d7a6f6131",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dc/61369e8512f26a752cb451c979e4c4eb3a34f7": "f25d3c6d5ba5eb301ec56431487f8a32",
".git/objects/dd/bd6400cff7c84c494ca86a0f14e5584376e0df": "7cb9d4d642c9ef53d65640a4c5086bf3",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/832ec0fffc20b8b383be5ffedaf47d0fa1e0c8": "98d7817678193c269864d97eadfc0bcf",
".git/objects/eb/8d05e11aad12c55461a359bfc2c3d924fd8480": "021529eaaa9218e82e3c9626baf972fe",
".git/objects/eb/966e0a5cd87eb2622fa574305fd8a5ad0be844": "53878ec6af8784dcc72db6ead4b28353",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/1ebd50e5c9ea9ebd9522aa6cf3b5c2bf9010fd": "a6779920876bc91a0576a19190d99a6a",
".git/objects/fa/92774aa7e7689956efaebef18091261749f529": "18c372a66a6de25e25e4ae8b3a92c660",
".git/objects/fc/04cc976b4044d42f6cdfc1435ef5f4d4d0c450": "5d8fe7694471163c3afccf4fc80ec010",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/a76d76834ed3c5d0fbcc90123be9a7b3aa9b9b": "1a6852ad80d4af60fb3f0c0c9bf7579b",
".git/refs/heads/master": "64b653ac1d582c91c0709ad124afd46f",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "64b653ac1d582c91c0709ad124afd46f",
"assets/AssetManifest.bin": "468beddbe951ea26abbb206742527a68",
"assets/AssetManifest.bin.json": "5d7725176525f69047e4af93f7b785e0",
"assets/assets/images/templates/cv1.png": "8fe5019b7874816ddd8858712fc59ef1",
"assets/assets/images/templates/cv10.png": "0e533d6cc46d598e59ce6334740370f4",
"assets/assets/images/templates/cv11.png": "07675422a90c7d8d4903bfc149815766",
"assets/assets/images/templates/cv12.png": "2514bcd12c99436b3f34cae66962b3c4",
"assets/assets/images/templates/cv13.png": "bae6694c72b47b9d8c32cb9a28fa43b4",
"assets/assets/images/templates/cv14.png": "2c685b28aaffa3211b68d469a7ac835c",
"assets/assets/images/templates/cv15.png": "dce7f1c466791653e050ad6406fad6ee",
"assets/assets/images/templates/cv16.png": "a178c6f3131013e5caad1ea83437db31",
"assets/assets/images/templates/cv17.png": "f7686fab79714f788eedcf92e39a52c3",
"assets/assets/images/templates/cv18.png": "5ffffdc4fb863754fa4db7c7fdb5fa19",
"assets/assets/images/templates/cv19.png": "e5d421ebf39d7fd4d817a8c1c3fe24cb",
"assets/assets/images/templates/cv2.png": "bd845dc26ec800a3e8128fac570ac048",
"assets/assets/images/templates/cv20.png": "7e7cc3958c674e57808c1473b858bc67",
"assets/assets/images/templates/cv3.png": "c85ad5d6fa19eaa62aa07b7be34b4a19",
"assets/assets/images/templates/cv4.png": "d14067e664330a76c08fa2d57affaf10",
"assets/assets/images/templates/cv5.png": "9ec870c730947f78b97950c9bb2a840b",
"assets/assets/images/templates/cv6.png": "2393e2cd78c5a7c01a7cc7abc6b5c4a4",
"assets/assets/images/templates/cv7.png": "9103d24de2d5589b65f9a997441c9593",
"assets/assets/images/templates/cv8.png": "c0dbb1fdca5bbdd22681bbd24be31184",
"assets/assets/images/templates/cv9.png": "fc238d8bc79da5508d40ed162bd142b4",
"assets/FontManifest.json": "c4e76a1dc7e6f99e32cf18d6418e0566",
"assets/fonts/MaterialIcons-Regular.otf": "357d2212fb84a3b9084bb2a9518a1760",
"assets/fonts/noto.ttf": "b72e420edb95cdf06e6e0a27bc0d964d",
"assets/fonts/roboto.ttf": "3aa911d4a1e76c8946952fe744ce7434",
"assets/fonts/sora1.ttf": "8569cb014b6e06cfd0e5b26805e96ca0",
"assets/fonts/sora2.ttf": "457ec8aa0c5f1e074d19e55183f245fe",
"assets/fonts/sorat.ttf": "4d6461db63e84ae9df86ca7e37248cd1",
"assets/NOTICES": "b20ece2d7d4d1a6985e61c2f8dd8945b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "9995071a7dd11109953ace3d4a775cfc",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "d36178a9401cae05cddcd5373f3b46cc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "82a413bf38f41189ce7ac85641c33704",
"/": "82a413bf38f41189ce7ac85641c33704",
"main.dart.js": "cf7603a7ef694e47d26627c1523ae88b",
"manifest.json": "5de43572e2003bb52e17931b79610223",
"version.json": "4fce62dd7cb3b76b2bf054899294c6b1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
