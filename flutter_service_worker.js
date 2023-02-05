'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "659024529b1008358686f8e4a133a5be",
"assets/assets/fonts/static/SofiaSans-Black.ttf": "6235b5454cf81fb13c74a5d1237ec0de",
"assets/assets/fonts/static/SofiaSans-BlackItalic.ttf": "6aaef5c1c05ccaf1c51553c3eb1fa7ec",
"assets/assets/fonts/static/SofiaSans-Bold.ttf": "7c87f5c1017ae88e09acee278e7a7a1a",
"assets/assets/fonts/static/SofiaSans-BoldItalic.ttf": "d29c1db0a0191c7a6ffd1a17146886e2",
"assets/assets/fonts/static/SofiaSans-ExtraBold.ttf": "d705db864b98f0a71f47f7d7c4980c7b",
"assets/assets/fonts/static/SofiaSans-ExtraBoldItalic.ttf": "13f0595aa2d8bc049d3f2517a1ffb716",
"assets/assets/fonts/static/SofiaSans-ExtraLight.ttf": "50c0f1cf0b78bcc7b9bb18213722e2e3",
"assets/assets/fonts/static/SofiaSans-ExtraLightItalic.ttf": "f4e090ce984a92c11e4d34892ff3e65b",
"assets/assets/fonts/static/SofiaSans-Italic.ttf": "60bfedcaa394edea899e88ade315a011",
"assets/assets/fonts/static/SofiaSans-Light.ttf": "4a2975e2e23137e5c860f1f796bf54e2",
"assets/assets/fonts/static/SofiaSans-LightItalic.ttf": "7e8e4c8e80b2fae7bb2d62964176ac59",
"assets/assets/fonts/static/SofiaSans-Medium.ttf": "ec2ad34c28d1101d9485277668f067bd",
"assets/assets/fonts/static/SofiaSans-MediumItalic.ttf": "dedbef6139f5f35a69cf6084944a6038",
"assets/assets/fonts/static/SofiaSans-Regular.ttf": "7cb8b2127317d4f7a8ea953a3d3b91da",
"assets/assets/fonts/static/SofiaSans-SemiBold.ttf": "00a48edff1f01ff6d8dfe7049d315ed0",
"assets/assets/fonts/static/SofiaSans-SemiBoldItalic.ttf": "493617c905a74388e15a0e7737b56bc0",
"assets/assets/fonts/static/SofiaSans-Thin.ttf": "3df4a030ff1921686a065deb4f135970",
"assets/assets/fonts/static/SofiaSans-ThinItalic.ttf": "bd06fac8dd2fdda5b0972521f173b487",
"assets/assets/images/mypic.jpg": "a886a9d228500ee657e06fe49195361d",
"assets/assets/images/pic1.jpg": "84e8d13683e5f5ed2127e650f9335838",
"assets/assets/images/pic2.jpg": "e8a09d1efed2d461ef58d35954a241d2",
"assets/assets/images/pic3.jpg": "20de9300a28e4411d772bff49d35964d",
"assets/assets/images/pic3.webp": "ca6aa9b1be242a6006fbdba0a8e022df",
"assets/assets/images/pic4.jpg": "2360dac301b884d6bc8340a107e49afa",
"assets/assets/images/rive-robot-island.png": "ced8aec23c4c884a8518b466cc0997f8",
"assets/assets/images/rive_book_close.png": "6778f8be0747e9a4b0ccaf722521aab9",
"assets/assets/images/rive_book_open.png": "17dffa01857448100c94273b9d744b43",
"assets/assets/rive/avacat.riv": "ba6b2e6ceb65501d93d17a7a632ac2d2",
"assets/assets/rive/doc_icon.riv": "1d9a2782cce242d5d805c51ffebb5b24",
"assets/assets/rive/eyeball.riv": "160d07d8907cdb60243543d9fbd03138",
"assets/assets/rive/spring_robot.riv": "d95adfefa25df25c34f6d9f5cb4ee9e0",
"assets/FontManifest.json": "c3cfeadecf65a4b52b8fe15cf2dba75d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/loading.gif": "b0532e49ace572d9c156b8c33c861d7c",
"assets/NOTICES": "753e668a21c19cade3e6481d39cd764a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b194cf6b2ef9840ecc881850de492d2e",
"/": "b194cf6b2ef9840ecc881850de492d2e",
"main.dart.js": "392b5aab974468695a44b6924913c409",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
