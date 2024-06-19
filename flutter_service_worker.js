'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "544c3a5df512a224b16ad475cd51effa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e5356e9bab8cc7b85166ea2d70b6a67f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0f79873f3e62727d11f605ab54305234",
".git/logs/refs/heads/main": "57fc9382cd859e731b00dcb2fd08fc2e",
".git/logs/refs/remotes/origin/main": "e686332033752ad296e88ca6bb34283f",
".git/objects/01/2e273e21daa9b4f19dc5b9f7ba61ca781969d6": "998063f3c4eb601474b25e13e8aecab4",
".git/objects/06/6d8f9206fd64a33277dfb728f5899c0cc40f52": "711b6e3c0729838fd13d7adcd0529fd6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/14/e26c64c985e0c70bccbb879555f3c2008900b9": "5f75a0cd6b7f4db343e4a5d3d25e2688",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1a/78bcce72a727ea309e31ec6aeac7f8b1004e11": "ea2f205c58f65ad3c64a1e5a6a4917fc",
".git/objects/1c/d165aae7aa1f67e5e76d0be10e9198dc1659b3": "9db51f0e076551de1031d43d901cd3c1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/721122b66918042f3b1698a02525ee53cac234": "dc4df2b6b92d89384448ad8d50ca24d6",
".git/objects/20/0cc5f733e92a1bff89638573737a502a53cf58": "9150a71e34ef466f65587c76e02d38eb",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/6c06f83efca0201a45314d849cb33a41acba5d": "e9081ed02033553f70310a18c610a8d6",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/5cdfce7ac426dbd32f6437bed0293017ac6149": "129668a3a125a40dab317681543cc913",
".git/objects/2b/ae8d6bc672b9f55f57c0a202d6cef0777fa9de": "9e608ec505f86d1d74da50b7620fc93f",
".git/objects/31/0238e9b368c4a0cc0ca7d55310766bcc6a967f": "598b3147f2b0459a5d7c640be4f54ac7",
".git/objects/42/82b032237e9125c95f8d0b011fa8c8f397f273": "944eb9238674585409a9c723fe9c14cd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/224a203081817a9f67fbe13cc322bd759d482f": "aee461fb47d20303e2a9e86b0727d850",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/54/490bde4d5069cfea353abc6de264e96046600c": "f03f8988fe641ec6bcdf57dad0bc6f3c",
".git/objects/58/431697cf0ffd4995f7ec3da4576fd59a83cea1": "8580d992a7b7b9fc3ef699d1d35b0f38",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5b/546c3695e5a13fc74fc5d5eb09cedb44690d95": "c135af75d750aa16ffc7605d2f9b194d",
".git/objects/6b/18a6bd92966f8e1067f2b6fb7c0f726c8a6c28": "8a6849727ec7e432568381fbac4cf7fd",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/78/f3910792ee62d9934df9ce0d2b3ce7243f6f5d": "9f09d696a75399e41e0e19792993208d",
".git/objects/79/da03424a3ced10391cf626fa44af2ff5bbaf1f": "2af2609a7be30c4c5000f8f0a002bfcc",
".git/objects/7d/3553130ac40e967d40ddb7c35c54ed0d924d36": "ac7eeae193487a4bebfb28f04e8ffe7c",
".git/objects/80/5c1a1ecf705b0d5255cbf83fb6ae900bb26a41": "a19774dfc9f7810dd237be347912892e",
".git/objects/82/9af9117b06e62d1c00a4710b701aaae0f2da92": "adfca40a9adea0f91929d6c1f1797223",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/0f5c249331d3d8c8bdeef69ec325124b9b9565": "9c65f7697908214cd147951b4e674647",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e606290897250dfe8ae92cd75733ba4562302f": "9701fbf4ce43f3e6ff45994dccc7a9f6",
".git/objects/90/011c4a6aa01e1c43835a3f8a3a3595c4d61a5e": "152bfaa41156db2b7efeb77645ba9fbb",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9d/8e009e35581c65895982337c93c1ab1c38e44c": "91cbb6e3c71d22cb079413848b54da4f",
".git/objects/9e/55cf0cc4ece363c8a0d7f36442d79bf471cd5a": "7292cdfed3d30df76a9459316fd2c956",
".git/objects/9f/09c7cf832efb31e6c91532e7f392ed42aca6ff": "fcd25889a3707578adcf342552e09329",
".git/objects/a2/db8ae42c996de25c1c620a179047dc2b390f79": "d246e52aefd249e69254eceda176a9b0",
".git/objects/a5/3144a9b7f823f572df97ac3d9af9ce899260bd": "cc71e1678fc74d869c7eb8eb6895f6cf",
".git/objects/a8/a20a9ab7ad50f780f2f8cb6803eafbc1987e1d": "41871b9db4607332b0b17a8618ef035f",
".git/objects/a9/fa9da8b1258b861db1382bc26b21fb7740480d": "631868615d476e813971045f0fc1defc",
".git/objects/aa/727f891a9cd976d5dc7f58facf5391a92b1764": "4d176e8a89b454f1815d105f6f647360",
".git/objects/ab/f2eef2e74d5d15374d09c20bbf0aeae115d5e4": "c7be745e62a0ce22da34a7825efdb323",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/6c78c903b7383106688b2f05fd12246bb890cf": "3816440ef50e6878506b3f7211275023",
".git/objects/b7/2bd90c341670cef4dd3cd20d19f6671832a940": "db7cf470741081a7b8fac757f5db7fb1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/6c24b21b51cc4ba7bb74a8c1f91f5231abf15d": "69a5667ac48d998fbd386c8d238b5aff",
".git/objects/bb/955f9fa9c8c64c03b4aa9867a9e986223f490a": "51547ca171121e21501f3e7007e9be44",
".git/objects/bc/cbf9b3ac4206d9cf12306bac257b8fd2f5b35f": "9655212c2148c9f229b5205f0180ccd4",
".git/objects/c1/16f6dba6635547bf0108ff89ef6f0d1233bf55": "719d9f4499f2fb624ad9a4c6f1ea3543",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c8/54818ac9b264f4ab985295ca496c4bee005fce": "634a533e1e594cdafbb9e8c8e0fb3035",
".git/objects/cc/5f7ae041b7afde0e5143406a520d1a00eac06b": "87c1ad5a78504f21035019b9f8cb2060",
".git/objects/ce/e94f368cd89504107eaf3dd5c6f858dd32e2ea": "58cef3ce14808eb4cf15b9ef9db2da28",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/0a5d51f2b84b6264e49f10cede81161f04b433": "7fe33aa3348b489f8b9e0c8a4a26c907",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/979c8a951cd6062a504b3e618f0b1a6eb4ee78": "12e3c89323c1a516e9d408264cfc3f27",
".git/objects/e1/124c902b37b59484f1394fe6d62e93d28603f9": "7b237d604f3096f28208f4fb635e06e0",
".git/objects/e4/7bf0c9c4002350d583cad69f2a690afb322d2d": "2ad7ac7389e9376df29b5f928568aa2a",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/5630f70263757d4efe30494b555bde967b2fad": "f7757a273e83f1f902cf984d4f580b5c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/bf2cce3166d13514a38a34c750e245412f1c73": "804c6e38b9e4743c7244cbc810aa22eb",
".git/objects/f1/7812853575657aa7f32601e2f277bd7159c15d": "47ed3af63ef200753b85ff6f29381127",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/58f54820db329728fde4eaf991a04dd1ae14ee": "2b1f931d7954f4be9b3009e51174f6c8",
".git/objects/fb/044cfdb8c7640e01e9cec4da6bfe680a360164": "282cc8d91d1fd7c61280028020a180f2",
".git/objects/fc/2c0830b46e4ff93382cdc45db95070b8ed169b": "77bca3d9a9396609a5ea161152d0ce78",
".git/refs/heads/main": "d75e6ff4448fa82a3a3cfe9fb15736ce",
".git/refs/remotes/origin/main": "d75e6ff4448fa82a3a3cfe9fb15736ce",
"assets/asset/ad1.png": "29fb76b0e28894d26b3e815f4197b4d8",
"assets/asset/ad2.png": "636253e86a723483fe6ce38018306dd4",
"assets/asset/ad3.png": "6cebc9e93bbcced9797e1b01d0288ef3",
"assets/asset/ad4.jpg": "0324d2f0422946e29db456e16ad083f8",
"assets/asset/ad5.jpg": "d3b11451a5527a71635f52ec0834fa79",
"assets/asset/bg5.json": "c167c9d2fae87bb79e698a9eb398bcef",
"assets/asset/cakey1.png": "6578495999de3d09c264cdaf3aaa00a9",
"assets/asset/cakey2.png": "d4f817c17350f4f90faed454557e5381",
"assets/asset/cakey3.png": "672958f189ad5ed646bd6ee69e0e6a3b",
"assets/asset/calculator1.jpg": "ff50f5835460c4b98e5ad09b1938335c",
"assets/asset/calculator2.jpg": "bff3fccc6f25bcd0069d8945ac2b39c2",
"assets/asset/calculator3.jpg": "eee4ddf794017cdd6e15d6975a9dd058",
"assets/asset/clientregister.jpg": "cce4532111b08326394d167000e759e4",
"assets/asset/flutter.json": "0e6337e7fbc4ce8fefa9b077bd4c2fa2",
"assets/asset/fortunesplashscreen.jpg": "695d72b21f3f3a13d52c109a013e2b45",
"assets/asset/fp1.png": "5498e9f2631920552b8bc98f3731647b",
"assets/asset/fp2.png": "02230163f88d9e5416ff43616bda7266",
"assets/asset/fp3.png": "980b279d9d396ba352a4dfb5aa0387c8",
"assets/asset/github_logo.json": "79b88b248a70055c5af808e04d82baba",
"assets/asset/hc%25201.png": "cc349501fd35bb25ddb0f9d5089f1e9c",
"assets/asset/hc11.png": "9cb740fb128660600d9a9e06394a785e",
"assets/asset/hc2.png": "5b8e032f89ac4d6f9fc4fdc98452d5e2",
"assets/asset/home-Nokia.png": "c354bc95a409358c5aaa8c05c969e923",
"assets/asset/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/asset/login-Nokia.png": "562193993927275a0e36197c542a0c22",
"assets/asset/Ragavi.jpg": "fba6a1b9aeed00fed2ff1caff738d773",
"assets/asset/record-Nokia.png": "f46b112c058809ace660e0be62380757",
"assets/asset/sample.png": "ef9778dac62f6bdf35c7abb52394416d",
"assets/asset/save-Nokia.png": "d05d15e90b3c1cfcd2aacd57d2677366",
"assets/asset/swift_logo.json": "bb4885e1a63d02dd1b6105785438b9a8",
"assets/asset/v1.jpg": "d3e68e280d40cfa43a4f75e8c739a2b7",
"assets/asset/v2.png": "ff0910e73919c3b6dc4e5bd7e124d418",
"assets/asset/v3.png": "f74b3d3f6d3480a3248177faa4b9660c",
"assets/asset/vc1.png": "e83087f7149176ade17a499c7b449b24",
"assets/asset/vc2.png": "e7391a4d47be4e1879c92b052fb8c8eb",
"assets/asset/vc3.png": "7d8b082839b53122c62aad101ba7e89e",
"assets/asset/visitreport.jpg": "aec007294b7813de3f001e71d9851dde",
"assets/AssetManifest.bin": "44e6d9884ed5493e66698a45aa8b8ce2",
"assets/AssetManifest.bin.json": "cb43562e95781e9535a0f7119c04daa7",
"assets/AssetManifest.json": "5acb71c87ab40e93a20bba5efeb9d712",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1c9779343367d7d290e6f38cd11b65c7",
"assets/NOTICES": "ee36a98419cc6d59347a96aad4b71d67",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c9729c100774827bb481fe1adf4f074",
"/": "8c9729c100774827bb481fe1adf4f074",
"main.dart.js": "407937ac86550c4851e6ebefbcf6d069",
"manifest.json": "051baedd0db1a0b918e80267cd4b9593",
"version.json": "ef0bd82511e44c5c1327d5319955c104"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
