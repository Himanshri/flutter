'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7bab705723c6b14275600afadeb775c1",
"assets/assets/angular.svg": "48ae79d99d69739a8022593da1ece32f",
"assets/assets/api_based_wallpaper.jpeg": "e9571e22cdf6b4f1ef4849b1968b6517",
"assets/assets/api_service_integration.jpeg": "0b2437e625f9ce4fa4caa80d5276bb4a",
"assets/assets/backend_wallpaper.jpeg": "91a281ab927c40e76b94554a44ec07df",
"assets/assets/client1.png": "d5ad884c930be252f47ae886ed628d07",
"assets/assets/data_integration_wallpaper.jpeg": "b9cc418ec066ba7122b6032b8adf03e5",
"assets/assets/digital_marketing.png": "e8591d3ad0c312a435016350c7f43dbc",
"assets/assets/dynamic_website.png": "42a2e911a6aa722bb4cadc96e02dc8f0",
"assets/assets/enterpreneurs_grow.png": "36dd76ff238530953116f490beb85e6e",
"assets/assets/facebook.png": "1ad38366de95ab12f814501ca337ec5f",
"assets/assets/flutter_logo.svg": "bd9fec894dfe707631e11a1dfedb25b5",
"assets/assets/hiring.png": "26c224490ecae5f940b784f94ddafa96",
"assets/assets/hiring2.webp": "c6a89dee05910889858eabf76e318da3",
"assets/assets/insta_update.png": "75414b6b446b26a66f0bcf51c0977146",
"assets/assets/instagram.png": "ff86eb598ca653dbf7f55325f6aadb09",
"assets/assets/laravel.svg": "2fa5a6b6d7ce810d2b67ebf6df87fcc8",
"assets/assets/linkedin.png": "7ef7ebe928079f36f128f8907d2158e8",
"assets/assets/main.jpeg": "d5b48ea8338a2bb15484b70f8ecc6beb",
"assets/assets/mobile_app_dev.png": "0746b1842429987644c8c5aac13cc3b8",
"assets/assets/node_js.svg": "a22a42410e2ce5842380688bac43bd03",
"assets/assets/phone1_final.png": "2e59fc0d3bb74e52512a6454f611974c",
"assets/assets/pinterest.png": "e24adf5f076587160befd45ac4c141bf",
"assets/assets/python.svg": "146716bdf1a351db5705ec1e6a25ed08",
"assets/assets/react_js.svg": "c3fbd71b12b726e00eec2b59f3c76786",
"assets/assets/ring_circle.gif": "f16947ca6a616349ed63771804d16250",
"assets/assets/seo_aso.png": "611d7817b64f5f5dd66fbdb00c2267f5",
"assets/assets/twitter.png": "4599d7ca598ebeacb4f360e843f462cf",
"assets/assets/ui_ux.png": "21cb513ba91abce6ba52b35b838118c5",
"assets/assets/unity.svg": "c01d163888a85eb30bf7f2076a71d8f5",
"assets/assets/unity_3d.png": "e16b5757cc68073a606e42d161ddb4d1",
"assets/assets/vue_js.svg": "69cedcf3d2b148bdce953a480caa57b1",
"assets/assets/web_samp_logo.png": "ec36ee6d28dbd14623ce9e6f1ace5080",
"assets/assets/web_services_wallpaper.jpeg": "27ab178c105ff7e249bc10fd570fa635",
"assets/assets/website_sales.png": "a5e698fd1c71e346f0df7e13d2d3e4f9",
"assets/assets/whatsapp.png": "d82c7dd134cdbb9303b2d447003895cb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7dcaa5a6b17cebc589dbf89f176c32a3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "25e8f9d15597acec2cc2bba23cac4b87",
"/": "25e8f9d15597acec2cc2bba23cac4b87",
"main.dart.js": "a6df8e0cd86938e3ba5e325870ddb4cf",
"manifest.json": "89c588ba9d6d6cea23f089f3d0805655",
"version.json": "5e76180b385d24b9dbaef2190e2eeb75"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
