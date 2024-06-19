'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
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
"index.html": "c734afd4d9c7931dbbcbb994fefe53da",
"/": "c734afd4d9c7931dbbcbb994fefe53da",
"main.dart.js": "8320353cbd5f57ebc60f550b945ded07",
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
