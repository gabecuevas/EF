var WlCom = (function () {
  "use strict";

  function _extends() {
    _extends = Object.assign
      ? Object.assign.bind()
      : function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };
    return _extends.apply(this, arguments);
  }

  function post(url, data, _temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$withCredentials = _ref2.withCredentials,
      withCredentials =
        _ref2$withCredentials === void 0 ? true : _ref2$withCredentials,
      _ref2$isJson = _ref2.isJson,
      isJson = _ref2$isJson === void 0 ? true : _ref2$isJson,
      _ref2$timeout = _ref2.timeout,
      timeout = _ref2$timeout === void 0 ? 0 : _ref2$timeout,
      _ref2$headers = _ref2.headers,
      headers = _ref2$headers === void 0 ? {} : _ref2$headers;
    var str = "";
    if (data) {
      for (var key in data) {
        str +=
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key]) + "&";
      }
      str = str.slice(0, -1);
    }
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("post", url);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      for (var header in headers) {
        xhr.setRequestHeader(header, headers[header]);
      }
      xhr.withCredentials = withCredentials;
      xhr.timeout = timeout;
      xhr.send(str);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var resp = isJson ? JSON.parse(xhr.responseText) : xhr.responseText;
            resolve(resp);
          } else {
            reject();
          }
        }
      };
    });
  }

  var Tracker = (window._WL_CLASS_TRACKER =
    window._WL_CLASS_TRACKER ||
    (function () {
      function _class(_ref) {
        var trackDatas = _ref.trackDatas,
          rootUrl = _ref.rootUrl,
          _ref$trackUrl = _ref.trackUrl,
          trackUrl = _ref$trackUrl === void 0 ? "" : _ref$trackUrl,
          _ref$query = _ref.query,
          query = _ref$query === void 0 ? {} : _ref$query,
          _ref$headers = _ref.headers,
          headers = _ref$headers === void 0 ? {} : _ref$headers,
          _ref$onRedirect = _ref.onRedirect,
          onRedirect =
            _ref$onRedirect === void 0 ? function () {} : _ref$onRedirect;
        if ((this instanceof _class ? this.constructor : void 0) !== Tracker) {
          return;
        }
        if (!Tracker._instance) {
          this.trackDatas = trackDatas;
          this.rootUrl = rootUrl;
          this.trackUrl = trackUrl || rootUrl + "/marketing_track/track";
          this.headers = headers;
          this.query = query;
          this.onRedirect = onRedirect;
          this.stayTime = 0;
          this.maxStayTime = 300;
          this.timer = "";
          this.interval = 5;
          this.currentPath = location.href;
          this.event_id = "";
          this.initEvent();
          this.track();
          Tracker._instance = this;
        }
        return Tracker._instance;
      }
      var _proto = _class.prototype;
      _proto.initEvent = function initEvent() {
        var t = this;
        window.addEventListener("popstate", function () {
          setTimeout(function () {
            t.track();
            if (t.currentPath != location.href) {
              t.currentPath = location.href;
              t.onRedirect();
            }
          });
        });
        (function (history) {
          var pushState = history.pushState;
          history.pushState = function () {
            setTimeout(function () {
              t.track();
              t.onRedirect();
            });
            return pushState.apply(history, arguments);
          };
        })(window.history);
      };
      _proto.track = function track() {
        var flag = "占位,防止两套track";
        if (!window.weilingFlag || window.weilingFlag == flag) {
          window.weilingFlag = flag;
          this.stayTime = 0;
          clearInterval(this.timer);
          this.startWatchStayTime();
        }
      };
      _proto.startWatchStayTime = function startWatchStayTime() {
        var t = this;
        t.watchStayTime();
        this.timer = setInterval(function () {
          t.stayTime += t.interval;
          if (t.stayTime > t.maxStayTime) {
            clearInterval(t.timer);
          } else {
            t.watchStayTime();
          }
        }, t.interval * 1000);
      };
      _proto.watchStayTime = function watchStayTime() {
        var t = this;
        var type = t.stayTime === 0 || !t.event_id ? 1 : 2;
        if (!t.query) {
          t.query = {};
        }
        t.query.ttype = type;
        var sendData = _extends(
          {
            referer: document.referrer,
            title: document.title,
            type: type,
            url: document.URL,
          },
          t.trackDatas
        );
        if (type === 2) {
          sendData.duration = t.stayTime;
          sendData.event_id = t.event_id;
        }
        var queryStr = Object.keys(t.query)
          .map(function (key) {
            return key + "=" + t.query[key];
          })
          .join("&");
        post(t.trackUrl + "?" + queryStr, sendData, {
          timeout: 4900,
          withCredentials: true,
          headers: t.headers,
        })
          .then(function (res) {
            if (res.code == 200) {
              t.event_id = res.event_id || res.data.event_id;
            } else {
              console.log(res);
            }
          })
          ["catch"](function (err) {
            console.log(err);
          });
      };
      return _class;
    })());

  function getQueryVariable(variable) {
    var url = window.location.href;
    if (url.indexOf("?") != -1) {
      var temp1 = url.split("?");
      var pram = temp1[1];
      var keyValue = pram.split("&");
      for (var i = 0; i < keyValue.length; i++) {
        var item = keyValue[i].split("=");
        if (item[0] == variable) {
          return item[1].split("#")[0];
        }
      }
    }
    return "";
  }

  function initTrack() {
    new Tracker({
      trackUrl: LCTrack.trackUrl,
      trackDatas: {
        name: LCTrack.initParams.abbrev_name || "网页",
      },
      headers: LCTrack.initParams.headers,
    });
  }
  var LCTrack = {
    preInit: function preInit(initParams) {
      initParams.istest =
        initParams.istest === undefined
          ? getQueryVariable("istest") || false
          : initParams.istest;
      var trackDomain = "https://api.linkedcrm.ai";
      if (initParams.istest) {
        trackDomain = "https://link.demo.weiling.cn";
      }
      this.trackUrl = trackDomain + "/api/website/track";
      this.initParams = initParams;
    },
    init: function init(initParams) {
      this.preInit(initParams || {});
      initTrack();
    },
  };
  window.LCTrack = LCTrack;

  return LCTrack;
})();
