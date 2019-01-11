// キャッシュファイルの指定
var CACHE_NAME = 'pwa-sample-caches_0001';
var urlsToCache = [
    "https://nobkovskii.github.io/pwa-sample/",
    "https://nobkovskii.github.io/pwa-sample/index.html"
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});
