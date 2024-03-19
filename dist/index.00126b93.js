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
})({"2jlDz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "61def7bd00126b93";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
    try {
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
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
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

},{}],"GoaHR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tasks", ()=>tasks);
parcelHelpers.export(exports, "usersName", ()=>usersName);
parcelHelpers.export(exports, "idUsers", ()=>idUsers);
parcelHelpers.export(exports, "selectionTodo", ()=>selectionTodo);
var _headerJs = require("./components/header/header.js");
var _mainJs = require("./components/main/main.js");
var _sidebarJs = require("./components/sidebar/sidebar.js");
var _clockJs = require("./components/utils/clock.js");
var _countersJs = require("./components/utils/counters.js");
var _addTodoJs = require("./components/main/addTodo/addTodo.js");
var _deleteAllBtnJs = require("./components/main/deleteAllButton/deleteAllBtn.js");
var _authorJs = require("./components/header/authorization/author.js");
var _addNewTaskJs = require("./components/utils/addNewTask.js");
document.addEventListener("DOMContentLoaded", ()=>{
    (0, _headerJs.initHeader)();
    (0, _clockJs.initClock)();
    (0, _mainJs.initMain)();
    (0, _sidebarJs.initSidebar)();
    (0, _addTodoJs.addNewTask)();
    (0, _authorJs.logIn)();
    (0, _addNewTaskJs.initNewCard)();
    (0, _countersJs.countTasks)();
    (0, _deleteAllBtnJs.deleteAllTasks)();
});
const tasks = [];
const URLTodos = "https://jsonplaceholder.typicode.com/todos";
const URLUsers = "https://jsonplaceholder.typicode.com/users";
const dataUsers = await getData(URLUsers);
const dataTodos = await getData(URLTodos);
const usersIdTodos = dataTodos.map((users)=>users.userId);
const todosStatus = dataTodos.map((stat)=>stat.completed);
const usersName = dataUsers.map((user)=>user.name);
const idUsers = dataUsers.map((userId)=>userId.id);
async function getData(url) {
    const array = [];
    const response = await fetch(url);
    const data = await response.json();
    data.forEach((item)=>array.push(item));
    return array;
}
const selectionTodo = document.getElementById("selectUser");
for(let i = 0; i < usersName.length; i++){
    const option = document.createElement("option");
    option.id = "optionUser";
    option.innerText = usersName[i];
    selectionTodo.insertAdjacentElement("beforeend", option);
}
selectionTodo.addEventListener("change", addUserName);
function addUserName() {
    const userName = document.getElementById("selectUser").value;
    return userName;
}

},{"./components/header/header.js":"h8ra5","./components/main/main.js":"eWFjD","./components/sidebar/sidebar.js":"51259","./components/utils/clock.js":"3AY7J","./components/utils/counters.js":"lLpnC","./components/main/addTodo/addTodo.js":"bNM4w","./components/main/deleteAllButton/deleteAllBtn.js":"bxAFH","./components/header/authorization/author.js":"9VmH1","./components/utils/addNewTask.js":"3oHRS","@parcel/transformer-js/src/esmodule-helpers.js":"eb3SF"}],"h8ra5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHeader", ()=>initHeader);
function initHeader() {
    console.log("initHeader \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F");
    const header = document.createElement("header");
    header.className = "header";
    const container = document.createElement("div");
    container.className = "container";
    const headerInner = document.createElement("div");
    headerInner.className = "header__inner";
    const logo = document.createElement("h1");
    logo.className = "header__logo";
    logo.textContent = "Trello";
    const headerDiv = document.createElement("div");
    headerDiv.className = "headerDiv";
    const time = document.createElement("div");
    time.className = "header__time";
    time.id = "time";
    const buttons = document.createElement("div");
    buttons.className = "header__buttons";
    const entryButton = document.createElement("button");
    entryButton.className = "header__entry";
    entryButton.innerHTML = '<i class="bx bx-user-circle"></i><span>\u0412\u043E\u0439\u0442\u0438</span>';
    buttons.appendChild(entryButton);
    headerInner.appendChild(logo);
    headerInner.appendChild(headerDiv);
    headerDiv.appendChild(time);
    headerDiv.appendChild(buttons);
    container.appendChild(headerInner);
    header.appendChild(container);
    document.body.appendChild(header);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eb3SF"}],"eb3SF":[function(require,module,exports) {
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

},{}],"eWFjD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "columnTodo", ()=>columnTodo);
parcelHelpers.export(exports, "columnInProgress", ()=>columnInProgress);
parcelHelpers.export(exports, "columnDone", ()=>columnDone);
parcelHelpers.export(exports, "initMain", ()=>initMain);
function createCustomElement(tag, className, id) {
    const element = document.createElement(tag);
    element.className = className;
    element.id = id;
    return element;
}
// функция для создания колонки
function createColumn(columnClassName, columnTitle, headerClassName, counterId, buttonClassName, buttonId, cardBodyId) {
    const column = createCustomElement("div", columnClassName);
    const cardBody = createCustomElement("div", "cards__body", cardBodyId);
    const cardHeader = createCustomElement("div", headerClassName);
    const cardTitle = createCustomElement("h3", "cards__title");
    cardTitle.innerText = columnTitle;
    const cardCounter = createCustomElement("span", "cards__counter");
    cardCounter.id = counterId;
    cardCounter.innerText = "";
    const button = createCustomElement("button", buttonClassName);
    button.id = buttonId;
    cardHeader.append(cardTitle, cardCounter);
    column.append(cardHeader, cardBody);
    if (columnClassName.includes("todo")) {
        button.innerText = "+ Add todo";
        column.append(button);
    } else if (columnClassName.includes("done")) {
        button.innerText = "Delete all";
        column.append(button);
    }
    return column;
}
const columnTodo = createColumn("cards__col cards__col--todo", "TODO", "cards__header cards__header--todo", "toDoCounter", "cards__btn cards__btn--todo", "addTodo", "cardBodyTodo");
const columnInProgress = createColumn("cards__col cards__col--inProgress", "IN PROGRESS:", "cards__header cards__header--inProgress", "inProgressCounter", null, null, "cardBodyInProgress");
const columnDone = createColumn("cards__col cards__col--done", "DONE:", "cards__header cards__header--done", "doneCounter", "cards__btn cards__btn--done", "deleteAll", "cardBodyDone");
function initMain() {
    console.log("initMain \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F");
    const main = document.createElement("main");
    main.className = "main";
    const container = document.createElement("div");
    container.className = "container";
    // сайдбар
    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    sidebar.id = "mySidebar";
    const userWrapper = document.createElement("div");
    userWrapper.className = "sidebar__user";
    const sidebarUserWrapper = document.createElement("div");
    sidebarUserWrapper.className = "sidebar__user-wrapper";
    const userImage = document.createElement("img");
    userImage.className = "sidebar__user-img";
    userImage.src = "./img/user.png";
    userImage.setAttribute("width", "40");
    userImage.alt = "user";
    const userName = document.createElement("span");
    userName.className = "sidebar__user-name";
    userName.textContent = "User";
    userName.id = "sidebarUser";
    sidebarUserWrapper.appendChild(userImage);
    userWrapper.appendChild(sidebarUserWrapper);
    userWrapper.appendChild(userName);
    const menu = document.createElement("nav");
    menu.className = "sidebar__menu";
    const menuList = document.createElement("ul");
    menuList.className = "sidebar__menu-list";
    const menuItems = [
        {
            icon: "bxs-dashboard",
            text: "boards"
        },
        {
            icon: "bxs-group",
            text: "users"
        }
    ];
    menuItems.forEach((item)=>{
        const menuItem = document.createElement("li");
        menuItem.className = "sidebar__menu-item";
        const menuLink = document.createElement("a");
        menuLink.className = "sidebar__menu-link";
        menuLink.href = "#";
        const icon = document.createElement("i");
        icon.className = `bx ${item.icon}`;
        const menuText = document.createElement("span");
        menuText.className = "sidebar__menu-text";
        menuText.textContent = item.text;
        if (item.text === "users") {
            icon.className = "bx bxs-group"; // Иконка для пользователей
            menuText.id = "sidebar__menu-text"; // ID для стилизации
        }
        menuLink.appendChild(icon);
        menuLink.appendChild(menuText);
        menuItem.appendChild(menuLink);
        menuList.appendChild(menuItem);
    });
    menu.appendChild(menuList);
    sidebar.appendChild(userWrapper);
    sidebar.appendChild(menu);
    //контейнер для колонок
    const cards = document.createElement("div");
    cards.className = "cards";
    //функция для создания элемента
    function createCustomElement(tag, className, id) {
        const element = document.createElement(tag);
        element.className = className;
        return element;
    }
    cards.append(columnTodo, columnInProgress, columnDone);
    container.append(cards);
    main.append(sidebar, container);
    document.body.appendChild(main);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eb3SF"}],"51259":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSidebar", ()=>initSidebar);
