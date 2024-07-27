function yc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function wc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xc = { exports: {} },
  Mo = {},
  Sc = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wl = Symbol.for("react.element"),
  xp = Symbol.for("react.portal"),
  Sp = Symbol.for("react.fragment"),
  kp = Symbol.for("react.strict_mode"),
  Ep = Symbol.for("react.profiler"),
  Cp = Symbol.for("react.provider"),
  Pp = Symbol.for("react.context"),
  _p = Symbol.for("react.forward_ref"),
  Rp = Symbol.for("react.suspense"),
  Np = Symbol.for("react.memo"),
  Lp = Symbol.for("react.lazy"),
  Bs = Symbol.iterator;
function zp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Bs && e[Bs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var kc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ec = Object.assign,
  Cc = {};
function hr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cc),
    (this.updater = n || kc);
}
hr.prototype.isReactComponent = {};
hr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
hr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Pc() {}
Pc.prototype = hr.prototype;
function La(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Cc),
    (this.updater = n || kc);
}
var za = (La.prototype = new Pc());
za.constructor = La;
Ec(za, hr.prototype);
za.isPureReactComponent = !0;
var $s = Array.isArray,
  _c = Object.prototype.hasOwnProperty,
  ja = { current: null },
  Rc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Nc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      _c.call(t, r) && !Rc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: wl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ja.current,
  };
}
function jp(e, t) {
  return {
    $$typeof: wl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ta(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wl;
}
function Tp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vs = /\/+/g;
function ni(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Tp("" + e.key)
    : t.toString(36);
}
function Kl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case wl:
          case xp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + ni(i, 0) : r),
      $s(l)
        ? ((n = ""),
          e != null && (n = e.replace(Vs, "$&/") + "/"),
          Kl(l, t, n, "", function (u) {
            return u;
          }))
        : l != null &&
          (Ta(l) &&
            (l = jp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Vs, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), $s(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var s = r + ni(o, a);
      i += Kl(o, t, n, s, l);
    }
  else if (((s = zp(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + ni(o, a++)), (i += Kl(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function zl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Kl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Mp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ue = { current: null },
  Yl = { transition: null },
  Dp = {
    ReactCurrentDispatcher: Ue,
    ReactCurrentBatchConfig: Yl,
    ReactCurrentOwner: ja,
  };
function Lc() {
  throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
  map: zl,
  forEach: function (e, t, n) {
    zl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      zl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ta(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
J.Component = hr;
J.Fragment = Sp;
J.Profiler = Ep;
J.PureComponent = La;
J.StrictMode = kp;
J.Suspense = Rp;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dp;
J.act = Lc;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ec({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ja.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      _c.call(t, s) &&
        !Rc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: wl, type: e.type, key: l, ref: o, props: r, _owner: i };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: Pp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Cp, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = Nc;
J.createFactory = function (e) {
  var t = Nc.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: _p, render: e };
};
J.isValidElement = Ta;
J.lazy = function (e) {
  return { $$typeof: Lp, _payload: { _status: -1, _result: e }, _init: Mp };
};
J.memo = function (e, t) {
  return { $$typeof: Np, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = Yl.transition;
  Yl.transition = {};
  try {
    e();
  } finally {
    Yl.transition = t;
  }
};
J.unstable_act = Lc;
J.useCallback = function (e, t) {
  return Ue.current.useCallback(e, t);
};
J.useContext = function (e) {
  return Ue.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return Ue.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return Ue.current.useEffect(e, t);
};
J.useId = function () {
  return Ue.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return Ue.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return Ue.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return Ue.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return Ue.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return Ue.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return Ue.current.useRef(e);
};
J.useState = function (e) {
  return Ue.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return Ue.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return Ue.current.useTransition();
};
J.version = "18.3.1";
Sc.exports = J;
var _ = Sc.exports;
const zc = wc(_),
  Ip = yc({ __proto__: null, default: zc }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fp = _,
  Op = Symbol.for("react.element"),
  Ap = Symbol.for("react.fragment"),
  Up = Object.prototype.hasOwnProperty,
  bp = Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Bp = { key: !0, ref: !0, __self: !0, __source: !0 };
function jc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Up.call(t, r) && !Bp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Op,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: bp.current,
  };
}
Mo.Fragment = Ap;
Mo.jsx = jc;
Mo.jsxs = jc;
xc.exports = Mo;
var E = xc.exports,
  ji = {},
  Tc = { exports: {} },
  tt = {},
  Mc = { exports: {} },
  Dc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, A) {
    var b = N.length;
    N.push(A);
    e: for (; 0 < b; ) {
      var X = (b - 1) >>> 1,
        q = N[X];
      if (0 < l(q, A)) (N[X] = A), (N[b] = q), (b = X);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var A = N[0],
      b = N.pop();
    if (b !== A) {
      N[0] = b;
      e: for (var X = 0, q = N.length, ht = q >>> 1; X < ht; ) {
        var Ke = 2 * (X + 1) - 1,
          Ye = N[Ke],
          Ie = Ke + 1,
          rt = N[Ie];
        if (0 > l(Ye, b))
          Ie < q && 0 > l(rt, Ye)
            ? ((N[X] = rt), (N[Ie] = b), (X = Ie))
            : ((N[X] = Ye), (N[Ke] = b), (X = Ke));
        else if (Ie < q && 0 > l(rt, b)) (N[X] = rt), (N[Ie] = b), (X = Ie);
        else break e;
      }
    }
    return A;
  }
  function l(N, A) {
    var b = N.sortIndex - A.sortIndex;
    return b !== 0 ? b : N.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var s = [],
    u = [],
    c = 1,
    f = null,
    p = 3,
    S = !1,
    x = !1,
    y = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= N)
        r(u), (A.sortIndex = A.expirationTime), t(s, A);
      else break;
      A = n(u);
    }
  }
  function C(N) {
    if (((y = !1), m(N), !x))
      if (n(s) !== null) (x = !0), Ge(z);
      else {
        var A = n(u);
        A !== null && pt(C, A.startTime - N);
      }
  }
  function z(N, A) {
    (x = !1), y && ((y = !1), h(j), (j = -1)), (S = !0);
    var b = p;
    try {
      for (
        m(A), f = n(s);
        f !== null && (!(f.expirationTime > A) || (N && !K()));

      ) {
        var X = f.callback;
        if (typeof X == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var q = X(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof q == "function" ? (f.callback = q) : f === n(s) && r(s),
            m(A);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var ht = !0;
      else {
        var Ke = n(u);
        Ke !== null && pt(C, Ke.startTime - A), (ht = !1);
      }
      return ht;
    } finally {
      (f = null), (p = b), (S = !1);
    }
  }
  var T = !1,
    g = null,
    j = -1,
    O = 5,
    M = -1;
  function K() {
    return !(e.unstable_now() - M < O);
  }
  function B() {
    if (g !== null) {
      var N = e.unstable_now();
      M = N;
      var A = !0;
      try {
        A = g(!0, N);
      } finally {
        A ? re() : ((T = !1), (g = null));
      }
    } else T = !1;
  }
  var re;
  if (typeof d == "function")
    re = function () {
      d(B);
    };
  else if (typeof MessageChannel < "u") {
    var me = new MessageChannel(),
      Be = me.port2;
    (me.port1.onmessage = B),
      (re = function () {
        Be.postMessage(null);
      });
  } else
    re = function () {
      R(B, 0);
    };
  function Ge(N) {
    (g = N), T || ((T = !0), re());
  }
  function pt(N, A) {
    j = R(function () {
      N(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || S || ((x = !0), Ge(z));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (O = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = p;
      }
      var b = p;
      p = A;
      try {
        return N();
      } finally {
        p = b;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, A) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var b = p;
      p = N;
      try {
        return A();
      } finally {
        p = b;
      }
    }),
    (e.unstable_scheduleCallback = function (N, A, b) {
      var X = e.unstable_now();
      switch (
        (typeof b == "object" && b !== null
          ? ((b = b.delay), (b = typeof b == "number" && 0 < b ? X + b : X))
          : (b = X),
        N)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = b + q),
        (N = {
          id: c++,
          callback: A,
          priorityLevel: N,
          startTime: b,
          expirationTime: q,
          sortIndex: -1,
        }),
        b > X
          ? ((N.sortIndex = b),
            t(u, N),
            n(s) === null &&
              N === n(u) &&
              (y ? (h(j), (j = -1)) : (y = !0), pt(C, b - X)))
          : ((N.sortIndex = q), t(s, N), x || S || ((x = !0), Ge(z))),
        N
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (N) {
      var A = p;
      return function () {
        var b = p;
        p = A;
        try {
          return N.apply(this, arguments);
        } finally {
          p = b;
        }
      };
    });
})(Dc);
Mc.exports = Dc;
var $p = Mc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vp = _,
  et = $p;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ic = new Set(),
  el = {};
function In(e, t) {
  ar(e, t), ar(e + "Capture", t);
}
function ar(e, t) {
  for (el[e] = t, e = 0; e < t.length; e++) Ic.add(t[e]);
}
var Ft = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ti = Object.prototype.hasOwnProperty,
  Wp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ws = {},
  Hs = {};
function Hp(e) {
  return Ti.call(Hs, e)
    ? !0
    : Ti.call(Ws, e)
      ? !1
      : Wp.test(e)
        ? (Hs[e] = !0)
        : ((Ws[e] = !0), !1);
}
function Qp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Gp(e, t, n, r) {
  if (t === null || typeof t > "u" || Qp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function be(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new be(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ze[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ze[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ze[e] = new be(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ze[e] = new be(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ze[e] = new be(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ze[e] = new be(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ze[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ma = /[\-:]([a-z])/g;
function Da(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ma, Da);
    ze[t] = new be(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ma, Da);
    ze[t] = new be(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ma, Da);
  ze[t] = new be(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ze[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new be(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ze[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ia(e, t, n, r) {
  var l = ze.hasOwnProperty(t) ? ze[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Gp(t, n, l, r) && (n = null),
    r || l === null
      ? Hp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var bt = Vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  jl = Symbol.for("react.element"),
  $n = Symbol.for("react.portal"),
  Vn = Symbol.for("react.fragment"),
  Fa = Symbol.for("react.strict_mode"),
  Mi = Symbol.for("react.profiler"),
  Fc = Symbol.for("react.provider"),
  Oc = Symbol.for("react.context"),
  Oa = Symbol.for("react.forward_ref"),
  Di = Symbol.for("react.suspense"),
  Ii = Symbol.for("react.suspense_list"),
  Aa = Symbol.for("react.memo"),
  Jt = Symbol.for("react.lazy"),
  Ac = Symbol.for("react.offscreen"),
  Qs = Symbol.iterator;
function Rr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Qs && e[Qs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var he = Object.assign,
  ri;
function br(e) {
  if (ri === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ri = (t && t[1]) || "";
    }
  return (
    `
` +
    ri +
    e
  );
}
var li = !1;
function oi(e, t) {
  if (!e || li) return "";
  li = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var l = u.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (li = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? br(e) : "";
}
function Kp(e) {
  switch (e.tag) {
    case 5:
      return br(e.type);
    case 16:
      return br("Lazy");
    case 13:
      return br("Suspense");
    case 19:
      return br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = oi(e.type, !1)), e;
    case 11:
      return (e = oi(e.type.render, !1)), e;
    case 1:
      return (e = oi(e.type, !0)), e;
    default:
      return "";
  }
}
function Fi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vn:
      return "Fragment";
    case $n:
      return "Portal";
    case Mi:
      return "Profiler";
    case Fa:
      return "StrictMode";
    case Di:
      return "Suspense";
    case Ii:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Oc:
        return (e.displayName || "Context") + ".Consumer";
      case Fc:
        return (e._context.displayName || "Context") + ".Provider";
      case Oa:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Aa:
        return (
          (t = e.displayName || null), t !== null ? t : Fi(e.type) || "Memo"
        );
      case Jt:
        (t = e._payload), (e = e._init);
        try {
          return Fi(e(t));
        } catch {}
    }
  return null;
}
function Yp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Fi(t);
    case 8:
      return t === Fa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Uc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Jp(e) {
  var t = Uc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Tl(e) {
  e._valueTracker || (e._valueTracker = Jp(e));
}
function bc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Uc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function io(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Oi(e, t) {
  var n = t.checked;
  return he({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Gs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Bc(e, t) {
  (t = t.checked), t != null && Ia(e, "checked", t, !1);
}
function Ai(e, t) {
  Bc(e, t);
  var n = dn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ui(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ui(e, t.type, dn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ks(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ui(e, t, n) {
  (t !== "number" || io(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Br = Array.isArray;
function tr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function bi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return he({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ys(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (Br(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: dn(n) };
}
function $c(e, t) {
  var n = dn(t.value),
    r = dn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Js(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Bi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ml,
  Wc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ml = Ml || document.createElement("div"),
          Ml.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ml.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function tl(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Xp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wr).forEach(function (e) {
  Xp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wr[t] = Wr[e]);
  });
});
function Hc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Wr.hasOwnProperty(e) && Wr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Qc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Hc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Zp = he(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function $i(e, t) {
  if (t) {
    if (Zp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function Vi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Wi = null;
function Ua(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Hi = null,
  nr = null,
  rr = null;
function Xs(e) {
  if ((e = kl(e))) {
    if (typeof Hi != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = Ao(t)), Hi(e.stateNode, e.type, t));
  }
}
function Gc(e) {
  nr ? (rr ? rr.push(e) : (rr = [e])) : (nr = e);
}
function Kc() {
  if (nr) {
    var e = nr,
      t = rr;
    if (((rr = nr = null), Xs(e), t)) for (e = 0; e < t.length; e++) Xs(t[e]);
  }
}
function Yc(e, t) {
  return e(t);
}
function Jc() {}
var ii = !1;
function Xc(e, t, n) {
  if (ii) return e(t, n);
  ii = !0;
  try {
    return Yc(e, t, n);
  } finally {
    (ii = !1), (nr !== null || rr !== null) && (Jc(), Kc());
  }
}
function nl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ao(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var Qi = !1;
if (Ft)
  try {
    var Nr = {};
    Object.defineProperty(Nr, "passive", {
      get: function () {
        Qi = !0;
      },
    }),
      window.addEventListener("test", Nr, Nr),
      window.removeEventListener("test", Nr, Nr);
  } catch {
    Qi = !1;
  }
function qp(e, t, n, r, l, o, i, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Hr = !1,
  ao = null,
  so = !1,
  Gi = null,
  eh = {
    onError: function (e) {
      (Hr = !0), (ao = e);
    },
  };
function th(e, t, n, r, l, o, i, a, s) {
  (Hr = !1), (ao = null), qp.apply(eh, arguments);
}
function nh(e, t, n, r, l, o, i, a, s) {
  if ((th.apply(this, arguments), Hr)) {
    if (Hr) {
      var u = ao;
      (Hr = !1), (ao = null);
    } else throw Error(P(198));
    so || ((so = !0), (Gi = u));
  }
}
function Fn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Zs(e) {
  if (Fn(e) !== e) throw Error(P(188));
}
function rh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Fn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Zs(l), e;
        if (o === r) return Zs(l), t;
        o = o.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function qc(e) {
  return (e = rh(e)), e !== null ? ed(e) : null;
}
function ed(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ed(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var td = et.unstable_scheduleCallback,
  qs = et.unstable_cancelCallback,
  lh = et.unstable_shouldYield,
  oh = et.unstable_requestPaint,
  ve = et.unstable_now,
  ih = et.unstable_getCurrentPriorityLevel,
  ba = et.unstable_ImmediatePriority,
  nd = et.unstable_UserBlockingPriority,
  uo = et.unstable_NormalPriority,
  ah = et.unstable_LowPriority,
  rd = et.unstable_IdlePriority,
  Do = null,
  Rt = null;
function sh(e) {
  if (Rt && typeof Rt.onCommitFiberRoot == "function")
    try {
      Rt.onCommitFiberRoot(Do, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xt = Math.clz32 ? Math.clz32 : dh,
  uh = Math.log,
  ch = Math.LN2;
function dh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((uh(e) / ch) | 0)) | 0;
}
var Dl = 64,
  Il = 4194304;
function $r(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function co(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = $r(a)) : ((o &= i), o !== 0 && (r = $r(o)));
  } else (i = n & ~l), i !== 0 ? (r = $r(i)) : o !== 0 && (r = $r(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function fh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ph(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - xt(o),
      a = 1 << i,
      s = l[i];
    s === -1
      ? (!(a & n) || a & r) && (l[i] = fh(a, t))
      : s <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Ki(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ld() {
  var e = Dl;
  return (Dl <<= 1), !(Dl & 4194240) && (Dl = 64), e;
}
function ai(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xt(t)),
    (e[t] = n);
}
function hh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - xt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Ba(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var ne = 0;
function od(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var id,
  $a,
  ad,
  sd,
  ud,
  Yi = !1,
  Fl = [],
  nn = null,
  rn = null,
  ln = null,
  rl = new Map(),
  ll = new Map(),
  Zt = [],
  mh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function eu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      rl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ll.delete(t.pointerId);
  }
}
function Lr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = kl(t)), t !== null && $a(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function gh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (nn = Lr(nn, e, t, n, r, l)), !0;
    case "dragenter":
      return (rn = Lr(rn, e, t, n, r, l)), !0;
    case "mouseover":
      return (ln = Lr(ln, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return rl.set(o, Lr(rl.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), ll.set(o, Lr(ll.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function cd(e) {
  var t = xn(e.target);
  if (t !== null) {
    var n = Fn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zc(n)), t !== null)) {
          (e.blockedOn = t),
            ud(e.priority, function () {
              ad(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Jl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ji(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Wi = r), n.target.dispatchEvent(r), (Wi = null);
    } else return (t = kl(n)), t !== null && $a(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function tu(e, t, n) {
  Jl(e) && n.delete(t);
}
function vh() {
  (Yi = !1),
    nn !== null && Jl(nn) && (nn = null),
    rn !== null && Jl(rn) && (rn = null),
    ln !== null && Jl(ln) && (ln = null),
    rl.forEach(tu),
    ll.forEach(tu);
}
function zr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Yi ||
      ((Yi = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, vh)));
}
function ol(e) {
  function t(l) {
    return zr(l, e);
  }
  if (0 < Fl.length) {
    zr(Fl[0], e);
    for (var n = 1; n < Fl.length; n++) {
      var r = Fl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    nn !== null && zr(nn, e),
      rn !== null && zr(rn, e),
      ln !== null && zr(ln, e),
      rl.forEach(t),
      ll.forEach(t),
      n = 0;
    n < Zt.length;
    n++
  )
    (r = Zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Zt.length && ((n = Zt[0]), n.blockedOn === null); )
    cd(n), n.blockedOn === null && Zt.shift();
}
var lr = bt.ReactCurrentBatchConfig,
  fo = !0;
function yh(e, t, n, r) {
  var l = ne,
    o = lr.transition;
  lr.transition = null;
  try {
    (ne = 1), Va(e, t, n, r);
  } finally {
    (ne = l), (lr.transition = o);
  }
}
function wh(e, t, n, r) {
  var l = ne,
    o = lr.transition;
  lr.transition = null;
  try {
    (ne = 4), Va(e, t, n, r);
  } finally {
    (ne = l), (lr.transition = o);
  }
}
function Va(e, t, n, r) {
  if (fo) {
    var l = Ji(e, t, n, r);
    if (l === null) vi(e, t, r, po, n), eu(e, r);
    else if (gh(l, e, t, n, r)) r.stopPropagation();
    else if ((eu(e, r), t & 4 && -1 < mh.indexOf(e))) {
      for (; l !== null; ) {
        var o = kl(l);
        if (
          (o !== null && id(o),
          (o = Ji(e, t, n, r)),
          o === null && vi(e, t, r, po, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else vi(e, t, r, null, n);
  }
}
var po = null;
function Ji(e, t, n, r) {
  if (((po = null), (e = Ua(r)), (e = xn(e)), e !== null))
    if (((t = Fn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (po = e), null;
}
function dd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ih()) {
        case ba:
          return 1;
        case nd:
          return 4;
        case uo:
        case ah:
          return 16;
        case rd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  Wa = null,
  Xl = null;
function fd() {
  if (Xl) return Xl;
  var e,
    t = Wa,
    n = t.length,
    r,
    l = "value" in en ? en.value : en.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Xl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Zl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ol() {
  return !0;
}
function nu() {
  return !1;
}
function nt(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ol
        : nu),
      (this.isPropagationStopped = nu),
      this
    );
  }
  return (
    he(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ol));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ol));
      },
      persist: function () {},
      isPersistent: Ol,
    }),
    t
  );
}
var mr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ha = nt(mr),
  Sl = he({}, mr, { view: 0, detail: 0 }),
  xh = nt(Sl),
  si,
  ui,
  jr,
  Io = he({}, Sl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Qa,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== jr &&
            (jr && e.type === "mousemove"
              ? ((si = e.screenX - jr.screenX), (ui = e.screenY - jr.screenY))
              : (ui = si = 0),
            (jr = e)),
          si);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ui;
    },
  }),
  ru = nt(Io),
  Sh = he({}, Io, { dataTransfer: 0 }),
  kh = nt(Sh),
  Eh = he({}, Sl, { relatedTarget: 0 }),
  ci = nt(Eh),
  Ch = he({}, mr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ph = nt(Ch),
  _h = he({}, mr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Rh = nt(_h),
  Nh = he({}, mr, { data: 0 }),
  lu = nt(Nh),
  Lh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  jh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Th(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jh[e]) ? !!t[e] : !1;
}
function Qa() {
  return Th;
}
var Mh = he({}, Sl, {
    key: function (e) {
      if (e.key) {
        var t = Lh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Zl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? zh[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qa,
    charCode: function (e) {
      return e.type === "keypress" ? Zl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Zl(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Dh = nt(Mh),
  Ih = he({}, Io, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ou = nt(Ih),
  Fh = he({}, Sl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qa,
  }),
  Oh = nt(Fh),
  Ah = he({}, mr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Uh = nt(Ah),
  bh = he({}, Io, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Bh = nt(bh),
  $h = [9, 13, 27, 32],
  Ga = Ft && "CompositionEvent" in window,
  Qr = null;
Ft && "documentMode" in document && (Qr = document.documentMode);
var Vh = Ft && "TextEvent" in window && !Qr,
  pd = Ft && (!Ga || (Qr && 8 < Qr && 11 >= Qr)),
  iu = " ",
  au = !1;
function hd(e, t) {
  switch (e) {
    case "keyup":
      return $h.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function md(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wn = !1;
function Wh(e, t) {
  switch (e) {
    case "compositionend":
      return md(t);
    case "keypress":
      return t.which !== 32 ? null : ((au = !0), iu);
    case "textInput":
      return (e = t.data), e === iu && au ? null : e;
    default:
      return null;
  }
}
function Hh(e, t) {
  if (Wn)
    return e === "compositionend" || (!Ga && hd(e, t))
      ? ((e = fd()), (Xl = Wa = en = null), (Wn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return pd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qh[e.type] : t === "textarea";
}
function gd(e, t, n, r) {
  Gc(r),
    (t = ho(t, "onChange")),
    0 < t.length &&
      ((n = new Ha("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Gr = null,
  il = null;
function Gh(e) {
  Rd(e, 0);
}
function Fo(e) {
  var t = Gn(e);
  if (bc(t)) return e;
}
function Kh(e, t) {
  if (e === "change") return t;
}
var vd = !1;
if (Ft) {
  var di;
  if (Ft) {
    var fi = "oninput" in document;
    if (!fi) {
      var uu = document.createElement("div");
      uu.setAttribute("oninput", "return;"),
        (fi = typeof uu.oninput == "function");
    }
    di = fi;
  } else di = !1;
  vd = di && (!document.documentMode || 9 < document.documentMode);
}
function cu() {
  Gr && (Gr.detachEvent("onpropertychange", yd), (il = Gr = null));
}
function yd(e) {
  if (e.propertyName === "value" && Fo(il)) {
    var t = [];
    gd(t, il, e, Ua(e)), Xc(Gh, t);
  }
}
function Yh(e, t, n) {
  e === "focusin"
    ? (cu(), (Gr = t), (il = n), Gr.attachEvent("onpropertychange", yd))
    : e === "focusout" && cu();
}
function Jh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Fo(il);
}
function Xh(e, t) {
  if (e === "click") return Fo(t);
}
function Zh(e, t) {
  if (e === "input" || e === "change") return Fo(t);
}
function qh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var kt = typeof Object.is == "function" ? Object.is : qh;
function al(e, t) {
  if (kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Ti.call(t, l) || !kt(e[l], t[l])) return !1;
  }
  return !0;
}
function du(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function fu(e, t) {
  var n = du(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = du(n);
  }
}
function wd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? wd(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function xd() {
  for (var e = window, t = io(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = io(e.document);
  }
  return t;
}
function Ka(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function em(e) {
  var t = xd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    wd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ka(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = fu(n, o));
        var i = fu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var tm = Ft && "documentMode" in document && 11 >= document.documentMode,
  Hn = null,
  Xi = null,
  Kr = null,
  Zi = !1;
function pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zi ||
    Hn == null ||
    Hn !== io(r) ||
    ((r = Hn),
    "selectionStart" in r && Ka(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Kr && al(Kr, r)) ||
      ((Kr = r),
      (r = ho(Xi, "onSelect")),
      0 < r.length &&
        ((t = new Ha("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Hn))));
}
function Al(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Qn = {
    animationend: Al("Animation", "AnimationEnd"),
    animationiteration: Al("Animation", "AnimationIteration"),
    animationstart: Al("Animation", "AnimationStart"),
    transitionend: Al("Transition", "TransitionEnd"),
  },
  pi = {},
  Sd = {};
Ft &&
  ((Sd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Qn.animationend.animation,
    delete Qn.animationiteration.animation,
    delete Qn.animationstart.animation),
  "TransitionEvent" in window || delete Qn.transitionend.transition);
function Oo(e) {
  if (pi[e]) return pi[e];
  if (!Qn[e]) return e;
  var t = Qn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Sd) return (pi[e] = t[n]);
  return e;
}
var kd = Oo("animationend"),
  Ed = Oo("animationiteration"),
  Cd = Oo("animationstart"),
  Pd = Oo("transitionend"),
  _d = new Map(),
  hu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function pn(e, t) {
  _d.set(e, t), In(t, [e]);
}
for (var hi = 0; hi < hu.length; hi++) {
  var mi = hu[hi],
    nm = mi.toLowerCase(),
    rm = mi[0].toUpperCase() + mi.slice(1);
  pn(nm, "on" + rm);
}
pn(kd, "onAnimationEnd");
pn(Ed, "onAnimationIteration");
pn(Cd, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(Pd, "onTransitionEnd");
ar("onMouseEnter", ["mouseout", "mouseover"]);
ar("onMouseLeave", ["mouseout", "mouseover"]);
ar("onPointerEnter", ["pointerout", "pointerover"]);
ar("onPointerLeave", ["pointerout", "pointerover"]);
In(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
In(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
In("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
In(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
In(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
In(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Vr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  lm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vr));
function mu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), nh(r, t, void 0, e), (e.currentTarget = null);
}
function Rd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== o && l.isPropagationStopped())) break e;
          mu(l, a, u), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          mu(l, a, u), (o = s);
        }
    }
  }
  if (so) throw ((e = Gi), (so = !1), (Gi = null), e);
}
function ie(e, t) {
  var n = t[ra];
  n === void 0 && (n = t[ra] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Nd(t, e, 2, !1), n.add(r));
}
function gi(e, t, n) {
  var r = 0;
  t && (r |= 4), Nd(n, e, r, t);
}
var Ul = "_reactListening" + Math.random().toString(36).slice(2);
function sl(e) {
  if (!e[Ul]) {
    (e[Ul] = !0),
      Ic.forEach(function (n) {
        n !== "selectionchange" && (lm.has(n) || gi(n, !1, e), gi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ul] || ((t[Ul] = !0), gi("selectionchange", !1, t));
  }
}
function Nd(e, t, n, r) {
  switch (dd(t)) {
    case 1:
      var l = yh;
      break;
    case 4:
      l = wh;
      break;
    default:
      l = Va;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Qi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
}
function vi(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = xn(a)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Xc(function () {
    var u = o,
      c = Ua(n),
      f = [];
    e: {
      var p = _d.get(e);
      if (p !== void 0) {
        var S = Ha,
          x = e;
        switch (e) {
          case "keypress":
            if (Zl(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Dh;
            break;
          case "focusin":
            (x = "focus"), (S = ci);
            break;
          case "focusout":
            (x = "blur"), (S = ci);
            break;
          case "beforeblur":
          case "afterblur":
            S = ci;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = ru;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = kh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Oh;
            break;
          case kd:
          case Ed:
          case Cd:
            S = Ph;
            break;
          case Pd:
            S = Uh;
            break;
          case "scroll":
            S = xh;
            break;
          case "wheel":
            S = Bh;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Rh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = ou;
        }
        var y = (t & 4) !== 0,
          R = !y && e === "scroll",
          h = y ? (p !== null ? p + "Capture" : null) : p;
        y = [];
        for (var d = u, m; d !== null; ) {
          m = d;
          var C = m.stateNode;
          if (
            (m.tag === 5 &&
              C !== null &&
              ((m = C),
              h !== null && ((C = nl(d, h)), C != null && y.push(ul(d, C, m)))),
            R)
          )
            break;
          d = d.return;
        }
        0 < y.length &&
          ((p = new S(p, x, null, n, c)), f.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Wi &&
            (x = n.relatedTarget || n.fromElement) &&
            (xn(x) || x[Ot]))
        )
          break e;
        if (
          (S || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          S
            ? ((x = n.relatedTarget || n.toElement),
              (S = u),
              (x = x ? xn(x) : null),
              x !== null &&
                ((R = Fn(x)), x !== R || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((S = null), (x = u)),
          S !== x)
        ) {
          if (
            ((y = ru),
            (C = "onMouseLeave"),
            (h = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = ou),
              (C = "onPointerLeave"),
              (h = "onPointerEnter"),
              (d = "pointer")),
            (R = S == null ? p : Gn(S)),
            (m = x == null ? p : Gn(x)),
            (p = new y(C, d + "leave", S, n, c)),
            (p.target = R),
            (p.relatedTarget = m),
            (C = null),
            xn(c) === u &&
              ((y = new y(h, d + "enter", x, n, c)),
              (y.target = m),
              (y.relatedTarget = R),
              (C = y)),
            (R = C),
            S && x)
          )
            t: {
              for (y = S, h = x, d = 0, m = y; m; m = bn(m)) d++;
              for (m = 0, C = h; C; C = bn(C)) m++;
              for (; 0 < d - m; ) (y = bn(y)), d--;
              for (; 0 < m - d; ) (h = bn(h)), m--;
              for (; d--; ) {
                if (y === h || (h !== null && y === h.alternate)) break t;
                (y = bn(y)), (h = bn(h));
              }
              y = null;
            }
          else y = null;
          S !== null && gu(f, p, S, y, !1),
            x !== null && R !== null && gu(f, R, x, y, !0);
        }
      }
      e: {
        if (
          ((p = u ? Gn(u) : window),
          (S = p.nodeName && p.nodeName.toLowerCase()),
          S === "select" || (S === "input" && p.type === "file"))
        )
          var z = Kh;
        else if (su(p))
          if (vd) z = Zh;
          else {
            z = Jh;
            var T = Yh;
          }
        else
          (S = p.nodeName) &&
            S.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (z = Xh);
        if (z && (z = z(e, u))) {
          gd(f, z, n, c);
          break e;
        }
        T && T(e, p, u),
          e === "focusout" &&
            (T = p._wrapperState) &&
            T.controlled &&
            p.type === "number" &&
            Ui(p, "number", p.value);
      }
      switch (((T = u ? Gn(u) : window), e)) {
        case "focusin":
          (su(T) || T.contentEditable === "true") &&
            ((Hn = T), (Xi = u), (Kr = null));
          break;
        case "focusout":
          Kr = Xi = Hn = null;
          break;
        case "mousedown":
          Zi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Zi = !1), pu(f, n, c);
          break;
        case "selectionchange":
          if (tm) break;
        case "keydown":
        case "keyup":
          pu(f, n, c);
      }
      var g;
      if (Ga)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Wn
          ? hd(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (pd &&
          n.locale !== "ko" &&
          (Wn || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Wn && (g = fd())
            : ((en = c),
              (Wa = "value" in en ? en.value : en.textContent),
              (Wn = !0))),
        (T = ho(u, j)),
        0 < T.length &&
          ((j = new lu(j, e, null, n, c)),
          f.push({ event: j, listeners: T }),
          g ? (j.data = g) : ((g = md(n)), g !== null && (j.data = g)))),
        (g = Vh ? Wh(e, n) : Hh(e, n)) &&
          ((u = ho(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new lu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = g)));
    }
    Rd(f, t);
  });
}
function ul(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ho(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = nl(e, n)),
      o != null && r.unshift(ul(e, o, l)),
      (o = nl(e, t)),
      o != null && r.push(ul(e, o, l))),
      (e = e.return);
  }
  return r;
}
function bn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function gu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      l
        ? ((s = nl(n, o)), s != null && i.unshift(ul(n, s, a)))
        : l || ((s = nl(n, o)), s != null && i.push(ul(n, s, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var om = /\r\n?/g,
  im = /\u0000|\uFFFD/g;
function vu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      om,
      `
`,
    )
    .replace(im, "");
}
function bl(e, t, n) {
  if (((t = vu(t)), vu(e) !== t && n)) throw Error(P(425));
}
function mo() {}
var qi = null,
  ea = null;
function ta(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var na = typeof setTimeout == "function" ? setTimeout : void 0,
  am = typeof clearTimeout == "function" ? clearTimeout : void 0,
  yu = typeof Promise == "function" ? Promise : void 0,
  sm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof yu < "u"
        ? function (e) {
            return yu.resolve(null).then(e).catch(um);
          }
        : na;
function um(e) {
  setTimeout(function () {
    throw e;
  });
}
function yi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), ol(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  ol(t);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function wu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gr = Math.random().toString(36).slice(2),
  _t = "__reactFiber$" + gr,
  cl = "__reactProps$" + gr,
  Ot = "__reactContainer$" + gr,
  ra = "__reactEvents$" + gr,
  cm = "__reactListeners$" + gr,
  dm = "__reactHandles$" + gr;
function xn(e) {
  var t = e[_t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ot] || n[_t])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = wu(e); e !== null; ) {
          if ((n = e[_t])) return n;
          e = wu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function kl(e) {
  return (
    (e = e[_t] || e[Ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Gn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Ao(e) {
  return e[cl] || null;
}
var la = [],
  Kn = -1;
function hn(e) {
  return { current: e };
}
function ae(e) {
  0 > Kn || ((e.current = la[Kn]), (la[Kn] = null), Kn--);
}
function le(e, t) {
  Kn++, (la[Kn] = e.current), (e.current = t);
}
var fn = {},
  De = hn(fn),
  We = hn(!1),
  Nn = fn;
function sr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function He(e) {
  return (e = e.childContextTypes), e != null;
}
function go() {
  ae(We), ae(De);
}
function xu(e, t, n) {
  if (De.current !== fn) throw Error(P(168));
  le(De, t), le(We, n);
}
function Ld(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(P(108, Yp(e) || "Unknown", l));
  return he({}, n, r);
}
function vo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fn),
    (Nn = De.current),
    le(De, e),
    le(We, We.current),
    !0
  );
}
function Su(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = Ld(e, t, Nn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(We),
      ae(De),
      le(De, e))
    : ae(We),
    le(We, n);
}
var jt = null,
  Uo = !1,
  wi = !1;
function zd(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function fm(e) {
  (Uo = !0), zd(e);
}
function mn() {
  if (!wi && jt !== null) {
    wi = !0;
    var e = 0,
      t = ne;
    try {
      var n = jt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (jt = null), (Uo = !1);
    } catch (l) {
      throw (jt !== null && (jt = jt.slice(e + 1)), td(ba, mn), l);
    } finally {
      (ne = t), (wi = !1);
    }
  }
  return null;
}
var Yn = [],
  Jn = 0,
  yo = null,
  wo = 0,
  it = [],
  at = 0,
  Ln = null,
  Tt = 1,
  Mt = "";
function yn(e, t) {
  (Yn[Jn++] = wo), (Yn[Jn++] = yo), (yo = e), (wo = t);
}
function jd(e, t, n) {
  (it[at++] = Tt), (it[at++] = Mt), (it[at++] = Ln), (Ln = e);
  var r = Tt;
  e = Mt;
  var l = 32 - xt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - xt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Tt = (1 << (32 - xt(t) + l)) | (n << l) | r),
      (Mt = o + e);
  } else (Tt = (1 << o) | (n << l) | r), (Mt = e);
}
function Ya(e) {
  e.return !== null && (yn(e, 1), jd(e, 1, 0));
}
function Ja(e) {
  for (; e === yo; )
    (yo = Yn[--Jn]), (Yn[Jn] = null), (wo = Yn[--Jn]), (Yn[Jn] = null);
  for (; e === Ln; )
    (Ln = it[--at]),
      (it[at] = null),
      (Mt = it[--at]),
      (it[at] = null),
      (Tt = it[--at]),
      (it[at] = null);
}
var qe = null,
  Ze = null,
  ce = !1,
  wt = null;
function Td(e, t) {
  var n = ut(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ku(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (qe = e), (Ze = on(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (qe = e), (Ze = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ln !== null ? { id: Tt, overflow: Mt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (qe = e),
            (Ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function oa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ia(e) {
  if (ce) {
    var t = Ze;
    if (t) {
      var n = t;
      if (!ku(e, t)) {
        if (oa(e)) throw Error(P(418));
        t = on(n.nextSibling);
        var r = qe;
        t && ku(e, t)
          ? Td(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ce = !1), (qe = e));
      }
    } else {
      if (oa(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (ce = !1), (qe = e);
    }
  }
}
function Eu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qe = e;
}
function Bl(e) {
  if (e !== qe) return !1;
  if (!ce) return Eu(e), (ce = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ta(e.type, e.memoizedProps))),
    t && (t = Ze))
  ) {
    if (oa(e)) throw (Md(), Error(P(418)));
    for (; t; ) Td(e, t), (t = on(t.nextSibling));
  }
  if ((Eu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ze = on(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ze = null;
    }
  } else Ze = qe ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function Md() {
  for (var e = Ze; e; ) e = on(e.nextSibling);
}
function ur() {
  (Ze = qe = null), (ce = !1);
}
function Xa(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
var pm = bt.ReactCurrentBatchConfig;
function Tr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function $l(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Cu(e) {
  var t = e._init;
  return t(e._payload);
}
function Dd(e) {
  function t(h, d) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [d]), (h.flags |= 16)) : m.push(d);
    }
  }
  function n(h, d) {
    if (!e) return null;
    for (; d !== null; ) t(h, d), (d = d.sibling);
    return null;
  }
  function r(h, d) {
    for (h = new Map(); d !== null; )
      d.key !== null ? h.set(d.key, d) : h.set(d.index, d), (d = d.sibling);
    return h;
  }
  function l(h, d) {
    return (h = cn(h, d)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, d, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((h.flags |= 2), d) : m)
            : ((h.flags |= 2), d))
        : ((h.flags |= 1048576), d)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, d, m, C) {
    return d === null || d.tag !== 6
      ? ((d = _i(m, h.mode, C)), (d.return = h), d)
      : ((d = l(d, m)), (d.return = h), d);
  }
  function s(h, d, m, C) {
    var z = m.type;
    return z === Vn
      ? c(h, d, m.props.children, C, m.key)
      : d !== null &&
          (d.elementType === z ||
            (typeof z == "object" &&
              z !== null &&
              z.$$typeof === Jt &&
              Cu(z) === d.type))
        ? ((C = l(d, m.props)), (C.ref = Tr(h, d, m)), (C.return = h), C)
        : ((C = oo(m.type, m.key, m.props, null, h.mode, C)),
          (C.ref = Tr(h, d, m)),
          (C.return = h),
          C);
  }
  function u(h, d, m, C) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = Ri(m, h.mode, C)), (d.return = h), d)
      : ((d = l(d, m.children || [])), (d.return = h), d);
  }
  function c(h, d, m, C, z) {
    return d === null || d.tag !== 7
      ? ((d = Rn(m, h.mode, C, z)), (d.return = h), d)
      : ((d = l(d, m)), (d.return = h), d);
  }
  function f(h, d, m) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = _i("" + d, h.mode, m)), (d.return = h), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case jl:
          return (
            (m = oo(d.type, d.key, d.props, null, h.mode, m)),
            (m.ref = Tr(h, null, d)),
            (m.return = h),
            m
          );
        case $n:
          return (d = Ri(d, h.mode, m)), (d.return = h), d;
        case Jt:
          var C = d._init;
          return f(h, C(d._payload), m);
      }
      if (Br(d) || Rr(d))
        return (d = Rn(d, h.mode, m, null)), (d.return = h), d;
      $l(h, d);
    }
    return null;
  }
  function p(h, d, m, C) {
    var z = d !== null ? d.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return z !== null ? null : a(h, d, "" + m, C);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case jl:
          return m.key === z ? s(h, d, m, C) : null;
        case $n:
          return m.key === z ? u(h, d, m, C) : null;
        case Jt:
          return (z = m._init), p(h, d, z(m._payload), C);
      }
      if (Br(m) || Rr(m)) return z !== null ? null : c(h, d, m, C, null);
      $l(h, m);
    }
    return null;
  }
  function S(h, d, m, C, z) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (h = h.get(m) || null), a(d, h, "" + C, z);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case jl:
          return (h = h.get(C.key === null ? m : C.key) || null), s(d, h, C, z);
        case $n:
          return (h = h.get(C.key === null ? m : C.key) || null), u(d, h, C, z);
        case Jt:
          var T = C._init;
          return S(h, d, m, T(C._payload), z);
      }
      if (Br(C) || Rr(C)) return (h = h.get(m) || null), c(d, h, C, z, null);
      $l(d, C);
    }
    return null;
  }
  function x(h, d, m, C) {
    for (
      var z = null, T = null, g = d, j = (d = 0), O = null;
      g !== null && j < m.length;
      j++
    ) {
      g.index > j ? ((O = g), (g = null)) : (O = g.sibling);
      var M = p(h, g, m[j], C);
      if (M === null) {
        g === null && (g = O);
        break;
      }
      e && g && M.alternate === null && t(h, g),
        (d = o(M, d, j)),
        T === null ? (z = M) : (T.sibling = M),
        (T = M),
        (g = O);
    }
    if (j === m.length) return n(h, g), ce && yn(h, j), z;
    if (g === null) {
      for (; j < m.length; j++)
        (g = f(h, m[j], C)),
          g !== null &&
            ((d = o(g, d, j)), T === null ? (z = g) : (T.sibling = g), (T = g));
      return ce && yn(h, j), z;
    }
    for (g = r(h, g); j < m.length; j++)
      (O = S(g, h, j, m[j], C)),
        O !== null &&
          (e && O.alternate !== null && g.delete(O.key === null ? j : O.key),
          (d = o(O, d, j)),
          T === null ? (z = O) : (T.sibling = O),
          (T = O));
    return (
      e &&
        g.forEach(function (K) {
          return t(h, K);
        }),
      ce && yn(h, j),
      z
    );
  }
  function y(h, d, m, C) {
    var z = Rr(m);
    if (typeof z != "function") throw Error(P(150));
    if (((m = z.call(m)), m == null)) throw Error(P(151));
    for (
      var T = (z = null), g = d, j = (d = 0), O = null, M = m.next();
      g !== null && !M.done;
      j++, M = m.next()
    ) {
      g.index > j ? ((O = g), (g = null)) : (O = g.sibling);
      var K = p(h, g, M.value, C);
      if (K === null) {
        g === null && (g = O);
        break;
      }
      e && g && K.alternate === null && t(h, g),
        (d = o(K, d, j)),
        T === null ? (z = K) : (T.sibling = K),
        (T = K),
        (g = O);
    }
    if (M.done) return n(h, g), ce && yn(h, j), z;
    if (g === null) {
      for (; !M.done; j++, M = m.next())
        (M = f(h, M.value, C)),
          M !== null &&
            ((d = o(M, d, j)), T === null ? (z = M) : (T.sibling = M), (T = M));
      return ce && yn(h, j), z;
    }
    for (g = r(h, g); !M.done; j++, M = m.next())
      (M = S(g, h, j, M.value, C)),
        M !== null &&
          (e && M.alternate !== null && g.delete(M.key === null ? j : M.key),
          (d = o(M, d, j)),
          T === null ? (z = M) : (T.sibling = M),
          (T = M));
    return (
      e &&
        g.forEach(function (B) {
          return t(h, B);
        }),
      ce && yn(h, j),
      z
    );
  }
  function R(h, d, m, C) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Vn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case jl:
          e: {
            for (var z = m.key, T = d; T !== null; ) {
              if (T.key === z) {
                if (((z = m.type), z === Vn)) {
                  if (T.tag === 7) {
                    n(h, T.sibling),
                      (d = l(T, m.props.children)),
                      (d.return = h),
                      (h = d);
                    break e;
                  }
                } else if (
                  T.elementType === z ||
                  (typeof z == "object" &&
                    z !== null &&
                    z.$$typeof === Jt &&
                    Cu(z) === T.type)
                ) {
                  n(h, T.sibling),
                    (d = l(T, m.props)),
                    (d.ref = Tr(h, T, m)),
                    (d.return = h),
                    (h = d);
                  break e;
                }
                n(h, T);
                break;
              } else t(h, T);
              T = T.sibling;
            }
            m.type === Vn
              ? ((d = Rn(m.props.children, h.mode, C, m.key)),
                (d.return = h),
                (h = d))
              : ((C = oo(m.type, m.key, m.props, null, h.mode, C)),
                (C.ref = Tr(h, d, m)),
                (C.return = h),
                (h = C));
          }
          return i(h);
        case $n:
          e: {
            for (T = m.key; d !== null; ) {
              if (d.key === T)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  n(h, d.sibling),
                    (d = l(d, m.children || [])),
                    (d.return = h),
                    (h = d);
                  break e;
                } else {
                  n(h, d);
                  break;
                }
              else t(h, d);
              d = d.sibling;
            }
            (d = Ri(m, h.mode, C)), (d.return = h), (h = d);
          }
          return i(h);
        case Jt:
          return (T = m._init), R(h, d, T(m._payload), C);
      }
      if (Br(m)) return x(h, d, m, C);
      if (Rr(m)) return y(h, d, m, C);
      $l(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        d !== null && d.tag === 6
          ? (n(h, d.sibling), (d = l(d, m)), (d.return = h), (h = d))
          : (n(h, d), (d = _i(m, h.mode, C)), (d.return = h), (h = d)),
        i(h))
      : n(h, d);
  }
  return R;
}
var cr = Dd(!0),
  Id = Dd(!1),
  xo = hn(null),
  So = null,
  Xn = null,
  Za = null;
function qa() {
  Za = Xn = So = null;
}
function es(e) {
  var t = xo.current;
  ae(xo), (e._currentValue = t);
}
function aa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function or(e, t) {
  (So = e),
    (Za = Xn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ve = !0), (e.firstContext = null));
}
function dt(e) {
  var t = e._currentValue;
  if (Za !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xn === null)) {
      if (So === null) throw Error(P(308));
      (Xn = e), (So.dependencies = { lanes: 0, firstContext: e });
    } else Xn = Xn.next = e;
  return t;
}
var Sn = null;
function ts(e) {
  Sn === null ? (Sn = [e]) : Sn.push(e);
}
function Fd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), ts(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    At(e, r)
  );
}
function At(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Xt = !1;
function ns(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Od(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), te & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      At(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), ts(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    At(e, n)
  );
}
function ql(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ba(e, n);
  }
}
function Pu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ko(e, t, n, r) {
  var l = e.updateQueue;
  Xt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), i === null ? (o = u) : (i.next = u), (i = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== i &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var f = l.baseState;
    (i = 0), (c = u = s = null), (a = o);
    do {
      var p = a.lane,
        S = a.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: S,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            y = a;
          switch (((p = t), (S = n), y.tag)) {
            case 1:
              if (((x = y.payload), typeof x == "function")) {
                f = x.call(S, f, p);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = y.payload),
                (p = typeof x == "function" ? x.call(S, f, p) : x),
                p == null)
              )
                break e;
              f = he({}, f, p);
              break e;
            case 2:
              Xt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [a]) : p.push(a));
      } else
        (S = {
          eventTime: S,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = S), (s = f)) : (c = c.next = S),
          (i |= p);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (s = f),
      (l.baseState = s),
      (l.firstBaseUpdate = u),
      (l.lastBaseUpdate = c),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (jn |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function _u(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(P(191, l));
        l.call(r);
      }
    }
}
var El = {},
  Nt = hn(El),
  dl = hn(El),
  fl = hn(El);
function kn(e) {
  if (e === El) throw Error(P(174));
  return e;
}
function rs(e, t) {
  switch ((le(fl, t), le(dl, e), le(Nt, El), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Bi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Bi(t, e));
  }
  ae(Nt), le(Nt, t);
}
function dr() {
  ae(Nt), ae(dl), ae(fl);
}
function Ad(e) {
  kn(fl.current);
  var t = kn(Nt.current),
    n = Bi(t, e.type);
  t !== n && (le(dl, e), le(Nt, n));
}
function ls(e) {
  dl.current === e && (ae(Nt), ae(dl));
}
var fe = hn(0);
function Eo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var xi = [];
function os() {
  for (var e = 0; e < xi.length; e++)
    xi[e]._workInProgressVersionPrimary = null;
  xi.length = 0;
}
var eo = bt.ReactCurrentDispatcher,
  Si = bt.ReactCurrentBatchConfig,
  zn = 0,
  pe = null,
  xe = null,
  Ee = null,
  Co = !1,
  Yr = !1,
  pl = 0,
  hm = 0;
function je() {
  throw Error(P(321));
}
function is(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!kt(e[n], t[n])) return !1;
  return !0;
}
function as(e, t, n, r, l, o) {
  if (
    ((zn = o),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (eo.current = e === null || e.memoizedState === null ? ym : wm),
    (e = n(r, l)),
    Yr)
  ) {
    o = 0;
    do {
      if (((Yr = !1), (pl = 0), 25 <= o)) throw Error(P(301));
      (o += 1),
        (Ee = xe = null),
        (t.updateQueue = null),
        (eo.current = xm),
        (e = n(r, l));
    } while (Yr);
  }
  if (
    ((eo.current = Po),
    (t = xe !== null && xe.next !== null),
    (zn = 0),
    (Ee = xe = pe = null),
    (Co = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function ss() {
  var e = pl !== 0;
  return (pl = 0), e;
}
function Pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ee === null ? (pe.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee;
}
function ft() {
  if (xe === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = Ee === null ? pe.memoizedState : Ee.next;
  if (t !== null) (Ee = t), (xe = e);
  else {
    if (e === null) throw Error(P(310));
    (xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null,
      }),
      Ee === null ? (pe.memoizedState = Ee = e) : (Ee = Ee.next = e);
  }
  return Ee;
}
function hl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ki(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = xe,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      s = null,
      u = o;
    do {
      var c = u.lane;
      if ((zn & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = f), (i = r)) : (s = s.next = f),
          (pe.lanes |= c),
          (jn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    s === null ? (i = r) : (s.next = a),
      kt(r, t.memoizedState) || (Ve = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (pe.lanes |= o), (jn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ei(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    kt(o, t.memoizedState) || (Ve = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ud() {}
function bd(e, t) {
  var n = pe,
    r = ft(),
    l = t(),
    o = !kt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ve = !0)),
    (r = r.queue),
    us(Vd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ee !== null && Ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ml(9, $d.bind(null, n, r, l, t), void 0, null),
      Ce === null)
    )
      throw Error(P(349));
    zn & 30 || Bd(n, t, l);
  }
  return l;
}
function Bd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $d(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wd(t) && Hd(e);
}
function Vd(e, t, n) {
  return n(function () {
    Wd(t) && Hd(e);
  });
}
function Wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !kt(e, n);
  } catch {
    return !0;
  }
}
function Hd(e) {
  var t = At(e, 1);
  t !== null && St(t, e, 1, -1);
}
function Ru(e) {
  var t = Pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = vm.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function ml(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Qd() {
  return ft().memoizedState;
}
function to(e, t, n, r) {
  var l = Pt();
  (pe.flags |= e),
    (l.memoizedState = ml(1 | t, n, void 0, r === void 0 ? null : r));
}
function bo(e, t, n, r) {
  var l = ft();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (xe !== null) {
    var i = xe.memoizedState;
    if (((o = i.destroy), r !== null && is(r, i.deps))) {
      l.memoizedState = ml(t, n, o, r);
      return;
    }
  }
  (pe.flags |= e), (l.memoizedState = ml(1 | t, n, o, r));
}
function Nu(e, t) {
  return to(8390656, 8, e, t);
}
function us(e, t) {
  return bo(2048, 8, e, t);
}
function Gd(e, t) {
  return bo(4, 2, e, t);
}
function Kd(e, t) {
  return bo(4, 4, e, t);
}
function Yd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Jd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bo(4, 4, Yd.bind(null, t, e), n)
  );
}
function cs() {}
function Xd(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && is(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zd(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && is(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function qd(e, t, n) {
  return zn & 21
    ? (kt(n, t) || ((n = ld()), (pe.lanes |= n), (jn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ve = !0)), (e.memoizedState = n));
}
function mm(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Si.transition;
  Si.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (Si.transition = r);
  }
}
function ef() {
  return ft().memoizedState;
}
function gm(e, t, n) {
  var r = un(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    tf(e))
  )
    nf(t, n);
  else if (((n = Fd(e, t, n, r)), n !== null)) {
    var l = Ae();
    St(n, e, r, l), rf(n, t, r);
  }
}
function vm(e, t, n) {
  var r = un(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (tf(e)) nf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), kt(a, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), ts(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Fd(e, t, l, r)),
      n !== null && ((l = Ae()), St(n, e, r, l), rf(n, t, r));
  }
}
function tf(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function nf(e, t) {
  Yr = Co = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function rf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ba(e, n);
  }
}
var Po = {
    readContext: dt,
    useCallback: je,
    useContext: je,
    useEffect: je,
    useImperativeHandle: je,
    useInsertionEffect: je,
    useLayoutEffect: je,
    useMemo: je,
    useReducer: je,
    useRef: je,
    useState: je,
    useDebugValue: je,
    useDeferredValue: je,
    useTransition: je,
    useMutableSource: je,
    useSyncExternalStore: je,
    useId: je,
    unstable_isNewReconciler: !1,
  },
  ym = {
    readContext: dt,
    useCallback: function (e, t) {
      return (Pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: dt,
    useEffect: Nu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        to(4194308, 4, Yd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return to(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return to(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Pt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = gm.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ru,
    useDebugValue: cs,
    useDeferredValue: function (e) {
      return (Pt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ru(!1),
        t = e[0];
      return (e = mm.bind(null, e[1])), (Pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        l = Pt();
      if (ce) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(P(349));
        zn & 30 || Bd(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Nu(Vd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ml(9, $d.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Pt(),
        t = Ce.identifierPrefix;
      if (ce) {
        var n = Mt,
          r = Tt;
        (n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = pl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = hm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  wm = {
    readContext: dt,
    useCallback: Xd,
    useContext: dt,
    useEffect: us,
    useImperativeHandle: Jd,
    useInsertionEffect: Gd,
    useLayoutEffect: Kd,
    useMemo: Zd,
    useReducer: ki,
    useRef: Qd,
    useState: function () {
      return ki(hl);
    },
    useDebugValue: cs,
    useDeferredValue: function (e) {
      var t = ft();
      return qd(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = ki(hl)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Ud,
    useSyncExternalStore: bd,
    useId: ef,
    unstable_isNewReconciler: !1,
  },
  xm = {
    readContext: dt,
    useCallback: Xd,
    useContext: dt,
    useEffect: us,
    useImperativeHandle: Jd,
    useInsertionEffect: Gd,
    useLayoutEffect: Kd,
    useMemo: Zd,
    useReducer: Ei,
    useRef: Qd,
    useState: function () {
      return Ei(hl);
    },
    useDebugValue: cs,
    useDeferredValue: function (e) {
      var t = ft();
      return xe === null ? (t.memoizedState = e) : qd(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ei(hl)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Ud,
    useSyncExternalStore: bd,
    useId: ef,
    unstable_isNewReconciler: !1,
  };
function gt(e, t) {
  if (e && e.defaultProps) {
    (t = he({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function sa(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : he({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Fn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      l = un(e),
      o = Dt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = an(e, o, l)),
      t !== null && (St(t, e, l, r), ql(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      l = un(e),
      o = Dt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = an(e, o, l)),
      t !== null && (St(t, e, l, r), ql(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = un(e),
      l = Dt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = an(e, l, r)),
      t !== null && (St(t, e, r, n), ql(t, e, r));
  },
};
function Lu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !al(n, r) || !al(l, o)
        : !0
  );
}
function lf(e, t, n) {
  var r = !1,
    l = fn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = dt(o))
      : ((l = He(t) ? Nn : De.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? sr(e, l) : fn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Bo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function zu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Bo.enqueueReplaceState(t, t.state, null);
}
function ua(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ns(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = dt(o))
    : ((o = He(t) ? Nn : De.current), (l.context = sr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (sa(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Bo.enqueueReplaceState(l, l.state, null),
      ko(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function fr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Kp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Ci(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ca(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Sm = typeof WeakMap == "function" ? WeakMap : Map;
function of(e, t, n) {
  (n = Dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ro || ((Ro = !0), (xa = r)), ca(e, t);
    }),
    n
  );
}
function af(e, t, n) {
  (n = Dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ca(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ca(e, t),
          typeof r != "function" &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function ju(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Im.bind(null, e, t, n)), t.then(e, e));
}
function Tu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Mu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Dt(-1, 1)), (t.tag = 2), an(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var km = bt.ReactCurrentOwner,
  Ve = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? Id(t, null, n, r) : cr(t, e.child, n, r);
}
function Du(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    or(t, l),
    (r = as(e, t, n, r, o, l)),
    (n = ss()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ut(e, t, l))
      : (ce && n && Ya(t), (t.flags |= 1), Oe(e, t, r, l), t.child)
  );
}
function Iu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ys(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), sf(e, t, o, r, l))
      : ((e = oo(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : al), n(i, r) && e.ref === t.ref)
    )
      return Ut(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = cn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (al(o, r) && e.ref === t.ref)
      if (((Ve = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ve = !0);
      else return (t.lanes = e.lanes), Ut(e, t, l);
  }
  return da(e, t, n, r, l);
}
function uf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(qn, Xe),
        (Xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(qn, Xe),
          (Xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        le(qn, Xe),
        (Xe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(qn, Xe),
      (Xe |= r);
  return Oe(e, t, l, n), t.child;
}
function cf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function da(e, t, n, r, l) {
  var o = He(n) ? Nn : De.current;
  return (
    (o = sr(t, o)),
    or(t, l),
    (n = as(e, t, n, r, o, l)),
    (r = ss()),
    e !== null && !Ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ut(e, t, l))
      : (ce && r && Ya(t), (t.flags |= 1), Oe(e, t, n, l), t.child)
  );
}
function Fu(e, t, n, r, l) {
  if (He(n)) {
    var o = !0;
    vo(t);
  } else o = !1;
  if ((or(t, l), t.stateNode === null))
    no(e, t), lf(t, n, r), ua(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var s = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = dt(u))
      : ((u = He(n) ? Nn : De.current), (u = sr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && zu(t, i, r, u)),
      (Xt = !1);
    var p = t.memoizedState;
    (i.state = p),
      ko(t, r, i, l),
      (s = t.memoizedState),
      a !== r || p !== s || We.current || Xt
        ? (typeof c == "function" && (sa(t, n, c, r), (s = t.memoizedState)),
          (a = Xt || Lu(t, n, a, r, p, s, u))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Od(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : gt(t.type, a)),
      (i.props = u),
      (f = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = dt(s))
        : ((s = He(n) ? Nn : De.current), (s = sr(t, s)));
    var S = n.getDerivedStateFromProps;
    (c =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== f || p !== s) && zu(t, i, r, s)),
      (Xt = !1),
      (p = t.memoizedState),
      (i.state = p),
      ko(t, r, i, l);
    var x = t.memoizedState;
    a !== f || p !== x || We.current || Xt
      ? (typeof S == "function" && (sa(t, n, S, r), (x = t.memoizedState)),
        (u = Xt || Lu(t, n, u, r, p, x, s) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = s),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return fa(e, t, n, r, o, l);
}
function fa(e, t, n, r, l, o) {
  cf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Su(t, n, !1), Ut(e, t, o);
  (r = t.stateNode), (km.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = cr(t, e.child, null, o)), (t.child = cr(t, null, a, o)))
      : Oe(e, t, a, o),
    (t.memoizedState = r.state),
    l && Su(t, n, !0),
    t.child
  );
}
function df(e) {
  var t = e.stateNode;
  t.pendingContext
    ? xu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && xu(e, t.context, !1),
    rs(e, t.containerInfo);
}
function Ou(e, t, n, r, l) {
  return ur(), Xa(l), (t.flags |= 256), Oe(e, t, n, r), t.child;
}
var pa = { dehydrated: null, treeContext: null, retryLane: 0 };
function ha(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ff(e, t, n) {
  var r = t.pendingProps,
    l = fe.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    le(fe, l & 1),
    e === null)
  )
    return (
      ia(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Wo(i, r, 0, null)),
              (e = Rn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ha(n)),
              (t.memoizedState = pa),
              e)
            : ds(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Em(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = cn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = cn(a, o)) : ((o = Rn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ha(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = pa),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = cn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ds(e, t) {
  return (
    (t = Wo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vl(e, t, n, r) {
  return (
    r !== null && Xa(r),
    cr(t, e.child, null, n),
    (e = ds(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Em(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ci(Error(P(422)))), Vl(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Wo({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Rn(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && cr(t, e.child, null, i),
          (t.child.memoizedState = ha(i)),
          (t.memoizedState = pa),
          o);
  if (!(t.mode & 1)) return Vl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(P(419))), (r = Ci(o, r, void 0)), Vl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Ve || a)) {
    if (((r = Ce), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), At(e, l), St(r, e, l, -1));
    }
    return vs(), (r = Ci(Error(P(421)))), Vl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Fm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ze = on(l.nextSibling)),
      (qe = t),
      (ce = !0),
      (wt = null),
      e !== null &&
        ((it[at++] = Tt),
        (it[at++] = Mt),
        (it[at++] = Ln),
        (Tt = e.id),
        (Mt = e.overflow),
        (Ln = t)),
      (t = ds(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Au(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), aa(e.return, t, n);
}
function Pi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function pf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Oe(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Au(e, n, t);
        else if (e.tag === 19) Au(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((le(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Eo(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Pi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Eo(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Pi(t, !0, n, null, o);
        break;
      case "together":
        Pi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function no(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ut(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = cn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Cm(e, t, n) {
  switch (t.tag) {
    case 3:
      df(t), ur();
      break;
    case 5:
      Ad(t);
      break;
    case 1:
      He(t.type) && vo(t);
      break;
    case 4:
      rs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      le(xo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? ff(e, t, n)
            : (le(fe, fe.current & 1),
              (e = Ut(e, t, n)),
              e !== null ? e.sibling : null);
      le(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return pf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        le(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), uf(e, t, n);
  }
  return Ut(e, t, n);
}
var hf, ma, mf, gf;
hf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ma = function () {};
mf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), kn(Nt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Oi(e, l)), (r = Oi(e, r)), (o = []);
        break;
      case "select":
        (l = he({}, l, { value: void 0 })),
          (r = he({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = bi(e, l)), (r = bi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = mo);
    }
    $i(n, r);
    var i;
    n = null;
    for (u in l)
      if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === "style") {
          var a = l[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (el.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = l != null ? l[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                a[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (o = o || []).push(u, s))
            : u === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (o = o || []).push(u, "" + s)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (el.hasOwnProperty(u)
                  ? (s != null && u === "onScroll" && ie("scroll", e),
                    o || a === s || (o = []))
                  : (o = o || []).push(u, s));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
gf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mr(e, t) {
  if (!ce)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Pm(e, t, n) {
  var r = t.pendingProps;
  switch ((Ja(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Te(t), null;
    case 1:
      return He(t.type) && go(), Te(t), null;
    case 3:
      return (
        (r = t.stateNode),
        dr(),
        ae(We),
        ae(De),
        os(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Bl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), wt !== null && (Ea(wt), (wt = null)))),
        ma(e, t),
        Te(t),
        null
      );
    case 5:
      ls(t);
      var l = kn(fl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Te(t), null;
        }
        if (((e = kn(Nt.current)), Bl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[_t] = t), (r[cl] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ie("cancel", r), ie("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ie("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Vr.length; l++) ie(Vr[l], r);
              break;
            case "source":
              ie("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ie("error", r), ie("load", r);
              break;
            case "details":
              ie("toggle", r);
              break;
            case "input":
              Gs(r, o), ie("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ie("invalid", r);
              break;
            case "textarea":
              Ys(r, o), ie("invalid", r);
          }
          $i(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      bl(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      bl(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : el.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  ie("scroll", r);
            }
          switch (n) {
            case "input":
              Tl(r), Ks(r, o, !0);
              break;
            case "textarea":
              Tl(r), Js(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = mo);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[_t] = t),
            (e[cl] = r),
            hf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Vi(n, r)), n)) {
              case "dialog":
                ie("cancel", e), ie("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ie("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Vr.length; l++) ie(Vr[l], e);
                l = r;
                break;
              case "source":
                ie("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ie("error", e), ie("load", e), (l = r);
                break;
              case "details":
                ie("toggle", e), (l = r);
                break;
              case "input":
                Gs(e, r), (l = Oi(e, r)), ie("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = he({}, r, { value: void 0 })),
                  ie("invalid", e);
                break;
              case "textarea":
                Ys(e, r), (l = bi(e, r)), ie("invalid", e);
                break;
              default:
                l = r;
            }
            $i(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var s = a[o];
                o === "style"
                  ? Qc(e, s)
                  : o === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Wc(e, s))
                    : o === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && tl(e, s)
                        : typeof s == "number" && tl(e, "" + s)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (el.hasOwnProperty(o)
                          ? s != null && o === "onScroll" && ie("scroll", e)
                          : s != null && Ia(e, o, s, i));
              }
            switch (n) {
              case "input":
                Tl(e), Ks(e, r, !1);
                break;
              case "textarea":
                Tl(e), Js(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? tr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      tr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = mo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) gf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = kn(fl.current)), kn(Nt.current), Bl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[_t] = t),
            (o = r.nodeValue !== n) && ((e = qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                bl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  bl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[_t] = t),
            (t.stateNode = r);
      }
      return Te(t), null;
    case 13:
      if (
        (ae(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ce && Ze !== null && t.mode & 1 && !(t.flags & 128))
          Md(), ur(), (t.flags |= 98560), (o = !1);
        else if (((o = Bl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(P(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(P(317));
            o[_t] = t;
          } else
            ur(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Te(t), (o = !1);
        } else wt !== null && (Ea(wt), (wt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? Se === 0 && (Se = 3) : vs())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        dr(), ma(e, t), e === null && sl(t.stateNode.containerInfo), Te(t), null
      );
    case 10:
      return es(t.type._context), Te(t), null;
    case 17:
      return He(t.type) && go(), Te(t), null;
    case 19:
      if ((ae(fe), (o = t.memoizedState), o === null)) return Te(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Mr(o, !1);
        else {
          if (Se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Eo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Mr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return le(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ve() > pr &&
            ((t.flags |= 128), (r = !0), Mr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Eo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Mr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !ce)
            )
              return Te(t), null;
          } else
            2 * ve() - o.renderingStartTime > pr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Mr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ve()),
          (t.sibling = null),
          (n = fe.current),
          le(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Te(t), null);
    case 22:
    case 23:
      return (
        gs(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Xe & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function _m(e, t) {
  switch ((Ja(t), t.tag)) {
    case 1:
      return (
        He(t.type) && go(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dr(),
        ae(We),
        ae(De),
        os(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ls(t), null;
    case 13:
      if (
        (ae(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        ur();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(fe), null;
    case 4:
      return dr(), null;
    case 10:
      return es(t.type._context), null;
    case 22:
    case 23:
      return gs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wl = !1,
  Me = !1,
  Rm = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function Zn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ge(e, t, r);
      }
    else n.current = null;
}
function ga(e, t, n) {
  try {
    n();
  } catch (r) {
    ge(e, t, r);
  }
}
var Uu = !1;
function Nm(e, t) {
  if (((qi = fo), (e = xd()), Ka(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            s = -1,
            u = 0,
            c = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var S;
              f !== n || (l !== 0 && f.nodeType !== 3) || (a = i + l),
                f !== o || (r !== 0 && f.nodeType !== 3) || (s = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (S = f.firstChild) !== null;

            )
              (p = f), (f = S);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++u === l && (a = i),
                p === o && ++c === r && (s = i),
                (S = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = S;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ea = { focusedElem: e, selectionRange: n }, fo = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var y = x.memoizedProps,
                    R = x.memoizedState,
                    h = t.stateNode,
                    d = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : gt(t.type, y),
                      R,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (C) {
          ge(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (x = Uu), (Uu = !1), x;
}
function Jr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ga(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function $o(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function va(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function vf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), vf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[_t], delete t[cl], delete t[ra], delete t[cm], delete t[dm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function yf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ya(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = mo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ya(e, t, n), e = e.sibling; e !== null; ) ya(e, t, n), (e = e.sibling);
}
function wa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wa(e, t, n), e = e.sibling; e !== null; ) wa(e, t, n), (e = e.sibling);
}
var Ne = null,
  vt = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) wf(e, t, n), (n = n.sibling);
}
function wf(e, t, n) {
  if (Rt && typeof Rt.onCommitFiberUnmount == "function")
    try {
      Rt.onCommitFiberUnmount(Do, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Me || Zn(n, t);
    case 6:
      var r = Ne,
        l = vt;
      (Ne = null),
        Qt(e, t, n),
        (Ne = r),
        (vt = l),
        Ne !== null &&
          (vt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (vt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? yi(e.parentNode, n)
              : e.nodeType === 1 && yi(e, n),
            ol(e))
          : yi(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (l = vt),
        (Ne = n.stateNode.containerInfo),
        (vt = !0),
        Qt(e, t, n),
        (Ne = r),
        (vt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ga(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (
        !Me &&
        (Zn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ge(n, t, a);
        }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Me = (r = Me) || n.memoizedState !== null), Qt(e, t, n), (Me = r))
        : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function Bu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Rm()),
      t.forEach(function (r) {
        var l = Om.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ne = a.stateNode), (vt = !1);
              break e;
            case 3:
              (Ne = a.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (Ne = a.stateNode.containerInfo), (vt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ne === null) throw Error(P(160));
        wf(o, i, l), (Ne = null), (vt = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (u) {
        ge(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) xf(t, e), (t = t.sibling);
}
function xf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((mt(t, e), Ct(e), r & 4)) {
        try {
          Jr(3, e, e.return), $o(3, e);
        } catch (y) {
          ge(e, e.return, y);
        }
        try {
          Jr(5, e, e.return);
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      break;
    case 1:
      mt(t, e), Ct(e), r & 512 && n !== null && Zn(n, n.return);
      break;
    case 5:
      if (
        (mt(t, e),
        Ct(e),
        r & 512 && n !== null && Zn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          tl(l, "");
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Bc(l, o),
              Vi(a, i);
            var u = Vi(a, o);
            for (i = 0; i < s.length; i += 2) {
              var c = s[i],
                f = s[i + 1];
              c === "style"
                ? Qc(l, f)
                : c === "dangerouslySetInnerHTML"
                  ? Wc(l, f)
                  : c === "children"
                    ? tl(l, f)
                    : Ia(l, c, f, u);
            }
            switch (a) {
              case "input":
                Ai(l, o);
                break;
              case "textarea":
                $c(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? tr(l, !!o.multiple, S, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? tr(l, !!o.multiple, o.defaultValue, !0)
                      : tr(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[cl] = o;
          } catch (y) {
            ge(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((mt(t, e), Ct(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          ge(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (mt(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ol(t.containerInfo);
        } catch (y) {
          ge(e, e.return, y);
        }
      break;
    case 4:
      mt(t, e), Ct(e);
      break;
    case 13:
      mt(t, e),
        Ct(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (hs = ve())),
        r & 4 && Bu(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Me = (u = Me) || c), mt(t, e), (Me = u)) : mt(t, e),
        Ct(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (D = e, c = e.child; c !== null; ) {
            for (f = D = c; D !== null; ) {
              switch (((p = D), (S = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jr(4, p, p.return);
                  break;
                case 1:
                  Zn(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (y) {
                      ge(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Zn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Vu(f);
                    continue;
                  }
              }
              S !== null ? ((S.return = p), (D = S)) : Vu(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (l = f.stateNode),
                  u
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (s = f.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = Hc("display", i)));
              } catch (y) {
                ge(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                ge(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      mt(t, e), Ct(e), r & 4 && Bu(e);
      break;
    case 21:
      break;
    default:
      mt(t, e), Ct(e);
  }
}
function Ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (tl(l, ""), (r.flags &= -33));
          var o = bu(e);
          wa(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = bu(e);
          ya(e, a, i);
          break;
        default:
          throw Error(P(161));
      }
    } catch (s) {
      ge(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Lm(e, t, n) {
  (D = e), Sf(e);
}
function Sf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var l = D,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Wl;
      if (!i) {
        var a = l.alternate,
          s = (a !== null && a.memoizedState !== null) || Me;
        a = Wl;
        var u = Me;
        if (((Wl = i), (Me = s) && !u))
          for (D = l; D !== null; )
            (i = D),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Wu(l)
                : s !== null
                  ? ((s.return = i), (D = s))
                  : Wu(l);
        for (; o !== null; ) (D = o), Sf(o), (o = o.sibling);
        (D = l), (Wl = a), (Me = u);
      }
      $u(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (D = o)) : $u(e);
  }
}
function $u(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Me || $o(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Me)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : gt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && _u(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                _u(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && ol(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        Me || (t.flags & 512 && va(t));
      } catch (p) {
        ge(t, t.return, p);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function Vu(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function Wu(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            $o(4, t);
          } catch (s) {
            ge(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ge(t, l, s);
            }
          }
          var o = t.return;
          try {
            va(t);
          } catch (s) {
            ge(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            va(t);
          } catch (s) {
            ge(t, i, s);
          }
      }
    } catch (s) {
      ge(t, t.return, s);
    }
    if (t === e) {
      D = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (D = a);
      break;
    }
    D = t.return;
  }
}
var zm = Math.ceil,
  _o = bt.ReactCurrentDispatcher,
  fs = bt.ReactCurrentOwner,
  ct = bt.ReactCurrentBatchConfig,
  te = 0,
  Ce = null,
  we = null,
  Le = 0,
  Xe = 0,
  qn = hn(0),
  Se = 0,
  gl = null,
  jn = 0,
  Vo = 0,
  ps = 0,
  Xr = null,
  $e = null,
  hs = 0,
  pr = 1 / 0,
  zt = null,
  Ro = !1,
  xa = null,
  sn = null,
  Hl = !1,
  tn = null,
  No = 0,
  Zr = 0,
  Sa = null,
  ro = -1,
  lo = 0;
function Ae() {
  return te & 6 ? ve() : ro !== -1 ? ro : (ro = ve());
}
function un(e) {
  return e.mode & 1
    ? te & 2 && Le !== 0
      ? Le & -Le
      : pm.transition !== null
        ? (lo === 0 && (lo = ld()), lo)
        : ((e = ne),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : dd(e.type))),
          e)
    : 1;
}
function St(e, t, n, r) {
  if (50 < Zr) throw ((Zr = 0), (Sa = null), Error(P(185)));
  xl(e, n, r),
    (!(te & 2) || e !== Ce) &&
      (e === Ce && (!(te & 2) && (Vo |= n), Se === 4 && qt(e, Le)),
      Qe(e, r),
      n === 1 && te === 0 && !(t.mode & 1) && ((pr = ve() + 500), Uo && mn()));
}
function Qe(e, t) {
  var n = e.callbackNode;
  ph(e, t);
  var r = co(e, e === Ce ? Le : 0);
  if (r === 0)
    n !== null && qs(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && qs(n), t === 1))
      e.tag === 0 ? fm(Hu.bind(null, e)) : zd(Hu.bind(null, e)),
        sm(function () {
          !(te & 6) && mn();
        }),
        (n = null);
    else {
      switch (od(r)) {
        case 1:
          n = ba;
          break;
        case 4:
          n = nd;
          break;
        case 16:
          n = uo;
          break;
        case 536870912:
          n = rd;
          break;
        default:
          n = uo;
      }
      n = Lf(n, kf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function kf(e, t) {
  if (((ro = -1), (lo = 0), te & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (ir() && e.callbackNode !== n) return null;
  var r = co(e, e === Ce ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Lo(e, r);
  else {
    t = r;
    var l = te;
    te |= 2;
    var o = Cf();
    (Ce !== e || Le !== t) && ((zt = null), (pr = ve() + 500), _n(e, t));
    do
      try {
        Mm();
        break;
      } catch (a) {
        Ef(e, a);
      }
    while (!0);
    qa(),
      (_o.current = o),
      (te = l),
      we !== null ? (t = 0) : ((Ce = null), (Le = 0), (t = Se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ki(e)), l !== 0 && ((r = l), (t = ka(e, l)))), t === 1)
    )
      throw ((n = gl), _n(e, 0), qt(e, r), Qe(e, ve()), n);
    if (t === 6) qt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !jm(l) &&
          ((t = Lo(e, r)),
          t === 2 && ((o = Ki(e)), o !== 0 && ((r = o), (t = ka(e, o)))),
          t === 1))
      )
        throw ((n = gl), _n(e, 0), qt(e, r), Qe(e, ve()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          wn(e, $e, zt);
          break;
        case 3:
          if (
            (qt(e, r), (r & 130023424) === r && ((t = hs + 500 - ve()), 10 < t))
          ) {
            if (co(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = na(wn.bind(null, e, $e, zt), t);
            break;
          }
          wn(e, $e, zt);
          break;
        case 4:
          if ((qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - xt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ve() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * zm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = na(wn.bind(null, e, $e, zt), r);
            break;
          }
          wn(e, $e, zt);
          break;
        case 5:
          wn(e, $e, zt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return Qe(e, ve()), e.callbackNode === n ? kf.bind(null, e) : null;
}
function ka(e, t) {
  var n = Xr;
  return (
    e.current.memoizedState.isDehydrated && (_n(e, t).flags |= 256),
    (e = Lo(e, t)),
    e !== 2 && ((t = $e), ($e = n), t !== null && Ea(t)),
    e
  );
}
function Ea(e) {
  $e === null ? ($e = e) : $e.push.apply($e, e);
}
function jm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!kt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function qt(e, t) {
  for (
    t &= ~ps,
      t &= ~Vo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Hu(e) {
  if (te & 6) throw Error(P(327));
  ir();
  var t = co(e, 0);
  if (!(t & 1)) return Qe(e, ve()), null;
  var n = Lo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ki(e);
    r !== 0 && ((t = r), (n = ka(e, r)));
  }
  if (n === 1) throw ((n = gl), _n(e, 0), qt(e, t), Qe(e, ve()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wn(e, $e, zt),
    Qe(e, ve()),
    null
  );
}
function ms(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    (te = n), te === 0 && ((pr = ve() + 500), Uo && mn());
  }
}
function Tn(e) {
  tn !== null && tn.tag === 0 && !(te & 6) && ir();
  var t = te;
  te |= 1;
  var n = ct.transition,
    r = ne;
  try {
    if (((ct.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (ct.transition = n), (te = t), !(te & 6) && mn();
  }
}
function gs() {
  (Xe = qn.current), ae(qn);
}
function _n(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), am(n)), we !== null))
    for (n = we.return; n !== null; ) {
      var r = n;
      switch ((Ja(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && go();
          break;
        case 3:
          dr(), ae(We), ae(De), os();
          break;
        case 5:
          ls(r);
          break;
        case 4:
          dr();
          break;
        case 13:
          ae(fe);
          break;
        case 19:
          ae(fe);
          break;
        case 10:
          es(r.type._context);
          break;
        case 22:
        case 23:
          gs();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (we = e = cn(e.current, null)),
    (Le = Xe = t),
    (Se = 0),
    (gl = null),
    (ps = Vo = jn = 0),
    ($e = Xr = null),
    Sn !== null)
  ) {
    for (t = 0; t < Sn.length; t++)
      if (((n = Sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Sn = null;
  }
  return e;
}
function Ef(e, t) {
  do {
    var n = we;
    try {
      if ((qa(), (eo.current = Po), Co)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Co = !1;
      }
      if (
        ((zn = 0),
        (Ee = xe = pe = null),
        (Yr = !1),
        (pl = 0),
        (fs.current = null),
        n === null || n.return === null)
      ) {
        (Se = 1), (gl = t), (we = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          s = t;
        if (
          ((t = Le),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var S = Tu(i);
          if (S !== null) {
            (S.flags &= -257),
              Mu(S, i, a, o, t),
              S.mode & 1 && ju(o, u, t),
              (t = S),
              (s = u);
            var x = t.updateQueue;
            if (x === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ju(o, u, t), vs();
              break e;
            }
            s = Error(P(426));
          }
        } else if (ce && a.mode & 1) {
          var R = Tu(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              Mu(R, i, a, o, t),
              Xa(fr(s, a));
            break e;
          }
        }
        (o = s = fr(s, a)),
          Se !== 4 && (Se = 2),
          Xr === null ? (Xr = [o]) : Xr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = of(o, s, t);
              Pu(o, h);
              break e;
            case 1:
              a = s;
              var d = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (sn === null || !sn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var C = af(o, a, t);
                Pu(o, C);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      _f(n);
    } catch (z) {
      (t = z), we === n && n !== null && (we = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cf() {
  var e = _o.current;
  return (_o.current = Po), e === null ? Po : e;
}
function vs() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    Ce === null || (!(jn & 268435455) && !(Vo & 268435455)) || qt(Ce, Le);
}
function Lo(e, t) {
  var n = te;
  te |= 2;
  var r = Cf();
  (Ce !== e || Le !== t) && ((zt = null), _n(e, t));
  do
    try {
      Tm();
      break;
    } catch (l) {
      Ef(e, l);
    }
  while (!0);
  if ((qa(), (te = n), (_o.current = r), we !== null)) throw Error(P(261));
  return (Ce = null), (Le = 0), Se;
}
function Tm() {
  for (; we !== null; ) Pf(we);
}
function Mm() {
  for (; we !== null && !lh(); ) Pf(we);
}
function Pf(e) {
  var t = Nf(e.alternate, e, Xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? _f(e) : (we = t),
    (fs.current = null);
}
function _f(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = _m(n, t)), n !== null)) {
        (n.flags &= 32767), (we = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Se = 6), (we = null);
        return;
      }
    } else if (((n = Pm(n, t, Xe)), n !== null)) {
      we = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      we = t;
      return;
    }
    we = t = e;
  } while (t !== null);
  Se === 0 && (Se = 5);
}
function wn(e, t, n) {
  var r = ne,
    l = ct.transition;
  try {
    (ct.transition = null), (ne = 1), Dm(e, t, n, r);
  } finally {
    (ct.transition = l), (ne = r);
  }
  return null;
}
function Dm(e, t, n, r) {
  do ir();
  while (tn !== null);
  if (te & 6) throw Error(P(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (hh(e, o),
    e === Ce && ((we = Ce = null), (Le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Hl ||
      ((Hl = !0),
      Lf(uo, function () {
        return ir(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ct.transition), (ct.transition = null);
    var i = ne;
    ne = 1;
    var a = te;
    (te |= 4),
      (fs.current = null),
      Nm(e, n),
      xf(n, e),
      em(ea),
      (fo = !!qi),
      (ea = qi = null),
      (e.current = n),
      Lm(n),
      oh(),
      (te = a),
      (ne = i),
      (ct.transition = o);
  } else e.current = n;
  if (
    (Hl && ((Hl = !1), (tn = e), (No = l)),
    (o = e.pendingLanes),
    o === 0 && (sn = null),
    sh(n.stateNode),
    Qe(e, ve()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ro) throw ((Ro = !1), (e = xa), (xa = null), e);
  return (
    No & 1 && e.tag !== 0 && ir(),
    (o = e.pendingLanes),
    o & 1 ? (e === Sa ? Zr++ : ((Zr = 0), (Sa = e))) : (Zr = 0),
    mn(),
    null
  );
}
function ir() {
  if (tn !== null) {
    var e = od(No),
      t = ct.transition,
      n = ne;
    try {
      if (((ct.transition = null), (ne = 16 > e ? 16 : e), tn === null))
        var r = !1;
      else {
        if (((e = tn), (tn = null), (No = 0), te & 6)) throw Error(P(331));
        var l = te;
        for (te |= 4, D = e.current; D !== null; ) {
          var o = D,
            i = o.child;
          if (D.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (D = u; D !== null; ) {
                  var c = D;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (D = f);
                  else
                    for (; D !== null; ) {
                      c = D;
                      var p = c.sibling,
                        S = c.return;
                      if ((vf(c), c === u)) {
                        D = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = S), (D = p);
                        break;
                      }
                      D = S;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var y = x.child;
                if (y !== null) {
                  x.child = null;
                  do {
                    var R = y.sibling;
                    (y.sibling = null), (y = R);
                  } while (y !== null);
                }
              }
              D = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (D = i);
          else
            e: for (; D !== null; ) {
              if (((o = D), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Jr(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (D = h);
                break e;
              }
              D = o.return;
            }
        }
        var d = e.current;
        for (D = d; D !== null; ) {
          i = D;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (D = m);
          else
            e: for (i = d; D !== null; ) {
              if (((a = D), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $o(9, a);
                  }
                } catch (z) {
                  ge(a, a.return, z);
                }
              if (a === i) {
                D = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (D = C);
                break e;
              }
              D = a.return;
            }
        }
        if (
          ((te = l), mn(), Rt && typeof Rt.onPostCommitFiberRoot == "function")
        )
          try {
            Rt.onPostCommitFiberRoot(Do, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (ct.transition = t);
    }
  }
  return !1;
}
function Qu(e, t, n) {
  (t = fr(n, t)),
    (t = of(e, t, 1)),
    (e = an(e, t, 1)),
    (t = Ae()),
    e !== null && (xl(e, 1, t), Qe(e, t));
}
function ge(e, t, n) {
  if (e.tag === 3) Qu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (sn === null || !sn.has(r)))
        ) {
          (e = fr(n, e)),
            (e = af(t, e, 1)),
            (t = an(t, e, 1)),
            (e = Ae()),
            t !== null && (xl(t, 1, e), Qe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Im(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (Le & n) === n &&
      (Se === 4 || (Se === 3 && (Le & 130023424) === Le && 500 > ve() - hs)
        ? _n(e, 0)
        : (ps |= n)),
    Qe(e, t);
}
function Rf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Il), (Il <<= 1), !(Il & 130023424) && (Il = 4194304))
      : (t = 1));
  var n = Ae();
  (e = At(e, t)), e !== null && (xl(e, t, n), Qe(e, n));
}
function Fm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Rf(e, n);
}
function Om(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), Rf(e, n);
}
var Nf;
Nf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || We.current) Ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ve = !1), Cm(e, t, n);
      Ve = !!(e.flags & 131072);
    }
  else (Ve = !1), ce && t.flags & 1048576 && jd(t, wo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      no(e, t), (e = t.pendingProps);
      var l = sr(t, De.current);
      or(t, n), (l = as(null, t, r, e, l, n));
      var o = ss();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((o = !0), vo(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ns(t),
            (l.updater = Bo),
            (t.stateNode = l),
            (l._reactInternals = t),
            ua(t, r, e, n),
            (t = fa(null, t, r, !0, o, n)))
          : ((t.tag = 0), ce && o && Ya(t), Oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (no(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Um(r)),
          (e = gt(r, e)),
          l)
        ) {
          case 0:
            t = da(null, t, r, e, n);
            break e;
          case 1:
            t = Fu(null, t, r, e, n);
            break e;
          case 11:
            t = Du(null, t, r, e, n);
            break e;
          case 14:
            t = Iu(null, t, r, gt(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : gt(r, l)),
        da(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : gt(r, l)),
        Fu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((df(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Od(e, t),
          ko(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = fr(Error(P(423)), t)), (t = Ou(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = fr(Error(P(424)), t)), (t = Ou(e, t, r, n, l));
            break e;
          } else
            for (
              Ze = on(t.stateNode.containerInfo.firstChild),
                qe = t,
                ce = !0,
                wt = null,
                n = Id(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ur(), r === l)) {
            t = Ut(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ad(t),
        e === null && ia(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ta(r, l) ? (i = null) : o !== null && ta(r, o) && (t.flags |= 32),
        cf(e, t),
        Oe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ia(t), null;
    case 13:
      return ff(e, t, n);
    case 4:
      return (
        rs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = cr(t, null, r, n)) : Oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : gt(r, l)),
        Du(e, t, r, l, n)
      );
    case 7:
      return Oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          le(xo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (kt(o.value, i)) {
            if (o.children === l.children && !We.current) {
              t = Ut(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Dt(-1, n & -n)), (s.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      aa(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(P(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  aa(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        or(t, n),
        (l = dt(l)),
        (r = r(l)),
        (t.flags |= 1),
        Oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = gt(r, t.pendingProps)),
        (l = gt(r.type, l)),
        Iu(e, t, r, l, n)
      );
    case 15:
      return sf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : gt(r, l)),
        no(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), vo(t)) : (e = !1),
        or(t, n),
        lf(t, r, l),
        ua(t, r, l, n),
        fa(null, t, r, !0, e, n)
      );
    case 19:
      return pf(e, t, n);
    case 22:
      return uf(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Lf(e, t) {
  return td(e, t);
}
function Am(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ut(e, t, n, r) {
  return new Am(e, t, n, r);
}
function ys(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Um(e) {
  if (typeof e == "function") return ys(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Oa)) return 11;
    if (e === Aa) return 14;
  }
  return 2;
}
function cn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function oo(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) ys(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Vn:
        return Rn(n.children, l, o, t);
      case Fa:
        (i = 8), (l |= 8);
        break;
      case Mi:
        return (
          (e = ut(12, n, t, l | 2)), (e.elementType = Mi), (e.lanes = o), e
        );
      case Di:
        return (e = ut(13, n, t, l)), (e.elementType = Di), (e.lanes = o), e;
      case Ii:
        return (e = ut(19, n, t, l)), (e.elementType = Ii), (e.lanes = o), e;
      case Ac:
        return Wo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Fc:
              i = 10;
              break e;
            case Oc:
              i = 9;
              break e;
            case Oa:
              i = 11;
              break e;
            case Aa:
              i = 14;
              break e;
            case Jt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Rn(e, t, n, r) {
  return (e = ut(7, e, r, t)), (e.lanes = n), e;
}
function Wo(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = Ac),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function _i(e, t, n) {
  return (e = ut(6, e, null, t)), (e.lanes = n), e;
}
function Ri(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function bm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ai(0)),
    (this.expirationTimes = ai(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ai(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ws(e, t, n, r, l, o, i, a, s) {
  return (
    (e = new bm(e, t, n, a, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ut(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ns(o),
    e
  );
}
function Bm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function zf(e) {
  if (!e) return fn;
  e = e._reactInternals;
  e: {
    if (Fn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return Ld(e, n, t);
  }
  return t;
}
function jf(e, t, n, r, l, o, i, a, s) {
  return (
    (e = ws(n, r, !0, e, l, o, i, a, s)),
    (e.context = zf(null)),
    (n = e.current),
    (r = Ae()),
    (l = un(n)),
    (o = Dt(r, l)),
    (o.callback = t ?? null),
    an(n, o, l),
    (e.current.lanes = l),
    xl(e, l, r),
    Qe(e, r),
    e
  );
}
function Ho(e, t, n, r) {
  var l = t.current,
    o = Ae(),
    i = un(l);
  return (
    (n = zf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Dt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = an(l, t, i)),
    e !== null && (St(e, l, i, o), ql(e, l, i)),
    i
  );
}
function zo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function xs(e, t) {
  Gu(e, t), (e = e.alternate) && Gu(e, t);
}
function $m() {
  return null;
}
var Tf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ss(e) {
  this._internalRoot = e;
}
Qo.prototype.render = Ss.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Ho(e, t, null, null);
};
Qo.prototype.unmount = Ss.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function () {
      Ho(null, e, null, null);
    }),
      (t[Ot] = null);
  }
};
function Qo(e) {
  this._internalRoot = e;
}
Qo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Zt.length && t !== 0 && t < Zt[n].priority; n++);
    Zt.splice(n, 0, e), n === 0 && cd(e);
  }
};
function ks(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Go(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ku() {}
function Vm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = zo(i);
        o.call(u);
      };
    }
    var i = jf(t, r, e, 0, null, !1, !1, "", Ku);
    return (
      (e._reactRootContainer = i),
      (e[Ot] = i.current),
      sl(e.nodeType === 8 ? e.parentNode : e),
      Tn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = zo(s);
      a.call(u);
    };
  }
  var s = ws(e, 0, !1, null, null, !1, !1, "", Ku);
  return (
    (e._reactRootContainer = s),
    (e[Ot] = s.current),
    sl(e.nodeType === 8 ? e.parentNode : e),
    Tn(function () {
      Ho(t, s, n, r);
    }),
    s
  );
}
function Ko(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var s = zo(i);
        a.call(s);
      };
    }
    Ho(t, i, e, l);
  } else i = Vm(n, t, e, l, r);
  return zo(i);
}
id = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $r(t.pendingLanes);
        n !== 0 &&
          (Ba(t, n | 1), Qe(t, ve()), !(te & 6) && ((pr = ve() + 500), mn()));
      }
      break;
    case 13:
      Tn(function () {
        var r = At(e, 1);
        if (r !== null) {
          var l = Ae();
          St(r, e, 1, l);
        }
      }),
        xs(e, 1);
  }
};
$a = function (e) {
  if (e.tag === 13) {
    var t = At(e, 134217728);
    if (t !== null) {
      var n = Ae();
      St(t, e, 134217728, n);
    }
    xs(e, 134217728);
  }
};
ad = function (e) {
  if (e.tag === 13) {
    var t = un(e),
      n = At(e, t);
    if (n !== null) {
      var r = Ae();
      St(n, e, t, r);
    }
    xs(e, t);
  }
};
sd = function () {
  return ne;
};
ud = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
Hi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ai(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Ao(r);
            if (!l) throw Error(P(90));
            bc(r), Ai(r, l);
          }
        }
      }
      break;
    case "textarea":
      $c(e, n);
      break;
    case "select":
      (t = n.value), t != null && tr(e, !!n.multiple, t, !1);
  }
};
Yc = ms;
Jc = Tn;
var Wm = { usingClientEntryPoint: !1, Events: [kl, Gn, Ao, Gc, Kc, ms] },
  Dr = {
    findFiberByHostInstance: xn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Hm = {
    bundleType: Dr.bundleType,
    version: Dr.version,
    rendererPackageName: Dr.rendererPackageName,
    rendererConfig: Dr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = qc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Dr.findFiberByHostInstance || $m,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ql.isDisabled && Ql.supportsFiber)
    try {
      (Do = Ql.inject(Hm)), (Rt = Ql);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wm;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ks(t)) throw Error(P(200));
  return Bm(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!ks(e)) throw Error(P(299));
  var n = !1,
    r = "",
    l = Tf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ws(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ot] = t.current),
    sl(e.nodeType === 8 ? e.parentNode : e),
    new Ss(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = qc(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Tn(e);
};
tt.hydrate = function (e, t, n) {
  if (!Go(t)) throw Error(P(200));
  return Ko(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!ks(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Tf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = jf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ot] = t.current),
    sl(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Qo(t);
};
tt.render = function (e, t, n) {
  if (!Go(t)) throw Error(P(200));
  return Ko(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!Go(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (Tn(function () {
        Ko(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ot] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = ms;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Go(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return Ko(e, t, n, !1, r);
};
tt.version = "18.3.1-next-f1338f8080-20240426";
function Mf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mf);
    } catch (e) {
      console.error(e);
    }
}
Mf(), (Tc.exports = tt);
var Es = Tc.exports;
const Qm = wc(Es),
  Gm = yc({ __proto__: null, default: Qm }, [Es]);
var Yu = Es;
(ji.createRoot = Yu.createRoot), (ji.hydrateRoot = Yu.hydrateRoot);
const Cs = "-";
function Km(e) {
  const t = Jm(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function l(i) {
    const a = i.split(Cs);
    return a[0] === "" && a.length !== 1 && a.shift(), Df(a, t) || Ym(i);
  }
  function o(i, a) {
    const s = n[i] || [];
    return a && r[i] ? [...s, ...r[i]] : s;
  }
  return { getClassGroupId: l, getConflictingClassGroupIds: o };
}
function Df(e, t) {
  var i;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    l = r ? Df(e.slice(1), r) : void 0;
  if (l) return l;
  if (t.validators.length === 0) return;
  const o = e.join(Cs);
  return (i = t.validators.find(({ validator: a }) => a(o))) == null
    ? void 0
    : i.classGroupId;
}
const Ju = /^\[(.+)\]$/;
function Ym(e) {
  if (Ju.test(e)) {
    const t = Ju.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function Jm(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    Zm(Object.entries(e.classGroups), n).forEach(([o, i]) => {
      Ca(i, r, o, t);
    }),
    r
  );
}
function Ca(e, t, n, r) {
  e.forEach((l) => {
    if (typeof l == "string") {
      const o = l === "" ? t : Xu(t, l);
      o.classGroupId = n;
      return;
    }
    if (typeof l == "function") {
      if (Xm(l)) {
        Ca(l(r), t, n, r);
        return;
      }
      t.validators.push({ validator: l, classGroupId: n });
      return;
    }
    Object.entries(l).forEach(([o, i]) => {
      Ca(i, Xu(t, o), n, r);
    });
  });
}
function Xu(e, t) {
  let n = e;
  return (
    t.split(Cs).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function Xm(e) {
  return e.isThemeGetter;
}
function Zm(e, t) {
  return t
    ? e.map(([n, r]) => {
        const l = r.map((o) =>
          typeof o == "string"
            ? t + o
            : typeof o == "object"
              ? Object.fromEntries(
                  Object.entries(o).map(([i, a]) => [t + i, a]),
                )
              : o,
        );
        return [n, l];
      })
    : e;
}
function qm(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function l(o, i) {
    n.set(o, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(o) {
      let i = n.get(o);
      if (i !== void 0) return i;
      if ((i = r.get(o)) !== void 0) return l(o, i), i;
    },
    set(o, i) {
      n.has(o) ? n.set(o, i) : l(o, i);
    },
  };
}
const If = "!";
function eg(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    l = t.length;
  return function (i) {
    const a = [];
    let s = 0,
      u = 0,
      c;
    for (let y = 0; y < i.length; y++) {
      let R = i[y];
      if (s === 0) {
        if (R === r && (n || i.slice(y, y + l) === t)) {
          a.push(i.slice(u, y)), (u = y + l);
          continue;
        }
        if (R === "/") {
          c = y;
          continue;
        }
      }
      R === "[" ? s++ : R === "]" && s--;
    }
    const f = a.length === 0 ? i : i.substring(u),
      p = f.startsWith(If),
      S = p ? f.substring(1) : f,
      x = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: p,
      baseClassName: S,
      maybePostfixModifierPosition: x,
    };
  };
}
function tg(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function ng(e) {
  return { cache: qm(e.cacheSize), splitModifiers: eg(e), ...Km(e) };
}
const rg = /\s+/;
function lg(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: l,
    } = t,
    o = new Set();
  return e
    .trim()
    .split(rg)
    .map((i) => {
      const {
        modifiers: a,
        hasImportantModifier: s,
        baseClassName: u,
        maybePostfixModifierPosition: c,
      } = n(i);
      let f = r(c ? u.substring(0, c) : u),
        p = !!c;
      if (!f) {
        if (!c) return { isTailwindClass: !1, originalClassName: i };
        if (((f = r(u)), !f))
          return { isTailwindClass: !1, originalClassName: i };
        p = !1;
      }
      const S = tg(a).join(":");
      return {
        isTailwindClass: !0,
        modifierId: s ? S + If : S,
        classGroupId: f,
        originalClassName: i,
        hasPostfixModifier: p,
      };
    })
    .reverse()
    .filter((i) => {
      if (!i.isTailwindClass) return !0;
      const { modifierId: a, classGroupId: s, hasPostfixModifier: u } = i,
        c = a + s;
      return o.has(c)
        ? !1
        : (o.add(c), l(s, u).forEach((f) => o.add(a + f)), !0);
    })
    .reverse()
    .map((i) => i.originalClassName)
    .join(" ");
}
function og() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ff(t)) && (r && (r += " "), (r += n));
  return r;
}
function Ff(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ff(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function ig(e, ...t) {
  let n,
    r,
    l,
    o = i;
  function i(s) {
    const u = t.reduce((c, f) => f(c), e());
    return (n = ng(u)), (r = n.cache.get), (l = n.cache.set), (o = a), a(s);
  }
  function a(s) {
    const u = r(s);
    if (u) return u;
    const c = lg(s, n);
    return l(s, c), c;
  }
  return function () {
    return o(og.apply(null, arguments));
  };
}
function oe(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const Of = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  ag = /^\d+\/\d+$/,
  sg = new Set(["px", "full", "screen"]),
  ug = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  cg =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  dg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  fg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  pg =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Lt(e) {
  return En(e) || sg.has(e) || ag.test(e);
}
function Gt(e) {
  return vr(e, "length", Sg);
}
function En(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Gl(e) {
  return vr(e, "number", En);
}
function Ir(e) {
  return !!e && Number.isInteger(Number(e));
}
function hg(e) {
  return e.endsWith("%") && En(e.slice(0, -1));
}
function Q(e) {
  return Of.test(e);
}
function Kt(e) {
  return ug.test(e);
}
const mg = new Set(["length", "size", "percentage"]);
function gg(e) {
  return vr(e, mg, Af);
}
function vg(e) {
  return vr(e, "position", Af);
}
const yg = new Set(["image", "url"]);
function wg(e) {
  return vr(e, yg, Eg);
}
function xg(e) {
  return vr(e, "", kg);
}
function Fr() {
  return !0;
}
function vr(e, t, n) {
  const r = Of.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function Sg(e) {
  return cg.test(e) && !dg.test(e);
}
function Af() {
  return !1;
}
function kg(e) {
  return fg.test(e);
}
function Eg(e) {
  return pg.test(e);
}
function Cg() {
  const e = oe("colors"),
    t = oe("spacing"),
    n = oe("blur"),
    r = oe("brightness"),
    l = oe("borderColor"),
    o = oe("borderRadius"),
    i = oe("borderSpacing"),
    a = oe("borderWidth"),
    s = oe("contrast"),
    u = oe("grayscale"),
    c = oe("hueRotate"),
    f = oe("invert"),
    p = oe("gap"),
    S = oe("gradientColorStops"),
    x = oe("gradientColorStopPositions"),
    y = oe("inset"),
    R = oe("margin"),
    h = oe("opacity"),
    d = oe("padding"),
    m = oe("saturate"),
    C = oe("scale"),
    z = oe("sepia"),
    T = oe("skew"),
    g = oe("space"),
    j = oe("translate"),
    O = () => ["auto", "contain", "none"],
    M = () => ["auto", "hidden", "clip", "visible", "scroll"],
    K = () => ["auto", Q, t],
    B = () => [Q, t],
    re = () => ["", Lt, Gt],
    me = () => ["auto", En, Q],
    Be = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    Ge = () => ["solid", "dashed", "dotted", "double", "none"],
    pt = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    N = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    A = () => ["", "0", Q],
    b = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    X = () => [En, Gl],
    q = () => [En, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Fr],
      spacing: [Lt, Gt],
      blur: ["none", "", Kt, Q],
      brightness: X(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Kt, Q],
      borderSpacing: B(),
      borderWidth: re(),
      contrast: X(),
      grayscale: A(),
      hueRotate: q(),
      invert: A(),
      gap: B(),
      gradientColorStops: [e],
      gradientColorStopPositions: [hg, Gt],
      inset: K(),
      margin: K(),
      opacity: X(),
      padding: B(),
      saturate: X(),
      scale: X(),
      sepia: A(),
      skew: q(),
      space: B(),
      translate: B(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", Q] }],
      container: ["container"],
      columns: [{ columns: [Kt] }],
      "break-after": [{ "break-after": b() }],
      "break-before": [{ "break-before": b() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...Be(), Q] }],
      overflow: [{ overflow: M() }],
      "overflow-x": [{ "overflow-x": M() }],
      "overflow-y": [{ "overflow-y": M() }],
      overscroll: [{ overscroll: O() }],
      "overscroll-x": [{ "overscroll-x": O() }],
      "overscroll-y": [{ "overscroll-y": O() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [y] }],
      "inset-x": [{ "inset-x": [y] }],
      "inset-y": [{ "inset-y": [y] }],
      start: [{ start: [y] }],
      end: [{ end: [y] }],
      top: [{ top: [y] }],
      right: [{ right: [y] }],
      bottom: [{ bottom: [y] }],
      left: [{ left: [y] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", Ir, Q] }],
      basis: [{ basis: K() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
      grow: [{ grow: A() }],
      shrink: [{ shrink: A() }],
      order: [{ order: ["first", "last", "none", Ir, Q] }],
      "grid-cols": [{ "grid-cols": [Fr] }],
      "col-start-end": [{ col: ["auto", { span: ["full", Ir, Q] }, Q] }],
      "col-start": [{ "col-start": me() }],
      "col-end": [{ "col-end": me() }],
      "grid-rows": [{ "grid-rows": [Fr] }],
      "row-start-end": [{ row: ["auto", { span: [Ir, Q] }, Q] }],
      "row-start": [{ "row-start": me() }],
      "row-end": [{ "row-end": me() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
      gap: [{ gap: [p] }],
      "gap-x": [{ "gap-x": [p] }],
      "gap-y": [{ "gap-y": [p] }],
      "justify-content": [{ justify: ["normal", ...N()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...N(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...N(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [d] }],
      px: [{ px: [d] }],
      py: [{ py: [d] }],
      ps: [{ ps: [d] }],
      pe: [{ pe: [d] }],
      pt: [{ pt: [d] }],
      pr: [{ pr: [d] }],
      pb: [{ pb: [d] }],
      pl: [{ pl: [d] }],
      m: [{ m: [R] }],
      mx: [{ mx: [R] }],
      my: [{ my: [R] }],
      ms: [{ ms: [R] }],
      me: [{ me: [R] }],
      mt: [{ mt: [R] }],
      mr: [{ mr: [R] }],
      mb: [{ mb: [R] }],
      ml: [{ ml: [R] }],
      "space-x": [{ "space-x": [g] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [g] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
      "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            Q,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Kt] },
            Kt,
          ],
        },
      ],
      h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Kt, Gt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Gl,
          ],
        },
      ],
      "font-family": [{ font: [Fr] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            Q,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", En, Gl] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            Lt,
            Q,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", Q] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [h] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [h] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...Ge(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", Lt, Gt] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", Lt, Q] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: B() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            Q,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", Q] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [h] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...Be(), vg] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", gg] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            wg,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [x] }],
      "gradient-via-pos": [{ via: [x] }],
      "gradient-to-pos": [{ to: [x] }],
      "gradient-from": [{ from: [S] }],
      "gradient-via": [{ via: [S] }],
      "gradient-to": [{ to: [S] }],
      rounded: [{ rounded: [o] }],
      "rounded-s": [{ "rounded-s": [o] }],
      "rounded-e": [{ "rounded-e": [o] }],
      "rounded-t": [{ "rounded-t": [o] }],
      "rounded-r": [{ "rounded-r": [o] }],
      "rounded-b": [{ "rounded-b": [o] }],
      "rounded-l": [{ "rounded-l": [o] }],
      "rounded-ss": [{ "rounded-ss": [o] }],
      "rounded-se": [{ "rounded-se": [o] }],
      "rounded-ee": [{ "rounded-ee": [o] }],
      "rounded-es": [{ "rounded-es": [o] }],
      "rounded-tl": [{ "rounded-tl": [o] }],
      "rounded-tr": [{ "rounded-tr": [o] }],
      "rounded-br": [{ "rounded-br": [o] }],
      "rounded-bl": [{ "rounded-bl": [o] }],
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [h] }],
      "border-style": [{ border: [...Ge(), "hidden"] }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [h] }],
      "divide-style": [{ divide: Ge() }],
      "border-color": [{ border: [l] }],
      "border-color-x": [{ "border-x": [l] }],
      "border-color-y": [{ "border-y": [l] }],
      "border-color-t": [{ "border-t": [l] }],
      "border-color-r": [{ "border-r": [l] }],
      "border-color-b": [{ "border-b": [l] }],
      "border-color-l": [{ "border-l": [l] }],
      "divide-color": [{ divide: [l] }],
      "outline-style": [{ outline: ["", ...Ge()] }],
      "outline-offset": [{ "outline-offset": [Lt, Q] }],
      "outline-w": [{ outline: [Lt, Gt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: re() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [h] }],
      "ring-offset-w": [{ "ring-offset": [Lt, Gt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Kt, xg] }],
      "shadow-color": [{ shadow: [Fr] }],
      opacity: [{ opacity: [h] }],
      "mix-blend": [{ "mix-blend": [...pt(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": pt() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [s] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Kt, Q] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [c] }],
      invert: [{ invert: [f] }],
      saturate: [{ saturate: [m] }],
      sepia: [{ sepia: [z] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [s] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
      "backdrop-invert": [{ "backdrop-invert": [f] }],
      "backdrop-opacity": [{ "backdrop-opacity": [h] }],
      "backdrop-saturate": [{ "backdrop-saturate": [m] }],
      "backdrop-sepia": [{ "backdrop-sepia": [z] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [i] }],
      "border-spacing-x": [{ "border-spacing-x": [i] }],
      "border-spacing-y": [{ "border-spacing-y": [i] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            Q,
          ],
        },
      ],
      duration: [{ duration: q() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", Q] }],
      delay: [{ delay: q() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Q] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [C] }],
      "scale-x": [{ "scale-x": [C] }],
      "scale-y": [{ "scale-y": [C] }],
      rotate: [{ rotate: [Ir, Q] }],
      "translate-x": [{ "translate-x": [j] }],
      "translate-y": [{ "translate-y": [j] }],
      "skew-x": [{ "skew-x": [T] }],
      "skew-y": [{ "skew-y": [T] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            Q,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            Q,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": B() }],
      "scroll-mx": [{ "scroll-mx": B() }],
      "scroll-my": [{ "scroll-my": B() }],
      "scroll-ms": [{ "scroll-ms": B() }],
      "scroll-me": [{ "scroll-me": B() }],
      "scroll-mt": [{ "scroll-mt": B() }],
      "scroll-mr": [{ "scroll-mr": B() }],
      "scroll-mb": [{ "scroll-mb": B() }],
      "scroll-ml": [{ "scroll-ml": B() }],
      "scroll-p": [{ "scroll-p": B() }],
      "scroll-px": [{ "scroll-px": B() }],
      "scroll-py": [{ "scroll-py": B() }],
      "scroll-ps": [{ "scroll-ps": B() }],
      "scroll-pe": [{ "scroll-pe": B() }],
      "scroll-pt": [{ "scroll-pt": B() }],
      "scroll-pr": [{ "scroll-pr": B() }],
      "scroll-pb": [{ "scroll-pb": B() }],
      "scroll-pl": [{ "scroll-pl": B() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", Q] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Lt, Gt, Gl] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const yr = ig(Cg),
  Uf = ({ headerLevel: e, className: t, color: n, size: r, children: l }) => {
    const a = yr(`text-${r ?? "md"} text-${n ?? "primary"} font-medium`, t);
    switch (e) {
      case 1:
        return E.jsx("h1", { className: a, children: l });
      case 2:
        return E.jsx("h2", { className: a, children: l });
      case 3:
        return E.jsx("h3", { className: a, children: l });
      case 4:
        return E.jsx("h4", { className: a, children: l });
      case 5:
        return E.jsx("h5", { className: a, children: l });
      case 6:
        return E.jsx("h6", { className: a, children: l });
    }
  },
  Pg = ({ id: e, activator: { className: t, children: n } }) => ({
    Activator: () =>
      E.jsx("label", {
        htmlFor: e,
        className: yr("btn btn-ghost drawer-button", t),
        children: n,
      }),
    Drawer: ({ children: o }) =>
      E.jsxs("div", {
        className: "drawer",
        children: [
          E.jsx("input", {
            id: e,
            type: "checkbox",
            className: "drawer-toggle",
          }),
          E.jsx("div", { className: "drawer-content", children: o }),
          E.jsxs("div", {
            className: "drawer-side",
            children: [
              E.jsx("label", {
                htmlFor: e,
                "aria-label": "close sidebar",
                className: "drawer-overlay",
              }),
              E.jsxs("ul", {
                className:
                  "menu p-4 w-80 min-h-full bg-base-100 text-base-content ",
                children: [
                  E.jsx("li", {
                    children: E.jsx("a", { children: "Sidebar Item 1" }),
                  }),
                  E.jsx("li", {
                    children: E.jsx("a", { children: "Sidebar Item 2" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
  }),
  _g = ({ className: e }) =>
    E.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: yr("w-5 h-5", e),
      children: E.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
      }),
    }),
  Rg = ({ className: e }) =>
    E.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: yr("w-5 h-5", e),
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      children: E.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z",
      }),
    }),
  Ng = ({ className: e }) =>
    E.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: yr("h-5 w-5", e),
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      children: E.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      }),
    }),
  Lg = ({ children: e }) => {
    const { Drawer: t, Activator: n } = _.useMemo(
      () =>
        Pg({
          id: "main-drawer",
          activator: {
            className: "btn-neutral text-primary",
            children: E.jsx(_g, { className: "w-6 h-6" }),
          },
        }),
      [],
    );
    return E.jsxs(t, {
      children: [
        E.jsx(wy, { navbarStart: E.jsx(n, {}) }),
        E.jsx("main", {
          className: "m-4 rounded-2xl p-4 max-w-7xl mx-auto",
          children: e,
        }),
      ],
    });
  };
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function de() {
  return (
    (de = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    de.apply(this, arguments)
  );
}
var ye;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ye || (ye = {}));
const Zu = "popstate";
function zg(e) {
  e === void 0 && (e = {});
  function t(l, o) {
    let {
      pathname: i = "/",
      search: a = "",
      hash: s = "",
    } = Bt(l.location.hash.substr(1));
    return (
      !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i),
      vl(
        "",
        { pathname: i, search: a, hash: s },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default",
      )
    );
  }
  function n(l, o) {
    let i = l.document.querySelector("base"),
      a = "";
    if (i && i.getAttribute("href")) {
      let s = l.location.href,
        u = s.indexOf("#");
      a = u === -1 ? s : s.slice(0, u);
    }
    return a + "#" + (typeof o == "string" ? o : Dn(o));
  }
  function r(l, o) {
    Mn(
      l.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")",
    );
  }
  return Tg(t, n, r, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Mn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function jg() {
  return Math.random().toString(36).substr(2, 8);
}
function qu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function vl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    de(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Bt(t) : t,
      { state: n, key: (t && t.key) || r || jg() },
    )
  );
}
function Dn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Bt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Tg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = ye.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), i.replaceState(de({}, i.state, { idx: u }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    a = ye.Pop;
    let R = c(),
      h = R == null ? null : R - u;
    (u = R), s && s({ action: a, location: y.location, delta: h });
  }
  function p(R, h) {
    a = ye.Push;
    let d = vl(y.location, R, h);
    n && n(d, R), (u = c() + 1);
    let m = qu(d, u),
      C = y.createHref(d);
    try {
      i.pushState(m, "", C);
    } catch (z) {
      if (z instanceof DOMException && z.name === "DataCloneError") throw z;
      l.location.assign(C);
    }
    o && s && s({ action: a, location: y.location, delta: 1 });
  }
  function S(R, h) {
    a = ye.Replace;
    let d = vl(y.location, R, h);
    n && n(d, R), (u = c());
    let m = qu(d, u),
      C = y.createHref(d);
    i.replaceState(m, "", C),
      o && s && s({ action: a, location: y.location, delta: 0 });
  }
  function x(R) {
    let h = l.location.origin !== "null" ? l.location.origin : l.location.href,
      d = typeof R == "string" ? R : Dn(R);
    return (
      (d = d.replace(/ $/, "%20")),
      Y(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          d,
      ),
      new URL(d, h)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(R) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Zu, f),
        (s = R),
        () => {
          l.removeEventListener(Zu, f), (s = null);
        }
      );
    },
    createHref(R) {
      return t(l, R);
    },
    createURL: x,
    encodeLocation(R) {
      let h = x(R);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: S,
    go(R) {
      return i.go(R);
    },
  };
  return y;
}
var ue;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ue || (ue = {}));
const Mg = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Dg(e) {
  return e.index === !0;
}
function Pa(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        a = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (Y(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route",
        ),
        Y(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        Dg(l))
      ) {
        let s = de({}, l, t(l), { id: a });
        return (r[a] = s), s;
      } else {
        let s = de({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = s), l.children && (s.children = Pa(l.children, t, i, r)), s
        );
      }
    })
  );
}
function er(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Bt(t) : t,
    l = wr(r.pathname || "/", n);
  if (l == null) return null;
  let o = bf(e);
  Fg(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) {
    let s = Kg(l);
    i = Hg(o[a], s);
  }
  return i;
}
function Ig(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function bf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, a) => {
    let s = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith("/") &&
      (Y(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = It([r, s.relativePath]),
      c = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (Y(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      bf(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: Vg(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let s of Bf(o.path)) l(o, i, s);
    }),
    t
  );
}
function Bf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Bf(r.join("/")),
    a = [];
  return (
    a.push(...i.map((s) => (s === "" ? o : [o, s].join("/")))),
    l && a.push(...i),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Fg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Wg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Og = /^:[\w-]+$/,
  Ag = 3,
  Ug = 2,
  bg = 1,
  Bg = 10,
  $g = -2,
  ec = (e) => e === "*";
function Vg(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ec) && (r += $g),
    t && (r += Ug),
    n
      .filter((l) => !ec(l))
      .reduce((l, o) => l + (Og.test(o) ? Ag : o === "" ? bg : Bg), r)
  );
}
function Wg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Hg(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      s = i === n.length - 1,
      u = l === "/" ? t : t.slice(l.length) || "/",
      c = Qg(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        u,
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = a.route;
    o.push({
      params: r,
      pathname: It([l, c.pathname]),
      pathnameBase: Xg(It([l, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (l = It([l, c.pathnameBase]));
  }
  return o;
}
function Qg(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Gg(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: p, isOptional: S } = c;
      if (p === "*") {
        let y = a[f] || "";
        i = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[f];
      return (
        S && !x ? (u[p] = void 0) : (u[p] = (x || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Gg(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Mn(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (l += "\\/*$")
        : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Kg(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Mn(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function wr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Yg(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Bt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Jg(n, t)) : t,
    search: Zg(r),
    hash: qg(l),
  };
}
function Jg(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ni(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function $f(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Yo(e, t) {
  let n = $f(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Jo(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Bt(e))
    : ((l = de({}, e)),
      Y(
        !l.pathname || !l.pathname.includes("?"),
        Ni("?", "pathname", "search", l),
      ),
      Y(
        !l.pathname || !l.pathname.includes("#"),
        Ni("#", "pathname", "hash", l),
      ),
      Y(!l.search || !l.search.includes("#"), Ni("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith("..")) {
      let p = i.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      l.pathname = p.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let s = Yg(l, a),
    u = i && i !== "/" && i.endsWith("/"),
    c = (o || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const It = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Xg = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Zg = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  qg = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class Ps {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function _s(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Vf = ["post", "put", "patch", "delete"],
  ev = new Set(Vf),
  tv = ["get", ...Vf],
  nv = new Set(tv),
  rv = new Set([301, 302, 303, 307, 308]),
  lv = new Set([307, 308]),
  Li = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  ov = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Or = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Rs = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  iv = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Wf = "remix-router-transitions";
function av(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  Y(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let v = e.detectErrorBoundary;
    l = (w) => ({ hasErrorBoundary: v(w) });
  } else l = iv;
  let o = {},
    i = Pa(e.routes, l, void 0, o),
    a,
    s = e.basename || "/",
    u = e.unstable_dataStrategy || dv,
    c = de(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    f = null,
    p = new Set(),
    S = null,
    x = null,
    y = null,
    R = e.hydrationData != null,
    h = er(i, e.history.location, s),
    d = null;
  if (h == null) {
    let v = ot(404, { pathname: e.history.location.pathname }),
      { matches: w, route: k } = cc(i);
    (h = w), (d = { [k.id]: v });
  }
  let m,
    C = h.some((v) => v.route.lazy),
    z = h.some((v) => v.route.loader);
  if (C) m = !1;
  else if (!z) m = !0;
  else if (c.v7_partialHydration) {
    let v = e.hydrationData ? e.hydrationData.loaderData : null,
      w = e.hydrationData ? e.hydrationData.errors : null,
      k = (L) =>
        L.route.loader
          ? typeof L.route.loader == "function" && L.route.loader.hydrate === !0
            ? !1
            : (v && v[L.route.id] !== void 0) || (w && w[L.route.id] !== void 0)
          : !0;
    if (w) {
      let L = h.findIndex((I) => w[I.route.id] !== void 0);
      m = h.slice(0, L + 1).every(k);
    } else m = h.every(k);
  } else m = e.hydrationData != null;
  let T,
    g = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: h,
      initialized: m,
      navigation: Li,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    j = ye.Pop,
    O = !1,
    M,
    K = !1,
    B = new Map(),
    re = null,
    me = !1,
    Be = !1,
    Ge = [],
    pt = [],
    N = new Map(),
    A = 0,
    b = -1,
    X = new Map(),
    q = new Set(),
    ht = new Map(),
    Ke = new Map(),
    Ye = new Set(),
    Ie = new Map(),
    rt = new Map(),
    qo = !1;
  function op() {
    if (
      ((f = e.history.listen((v) => {
        let { action: w, location: k, delta: L } = v;
        if (qo) {
          qo = !1;
          return;
        }
        Mn(
          rt.size === 0 || L != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let I = Os({
          currentLocation: g.location,
          nextLocation: k,
          historyAction: w,
        });
        if (I && L != null) {
          (qo = !0),
            e.history.go(L * -1),
            _l(I, {
              state: "blocked",
              location: k,
              proceed() {
                _l(I, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(L);
              },
              reset() {
                let W = new Map(g.blockers);
                W.set(I, Or), Je({ blockers: W });
              },
            });
          return;
        }
        return vn(w, k);
      })),
      n)
    ) {
      Ev(t, B);
      let v = () => Cv(t, B);
      t.addEventListener("pagehide", v),
        (re = () => t.removeEventListener("pagehide", v));
    }
    return g.initialized || vn(ye.Pop, g.location, { initialHydration: !0 }), T;
  }
  function ip() {
    f && f(),
      re && re(),
      p.clear(),
      M && M.abort(),
      g.fetchers.forEach((v, w) => Pl(w)),
      g.blockers.forEach((v, w) => Fs(w));
  }
  function ap(v) {
    return p.add(v), () => p.delete(v);
  }
  function Je(v, w) {
    w === void 0 && (w = {}), (g = de({}, g, v));
    let k = [],
      L = [];
    c.v7_fetcherPersist &&
      g.fetchers.forEach((I, W) => {
        I.state === "idle" && (Ye.has(W) ? L.push(W) : k.push(W));
      }),
      [...p].forEach((I) =>
        I(g, {
          deletedFetchers: L,
          unstable_viewTransitionOpts: w.viewTransitionOpts,
          unstable_flushSync: w.flushSync === !0,
        }),
      ),
      c.v7_fetcherPersist &&
        (k.forEach((I) => g.fetchers.delete(I)), L.forEach((I) => Pl(I)));
  }
  function Sr(v, w, k) {
    var L, I;
    let { flushSync: W } = k === void 0 ? {} : k,
      U =
        g.actionData != null &&
        g.navigation.formMethod != null &&
        yt(g.navigation.formMethod) &&
        g.navigation.state === "loading" &&
        ((L = v.state) == null ? void 0 : L._isRedirect) !== !0,
      F;
    w.actionData
      ? Object.keys(w.actionData).length > 0
        ? (F = w.actionData)
        : (F = null)
      : U
        ? (F = g.actionData)
        : (F = null);
    let H = w.loaderData
        ? sc(g.loaderData, w.loaderData, w.matches || [], w.errors)
        : g.loaderData,
      V = g.blockers;
    V.size > 0 && ((V = new Map(V)), V.forEach(($, se) => V.set(se, Or)));
    let Pe =
      O === !0 ||
      (g.navigation.formMethod != null &&
        yt(g.navigation.formMethod) &&
        ((I = v.state) == null ? void 0 : I._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      me ||
        j === ye.Pop ||
        (j === ye.Push
          ? e.history.push(v, v.state)
          : j === ye.Replace && e.history.replace(v, v.state));
    let _e;
    if (j === ye.Pop) {
      let $ = B.get(g.location.pathname);
      $ && $.has(v.pathname)
        ? (_e = { currentLocation: g.location, nextLocation: v })
        : B.has(v.pathname) &&
          (_e = { currentLocation: v, nextLocation: g.location });
    } else if (K) {
      let $ = B.get(g.location.pathname);
      $
        ? $.add(v.pathname)
        : (($ = new Set([v.pathname])), B.set(g.location.pathname, $)),
        (_e = { currentLocation: g.location, nextLocation: v });
    }
    Je(
      de({}, w, {
        actionData: F,
        loaderData: H,
        historyAction: j,
        location: v,
        initialized: !0,
        navigation: Li,
        revalidation: "idle",
        restoreScrollPosition: Us(v, w.matches || g.matches),
        preventScrollReset: Pe,
        blockers: V,
      }),
      { viewTransitionOpts: _e, flushSync: W === !0 },
    ),
      (j = ye.Pop),
      (O = !1),
      (K = !1),
      (me = !1),
      (Be = !1),
      (Ge = []),
      (pt = []);
  }
  async function zs(v, w) {
    if (typeof v == "number") {
      e.history.go(v);
      return;
    }
    let k = _a(
        g.location,
        g.matches,
        s,
        c.v7_prependBasename,
        v,
        c.v7_relativeSplatPath,
        w == null ? void 0 : w.fromRouteId,
        w == null ? void 0 : w.relative,
      ),
      {
        path: L,
        submission: I,
        error: W,
      } = tc(c.v7_normalizeFormMethod, !1, k, w),
      U = g.location,
      F = vl(g.location, L, w && w.state);
    F = de({}, F, e.history.encodeLocation(F));
    let H = w && w.replace != null ? w.replace : void 0,
      V = ye.Push;
    H === !0
      ? (V = ye.Replace)
      : H === !1 ||
        (I != null &&
          yt(I.formMethod) &&
          I.formAction === g.location.pathname + g.location.search &&
          (V = ye.Replace));
    let Pe =
        w && "preventScrollReset" in w ? w.preventScrollReset === !0 : void 0,
      _e = (w && w.unstable_flushSync) === !0,
      $ = Os({ currentLocation: U, nextLocation: F, historyAction: V });
    if ($) {
      _l($, {
        state: "blocked",
        location: F,
        proceed() {
          _l($, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            zs(v, w);
        },
        reset() {
          let se = new Map(g.blockers);
          se.set($, Or), Je({ blockers: se });
        },
      });
      return;
    }
    return await vn(V, F, {
      submission: I,
      pendingError: W,
      preventScrollReset: Pe,
      replace: w && w.replace,
      enableViewTransition: w && w.unstable_viewTransition,
      flushSync: _e,
    });
  }
  function sp() {
    if (
      (ei(),
      Je({ revalidation: "loading" }),
      g.navigation.state !== "submitting")
    ) {
      if (g.navigation.state === "idle") {
        vn(g.historyAction, g.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      vn(j || g.historyAction, g.navigation.location, {
        overrideNavigation: g.navigation,
      });
    }
  }
  async function vn(v, w, k) {
    M && M.abort(),
      (M = null),
      (j = v),
      (me = (k && k.startUninterruptedRevalidation) === !0),
      vp(g.location, g.matches),
      (O = (k && k.preventScrollReset) === !0),
      (K = (k && k.enableViewTransition) === !0);
    let L = a || i,
      I = k && k.overrideNavigation,
      W = er(L, w, s),
      U = (k && k.flushSync) === !0;
    if (!W) {
      let $ = ot(404, { pathname: w.pathname }),
        { matches: se, route: ke } = cc(L);
      ti(),
        Sr(
          w,
          { matches: se, loaderData: {}, errors: { [ke.id]: $ } },
          { flushSync: U },
        );
      return;
    }
    if (
      g.initialized &&
      !Be &&
      vv(g.location, w) &&
      !(k && k.submission && yt(k.submission.formMethod))
    ) {
      Sr(w, { matches: W }, { flushSync: U });
      return;
    }
    M = new AbortController();
    let F = Bn(e.history, w, M.signal, k && k.submission),
      H;
    if (k && k.pendingError)
      H = [qr(W).route.id, { type: ue.error, error: k.pendingError }];
    else if (k && k.submission && yt(k.submission.formMethod)) {
      let $ = await up(F, w, k.submission, W, {
        replace: k.replace,
        flushSync: U,
      });
      if ($.shortCircuited) return;
      (H = $.pendingActionResult),
        (I = zi(w, k.submission)),
        (U = !1),
        (F = Bn(e.history, F.url, F.signal));
    }
    let {
      shortCircuited: V,
      loaderData: Pe,
      errors: _e,
    } = await cp(
      F,
      w,
      W,
      I,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      k && k.initialHydration === !0,
      U,
      H,
    );
    V ||
      ((M = null),
      Sr(w, de({ matches: W }, uc(H), { loaderData: Pe, errors: _e })));
  }
  async function up(v, w, k, L, I) {
    I === void 0 && (I = {}), ei();
    let W = Sv(w, k);
    Je({ navigation: W }, { flushSync: I.flushSync === !0 });
    let U,
      F = Na(L, w);
    if (!F.route.action && !F.route.lazy)
      U = {
        type: ue.error,
        error: ot(405, {
          method: v.method,
          pathname: w.pathname,
          routeId: F.route.id,
        }),
      };
    else if (((U = (await Er("action", v, [F], L))[0]), v.signal.aborted))
      return { shortCircuited: !0 };
    if (Pn(U)) {
      let H;
      return (
        I && I.replace != null
          ? (H = I.replace)
          : (H =
              oc(U.response.headers.get("Location"), new URL(v.url), s) ===
              g.location.pathname + g.location.search),
        await kr(v, U, { submission: k, replace: H }),
        { shortCircuited: !0 }
      );
    }
    if (Cn(U)) throw ot(400, { type: "defer-action" });
    if (st(U)) {
      let H = qr(L, F.route.id);
      return (
        (I && I.replace) !== !0 && (j = ye.Push),
        { pendingActionResult: [H.route.id, U] }
      );
    }
    return { pendingActionResult: [F.route.id, U] };
  }
  async function cp(v, w, k, L, I, W, U, F, H, V) {
    let Pe = L || zi(w, I),
      _e = I || W || pc(Pe),
      $ = a || i,
      [se, ke] = nc(
        e.history,
        g,
        k,
        _e,
        w,
        c.v7_partialHydration && F === !0,
        c.unstable_skipActionErrorRevalidation,
        Be,
        Ge,
        pt,
        Ye,
        ht,
        q,
        $,
        s,
        V,
      );
    if (
      (ti(
        (Z) =>
          !(k && k.some((Fe) => Fe.route.id === Z)) ||
          (se && se.some((Fe) => Fe.route.id === Z)),
      ),
      (b = ++A),
      se.length === 0 && ke.length === 0)
    ) {
      let Z = Ds();
      return (
        Sr(
          w,
          de(
            {
              matches: k,
              loaderData: {},
              errors: V && st(V[1]) ? { [V[0]]: V[1].error } : null,
            },
            uc(V),
            Z ? { fetchers: new Map(g.fetchers) } : {},
          ),
          { flushSync: H },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!me && (!c.v7_partialHydration || !F)) {
      ke.forEach((Fe) => {
        let lt = g.fetchers.get(Fe.key),
          Re = Ar(void 0, lt ? lt.data : void 0);
        g.fetchers.set(Fe.key, Re);
      });
      let Z;
      V && !st(V[1])
        ? (Z = { [V[0]]: V[1].data })
        : g.actionData &&
          (Object.keys(g.actionData).length === 0
            ? (Z = null)
            : (Z = g.actionData)),
        Je(
          de(
            { navigation: Pe },
            Z !== void 0 ? { actionData: Z } : {},
            ke.length > 0 ? { fetchers: new Map(g.fetchers) } : {},
          ),
          { flushSync: H },
        );
    }
    ke.forEach((Z) => {
      N.has(Z.key) && Wt(Z.key), Z.controller && N.set(Z.key, Z.controller);
    });
    let Pr = () => ke.forEach((Z) => Wt(Z.key));
    M && M.signal.addEventListener("abort", Pr);
    let { loaderResults: Ht, fetcherResults: On } = await js(
      g.matches,
      k,
      se,
      ke,
      v,
    );
    if (v.signal.aborted) return { shortCircuited: !0 };
    M && M.signal.removeEventListener("abort", Pr),
      ke.forEach((Z) => N.delete(Z.key));
    let An = dc([...Ht, ...On]);
    if (An) {
      if (An.idx >= se.length) {
        let Z = ke[An.idx - se.length].key;
        q.add(Z);
      }
      return await kr(v, An.result, { replace: U }), { shortCircuited: !0 };
    }
    let { loaderData: Un, errors: Et } = ac(g, k, se, Ht, V, ke, On, Ie);
    Ie.forEach((Z, Fe) => {
      Z.subscribe((lt) => {
        (lt || Z.done) && Ie.delete(Fe);
      });
    }),
      c.v7_partialHydration &&
        F &&
        g.errors &&
        Object.entries(g.errors)
          .filter((Z) => {
            let [Fe] = Z;
            return !se.some((lt) => lt.route.id === Fe);
          })
          .forEach((Z) => {
            let [Fe, lt] = Z;
            Et = Object.assign(Et || {}, { [Fe]: lt });
          });
    let Rl = Ds(),
      Nl = Is(b),
      Ll = Rl || Nl || ke.length > 0;
    return de(
      { loaderData: Un, errors: Et },
      Ll ? { fetchers: new Map(g.fetchers) } : {},
    );
  }
  function dp(v, w, k, L) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    N.has(v) && Wt(v);
    let I = (L && L.unstable_flushSync) === !0,
      W = a || i,
      U = _a(
        g.location,
        g.matches,
        s,
        c.v7_prependBasename,
        k,
        c.v7_relativeSplatPath,
        w,
        L == null ? void 0 : L.relative,
      ),
      F = er(W, U, s);
    if (!F) {
      Cr(v, w, ot(404, { pathname: U }), { flushSync: I });
      return;
    }
    let {
      path: H,
      submission: V,
      error: Pe,
    } = tc(c.v7_normalizeFormMethod, !0, U, L);
    if (Pe) {
      Cr(v, w, Pe, { flushSync: I });
      return;
    }
    let _e = Na(F, H);
    if (((O = (L && L.preventScrollReset) === !0), V && yt(V.formMethod))) {
      fp(v, w, H, _e, F, I, V);
      return;
    }
    ht.set(v, { routeId: w, path: H }), pp(v, w, H, _e, F, I, V);
  }
  async function fp(v, w, k, L, I, W, U) {
    if ((ei(), ht.delete(v), !L.route.action && !L.route.lazy)) {
      let Re = ot(405, { method: U.formMethod, pathname: k, routeId: w });
      Cr(v, w, Re, { flushSync: W });
      return;
    }
    let F = g.fetchers.get(v);
    Vt(v, kv(U, F), { flushSync: W });
    let H = new AbortController(),
      V = Bn(e.history, k, H.signal, U);
    N.set(v, H);
    let Pe = A,
      $ = (await Er("action", V, [L], I))[0];
    if (V.signal.aborted) {
      N.get(v) === H && N.delete(v);
      return;
    }
    if (c.v7_fetcherPersist && Ye.has(v)) {
      if (Pn($) || st($)) {
        Vt(v, Yt(void 0));
        return;
      }
    } else {
      if (Pn($))
        if ((N.delete(v), b > Pe)) {
          Vt(v, Yt(void 0));
          return;
        } else
          return q.add(v), Vt(v, Ar(U)), kr(V, $, { fetcherSubmission: U });
      if (st($)) {
        Cr(v, w, $.error);
        return;
      }
    }
    if (Cn($)) throw ot(400, { type: "defer-action" });
    let se = g.navigation.location || g.location,
      ke = Bn(e.history, se, H.signal),
      Pr = a || i,
      Ht =
        g.navigation.state !== "idle"
          ? er(Pr, g.navigation.location, s)
          : g.matches;
    Y(Ht, "Didn't find any matches after fetcher action");
    let On = ++A;
    X.set(v, On);
    let An = Ar(U, $.data);
    g.fetchers.set(v, An);
    let [Un, Et] = nc(
      e.history,
      g,
      Ht,
      U,
      se,
      !1,
      c.unstable_skipActionErrorRevalidation,
      Be,
      Ge,
      pt,
      Ye,
      ht,
      q,
      Pr,
      s,
      [L.route.id, $],
    );
    Et.filter((Re) => Re.key !== v).forEach((Re) => {
      let _r = Re.key,
        bs = g.fetchers.get(_r),
        wp = Ar(void 0, bs ? bs.data : void 0);
      g.fetchers.set(_r, wp),
        N.has(_r) && Wt(_r),
        Re.controller && N.set(_r, Re.controller);
    }),
      Je({ fetchers: new Map(g.fetchers) });
    let Rl = () => Et.forEach((Re) => Wt(Re.key));
    H.signal.addEventListener("abort", Rl);
    let { loaderResults: Nl, fetcherResults: Ll } = await js(
      g.matches,
      Ht,
      Un,
      Et,
      ke,
    );
    if (H.signal.aborted) return;
    H.signal.removeEventListener("abort", Rl),
      X.delete(v),
      N.delete(v),
      Et.forEach((Re) => N.delete(Re.key));
    let Z = dc([...Nl, ...Ll]);
    if (Z) {
      if (Z.idx >= Un.length) {
        let Re = Et[Z.idx - Un.length].key;
        q.add(Re);
      }
      return kr(ke, Z.result);
    }
    let { loaderData: Fe, errors: lt } = ac(
      g,
      g.matches,
      Un,
      Nl,
      void 0,
      Et,
      Ll,
      Ie,
    );
    if (g.fetchers.has(v)) {
      let Re = Yt($.data);
      g.fetchers.set(v, Re);
    }
    Is(On),
      g.navigation.state === "loading" && On > b
        ? (Y(j, "Expected pending action"),
          M && M.abort(),
          Sr(g.navigation.location, {
            matches: Ht,
            loaderData: Fe,
            errors: lt,
            fetchers: new Map(g.fetchers),
          }))
        : (Je({
            errors: lt,
            loaderData: sc(g.loaderData, Fe, Ht, lt),
            fetchers: new Map(g.fetchers),
          }),
          (Be = !1));
  }
  async function pp(v, w, k, L, I, W, U) {
    let F = g.fetchers.get(v);
    Vt(v, Ar(U, F ? F.data : void 0), { flushSync: W });
    let H = new AbortController(),
      V = Bn(e.history, k, H.signal);
    N.set(v, H);
    let Pe = A,
      $ = (await Er("loader", V, [L], I))[0];
    if (
      (Cn($) && ($ = (await Kf($, V.signal, !0)) || $),
      N.get(v) === H && N.delete(v),
      !V.signal.aborted)
    ) {
      if (Ye.has(v)) {
        Vt(v, Yt(void 0));
        return;
      }
      if (Pn($))
        if (b > Pe) {
          Vt(v, Yt(void 0));
          return;
        } else {
          q.add(v), await kr(V, $);
          return;
        }
      if (st($)) {
        Cr(v, w, $.error);
        return;
      }
      Y(!Cn($), "Unhandled fetcher deferred data"), Vt(v, Yt($.data));
    }
  }
  async function kr(v, w, k) {
    let {
      submission: L,
      fetcherSubmission: I,
      replace: W,
    } = k === void 0 ? {} : k;
    w.response.headers.has("X-Remix-Revalidate") && (Be = !0);
    let U = w.response.headers.get("Location");
    Y(U, "Expected a Location header on the redirect Response"),
      (U = oc(U, new URL(v.url), s));
    let F = vl(g.location, U, { _isRedirect: !0 });
    if (n) {
      let se = !1;
      if (w.response.headers.has("X-Remix-Reload-Document")) se = !0;
      else if (Rs.test(U)) {
        const ke = e.history.createURL(U);
        se = ke.origin !== t.location.origin || wr(ke.pathname, s) == null;
      }
      if (se) {
        W ? t.location.replace(U) : t.location.assign(U);
        return;
      }
    }
    M = null;
    let H = W === !0 ? ye.Replace : ye.Push,
      { formMethod: V, formAction: Pe, formEncType: _e } = g.navigation;
    !L && !I && V && Pe && _e && (L = pc(g.navigation));
    let $ = L || I;
    if (lv.has(w.response.status) && $ && yt($.formMethod))
      await vn(H, F, {
        submission: de({}, $, { formAction: U }),
        preventScrollReset: O,
      });
    else {
      let se = zi(F, L);
      await vn(H, F, {
        overrideNavigation: se,
        fetcherSubmission: I,
        preventScrollReset: O,
      });
    }
  }
  async function Er(v, w, k, L) {
    try {
      let I = await fv(u, v, w, k, L, o, l);
      return await Promise.all(
        I.map((W, U) => {
          if (yv(W)) {
            let F = W.result;
            return {
              type: ue.redirect,
              response: mv(F, w, k[U].route.id, L, s, c.v7_relativeSplatPath),
            };
          }
          return hv(W);
        }),
      );
    } catch (I) {
      return k.map(() => ({ type: ue.error, error: I }));
    }
  }
  async function js(v, w, k, L, I) {
    let [W, ...U] = await Promise.all([
      k.length ? Er("loader", I, k, w) : [],
      ...L.map((F) => {
        if (F.matches && F.match && F.controller) {
          let H = Bn(e.history, F.path, F.controller.signal);
          return Er("loader", H, [F.match], F.matches).then((V) => V[0]);
        } else
          return Promise.resolve({
            type: ue.error,
            error: ot(404, { pathname: F.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        fc(
          v,
          k,
          W,
          W.map(() => I.signal),
          !1,
          g.loaderData,
        ),
        fc(
          v,
          L.map((F) => F.match),
          U,
          L.map((F) => (F.controller ? F.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: W, fetcherResults: U }
    );
  }
  function ei() {
    (Be = !0),
      Ge.push(...ti()),
      ht.forEach((v, w) => {
        N.has(w) && (pt.push(w), Wt(w));
      });
  }
  function Vt(v, w, k) {
    k === void 0 && (k = {}),
      g.fetchers.set(v, w),
      Je(
        { fetchers: new Map(g.fetchers) },
        { flushSync: (k && k.flushSync) === !0 },
      );
  }
  function Cr(v, w, k, L) {
    L === void 0 && (L = {});
    let I = qr(g.matches, w);
    Pl(v),
      Je(
        { errors: { [I.route.id]: k }, fetchers: new Map(g.fetchers) },
        { flushSync: (L && L.flushSync) === !0 },
      );
  }
  function Ts(v) {
    return (
      c.v7_fetcherPersist &&
        (Ke.set(v, (Ke.get(v) || 0) + 1), Ye.has(v) && Ye.delete(v)),
      g.fetchers.get(v) || ov
    );
  }
  function Pl(v) {
    let w = g.fetchers.get(v);
    N.has(v) && !(w && w.state === "loading" && X.has(v)) && Wt(v),
      ht.delete(v),
      X.delete(v),
      q.delete(v),
      Ye.delete(v),
      g.fetchers.delete(v);
  }
  function hp(v) {
    if (c.v7_fetcherPersist) {
      let w = (Ke.get(v) || 0) - 1;
      w <= 0 ? (Ke.delete(v), Ye.add(v)) : Ke.set(v, w);
    } else Pl(v);
    Je({ fetchers: new Map(g.fetchers) });
  }
  function Wt(v) {
    let w = N.get(v);
    Y(w, "Expected fetch controller: " + v), w.abort(), N.delete(v);
  }
  function Ms(v) {
    for (let w of v) {
      let k = Ts(w),
        L = Yt(k.data);
      g.fetchers.set(w, L);
    }
  }
  function Ds() {
    let v = [],
      w = !1;
    for (let k of q) {
      let L = g.fetchers.get(k);
      Y(L, "Expected fetcher: " + k),
        L.state === "loading" && (q.delete(k), v.push(k), (w = !0));
    }
    return Ms(v), w;
  }
  function Is(v) {
    let w = [];
    for (let [k, L] of X)
      if (L < v) {
        let I = g.fetchers.get(k);
        Y(I, "Expected fetcher: " + k),
          I.state === "loading" && (Wt(k), X.delete(k), w.push(k));
      }
    return Ms(w), w.length > 0;
  }
  function mp(v, w) {
    let k = g.blockers.get(v) || Or;
    return rt.get(v) !== w && rt.set(v, w), k;
  }
  function Fs(v) {
    g.blockers.delete(v), rt.delete(v);
  }
  function _l(v, w) {
    let k = g.blockers.get(v) || Or;
    Y(
      (k.state === "unblocked" && w.state === "blocked") ||
        (k.state === "blocked" && w.state === "blocked") ||
        (k.state === "blocked" && w.state === "proceeding") ||
        (k.state === "blocked" && w.state === "unblocked") ||
        (k.state === "proceeding" && w.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + w.state,
    );
    let L = new Map(g.blockers);
    L.set(v, w), Je({ blockers: L });
  }
  function Os(v) {
    let { currentLocation: w, nextLocation: k, historyAction: L } = v;
    if (rt.size === 0) return;
    rt.size > 1 && Mn(!1, "A router only supports one blocker at a time");
    let I = Array.from(rt.entries()),
      [W, U] = I[I.length - 1],
      F = g.blockers.get(W);
    if (
      !(F && F.state === "proceeding") &&
      U({ currentLocation: w, nextLocation: k, historyAction: L })
    )
      return W;
  }
  function ti(v) {
    let w = [];
    return (
      Ie.forEach((k, L) => {
        (!v || v(L)) && (k.cancel(), w.push(L), Ie.delete(L));
      }),
      w
    );
  }
  function gp(v, w, k) {
    if (((S = v), (y = w), (x = k || null), !R && g.navigation === Li)) {
      R = !0;
      let L = Us(g.location, g.matches);
      L != null && Je({ restoreScrollPosition: L });
    }
    return () => {
      (S = null), (y = null), (x = null);
    };
  }
  function As(v, w) {
    return (
      (x &&
        x(
          v,
          w.map((L) => Ig(L, g.loaderData)),
        )) ||
      v.key
    );
  }
  function vp(v, w) {
    if (S && y) {
      let k = As(v, w);
      S[k] = y();
    }
  }
  function Us(v, w) {
    if (S) {
      let k = As(v, w),
        L = S[k];
      if (typeof L == "number") return L;
    }
    return null;
  }
  function yp(v) {
    (o = {}), (a = Pa(v, l, void 0, o));
  }
  return (
    (T = {
      get basename() {
        return s;
      },
      get future() {
        return c;
      },
      get state() {
        return g;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: op,
      subscribe: ap,
      enableScrollRestoration: gp,
      navigate: zs,
      fetch: dp,
      revalidate: sp,
      createHref: (v) => e.history.createHref(v),
      encodeLocation: (v) => e.history.encodeLocation(v),
      getFetcher: Ts,
      deleteFetcher: hp,
      dispose: ip,
      getBlocker: mp,
      deleteBlocker: Fs,
      _internalFetchControllers: N,
      _internalActiveDeferreds: Ie,
      _internalSetRoutes: yp,
    }),
    T
  );
}
function sv(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function _a(e, t, n, r, l, o, i, a) {
  let s, u;
  if (i) {
    s = [];
    for (let f of t)
      if ((s.push(f), f.route.id === i)) {
        u = f;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let c = Jo(l || ".", Yo(s, o), wr(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((c.search = e.search), (c.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      u &&
      u.route.index &&
      !Ns(c.search) &&
      (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (c.pathname = c.pathname === "/" ? n : It([n, c.pathname])),
    Dn(c)
  );
}
function tc(e, t, n, r) {
  if (!r || !sv(r)) return { path: n };
  if (r.formMethod && !xv(r.formMethod))
    return { path: n, error: ot(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: ot(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = Qf(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!yt(i)) return l();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((S, x) => {
                let [y, R] = x;
                return (
                  "" +
                  S +
                  y +
                  "=" +
                  R +
                  `
`
                );
              }, "")
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!yt(i)) return l();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  Y(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let s, u;
  if (r.formData) (s = Ra(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = Ra(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = ic(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = ic(s));
    } catch {
      return l();
    }
  let c = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (yt(c.formMethod)) return { path: n, submission: c };
  let f = Bt(n);
  return (
    t && f.search && Ns(f.search) && s.append("index", ""),
    (f.search = "?" + s),
    { path: Dn(f), submission: c }
  );
}
function uv(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function nc(e, t, n, r, l, o, i, a, s, u, c, f, p, S, x, y) {
  let R = y ? (st(y[1]) ? y[1].error : y[1].data) : void 0,
    h = e.createURL(t.location),
    d = e.createURL(l),
    m = y && st(y[1]) ? y[0] : void 0,
    C = m ? uv(n, m) : n,
    z = y ? y[1].statusCode : void 0,
    T = i && z && z >= 400,
    g = C.filter((O, M) => {
      let { route: K } = O;
      if (K.lazy) return !0;
      if (K.loader == null) return !1;
      if (o)
        return typeof K.loader != "function" || K.loader.hydrate
          ? !0
          : t.loaderData[K.id] === void 0 &&
              (!t.errors || t.errors[K.id] === void 0);
      if (
        cv(t.loaderData, t.matches[M], O) ||
        s.some((me) => me === O.route.id)
      )
        return !0;
      let B = t.matches[M],
        re = O;
      return rc(
        O,
        de(
          {
            currentUrl: h,
            currentParams: B.params,
            nextUrl: d,
            nextParams: re.params,
          },
          r,
          {
            actionResult: R,
            unstable_actionStatus: z,
            defaultShouldRevalidate: T
              ? !1
              : a ||
                h.pathname + h.search === d.pathname + d.search ||
                h.search !== d.search ||
                Hf(B, re),
          },
        ),
      );
    }),
    j = [];
  return (
    f.forEach((O, M) => {
      if (o || !n.some((Be) => Be.route.id === O.routeId) || c.has(M)) return;
      let K = er(S, O.path, x);
      if (!K) {
        j.push({
          key: M,
          routeId: O.routeId,
          path: O.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let B = t.fetchers.get(M),
        re = Na(K, O.path),
        me = !1;
      p.has(M)
        ? (me = !1)
        : u.includes(M)
          ? (me = !0)
          : B && B.state !== "idle" && B.data === void 0
            ? (me = a)
            : (me = rc(
                re,
                de(
                  {
                    currentUrl: h,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: d,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: R,
                    unstable_actionStatus: z,
                    defaultShouldRevalidate: T ? !1 : a,
                  },
                ),
              )),
        me &&
          j.push({
            key: M,
            routeId: O.routeId,
            path: O.path,
            matches: K,
            match: re,
            controller: new AbortController(),
          });
    }),
    [g, j]
  );
}
function cv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Hf(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function rc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function lc(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  Y(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let s = l[i] !== void 0 && i !== "hasErrorBoundary";
    Mn(
      !s,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.'),
    ),
      !s && !Mg.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, de({}, t(l), { lazy: void 0 }));
}
function dv(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function fv(e, t, n, r, l, o, i, a) {
  let s = r.reduce((f, p) => f.add(p.route.id), new Set()),
    u = new Set(),
    c = await e({
      matches: l.map((f) => {
        let p = s.has(f.route.id);
        return de({}, f, {
          shouldLoad: p,
          resolve: (x) => (
            u.add(f.route.id),
            p
              ? pv(t, n, f, o, i, x, a)
              : Promise.resolve({ type: ue.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: l[0].params,
      context: a,
    });
  return (
    l.forEach((f) =>
      Y(
        u.has(f.route.id),
        '`match.resolve()` was not called for route id "' +
          f.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    c.filter((f, p) => s.has(l[p].route.id))
  );
}
async function pv(e, t, n, r, l, o, i) {
  let a,
    s,
    u = (c) => {
      let f,
        p = new Promise((y, R) => (f = R));
      (s = () => f()), t.signal.addEventListener("abort", s);
      let S = (y) =>
          typeof c != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]"),
                ),
              )
            : c(
                { request: t, params: n.params, context: i },
                ...(y !== void 0 ? [y] : []),
              ),
        x;
      return (
        o
          ? (x = o((y) => S(y)))
          : (x = (async () => {
              try {
                return { type: "data", result: await S() };
              } catch (y) {
                return { type: "error", result: y };
              }
            })()),
        Promise.race([x, p])
      );
    };
  try {
    let c = n.route[e];
    if (n.route.lazy)
      if (c) {
        let f,
          [p] = await Promise.all([
            u(c).catch((S) => {
              f = S;
            }),
            lc(n.route, l, r),
          ]);
        if (f !== void 0) throw f;
        a = p;
      } else if ((await lc(n.route, l, r), (c = n.route[e]), c)) a = await u(c);
      else if (e === "action") {
        let f = new URL(t.url),
          p = f.pathname + f.search;
        throw ot(405, { method: t.method, pathname: p, routeId: n.route.id });
      } else return { type: ue.data, result: void 0 };
    else if (c) a = await u(c);
    else {
      let f = new URL(t.url),
        p = f.pathname + f.search;
      throw ot(404, { pathname: p });
    }
    Y(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (c) {
    return { type: ue.error, result: c };
  } finally {
    s && t.signal.removeEventListener("abort", s);
  }
  return a;
}
async function hv(e) {
  let { result: t, type: n, status: r } = e;
  if (Gf(t)) {
    let i;
    try {
      let a = t.headers.get("Content-Type");
      a && /\bapplication\/json\b/.test(a)
        ? t.body == null
          ? (i = null)
          : (i = await t.json())
        : (i = await t.text());
    } catch (a) {
      return { type: ue.error, error: a };
    }
    return n === ue.error
      ? {
          type: ue.error,
          error: new Ps(t.status, t.statusText, i),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: ue.data, data: i, statusCode: t.status, headers: t.headers };
  }
  if (n === ue.error)
    return { type: ue.error, error: t, statusCode: _s(t) ? t.status : r };
  if (wv(t)) {
    var l, o;
    return {
      type: ue.deferred,
      deferredData: t,
      statusCode: (l = t.init) == null ? void 0 : l.status,
      headers:
        ((o = t.init) == null ? void 0 : o.headers) &&
        new Headers(t.init.headers),
    };
  }
  return { type: ue.data, data: t, statusCode: r };
}
function mv(e, t, n, r, l, o) {
  let i = e.headers.get("Location");
  if (
    (Y(
      i,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !Rs.test(i))
  ) {
    let a = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
    (i = _a(new URL(t.url), a, l, !0, i, o)), e.headers.set("Location", i);
  }
  return e;
}
function oc(e, t, n) {
  if (Rs.test(e)) {
    let r = e,
      l = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      o = wr(l.pathname, n) != null;
    if (l.origin === t.origin && o) return l.pathname + l.search + l.hash;
  }
  return e;
}
function Bn(e, t, n, r) {
  let l = e.createURL(Qf(t)).toString(),
    o = { signal: n };
  if (r && yt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
          ? (o.body = r.text)
          : a === "application/x-www-form-urlencoded" && r.formData
            ? (o.body = Ra(r.formData))
            : (o.body = r.formData);
  }
  return new Request(l, o);
}
function Ra(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function ic(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function gv(e, t, n, r, l, o) {
  let i = {},
    a = null,
    s,
    u = !1,
    c = {},
    f = r && st(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((p, S) => {
      let x = t[S].route.id;
      if (
        (Y(!Pn(p), "Cannot handle redirect results in processLoaderData"),
        st(p))
      ) {
        let y = p.error;
        f !== void 0 && ((y = f), (f = void 0)), (a = a || {});
        {
          let R = qr(e, x);
          a[R.route.id] == null && (a[R.route.id] = y);
        }
        (i[x] = void 0),
          u || ((u = !0), (s = _s(p.error) ? p.error.status : 500)),
          p.headers && (c[x] = p.headers);
      } else
        Cn(p)
          ? (l.set(x, p.deferredData),
            (i[x] = p.deferredData.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !u &&
              (s = p.statusCode),
            p.headers && (c[x] = p.headers))
          : ((i[x] = p.data),
            p.statusCode && p.statusCode !== 200 && !u && (s = p.statusCode),
            p.headers && (c[x] = p.headers));
    }),
    f !== void 0 && r && ((a = { [r[0]]: f }), (i[r[0]] = void 0)),
    { loaderData: i, errors: a, statusCode: s || 200, loaderHeaders: c }
  );
}
function ac(e, t, n, r, l, o, i, a) {
  let { loaderData: s, errors: u } = gv(t, n, r, l, a);
  for (let c = 0; c < o.length; c++) {
    let { key: f, match: p, controller: S } = o[c];
    Y(
      i !== void 0 && i[c] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let x = i[c];
    if (!(S && S.signal.aborted))
      if (st(x)) {
        let y = qr(e.matches, p == null ? void 0 : p.route.id);
        (u && u[y.route.id]) || (u = de({}, u, { [y.route.id]: x.error })),
          e.fetchers.delete(f);
      } else if (Pn(x)) Y(!1, "Unhandled fetcher revalidation redirect");
      else if (Cn(x)) Y(!1, "Unhandled fetcher deferred data");
      else {
        let y = Yt(x.data);
        e.fetchers.set(f, y);
      }
  }
  return { loaderData: s, errors: u };
}
function sc(e, t, n, r) {
  let l = de({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function uc(e) {
  return e
    ? st(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function qr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function cc(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function ot(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
            ? (a = "defer() is not supported in actions")
            : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
        ? ((i = "Forbidden"),
          (a = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((i = "Method Not Allowed"),
            l && n && r
              ? (a =
                  "You made a " +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  "so there is no way to handle the request.")
              : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new Ps(e || 500, i, new Error(a), !0)
  );
}
function dc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Pn(n)) return { result: n, idx: t };
  }
}
function Qf(e) {
  let t = typeof e == "string" ? Bt(e) : e;
  return Dn(de({}, t, { hash: "" }));
}
function vv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function yv(e) {
  return Gf(e.result) && rv.has(e.result.status);
}
function Cn(e) {
  return e.type === ue.deferred;
}
function st(e) {
  return e.type === ue.error;
}
function Pn(e) {
  return (e && e.type) === ue.redirect;
}
function wv(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Gf(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function xv(e) {
  return nv.has(e.toLowerCase());
}
function yt(e) {
  return ev.has(e.toLowerCase());
}
async function fc(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      s = t[i];
    if (!s) continue;
    let u = e.find((f) => f.route.id === s.route.id),
      c = u != null && !Hf(u, s) && (o && o[s.route.id]) !== void 0;
    if (Cn(a) && (l || c)) {
      let f = r[i];
      Y(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Kf(a, f, l).then((p) => {
          p && (n[i] = p || n[i]);
        });
    }
  }
}
async function Kf(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ue.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: ue.error, error: l };
      }
    return { type: ue.data, data: e.deferredData.data };
  }
}
function Ns(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Na(e, t) {
  let n = typeof t == "string" ? Bt(t).search : t.search;
  if (e[e.length - 1].route.index && Ns(n || "")) return e[e.length - 1];
  let r = $f(e);
  return r[r.length - 1];
}
function pc(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function zi(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Sv(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Ar(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function kv(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Yt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Ev(e, t) {
  try {
    let n = e.sessionStorage.getItem(Wf);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function Cv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Wf, JSON.stringify(n));
    } catch (r) {
      Mn(
        !1,
        "Failed to save applied view transitions in sessionStorage (" +
          r +
          ").",
      );
    }
  }
}
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function jo() {
  return (
    (jo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    jo.apply(this, arguments)
  );
}
const Xo = _.createContext(null),
  Yf = _.createContext(null),
  gn = _.createContext(null),
  Ls = _.createContext(null),
  $t = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Jf = _.createContext(null);
function Pv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  xr() || Y(!1);
  let { basename: r, navigator: l } = _.useContext(gn),
    { hash: o, pathname: i, search: a } = qf(e, { relative: n }),
    s = i;
  return (
    r !== "/" && (s = i === "/" ? r : It([r, i])),
    l.createHref({ pathname: s, search: a, hash: o })
  );
}
function xr() {
  return _.useContext(Ls) != null;
}
function Cl() {
  return xr() || Y(!1), _.useContext(Ls).location;
}
function Xf(e) {
  _.useContext(gn).static || _.useLayoutEffect(e);
}
function Zf() {
  let { isDataRoute: e } = _.useContext($t);
  return e ? Av() : _v();
}
function _v() {
  xr() || Y(!1);
  let e = _.useContext(Xo),
    { basename: t, future: n, navigator: r } = _.useContext(gn),
    { matches: l } = _.useContext($t),
    { pathname: o } = Cl(),
    i = JSON.stringify(Yo(l, n.v7_relativeSplatPath)),
    a = _.useRef(!1);
  return (
    Xf(() => {
      a.current = !0;
    }),
    _.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = Jo(u, JSON.parse(i), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : It([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, i, o, e],
    )
  );
}
function Rv() {
  let { matches: e } = _.useContext($t),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function qf(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = _.useContext(gn),
    { matches: l } = _.useContext($t),
    { pathname: o } = Cl(),
    i = JSON.stringify(Yo(l, r.v7_relativeSplatPath));
  return _.useMemo(() => Jo(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function Nv(e, t, n, r) {
  xr() || Y(!1);
  let { navigator: l } = _.useContext(gn),
    { matches: o } = _.useContext($t),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let u = Cl(),
    c;
  c = u;
  let f = c.pathname || "/",
    p = f;
  if (s !== "/") {
    let y = s.replace(/^\//, "").split("/");
    p = "/" + f.replace(/^\//, "").split("/").slice(y.length).join("/");
  }
  let S = er(e, { pathname: p });
  return Mv(
    S &&
      S.map((y) =>
        Object.assign({}, y, {
          params: Object.assign({}, a, y.params),
          pathname: It([
            s,
            l.encodeLocation
              ? l.encodeLocation(y.pathname).pathname
              : y.pathname,
          ]),
          pathnameBase:
            y.pathnameBase === "/"
              ? s
              : It([
                  s,
                  l.encodeLocation
                    ? l.encodeLocation(y.pathnameBase).pathname
                    : y.pathnameBase,
                ]),
        }),
      ),
    o,
    n,
    r,
  );
}
function Lv() {
  let e = Ov(),
    t = _s(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? _.createElement("pre", { style: l }, n) : null,
    null,
  );
}
const zv = _.createElement(Lv, null);
class jv extends _.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          $t.Provider,
          { value: this.props.routeContext },
          _.createElement(Jf.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Tv(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = _.useContext(Xo);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    _.createElement($t.Provider, { value: t }, r)
  );
}
function Mv(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let c = i.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
    );
    c >= 0 || Y(!1), (i = i.slice(0, Math.min(i.length, c + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let f = i[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: p, errors: S } = n,
          x =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!S || S[f.route.id] === void 0);
        if (f.route.lazy || x) {
          (s = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((c, f, p) => {
    let S,
      x = !1,
      y = null,
      R = null;
    n &&
      ((S = a && f.route.id ? a[f.route.id] : void 0),
      (y = f.route.errorElement || zv),
      s &&
        (u < 0 && p === 0
          ? ((x = !0), (R = null))
          : u === p &&
            ((x = !0), (R = f.route.hydrateFallbackElement || null))));
    let h = t.concat(i.slice(0, p + 1)),
      d = () => {
        let m;
        return (
          S
            ? (m = y)
            : x
              ? (m = R)
              : f.route.Component
                ? (m = _.createElement(f.route.Component, null))
                : f.route.element
                  ? (m = f.route.element)
                  : (m = c),
          _.createElement(Tv, {
            match: f,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? _.createElement(jv, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: S,
          children: d(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var ep = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(ep || {}),
  To = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(To || {});
function Dv(e) {
  let t = _.useContext(Xo);
  return t || Y(!1), t;
}
function Iv(e) {
  let t = _.useContext(Yf);
  return t || Y(!1), t;
}
function Fv(e) {
  let t = _.useContext($t);
  return t || Y(!1), t;
}
function tp(e) {
  let t = Fv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Y(!1), n.route.id;
}
function Ov() {
  var e;
  let t = _.useContext(Jf),
    n = Iv(To.UseRouteError),
    r = tp(To.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Av() {
  let { router: e } = Dv(ep.UseNavigateStable),
    t = tp(To.UseNavigateStable),
    n = _.useRef(!1);
  return (
    Xf(() => {
      n.current = !0;
    }),
    _.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, jo({ fromRouteId: t }, o)));
      },
      [e, t],
    )
  );
}
function np(e) {
  let { to: t, replace: n, state: r, relative: l } = e;
  xr() || Y(!1);
  let { future: o, static: i } = _.useContext(gn),
    { matches: a } = _.useContext($t),
    { pathname: s } = Cl(),
    u = Zf(),
    c = Jo(t, Yo(a, o.v7_relativeSplatPath), s, l === "path"),
    f = JSON.stringify(c);
  return (
    _.useEffect(
      () => u(JSON.parse(f), { replace: n, state: r, relative: l }),
      [u, f, l, n, r],
    ),
    null
  );
}
function Uv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ye.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  xr() && Y(!1);
  let s = t.replace(/^\/*/, "/"),
    u = _.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: i,
        future: jo({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, o, i],
    );
  typeof r == "string" && (r = Bt(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: p = "",
      state: S = null,
      key: x = "default",
    } = r,
    y = _.useMemo(() => {
      let R = wr(c, s);
      return R == null
        ? null
        : {
            location: { pathname: R, search: f, hash: p, state: S, key: x },
            navigationType: l,
          };
    }, [s, c, f, p, S, x, l]);
  return y == null
    ? null
    : _.createElement(
        gn.Provider,
        { value: u },
        _.createElement(Ls.Provider, { children: n, value: y }),
      );
}
new Promise(() => {});
function bv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: _.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: _.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: _.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yl() {
  return (
    (yl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yl.apply(this, arguments)
  );
}
function Bv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function $v(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Vv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !$v(e);
}
const Wv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Hv = "6";
try {
  window.__reactRouterVersion = Hv;
} catch {}
function Qv(e, t) {
  return av({
    basename: void 0,
    future: yl({}, void 0, { v7_prependBasename: !0 }),
    history: zg({ window: void 0 }),
    hydrationData: Gv(),
    routes: e,
    mapRouteProperties: bv,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function Gv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = yl({}, t, { errors: Kv(t.errors) })), t;
}
function Kv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new Ps(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const Yv = _.createContext({ isTransitioning: !1 }),
  Jv = _.createContext(new Map()),
  Xv = "startTransition",
  hc = Ip[Xv],
  Zv = "flushSync",
  mc = Gm[Zv];
function qv(e) {
  hc ? hc(e) : e();
}
function Ur(e) {
  mc ? mc(e) : e();
}
class ey {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function ty(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = _.useState(n.state),
    [i, a] = _.useState(),
    [s, u] = _.useState({ isTransitioning: !1 }),
    [c, f] = _.useState(),
    [p, S] = _.useState(),
    [x, y] = _.useState(),
    R = _.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    d = _.useCallback(
      (g) => {
        h ? qv(g) : g();
      },
      [h],
    ),
    m = _.useCallback(
      (g, j) => {
        let {
          deletedFetchers: O,
          unstable_flushSync: M,
          unstable_viewTransitionOpts: K,
        } = j;
        O.forEach((re) => R.current.delete(re)),
          g.fetchers.forEach((re, me) => {
            re.data !== void 0 && R.current.set(me, re.data);
          });
        let B =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!K || B) {
          M ? Ur(() => o(g)) : d(() => o(g));
          return;
        }
        if (M) {
          Ur(() => {
            p && (c && c.resolve(), p.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: K.currentLocation,
                nextLocation: K.nextLocation,
              });
          });
          let re = n.window.document.startViewTransition(() => {
            Ur(() => o(g));
          });
          re.finished.finally(() => {
            Ur(() => {
              f(void 0), S(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            Ur(() => S(re));
          return;
        }
        p
          ? (c && c.resolve(),
            p.skipTransition(),
            y({
              state: g,
              currentLocation: K.currentLocation,
              nextLocation: K.nextLocation,
            }))
          : (a(g),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: K.currentLocation,
              nextLocation: K.nextLocation,
            }));
      },
      [n.window, p, c, R, d],
    );
  _.useLayoutEffect(() => n.subscribe(m), [n, m]),
    _.useEffect(() => {
      s.isTransitioning && !s.flushSync && f(new ey());
    }, [s]),
    _.useEffect(() => {
      if (c && i && n.window) {
        let g = i,
          j = c.promise,
          O = n.window.document.startViewTransition(async () => {
            d(() => o(g)), await j;
          });
        O.finished.finally(() => {
          f(void 0), S(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          S(O);
      }
    }, [d, i, c, n.window]),
    _.useEffect(() => {
      c && i && l.location.key === i.location.key && c.resolve();
    }, [c, p, l.location, i]),
    _.useEffect(() => {
      !s.isTransitioning &&
        x &&
        (a(x.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: x.currentLocation,
          nextLocation: x.nextLocation,
        }),
        y(void 0));
    }, [s.isTransitioning, x]),
    _.useEffect(() => {}, []);
  let C = _.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (g) => n.navigate(g),
        push: (g, j, O) =>
          n.navigate(g, {
            state: j,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (g, j, O) =>
          n.navigate(g, {
            replace: !0,
            state: j,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [n],
    ),
    z = n.basename || "/",
    T = _.useMemo(
      () => ({ router: n, navigator: C, static: !1, basename: z }),
      [n, C, z],
    );
  return _.createElement(
    _.Fragment,
    null,
    _.createElement(
      Xo.Provider,
      { value: T },
      _.createElement(
        Yf.Provider,
        { value: l },
        _.createElement(
          Jv.Provider,
          { value: R.current },
          _.createElement(
            Yv.Provider,
            { value: s },
            _.createElement(
              Uv,
              {
                basename: z,
                location: l.location,
                navigationType: l.historyAction,
                navigator: C,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? _.createElement(ny, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function ny(e) {
  let { routes: t, future: n, state: r } = e;
  return Nv(t, void 0, r, n);
}
const ry =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ly = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  oy = _.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: s,
        to: u,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = t,
      p = Bv(t, Wv),
      { basename: S } = _.useContext(gn),
      x,
      y = !1;
    if (typeof u == "string" && ly.test(u) && ((x = u), ry))
      try {
        let m = new URL(window.location.href),
          C = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          z = wr(C.pathname, S);
        C.origin === m.origin && z != null
          ? (u = z + C.search + C.hash)
          : (y = !0);
      } catch {}
    let R = Pv(u, { relative: l }),
      h = iy(u, {
        replace: i,
        state: a,
        target: s,
        preventScrollReset: c,
        relative: l,
        unstable_viewTransition: f,
      });
    function d(m) {
      r && r(m), m.defaultPrevented || h(m);
    }
    return _.createElement(
      "a",
      yl({}, p, { href: x || R, onClick: y || o ? r : d, ref: n, target: s }),
    );
  });
var gc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(gc || (gc = {}));
var vc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(vc || (vc = {}));
function iy(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    s = Zf(),
    u = Cl(),
    c = qf(e, { relative: i });
  return _.useCallback(
    (f) => {
      if (Vv(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : Dn(u) === Dn(c);
        s(e, {
          replace: p,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: a,
        });
      }
    },
    [u, s, c, r, l, n, e, o, i, a],
  );
}
const ay = () =>
  E.jsx("h3", { className: "text-3xl", children: "Page Not Found" });
var ee = ((e) => (
  (e.vue = "Vue"),
  (e.react = "React"),
  (e.webgl = "WebGL"),
  (e.canvasApi = "Canvas API"),
  (e.webaudio = "WebAudio"),
  (e.antlr = "ANTLR"),
  (e.bootstrap = "Bootstrap"),
  (e.dsa = "Data Structures and Algorithms"),
  (e.excaliburJs = "ExcaliburJs"),
  (e.tool = "Tool"),
  e
))(ee || {});
Object.values(ee);
const sy = ({ skill: e, color: t }) => {
    const n = t || "secondary";
    return E.jsx("div", {
      className: yr("badge mr-2", `badge-${n} text-${n}-content`),
      children: e,
    });
  },
  rp = ({ skills: e, className: t, color: n }) =>
    E.jsx("div", {
      className: t,
      children: e
        .sort((r, l) => r.toLowerCase().localeCompare(l.toLowerCase()))
        .map((r) => E.jsx(sy, { skill: r, color: n }, r)),
    });
var G = ((e) => (
  (e.responsive = "Responsive"),
  (e.audio = "Audio"),
  (e.graphics = "Graphics"),
  (e.fundamentals = "Fundamentals"),
  (e.api = "API"),
  (e.web = "Web"),
  (e.game = "Game"),
  e
))(G || {});
Object.values(G);
const uy = [
  {
    id: "3d-music-visualizer",
    name: "3D Music Visualizer",
    rating: 4,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/3d-music-visualizer/",
      height: 750,
    },
    description: "3D Music Visualizer built using P5.js and Web Audio API",
    longDescription: E.jsx(E.Fragment, {
      children: E.jsxs("p", {
        className: "text-center",
        children: [
          "3D Music Visualizer built using P5.js and Web Audio API. It uses the",
          " ",
          E.jsx("a", {
            href: "https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode",
            className: "link link-primary",
            target: "_blank",
            children: "Analyzer Node",
          }),
          " ",
          "to break down the music real-time frequency and time-domain information and display it in a 3d visualizer. It also offers multiple inputs to manage the visualization parameters, enabling a higher level of customization",
        ],
      }),
    }),
    responsive: !1,
    tags: [G.audio, G.graphics, G.web],
    skills: [ee.webgl, ee.webaudio],
  },
  {
    id: "tunecode",
    name: "TuneCode: Music Programming Language",
    rating: 6,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/music-dsl/#/",
      height: 720,
    },
    description: E.jsx(E.Fragment, {
      children: E.jsxs("p", {
        children: [
          "TuneCode is a ",
          E.jsx("b", {
            className: "text-primary",
            children: "web programming language",
          }),
          " ",
          "for music creation, oriented towards people with experience with DAWs",
        ],
      }),
    }),
    longDescription: E.jsxs(E.Fragment, {
      children: [
        E.jsxs("p", {
          className: "mb-4",
          children: [
            "TuneCode is a ",
            E.jsx("b", {
              className: "text-primary",
              children: "web programming language",
            }),
            " ",
            "for music creation, oriented towards people with experience with DAWs. Using analogous concepts to DAW's, TuneCode allows the playback of melodies through basic oscillators, the scheduling of samples and the application of effects.",
          ],
        }),
        E.jsx("p", {
          children:
            'You can quickly check the functioning of the application by running the previously prepared scripts in the "Load Examples" drop-down menu at the top of the editor. A documentation (in spanish) is also available',
        }),
      ],
    }),
    responsive: !1,
    tags: [G.audio, G.graphics, G.fundamentals, G.web],
    skills: [ee.antlr, ee.canvasApi, ee.webaudio],
  },
  {
    id: "fake-store",
    name: "FakeStore",
    rating: 3,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/fake-store/#/explore",
      height: 720,
    },
    description:
      "A front-end application that uses mock-data from fakestoreapi.com",
    longDescription: E.jsx(E.Fragment, {
      children: E.jsx("p", {
        className: "text-center",
        children:
          "A front-end application that uses mock-data from fakestoreapi.com. It was one of my initial projects, used to practice fetching data from a server",
      }),
    }),
    responsive: !0,
    tags: [G.web, G.api],
    skills: [ee.vue, ee.bootstrap],
  },
  {
    id: "sudoku",
    name: "Sudoku",
    rating: 3.5,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/static-websites/sudoku",
      height: 720,
    },
    description: "A sudoku game built using the canvas element",
    longDescription: E.jsx(E.Fragment, {
      children: E.jsxs("p", {
        className: "text-center",
        children: [
          "A sudoku game built using the canvas element with:",
          " ",
          E.jsx("span", {
            className: "text-primary",
            children: "random level generation",
          }),
          ",",
          " ",
          E.jsx("span", {
            className: "text-primary",
            children: "highlighting ",
          }),
          ",",
          " ",
          E.jsx("span", {
            className: "text-primary",
            children: "answer validation ",
          }),
          "and",
          " ",
          E.jsx("span", { className: "text-primary", children: "timer" }),
        ],
      }),
    }),
    responsive: !1,
    tags: [G.graphics, G.web, G.game],
    skills: [ee.vue, ee.bootstrap],
  },
  {
    id: "music-visualizer",
    name: "2D Music Visualizer",
    rating: 2.5,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/music-visualizer/",
      height: 720,
    },
    description:
      "2D Music Visualizer built using the Canvas API and the Web Audio API",
    longDescription: E.jsxs("p", {
      className: "text-center",
      children: [
        "2D Music Visualizer built using the Canvas API and the Web Audio API. It uses the",
        " ",
        E.jsx("a", {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode",
          className: "link link-primary",
          target: "_blank",
          children: "Analyzer Node",
        }),
        " ",
        "to break down the music real-time frequency and time-domain information and display it in a 2d visualizer. It also offers multiple inputs to manage the visualization parameters, enabling a higher level of customization",
      ],
    }),
    responsive: !1,
    tags: [G.graphics, G.audio, G.graphics, G.web],
    skills: [ee.vue, ee.bootstrap, ee.canvasApi, ee.webaudio],
  },
  {
    id: "lalu",
    name: "Lalu",
    rating: 4.5,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/lalu/#/",
      height: 720,
    },
    description:
      "Spotify clone application that allows users to listen to music, view artist profiles and listen to playlists",
    longDescription: E.jsx("p", {
      className: "text-center",
      children:
        "Spotify clone application that allows users to listen to music, view artist profiles and listen to playlists. It was originally created as a class project, which used a distributed microservices backend with multiple programming languages and components. Currently, the frontend application uses mock-data to achieve the original behavior",
    }),
    responsive: !0,
    tags: [G.web, G.api, G.responsive],
    skills: [ee.vue, ee.bootstrap, ee.webaudio],
  },
  {
    id: "signal-grid",
    name: "Signal Grid",
    rating: 2.5,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/static-websites/signal-grid/",
      height: 760,
    },
    description: "Game similar to classis piping puzzles",
    longDescription: E.jsx("p", {
      className: "text-center",
      children: "Game similar to classis piping puzzles",
    }),
    responsive: !1,
    tags: [G.graphics, G.web, G.fundamentals, G.game],
    skills: [ee.canvasApi, ee.dsa],
  },
  {
    id: "bio-rastro",
    name: "Bio Rastro: Biodiversity Discovery Game",
    rating: 4.2,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/bio-rastro",
      height: 575,
    },
    description:
      "Game created to bring visibility to the biodiversity of the Chingaza paramo",
    longDescription: E.jsx("p", {
      className: "text-center",
      children:
        "A game presented as the final project for the UNAL class TIC 2023-II. It is a pokemon-like game where the objective is to discover the fauna of the chingaza paramo. It's purpose is educating the player in the biodiversity of this paramo and Colombia 🇨🇴 in general. It was built using excalibur JS.",
    }),
    responsive: !1,
    tags: [G.graphics, G.web, G.game, G.audio],
    skills: [ee.canvasApi, ee.webaudio, ee.excaliburJs],
  },
  {
    id: "old-portfolio",
    name: "[Archived] Portfolio",
    rating: 1,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/portfolio",
      height: 575,
    },
    description: "My old portfolio website",
    longDescription: E.jsx("p", {
      className: "text-center",
      children: "My old portfolio website",
    }),
    responsive: !0,
    tags: [G.web, G.responsive],
    skills: [ee.vue],
  },
  {
    id: "sudoku-book-generator",
    name: "Sudoku Book Generator",
    rating: 1,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/sudoku-book-generator",
      height: 575,
    },
    description: "Web tool for generating a set of sudokus in book format",
    longDescription: E.jsxs("p", {
      className: "text-center",
      children: [
        "Web tool for generating a set of sudokus in book format. The program uses the",
        " ",
        E.jsx("a", {
          href: "https://www.npmjs.com/package/sudoku-core",
          target: "_blank",
          className: "link link-primary",
          children: "npm sudoku-core package",
        }),
        " ",
        "to manage the difficulty, generation and solution of the puzzles.",
      ],
    }),
    responsive: !1,
    tags: [G.web],
    skills: [ee.tool],
  },
  {
    id: "3d-crossy-road",
    name: "Crossy Road Clone",
    rating: 4.5,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/3d-crossy-road",
      height: 700,
    },
    description:
      "Crossy Road clone built using BabylonJs as the 3D game engine",
    longDescription: E.jsx("p", {
      className: "text-center",
      children:
        "Crossy Road clone built using BabylonJs as the 3D game engine. The project and class structure mirrors the ExcaliburJs framework, but using the 3D primitives provided by BabylonJs.",
    }),
    responsive: !1,
    tags: [G.game, G.graphics, G.web],
    skills: [ee.excaliburJs, ee.webgl, ee.canvasApi],
  },
  {
    id: "fuzzy-noteable",
    name: "Guitar Chords Viewer",
    rating: 6,
    navigation: {
      type: "external",
      href: "https://saacostam.github.io/fuzzy-noteable",
      height: 700,
    },
    description:
      "Platform for leaning chords with a real-time interactive visualizer",
    longDescription: E.jsxs(E.Fragment, {
      children: [
        E.jsxs("p", {
          className: "text-center mb-4",
          children: [
            "Platform for leaning chords with a real-time interactive visualizer that syncs to a audio source (Youtube video). It was built using nx monorepo, ",
            E.jsx("span", { className: "text-primary", children: "NestJs" }),
            " for the backend service and ",
            E.jsx("span", { className: "text-primary", children: "React" }),
            " for the front end app. Also it uses a ",
            E.jsx("span", { className: "text-primary", children: "MongoDB" }),
            " ",
            "instance with ",
            E.jsx("span", { className: "text-primary", children: "Prisma" }),
            " for storage.",
          ],
        }),
        E.jsx("p", {
          className: "text-center",
          children:
            "The demo has over 30 of the most popular songs in guitar learning websites. This data is statically hosted for demo purposes.",
        }),
      ],
    }),
    responsive: !0,
    tags: [G.audio, G.graphics, G.game, G.web],
    skills: [ee.webaudio, ee.excaliburJs, ee.canvasApi, ee.react, ee.tool],
  },
];
class cy {
  constructor(t) {
    this._all = t;
  }
  get(t) {
    const n = (t == null ? void 0 : t.ids) ?? [],
      r = (t == null ? void 0 : t.name) ?? "",
      l = (t == null ? void 0 : t.tags) ?? [],
      o = (t == null ? void 0 : t.skills) ?? [];
    let i = this._all.map((a) => a).sort((a, s) => s.rating - a.rating);
    return (
      n && n.length > 0 && (i = i.filter((a) => n.includes(a.id))),
      r && (i = i.filter((a) => a.name.search(r) !== -1)),
      l &&
        l.length > 0 &&
        (i = i.filter((a) => a.tags.some((s) => l.includes(s)))),
      o &&
        o.length > 0 &&
        (i = i.filter((a) => a.skills.some((s) => o.includes(s)))),
      i
    );
  }
  getById(t) {
    if (t) return this._all.find((n) => n.id === t);
  }
}
const dy = ({
    project: { name: e, navigation: t, skills: n, longDescription: r },
  }) =>
    E.jsxs("section", {
      children: [
        E.jsx(Uf, {
          className: "text-center mb-8",
          size: "2xl",
          headerLevel: 2,
          children: e,
        }),
        t.type === "component" && t.component,
        t.type === "external" &&
          E.jsxs(E.Fragment, {
            children: [
              r,
              E.jsx(rp, {
                skills: n,
                className: "my-4 flex justify-center w-full",
                color: "info",
              }),
              E.jsx("iframe", {
                src: t.href,
                width: "100%",
                height: t.height ?? 950,
              }),
              E.jsx("div", {
                className: "flex justify-center mt-4",
                children: E.jsx("a", {
                  href: t.href,
                  target: "_blank",
                  className: "btn btn-outline btn-primary btn-sm",
                  children: "Go To Page",
                }),
              }),
            ],
          }),
      ],
    }),
  fy = ({
    project: { id: e, name: t, description: n, imgSrc: r, skills: l },
  }) => {
    const { getProjectLink: o } = yy(),
      i = o(e);
    return E.jsxs("div", {
      className: "card lg:card-side bg-base-200 shadow-xl mb-4",
      children: [
        r
          ? E.jsx("figure", {
              children: E.jsx("img", { src: r, alt: "Album" }),
            })
          : null,
        E.jsx("div", {
          className: "card-body",
          children: E.jsxs("div", {
            className: "flex flex-row",
            children: [
              E.jsxs("div", {
                className: "flex-1 pr-0 md:pr-8",
                children: [
                  E.jsx("h3", {
                    className: "card-title text-primary mb-4 font-medium",
                    children: t,
                  }),
                  n,
                  E.jsx(rp, { skills: l, className: "mt-4", color: "info" }),
                ],
              }),
              E.jsx("div", {
                className: "flex-0 flex place-items-center",
                children: E.jsx(oy, {
                  to: i,
                  className: "btn btn-outline btn-primary",
                  children: "Go to Project",
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  lp = new cy(uy),
  py = () => {
    const e = lp.get();
    return E.jsxs(E.Fragment, {
      children: [
        E.jsx(Uf, {
          className: "text-center mb-8",
          size: "3xl",
          headerLevel: 2,
          children: "Projects",
        }),
        e.map((t) => E.jsx(fy, { project: t }, t.id)),
      ],
    });
  },
  hy = () => {
    const { id: e } = Rv(),
      t = lp.getById(e);
    return t
      ? E.jsx(E.Fragment, { children: E.jsx(dy, { project: t }) })
      : E.jsx(np, { to: Zo.notFoundPage });
  };
var Zo = ((e) => (
  (e.homePage = ""),
  (e.projectPage = "/:id"),
  (e.notFoundPage = "/not-found"),
  (e.wildcard = "*"),
  e
))(Zo || {});
const my = [
    { path: "", element: E.jsx(py, {}) },
    { path: "/:id", element: E.jsx(hy, {}) },
    { path: "/not-found", element: E.jsx(ay, {}) },
    { path: "*", element: E.jsx(np, { to: "/not-found" }) },
  ],
  gy = Qv(my),
  vy = () => E.jsx(ty, { router: gy }),
  yy = () => {
    const e = _.useCallback((t) => `${Zo.homePage}${t}`, []);
    return _.useMemo(() => ({ getProjectLink: e }), [e]);
  },
  wy = ({ navbarStart: e }) =>
    E.jsx("div", {
      children: E.jsxs("div", {
        className: "navbar bg-base-200",
        children: [
          E.jsx("div", { className: "navbar-start", children: e }),
          E.jsx("div", {
            className: "navbar-center",
            children: E.jsxs("a", {
              className:
                "btn btn-ghost text-2xl flex justify-center text-primary font-medium",
              href: Zo.homePage,
              children: [E.jsx(Rg, { className: "w-6 h-6" }), " saacostam"],
            }),
          }),
          E.jsx("div", {
            className: "navbar-end",
            children: E.jsx("button", {
              className: "btn btn-ghost btn-circle",
              children: E.jsx(Ng, { className: "text-primary w-6 h-6" }),
            }),
          }),
        ],
      }),
    });
function xy() {
  return E.jsx(E.Fragment, {
    children: E.jsx(Lg, { children: E.jsx(vy, {}) }),
  });
}
ji.createRoot(document.getElementById("root")).render(
  E.jsx(zc.StrictMode, { children: E.jsx(xy, {}) }),
);
