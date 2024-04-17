// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bb5oI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "945bb7f670f1794e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const helper = (()=>{
    const buildPost = (title, body, author, author_id)=>{
        return {
            title,
            body,
            author,
            author_id
        };
    };
    const buildUser = (name, username, password, passwordConfirm)=>{
        return {
            username,
            emailVisibility: false,
            password,
            passwordConfirm,
            name,
            isAdmin: false
        };
    };
    return {
        buildPost,
        buildUser
    };
})();
exports.default = helper;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cFxoJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pocketbase = require("pocketbase");
var _pocketbaseDefault = parcelHelpers.interopDefault(_pocketbase);
const url = "https://mpls.pockethost.io/";
const pb = new (0, _pocketbaseDefault.default)(url);
// A MODULE TO HANDLE CALLS TO POCKETBASE BACKEND
const backend = (()=>{
    async function getPosts() {
        try {
            const records = await pb.collection("posts").getFullList({
                sort: "-created"
            });
            return records;
        } catch (error) {
            console.log(error);
        }
    }
    async function pushPost(post) {
        if (!backend.getCurrentUser()) return false;
        try {
            await pb.collection("posts").create(post);
        } catch (error) {
            console.log(error);
        }
    }
    async function deletePost(id) {
        if (!backend.getCurrentUser()) return false;
        try {
            await pb.collection("posts").delete(id);
        } catch (error) {
            console.log(error);
        }
    }
    async function createUser(user) {
        try {
            // create user in backend
            const record = await pb.collection("users").create(user);
            return record;
        } catch (error) {
            // throw error
            return error.data;
        }
    }
    async function authUser(username, password) {
        // Attempt to log in user.
        // Return true if successful else return false
        try {
            const authData = await pb.collection("users").authWithPassword(username, password);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    function getCurrentUser() {
        // Check current user. Returns null if no user
        return pb.authStore.model;
    }
    function logoutUser() {
        return pb.authStore.clear();
    }
    return {
        getPosts,
        pushPost,
        deletePost,
        createUser,
        authUser,
        getCurrentUser,
        logoutUser
    };
})();
exports.default = backend;

},{"pocketbase":"9I1Bs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9I1Bs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AdminService", ()=>AdminService);
parcelHelpers.export(exports, "AsyncAuthStore", ()=>AsyncAuthStore);
parcelHelpers.export(exports, "BaseAuthStore", ()=>BaseAuthStore);
parcelHelpers.export(exports, "ClientResponseError", ()=>ClientResponseError);
parcelHelpers.export(exports, "CollectionService", ()=>CollectionService);
parcelHelpers.export(exports, "CrudService", ()=>CrudService);
parcelHelpers.export(exports, "LocalAuthStore", ()=>LocalAuthStore);
parcelHelpers.export(exports, "LogService", ()=>LogService);
parcelHelpers.export(exports, "RealtimeService", ()=>RealtimeService);
parcelHelpers.export(exports, "RecordService", ()=>RecordService);
parcelHelpers.export(exports, "cookieParse", ()=>cookieParse);
parcelHelpers.export(exports, "cookieSerialize", ()=>cookieSerialize);
parcelHelpers.export(exports, "default", ()=>Client);
parcelHelpers.export(exports, "getTokenPayload", ()=>getTokenPayload);
parcelHelpers.export(exports, "isTokenExpired", ()=>isTokenExpired);
parcelHelpers.export(exports, "normalizeUnknownQueryParams", ()=>normalizeUnknownQueryParams);
class ClientResponseError extends Error {
    constructor(e){
        super("ClientResponseError"), this.url = "", this.status = 0, this.response = {}, this.isAbort = !1, this.originalError = null, Object.setPrototypeOf(this, ClientResponseError.prototype), null !== e && "object" == typeof e && (this.url = "string" == typeof e.url ? e.url : "", this.status = "number" == typeof e.status ? e.status : 0, this.isAbort = !!e.isAbort, this.originalError = e.originalError, null !== e.response && "object" == typeof e.response ? this.response = e.response : null !== e.data && "object" == typeof e.data ? this.response = e.data : this.response = {}), this.originalError || e instanceof ClientResponseError || (this.originalError = e), "undefined" != typeof DOMException && e instanceof DOMException && (this.isAbort = !0), this.name = "ClientResponseError " + this.status, this.message = this.response?.message, this.message || (this.isAbort ? this.message = "The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation." : this.originalError?.cause?.message?.includes("ECONNREFUSED ::1") ? this.message = "Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21)." : this.message = "Something went wrong while processing your request.");
    }
    get data() {
        return this.response;
    }
    toJSON() {
        return {
            ...this
        };
    }
}
const e = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function cookieParse(e, t) {
    const s = {};
    if ("string" != typeof e) return s;
    const i = Object.assign({}, t || {}).decode || defaultDecode;
    let n = 0;
    for(; n < e.length;){
        const t = e.indexOf("=", n);
        if (-1 === t) break;
        let r = e.indexOf(";", n);
        if (-1 === r) r = e.length;
        else if (r < t) {
            n = e.lastIndexOf(";", t - 1) + 1;
            continue;
        }
        const o = e.slice(n, t).trim();
        if (void 0 === s[o]) {
            let n = e.slice(t + 1, r).trim();
            34 === n.charCodeAt(0) && (n = n.slice(1, -1));
            try {
                s[o] = i(n);
            } catch (e) {
                s[o] = n;
            }
        }
        n = r + 1;
    }
    return s;
}
function cookieSerialize(t, s, i) {
    const n = Object.assign({}, i || {}), r = n.encode || defaultEncode;
    if (!e.test(t)) throw new TypeError("argument name is invalid");
    const o = r(s);
    if (o && !e.test(o)) throw new TypeError("argument val is invalid");
    let a = t + "=" + o;
    if (null != n.maxAge) {
        const e = n.maxAge - 0;
        if (isNaN(e) || !isFinite(e)) throw new TypeError("option maxAge is invalid");
        a += "; Max-Age=" + Math.floor(e);
    }
    if (n.domain) {
        if (!e.test(n.domain)) throw new TypeError("option domain is invalid");
        a += "; Domain=" + n.domain;
    }
    if (n.path) {
        if (!e.test(n.path)) throw new TypeError("option path is invalid");
        a += "; Path=" + n.path;
    }
    if (n.expires) {
        if (!function isDate(e) {
            return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date;
        }(n.expires) || isNaN(n.expires.valueOf())) throw new TypeError("option expires is invalid");
        a += "; Expires=" + n.expires.toUTCString();
    }
    if (n.httpOnly && (a += "; HttpOnly"), n.secure && (a += "; Secure"), n.priority) switch("string" == typeof n.priority ? n.priority.toLowerCase() : n.priority){
        case "low":
            a += "; Priority=Low";
            break;
        case "medium":
            a += "; Priority=Medium";
            break;
        case "high":
            a += "; Priority=High";
            break;
        default:
            throw new TypeError("option priority is invalid");
    }
    if (n.sameSite) switch("string" == typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite){
        case !0:
            a += "; SameSite=Strict";
            break;
        case "lax":
            a += "; SameSite=Lax";
            break;
        case "strict":
            a += "; SameSite=Strict";
            break;
        case "none":
            a += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid");
    }
    return a;
}
function defaultDecode(e) {
    return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e;
}
function defaultEncode(e) {
    return encodeURIComponent(e);
}
let t;
function getTokenPayload(e) {
    if (e) try {
        const s = decodeURIComponent(t(e.split(".")[1]).split("").map(function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        return JSON.parse(s) || {};
    } catch (e) {}
    return {};
}
function isTokenExpired(e, t = 0) {
    let s = getTokenPayload(e);
    return !(Object.keys(s).length > 0 && (!s.exp || s.exp - t > Date.now() / 1e3));
}
t = "function" == typeof atob ? atob : (e)=>{
    let t = String(e).replace(/=+$/, "");
    if (t.length % 4 == 1) throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    for(var s, i, n = 0, r = 0, o = ""; i = t.charAt(r++); ~i && (s = n % 4 ? 64 * s + i : i, n++ % 4) && (o += String.fromCharCode(255 & s >> (-2 * n & 6))))i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(i);
    return o;
};
const s = "pb_auth";
class BaseAuthStore {
    constructor(){
        this.baseToken = "", this.baseModel = null, this._onChangeCallbacks = [];
    }
    get token() {
        return this.baseToken;
    }
    get model() {
        return this.baseModel;
    }
    get isValid() {
        return !isTokenExpired(this.token);
    }
    get isAdmin() {
        return "admin" === getTokenPayload(this.token).type;
    }
    get isAuthRecord() {
        return "authRecord" === getTokenPayload(this.token).type;
    }
    save(e, t) {
        this.baseToken = e || "", this.baseModel = t || null, this.triggerChange();
    }
    clear() {
        this.baseToken = "", this.baseModel = null, this.triggerChange();
    }
    loadFromCookie(e, t = s) {
        const i = cookieParse(e || "")[t] || "";
        let n = {};
        try {
            n = JSON.parse(i), ("object" != typeof n || Array.isArray(n)) && (n = {});
        } catch (e) {}
        this.save(n.token || "", n.model || null);
    }
    exportToCookie(e, t = s) {
        const i = {
            secure: !0,
            sameSite: !0,
            httpOnly: !0,
            path: "/"
        }, n = getTokenPayload(this.token);
        i.expires = n?.exp ? new Date(1e3 * n.exp) : new Date("1970-01-01"), e = Object.assign({}, i, e);
        const r = {
            token: this.token,
            model: this.model ? JSON.parse(JSON.stringify(this.model)) : null
        };
        let o = cookieSerialize(t, JSON.stringify(r), e);
        const a = "undefined" != typeof Blob ? new Blob([
            o
        ]).size : o.length;
        if (r.model && a > 4096) {
            r.model = {
                id: r?.model?.id,
                email: r?.model?.email
            };
            const s = [
                "collectionId",
                "username",
                "verified"
            ];
            for(const e in this.model)s.includes(e) && (r.model[e] = this.model[e]);
            o = cookieSerialize(t, JSON.stringify(r), e);
        }
        return o;
    }
    onChange(e, t = !1) {
        return this._onChangeCallbacks.push(e), t && e(this.token, this.model), ()=>{
            for(let t = this._onChangeCallbacks.length - 1; t >= 0; t--)if (this._onChangeCallbacks[t] == e) return delete this._onChangeCallbacks[t], void this._onChangeCallbacks.splice(t, 1);
        };
    }
    triggerChange() {
        for (const e of this._onChangeCallbacks)e && e(this.token, this.model);
    }
}
class LocalAuthStore extends BaseAuthStore {
    constructor(e = "pocketbase_auth"){
        super(), this.storageFallback = {}, this.storageKey = e, this._bindStorageEvent();
    }
    get token() {
        return (this._storageGet(this.storageKey) || {}).token || "";
    }
    get model() {
        return (this._storageGet(this.storageKey) || {}).model || null;
    }
    save(e, t) {
        this._storageSet(this.storageKey, {
            token: e,
            model: t
        }), super.save(e, t);
    }
    clear() {
        this._storageRemove(this.storageKey), super.clear();
    }
    _storageGet(e) {
        if ("undefined" != typeof window && window?.localStorage) {
            const t = window.localStorage.getItem(e) || "";
            try {
                return JSON.parse(t);
            } catch (e) {
                return t;
            }
        }
        return this.storageFallback[e];
    }
    _storageSet(e, t) {
        if ("undefined" != typeof window && window?.localStorage) {
            let s = t;
            "string" != typeof t && (s = JSON.stringify(t)), window.localStorage.setItem(e, s);
        } else this.storageFallback[e] = t;
    }
    _storageRemove(e) {
        "undefined" != typeof window && window?.localStorage && window.localStorage?.removeItem(e), delete this.storageFallback[e];
    }
    _bindStorageEvent() {
        "undefined" != typeof window && window?.localStorage && window.addEventListener && window.addEventListener("storage", (e)=>{
            if (e.key != this.storageKey) return;
            const t = this._storageGet(this.storageKey) || {};
            super.save(t.token || "", t.model || null);
        });
    }
}
class BaseService {
    constructor(e){
        this.client = e;
    }
}
class SettingsService extends BaseService {
    async getAll(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send("/api/settings", e);
    }
    async update(e, t) {
        return t = Object.assign({
            method: "PATCH",
            body: e
        }, t), this.client.send("/api/settings", t);
    }
    async testS3(e = "storage", t) {
        return t = Object.assign({
            method: "POST",
            body: {
                filesystem: e
            }
        }, t), this.client.send("/api/settings/test/s3", t).then(()=>!0);
    }
    async testEmail(e, t, s) {
        return s = Object.assign({
            method: "POST",
            body: {
                email: e,
                template: t
            }
        }, s), this.client.send("/api/settings/test/email", s).then(()=>!0);
    }
    async generateAppleClientSecret(e, t, s, i, n, r) {
        return r = Object.assign({
            method: "POST",
            body: {
                clientId: e,
                teamId: t,
                keyId: s,
                privateKey: i,
                duration: n
            }
        }, r), this.client.send("/api/settings/apple/generate-client-secret", r);
    }
}
class CrudService extends BaseService {
    decode(e) {
        return e;
    }
    async getFullList(e, t) {
        if ("number" == typeof e) return this._getFullList(e, t);
        let s = 500;
        return (t = Object.assign({}, e, t)).batch && (s = t.batch, delete t.batch), this._getFullList(s, t);
    }
    async getList(e = 1, t = 30, s) {
        return (s = Object.assign({
            method: "GET"
        }, s)).query = Object.assign({
            page: e,
            perPage: t
        }, s.query), this.client.send(this.baseCrudPath, s).then((e)=>(e.items = e.items?.map((e)=>this.decode(e)) || [], e));
    }
    async getFirstListItem(e, t) {
        return (t = Object.assign({
            requestKey: "one_by_filter_" + this.baseCrudPath + "_" + e
        }, t)).query = Object.assign({
            filter: e,
            skipTotal: 1
        }, t.query), this.getList(1, 1, t).then((e)=>{
            if (!e?.items?.length) throw new ClientResponseError({
                status: 404,
                response: {
                    code: 404,
                    message: "The requested resource wasn't found.",
                    data: {}
                }
            });
            return e.items[0];
        });
    }
    async getOne(e, t) {
        if (!e) throw new ClientResponseError({
            url: this.client.buildUrl(this.baseCrudPath + "/"),
            status: 404,
            response: {
                code: 404,
                message: "Missing required record id.",
                data: {}
            }
        });
        return t = Object.assign({
            method: "GET"
        }, t), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), t).then((e)=>this.decode(e));
    }
    async create(e, t) {
        return t = Object.assign({
            method: "POST",
            body: e
        }, t), this.client.send(this.baseCrudPath, t).then((e)=>this.decode(e));
    }
    async update(e, t, s) {
        return s = Object.assign({
            method: "PATCH",
            body: t
        }, s), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), s).then((e)=>this.decode(e));
    }
    async delete(e, t) {
        return t = Object.assign({
            method: "DELETE"
        }, t), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e), t).then(()=>!0);
    }
    _getFullList(e = 500, t) {
        (t = t || {}).query = Object.assign({
            skipTotal: 1
        }, t.query);
        let s = [], request = async (i)=>this.getList(i, e || 500, t).then((e)=>{
                const t = e.items;
                return s = s.concat(t), t.length == e.perPage ? request(i + 1) : s;
            });
        return request(1);
    }
}
function normalizeLegacyOptionsArgs(e, t, s, i) {
    const n = void 0 !== i;
    return n || void 0 !== s ? n ? (console.warn(e), t.body = Object.assign({}, t.body, s), t.query = Object.assign({}, t.query, i), t) : Object.assign(t, s) : t;
}
function resetAutoRefresh(e) {
    e._resetAutoRefresh?.();
}
class AdminService extends CrudService {
    get baseCrudPath() {
        return "/api/admins";
    }
    async update(e, t, s) {
        return super.update(e, t, s).then((e)=>(this.client.authStore.model?.id === e.id && void 0 === this.client.authStore.model?.collectionId && this.client.authStore.save(this.client.authStore.token, e), e));
    }
    async delete(e, t) {
        return super.delete(e, t).then((t)=>(t && this.client.authStore.model?.id === e && void 0 === this.client.authStore.model?.collectionId && this.client.authStore.clear(), t));
    }
    authResponse(e) {
        const t = this.decode(e?.admin || {});
        return e?.token && e?.admin && this.client.authStore.save(e.token, t), Object.assign({}, e, {
            token: e?.token || "",
            admin: t
        });
    }
    async authWithPassword(e, t, s, i) {
        let n = {
            method: "POST",
            body: {
                identity: e,
                password: t
            }
        };
        n = normalizeLegacyOptionsArgs("This form of authWithPassword(email, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(email, pass, options?).", n, s, i);
        const r = n.autoRefreshThreshold;
        delete n.autoRefreshThreshold, n.autoRefresh || resetAutoRefresh(this.client);
        let o = await this.client.send(this.baseCrudPath + "/auth-with-password", n);
        return o = this.authResponse(o), r && function registerAutoRefresh(e, t, s, i) {
            resetAutoRefresh(e);
            const n = e.beforeSend, r = e.authStore.model, o = e.authStore.onChange((t, s)=>{
                (!t || s?.id != r?.id || (s?.collectionId || r?.collectionId) && s?.collectionId != r?.collectionId) && resetAutoRefresh(e);
            });
            e._resetAutoRefresh = function() {
                o(), e.beforeSend = n, delete e._resetAutoRefresh;
            }, e.beforeSend = async (r, o)=>{
                const a = e.authStore.token;
                if (o.query?.autoRefresh) return n ? n(r, o) : {
                    url: r,
                    sendOptions: o
                };
                let c = e.authStore.isValid;
                if (c && isTokenExpired(e.authStore.token, t)) try {
                    await s();
                } catch (e) {
                    c = !1;
                }
                c || await i();
                const l = o.headers || {};
                for(let t in l)if ("authorization" == t.toLowerCase() && a == l[t] && e.authStore.token) {
                    l[t] = e.authStore.token;
                    break;
                }
                return o.headers = l, n ? n(r, o) : {
                    url: r,
                    sendOptions: o
                };
            };
        }(this.client, r, ()=>this.authRefresh({
                autoRefresh: !0
            }), ()=>this.authWithPassword(e, t, Object.assign({
                autoRefresh: !0
            }, n))), o;
    }
    async authRefresh(e, t) {
        let s = {
            method: "POST"
        };
        return s = normalizeLegacyOptionsArgs("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).", s, e, t), this.client.send(this.baseCrudPath + "/auth-refresh", s).then(this.authResponse.bind(this));
    }
    async requestPasswordReset(e, t, s) {
        let i = {
            method: "POST",
            body: {
                email: e
            }
        };
        return i = normalizeLegacyOptionsArgs("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).", i, t, s), this.client.send(this.baseCrudPath + "/request-password-reset", i).then(()=>!0);
    }
    async confirmPasswordReset(e, t, s, i, n) {
        let r = {
            method: "POST",
            body: {
                token: e,
                password: t,
                passwordConfirm: s
            }
        };
        return r = normalizeLegacyOptionsArgs("This form of confirmPasswordReset(resetToken, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(resetToken, password, passwordConfirm, options?).", r, i, n), this.client.send(this.baseCrudPath + "/confirm-password-reset", r).then(()=>!0);
    }
}
const i = [
    "requestKey",
    "$cancelKey",
    "$autoCancel",
    "fetch",
    "headers",
    "body",
    "query",
    "params",
    "cache",
    "credentials",
    "headers",
    "integrity",
    "keepalive",
    "method",
    "mode",
    "redirect",
    "referrer",
    "referrerPolicy",
    "signal",
    "window"
];
function normalizeUnknownQueryParams(e) {
    if (e) {
        e.query = e.query || {};
        for(let t in e)i.includes(t) || (e.query[t] = e[t], delete e[t]);
    }
}
class RealtimeService extends BaseService {
    constructor(){
        super(...arguments), this.clientId = "", this.eventSource = null, this.subscriptions = {}, this.lastSentSubscriptions = [], this.maxConnectTimeout = 15e3, this.reconnectAttempts = 0, this.maxReconnectAttempts = 1 / 0, this.predefinedReconnectIntervals = [
            200,
            300,
            500,
            1e3,
            1200,
            1500,
            2e3
        ], this.pendingConnects = [];
    }
    get isConnected() {
        return !!this.eventSource && !!this.clientId && !this.pendingConnects.length;
    }
    async subscribe(e, t, s) {
        if (!e) throw new Error("topic must be set.");
        let i = e;
        if (s) {
            normalizeUnknownQueryParams(s);
            const e = "options=" + encodeURIComponent(JSON.stringify({
                query: s.query,
                headers: s.headers
            }));
            i += (i.includes("?") ? "&" : "?") + e;
        }
        const listener = function(e) {
            const s = e;
            let i;
            try {
                i = JSON.parse(s?.data);
            } catch  {}
            t(i || {});
        };
        return this.subscriptions[i] || (this.subscriptions[i] = []), this.subscriptions[i].push(listener), this.isConnected ? 1 === this.subscriptions[i].length ? await this.submitSubscriptions() : this.eventSource?.addEventListener(i, listener) : await this.connect(), async ()=>this.unsubscribeByTopicAndListener(e, listener);
    }
    async unsubscribe(e) {
        let t = !1;
        if (e) {
            const s = this.getSubscriptionsByTopic(e);
            for(let e in s)if (this.hasSubscriptionListeners(e)) {
                for (let t of this.subscriptions[e])this.eventSource?.removeEventListener(e, t);
                delete this.subscriptions[e], t || (t = !0);
            }
        } else this.subscriptions = {};
        this.hasSubscriptionListeners() ? t && await this.submitSubscriptions() : this.disconnect();
    }
    async unsubscribeByPrefix(e) {
        let t = !1;
        for(let s in this.subscriptions)if ((s + "?").startsWith(e)) {
            t = !0;
            for (let e of this.subscriptions[s])this.eventSource?.removeEventListener(s, e);
            delete this.subscriptions[s];
        }
        t && (this.hasSubscriptionListeners() ? await this.submitSubscriptions() : this.disconnect());
    }
    async unsubscribeByTopicAndListener(e, t) {
        let s = !1;
        const i = this.getSubscriptionsByTopic(e);
        for(let e in i){
            if (!Array.isArray(this.subscriptions[e]) || !this.subscriptions[e].length) continue;
            let i = !1;
            for(let s = this.subscriptions[e].length - 1; s >= 0; s--)this.subscriptions[e][s] === t && (i = !0, delete this.subscriptions[e][s], this.subscriptions[e].splice(s, 1), this.eventSource?.removeEventListener(e, t));
            i && (this.subscriptions[e].length || delete this.subscriptions[e], s || this.hasSubscriptionListeners(e) || (s = !0));
        }
        this.hasSubscriptionListeners() ? s && await this.submitSubscriptions() : this.disconnect();
    }
    hasSubscriptionListeners(e) {
        if (this.subscriptions = this.subscriptions || {}, e) return !!this.subscriptions[e]?.length;
        for(let e in this.subscriptions)if (this.subscriptions[e]?.length) return !0;
        return !1;
    }
    async submitSubscriptions() {
        if (this.clientId) return this.addAllSubscriptionListeners(), this.lastSentSubscriptions = this.getNonEmptySubscriptionKeys(), this.client.send("/api/realtime", {
            method: "POST",
            body: {
                clientId: this.clientId,
                subscriptions: this.lastSentSubscriptions
            },
            requestKey: this.getSubscriptionsCancelKey()
        }).catch((e)=>{
            if (!e?.isAbort) throw e;
        });
    }
    getSubscriptionsCancelKey() {
        return "realtime_" + this.clientId;
    }
    getSubscriptionsByTopic(e) {
        const t = {};
        e = e.includes("?") ? e : e + "?";
        for(let s in this.subscriptions)(s + "?").startsWith(e) && (t[s] = this.subscriptions[s]);
        return t;
    }
    getNonEmptySubscriptionKeys() {
        const e = [];
        for(let t in this.subscriptions)this.subscriptions[t].length && e.push(t);
        return e;
    }
    addAllSubscriptionListeners() {
        if (this.eventSource) {
            this.removeAllSubscriptionListeners();
            for(let e in this.subscriptions)for (let t of this.subscriptions[e])this.eventSource.addEventListener(e, t);
        }
    }
    removeAllSubscriptionListeners() {
        if (this.eventSource) for(let e in this.subscriptions)for (let t of this.subscriptions[e])this.eventSource.removeEventListener(e, t);
    }
    async connect() {
        if (!(this.reconnectAttempts > 0)) return new Promise((e, t)=>{
            this.pendingConnects.push({
                resolve: e,
                reject: t
            }), this.pendingConnects.length > 1 || this.initConnect();
        });
    }
    initConnect() {
        this.disconnect(!0), clearTimeout(this.connectTimeoutId), this.connectTimeoutId = setTimeout(()=>{
            this.connectErrorHandler(new Error("EventSource connect took too long."));
        }, this.maxConnectTimeout), this.eventSource = new EventSource(this.client.buildUrl("/api/realtime")), this.eventSource.onerror = (e)=>{
            this.connectErrorHandler(new Error("Failed to establish realtime connection."));
        }, this.eventSource.addEventListener("PB_CONNECT", (e)=>{
            const t = e;
            this.clientId = t?.lastEventId, this.submitSubscriptions().then(async ()=>{
                let e = 3;
                for(; this.hasUnsentSubscriptions() && e > 0;)e--, await this.submitSubscriptions();
            }).then(()=>{
                for (let e of this.pendingConnects)e.resolve();
                this.pendingConnects = [], this.reconnectAttempts = 0, clearTimeout(this.reconnectTimeoutId), clearTimeout(this.connectTimeoutId);
                const t = this.getSubscriptionsByTopic("PB_CONNECT");
                for(let s in t)for (let i of t[s])i(e);
            }).catch((e)=>{
                this.clientId = "", this.connectErrorHandler(e);
            });
        });
    }
    hasUnsentSubscriptions() {
        const e = this.getNonEmptySubscriptionKeys();
        if (e.length != this.lastSentSubscriptions.length) return !0;
        for (const t of e)if (!this.lastSentSubscriptions.includes(t)) return !0;
        return !1;
    }
    connectErrorHandler(e) {
        if (clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), !this.clientId && !this.reconnectAttempts || this.reconnectAttempts > this.maxReconnectAttempts) {
            for (let t of this.pendingConnects)t.reject(new ClientResponseError(e));
            return this.pendingConnects = [], void this.disconnect();
        }
        this.disconnect(!0);
        const t = this.predefinedReconnectIntervals[this.reconnectAttempts] || this.predefinedReconnectIntervals[this.predefinedReconnectIntervals.length - 1];
        this.reconnectAttempts++, this.reconnectTimeoutId = setTimeout(()=>{
            this.initConnect();
        }, t);
    }
    disconnect(e = !1) {
        if (clearTimeout(this.connectTimeoutId), clearTimeout(this.reconnectTimeoutId), this.removeAllSubscriptionListeners(), this.client.cancelRequest(this.getSubscriptionsCancelKey()), this.eventSource?.close(), this.eventSource = null, this.clientId = "", !e) {
            this.reconnectAttempts = 0;
            for (let e of this.pendingConnects)e.resolve();
            this.pendingConnects = [];
        }
    }
}
class RecordService extends CrudService {
    constructor(e, t){
        super(e), this.collectionIdOrName = t;
    }
    get baseCrudPath() {
        return this.baseCollectionPath + "/records";
    }
    get baseCollectionPath() {
        return "/api/collections/" + encodeURIComponent(this.collectionIdOrName);
    }
    async subscribe(e, t, s) {
        if (!e) throw new Error("Missing topic.");
        if (!t) throw new Error("Missing subscription callback.");
        return this.client.realtime.subscribe(this.collectionIdOrName + "/" + e, t, s);
    }
    async unsubscribe(e) {
        return e ? this.client.realtime.unsubscribe(this.collectionIdOrName + "/" + e) : this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName);
    }
    async getFullList(e, t) {
        if ("number" == typeof e) return super.getFullList(e, t);
        const s = Object.assign({}, e, t);
        return super.getFullList(s);
    }
    async getList(e = 1, t = 30, s) {
        return super.getList(e, t, s);
    }
    async getFirstListItem(e, t) {
        return super.getFirstListItem(e, t);
    }
    async getOne(e, t) {
        return super.getOne(e, t);
    }
    async create(e, t) {
        return super.create(e, t);
    }
    async update(e, t, s) {
        return super.update(e, t, s).then((e)=>(this.client.authStore.model?.id !== e?.id || this.client.authStore.model?.collectionId !== this.collectionIdOrName && this.client.authStore.model?.collectionName !== this.collectionIdOrName || this.client.authStore.save(this.client.authStore.token, e), e));
    }
    async delete(e, t) {
        return super.delete(e, t).then((t)=>(!t || this.client.authStore.model?.id !== e || this.client.authStore.model?.collectionId !== this.collectionIdOrName && this.client.authStore.model?.collectionName !== this.collectionIdOrName || this.client.authStore.clear(), t));
    }
    authResponse(e) {
        const t = this.decode(e?.record || {});
        return this.client.authStore.save(e?.token, t), Object.assign({}, e, {
            token: e?.token || "",
            record: t
        });
    }
    async listAuthMethods(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send(this.baseCollectionPath + "/auth-methods", e).then((e)=>Object.assign({}, e, {
                usernamePassword: !!e?.usernamePassword,
                emailPassword: !!e?.emailPassword,
                authProviders: Array.isArray(e?.authProviders) ? e?.authProviders : []
            }));
    }
    async authWithPassword(e, t, s, i) {
        let n = {
            method: "POST",
            body: {
                identity: e,
                password: t
            }
        };
        return n = normalizeLegacyOptionsArgs("This form of authWithPassword(usernameOrEmail, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(usernameOrEmail, pass, options?).", n, s, i), this.client.send(this.baseCollectionPath + "/auth-with-password", n).then((e)=>this.authResponse(e));
    }
    async authWithOAuth2Code(e, t, s, i, n, r, o) {
        let a = {
            method: "POST",
            body: {
                provider: e,
                code: t,
                codeVerifier: s,
                redirectUrl: i,
                createData: n
            }
        };
        return a = normalizeLegacyOptionsArgs("This form of authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, options?).", a, r, o), this.client.send(this.baseCollectionPath + "/auth-with-oauth2", a).then((e)=>this.authResponse(e));
    }
    async authWithOAuth2(...e) {
        if (e.length > 1 || "string" == typeof e?.[0]) return console.warn("PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration."), this.authWithOAuth2Code(e?.[0] || "", e?.[1] || "", e?.[2] || "", e?.[3] || "", e?.[4] || {}, e?.[5] || {}, e?.[6] || {});
        const t = e?.[0] || {}, s = (await this.listAuthMethods()).authProviders.find((e)=>e.name === t.provider);
        if (!s) throw new ClientResponseError(new Error(`Missing or invalid provider "${t.provider}".`));
        const i = this.client.buildUrl("/api/oauth2-redirect"), n = new RealtimeService(this.client);
        let r = null;
        function cleanup() {
            r?.close(), n.unsubscribe();
        }
        return t.urlCallback || (r = openBrowserPopup(void 0)), new Promise(async (e, o)=>{
            try {
                await n.subscribe("@oauth2", async (r)=>{
                    const a = n.clientId;
                    try {
                        if (!r.state || a !== r.state) throw new Error("State parameters don't match.");
                        if (r.error || !r.code) throw new Error("OAuth2 redirect error or missing code: " + r.error);
                        const n = Object.assign({}, t);
                        delete n.provider, delete n.scopes, delete n.createData, delete n.urlCallback;
                        const o = await this.authWithOAuth2Code(s.name, r.code, s.codeVerifier, i, t.createData, n);
                        e(o);
                    } catch (e) {
                        o(new ClientResponseError(e));
                    }
                    cleanup();
                });
                const a = {
                    state: n.clientId
                };
                t.scopes?.length && (a.scope = t.scopes.join(" "));
                const c = this._replaceQueryParams(s.authUrl + i, a);
                let l = t.urlCallback || function(e) {
                    r ? r.location.href = e : r = openBrowserPopup(e);
                };
                await l(c);
            } catch (e) {
                cleanup(), o(new ClientResponseError(e));
            }
        });
    }
    async authRefresh(e, t) {
        let s = {
            method: "POST"
        };
        return s = normalizeLegacyOptionsArgs("This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).", s, e, t), this.client.send(this.baseCollectionPath + "/auth-refresh", s).then((e)=>this.authResponse(e));
    }
    async requestPasswordReset(e, t, s) {
        let i = {
            method: "POST",
            body: {
                email: e
            }
        };
        return i = normalizeLegacyOptionsArgs("This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).", i, t, s), this.client.send(this.baseCollectionPath + "/request-password-reset", i).then(()=>!0);
    }
    async confirmPasswordReset(e, t, s, i, n) {
        let r = {
            method: "POST",
            body: {
                token: e,
                password: t,
                passwordConfirm: s
            }
        };
        return r = normalizeLegacyOptionsArgs("This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).", r, i, n), this.client.send(this.baseCollectionPath + "/confirm-password-reset", r).then(()=>!0);
    }
    async requestVerification(e, t, s) {
        let i = {
            method: "POST",
            body: {
                email: e
            }
        };
        return i = normalizeLegacyOptionsArgs("This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).", i, t, s), this.client.send(this.baseCollectionPath + "/request-verification", i).then(()=>!0);
    }
    async confirmVerification(e, t, s) {
        let i = {
            method: "POST",
            body: {
                token: e
            }
        };
        return i = normalizeLegacyOptionsArgs("This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).", i, t, s), this.client.send(this.baseCollectionPath + "/confirm-verification", i).then(()=>{
            const t = getTokenPayload(e), s = this.client.authStore.model;
            return s && !s.verified && s.id === t.id && s.collectionId === t.collectionId && (s.verified = !0, this.client.authStore.save(this.client.authStore.token, s)), !0;
        });
    }
    async requestEmailChange(e, t, s) {
        let i = {
            method: "POST",
            body: {
                newEmail: e
            }
        };
        return i = normalizeLegacyOptionsArgs("This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).", i, t, s), this.client.send(this.baseCollectionPath + "/request-email-change", i).then(()=>!0);
    }
    async confirmEmailChange(e, t, s, i) {
        let n = {
            method: "POST",
            body: {
                token: e,
                password: t
            }
        };
        return n = normalizeLegacyOptionsArgs("This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).", n, s, i), this.client.send(this.baseCollectionPath + "/confirm-email-change", n).then(()=>{
            const t = getTokenPayload(e), s = this.client.authStore.model;
            return s && s.id === t.id && s.collectionId === t.collectionId && this.client.authStore.clear(), !0;
        });
    }
    async listExternalAuths(e, t) {
        return t = Object.assign({
            method: "GET"
        }, t), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e) + "/external-auths", t);
    }
    async unlinkExternalAuth(e, t, s) {
        return s = Object.assign({
            method: "DELETE"
        }, s), this.client.send(this.baseCrudPath + "/" + encodeURIComponent(e) + "/external-auths/" + encodeURIComponent(t), s).then(()=>!0);
    }
    _replaceQueryParams(e, t = {}) {
        let s = e, i = "";
        e.indexOf("?") >= 0 && (s = e.substring(0, e.indexOf("?")), i = e.substring(e.indexOf("?") + 1));
        const n = {}, r = i.split("&");
        for (const e of r){
            if ("" == e) continue;
            const t = e.split("=");
            n[decodeURIComponent(t[0].replace(/\+/g, " "))] = decodeURIComponent((t[1] || "").replace(/\+/g, " "));
        }
        for(let e in t)t.hasOwnProperty(e) && (null == t[e] ? delete n[e] : n[e] = t[e]);
        i = "";
        for(let e in n)n.hasOwnProperty(e) && ("" != i && (i += "&"), i += encodeURIComponent(e.replace(/%20/g, "+")) + "=" + encodeURIComponent(n[e].replace(/%20/g, "+")));
        return "" != i ? s + "?" + i : s;
    }
}
function openBrowserPopup(e) {
    if ("undefined" == typeof window || !window?.open) throw new ClientResponseError(new Error("Not in a browser context - please pass a custom urlCallback function."));
    let t = 1024, s = 768, i = window.innerWidth, n = window.innerHeight;
    t = t > i ? i : t, s = s > n ? n : s;
    let r = i / 2 - t / 2, o = n / 2 - s / 2;
    return window.open(e, "popup_window", "width=" + t + ",height=" + s + ",top=" + o + ",left=" + r + ",resizable,menubar=no");
}
class CollectionService extends CrudService {
    get baseCrudPath() {
        return "/api/collections";
    }
    async import(e, t = !1, s) {
        return s = Object.assign({
            method: "PUT",
            body: {
                collections: e,
                deleteMissing: t
            }
        }, s), this.client.send(this.baseCrudPath + "/import", s).then(()=>!0);
    }
}
class LogService extends BaseService {
    async getList(e = 1, t = 30, s) {
        return (s = Object.assign({
            method: "GET"
        }, s)).query = Object.assign({
            page: e,
            perPage: t
        }, s.query), this.client.send("/api/logs", s);
    }
    async getOne(e, t) {
        if (!e) throw new ClientResponseError({
            url: this.client.buildUrl("/api/logs/"),
            status: 404,
            response: {
                code: 404,
                message: "Missing required log id.",
                data: {}
            }
        });
        return t = Object.assign({
            method: "GET"
        }, t), this.client.send("/api/logs/" + encodeURIComponent(e), t);
    }
    async getStats(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send("/api/logs/stats", e);
    }
}
class HealthService extends BaseService {
    async check(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send("/api/health", e);
    }
}
class FileService extends BaseService {
    getUrl(e, t, s = {}) {
        if (!t || !e?.id || !e?.collectionId && !e?.collectionName) return "";
        const i = [];
        i.push("api"), i.push("files"), i.push(encodeURIComponent(e.collectionId || e.collectionName)), i.push(encodeURIComponent(e.id)), i.push(encodeURIComponent(t));
        let n = this.client.buildUrl(i.join("/"));
        if (Object.keys(s).length) {
            !1 === s.download && delete s.download;
            const e = new URLSearchParams(s);
            n += (n.includes("?") ? "&" : "?") + e;
        }
        return n;
    }
    async getToken(e) {
        return e = Object.assign({
            method: "POST"
        }, e), this.client.send("/api/files/token", e).then((e)=>e?.token || "");
    }
}
class BackupService extends BaseService {
    async getFullList(e) {
        return e = Object.assign({
            method: "GET"
        }, e), this.client.send("/api/backups", e);
    }
    async create(e, t) {
        return t = Object.assign({
            method: "POST",
            body: {
                name: e
            }
        }, t), this.client.send("/api/backups", t).then(()=>!0);
    }
    async upload(e, t) {
        return t = Object.assign({
            method: "POST",
            body: e
        }, t), this.client.send("/api/backups/upload", t).then(()=>!0);
    }
    async delete(e, t) {
        return t = Object.assign({
            method: "DELETE"
        }, t), this.client.send(`/api/backups/${encodeURIComponent(e)}`, t).then(()=>!0);
    }
    async restore(e, t) {
        return t = Object.assign({
            method: "POST"
        }, t), this.client.send(`/api/backups/${encodeURIComponent(e)}/restore`, t).then(()=>!0);
    }
    getDownloadUrl(e, t) {
        return this.client.buildUrl(`/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`);
    }
}
class Client {
    constructor(e = "/", t, s = "en-US"){
        this.cancelControllers = {}, this.recordServices = {}, this.enableAutoCancellation = !0, this.baseUrl = e, this.lang = s, this.authStore = t || new LocalAuthStore, this.admins = new AdminService(this), this.collections = new CollectionService(this), this.files = new FileService(this), this.logs = new LogService(this), this.settings = new SettingsService(this), this.realtime = new RealtimeService(this), this.health = new HealthService(this), this.backups = new BackupService(this);
    }
    collection(e) {
        return this.recordServices[e] || (this.recordServices[e] = new RecordService(this, e)), this.recordServices[e];
    }
    autoCancellation(e) {
        return this.enableAutoCancellation = !!e, this;
    }
    cancelRequest(e) {
        return this.cancelControllers[e] && (this.cancelControllers[e].abort(), delete this.cancelControllers[e]), this;
    }
    cancelAllRequests() {
        for(let e in this.cancelControllers)this.cancelControllers[e].abort();
        return this.cancelControllers = {}, this;
    }
    filter(e, t) {
        if (!t) return e;
        for(let s in t){
            let i = t[s];
            switch(typeof i){
                case "boolean":
                case "number":
                    i = "" + i;
                    break;
                case "string":
                    i = "'" + i.replace(/'/g, "\\'") + "'";
                    break;
                default:
                    i = null === i ? "null" : i instanceof Date ? "'" + i.toISOString().replace("T", " ") + "'" : "'" + JSON.stringify(i).replace(/'/g, "\\'") + "'";
            }
            e = e.replaceAll("{:" + s + "}", i);
        }
        return e;
    }
    getFileUrl(e, t, s = {}) {
        return this.files.getUrl(e, t, s);
    }
    buildUrl(e) {
        let t = this.baseUrl;
        return "undefined" == typeof window || !window.location || t.startsWith("https://") || t.startsWith("http://") || (t = window.location.origin?.endsWith("/") ? window.location.origin.substring(0, window.location.origin.length - 1) : window.location.origin || "", this.baseUrl.startsWith("/") || (t += window.location.pathname || "/", t += t.endsWith("/") ? "" : "/"), t += this.baseUrl), e && (t += t.endsWith("/") ? "" : "/", t += e.startsWith("/") ? e.substring(1) : e), t;
    }
    async send(e, t) {
        t = this.initSendOptions(e, t);
        let s = this.buildUrl(e);
        if (this.beforeSend) {
            const e = Object.assign({}, await this.beforeSend(s, t));
            void 0 !== e.url || void 0 !== e.options ? (s = e.url || s, t = e.options || t) : Object.keys(e).length && (t = e, console?.warn && console.warn("Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`."));
        }
        if (void 0 !== t.query) {
            const e = this.serializeQueryParams(t.query);
            e && (s += (s.includes("?") ? "&" : "?") + e), delete t.query;
        }
        "application/json" == this.getHeader(t.headers, "Content-Type") && t.body && "string" != typeof t.body && (t.body = JSON.stringify(t.body));
        return (t.fetch || fetch)(s, t).then(async (e)=>{
            let t = {};
            try {
                t = await e.json();
            } catch (e) {}
            if (this.afterSend && (t = await this.afterSend(e, t)), e.status >= 400) throw new ClientResponseError({
                url: e.url,
                status: e.status,
                data: t
            });
            return t;
        }).catch((e)=>{
            throw new ClientResponseError(e);
        });
    }
    initSendOptions(e, t) {
        if ((t = Object.assign({
            method: "GET"
        }, t)).body = this.convertToFormDataIfNeeded(t.body), normalizeUnknownQueryParams(t), t.query = Object.assign({}, t.params, t.query), void 0 === t.requestKey && (!1 === t.$autoCancel || !1 === t.query.$autoCancel ? t.requestKey = null : (t.$cancelKey || t.query.$cancelKey) && (t.requestKey = t.$cancelKey || t.query.$cancelKey)), delete t.$autoCancel, delete t.query.$autoCancel, delete t.$cancelKey, delete t.query.$cancelKey, null !== this.getHeader(t.headers, "Content-Type") || this.isFormData(t.body) || (t.headers = Object.assign({}, t.headers, {
            "Content-Type": "application/json"
        })), null === this.getHeader(t.headers, "Accept-Language") && (t.headers = Object.assign({}, t.headers, {
            "Accept-Language": this.lang
        })), this.authStore.token && null === this.getHeader(t.headers, "Authorization") && (t.headers = Object.assign({}, t.headers, {
            Authorization: this.authStore.token
        })), this.enableAutoCancellation && null !== t.requestKey) {
            const s = t.requestKey || (t.method || "GET") + e;
            delete t.requestKey, this.cancelRequest(s);
            const i = new AbortController;
            this.cancelControllers[s] = i, t.signal = i.signal;
        }
        return t;
    }
    convertToFormDataIfNeeded(e) {
        if ("undefined" == typeof FormData || void 0 === e || "object" != typeof e || null === e || this.isFormData(e) || !this.hasBlobField(e)) return e;
        const t = new FormData;
        for(const s in e){
            const i = e[s];
            if ("object" != typeof i || this.hasBlobField({
                data: i
            })) {
                const e = Array.isArray(i) ? i : [
                    i
                ];
                for (let i of e)t.append(s, i);
            } else {
                let e = {};
                e[s] = i, t.append("@jsonPayload", JSON.stringify(e));
            }
        }
        return t;
    }
    hasBlobField(e) {
        for(const t in e){
            const s = Array.isArray(e[t]) ? e[t] : [
                e[t]
            ];
            for (const e of s)if ("undefined" != typeof Blob && e instanceof Blob || "undefined" != typeof File && e instanceof File) return !0;
        }
        return !1;
    }
    getHeader(e, t) {
        e = e || {}, t = t.toLowerCase();
        for(let s in e)if (s.toLowerCase() == t) return e[s];
        return null;
    }
    isFormData(e) {
        return e && ("FormData" === e.constructor.name || "undefined" != typeof FormData && e instanceof FormData);
    }
    serializeQueryParams(e) {
        const t = [];
        for(const s in e){
            if (null === e[s]) continue;
            const i = e[s], n = encodeURIComponent(s);
            if (Array.isArray(i)) for (const e of i)t.push(n + "=" + encodeURIComponent(e));
            else i instanceof Date ? t.push(n + "=" + encodeURIComponent(i.toISOString())) : "object" == typeof i ? t.push(n + "=" + encodeURIComponent(JSON.stringify(i))) : t.push(n + "=" + encodeURIComponent(i));
        }
        return t.join("&");
    }
}
class AsyncAuthStore extends BaseAuthStore {
    constructor(e){
        super(), this.queue = [], this.saveFunc = e.save, this.clearFunc = e.clear, this._enqueue(()=>this._loadInitial(e.initial));
    }
    save(e, t) {
        super.save(e, t);
        let s = "";
        try {
            s = JSON.stringify({
                token: e,
                model: t
            });
        } catch (e) {
            console.warn("AsyncAuthStore: failed to stringify the new state");
        }
        this._enqueue(()=>this.saveFunc(s));
    }
    clear() {
        super.clear(), this.clearFunc ? this._enqueue(()=>this.clearFunc()) : this._enqueue(()=>this.saveFunc(""));
    }
    async _loadInitial(e) {
        try {
            if (e = await e) {
                let t;
                "string" == typeof e ? t = JSON.parse(e) || {} : "object" == typeof e && (t = e), this.save(t.token || "", t.model || null);
            }
        } catch (e) {}
    }
    _enqueue(e) {
        this.queue.push(e), 1 == this.queue.length && this._dequeue();
    }
    _dequeue() {
        this.queue.length && this.queue[0]().finally(()=>{
            this.queue.shift(), this.queue.length && this._dequeue();
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bb5oI"], null, "parcelRequire9b17")

//# sourceMappingURL=index.70f1794e.js.map
