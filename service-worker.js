/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "165c9605ecf030a0c5d86b2f456d58ef"
  },
  {
    "url": "about/index.html",
    "revision": "c19928ac469cbfe3ce3b3f48b67a47af"
  },
  {
    "url": "about/test.html",
    "revision": "9f8a817ab509d3c31156829d928fa738"
  },
  {
    "url": "assets/css/0.styles.90043e48.css",
    "revision": "d421b52c2c34cc1f358f2fd3af63e5d4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9231cf08.js",
    "revision": "3dd5f7cffc2ad795fc025d572da486e0"
  },
  {
    "url": "assets/js/11.8c3dc728.js",
    "revision": "b2c5ad51056b794e649e2dfdb389f11e"
  },
  {
    "url": "assets/js/12.721f7cc1.js",
    "revision": "17c1b7764120419a049b7dbaea7dd252"
  },
  {
    "url": "assets/js/13.a882bbca.js",
    "revision": "3d6cdf3e002ef48455b846c6c0443b54"
  },
  {
    "url": "assets/js/14.d376f303.js",
    "revision": "f588aa640f64204f7ff27a897121a727"
  },
  {
    "url": "assets/js/15.eaeb01bd.js",
    "revision": "daa61ae809edf908b9392925a266860e"
  },
  {
    "url": "assets/js/16.21cc3f19.js",
    "revision": "5bd71a84b972a66fc1866bebdc6310a5"
  },
  {
    "url": "assets/js/17.8f37fd8d.js",
    "revision": "21bbd536b5fd9d69ba0e2a085404bb9a"
  },
  {
    "url": "assets/js/2.97d76908.js",
    "revision": "e5044004142403d83c929fde8778c54d"
  },
  {
    "url": "assets/js/3.a7ab1de5.js",
    "revision": "bc51c1cb757466af42f1ab44d70a4c2c"
  },
  {
    "url": "assets/js/4.a112a8eb.js",
    "revision": "9efec6de89ef0f34eac3dbefa7619df6"
  },
  {
    "url": "assets/js/5.57c12565.js",
    "revision": "b674ff2cb21647a9319f157eee21d789"
  },
  {
    "url": "assets/js/6.aa731ceb.js",
    "revision": "0a68b40b10c79332830610658f1ca9c0"
  },
  {
    "url": "assets/js/7.0cf79c9f.js",
    "revision": "ae34f59b347128f03d83e1f6340faac1"
  },
  {
    "url": "assets/js/8.3f5239f5.js",
    "revision": "59533aa9d4bb030eb3450ee51adec3f0"
  },
  {
    "url": "assets/js/9.5208bd36.js",
    "revision": "ba735b9972afaedbade164ea2897f98f"
  },
  {
    "url": "assets/js/app.ebbcbf2e.js",
    "revision": "6d5dde1aeb5806d950baba222eac5a81"
  },
  {
    "url": "css/css1.html",
    "revision": "67ff585db54d184dd4948b94e2a537ac"
  },
  {
    "url": "css/css2.html",
    "revision": "69da707769e2ac0cbb8acbb7574e1d7e"
  },
  {
    "url": "css/index.html",
    "revision": "da9c69fdad6623474fb7427baa603c61"
  },
  {
    "url": "img/favicon.png",
    "revision": "7a2e376732b5ba431ed339b1fec7697e"
  },
  {
    "url": "img/logo.jpg",
    "revision": "9be27588f3dd4942c35efcc31a8f5c07"
  },
  {
    "url": "index.html",
    "revision": "285ffec0d4a4db3b8c9e95fd09da001d"
  },
  {
    "url": "javascript/index.html",
    "revision": "b120ae2145082288d4f87b9631cde3c7"
  },
  {
    "url": "javascript/javascript1.html",
    "revision": "59b7fbb5c8a24b5a0a30f61546bd656a"
  },
  {
    "url": "javascript/javascript2.html",
    "revision": "52b7aa7a7664eb6e464d10356bce898e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
