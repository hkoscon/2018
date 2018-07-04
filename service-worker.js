/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["0.312d7eb71942dd71e374.js","aabf7ef43c0d11dfdb8ef526759e5323"],["0.312d7eb71942dd71e374.js.map","9634e16abc8220d13097a9561bb52053"],["1.077bfcef83f4809dfec6.js","d397ca0ab154dfe2e69527a7198005c4"],["1.077bfcef83f4809dfec6.js.map","21adc47e4ed618fdc1eda2807f462807"],["10.88822a08851935ad37b9.js","73d26c89e43e4a00068402f727edc7af"],["10.88822a08851935ad37b9.js.map","1aacafcc9eea1a7bffda4be65443d4ef"],["2.9cabb3f75c68112290f9.js","fac03e383ba502e9e3f9ace43b350d0a"],["2.9cabb3f75c68112290f9.js.map","39d5b0720eb5ce28c0fc6123c05c7998"],["6.cd9001b3ce772d98bd78.js","9a7793a8707de4af829d0a0282f0319e"],["6.cd9001b3ce772d98bd78.js.map","818606f6bbc028cee6d1bd7989470fe4"],["7.a3e1f8de3be40a46c37d.js","c9affa332ba291497fe110c3e0519641"],["7.a3e1f8de3be40a46c37d.js.map","791a3391ab93e80ce125655dc376262b"],["8.21a69057bf91b7d08d09.js","474c19daa5595b07a226192cdf6fb433"],["8.21a69057bf91b7d08d09.js.map","735a6a63d09fc59e3b3ea2db0a2027d7"],["9.d87480ca50eae272542a.js","22b8a526a51eb78bdb26f60d705c5a4d"],["9.d87480ca50eae272542a.js.map","efda73ed8a5b6c290d06d1daf4bfb102"],["about-coc.html","3a5c4527ad116fbb0681b694b68602b1"],["about-committee.html","5d48058eb809a46983905de6d677c1dc"],["app.103b1fcb39ca5ecc8c001dab5ec03d11.css","0cc21399375123e3266bcf1ec7f3c9c0"],["app.c969e3c4ab871deb928d.js","28cfdbbdda78cf0911f74570a295f5e5"],["app.c969e3c4ab871deb928d.js.map","887610b267c14cfe933fd94980136cfe"],["assets.json","48a2a7499750b77db94c15d0c308eaa0"],["cfc.html","d338120fdbecda1d2641721c229113db"],["cfp.html","45350c66c9d0f1ddd6d490d8899cf63b"],["cookie.html","8820b91f551754a98c538bf37ac68329"],["data/cfp.yml","b65395f8bc8ec35b6c50481d9b14eb54"],["data/community.yml","97a422185106c43f1c36fac6f5a715e9"],["data/general.json","66fd28deec66654f07da25b2d4432509"],["data/site.yml","57a5d07879d37c810fd7fc7bc507da52"],["data/timetable-schema.yml","bb7808550ef501ed7f4f09d113e9d0d5"],["data/timetable.json","953608d93dba91a87ea8a6fd1e1fc83b"],["images/banner.jpg","9768d02a027b70840243d53a3f708a50"],["images/cover.jpg","3f1ffa6f7cf5ec7dbd79bd6164f28467"],["images/favicon.png","4634634056d4299d4f1a856d4e52e500"],["images/keyvisual.jpg","85a9cf8ed7185b1eb3109fb0180f86ca"],["images/slides.png","6f8bfd0615b90219315fb8b566bb3e44"],["images/theme-day1.jpg","e1645b5f0388e69308bb8fa1d4875156"],["images/theme-day2.jpg","4ce1064fcd8843b6363844ec866e417b"],["index.html","725a64df97e35da171f3e64eeabcda5b"],["manifest.1387554a34e333f6202b.js","f017bf00155545e38448b58c8a8d7d03"],["manifest.1387554a34e333f6202b.js.map","8ec9e66b43c5e13310ea8f7ad9e53235"],["manifest.json","bab2f310e98acf8fe10106f573b72bc7"],["sponsors/index.html","01ee45487f4db7c9e90e26d64e81d8a7"],["timetable.59818752738b42ad001a.js","bbdb2a2a681bb3aebadac84d3b5e9997"],["timetable.59818752738b42ad001a.js.map","23323c34e08ce5ad27d20eac60bfce99"],["timetable/index.html","b9a72523c1b2787c93b87692676bee26"],["topic/0-1-hk01-internet-transformation-open-source/index.html","8028b885bb10d3612309d2ded8bd0136"],["topic/blockchain-and-distributed-ledger-technology-documents/index.html","9205641aaf0d61e1fae4518343694e2c"],["topic/blockchain-creative-contents-what-we-do-likecoin/index.html","dd4b76d6dcc2b7abf9de1253c737b327"],["topic/blockchain-discussion-panel/index.html","96233d8f813f9a452eed246384db8bcf"],["topic/blockchain-scalability-solutions-how-build-decentralized-exchanges/index.html","339c7bbc0b67c42eca96761c50418725"],["topic/boring-ai-business/index.html","e0727dcd4da2e43baf1e4afe5d9e51c2"],["topic/browsers-behind-scenes/index.html","15ec36e0acf7e2e18246f589bbbae819"],["topic/containerized-high-availability-virtual-hosting-deployment-kubernetes-docker-and-ansible/index.html","c2171d238056213fa53754275f7ab5dd"],["topic/crossing-relation-and-document-database-using-mysql/index.html","6477679b77a5099e1ca0108d6492d73c"],["topic/dapp-new-approach-combine-blockchain-and-cryptography-web-application/index.html","0e1cacaf15cc653affa161edbcae6930"],["topic/data-pipeline-apache-kafka/index.html","c24d594a07de3ca1439d661f20f7c918"],["topic/deploy-serverless-chat-bot-quick-skygear/index.html","8cdbf700fb3a4a073a30bae384b74681"],["topic/disruption-system-how-open-data-changing-genomic-research/index.html","27945fcb71752656462b37bd9ebd447a"],["topic/fn-project-how-serverless-empowers-developers-adopt-different-programming-languages/index.html","de5b704978b4e898f188f25240f74458"],["topic/git-time-travellers/index.html","762bc842c07a1633989c458ab41e6643"],["topic/haxe-better-javascript-practical-guide-making-front-end-development-fun-fast-and-less/index.html","99dcf517773d820dcf9a1734f41c8293"],["topic/heading-new-stage-mysql-80/index.html","46d3301e9f371a8f299d6b9cd22974fc"],["topic/how-openresty-guarantees-code-quality-open-source-projects/index.html","e20a05612ced031677a0dee7666e27fc"],["topic/lets-fix-internet/index.html","5292841202f2f3e1a12d8af0dd5d1c08"],["topic/lightning-talk/index.html","95616bbc15d5d5f967690c0841439e33"],["topic/maintaining-open-source-while-maintaining-your-sanity/index.html","130c136079dacb45e3c4595d1e3f4796"],["topic/managing-domain-names-your-open-source-projects-gandi/index.html","4a8cf14e5685646719bfd69e60ffc3c4"],["topic/memory-forensics-101/index.html","304cffc8a55f0cb5f7efbce1a42dd4ee"],["topic/mixed-reality-web/index.html","8d5d0cfab69043c2c15607fa68fa868c"],["topic/mysql-fault-tolerant-best-practice-lesson-learned-cases-i-experienced/index.html","a6ee06b7e675857977f666db949e6c9d"],["topic/mysql-group-replicationzaijinrongchangjingdeyingyongshijian/index.html","087c263ecb9317534a4b649612c6cae9"],["topic/open-source-agriculture/index.html","932e5afee454f3795d7111743854fc4d"],["topic/practical-javascript-fuzzing/index.html","36c758de822f0b68490871661df86a8f"],["topic/qilaizaofangeguangdonghuazi/index.html","58b1a20c88f45359964e6b7e251d2d44"],["topic/r-short-talks-2/index.html","97334b7ee661167e6039f43f37f8d9d9"],["topic/r-short-talks/index.html","f6b316abe647950054b489e6e718f7d5"],["topic/raspberry-pi-r3-scalable-high-availability-mysql-innodb-cluster-and-apache-kafkar-distributed/index.html","5738d2d06b7713ba929107d21325c92b"],["topic/react-async-rendering-paradigm-shift-after-react-fiber/index.html","cd3e0426c075086af26c68eee5831235"],["topic/refactoring-gibbon/index.html","856f4a78a2f63b4302870b7c6065c61c"],["topic/run-multiple-isolated-web-applications-containers-single-ip-cloud/index.html","56de4c4683988f00802e2d01cefd9915"],["topic/scaling-tbs-data-apache-spark-and-scala-dsl-production/index.html","68f4a54820833f27f76cd07fdf9edb9a"],["topic/type-safe-rest-api-haxe/index.html","6127b21475b0d50bd5c957eb1275c37a"],["topic/unconference-anime-scene-search-image/index.html","3528f112f353dabe672660b08cf10c6d"],["topic/unconference-open-source-aiml-tools-technology-product-developers/index.html","eb0426730bc036ef4af26d45a028dd0b"],["topic/unconference/index.html","9587094359c10bc066f0d358a381a161"],["topic/using-web-software-architecture-traditional-desktop-app-development-how-fluxredux-was-ported/index.html","69c7c2d92146d1a86672d1be16c2176d"],["topic/videojs-hls/index.html","b1f232f51afb6846d1de48d4be766898"],["topic/why-your-domain-name-matters/index.html","8b54af0321137294a1b2614960b67d08"],["vendor.b8e4240eb4360f3bb2d0.js","ecba23abed03e4294239d65b63c6725b"],["vendor.b8e4240eb4360f3bb2d0.js.map","b889f5254dc4a02bf404b60665252a34"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







