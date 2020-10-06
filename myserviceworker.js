const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
    "/",
    "/index.html",
    "/css/styles.css",
    "/js/scripts.js",
    "/assets/img/bg-masthead.jpg",
    "/assets/img/portfolio/fullsize/1.jpg",
    "/assets/img/portfolio/fullsize/2.jpg",
    "/assets/img/portfolio/fullsize/3.jpg",
    "/assets/img/portfolio/fullsize/4.jpg",
    "/assets/img/portfolio/fullsize/5.jpg",
    "/assets/img/portfolio/fullsize/6.jpg",
    "/assets/img/portfolio/thumbnails/1.jpg",
    "/assets/img/portfolio/thumbnails/2.jpg",
    "/assets/img/portfolio/thumbnails/3.jpg",
    "/assets/img/portfolio/thumbnails/4.jpg",
    "/assets/img/portfolio/thumbnails/5.jpg",
    "/assets/img/portfolio/thumbnails/6.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})