function initSidebar() {
    console.log("initSideBar \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F");
    const sidebar = document.getElementById("mySidebar");
    let mini = true;
    const sidebarMenuTexts = document.querySelectorAll(".sidebar__menu-text");
    const imageWrapper = document.querySelector(".sidebar__wrapper");
    sidebar.addEventListener("mouseover", toggleSidebar);
    sidebar.addEventListener("mouseout", toggleSidebar);
    sidebar.style.width = "70px";
    sidebarMenuTexts.forEach((item)=>item.style.display = "none");
    function toggleSidebar() {
        if (mini) {
            sidebar.style.width = "160px";
            sidebarMenuTexts.forEach((item)=>item.style.display = "block");
            mini = false;
        } else {
            sidebar.style.width = "70px";
            sidebarMenuTexts.forEach((item)=>item.style.display = "none");
            mini = true;
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eb3SF"}],"3AY7J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initClock", ()=>initClock);
function initClock() {
    console.log("initClock \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F");
    setInterval(function() {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        const clock = hours + ":" + minutes + ":" + seconds;
        const time = document.getElementById("time");
        time.innerHTML = clock;
    }, 1000);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eb3SF"}],"lLpnC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "countTasks", ()=>countTasks);
var _indexJs = require("../../index.js");
function countTasks() {
    const todoCounter = document.getElementById("toDoCounter");
    const inProgressCounter = document.getElementById("inProgressCounter");
    const doneCounter = document.getElementById("doneCounter");
    const todoCounterNumber = (0, _indexJs.tasks).filter((task)=>task.status === "todo").length;
    todoCounter.innerText = todoCounterNumber;
    const inPrNumber = (0, _indexJs.tasks).filter((task)=>task.status === "inProgress").length;
    inProgressCounter.innerText = inPrNumber;
    const doneNumbers = (0, _indexJs.tasks).filter((tasks)=>tasks.status === "Done").length;
    doneCounter.innerText = doneNumbers;
}

},{"../../index.js":"GoaHR","@parcel/transformer-js/src/esmodule-helpers.js":"eb3SF"}],"bNM4w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "modalButtonConfirm", ()=>modalButtonConfirm);
parcelHelpers.export(exports, "modalInputTittle", ()=>modalInputTittle);
parcelHelpers.export(exports, "modalInputDescription", ()=>modalInputDescription);
parcelHelpers.export(exports, "addNewTask", ()=>addNewTask);
var _indexJs = require("../../../index.js");
const modalButtonConfirm = document.createElement("button");
const modalInputTittle = document.createElement("input");
const modalInputDescription = document.createElement("textarea");
function addNewTask() {
    console.log("addNewTask \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F");
    const btnAddTodo = document.getElementById("addTodo");
    const modal = document.createElement("div");
    modal.id = "modal";
    modal.className = "modalTodo";
    const modalContent = document.createElement("div");
    modalContent.className = "modal-contentTodo";
    const modalContentUP = document.createElement("div");
    modalContentUP.className = "modal-content_upTodo";
    const modalContentMiddle = document.createElement("div");
    modalContentMiddle.className = "modal-content_middleTodo";
    const modalContentLow = document.createElement("div");
    modalContentLow.className = "modal-content_lowTodo";
    const btnsTodo = document.createElement("div");
    btnsTodo.className = "btnsTodo";
    const btnsInnerTodo = document.createElement("div");
    btnsInnerTodo.className = "btnsInnerTodo";
    const closeSpan = document.createElement("span");
    closeSpan.className = "closeTodo";
    closeSpan.innerHTML = "&times;";
    modalInputTittle.placeholder = "Tittle";
    modalInputTittle.className = "ModalTittleTodo";
    modalInputTittle.setAttribute("required", "");
    modalInputDescription.className = "DescriptionTodo";
    modalInputDescription.placeholder = "Your Description";
    modalInputDescription.setAttribute("required", "");
    modalButtonConfirm.id = "confirmTodo";
    modalButtonConfirm.className = "modal-button_confirmTodo";
    modalButtonConfirm.textContent = "Confirm";
    const modalButtonCancel = document.createElement("button");
    modalButtonCancel.className = "modal-button_cancelTodo";
    modalButtonCancel.textContent = "Cancel";
    const modalButtonSelectUser = document.createElement("select");
    modalButtonSelectUser.className = "SelectionTodo";
    modalButtonSelectUser.id = "selectUser";
    console.log(modalButtonSelectUser);
    modalContent.appendChild(modalContentUP);
    modalContent.appendChild(modalContentMiddle);
    modalContent.appendChild(modalContentLow);
    modalContentUP.appendChild(closeSpan);
    modalContentUP.appendChild(modalInputTittle);
    modalContent.append(btnsTodo);
    modalContentMiddle.appendChild(modalInputDescription);
    btnsTodo.appendChild(modalButtonSelectUser);
    btnsTodo.append(btnsInnerTodo);
    btnsInnerTodo.appendChild(modalButtonConfirm);
    btnsInnerTodo.appendChild(modalButtonCancel);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    const closeBtn = document.getElementsByClassName("closeTodo")[0];
    /////
    btnAddTodo.addEventListener("click", function() {
        modal.style.display = "block";
    });
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });
    modalButtonCancel.addEventListener("click", function() {
        modal.style.display = "none";
    });
    modalButtonConfirm.addEventListener("click", function(event) {
        modal.style.display = "none";
    });
    window.addEventListener("click", function(event) {
        if (event.target === modal) modal.style.display = "none";
    });
}

},{"../../../index.js":"GoaHR","@parcel/transformer-js/src/esmodule-helpers.js":"eb3SF"}],"bxAFH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deleteAllTasks", ()=>deleteAllTasks);
var _countersJs = require("../../utils/counters.js");
var _indexJs = require("../../../index.js");
function deleteAllTasks() {
    console.log("deleteAllTasks \u0437\u0432\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F");
    const deleteAllBtn = document.getElementById("deleteAll");
    const modal2 = document.createElement("div");
    modal2.id = "modal";
    modal2.className = "modalDeleteAll ";
    const modalContentWarning = document.createElement("div");
    modalContentWarning.className = "modal-contentDeleteAll ";
    const modalContentUPWarning = document.createElement("div");
    modalContentUPWarning.className = "modal-content_upDeleteAll ";
    const modalContentLowWarning = document.createElement("div");
    modalContentLowWarning.className = "modal-content_lowDeleteAll ";
    const itemDone = document.getElementById("cardBodyDone");
    const modalInputTittleWarning = document.createElement("div");
    modalInputTittleWarning.textContent = "Warning!";
    modalInputTittleWarning.className = "WarningDeleteAll ";
    const confirmText = document.createElement("div");
    confirmText.textContent = "Do you really wanna dellete all cards?";
    confirmText.classList.add("confirmText");
    const modalButtonConfirmWarning = document.createElement("button");
    modalButtonConfirmWarning.className = "modal-button_confirmDeleteAll";
    modalButtonConfirmWarning.textContent = "Confirm";
    const modalButtonCancelWarning = document.createElement("button");
    modalButtonCancelWarning.className = "modal-button_cancelDeleteAll ";
    modalButtonCancelWarning.textContent = "Cancel";
    const containerButtons = document.createElement("div");
    containerButtons.classList.add("containerButtons");
    modalContentWarning.appendChild(modalContentUPWarning);
    modalContentWarning.appendChild(modalContentLowWarning);
    modalContentUPWarning.appendChild(modalInputTittleWarning);
    modalContentWarning.append(confirmText);
    modalContentWarning.append(containerButtons);
    containerButtons.appendChild(modalButtonConfirmWarning);
    containerButtons.appendChild(modalButtonCancelWarning);
    modal2.appendChild(modalContentWarning);
    document.body.appendChild(modal2);
    const closeBtn = document.getElementsByClassName("modal-button_cancelDeleteAll")[0];
    /*listeners*/ deleteAllBtn.addEventListener("click", function() {
        modal2.style.display = "block";
    });
    closeBtn.addEventListener("click", function() {
        modal2.style.display = "none";
    });
    modalButtonConfirmWarning.addEventListener("click", function() {
        modal2.style.display = "none";
        if (itemDone.children.length === 0) alert("\u041A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043D\u0435\u0442! \u0418\u0445 \u043D\u0443\u0436\u043D\u043E \u0441\u0440\u0430\u0437\u0443 \u0441\u043E\u0437\u0434\u0430\u0442\u044C!!!!");
        else while(itemDone.firstChild){
            for(let i = (0, _indexJs.tasks).length - 1; i >= 0; i--)if ((0, _indexJs.tasks)[i].status === "Done") (0, _indexJs.tasks).splice(i, 1);
            itemDone.removeChild(itemDone.firstChild);
            (0, _countersJs.countTasks)();
            console.log((0, _indexJs.tasks));
        }
    });
    window.addEventListener("click", function(event) {
        if (event.target === modal2) modal2.style.display = "none";
    });
}

},{"../../utils/counters.js":"lLpnC","../../../index.js":"GoaHR","@parcel/transformer-js/src/esmodule-helpers.js":"eb3SF"}],"9VmH1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logIn", ()=>logIn);
const usersLogin = [
    "group",
    "newUser"
];
const boardNames = [
    "Tv",
    "new"
];
function logIn() {
    console.log("logIn \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F");
    const btnLogIn = document.querySelector(".header__entry");
    const modalAuthorization = document.createElement("div");
    modalAuthorization.id = "modal";
    modalAuthorization.className = "modalAuth ";
    const modalContentAuthorization = document.createElement("div");
    modalContentAuthorization.className = "modal-contentAuth ";
    const modalContentUPAuthorization = document.createElement("div");
    modalContentUPAuthorization.className = "modal-content_upAuth ";
    const modalContentMiddleAuthorization = document.createElement("div");
    modalContentMiddleAuthorization.className = "modal-content_middleAuth ";
    const modalContentLowAuthorization = document.createElement("div");
    modalContentLowAuthorization.className = "modal-content_lowAuth ";
    const modalInputTittleAuthorization = document.createElement("div");
    modalInputTittleAuthorization.textContent = "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F";
    modalInputTittleAuthorization.className = "AuthorizationAuth ";
    const closeSpan = document.createElement("span");
    closeSpan.className = "closeAuth ";
    closeSpan.innerHTML = "&times;";
    const modalUserImage = document.createElement("img");
    modalUserImage.src = "./scripts/components/header/authorization/img/user.png";
    modalUserImage.className = "ImageUserAuth ";
    const InputNameAuthorization = document.createElement("input");
    InputNameAuthorization.className = "NameAuth";
    InputNameAuthorization.id = "name";
    const InputLoginAuthorization = document.createElement("input");
    InputLoginAuthorization.className = "LoginAuth";
    InputLoginAuthorization.placeholder = "\u041B\u043E\u0433\u0438\u043D random";
    InputLoginAuthorization.id = "login";
    const modalButtonConfirmWarning = document.createElement("button");
    modalButtonConfirmWarning.className = "modal-button_confirmAuth";
    modalButtonConfirmWarning.textContent = "\u0412\u0445\u043E\u0434";
    modalButtonConfirmWarning.id = "submitAuth";
    modalContentAuthorization.appendChild(modalContentUPAuthorization);
    modalContentAuthorization.appendChild(modalContentMiddleAuthorization);
    modalContentAuthorization.appendChild(modalContentLowAuthorization);
    modalContentMiddleAuthorization.appendChild(modalInputTittleAuthorization);
    modalContentLowAuthorization.appendChild(modalButtonConfirmWarning);
    modalInputTittleAuthorization.appendChild(closeSpan);
    modalContentMiddleAuthorization.appendChild(modalUserImage);
    modalContentMiddleAuthorization.appendChild(InputNameAuthorization);
    modalContentMiddleAuthorization.appendChild(InputLoginAuthorization);
    modalAuthorization.appendChild(modalContentAuthorization);
    document.body.appendChild(modalAuthorization);
    const closeBtn = document.getElementsByClassName("closeAuth")[0];
    const nameOfBoard = document.createElement("div");
    nameOfBoard.classList.add("nameOfBoard");
    const sidebarList = document.getElementsByClassName("sidebar__menu-item")[0];
    ///////////////////////////////////////////////////////////////////////////////////
    btnLogIn.addEventListener("click", function() {
        modalAuthorization.style.display = "block";
    });
    closeBtn.addEventListener("click", function() {
        modalAuthorization.style.display = "none";
    });
    window.addEventListener("click", function(event) {
        if (event.target === modalAuthorization) modalAuthorization.style.display = "none";
    });
    let name = document.querySelector(".NameAuth");
    name.placeholder = "group/newUser";
    let login = document.querySelector(".LoginAuth");
    let submit = document.querySelector(".modal-button_confirmAuth");
    let users = {};
    function User(name, login) {
        this.name = name;
        this.login = login;
    }
    function createId(users) {
        return Object.keys(users).length;
    }
    const userName = document.getElementById("sidebarUser");
    const listUser = document.getElementById("sidebar__menu-text");
    console.log(listUser);
    modalButtonConfirmWarning.addEventListener("click", ()=>{
        modalAuthorization.style.display = "none";
        const nameUser = name.value;
        const loginUser = login.value;
        const user = new User(nameUser, loginUser);
        const userId = "User" + createId(users);
        users[userId] = user;
        if (usersLogin.includes(nameUser)) {
            userName.innerText = nameUser;
            listUser.innerText = nameUser;
            sidebarList.append(nameOfBoard);
            nameOfBoard.innerHTML = boardNames[0];
        } else {
            modalAuthorization.style.display = "none";
            alert("\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0432\u0432\u043E\u0434\u0430 \u0434\u0430\u043D\u043D\u044B\u0445! \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u043E\u0433\u043E user");
            return 0;
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"eb3SF"}],"3oHRS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initNewCard", ()=>initNewCard);
var _addTodoJs = require("../main/addTodo/addTodo.js");
var _indexJs = require("../../index.js");
var _countersJs = require("./counters.js");
function initNewCard() {
    (0, _addTodoJs.modalButtonConfirm).addEventListener("click", ()=>{
        const title = (0, _addTodoJs.modalInputTittle).value.trim();
        const description = (0, _addTodoJs.modalInputDescription).value.trim();
        const userName = document.getElementById("selectUser").value;
        if (title !== "" && description !== "") createNewCard(title, description, 1, userName);
        else {
            alert("\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F.");
            return false;
        }
        (0, _addTodoJs.modalInputTittle).value = "";
        (0, _addTodoJs.modalInputDescription).value = "";
        (0, _countersJs.countTasks)();
    });
    function createCustomElement(tag, className, idUsers) {
        const element = document.createElement(tag);
        element.className = className;
        if (idUsers) element.id = idUsers;
        return element;
    }
    function createNewCard(title, description, idUsers, usersName) {
        (0, _addTodoJs.modalInputTittle).innerText = "";
        (0, _addTodoJs.modalInputDescription).innerText = "";
        let currentTime = new Date().toLocaleTimeString();
        const newTask = {
            status: "todo",
            title: title,
            description: description,
            editedTitle: "",
            id: Date.now(),
            user: usersName,
            time: currentTime
        };
        let tasksLocStorage = JSON.parse(localStorage.getItem("tasks")) || [];
        tasksLocStorage.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasksLocStorage));
        const cardItem = createCustomElement("div", "cards__item cards__item--todo");
        cardItem.setAttribute("draggable", "true");
        const cardTitle = createCustomElement("div", "cards__title");
        const cardTitleText = createCustomElement("span", "cards__title-text");
        cardTitleText.innerText = newTask.title;
        const cardTitleButtons = createCustomElement("div", "cards__title-buttons");
        const todoEditBtn = createCustomElement("button", "cards__title-button", "todoEditBtn");
        todoEditBtn.innerText = "EDIT";
        todoEditBtn.addEventListener("click", editBtn);
        const btnToDoDelete = createCustomElement("button", "cards__title-button", "btnDelTodo");
        btnToDoDelete.innerText += "DELETE";
        btnToDoDelete.addEventListener("click", spliceTaskFromArray);
        function spliceTaskFromArray(event) {
            const currentElement = event.target;
            const closestCardItem = currentElement.closest(".cards__item__todo");
            const taskIdToDelete = closestCardItem.dataset.taskId;
            const taskIndex = (0, _indexJs.tasks).findIndex((task)=>task.id == taskIdToDelete);
            if (taskIndex !== -1) {
                (0, _indexJs.tasks).splice(taskIndex);
                cardsItemToDO.remove();
                (0, _countersJs.countTasks)();
                console.log((0, _indexJs.tasks));
            }
        }
        const InPrBtnBack = createCustomElement("button", "cards__title-button", "todoDeleteBtn", "backBtn");
        InPrBtnBack.innerText += "Back";
        InPrBtnBack.addEventListener("click", backToTodo);
        const InPrBackComplete = createCustomElement("button", "cards__title-button", "completeBtn");
        InPrBackComplete.innerText += "Complete";
        InPrBackComplete.addEventListener("click", transferCardDone);
        const itemDone = document.getElementById("cardBodyDone");
        const btnDoneDelete = createCustomElement("button", "cards__title-button", "btnDelDone");
        btnDoneDelete.innerText += "DELETE";
        btnDoneDelete.addEventListener("click", deleteTasksDone);
        const cardsItemToDO = document.createElement("div");
        cardsItemToDO.classList.add("cards__item__todo", "cards__item--todo");
        cardsItemToDO.dataset.taskId = newTask.id;
        const cardsItemToInPr = document.createElement("div");
        cardsItemToInPr.classList.add("cards__item", "cards__item--inProgress");
        cardsItemToInPr.dataset.taskId = newTask.id;
        const cardsItemDone = document.createElement("div");
        cardsItemDone.classList.add("cards__item", "cards__item--Done");
        cardsItemDone.dataset.taskId = newTask.id;
        const cardDesc = createCustomElement("div", "cards__desc");
        const cardDescText = createCustomElement("span", "cards__desc-text");
        cardDescText.innerText = newTask.description;
        const cardDescButton = createCustomElement("button", "cards__desc-btn");
        cardDescButton.innerText = ">";
        cardDescButton.addEventListener("click", transferCard);
        const cardInfo = createCustomElement("div", "cards__info");
        const cardUser = createCustomElement("span", "cards__user");
        cardUser.innerText = usersName;
        const cardTime = createCustomElement("span", "cards__time");
        cardTime.innerText = newTask.time;
        const cardBodyTodo = document.getElementById("cardBodyTodo");
        const cardBodyInProgress = document.getElementById("cardBodyInProgress");
        const cardBodyDone = document.getElementById("cardBodyDone");
        const cardBodyTodoTop = createCustomElement("div", "cardBodyTodoTop", "cardBodyTodoTop");
        const cardBodyTodoTopInner = createCustomElement("div", "cardBodyTodoTopInner", "cardBodyTodoTopInner");
        const cardBodyTodoMiddle = createCustomElement("div", "cardBodyTodoMiddle", "cardBodyTodoMiddle");
        const cardBodyTodoBottom = createCustomElement("div", "cardBodyTodoBottom", "cardBodyTodoBottom");
        const cardBodyDoneTop = createCustomElement("div", "cardBodyDoneTop", "cardBodyDoneTop");
        const cardBodyDoneTopInner = createCustomElement("div", "cardBodyDoneTopInner", "cardBodyDoneTopInner");
        const cardBodyDoneMiddle = createCustomElement("div", "cardBodyDoneMiddle", "cardBodyDoneMiddle");
        const cardBodyDoneBottom = createCustomElement("div", "cardBodyDoneBottom", "cardBodyDoneBottom");
        cardInfo.append(cardUser, cardTime);
        cardDesc.append(cardDescText, cardDescButton);
        if (newTask.status === "todo") {
            cardBodyTodo.append(cardsItemToDO);
            cardsItemToDO.append(cardBodyTodoTop);
            cardBodyTodoTop.append(cardTitleText, cardBodyTodoTopInner);
            cardBodyTodoTopInner.append(todoEditBtn, btnToDoDelete);
            cardsItemToDO.append(cardBodyTodoMiddle);
            cardBodyTodoMiddle.append(cardDescText, cardDescButton);
            cardsItemToDO.append(cardBodyTodoBottom);
            cardBodyTodoBottom.append(cardUser, cardTime);
        }
        const cardBodyInPrTop = createCustomElement("div", "cardBodyInPrTop", "cardBodyInPrTop");
        const cardBodyInPropInner = createCustomElement("div", "cardBodyInPrTopInner", "cardBodyInPrTopInner");
        const cardBodyInPrMiddle = createCustomElement("div", "cardBodyInPrMiddle", "cardBodyInPrMiddle");
        const cardBodyInPrBottom = createCustomElement("div", "cardBodyTInPrBottom", "cardBodyInPrBottom");
        function transferCard() {
            newTask.status = "inProgress";
            cardTitleText.innerText = newTask.editedTitle || newTask.title;
            cardsItemToDO.remove();
            (0, _countersJs.countTasks)();
            if (newTask.status === "inProgress") {
                cardBodyInProgress.append(cardsItemToInPr);
                cardsItemToInPr.append(cardBodyInPrTop);
                cardBodyInPrTop.append(title, cardBodyInPropInner);
                cardBodyInPropInner.append(InPrBtnBack, InPrBackComplete);
                cardsItemToInPr.append(cardBodyInPrMiddle);
                cardBodyInPrMiddle.append(cardDescText);
                cardsItemToInPr.append(cardBodyInPrBottom);
                cardBodyInPrBottom.append(cardUser, cardTime);
            }
        }
        function transferCardDone() {
            newTask.status = "Done";
            cardsItemToInPr.remove();
            (0, _countersJs.countTasks)();
            if (newTask.status === "Done") {
                cardBodyDone.append(cardsItemDone);
                cardsItemDone.append(cardBodyDoneTop);
                cardBodyDoneTop.append(title, btnDoneDelete);
                cardsItemDone.append(cardBodyDoneMiddle);
                cardBodyDoneMiddle.append(cardDescText);
                cardsItemDone.append(cardBodyDoneBottom);
                cardBodyDoneBottom.append(cardUser, cardTime);
            }
        }
        function backToTodo() {
            newTask.status = "todo";
            cardsItemToInPr.remove();
            (0, _countersJs.countTasks)();
            cardBodyTodo.append(cardsItemToDO);
            cardsItemToDO.append(cardBodyTodoTop);
            cardBodyTodoTop.append(title, cardBodyTodoTopInner);
            cardBodyTodoTopInner.append(todoEditBtn, btnToDoDelete);
            cardsItemToDO.append(cardBodyTodoMiddle);
            cardBodyTodoMiddle.append(cardDescText, cardDescButton);
            cardsItemToDO.append(cardBodyTodoBottom);
            cardBodyTodoBottom.append(cardUser, cardTime);
        }
        function editBtn() {
            console.log("editBtn \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F");
            const modal = document.createElement("div");
            modal.id = "modal";
            modal.className = "modal";
            const modalContent = document.createElement("div");
            modalContent.className = "modal-content";
            const modalContentUP = document.createElement("div");
            modalContentUP.className = "modal-content_up";
            const modalContentMiddle = document.createElement("div");
            modalContentMiddle.className = "modal-content_middle";
            const modalContentLow = document.createElement("div");
            modalContentLow.className = "modal-content_low";
            const closeSpan = document.createElement("span");
            closeSpan.className = "close";
            closeSpan.innerHTML = "&times;";
            closeSpan.addEventListener("click", ()=>{
                modal.style.display = "none";
                (0, _countersJs.countTasks)();
            });
            const modalInputTittle = document.createElement("input");
            modalInputTittle.placeholder = "Tittle";
            modalInputTittle.className = "ModalTittle";
            const modalInputDescription = document.createElement("textarea");
            modalInputDescription.className = "Description";
            modalInputDescription.placeholder = "Your Description";
            const modalButtonConfirm = document.createElement("button");
            modalButtonConfirm.className = "modal-button_confirm";
            modalButtonConfirm.textContent = "Confirm";
            const modalButtonCancel = document.createElement("button");
            modalButtonCancel.className = "modal-button_cancel";
            modalButtonCancel.textContent = "Cancel";
            const cardUsers = createCustomElement("span", "cards__user");
            cardUsers.innerText = usersName;
            modal.appendChild(modalContent);
            modalContent.appendChild(modalContentUP);
            modalContent.appendChild(modalContentMiddle);
            modalContent.appendChild(modalContentLow);
            modalContentUP.appendChild(closeSpan);
            modalContentUP.appendChild(modalInputTittle);
            modalContentMiddle.appendChild(modalInputDescription);
            modalContentLow.appendChild(cardUsers);
            modalContentLow.appendChild(modalButtonConfirm);
            modalContentLow.appendChild(modalButtonCancel);
            document.body.appendChild(modal);
            const btnEdit = document.getElementById("todoEditBtn");
            const closeBtn = document.getElementsByClassName("close")[0];
            btnEdit.addEventListener("click", function() {
                document.querySelectorAll(".modal").forEach((modal)=>{
                    modal.style.display = "none";
                });
                modal.style.display = "block";
                closeSpan.click();
            });
            modalButtonConfirm.addEventListener("click", ()=>{
                let title = modalInputTittle.value.trim();
                let description = modalInputDescription.value.trim();
                if (title !== "" && description !== "") {
                    newTask.editedTitle = title;
                    cardTitleText.innerText = newTask.editedTitle;
                    cardDescText.innerText = description;
                } else {
                    alert("\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0432\u0441\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F.");
                    return false;
                }
                (0, _countersJs.countTasks)();
                modal.style.display = "none";
            });
            todoEditBtn.addEventListener("click", function() {
                document.querySelectorAll(".modal").forEach((modal)=>{
                    modal.style.display = "none";
                });
                modal.style.display = "block";
            });
            closeBtn.addEventListener("click", function() {
                modal.style.display = "none";
            });
            modalButtonCancel.addEventListener("click", function() {
                modal.style.display = "none";
            });
            window.addEventListener("click", function(event) {
                if (event.target === modal) modal.style.display = "none";
            });
        }
        function deleteTasksDone() {
            if (itemDone.children.length === 0) alert("\u041A\u0430\u0440\u0442\u043E\u0447\u0435\u043A \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043D\u0435\u0442! \u0418\u0445 \u043D\u0443\u0436\u043D\u043E \u0441\u0440\u0430\u0437\u0443 \u0441\u043E\u0437\u0434\u0430\u0442\u044C!!!!");
            else while(itemDone.firstChild){
                for(let i = (0, _indexJs.tasks).length - 1; i >= 0; i--)if ((0, _indexJs.tasks)[i].status === "Done") (0, _indexJs.tasks).splice(i, 1);
                itemDone.removeChild(itemDone.firstChild);
                (0, _countersJs.countTasks)();
                console.log((0, _indexJs.tasks));
            }
        }
        (0, _indexJs.tasks).push(newTask);
        console.log((0, _indexJs.tasks));
    }
}

},{"../main/addTodo/addTodo.js":"bNM4w","../../index.js":"GoaHR","./counters.js":"lLpnC","@parcel/transformer-js/src/esmodule-helpers.js":"eb3SF"}]},["2jlDz","GoaHR"], "GoaHR", "parcelRequirebba5")

//# sourceMappingURL=index.00126b93.js.map
