/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	(function webpackMissingModule() { throw new Error("Cannot find module \"run\""); }());


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(2);
	__webpack_require__(27);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var m;

	__webpack_require__(3);

	__webpack_require__(4);

	__webpack_require__(20);

	__webpack_require__(21);

	__webpack_require__(22);

	__webpack_require__(23);

	__webpack_require__(24);

	__webpack_require__(25);

	__webpack_require__(26);

	module.exports = m = angular.module("Lens", ["ui.router", "lens.atoms", "lens.getting_started", "lens.index", "lens.login", "lens.release_notes", "lens.lens_main", "lens.main_nav", "lens.sass"]);

	m.config(function($locationProvider, $stateProvider) {
	  var blockGridState, bordersState, buttonsState, colorsState, flexboxState, formsState, gettingStartedState, gridState, iconsState, indexState, layoutState, loginState, releaseNotesState, responsiveState, sassState, tablesState, typographyState;
	  $locationProvider.html5Mode(true);
	  loginState = {
	    name: 'login',
	    url: '/login',
	    template: '<login></login>',
	    title: 'Login to view Lens'
	  };
	  indexState = {
	    name: 'index',
	    url: '/',
	    template: '<index></index>',
	    title: 'Welcome to Lens'
	  };
	  gettingStartedState = {
	    name: 'getting-started',
	    url: '/getting-started',
	    template: '<getting-started></getting-started>',
	    title: 'Getting Started'
	  };
	  blockGridState = {
	    name: 'block-grid',
	    url: '/block-grid',
	    template: '<block-grid></block-grid>',
	    title: 'Block Grid'
	  };
	  bordersState = {
	    name: 'borders',
	    url: '/borders',
	    template: '<borders></borders>',
	    title: 'Borders'
	  };
	  buttonsState = {
	    name: 'buttons',
	    url: '/buttons',
	    template: '<buttons></buttons>',
	    title: 'Buttons'
	  };
	  colorsState = {
	    name: 'colors',
	    url: '/colors',
	    template: '<colors></colors>',
	    title: 'Colors'
	  };
	  flexboxState = {
	    name: 'flexbox',
	    url: '/flexbox',
	    template: '<flexbox></flexbox>',
	    title: 'Flexbox'
	  };
	  formsState = {
	    name: 'forms',
	    url: '/forms',
	    template: '<forms></forms>',
	    title: 'Forms'
	  };
	  gridState = {
	    name: 'grid',
	    url: '/grid',
	    template: '<grid></grid>',
	    title: 'Grid'
	  };
	  iconsState = {
	    name: 'icons',
	    url: '/icons',
	    template: '<icons></icons>',
	    title: 'Icons'
	  };
	  layoutState = {
	    name: 'layout',
	    url: '/layout',
	    template: '<layout></layout>',
	    title: 'Layout'
	  };
	  responsiveState = {
	    name: 'responsive',
	    url: '/responsive',
	    template: '<responsive></responsive>',
	    title: 'Responsive'
	  };
	  tablesState = {
	    name: 'tables',
	    url: '/tables',
	    template: '<tables></tables>',
	    title: 'Tables'
	  };
	  typographyState = {
	    name: 'typography',
	    url: '/typography',
	    template: '<typography></typography>',
	    title: 'Typography'
	  };
	  sassState = {
	    name: 'sass',
	    url: '/sass',
	    template: '<sass></sass>',
	    title: 'Sass'
	  };
	  releaseNotesState = {
	    name: 'release-notes',
	    url: '/release-notes',
	    template: '<release-notes></release-notes>',
	    title: 'Release Notes'
	  };
	  $stateProvider.state(loginState);
	  $stateProvider.state(indexState);
	  $stateProvider.state(gettingStartedState);
	  $stateProvider.state(blockGridState);
	  $stateProvider.state(bordersState);
	  $stateProvider.state(buttonsState);
	  $stateProvider.state(colorsState);
	  $stateProvider.state(flexboxState);
	  $stateProvider.state(formsState);
	  $stateProvider.state(gridState);
	  $stateProvider.state(iconsState);
	  $stateProvider.state(layoutState);
	  $stateProvider.state(responsiveState);
	  $stateProvider.state(tablesState);
	  $stateProvider.state(typographyState);
	  $stateProvider.state(sassState);
	  $stateProvider.state(releaseNotesState);
	});

	m.run(function() {});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * State-based routing for AngularJS
	 * @version v0.4.2
	 * @link http://angular-ui.github.com/
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

	/* commonjs package manager support (eg componentjs) */
	if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
	  module.exports = 'ui.router';
	}

	(function (window, angular, undefined) {
	/*jshint globalstrict:true*/
	/*global angular:false*/
	'use strict';

	var isDefined = angular.isDefined,
	    isFunction = angular.isFunction,
	    isString = angular.isString,
	    isObject = angular.isObject,
	    isArray = angular.isArray,
	    forEach = angular.forEach,
	    extend = angular.extend,
	    copy = angular.copy,
	    toJson = angular.toJson;

	function inherit(parent, extra) {
	  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
	}

	function merge(dst) {
	  forEach(arguments, function(obj) {
	    if (obj !== dst) {
	      forEach(obj, function(value, key) {
	        if (!dst.hasOwnProperty(key)) dst[key] = value;
	      });
	    }
	  });
	  return dst;
	}

	/**
	 * Finds the common ancestor path between two states.
	 *
	 * @param {Object} first The first state.
	 * @param {Object} second The second state.
	 * @return {Array} Returns an array of state names in descending order, not including the root.
	 */
	function ancestors(first, second) {
	  var path = [];

	  for (var n in first.path) {
	    if (first.path[n] !== second.path[n]) break;
	    path.push(first.path[n]);
	  }
	  return path;
	}

	/**
	 * IE8-safe wrapper for `Object.keys()`.
	 *
	 * @param {Object} object A JavaScript object.
	 * @return {Array} Returns the keys of the object as an array.
	 */
	function objectKeys(object) {
	  if (Object.keys) {
	    return Object.keys(object);
	  }
	  var result = [];

	  forEach(object, function(val, key) {
	    result.push(key);
	  });
	  return result;
	}

	/**
	 * IE8-safe wrapper for `Array.prototype.indexOf()`.
	 *
	 * @param {Array} array A JavaScript array.
	 * @param {*} value A value to search the array for.
	 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
	 */
	function indexOf(array, value) {
	  if (Array.prototype.indexOf) {
	    return array.indexOf(value, Number(arguments[2]) || 0);
	  }
	  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
	  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

	  if (from < 0) from += len;

	  for (; from < len; from++) {
	    if (from in array && array[from] === value) return from;
	  }
	  return -1;
	}

	/**
	 * Merges a set of parameters with all parameters inherited between the common parents of the
	 * current state and a given destination state.
	 *
	 * @param {Object} currentParams The value of the current state parameters ($stateParams).
	 * @param {Object} newParams The set of parameters which will be composited with inherited params.
	 * @param {Object} $current Internal definition of object representing the current state.
	 * @param {Object} $to Internal definition of object representing state to transition to.
	 */
	function inheritParams(currentParams, newParams, $current, $to) {
	  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

	  for (var i in parents) {
	    if (!parents[i] || !parents[i].params) continue;
	    parentParams = objectKeys(parents[i].params);
	    if (!parentParams.length) continue;

	    for (var j in parentParams) {
	      if (indexOf(inheritList, parentParams[j]) >= 0) continue;
	      inheritList.push(parentParams[j]);
	      inherited[parentParams[j]] = currentParams[parentParams[j]];
	    }
	  }
	  return extend({}, inherited, newParams);
	}

	/**
	 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
	 *
	 * @param {Object} a The first object.
	 * @param {Object} b The second object.
	 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
	 *                     it defaults to the list of keys in `a`.
	 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
	 */
	function equalForKeys(a, b, keys) {
	  if (!keys) {
	    keys = [];
	    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
	  }

	  for (var i=0; i<keys.length; i++) {
	    var k = keys[i];
	    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
	  }
	  return true;
	}

	/**
	 * Returns the subset of an object, based on a list of keys.
	 *
	 * @param {Array} keys
	 * @param {Object} values
	 * @return {Boolean} Returns a subset of `values`.
	 */
	function filterByKeys(keys, values) {
	  var filtered = {};

	  forEach(keys, function (name) {
	    filtered[name] = values[name];
	  });
	  return filtered;
	}

	// like _.indexBy
	// when you know that your index values will be unique, or you want last-one-in to win
	function indexBy(array, propName) {
	  var result = {};
	  forEach(array, function(item) {
	    result[item[propName]] = item;
	  });
	  return result;
	}

	// extracted from underscore.js
	// Return a copy of the object only containing the whitelisted properties.
	function pick(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  forEach(keys, function(key) {
	    if (key in obj) copy[key] = obj[key];
	  });
	  return copy;
	}

	// extracted from underscore.js
	// Return a copy of the object omitting the blacklisted properties.
	function omit(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  for (var key in obj) {
	    if (indexOf(keys, key) == -1) copy[key] = obj[key];
	  }
	  return copy;
	}

	function pluck(collection, key) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = isFunction(key) ? key(val) : val[key];
	  });
	  return result;
	}

	function filter(collection, callback) {
	  var array = isArray(collection);
	  var result = array ? [] : {};
	  forEach(collection, function(val, i) {
	    if (callback(val, i)) {
	      result[array ? result.length : i] = val;
	    }
	  });
	  return result;
	}

	function map(collection, callback) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = callback(val, i);
	  });
	  return result;
	}

	// issue #2676 #2889
	function silenceUncaughtInPromise (promise) {
	  return promise.then(undefined, function() {}) && promise;
	}

	/**
	 * @ngdoc overview
	 * @name ui.router.util
	 *
	 * @description
	 * # ui.router.util sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 *
	 */
	angular.module('ui.router.util', ['ng']);

	/**
	 * @ngdoc overview
	 * @name ui.router.router
	 * 
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.router sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 */
	angular.module('ui.router.router', ['ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router.state
	 * 
	 * @requires ui.router.router
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.state sub-module
	 *
	 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 * 
	 */
	angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router
	 *
	 * @requires ui.router.state
	 *
	 * @description
	 * # ui.router
	 * 
	 * ## The main module for ui.router 
	 * There are several sub-modules included with the ui.router module, however only this module is needed
	 * as a dependency within your angular app. The other modules are for organization purposes. 
	 *
	 * The modules are:
	 * * ui.router - the main "umbrella" module
	 * * ui.router.router - 
	 * 
	 * *You'll need to include **only** this module as the dependency within your angular app.*
	 * 
	 * <pre>
	 * <!doctype html>
	 * <html ng-app="myApp">
	 * <head>
	 *   <script src="js/angular.js"></script>
	 *   <!-- Include the ui-router script -->
	 *   <script src="js/angular-ui-router.min.js"></script>
	 *   <script>
	 *     // ...and add 'ui.router' as a dependency
	 *     var myApp = angular.module('myApp', ['ui.router']);
	 *   </script>
	 * </head>
	 * <body>
	 * </body>
	 * </html>
	 * </pre>
	 */
	angular.module('ui.router', ['ui.router.state']);

	angular.module('ui.router.compat', ['ui.router']);

	/**
	 * @ngdoc object
	 * @name ui.router.util.$resolve
	 *
	 * @requires $q
	 * @requires $injector
	 *
	 * @description
	 * Manages resolution of (acyclic) graphs of promises.
	 */
	$Resolve.$inject = ['$q', '$injector'];
	function $Resolve(  $q,    $injector) {
	  
	  var VISIT_IN_PROGRESS = 1,
	      VISIT_DONE = 2,
	      NOTHING = {},
	      NO_DEPENDENCIES = [],
	      NO_LOCALS = NOTHING,
	      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
	  

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#study
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Studies a set of invocables that are likely to be used multiple times.
	   * <pre>
	   * $resolve.study(invocables)(locals, parent, self)
	   * </pre>
	   * is equivalent to
	   * <pre>
	   * $resolve.resolve(invocables, locals, parent, self)
	   * </pre>
	   * but the former is more efficient (in fact `resolve` just calls `study` 
	   * internally).
	   *
	   * @param {object} invocables Invocable objects
	   * @return {function} a function to pass in locals, parent and self
	   */
	  this.study = function (invocables) {
	    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
	    var invocableKeys = objectKeys(invocables || {});
	    
	    // Perform a topological sort of invocables to build an ordered plan
	    var plan = [], cycle = [], visited = {};
	    function visit(value, key) {
	      if (visited[key] === VISIT_DONE) return;
	      
	      cycle.push(key);
	      if (visited[key] === VISIT_IN_PROGRESS) {
	        cycle.splice(0, indexOf(cycle, key));
	        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
	      }
	      visited[key] = VISIT_IN_PROGRESS;
	      
	      if (isString(value)) {
	        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
	      } else {
	        var params = $injector.annotate(value);
	        forEach(params, function (param) {
	          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
	        });
	        plan.push(key, value, params);
	      }
	      
	      cycle.pop();
	      visited[key] = VISIT_DONE;
	    }
	    forEach(invocables, visit);
	    invocables = cycle = visited = null; // plan is all that's required
	    
	    function isResolve(value) {
	      return isObject(value) && value.then && value.$$promises;
	    }
	    
	    return function (locals, parent, self) {
	      if (isResolve(locals) && self === undefined) {
	        self = parent; parent = locals; locals = null;
	      }
	      if (!locals) locals = NO_LOCALS;
	      else if (!isObject(locals)) {
	        throw new Error("'locals' must be an object");
	      }       
	      if (!parent) parent = NO_PARENT;
	      else if (!isResolve(parent)) {
	        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
	      }
	      
	      // To complete the overall resolution, we have to wait for the parent
	      // promise and for the promise for each invokable in our plan.
	      var resolution = $q.defer(),
	          result = silenceUncaughtInPromise(resolution.promise),
	          promises = result.$$promises = {},
	          values = extend({}, locals),
	          wait = 1 + plan.length/3,
	          merged = false;

	      silenceUncaughtInPromise(result);
	          
	      function done() {
	        // Merge parent values we haven't got yet and publish our own $$values
	        if (!--wait) {
	          if (!merged) merge(values, parent.$$values); 
	          result.$$values = values;
	          result.$$promises = result.$$promises || true; // keep for isResolve()
	          delete result.$$inheritedValues;
	          resolution.resolve(values);
	        }
	      }
	      
	      function fail(reason) {
	        result.$$failure = reason;
	        resolution.reject(reason);
	      }

	      // Short-circuit if parent has already failed
	      if (isDefined(parent.$$failure)) {
	        fail(parent.$$failure);
	        return result;
	      }
	      
	      if (parent.$$inheritedValues) {
	        merge(values, omit(parent.$$inheritedValues, invocableKeys));
	      }

	      // Merge parent values if the parent has already resolved, or merge
	      // parent promises and wait if the parent resolve is still in progress.
	      extend(promises, parent.$$promises);
	      if (parent.$$values) {
	        merged = merge(values, omit(parent.$$values, invocableKeys));
	        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
	        done();
	      } else {
	        if (parent.$$inheritedValues) {
	          result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
	        }        
	        parent.then(done, fail);
	      }
	      
	      // Process each invocable in the plan, but ignore any where a local of the same name exists.
	      for (var i=0, ii=plan.length; i<ii; i+=3) {
	        if (locals.hasOwnProperty(plan[i])) done();
	        else invoke(plan[i], plan[i+1], plan[i+2]);
	      }
	      
	      function invoke(key, invocable, params) {
	        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
	        var invocation = $q.defer(), waitParams = 0;
	        function onfailure(reason) {
	          invocation.reject(reason);
	          fail(reason);
	        }
	        // Wait for any parameter that we have a promise for (either from parent or from this
	        // resolve; in that case study() will have made sure it's ordered before us in the plan).
	        forEach(params, function (dep) {
	          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
	            waitParams++;
	            promises[dep].then(function (result) {
	              values[dep] = result;
	              if (!(--waitParams)) proceed();
	            }, onfailure);
	          }
	        });
	        if (!waitParams) proceed();
	        function proceed() {
	          if (isDefined(result.$$failure)) return;
	          try {
	            invocation.resolve($injector.invoke(invocable, self, values));
	            invocation.promise.then(function (result) {
	              values[key] = result;
	              done();
	            }, onfailure);
	          } catch (e) {
	            onfailure(e);
	          }
	        }
	        // Publish promise synchronously; invocations further down in the plan may depend on it.
	        promises[key] = silenceUncaughtInPromise(invocation.promise);
	      }
	      
	      return result;
	    };
	  };
	  
	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#resolve
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Resolves a set of invocables. An invocable is a function to be invoked via 
	   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
	   * An invocable can either return a value directly,
	   * or a `$q` promise. If a promise is returned it will be resolved and the 
	   * resulting value will be used instead. Dependencies of invocables are resolved 
	   * (in this order of precedence)
	   *
	   * - from the specified `locals`
	   * - from another invocable that is part of this `$resolve` call
	   * - from an invocable that is inherited from a `parent` call to `$resolve` 
	   *   (or recursively
	   * - from any ancestor `$resolve` of that parent).
	   *
	   * The return value of `$resolve` is a promise for an object that contains 
	   * (in this order of precedence)
	   *
	   * - any `locals` (if specified)
	   * - the resolved return values of all injectables
	   * - any values inherited from a `parent` call to `$resolve` (if specified)
	   *
	   * The promise will resolve after the `parent` promise (if any) and all promises 
	   * returned by injectables have been resolved. If any invocable 
	   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
	   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
	   * same error. A rejection of a `parent` promise (if specified) will likewise be 
	   * propagated immediately. Once the `$resolve` promise has been rejected, no 
	   * further invocables will be called.
	   * 
	   * Cyclic dependencies between invocables are not permitted and will cause `$resolve`
	   * to throw an error. As a special case, an injectable can depend on a parameter 
	   * with the same name as the injectable, which will be fulfilled from the `parent` 
	   * injectable of the same name. This allows inherited values to be decorated. 
	   * Note that in this case any other injectable in the same `$resolve` with the same
	   * dependency would see the decorated value, not the inherited value.
	   *
	   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
	   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
	   * exception.
	   *
	   * Invocables are invoked eagerly as soon as all dependencies are available. 
	   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
	   *
	   * As a special case, an invocable can be a string, in which case it is taken to 
	   * be a service name to be passed to `$injector.get()`. This is supported primarily 
	   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
	   * routes.
	   *
	   * @param {object} invocables functions to invoke or 
	   * `$injector` services to fetch.
	   * @param {object} locals  values to make available to the injectables
	   * @param {object} parent  a promise returned by another call to `$resolve`.
	   * @param {object} self  the `this` for the invoked methods
	   * @return {object} Promise for an object that contains the resolved return value
	   * of all invocables, as well as any inherited and local values.
	   */
	  this.resolve = function (invocables, locals, parent, self) {
	    return this.study(invocables)(locals, parent, self);
	  };
	}

	angular.module('ui.router.util').service('$resolve', $Resolve);



	/**
	 * @ngdoc object
	 * @name ui.router.util.$templateFactoryProvider
	 *
	 * @description
	 * Provider for $templateFactory. Manages which template-loading mechanism to
	 * use, and will default to the most recent one ($templateRequest on Angular
	 * versions starting from 1.3, $http otherwise).
	 */
	function TemplateFactoryProvider() {
	  var shouldUnsafelyUseHttp = angular.version.minor < 3;

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactoryProvider#shouldUnsafelyUseHttp
	   * @methodOf ui.router.util.$templateFactoryProvider
	   *
	   * @description
	   * Forces $templateFactory to use $http instead of $templateRequest. This
	   * might cause XSS, as $http doesn't enforce the regular security checks for
	   * templates that have been introduced in Angular 1.3. Note that setting this
	   * to false on Angular older than 1.3.x will crash, as the $templateRequest
	   * service (and the security checks) are not implemented on these versions.
	   *
	   * See the $sce documentation, section
	   * <a href="https://docs.angularjs.org/api/ng/service/$sce#impact-on-loading-templates">
	   * Impact on loading templates</a> for more details about this mechanism.
	   *
	   * @param {boolean} value
	   */
	  this.shouldUnsafelyUseHttp = function(value) {
	    shouldUnsafelyUseHttp = !!value;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.util.$templateFactory
	   *
	   * @requires $http
	   * @requires $templateCache
	   * @requires $injector
	   *
	   * @description
	   * Service. Manages loading of templates.
	   */
	  this.$get = ['$http', '$templateCache', '$injector', function($http, $templateCache, $injector){
	    return new TemplateFactory($http, $templateCache, $injector, shouldUnsafelyUseHttp);}];
	}


	/**
	 * @ngdoc object
	 * @name ui.router.util.$templateFactory
	 *
	 * @requires $http
	 * @requires $templateCache
	 * @requires $injector
	 *
	 * @description
	 * Service. Manages loading of templates.
	 */
	function TemplateFactory($http, $templateCache, $injector, shouldUnsafelyUseHttp) {

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromConfig
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a configuration object. 
	   *
	   * @param {object} config Configuration object for which to load a template. 
	   * The following properties are search in the specified order, and the first one 
	   * that is defined is used to create the template:
	   *
	   * @param {string|object} config.template html string template or function to 
	   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
	   * @param {string|object} config.templateUrl url to load or a function returning 
	   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
	   * @param {Function} config.templateProvider function to invoke via 
	   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
	   * @param {object} params  Parameters to pass to the template function.
	   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
	   * via a `templateProvider`. Defaults to `{ params: params }`.
	   *
	   * @return {string|object}  The template html as a string, or a promise for 
	   * that string,or `null` if no template is configured.
	   */
	  this.fromConfig = function (config, params, locals) {
	    return (
	      isDefined(config.template) ? this.fromString(config.template, params) :
	      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
	      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
	      null
	    );
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromString
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a string or a function returning a string.
	   *
	   * @param {string|object} template html template as a string or function that 
	   * returns an html template as a string.
	   * @param {object} params Parameters to pass to the template function.
	   *
	   * @return {string|object} The template html as a string, or a promise for that 
	   * string.
	   */
	  this.fromString = function (template, params) {
	    return isFunction(template) ? template(params) : template;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromUrl
	   * @methodOf ui.router.util.$templateFactory
	   * 
	   * @description
	   * Loads a template from the a URL via `$http` and `$templateCache`.
	   *
	   * @param {string|Function} url url of the template to load, or a function 
	   * that returns a url.
	   * @param {Object} params Parameters to pass to the url function.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromUrl = function (url, params) {
	    if (isFunction(url)) url = url(params);
	    if (url == null) return null;
	    else {
	      if(!shouldUnsafelyUseHttp) {
	        return $injector.get('$templateRequest')(url);
	      } else {
	        return $http
	          .get(url, { cache: $templateCache, headers: { Accept: 'text/html' }})
	          .then(function(response) { return response.data; });
	      }
	    }
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromProvider
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template by invoking an injectable provider function.
	   *
	   * @param {Function} provider Function to invoke via `$injector.invoke`
	   * @param {Object} params Parameters for the template.
	   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
	   * `{ params: params }`.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromProvider = function (provider, params, locals) {
	    return $injector.invoke(provider, null, locals || { params: params });
	  };
	}

	angular.module('ui.router.util').provider('$templateFactory', TemplateFactoryProvider);

	var $$UMFP; // reference to $UrlMatcherFactoryProvider

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Matches URLs against patterns and extracts named parameters from the path or the search
	 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
	 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
	 * do not influence whether or not a URL is matched, but their values are passed through into
	 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
	 *
	 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
	 * syntax, which optionally allows a regular expression for the parameter to be specified:
	 *
	 * * `':'` name - colon placeholder
	 * * `'*'` name - catch-all placeholder
	 * * `'{' name '}'` - curly placeholder
	 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
	 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
	 *
	 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
	 * must be unique within the pattern (across both path and search parameters). For colon
	 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
	 * number of characters other than '/'. For catch-all placeholders the path parameter matches
	 * any number of characters.
	 *
	 * Examples:
	 *
	 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
	 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
	 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
	 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
	 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
	 * * `'/user/{id:[^/]*}'` - Same as the previous example.
	 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
	 *   parameter consists of 1 to 8 hex digits.
	 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	 *   path into the parameter 'path'.
	 * * `'/files/*path'` - ditto.
	 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
	 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
	 *
	 * @param {string} pattern  The pattern to compile into a matcher.
	 * @param {Object} config  A configuration object hash:
	 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
	 *   an existing UrlMatcher
	 *
	 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
	 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
	 *
	 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
	 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
	 *   non-null) will start with this prefix.
	 *
	 * @property {string} source  The pattern that was passed into the constructor
	 *
	 * @property {string} sourcePath  The path portion of the source property
	 *
	 * @property {string} sourceSearch  The search portion of the source property
	 *
	 * @property {string} regex  The constructed regex that will be used to match against the url when
	 *   it is time to determine which url will match.
	 *
	 * @returns {Object}  New `UrlMatcher` object
	 */
	function UrlMatcher(pattern, config, parentMatcher) {
	  config = extend({ params: {} }, isObject(config) ? config : {});

	  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
	  //   '*' name
	  //   ':' name
	  //   '{' name '}'
	  //   '{' name ':' regexp '}'
	  // The regular expression is somewhat complicated due to the need to allow curly braces
	  // inside the regular expression. The placeholder regexp breaks down as follows:
	  //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
	  //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
	  //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
	  //    [^{}\\]+                       - anything other than curly braces or backslash
	  //    \\.                            - a backslash escape
	  //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
	  var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      compiled = '^', last = 0, m,
	      segments = this.segments = [],
	      parentParams = parentMatcher ? parentMatcher.params : {},
	      params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
	      paramNames = [];

	  function addParameter(id, type, config, location) {
	    paramNames.push(id);
	    if (parentParams[id]) return parentParams[id];
	    if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
	    if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
	    params[id] = new $$UMFP.Param(id, type, config, location);
	    return params[id];
	  }

	  function quoteRegExp(string, pattern, squash, optional) {
	    var surroundPattern = ['',''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
	    if (!pattern) return result;
	    switch(squash) {
	      case false: surroundPattern = ['(', ')' + (optional ? "?" : "")]; break;
	      case true:
	        result = result.replace(/\/$/, '');
	        surroundPattern = ['(?:\/(', ')|\/)?'];
	      break;
	      default:    surroundPattern = ['(' + squash + "|", ')?']; break;
	    }
	    return result + surroundPattern[0] + pattern + surroundPattern[1];
	  }

	  this.source = pattern;

	  // Split into static segments separated by path parameter placeholders.
	  // The number of segments is always 1 more than the number of parameters.
	  function matchDetails(m, isSearch) {
	    var id, regexp, segment, type, cfg, arrayMode;
	    id          = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
	    cfg         = config.params[id];
	    segment     = pattern.substring(last, m.index);
	    regexp      = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);

	    if (regexp) {
	      type      = $$UMFP.type(regexp) || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp, config.caseInsensitive ? 'i' : undefined) });
	    }

	    return {
	      id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
	    };
	  }

	  var p, param, segment;
	  while ((m = placeholder.exec(pattern))) {
	    p = matchDetails(m, false);
	    if (p.segment.indexOf('?') >= 0) break; // we're into the search part

	    param = addParameter(p.id, p.type, p.cfg, "path");
	    compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash, param.isOptional);
	    segments.push(p.segment);
	    last = placeholder.lastIndex;
	  }
	  segment = pattern.substring(last);

	  // Find any search parameter names and remove them from the last segment
	  var i = segment.indexOf('?');

	  if (i >= 0) {
	    var search = this.sourceSearch = segment.substring(i);
	    segment = segment.substring(0, i);
	    this.sourcePath = pattern.substring(0, last + i);

	    if (search.length > 0) {
	      last = 0;
	      while ((m = searchPlaceholder.exec(search))) {
	        p = matchDetails(m, true);
	        param = addParameter(p.id, p.type, p.cfg, "search");
	        last = placeholder.lastIndex;
	        // check if ?&
	      }
	    }
	  } else {
	    this.sourcePath = pattern;
	    this.sourceSearch = '';
	  }

	  compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
	  segments.push(segment);

	  this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
	  this.prefix = segments[0];
	  this.$$paramNames = paramNames;
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#concat
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns a new matcher for a pattern constructed by appending the path part and adding the
	 * search parameters of the specified pattern to this pattern. The current pattern is not
	 * modified. This can be understood as creating a pattern for URLs that are relative to (or
	 * suffixes of) the current pattern.
	 *
	 * @example
	 * The following two matchers are equivalent:
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').concat('/details?date');
	 * new UrlMatcher('/user/{id}/details?q&date');
	 * </pre>
	 *
	 * @param {string} pattern  The pattern to append.
	 * @param {Object} config  An object hash of the configuration for the matcher.
	 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
	 */
	UrlMatcher.prototype.concat = function (pattern, config) {
	  // Because order of search parameters is irrelevant, we can add our own search
	  // parameters to the end of the new pattern. Parse the new pattern by itself
	  // and then join the bits together, but it's much easier to do this on a string level.
	  var defaultConfig = {
	    caseInsensitive: $$UMFP.caseInsensitive(),
	    strict: $$UMFP.strictMode(),
	    squash: $$UMFP.defaultSquashPolicy()
	  };
	  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
	};

	UrlMatcher.prototype.toString = function () {
	  return this.source;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#exec
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Tests the specified path against this matcher, and returns an object containing the captured
	 * parameter values, or null if the path does not match. The returned object contains the values
	 * of any search parameters that are mentioned in the pattern, but their value may be null if
	 * they are not present in `searchParams`. This means that search parameters are always treated
	 * as optional.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
	 *   x: '1', q: 'hello'
	 * });
	 * // returns { id: 'bob', q: 'hello', r: null }
	 * </pre>
	 *
	 * @param {string} path  The URL path to match, e.g. `$location.path()`.
	 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
	 * @returns {Object}  The captured parameter values.
	 */
	UrlMatcher.prototype.exec = function (path, searchParams) {
	  var m = this.regexp.exec(path);
	  if (!m) return null;
	  searchParams = searchParams || {};

	  var paramNames = this.parameters(), nTotal = paramNames.length,
	    nPath = this.segments.length - 1,
	    values = {}, i, j, cfg, paramName;

	  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

	  function decodePathArray(string) {
	    function reverseString(str) { return str.split("").reverse().join(""); }
	    function unquoteDashes(str) { return str.replace(/\\-/g, "-"); }

	    var split = reverseString(string).split(/-(?!\\)/);
	    var allReversed = map(split, reverseString);
	    return map(allReversed, unquoteDashes).reverse();
	  }

	  var param, paramVal;
	  for (i = 0; i < nPath; i++) {
	    paramName = paramNames[i];
	    param = this.params[paramName];
	    paramVal = m[i+1];
	    // if the param value matches a pre-replace pair, replace the value before decoding.
	    for (j = 0; j < param.replace.length; j++) {
	      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
	    }
	    if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
	    if (isDefined(paramVal)) paramVal = param.type.decode(paramVal);
	    values[paramName] = param.value(paramVal);
	  }
	  for (/**/; i < nTotal; i++) {
	    paramName = paramNames[i];
	    values[paramName] = this.params[paramName].value(searchParams[paramName]);
	    param = this.params[paramName];
	    paramVal = searchParams[paramName];
	    for (j = 0; j < param.replace.length; j++) {
	      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
	    }
	    if (isDefined(paramVal)) paramVal = param.type.decode(paramVal);
	    values[paramName] = param.value(paramVal);
	  }

	  return values;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#parameters
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns the names of all path and search parameters of this pattern in an unspecified order.
	 *
	 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
	 *    pattern has no parameters, an empty array is returned.
	 */
	UrlMatcher.prototype.parameters = function (param) {
	  if (!isDefined(param)) return this.$$paramNames;
	  return this.params[param] || null;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#validates
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Checks an object hash of parameters to validate their correctness according to the parameter
	 * types of this `UrlMatcher`.
	 *
	 * @param {Object} params The object hash of parameters to validate.
	 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
	 */
	UrlMatcher.prototype.validates = function (params) {
	  return this.params.$$validates(params);
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#format
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Creates a URL that matches this pattern by substituting the specified values
	 * for the path and search parameters. Null values for path parameters are
	 * treated as empty strings.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
	 * // returns '/user/bob?q=yes'
	 * </pre>
	 *
	 * @param {Object} values  the values to substitute for the parameters in this pattern.
	 * @returns {string}  the formatted URL (path and optionally search part).
	 */
	UrlMatcher.prototype.format = function (values) {
	  values = values || {};
	  var segments = this.segments, params = this.parameters(), paramset = this.params;
	  if (!this.validates(values)) return null;

	  var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

	  function encodeDashes(str) { // Replace dashes with encoded "\-"
	    return encodeURIComponent(str).replace(/-/g, function(c) { return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase(); });
	  }

	  for (i = 0; i < nTotal; i++) {
	    var isPathParam = i < nPath;
	    var name = params[i], param = paramset[name], value = param.value(values[name]);
	    var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
	    var squash = isDefaultValue ? param.squash : false;
	    var encoded = param.type.encode(value);

	    if (isPathParam) {
	      var nextSegment = segments[i + 1];
	      var isFinalPathParam = i + 1 === nPath;

	      if (squash === false) {
	        if (encoded != null) {
	          if (isArray(encoded)) {
	            result += map(encoded, encodeDashes).join("-");
	          } else {
	            result += encodeURIComponent(encoded);
	          }
	        }
	        result += nextSegment;
	      } else if (squash === true) {
	        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
	        result += nextSegment.match(capture)[1];
	      } else if (isString(squash)) {
	        result += squash + nextSegment;
	      }

	      if (isFinalPathParam && param.squash === true && result.slice(-1) === '/') result = result.slice(0, -1);
	    } else {
	      if (encoded == null || (isDefaultValue && squash !== false)) continue;
	      if (!isArray(encoded)) encoded = [ encoded ];
	      if (encoded.length === 0) continue;
	      encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
	      result += (search ? '&' : '?') + (name + '=' + encoded);
	      search = true;
	    }
	  }

	  return result;
	};

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:Type
	 *
	 * @description
	 * Implements an interface to define custom parameter types that can be decoded from and encoded to
	 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
	 * objects when matching or formatting URLs, or comparing or validating parameter values.
	 *
	 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
	 * information on registering custom types.
	 *
	 * @param {Object} config  A configuration object which contains the custom type definition.  The object's
	 *        properties will override the default methods and/or pattern in `Type`'s public interface.
	 * @example
	 * <pre>
	 * {
	 *   decode: function(val) { return parseInt(val, 10); },
	 *   encode: function(val) { return val && val.toString(); },
	 *   equals: function(a, b) { return this.is(a) && a === b; },
	 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
	 *   pattern: /\d+/
	 * }
	 * </pre>
	 *
	 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
	 *           coming from a substring of a URL.
	 *
	 * @returns {Object}  Returns a new `Type` object.
	 */
	function Type(config) {
	  extend(this, config);
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#is
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Detects whether a value is of a particular type. Accepts a native (decoded) value
	 * and determines whether it matches the current `Type` object.
	 *
	 * @param {*} val  The value to check.
	 * @param {string} key  Optional. If the type check is happening in the context of a specific
	 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
	 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
	 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
	 */
	Type.prototype.is = function(val, key) {
	  return true;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#encode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
	 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
	 * only needs to be a representation of `val` that has been coerced to a string.
	 *
	 * @param {*} val  The value to encode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
	 */
	Type.prototype.encode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#decode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Converts a parameter value (from URL string or transition param) to a custom/native value.
	 *
	 * @param {string} val  The URL parameter value to decode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {*}  Returns a custom representation of the URL parameter value.
	 */
	Type.prototype.decode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#equals
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Determines whether two decoded values are equivalent.
	 *
	 * @param {*} a  A value to compare against.
	 * @param {*} b  A value to compare against.
	 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
	 */
	Type.prototype.equals = function(a, b) {
	  return a == b;
	};

	Type.prototype.$subPattern = function() {
	  var sub = this.pattern.toString();
	  return sub.substr(1, sub.length - 2);
	};

	Type.prototype.pattern = /.*/;

	Type.prototype.toString = function() { return "{Type:" + this.name + "}"; };

	/** Given an encoded string, or a decoded object, returns a decoded object */
	Type.prototype.$normalize = function(val) {
	  return this.is(val) ? val : this.decode(val);
	};

	/*
	 * Wraps an existing custom Type as an array of Type, depending on 'mode'.
	 * e.g.:
	 * - urlmatcher pattern "/path?{queryParam[]:int}"
	 * - url: "/path?queryParam=1&queryParam=2
	 * - $stateParams.queryParam will be [1, 2]
	 * if `mode` is "auto", then
	 * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
	 * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
	 */
	Type.prototype.$asArray = function(mode, isSearch) {
	  if (!mode) return this;
	  if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");

	  function ArrayType(type, mode) {
	    function bindTo(type, callbackName) {
	      return function() {
	        return type[callbackName].apply(type, arguments);
	      };
	    }

	    // Wrap non-array value as array
	    function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
	    // Unwrap array value for "auto" mode. Return undefined for empty array.
	    function arrayUnwrap(val) {
	      switch(val.length) {
	        case 0: return undefined;
	        case 1: return mode === "auto" ? val[0] : val;
	        default: return val;
	      }
	    }
	    function falsey(val) { return !val; }

	    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
	    function arrayHandler(callback, allTruthyMode) {
	      return function handleArray(val) {
	        if (isArray(val) && val.length === 0) return val;
	        val = arrayWrap(val);
	        var result = map(val, callback);
	        if (allTruthyMode === true)
	          return filter(result, falsey).length === 0;
	        return arrayUnwrap(result);
	      };
	    }

	    // Wraps type (.equals) functions to operate on each value of an array
	    function arrayEqualsHandler(callback) {
	      return function handleArray(val1, val2) {
	        var left = arrayWrap(val1), right = arrayWrap(val2);
	        if (left.length !== right.length) return false;
	        for (var i = 0; i < left.length; i++) {
	          if (!callback(left[i], right[i])) return false;
	        }
	        return true;
	      };
	    }

	    this.encode = arrayHandler(bindTo(type, 'encode'));
	    this.decode = arrayHandler(bindTo(type, 'decode'));
	    this.is     = arrayHandler(bindTo(type, 'is'), true);
	    this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
	    this.pattern = type.pattern;
	    this.$normalize = arrayHandler(bindTo(type, '$normalize'));
	    this.name = type.name;
	    this.$arrayMode = mode;
	  }

	  return new ArrayType(this, mode);
	};



	/**
	 * @ngdoc object
	 * @name ui.router.util.$urlMatcherFactory
	 *
	 * @description
	 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
	 * is also available to providers under the name `$urlMatcherFactoryProvider`.
	 */
	function $UrlMatcherFactory() {
	  $$UMFP = this;

	  var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

	  // Use tildes to pre-encode slashes.
	  // If the slashes are simply URLEncoded, the browser can choose to pre-decode them,
	  // and bidirectional encoding/decoding fails.
	  // Tilde was chosen because it's not a RFC 3986 section 2.2 Reserved Character
	  function valToString(val) { return val != null ? val.toString().replace(/(~|\/)/g, function (m) { return {'~':'~~', '/':'~2F'}[m]; }) : val; }
	  function valFromString(val) { return val != null ? val.toString().replace(/(~~|~2F)/g, function (m) { return {'~~':'~', '~2F':'/'}[m]; }) : val; }

	  var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
	    "string": {
	      encode: valToString,
	      decode: valFromString,
	      // TODO: in 1.0, make string .is() return false if value is undefined/null by default.
	      // In 0.2.x, string params are optional by default for backwards compat
	      is: function(val) { return val == null || !isDefined(val) || typeof val === "string"; },
	      pattern: /[^/]*/
	    },
	    "int": {
	      encode: valToString,
	      decode: function(val) { return parseInt(val, 10); },
	      is: function(val) { return val !== undefined && val !== null && this.decode(val.toString()) === val; },
	      pattern: /\d+/
	    },
	    "bool": {
	      encode: function(val) { return val ? 1 : 0; },
	      decode: function(val) { return parseInt(val, 10) !== 0; },
	      is: function(val) { return val === true || val === false; },
	      pattern: /0|1/
	    },
	    "date": {
	      encode: function (val) {
	        if (!this.is(val))
	          return undefined;
	        return [ val.getFullYear(),
	          ('0' + (val.getMonth() + 1)).slice(-2),
	          ('0' + val.getDate()).slice(-2)
	        ].join("-");
	      },
	      decode: function (val) {
	        if (this.is(val)) return val;
	        var match = this.capture.exec(val);
	        return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
	      },
	      is: function(val) { return val instanceof Date && !isNaN(val.valueOf()); },
	      equals: function (a, b) { return this.is(a) && this.is(b) && a.toISOString() === b.toISOString(); },
	      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
	      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
	    },
	    "json": {
	      encode: angular.toJson,
	      decode: angular.fromJson,
	      is: angular.isObject,
	      equals: angular.equals,
	      pattern: /[^/]*/
	    },
	    "any": { // does not encode/decode
	      encode: angular.identity,
	      decode: angular.identity,
	      equals: angular.equals,
	      pattern: /.*/
	    }
	  };

	  function getDefaultConfig() {
	    return {
	      strict: isStrictMode,
	      caseInsensitive: isCaseInsensitive
	    };
	  }

	  function isInjectable(value) {
	    return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
	  }

	  /**
	   * [Internal] Get the default value of a parameter, which may be an injectable function.
	   */
	  $UrlMatcherFactory.$$getDefaultValue = function(config) {
	    if (!isInjectable(config.value)) return config.value;
	    if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	    return injector.invoke(config.value);
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URL matching should be case sensitive (the default behavior), or not.
	   *
	   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
	   * @returns {boolean} the current value of caseInsensitive
	   */
	  this.caseInsensitive = function(value) {
	    if (isDefined(value))
	      isCaseInsensitive = value;
	    return isCaseInsensitive;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#strictMode
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URLs should match trailing slashes, or not (the default behavior).
	   *
	   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
	   * @returns {boolean} the current value of strictMode
	   */
	  this.strictMode = function(value) {
	    if (isDefined(value))
	      isStrictMode = value;
	    return isStrictMode;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Sets the default behavior when generating or matching URLs with default parameter values.
	   *
	   * @param {string} value A string that defines the default parameter URL squashing behavior.
	   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
	   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
	   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
	   *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
	   *             the parameter value from the URL and replace it with this string.
	   */
	  this.defaultSquashPolicy = function(value) {
	    if (!isDefined(value)) return defaultSquashPolicy;
	    if (value !== true && value !== false && !isString(value))
	      throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
	    defaultSquashPolicy = value;
	    return value;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#compile
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
	   *
	   * @param {string} pattern  The URL pattern.
	   * @param {Object} config  The config object hash.
	   * @returns {UrlMatcher}  The UrlMatcher.
	   */
	  this.compile = function (pattern, config) {
	    return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#isMatcher
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
	   *
	   * @param {Object} object  The object to perform the type check against.
	   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
	   *          implementing all the same methods.
	   */
	  this.isMatcher = function (o) {
	    if (!isObject(o)) return false;
	    var result = true;

	    forEach(UrlMatcher.prototype, function(val, name) {
	      if (isFunction(val)) {
	        result = result && (isDefined(o[name]) && isFunction(o[name]));
	      }
	    });
	    return result;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#type
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
	   * generate URLs with typed parameters.
	   *
	   * @param {string} name  The type name.
	   * @param {Object|Function} definition   The type definition. See
	   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
	   *        runtime starts.  The result of this function is merged into the existing `definition`.
	   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   *
	   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
	   *
	   * @example
	   * This is a simple example of a custom type that encodes and decodes items from an
	   * array, using the array index as the URL-encoded value:
	   *
	   * <pre>
	   * var list = ['John', 'Paul', 'George', 'Ringo'];
	   *
	   * $urlMatcherFactoryProvider.type('listItem', {
	   *   encode: function(item) {
	   *     // Represent the list item in the URL using its corresponding index
	   *     return list.indexOf(item);
	   *   },
	   *   decode: function(item) {
	   *     // Look up the list item by index
	   *     return list[parseInt(item, 10)];
	   *   },
	   *   is: function(item) {
	   *     // Ensure the item is valid by checking to see that it appears
	   *     // in the list
	   *     return list.indexOf(item) > -1;
	   *   }
	   * });
	   *
	   * $stateProvider.state('list', {
	   *   url: "/list/{item:listItem}",
	   *   controller: function($scope, $stateParams) {
	   *     console.log($stateParams.item);
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * // Changes URL to '/list/3', logs "Ringo" to the console
	   * $state.go('list', { item: "Ringo" });
	   * </pre>
	   *
	   * This is a more complex example of a type that relies on dependency injection to
	   * interact with services, and uses the parameter name from the URL to infer how to
	   * handle encoding and decoding parameter values:
	   *
	   * <pre>
	   * // Defines a custom type that gets a value from a service,
	   * // where each service gets different types of values from
	   * // a backend API:
	   * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
	   *
	   *   // Matches up services to URL parameter names
	   *   var services = {
	   *     user: Users,
	   *     post: Posts
	   *   };
	   *
	   *   return {
	   *     encode: function(object) {
	   *       // Represent the object in the URL using its unique ID
	   *       return object.id;
	   *     },
	   *     decode: function(value, key) {
	   *       // Look up the object by ID, using the parameter
	   *       // name (key) to call the correct service
	   *       return services[key].findById(value);
	   *     },
	   *     is: function(object, key) {
	   *       // Check that object is a valid dbObject
	   *       return angular.isObject(object) && object.id && services[key];
	   *     }
	   *     equals: function(a, b) {
	   *       // Check the equality of decoded objects by comparing
	   *       // their unique IDs
	   *       return a.id === b.id;
	   *     }
	   *   };
	   * });
	   *
	   * // In a config() block, you can then attach URLs with
	   * // type-annotated parameters:
	   * $stateProvider.state('users', {
	   *   url: "/users",
	   *   // ...
	   * }).state('users.item', {
	   *   url: "/{user:dbObject}",
	   *   controller: function($scope, $stateParams) {
	   *     // $stateParams.user will now be an object returned from
	   *     // the Users service
	   *   },
	   *   // ...
	   * });
	   * </pre>
	   */
	  this.type = function (name, definition, definitionFn) {
	    if (!isDefined(definition)) return $types[name];
	    if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

	    $types[name] = new Type(extend({ name: name }, definition));
	    if (definitionFn) {
	      typeQueue.push({ name: name, def: definitionFn });
	      if (!enqueue) flushTypeQueue();
	    }
	    return this;
	  };

	  // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
	  function flushTypeQueue() {
	    while(typeQueue.length) {
	      var type = typeQueue.shift();
	      if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
	      angular.extend($types[type.name], injector.invoke(type.def));
	    }
	  }

	  // Register default types. Store them in the prototype of $types.
	  forEach(defaultTypes, function(type, name) { $types[name] = new Type(extend({name: name}, type)); });
	  $types = inherit($types, {});

	  /* No need to document $get, since it returns this */
	  this.$get = ['$injector', function ($injector) {
	    injector = $injector;
	    enqueue = false;
	    flushTypeQueue();

	    forEach(defaultTypes, function(type, name) {
	      if (!$types[name]) $types[name] = new Type(type);
	    });
	    return this;
	  }];

	  this.Param = function Param(id, type, config, location) {
	    var self = this;
	    config = unwrapShorthand(config);
	    type = getType(config, type, location);
	    var arrayMode = getArrayMode();
	    type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
	    if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
	      config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
	    var isOptional = config.value !== undefined;
	    var squash = getSquashPolicy(config, isOptional);
	    var replace = getReplace(config, arrayMode, isOptional, squash);

	    function unwrapShorthand(config) {
	      var keys = isObject(config) ? objectKeys(config) : [];
	      var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 &&
	                        indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
	      if (isShorthand) config = { value: config };
	      config.$$fn = isInjectable(config.value) ? config.value : function () { return config.value; };
	      return config;
	    }

	    function getType(config, urlType, location) {
	      if (config.type && urlType) throw new Error("Param '"+id+"' has two type configurations.");
	      if (urlType) return urlType;
	      if (!config.type) return (location === "config" ? $types.any : $types.string);

	      if (angular.isString(config.type))
	        return $types[config.type];
	      if (config.type instanceof Type)
	        return config.type;
	      return new Type(config.type);
	    }

	    // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
	    function getArrayMode() {
	      var arrayDefaults = { array: (location === "search" ? "auto" : false) };
	      var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
	      return extend(arrayDefaults, arrayParamNomenclature, config).array;
	    }

	    /**
	     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
	     */
	    function getSquashPolicy(config, isOptional) {
	      var squash = config.squash;
	      if (!isOptional || squash === false) return false;
	      if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
	      if (squash === true || isString(squash)) return squash;
	      throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
	    }

	    function getReplace(config, arrayMode, isOptional, squash) {
	      var replace, configuredKeys, defaultPolicy = [
	        { from: "",   to: (isOptional || arrayMode ? undefined : "") },
	        { from: null, to: (isOptional || arrayMode ? undefined : "") }
	      ];
	      replace = isArray(config.replace) ? config.replace : [];
	      if (isString(squash))
	        replace.push({ from: squash, to: undefined });
	      configuredKeys = map(replace, function(item) { return item.from; } );
	      return filter(defaultPolicy, function(item) { return indexOf(configuredKeys, item.from) === -1; }).concat(replace);
	    }

	    /**
	     * [Internal] Get the default value of a parameter, which may be an injectable function.
	     */
	    function $$getDefaultValue() {
	      if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	      var defaultValue = injector.invoke(config.$$fn);
	      if (defaultValue !== null && defaultValue !== undefined && !self.type.is(defaultValue))
	        throw new Error("Default value (" + defaultValue + ") for parameter '" + self.id + "' is not an instance of Type (" + self.type.name + ")");
	      return defaultValue;
	    }

	    /**
	     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
	     * default value, which may be the result of an injectable function.
	     */
	    function $value(value) {
	      function hasReplaceVal(val) { return function(obj) { return obj.from === val; }; }
	      function $replace(value) {
	        var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) { return obj.to; });
	        return replacement.length ? replacement[0] : value;
	      }
	      value = $replace(value);
	      return !isDefined(value) ? $$getDefaultValue() : self.type.$normalize(value);
	    }

	    function toString() { return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}"; }

	    extend(this, {
	      id: id,
	      type: type,
	      location: location,
	      array: arrayMode,
	      squash: squash,
	      replace: replace,
	      isOptional: isOptional,
	      value: $value,
	      dynamic: undefined,
	      config: config,
	      toString: toString
	    });
	  };

	  function ParamSet(params) {
	    extend(this, params || {});
	  }

	  ParamSet.prototype = {
	    $$new: function() {
	      return inherit(this, extend(new ParamSet(), { $$parent: this}));
	    },
	    $$keys: function () {
	      var keys = [], chain = [], parent = this,
	        ignore = objectKeys(ParamSet.prototype);
	      while (parent) { chain.push(parent); parent = parent.$$parent; }
	      chain.reverse();
	      forEach(chain, function(paramset) {
	        forEach(objectKeys(paramset), function(key) {
	            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1) keys.push(key);
	        });
	      });
	      return keys;
	    },
	    $$values: function(paramValues) {
	      var values = {}, self = this;
	      forEach(self.$$keys(), function(key) {
	        values[key] = self[key].value(paramValues && paramValues[key]);
	      });
	      return values;
	    },
	    $$equals: function(paramValues1, paramValues2) {
	      var equal = true, self = this;
	      forEach(self.$$keys(), function(key) {
	        var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
	        if (!self[key].type.equals(left, right)) equal = false;
	      });
	      return equal;
	    },
	    $$validates: function $$validate(paramValues) {
	      var keys = this.$$keys(), i, param, rawVal, normalized, encoded;
	      for (i = 0; i < keys.length; i++) {
	        param = this[keys[i]];
	        rawVal = paramValues[keys[i]];
	        if ((rawVal === undefined || rawVal === null) && param.isOptional)
	          break; // There was no parameter value, but the param is optional
	        normalized = param.type.$normalize(rawVal);
	        if (!param.type.is(normalized))
	          return false; // The value was not of the correct Type, and could not be decoded to the correct Type
	        encoded = param.type.encode(normalized);
	        if (angular.isString(encoded) && !param.type.pattern.exec(encoded))
	          return false; // The value was of the correct type, but when encoded, did not match the Type's regexp
	      }
	      return true;
	    },
	    $$parent: undefined
	  };

	  this.ParamSet = ParamSet;
	}

	// Register as a provider so it's available to other providers
	angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
	angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) { }]);

	/**
	 * @ngdoc object
	 * @name ui.router.router.$urlRouterProvider
	 *
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 * @requires $locationProvider
	 *
	 * @description
	 * `$urlRouterProvider` has the responsibility of watching `$location`. 
	 * When `$location` changes it runs through a list of rules one by one until a 
	 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
	 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
	 *
	 * There are several methods on `$urlRouterProvider` that make it useful to use directly
	 * in your module config.
	 */
	$UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
	function $UrlRouterProvider(   $locationProvider,   $urlMatcherFactory) {
	  var rules = [], otherwise = null, interceptDeferred = false, listener;

	  // Returns a string that is a prefix of all strings matching the RegExp
	  function regExpPrefix(re) {
	    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
	    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
	  }

	  // Interpolates matched values into a String.replace()-style pattern
	  function interpolate(pattern, match) {
	    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
	      return match[what === '$' ? 0 : Number(what)];
	    });
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#rule
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines rules that are used by `$urlRouterProvider` to find matches for
	   * specific URLs.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // Here's an example of how you might allow case insensitive urls
	   *   $urlRouterProvider.rule(function ($injector, $location) {
	   *     var path = $location.path(),
	   *         normalized = path.toLowerCase();
	   *
	   *     if (path !== normalized) {
	   *       return normalized;
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {function} rule Handler function that takes `$injector` and `$location`
	   * services as arguments. You can use them to return a valid path as a string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.rule = function (rule) {
	    if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    rules.push(rule);
	    return this;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouterProvider#otherwise
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines a path that is used when an invalid route is requested.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // if the path doesn't match any of the urls you configured
	   *   // otherwise will take care of routing the user to the
	   *   // specified url
	   *   $urlRouterProvider.otherwise('/index');
	   *
	   *   // Example of using function rule as param
	   *   $urlRouterProvider.otherwise(function ($injector, $location) {
	   *     return '/a/valid/url';
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|function} rule The url path you want to redirect to or a function 
	   * rule that returns the url path. The function version is passed two params: 
	   * `$injector` and `$location` services, and must return a url string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.otherwise = function (rule) {
	    if (isString(rule)) {
	      var redirect = rule;
	      rule = function () { return redirect; };
	    }
	    else if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    otherwise = rule;
	    return this;
	  };


	  function handleIfMatch($injector, handler, match) {
	    if (!match) return false;
	    var result = $injector.invoke(handler, handler, { $match: match });
	    return isDefined(result) ? result : true;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#when
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Registers a handler for a given url matching. 
	   * 
	   * If the handler is a string, it is
	   * treated as a redirect, and is interpolated according to the syntax of match
	   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
	   *
	   * If the handler is a function, it is injectable. It gets invoked if `$location`
	   * matches. You have the option of inject the match object as `$match`.
	   *
	   * The handler can return
	   *
	   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
	   *   will continue trying to find another one that matches.
	   * - **string** which is treated as a redirect and passed to `$location.url()`
	   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
	   *     if ($state.$current.navigable !== state ||
	   *         !equalForKeys($match, $stateParams) {
	   *      $state.transitionTo(state, $match, false);
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} what The incoming path that you want to redirect.
	   * @param {string|function} handler The path you want to redirect your user to.
	   */
	  this.when = function (what, handler) {
	    var redirect, handlerIsString = isString(handler);
	    if (isString(what)) what = $urlMatcherFactory.compile(what);

	    if (!handlerIsString && !isFunction(handler) && !isArray(handler))
	      throw new Error("invalid 'handler' in when()");

	    var strategies = {
	      matcher: function (what, handler) {
	        if (handlerIsString) {
	          redirect = $urlMatcherFactory.compile(handler);
	          handler = ['$match', function ($match) { return redirect.format($match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
	        }, {
	          prefix: isString(what.prefix) ? what.prefix : ''
	        });
	      },
	      regex: function (what, handler) {
	        if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

	        if (handlerIsString) {
	          redirect = handler;
	          handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path()));
	        }, {
	          prefix: regExpPrefix(what)
	        });
	      }
	    };

	    var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

	    for (var n in check) {
	      if (check[n]) return this.rule(strategies[n](what, handler));
	    }

	    throw new Error("invalid 'what' in when()");
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#deferIntercept
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Disables (or enables) deferring location change interception.
	   *
	   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
	   * defer a transition but maintain the current URL), call this method at configuration time.
	   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
	   * `$locationChangeSuccess` event handler.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *
	   *   // Prevent $urlRouter from automatically intercepting URL changes;
	   *   // this allows you to configure custom behavior in between
	   *   // location changes and route synchronization:
	   *   $urlRouterProvider.deferIntercept();
	   *
	   * }).run(function ($rootScope, $urlRouter, UserService) {
	   *
	   *   $rootScope.$on('$locationChangeSuccess', function(e) {
	   *     // UserService is an example service for managing user state
	   *     if (UserService.isLoggedIn()) return;
	   *
	   *     // Prevent $urlRouter's default handler from firing
	   *     e.preventDefault();
	   *
	   *     UserService.handleLogin().then(function() {
	   *       // Once the user has logged in, sync the current URL
	   *       // to the router:
	   *       $urlRouter.sync();
	   *     });
	   *   });
	   *
	   *   // Configures $urlRouter's listener *after* your custom listener
	   *   $urlRouter.listen();
	   * });
	   * </pre>
	   *
	   * @param {boolean} defer Indicates whether to defer location change interception. Passing
	            no parameter is equivalent to `true`.
	   */
	  this.deferIntercept = function (defer) {
	    if (defer === undefined) defer = true;
	    interceptDeferred = defer;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouter
	   *
	   * @requires $location
	   * @requires $rootScope
	   * @requires $injector
	   * @requires $browser
	   *
	   * @description
	   *
	   */
	  this.$get = $get;
	  $get.$inject = ['$location', '$rootScope', '$injector', '$browser', '$sniffer'];
	  function $get(   $location,   $rootScope,   $injector,   $browser,   $sniffer) {

	    var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;

	    function appendBasePath(url, isHtml5, absolute) {
	      if (baseHref === '/') return url;
	      if (isHtml5) return baseHref.slice(0, -1) + url;
	      if (absolute) return baseHref.slice(1) + url;
	      return url;
	    }

	    // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
	    function update(evt) {
	      if (evt && evt.defaultPrevented) return;
	      var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
	      lastPushedUrl = undefined;
	      // TODO: Re-implement this in 1.0 for https://github.com/angular-ui/ui-router/issues/1573
	      //if (ignoreUpdate) return true;

	      function check(rule) {
	        var handled = rule($injector, $location);

	        if (!handled) return false;
	        if (isString(handled)) $location.replace().url(handled);
	        return true;
	      }
	      var n = rules.length, i;

	      for (i = 0; i < n; i++) {
	        if (check(rules[i])) return;
	      }
	      // always check otherwise last to allow dynamic updates to the set of rules
	      if (otherwise) check(otherwise);
	    }

	    function listen() {
	      listener = listener || $rootScope.$on('$locationChangeSuccess', update);
	      return listener;
	    }

	    if (!interceptDeferred) listen();

	    return {
	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#sync
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
	       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
	       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
	       * with the transition by calling `$urlRouter.sync()`.
	       *
	       * @example
	       * <pre>
	       * angular.module('app', ['ui.router'])
	       *   .run(function($rootScope, $urlRouter) {
	       *     $rootScope.$on('$locationChangeSuccess', function(evt) {
	       *       // Halt state change from even starting
	       *       evt.preventDefault();
	       *       // Perform custom logic
	       *       var meetsRequirement = ...
	       *       // Continue with the update and state transition if logic allows
	       *       if (meetsRequirement) $urlRouter.sync();
	       *     });
	       * });
	       * </pre>
	       */
	      sync: function() {
	        update();
	      },

	      listen: function() {
	        return listen();
	      },

	      update: function(read) {
	        if (read) {
	          location = $location.url();
	          return;
	        }
	        if ($location.url() === location) return;

	        $location.url(location);
	        $location.replace();
	      },

	      push: function(urlMatcher, params, options) {
	         var url = urlMatcher.format(params || {});

	        // Handle the special hash param, if needed
	        if (url !== null && params && params['#']) {
	            url += '#' + params['#'];
	        }

	        $location.url(url);
	        lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
	        if (options && options.replace) $location.replace();
	      },

	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#href
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * A URL generation method that returns the compiled URL for a given
	       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
	       *
	       * @example
	       * <pre>
	       * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
	       *   person: "bob"
	       * });
	       * // $bob == "/about/bob";
	       * </pre>
	       *
	       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
	       * @param {object=} params An object of parameter values to fill the matcher's required parameters.
	       * @param {object=} options Options object. The options are:
	       *
	       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	       *
	       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
	       */
	      href: function(urlMatcher, params, options) {
	        if (!urlMatcher.validates(params)) return null;

	        var isHtml5 = $locationProvider.html5Mode();
	        if (angular.isObject(isHtml5)) {
	          isHtml5 = isHtml5.enabled;
	        }

	        isHtml5 = isHtml5 && $sniffer.history;
	        
	        var url = urlMatcher.format(params);
	        options = options || {};

	        if (!isHtml5 && url !== null) {
	          url = "#" + $locationProvider.hashPrefix() + url;
	        }

	        // Handle special hash param, if needed
	        if (url !== null && params && params['#']) {
	          url += '#' + params['#'];
	        }

	        url = appendBasePath(url, isHtml5, options.absolute);

	        if (!options.absolute || !url) {
	          return url;
	        }

	        var slash = (!isHtml5 && url ? '/' : ''), port = $location.port();
	        port = (port === 80 || port === 443 ? '' : ':' + port);

	        return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
	      }
	    };
	  }
	}

	angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$stateProvider
	 *
	 * @requires ui.router.router.$urlRouterProvider
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 *
	 * @description
	 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
	 * on state.
	 *
	 * A state corresponds to a "place" in the application in terms of the overall UI and
	 * navigation. A state describes (via the controller / template / view properties) what
	 * the UI looks like and does at that place.
	 *
	 * States often have things in common, and the primary way of factoring out these
	 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
	 * nested states.
	 *
	 * The `$stateProvider` provides interfaces to declare these states for your app.
	 */
	$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
	function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory) {

	  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

	  // Builds state properties from definition passed to registerState()
	  var stateBuilder = {

	    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
	    // state.children = [];
	    // if (parent) parent.children.push(state);
	    parent: function(state) {
	      if (isDefined(state.parent) && state.parent) return findState(state.parent);
	      // regex matches any valid composite state name
	      // would match "contact.list" but not "contacts"
	      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
	      return compositeName ? findState(compositeName[1]) : root;
	    },

	    // inherit 'data' from parent and override by own values (if any)
	    data: function(state) {
	      if (state.parent && state.parent.data) {
	        state.data = state.self.data = inherit(state.parent.data, state.data);
	      }
	      return state.data;
	    },

	    // Build a URLMatcher if necessary, either via a relative or absolute URL
	    url: function(state) {
	      var url = state.url, config = { params: state.params || {} };

	      if (isString(url)) {
	        if (url.charAt(0) == '^') return $urlMatcherFactory.compile(url.substring(1), config);
	        return (state.parent.navigable || root).url.concat(url, config);
	      }

	      if (!url || $urlMatcherFactory.isMatcher(url)) return url;
	      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
	    },

	    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
	    navigable: function(state) {
	      return state.url ? state : (state.parent ? state.parent.navigable : null);
	    },

	    // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
	    ownParams: function(state) {
	      var params = state.url && state.url.params || new $$UMFP.ParamSet();
	      forEach(state.params || {}, function(config, id) {
	        if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
	      });
	      return params;
	    },

	    // Derive parameters for this state and ensure they're a super-set of parent's parameters
	    params: function(state) {
	      var ownParams = pick(state.ownParams, state.ownParams.$$keys());
	      return state.parent && state.parent.params ? extend(state.parent.params.$$new(), ownParams) : new $$UMFP.ParamSet();
	    },

	    // If there is no explicit multi-view configuration, make one up so we don't have
	    // to handle both cases in the view directive later. Note that having an explicit
	    // 'views' property will mean the default unnamed view properties are ignored. This
	    // is also a good time to resolve view names to absolute names, so everything is a
	    // straight lookup at link time.
	    views: function(state) {
	      var views = {};

	      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
	        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
	        view.resolveAs = view.resolveAs || state.resolveAs || '$resolve';
	        views[name] = view;
	      });
	      return views;
	    },

	    // Keep a full path from the root down to this state as this is needed for state activation.
	    path: function(state) {
	      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
	    },

	    // Speed up $state.contains() as it's used a lot
	    includes: function(state) {
	      var includes = state.parent ? extend({}, state.parent.includes) : {};
	      includes[state.name] = true;
	      return includes;
	    },

	    $delegates: {}
	  };

	  function isRelative(stateName) {
	    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
	  }

	  function findState(stateOrName, base) {
	    if (!stateOrName) return undefined;

	    var isStr = isString(stateOrName),
	        name  = isStr ? stateOrName : stateOrName.name,
	        path  = isRelative(name);

	    if (path) {
	      if (!base) throw new Error("No reference point given for path '"  + name + "'");
	      base = findState(base);
	      
	      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

	      for (; i < pathLength; i++) {
	        if (rel[i] === "" && i === 0) {
	          current = base;
	          continue;
	        }
	        if (rel[i] === "^") {
	          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
	          current = current.parent;
	          continue;
	        }
	        break;
	      }
	      rel = rel.slice(i).join(".");
	      name = current.name + (current.name && rel ? "." : "") + rel;
	    }
	    var state = states[name];

	    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
	      return state;
	    }
	    return undefined;
	  }

	  function queueState(parentName, state) {
	    if (!queue[parentName]) {
	      queue[parentName] = [];
	    }
	    queue[parentName].push(state);
	  }

	  function flushQueuedChildren(parentName) {
	    var queued = queue[parentName] || [];
	    while(queued.length) {
	      registerState(queued.shift());
	    }
	  }

	  function registerState(state) {
	    // Wrap a new object around the state so we can store our private details easily.
	    state = inherit(state, {
	      self: state,
	      resolve: state.resolve || {},
	      toString: function() { return this.name; }
	    });

	    var name = state.name;
	    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
	    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "' is already defined");

	    // Get parent name
	    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
	        : (isString(state.parent)) ? state.parent
	        : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name
	        : '';

	    // If parent is not registered yet, add state to queue and register later
	    if (parentName && !states[parentName]) {
	      return queueState(parentName, state.self);
	    }

	    for (var key in stateBuilder) {
	      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
	    }
	    states[name] = state;

	    // Register the state in the global state list and with $urlRouter if necessary.
	    if (!state[abstractKey] && state.url) {
	      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
	        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
	          $state.transitionTo(state, $match, { inherit: true, location: false });
	        }
	      }]);
	    }

	    // Register any queued children
	    flushQueuedChildren(name);

	    return state;
	  }

	  // Checks text to see if it looks like a glob.
	  function isGlob (text) {
	    return text.indexOf('*') > -1;
	  }

	  // Returns true if glob matches current $state name.
	  function doesStateMatchGlob (glob) {
	    var globSegments = glob.split('.'),
	        segments = $state.$current.name.split('.');

	    //match single stars
	    for (var i = 0, l = globSegments.length; i < l; i++) {
	      if (globSegments[i] === '*') {
	        segments[i] = '*';
	      }
	    }

	    //match greedy starts
	    if (globSegments[0] === '**') {
	       segments = segments.slice(indexOf(segments, globSegments[1]));
	       segments.unshift('**');
	    }
	    //match greedy ends
	    if (globSegments[globSegments.length - 1] === '**') {
	       segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
	       segments.push('**');
	    }

	    if (globSegments.length != segments.length) {
	      return false;
	    }

	    return segments.join('') === globSegments.join('');
	  }


	  // Implicit root state that is always active
	  root = registerState({
	    name: '',
	    url: '^',
	    views: null,
	    'abstract': true
	  });
	  root.navigable = null;


	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#decorator
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Allows you to extend (carefully) or override (at your own peril) the 
	   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
	   * to add custom functionality to ui-router, for example inferring templateUrl 
	   * based on the state name.
	   *
	   * When passing only a name, it returns the current (original or decorated) builder
	   * function that matches `name`.
	   *
	   * The builder functions that can be decorated are listed below. Though not all
	   * necessarily have a good use case for decoration, that is up to you to decide.
	   *
	   * In addition, users can attach custom decorators, which will generate new 
	   * properties within the state's internal definition. There is currently no clear 
	   * use-case for this beyond accessing internal states (i.e. $state.$current), 
	   * however, expect this to become increasingly relevant as we introduce additional 
	   * meta-programming features.
	   *
	   * **Warning**: Decorators should not be interdependent because the order of 
	   * execution of the builder functions in non-deterministic. Builder functions 
	   * should only be dependent on the state definition object and super function.
	   *
	   *
	   * Existing builder functions and current return values:
	   *
	   * - **parent** `{object}` - returns the parent state object.
	   * - **data** `{object}` - returns state data, including any inherited data that is not
	   *   overridden by own values (if any).
	   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
	   *   or `null`.
	   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
	   *   navigable).
	   * - **params** `{object}` - returns an array of state params that are ensured to 
	   *   be a super-set of parent's params.
	   * - **views** `{object}` - returns a views object where each key is an absolute view 
	   *   name (i.e. "viewName@stateName") and each value is the config object 
	   *   (template, controller) for the view. Even when you don't use the views object 
	   *   explicitly on a state config, one is still created for you internally.
	   *   So by decorating this builder function you have access to decorating template 
	   *   and controller properties.
	   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
	   *   not including any params defined by ancestor states.
	   * - **path** `{string}` - returns the full path from the root down to this state. 
	   *   Needed for state activation.
	   * - **includes** `{object}` - returns an object that includes every state that 
	   *   would pass a `$state.includes()` test.
	   *
	   * @example
	   * <pre>
	   * // Override the internal 'views' builder with a function that takes the state
	   * // definition, and a reference to the internal function being overridden:
	   * $stateProvider.decorator('views', function (state, parent) {
	   *   var result = {},
	   *       views = parent(state);
	   *
	   *   angular.forEach(views, function (config, name) {
	   *     var autoName = (state.name + '.' + name).replace('.', '/');
	   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
	   *     result[name] = config;
	   *   });
	   *   return result;
	   * });
	   *
	   * $stateProvider.state('home', {
	   *   views: {
	   *     'contact.list': { controller: 'ListController' },
	   *     'contact.item': { controller: 'ItemController' }
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * $state.go('home');
	   * // Auto-populates list and item views with /partials/home/contact/list.html,
	   * // and /partials/home/contact/item.html, respectively.
	   * </pre>
	   *
	   * @param {string} name The name of the builder function to decorate. 
	   * @param {object} func A function that is responsible for decorating the original 
	   * builder function. The function receives two parameters:
	   *
	   *   - `{object}` - state - The state config object.
	   *   - `{object}` - super - The original builder function.
	   *
	   * @return {object} $stateProvider - $stateProvider instance
	   */
	  this.decorator = decorator;
	  function decorator(name, func) {
	    /*jshint validthis: true */
	    if (isString(name) && !isDefined(func)) {
	      return stateBuilder[name];
	    }
	    if (!isFunction(func) || !isString(name)) {
	      return this;
	    }
	    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
	      stateBuilder.$delegates[name] = stateBuilder[name];
	    }
	    stateBuilder[name] = func;
	    return this;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#state
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Registers a state configuration under a given state name. The stateConfig object
	   * has the following acceptable properties.
	   *
	   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
	   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
	   * @param {object} stateConfig State configuration object.
	   * @param {string|function=} stateConfig.template
	   * <a id='template'></a>
	   *   html template as a string or a function that returns
	   *   an html template as a string which should be used by the uiView directives. This property 
	   *   takes precedence over templateUrl.
	   *   
	   *   If `template` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
	   *     applying the current state
	   *
	   * <pre>template:
	   *   "<h1>inline template definition</h1>" +
	   *   "<div ui-view></div>"</pre>
	   * <pre>template: function(params) {
	   *       return "<h1>generated template</h1>"; }</pre>
	   * </div>
	   *
	   * @param {string|function=} stateConfig.templateUrl
	   * <a id='templateUrl'></a>
	   *
	   *   path or function that returns a path to an html
	   *   template that should be used by uiView.
	   *   
	   *   If `templateUrl` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
	   *     applying the current state
	   *
	   * <pre>templateUrl: "home.html"</pre>
	   * <pre>templateUrl: function(params) {
	   *     return myTemplates[params.pageId]; }</pre>
	   *
	   * @param {function=} stateConfig.templateProvider
	   * <a id='templateProvider'></a>
	   *    Provider function that returns HTML content string.
	   * <pre> templateProvider:
	   *       function(MyTemplateService, params) {
	   *         return MyTemplateService.getTemplate(params.pageId);
	   *       }</pre>
	   *
	   * @param {string|function=} stateConfig.controller
	   * <a id='controller'></a>
	   *
	   *  Controller fn that should be associated with newly
	   *   related scope or the name of a registered controller if passed as a string.
	   *   Optionally, the ControllerAs may be declared here.
	   * <pre>controller: "MyRegisteredController"</pre>
	   * <pre>controller:
	   *     "MyRegisteredController as fooCtrl"}</pre>
	   * <pre>controller: function($scope, MyService) {
	   *     $scope.data = MyService.getData(); }</pre>
	   *
	   * @param {function=} stateConfig.controllerProvider
	   * <a id='controllerProvider'></a>
	   *
	   * Injectable provider function that returns the actual controller or string.
	   * <pre>controllerProvider:
	   *   function(MyResolveData) {
	   *     if (MyResolveData.foo)
	   *       return "FooCtrl"
	   *     else if (MyResolveData.bar)
	   *       return "BarCtrl";
	   *     else return function($scope) {
	   *       $scope.baz = "Qux";
	   *     }
	   *   }</pre>
	   *
	   * @param {string=} stateConfig.controllerAs
	   * <a id='controllerAs'></a>
	   * 
	   * A controller alias name. If present the controller will be
	   *   published to scope under the controllerAs name.
	   * <pre>controllerAs: "myCtrl"</pre>
	   *
	   * @param {string|object=} stateConfig.parent
	   * <a id='parent'></a>
	   * Optionally specifies the parent state of this state.
	   *
	   * <pre>parent: 'parentState'</pre>
	   * <pre>parent: parentState // JS variable</pre>
	   *
	   * @param {object=} stateConfig.resolve
	   * <a id='resolve'></a>
	   *
	   * An optional map&lt;string, function&gt; of dependencies which
	   *   should be injected into the controller. If any of these dependencies are promises, 
	   *   the router will wait for them all to be resolved before the controller is instantiated.
	   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
	   *   and the values of the resolved promises are injected into any controllers that reference them.
	   *   If any  of the promises are rejected the $stateChangeError event is fired.
	   *
	   *   The map object is:
	   *   
	   *   - key - {string}: name of dependency to be injected into controller
	   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
	   *     it is injected and return value it treated as dependency. If result is a promise, it is 
	   *     resolved before its value is injected into controller.
	   *
	   * <pre>resolve: {
	   *     myResolve1:
	   *       function($http, $stateParams) {
	   *         return $http.get("/api/foos/"+stateParams.fooID);
	   *       }
	   *     }</pre>
	   *
	   * @param {string=} stateConfig.url
	   * <a id='url'></a>
	   *
	   *   A url fragment with optional parameters. When a state is navigated or
	   *   transitioned to, the `$stateParams` service will be populated with any 
	   *   parameters that were passed.
	   *
	   *   (See {@link ui.router.util.type:UrlMatcher UrlMatcher} `UrlMatcher`} for
	   *   more details on acceptable patterns )
	   *
	   * examples:
	   * <pre>url: "/home"
	   * url: "/users/:userid"
	   * url: "/books/{bookid:[a-zA-Z_-]}"
	   * url: "/books/{categoryid:int}"
	   * url: "/books/{publishername:string}/{categoryid:int}"
	   * url: "/messages?before&after"
	   * url: "/messages?{before:date}&{after:date}"
	   * url: "/messages/:mailboxid?{before:date}&{after:date}"
	   * </pre>
	   *
	   * @param {object=} stateConfig.views
	   * <a id='views'></a>
	   * an optional map&lt;string, object&gt; which defined multiple views, or targets views
	   * manually/explicitly.
	   *
	   * Examples:
	   *
	   * Targets three named `ui-view`s in the parent state's template
	   * <pre>views: {
	   *     header: {
	   *       controller: "headerCtrl",
	   *       templateUrl: "header.html"
	   *     }, body: {
	   *       controller: "bodyCtrl",
	   *       templateUrl: "body.html"
	   *     }, footer: {
	   *       controller: "footCtrl",
	   *       templateUrl: "footer.html"
	   *     }
	   *   }</pre>
	   *
	   * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
	   * <pre>views: {
	   *     'header@top': {
	   *       controller: "msgHeaderCtrl",
	   *       templateUrl: "msgHeader.html"
	   *     }, 'body': {
	   *       controller: "messagesCtrl",
	   *       templateUrl: "messages.html"
	   *     }
	   *   }</pre>
	   *
	   * @param {boolean=} [stateConfig.abstract=false]
	   * <a id='abstract'></a>
	   * An abstract state will never be directly activated,
	   *   but can provide inherited properties to its common children states.
	   * <pre>abstract: true</pre>
	   *
	   * @param {function=} stateConfig.onEnter
	   * <a id='onEnter'></a>
	   *
	   * Callback function for when a state is entered. Good way
	   *   to trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explicitly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onEnter: function(MyService, $stateParams) {
	   *     MyService.foo($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {function=} stateConfig.onExit
	   * <a id='onExit'></a>
	   *
	   * Callback function for when a state is exited. Good way to
	   *   trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explicitly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onExit: function(MyService, $stateParams) {
	   *     MyService.cleanup($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {boolean=} [stateConfig.reloadOnSearch=true]
	   * <a id='reloadOnSearch'></a>
	   *
	   * If `false`, will not retrigger the same state
	   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
	   *   Useful for when you'd like to modify $location.search() without triggering a reload.
	   * <pre>reloadOnSearch: false</pre>
	   *
	   * @param {object=} stateConfig.data
	   * <a id='data'></a>
	   *
	   * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
	   *   prototypally inherited.  In other words, adding a data property to a state adds it to
	   *   the entire subtree via prototypal inheritance.
	   *
	   * <pre>data: {
	   *     requiredRole: 'foo'
	   * } </pre>
	   *
	   * @param {object=} stateConfig.params
	   * <a id='params'></a>
	   *
	   * A map which optionally configures parameters declared in the `url`, or
	   *   defines additional non-url parameters.  For each parameter being
	   *   configured, add a configuration object keyed to the name of the parameter.
	   *
	   *   Each parameter configuration object may contain the following properties:
	   *
	   *   - ** value ** - {object|function=}: specifies the default value for this
	   *     parameter.  This implicitly sets this parameter as optional.
	   *
	   *     When UI-Router routes to a state and no value is
	   *     specified for this parameter in the URL or transition, the
	   *     default value will be used instead.  If `value` is a function,
	   *     it will be injected and invoked, and the return value used.
	   *
	   *     *Note*: `undefined` is treated as "no default value" while `null`
	   *     is treated as "the default value is `null`".
	   *
	   *     *Shorthand*: If you only need to configure the default value of the
	   *     parameter, you may use a shorthand syntax.   In the **`params`**
	   *     map, instead mapping the param name to a full parameter configuration
	   *     object, simply set map it to the default parameter value, e.g.:
	   *
	   * <pre>// define a parameter's default value
	   * params: {
	   *     param1: { value: "defaultValue" }
	   * }
	   * // shorthand default values
	   * params: {
	   *     param1: "defaultValue",
	   *     param2: "param2Default"
	   * }</pre>
	   *
	   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
	   *     treated as an array of values.  If you specified a Type, the value will be
	   *     treated as an array of the specified Type.  Note: query parameter values
	   *     default to a special `"auto"` mode.
	   *
	   *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
	   *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
	   *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
	   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
	   *     value (e.g.: `{ foo: '1' }`).
	   *
	   * <pre>params: {
	   *     param1: { array: true }
	   * }</pre>
	   *
	   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
	   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
	   *     configured default squash policy.
	   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
	   *
	   *   There are three squash settings:
	   *
	   *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
	   *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
	   *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
	   *       This can allow for cleaner looking URLs.
	   *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
	   *
	   * <pre>params: {
	   *     param1: {
	   *       value: "defaultId",
	   *       squash: true
	   * } }
	   * // squash "defaultValue" to "~"
	   * params: {
	   *     param1: {
	   *       value: "defaultValue",
	   *       squash: "~"
	   * } }
	   * </pre>
	   *
	   *
	   * @example
	   * <pre>
	   * // Some state name examples
	   *
	   * // stateName can be a single top-level name (must be unique).
	   * $stateProvider.state("home", {});
	   *
	   * // Or it can be a nested state name. This state is a child of the
	   * // above "home" state.
	   * $stateProvider.state("home.newest", {});
	   *
	   * // Nest states as deeply as needed.
	   * $stateProvider.state("home.newest.abc.xyz.inception", {});
	   *
	   * // state() returns $stateProvider, so you can chain state declarations.
	   * $stateProvider
	   *   .state("home", {})
	   *   .state("about", {})
	   *   .state("contacts", {});
	   * </pre>
	   *
	   */
	  this.state = state;
	  function state(name, definition) {
	    /*jshint validthis: true */
	    if (isObject(name)) definition = name;
	    else definition.name = name;
	    registerState(definition);
	    return this;
	  }

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$state
	   *
	   * @requires $rootScope
	   * @requires $q
	   * @requires ui.router.state.$view
	   * @requires $injector
	   * @requires ui.router.util.$resolve
	   * @requires ui.router.state.$stateParams
	   * @requires ui.router.router.$urlRouter
	   *
	   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
	   * you'd like to test against the current active state.
	   * @property {object} current A reference to the state's config object. However 
	   * you passed it in. Useful for accessing custom data.
	   * @property {object} transition Currently pending transition. A promise that'll 
	   * resolve or reject.
	   *
	   * @description
	   * `$state` service is responsible for representing states as well as transitioning
	   * between them. It also provides interfaces to ask for current state or even states
	   * you're coming from.
	   */
	  this.$get = $get;
	  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
	  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $urlRouter,   $location,   $urlMatcherFactory) {

	    var TransitionSupersededError = new Error('transition superseded');

	    var TransitionSuperseded = silenceUncaughtInPromise($q.reject(TransitionSupersededError));
	    var TransitionPrevented = silenceUncaughtInPromise($q.reject(new Error('transition prevented')));
	    var TransitionAborted = silenceUncaughtInPromise($q.reject(new Error('transition aborted')));
	    var TransitionFailed = silenceUncaughtInPromise($q.reject(new Error('transition failed')));

	    // Handles the case where a state which is the target of a transition is not found, and the user
	    // can optionally retry or defer the transition
	    function handleRedirect(redirect, state, params, options) {
	      /**
	       * @ngdoc event
	       * @name ui.router.state.$state#$stateNotFound
	       * @eventOf ui.router.state.$state
	       * @eventType broadcast on root scope
	       * @description
	       * Fired when a requested state **cannot be found** using the provided state name during transition.
	       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
	       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
	       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
	       * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
	       *
	       * @param {Object} event Event object.
	       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
	       * @param {State} fromState Current state object.
	       * @param {Object} fromParams Current state params.
	       *
	       * @example
	       *
	       * <pre>
	       * // somewhere, assume lazy.state has not been defined
	       * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
	       *
	       * // somewhere else
	       * $scope.$on('$stateNotFound',
	       * function(event, unfoundState, fromState, fromParams){
	       *     console.log(unfoundState.to); // "lazy.state"
	       *     console.log(unfoundState.toParams); // {a:1, b:2}
	       *     console.log(unfoundState.options); // {inherit:false} + default options
	       * })
	       * </pre>
	       */
	      var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);

	      if (evt.defaultPrevented) {
	        $urlRouter.update();
	        return TransitionAborted;
	      }

	      if (!evt.retry) {
	        return null;
	      }

	      // Allow the handler to return a promise to defer state lookup retry
	      if (options.$retry) {
	        $urlRouter.update();
	        return TransitionFailed;
	      }
	      var retryTransition = $state.transition = $q.when(evt.retry);

	      retryTransition.then(function() {
	        if (retryTransition !== $state.transition) {
	          $rootScope.$broadcast('$stateChangeCancel', redirect.to, redirect.toParams, state, params);
	          return TransitionSuperseded;
	        }
	        redirect.options.$retry = true;
	        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
	      }, function() {
	        return TransitionAborted;
	      });
	      $urlRouter.update();

	      return retryTransition;
	    }

	    root.locals = { resolve: null, globals: { $stateParams: {} } };

	    $state = {
	      params: {},
	      current: root.self,
	      $current: root,
	      transition: null
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#reload
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method that force reloads the current state. All resolves are re-resolved,
	     * controllers reinstantiated, and events re-fired.
	     *
	     * @example
	     * <pre>
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     $state.reload();
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>
	     *
	     * @param {string=|object=} state - A state name or a state object, which is the root of the resolves to be re-resolved.
	     * @example
	     * <pre>
	     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item' 
	     * //and current state is 'contacts.detail.item'
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     //will reload 'contact.detail' and 'contact.detail.item' states
	     *     $state.reload('contact.detail');
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>

	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.reload = function reload(state) {
	      return $state.transitionTo($state.current, $stateParams, { reload: state || true, inherit: false, notify: true});
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#go
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Convenience method for transitioning to a new state. `$state.go` calls 
	     * `$state.transitionTo` internally but automatically sets options to 
	     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
	     * This allows you to easily use an absolute or relative to path and specify 
	     * only the parameters you'd like to update (while letting unspecified parameters 
	     * inherit from the currently active ancestor states).
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.go('contact.detail');
	     *   };
	     * });
	     * </pre>
	     * <img src='../ngdoc_assets/StateGoExamples.png'/>
	     *
	     * @param {string} to Absolute state name or relative state path. Some examples:
	     *
	     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
	     * - `$state.go('^')` - will go to a parent state
	     * - `$state.go('^.sibling')` - will go to a sibling state
	     * - `$state.go('.child.grandchild')` - will go to grandchild state
	     *
	     * @param {object=} params A map of the parameters that will be sent to the state, 
	     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
	     * defined parameters. Only parameters specified in the state definition can be overridden, new 
	     * parameters will be ignored. This allows, for example, going to a sibling state that shares parameters
	     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
	     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
	     * will get you all current parameters, etc.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false|string|object}, If `true` will force transition even if no state or params
	     *    have changed.  It will reload the resolves and views of the current state and parent states.
	     *    If `reload` is a string (or state object), the state object is fetched (by name, or object reference); and \
	     *    the transition reloads the resolves and views for that matched state, and all its children states.
	     *
	     * @returns {promise} A promise representing the state of the new transition.
	     *
	     * Possible success values:
	     *
	     * - $state.current
	     *
	     * <br/>Possible rejection values:
	     *
	     * - 'transition superseded' - when a newer transition has been started after this one
	     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
	     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
	     *   when a `$stateNotFound` `event.retry` promise errors.
	     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
	     * - *resolve error* - when an error has occurred with a `resolve`
	     *
	     */
	    $state.go = function go(to, params, options) {
	      return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#transitionTo
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
	     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.transitionTo('contact.detail');
	     *   };
	     * });
	     * </pre>
	     *
	     * @param {string} to State name.
	     * @param {object=} toParams A map of the parameters that will be sent to the state,
	     * will populate $stateParams.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false|string=|object=}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *    if String, then will reload the state with the name given in reload, and any children.
	     *    if Object, then a stateObj is expected, will reload the state found in stateObj, and any children.
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.transitionTo = function transitionTo(to, toParams, options) {
	      toParams = toParams || {};
	      options = extend({
	        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
	      }, options || {});

	      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
	      var evt, toState = findState(to, options.relative);

	      // Store the hash param for later (since it will be stripped out by various methods)
	      var hash = toParams['#'];

	      if (!isDefined(toState)) {
	        var redirect = { to: to, toParams: toParams, options: options };
	        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

	        if (redirectResult) {
	          return redirectResult;
	        }

	        // Always retry once if the $stateNotFound was not prevented
	        // (handles either redirect changed or state lazy-definition)
	        to = redirect.to;
	        toParams = redirect.toParams;
	        options = redirect.options;
	        toState = findState(to, options.relative);

	        if (!isDefined(toState)) {
	          if (!options.relative) throw new Error("No such state '" + to + "'");
	          throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
	        }
	      }
	      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
	      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
	      if (!toState.params.$$validates(toParams)) return TransitionFailed;

	      toParams = toState.params.$$values(toParams);
	      to = toState;

	      var toPath = to.path;

	      // Starting from the root of the path, keep all levels that haven't changed
	      var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];

	      if (!options.reload) {
	        while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      } else if (isString(options.reload) || isObject(options.reload)) {
	        if (isObject(options.reload) && !options.reload.name) {
	          throw new Error('Invalid reload state object');
	        }
	        
	        var reloadState = options.reload === true ? fromPath[0] : findState(options.reload);
	        if (options.reload && !reloadState) {
	          throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
	        }

	        while (state && state === fromPath[keep] && state !== reloadState) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      }

	      // If we're going to the same state and all locals are kept, we've got nothing to do.
	      // But clear 'transition', as we still want to cancel any other pending transitions.
	      // TODO: We may not want to bump 'transition' if we're called from a location change
	      // that we've initiated ourselves, because we might accidentally abort a legitimate
	      // transition initiated from code?
	      if (shouldSkipReload(to, toParams, from, fromParams, locals, options)) {
	        if (hash) toParams['#'] = hash;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        copy(filterByKeys(to.params.$$keys(), $stateParams), to.locals.globals.$stateParams);
	        if (options.location && to.navigable && to.navigable.url) {
	          $urlRouter.push(to.navigable.url, toParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	          $urlRouter.update(true);
	        }
	        $state.transition = null;
	        return $q.when($state.current);
	      }

	      // Filter parameters before we pass them to event handlers etc.
	      toParams = filterByKeys(to.params.$$keys(), toParams || {});
	      
	      // Re-add the saved hash before we start returning things or broadcasting $stateChangeStart
	      if (hash) toParams['#'] = hash;
	      
	      // Broadcast start event and cancel the transition if requested
	      if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeStart
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when the state transition **begins**. You can use `event.preventDefault()`
	         * to prevent the transition from happening and then the transition promise will be
	         * rejected with a `'transition prevented'` value.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         *
	         * @example
	         *
	         * <pre>
	         * $rootScope.$on('$stateChangeStart',
	         * function(event, toState, toParams, fromState, fromParams){
	         *     event.preventDefault();
	         *     // transitionTo() promise will be rejected with
	         *     // a 'transition prevented' error
	         * })
	         * </pre>
	         */
	        if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams, options).defaultPrevented) {
	          $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
	          //Don't update and resync url if there's been a new transition started. see issue #2238, #600
	          if ($state.transition == null) $urlRouter.update();
	          return TransitionPrevented;
	        }
	      }

	      // Resolve locals for the remaining states, but don't update any global state just
	      // yet -- if anything fails to resolve the current state needs to remain untouched.
	      // We also set up an inheritance chain for the locals here. This allows the view directive
	      // to quickly look up the correct definition for each view in the current state. Even
	      // though we create the locals object itself outside resolveState(), it is initially
	      // empty and gets filled asynchronously. We need to keep track of the promise for the
	      // (fully resolved) current locals, and pass this down the chain.
	      var resolved = $q.when(locals);

	      for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
	        locals = toLocals[l] = inherit(locals);
	        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
	      }

	      // Once everything is resolved, we are ready to perform the actual transition
	      // and return a promise for the new state. We also keep track of what the
	      // current promise is, so that we can detect overlapping transitions and
	      // keep only the outcome of the last transition.
	      var transition = $state.transition = resolved.then(function () {
	        var l, entering, exiting;

	        if ($state.transition !== transition) {
	          $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
	          return TransitionSuperseded;
	        }

	        // Exit 'from' states not kept
	        for (l = fromPath.length - 1; l >= keep; l--) {
	          exiting = fromPath[l];
	          if (exiting.self.onExit) {
	            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
	          }
	          exiting.locals = null;
	        }

	        // Enter 'to' states not kept
	        for (l = keep; l < toPath.length; l++) {
	          entering = toPath[l];
	          entering.locals = toLocals[l];
	          if (entering.self.onEnter) {
	            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
	          }
	        }

	        // Run it again, to catch any transitions in callbacks
	        if ($state.transition !== transition) {
	          $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
	          return TransitionSuperseded;
	        }

	        // Update globals in $state
	        $state.$current = to;
	        $state.current = to.self;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        $state.transition = null;

	        if (options.location && to.navigable) {
	          $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	        }

	        if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeSuccess
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired once the state transition is **complete**.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         */
	          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
	        }
	        $urlRouter.update(true);

	        return $state.current;
	      }).then(null, function (error) {
	        // propagate TransitionSuperseded error without emitting $stateChangeCancel
	        // as it was already emitted in the success handler above
	        if (error === TransitionSupersededError) return TransitionSuperseded;

	        if ($state.transition !== transition) {
	          $rootScope.$broadcast('$stateChangeCancel', to.self, toParams, from.self, fromParams);
	          return TransitionSuperseded;
	        }

	        $state.transition = null;
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeError
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when an **error occurs** during transition. It's important to note that if you
	         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
	         * they will not throw traditionally. You must listen for this $stateChangeError event to
	         * catch **ALL** errors.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         * @param {Error} error The resolve error object.
	         */
	        evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);

	        if (!evt.defaultPrevented) {
	          $urlRouter.update();
	        }

	        return $q.reject(error);
	      });

	      silenceUncaughtInPromise(transition);
	      return transition;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#is
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
	     * but only checks for the full state name. If params is supplied then it will be
	     * tested for strict equality against the current active params object, so all params
	     * must match with none missing and no extras.
	     *
	     * @example
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // absolute name
	     * $state.is('contact.details.item'); // returns true
	     * $state.is(contactDetailItemStateObject); // returns true
	     *
	     * // relative name (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
	     * to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
	     * test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it is the state.
	     */
	    $state.is = function is(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) { return undefined; }
	      if ($state.$current !== state) { return false; }

	      return !params || objectKeys(params).reduce(function(acc, key) {
	        var paramDef = state.params[key];
	        return acc && !paramDef || paramDef.type.equals($stateParams[key], params[key]);
	      }, true);
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#includes
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method to determine if the current active state is equal to or is the child of the
	     * state stateName. If any params are passed then they will be tested for a match as well.
	     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
	     *
	     * @example
	     * Partial and relative names
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // Using partial names
	     * $state.includes("contacts"); // returns true
	     * $state.includes("contacts.details"); // returns true
	     * $state.includes("contacts.details.item"); // returns true
	     * $state.includes("contacts.list"); // returns false
	     * $state.includes("about"); // returns false
	     *
	     * // Using relative names (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
	     * </pre>
	     *
	     * Basic globbing patterns
	     * <pre>
	     * $state.$current.name = 'contacts.details.item.url';
	     *
	     * $state.includes("*.details.*.*"); // returns true
	     * $state.includes("*.details.**"); // returns true
	     * $state.includes("**.item.**"); // returns true
	     * $state.includes("*.details.item.url"); // returns true
	     * $state.includes("*.details.*.url"); // returns true
	     * $state.includes("*.details.*"); // returns false
	     * $state.includes("item.**"); // returns false
	     * </pre>
	     *
	     * @param {string} stateOrName A partial name, relative name, or glob pattern
	     * to be searched for within the current state name.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
	     * that you'd like to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
	     * .includes will test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it does include the state
	     */
	    $state.includes = function includes(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      if (isString(stateOrName) && isGlob(stateOrName)) {
	        if (!doesStateMatchGlob(stateOrName)) {
	          return false;
	        }
	        stateOrName = $state.$current.name;
	      }

	      var state = findState(stateOrName, options.relative);
	      if (!isDefined(state)) { return undefined; }
	      if (!isDefined($state.$current.includes[state.name])) { return false; }
	      if (!params) { return true; }

	      var keys = objectKeys(params);
	      for (var i = 0; i < keys.length; i++) {
	        var key = keys[i], paramDef = state.params[key];
	        if (paramDef && !paramDef.type.equals($stateParams[key], params[key])) {
	          return false;
	        }
	      }

	      return objectKeys(params).reduce(function(acc, key) {
	        var paramDef = state.params[key];
	        return acc && !paramDef || paramDef.type.equals($stateParams[key], params[key]);
	      }, true);
	    };


	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#href
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A url generation method that returns the compiled url for the given state populated with the given params.
	     *
	     * @example
	     * <pre>
	     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
	     * @param {object=} params An object of parameter values to fill the state's required parameters.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
	     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
	     *    ancestor with a valid url).
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     * 
	     * @returns {string} compiled state url
	     */
	    $state.href = function href(stateOrName, params, options) {
	      options = extend({
	        lossy:    true,
	        inherit:  true,
	        absolute: false,
	        relative: $state.$current
	      }, options || {});

	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) return null;
	      if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);
	      
	      var nav = (state && options.lossy) ? state.navigable : state;

	      if (!nav || nav.url === undefined || nav.url === null) {
	        return null;
	      }
	      return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys().concat('#'), params || {}), {
	        absolute: options.absolute
	      });
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#get
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Returns the state configuration object for any specific state or all states.
	     *
	     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
	     * the requested state. If not provided, returns an array of ALL state configs.
	     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
	     * @returns {Object|Array} State configuration object or array of all objects.
	     */
	    $state.get = function (stateOrName, context) {
	      if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
	      var state = findState(stateOrName, context || $state.$current);
	      return (state && state.self) ? state.self : null;
	    };

	    function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
	      // Make a restricted $stateParams with only the parameters that apply to this state if
	      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
	      // we also need $stateParams to be available for any $injector calls we make during the
	      // dependency resolution process.
	      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
	      var locals = { $stateParams: $stateParams };

	      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
	      // We're also including $stateParams in this; that way the parameters are restricted
	      // to the set that should be visible to the state, and are independent of when we update
	      // the global $state and $stateParams values.
	      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
	      var promises = [dst.resolve.then(function (globals) {
	        dst.globals = globals;
	      })];
	      if (inherited) promises.push(inherited);

	      function resolveViews() {
	        var viewsPromises = [];

	        // Resolve template and dependencies for all views.
	        forEach(state.views, function (view, name) {
	          var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
	          injectables.$template = [ function () {
	            return $view.load(name, { view: view, locals: dst.globals, params: $stateParams, notify: options.notify }) || '';
	          }];

	          viewsPromises.push($resolve.resolve(injectables, dst.globals, dst.resolve, state).then(function (result) {
	            // References to the controller (only instantiated at link time)
	            if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
	              var injectLocals = angular.extend({}, injectables, dst.globals);
	              result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
	            } else {
	              result.$$controller = view.controller;
	            }
	            // Provide access to the state itself for internal use
	            result.$$state = state;
	            result.$$controllerAs = view.controllerAs;
	            result.$$resolveAs = view.resolveAs;
	            dst[name] = result;
	          }));
	        });

	        return $q.all(viewsPromises).then(function(){
	          return dst.globals;
	        });
	      }

	      // Wait for all the promises and then return the activation object
	      return $q.all(promises).then(resolveViews).then(function (values) {
	        return dst;
	      });
	    }

	    return $state;
	  }

	  function shouldSkipReload(to, toParams, from, fromParams, locals, options) {
	    // Return true if there are no differences in non-search (path/object) params, false if there are differences
	    function nonSearchParamsEqual(fromAndToState, fromParams, toParams) {
	      // Identify whether all the parameters that differ between `fromParams` and `toParams` were search params.
	      function notSearchParam(key) {
	        return fromAndToState.params[key].location != "search";
	      }
	      var nonQueryParamKeys = fromAndToState.params.$$keys().filter(notSearchParam);
	      var nonQueryParams = pick.apply({}, [fromAndToState.params].concat(nonQueryParamKeys));
	      var nonQueryParamSet = new $$UMFP.ParamSet(nonQueryParams);
	      return nonQueryParamSet.$$equals(fromParams, toParams);
	    }

	    // If reload was not explicitly requested
	    // and we're transitioning to the same state we're already in
	    // and    the locals didn't change
	    //     or they changed in a way that doesn't merit reloading
	    //        (reloadOnParams:false, or reloadOnSearch.false and only search params changed)
	    // Then return true.
	    if (!options.reload && to === from &&
	      (locals === from.locals || (to.self.reloadOnSearch === false && nonSearchParamsEqual(from, fromParams, toParams)))) {
	      return true;
	    }
	  }
	}

	angular.module('ui.router.state')
	  .factory('$stateParams', function () { return {}; })
	  .constant("$state.runtime", { autoinject: true })
	  .provider('$state', $StateProvider)
	  // Inject $state to initialize when entering runtime. #2574
	  .run(['$injector', function ($injector) {
	    // Allow tests (stateSpec.js) to turn this off by defining this constant
	    if ($injector.get("$state.runtime").autoinject) {
	      $injector.get('$state');
	    }
	  }]);


	$ViewProvider.$inject = [];
	function $ViewProvider() {

	  this.$get = $get;
	  /**
	   * @ngdoc object
	   * @name ui.router.state.$view
	   *
	   * @requires ui.router.util.$templateFactory
	   * @requires $rootScope
	   *
	   * @description
	   *
	   */
	  $get.$inject = ['$rootScope', '$templateFactory'];
	  function $get(   $rootScope,   $templateFactory) {
	    return {
	      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
	      /**
	       * @ngdoc function
	       * @name ui.router.state.$view#load
	       * @methodOf ui.router.state.$view
	       *
	       * @description
	       *
	       * @param {string} name name
	       * @param {object} options option object.
	       */
	      load: function load(name, options) {
	        var result, defaults = {
	          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
	        };
	        options = extend(defaults, options);

	        if (options.view) {
	          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
	        }
	        return result;
	      }
	    };
	  }
	}

	angular.module('ui.router.state').provider('$view', $ViewProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$uiViewScrollProvider
	 *
	 * @description
	 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
	 */
	function $ViewScrollProvider() {

	  var useAnchorScroll = false;

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
	   * @methodOf ui.router.state.$uiViewScrollProvider
	   *
	   * @description
	   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
	   * scrolling based on the url anchor.
	   */
	  this.useAnchorScroll = function () {
	    useAnchorScroll = true;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$uiViewScroll
	   *
	   * @requires $anchorScroll
	   * @requires $timeout
	   *
	   * @description
	   * When called with a jqLite element, it scrolls the element into view (after a
	   * `$timeout` so the DOM has time to refresh).
	   *
	   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
	   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
	   */
	  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
	    if (useAnchorScroll) {
	      return $anchorScroll;
	    }

	    return function ($element) {
	      return $timeout(function () {
	        $element[0].scrollIntoView();
	      }, 0, false);
	    };
	  }];
	}

	angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-view
	 *
	 * @requires ui.router.state.$state
	 * @requires $compile
	 * @requires $controller
	 * @requires $injector
	 * @requires ui.router.state.$uiViewScroll
	 * @requires $document
	 *
	 * @restrict ECA
	 *
	 * @description
	 * The ui-view directive tells $state where to place your templates.
	 *
	 * @param {string=} name A view name. The name should be unique amongst the other views in the
	 * same state. You can have views of the same name that live in different states.
	 *
	 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
	 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
	 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
	 * scroll ui-view elements into view when they are populated during a state activation.
	 *
	 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
	 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
	 *
	 * @param {string=} onload Expression to evaluate whenever the view updates.
	 *
	 * @example
	 * A view can be unnamed or named.
	 * <pre>
	 * <!-- Unnamed -->
	 * <div ui-view></div>
	 *
	 * <!-- Named -->
	 * <div ui-view="viewName"></div>
	 * </pre>
	 *
	 * You can only have one unnamed view within any template (or root html). If you are only using a
	 * single view and it is unnamed then you can populate it like so:
	 * <pre>
	 * <div ui-view></div>
	 * $stateProvider.state("home", {
	 *   template: "<h1>HELLO!</h1>"
	 * })
	 * </pre>
	 *
	 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#methods_state `views`}
	 * config property, by name, in this case an empty name:
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 *
	 * But typically you'll only use the views property if you name your view or have more than one view
	 * in the same template. There's not really a compelling reason to name a view if its the only one,
	 * but you could if you wanted, like so:
	 * <pre>
	 * <div ui-view="main"></div>
	 * </pre>
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "main": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 *
	 * Really though, you'll use views to set up multiple views:
	 * <pre>
	 * <div ui-view></div>
	 * <div ui-view="chart"></div>
	 * <div ui-view="data"></div>
	 * </pre>
	 *
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     },
	 *     "chart": {
	 *       template: "<chart_thing/>"
	 *     },
	 *     "data": {
	 *       template: "<data_thing/>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 *
	 * Examples for `autoscroll`:
	 *
	 * <pre>
	 * <!-- If autoscroll present with no expression,
	 *      then scroll ui-view into view -->
	 * <ui-view autoscroll/>
	 *
	 * <!-- If autoscroll present with valid expression,
	 *      then scroll ui-view into view if expression evaluates to true -->
	 * <ui-view autoscroll='true'/>
	 * <ui-view autoscroll='false'/>
	 * <ui-view autoscroll='scopeVariable'/>
	 * </pre>
	 *
	 * Resolve data:
	 *
	 * The resolved data from the state's `resolve` block is placed on the scope as `$resolve` (this
	 * can be customized using [[ViewDeclaration.resolveAs]]).  This can be then accessed from the template.
	 *
	 * Note that when `controllerAs` is being used, `$resolve` is set on the controller instance *after* the
	 * controller is instantiated.  The `$onInit()` hook can be used to perform initialization code which
	 * depends on `$resolve` data.
	 *
	 * Example usage of $resolve in a view template
	 * <pre>
	 * $stateProvider.state('home', {
	 *   template: '<my-component user="$resolve.user"></my-component>',
	 *   resolve: {
	 *     user: function(UserService) { return UserService.fetchUser(); }
	 *   }
	 * });
	 * </pre>
	 */
	$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate', '$q'];
	function $ViewDirective(   $state,   $injector,   $uiViewScroll,   $interpolate,   $q) {

	  function getService() {
	    return ($injector.has) ? function(service) {
	      return $injector.has(service) ? $injector.get(service) : null;
	    } : function(service) {
	      try {
	        return $injector.get(service);
	      } catch (e) {
	        return null;
	      }
	    };
	  }

	  var service = getService(),
	      $animator = service('$animator'),
	      $animate = service('$animate');

	  // Returns a set of DOM manipulation functions based on which Angular version
	  // it should use
	  function getRenderer(attrs, scope) {
	    var statics = function() {
	      return {
	        enter: function (element, target, cb) { target.after(element); cb(); },
	        leave: function (element, cb) { element.remove(); cb(); }
	      };
	    };

	    if ($animate) {
	      return {
	        enter: function(element, target, cb) {
	          if (angular.version.minor > 2) {
	            $animate.enter(element, null, target).then(cb);
	          } else {
	            $animate.enter(element, null, target, cb);
	          }
	        },
	        leave: function(element, cb) {
	          if (angular.version.minor > 2) {
	            $animate.leave(element).then(cb);
	          } else {
	            $animate.leave(element, cb);
	          }
	        }
	      };
	    }

	    if ($animator) {
	      var animate = $animator && $animator(scope, attrs);

	      return {
	        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
	        leave: function(element, cb) { animate.leave(element); cb(); }
	      };
	    }

	    return statics();
	  }

	  var directive = {
	    restrict: 'ECA',
	    terminal: true,
	    priority: 400,
	    transclude: 'element',
	    compile: function (tElement, tAttrs, $transclude) {
	      return function (scope, $element, attrs) {
	        var previousEl, currentEl, currentScope, latestLocals,
	            onloadExp     = attrs.onload || '',
	            autoScrollExp = attrs.autoscroll,
	            renderer      = getRenderer(attrs, scope),
	            inherited     = $element.inheritedData('$uiView');

	        scope.$on('$stateChangeSuccess', function() {
	          updateView(false);
	        });

	        updateView(true);

	        function cleanupLastView() {
	          if (previousEl) {
	            previousEl.remove();
	            previousEl = null;
	          }

	          if (currentScope) {
	            currentScope.$destroy();
	            currentScope = null;
	          }

	          if (currentEl) {
	            var $uiViewData = currentEl.data('$uiViewAnim');
	            renderer.leave(currentEl, function() {
	              $uiViewData.$$animLeave.resolve();
	              previousEl = null;
	            });

	            previousEl = currentEl;
	            currentEl = null;
	          }
	        }

	        function updateView(firstTime) {
	          var newScope,
	              name            = getUiViewName(scope, attrs, $element, $interpolate),
	              previousLocals  = name && $state.$current && $state.$current.locals[name];

	          if (!firstTime && previousLocals === latestLocals) return; // nothing to do
	          newScope = scope.$new();
	          latestLocals = $state.$current.locals[name];

	          /**
	           * @ngdoc event
	           * @name ui.router.state.directive:ui-view#$viewContentLoading
	           * @eventOf ui.router.state.directive:ui-view
	           * @eventType emits on ui-view directive scope
	           * @description
	           *
	           * Fired once the view **begins loading**, *before* the DOM is rendered.
	           *
	           * @param {Object} event Event object.
	           * @param {string} viewName Name of the view.
	           */
	          newScope.$emit('$viewContentLoading', name);

	          var clone = $transclude(newScope, function(clone) {
	            var animEnter = $q.defer(), animLeave = $q.defer();
	            var viewAnimData = {
	              $animEnter: animEnter.promise,
	              $animLeave: animLeave.promise,
	              $$animLeave: animLeave
	            };

	            clone.data('$uiViewAnim', viewAnimData);
	            renderer.enter(clone, $element, function onUiViewEnter() {
	              animEnter.resolve();
	              if(currentScope) {
	                currentScope.$emit('$viewContentAnimationEnded');
	              }

	              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
	                $uiViewScroll(clone);
	              }
	            });
	            cleanupLastView();
	          });

	          currentEl = clone;
	          currentScope = newScope;
	          /**
	           * @ngdoc event
	           * @name ui.router.state.directive:ui-view#$viewContentLoaded
	           * @eventOf ui.router.state.directive:ui-view
	           * @eventType emits on ui-view directive scope
	           * @description
	           * Fired once the view is **loaded**, *after* the DOM is rendered.
	           *
	           * @param {Object} event Event object.
	           * @param {string} viewName Name of the view.
	           */
	          currentScope.$emit('$viewContentLoaded', name);
	          currentScope.$eval(onloadExp);
	        }
	      };
	    }
	  };

	  return directive;
	}

	$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
	function $ViewDirectiveFill (  $compile,   $controller,   $state,   $interpolate) {
	  return {
	    restrict: 'ECA',
	    priority: -400,
	    compile: function (tElement) {
	      var initial = tElement.html();
	      if (tElement.empty) {
	        tElement.empty();
	      } else {
	        // ng 1.0.0 doesn't have empty(), which cleans up data and handlers
	        tElement[0].innerHTML = null;
	      }

	      return function (scope, $element, attrs) {
	        var current = $state.$current,
	            name = getUiViewName(scope, attrs, $element, $interpolate),
	            locals  = current && current.locals[name];

	        if (! locals) {
	          $element.html(initial);
	          $compile($element.contents())(scope);
	          return;
	        }

	        $element.data('$uiView', { name: name, state: locals.$$state });
	        $element.html(locals.$template ? locals.$template : initial);

	        var resolveData = angular.extend({}, locals);
	        scope[locals.$$resolveAs] = resolveData;

	        var link = $compile($element.contents());

	        if (locals.$$controller) {
	          locals.$scope = scope;
	          locals.$element = $element;
	          var controller = $controller(locals.$$controller, locals);
	          if (locals.$$controllerAs) {
	            scope[locals.$$controllerAs] = controller;
	            scope[locals.$$controllerAs][locals.$$resolveAs] = resolveData;
	          }
	          if (isFunction(controller.$onInit)) controller.$onInit();
	          $element.data('$ngControllerController', controller);
	          $element.children().data('$ngControllerController', controller);
	        }

	        link(scope);
	      };
	    }
	  };
	}

	/**
	 * Shared ui-view code for both directives:
	 * Given scope, element, and its attributes, return the view's name
	 */
	function getUiViewName(scope, attrs, element, $interpolate) {
	  var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
	  var uiViewCreatedBy = element.inheritedData('$uiView');
	  return name.indexOf('@') >= 0 ?  name :  (name + '@' + (uiViewCreatedBy ? uiViewCreatedBy.state.name : ''));
	}

	angular.module('ui.router.state').directive('uiView', $ViewDirective);
	angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

	function parseStateRef(ref, current) {
	  var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
	  if (preparsed) ref = current + '(' + preparsed[1] + ')';
	  parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
	  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
	  return { state: parsed[1], paramExpr: parsed[3] || null };
	}

	function stateContext(el) {
	  var stateData = el.parent().inheritedData('$uiView');

	  if (stateData && stateData.state && stateData.state.name) {
	    return stateData.state;
	  }
	}

	function getTypeInfo(el) {
	  // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
	  var isSvg = Object.prototype.toString.call(el.prop('href')) === '[object SVGAnimatedString]';
	  var isForm = el[0].nodeName === "FORM";

	  return {
	    attr: isForm ? "action" : (isSvg ? 'xlink:href' : 'href'),
	    isAnchor: el.prop("tagName").toUpperCase() === "A",
	    clickable: !isForm
	  };
	}

	function clickHook(el, $state, $timeout, type, current) {
	  return function(e) {
	    var button = e.which || e.button, target = current();

	    if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || el.attr('target'))) {
	      // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
	      var transition = $timeout(function() {
	        $state.go(target.state, target.params, target.options);
	      });
	      e.preventDefault();

	      // if the state has no URL, ignore one preventDefault from the <a> directive.
	      var ignorePreventDefaultCount = type.isAnchor && !target.href ? 1: 0;

	      e.preventDefault = function() {
	        if (ignorePreventDefaultCount-- <= 0) $timeout.cancel(transition);
	      };
	    }
	  };
	}

	function defaultOpts(el, $state) {
	  return { relative: stateContext(el) || $state.$current, inherit: true };
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref
	 *
	 * @requires ui.router.state.$state
	 * @requires $timeout
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated
	 * URL, the directive will automatically generate & update the `href` attribute via
	 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking
	 * the link will trigger a state transition with optional parameters.
	 *
	 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be
	 * handled natively by the browser.
	 *
	 * You can also use relative state paths within ui-sref, just like the relative
	 * paths passed to `$state.go()`. You just need to be aware that the path is relative
	 * to the state that the link lives in, in other words the state that loaded the
	 * template containing the link.
	 *
	 * You can specify options to pass to {@link ui.router.state.$state#methods_go $state.go()}
	 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
	 * and `reload`.
	 *
	 * @example
	 * Here's an example of how you'd use ui-sref and how it would compile. If you have the
	 * following template:
	 * <pre>
	 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
	 *
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
	 *     </li>
	 * </ul>
	 * </pre>
	 *
	 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
	 * <pre>
	 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
	 *
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
	 *     </li>
	 * </ul>
	 *
	 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
	 * </pre>
	 *
	 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#methods_go $state.go()}
	 */
	$StateRefDirective.$inject = ['$state', '$timeout'];
	function $StateRefDirective($state, $timeout) {
	  return {
	    restrict: 'A',
	    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	    link: function(scope, element, attrs, uiSrefActive) {
	      var ref    = parseStateRef(attrs.uiSref, $state.current.name);
	      var def    = { state: ref.state, href: null, params: null };
	      var type   = getTypeInfo(element);
	      var active = uiSrefActive[1] || uiSrefActive[0];
	      var unlinkInfoFn = null;
	      var hookFn;

	      def.options = extend(defaultOpts(element, $state), attrs.uiSrefOpts ? scope.$eval(attrs.uiSrefOpts) : {});

	      var update = function(val) {
	        if (val) def.params = angular.copy(val);
	        def.href = $state.href(ref.state, def.params, def.options);

	        if (unlinkInfoFn) unlinkInfoFn();
	        if (active) unlinkInfoFn = active.$$addStateInfo(ref.state, def.params);
	        if (def.href !== null) attrs.$set(type.attr, def.href);
	      };

	      if (ref.paramExpr) {
	        scope.$watch(ref.paramExpr, function(val) { if (val !== def.params) update(val); }, true);
	        def.params = angular.copy(scope.$eval(ref.paramExpr));
	      }
	      update();

	      if (!type.clickable) return;
	      hookFn = clickHook(element, $state, $timeout, type, function() { return def; });
	      element[element.on ? 'on' : 'bind']("click", hookFn);
	      scope.$on('$destroy', function() {
	        element[element.off ? 'off' : 'unbind']("click", hookFn);
	      });
	    }
	  };
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-state
	 *
	 * @requires ui.router.state.uiSref
	 *
	 * @restrict A
	 *
	 * @description
	 * Much like ui-sref, but will accept named $scope properties to evaluate for a state definition,
	 * params and override options.
	 *
	 * @param {string} ui-state 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-state-params params to pass to {@link ui.router.state.$state#methods_href $state.href()}
	 * @param {Object} ui-state-opts options to pass to {@link ui.router.state.$state#methods_go $state.go()}
	 */
	$StateRefDynamicDirective.$inject = ['$state', '$timeout'];
	function $StateRefDynamicDirective($state, $timeout) {
	  return {
	    restrict: 'A',
	    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	    link: function(scope, element, attrs, uiSrefActive) {
	      var type   = getTypeInfo(element);
	      var active = uiSrefActive[1] || uiSrefActive[0];
	      var group  = [attrs.uiState, attrs.uiStateParams || null, attrs.uiStateOpts || null];
	      var watch  = '[' + group.map(function(val) { return val || 'null'; }).join(', ') + ']';
	      var def    = { state: null, params: null, options: null, href: null };
	      var unlinkInfoFn = null;
	      var hookFn;

	      function runStateRefLink (group) {
	        def.state = group[0]; def.params = group[1]; def.options = group[2];
	        def.href = $state.href(def.state, def.params, def.options);

	        if (unlinkInfoFn) unlinkInfoFn();
	        if (active) unlinkInfoFn = active.$$addStateInfo(def.state, def.params);
	        if (def.href) attrs.$set(type.attr, def.href);
	      }

	      scope.$watch(watch, runStateRefLink, true);
	      runStateRefLink(scope.$eval(watch));

	      if (!type.clickable) return;
	      hookFn = clickHook(element, $state, $timeout, type, function() { return def; });
	      element[element.on ? 'on' : 'bind']("click", hookFn);
	      scope.$on('$destroy', function() {
	        element[element.off ? 'off' : 'unbind']("click", hookFn);
	      });
	    }
	  };
	}


	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive working alongside ui-sref to add classes to an element when the
	 * related ui-sref directive's state is active, and removing them when it is inactive.
	 * The primary use-case is to simplify the special appearance of navigation menus
	 * relying on `ui-sref`, by having the "active" state's menu button appear different,
	 * distinguishing it from the inactive menu items.
	 *
	 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
	 * ui-sref-active found at the same level or above the ui-sref will be used.
	 *
	 * Will activate when the ui-sref's target state or any child state is active. If you
	 * need to activate only when the ui-sref target state is active and *not* any of
	 * it's children, then you will use
	 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
	 *
	 * @example
	 * Given the following template:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item">
	 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 *
	 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
	 * the resulting HTML will appear as (note the 'active' class):
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item active">
	 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 * The class name is interpolated **once** during the directives link time (any further changes to the
	 * interpolated value are ignored).
	 *
	 * Multiple classes may be specified in a space-separated format:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active='class1 class2 class3'>
	 *     <a ui-sref="app.user">link</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 * It is also possible to pass ui-sref-active an expression that evaluates
	 * to an object hash, whose keys represent active class names and whose
	 * values represent the respective state names/globs.
	 * ui-sref-active will match if the current active state **includes** any of
	 * the specified state names/globs, even the abstract ones.
	 *
	 * @Example
	 * Given the following template, with "admin" being an abstract state:
	 * <pre>
	 * <div ui-sref-active="{'active': 'admin.*'}">
	 *   <a ui-sref-active="active" ui-sref="admin.roles">Roles</a>
	 * </div>
	 * </pre>
	 *
	 * When the current state is "admin.roles" the "active" class will be applied
	 * to both the <div> and <a> elements. It is important to note that the state
	 * names/globs passed to ui-sref-active shadow the state provided by ui-sref.
	 */

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active-eq
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
	 * when the exact target state used in the `ui-sref` is active; no child states.
	 *
	 */
	$StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
	function $StateRefActiveDirective($state, $stateParams, $interpolate) {
	  return  {
	    restrict: "A",
	    controller: ['$scope', '$element', '$attrs', '$timeout', function ($scope, $element, $attrs, $timeout) {
	      var states = [], activeClasses = {}, activeEqClass, uiSrefActive;

	      // There probably isn't much point in $observing this
	      // uiSrefActive and uiSrefActiveEq share the same directive object with some
	      // slight difference in logic routing
	      activeEqClass = $interpolate($attrs.uiSrefActiveEq || '', false)($scope);

	      try {
	        uiSrefActive = $scope.$eval($attrs.uiSrefActive);
	      } catch (e) {
	        // Do nothing. uiSrefActive is not a valid expression.
	        // Fall back to using $interpolate below
	      }
	      uiSrefActive = uiSrefActive || $interpolate($attrs.uiSrefActive || '', false)($scope);
	      if (isObject(uiSrefActive)) {
	        forEach(uiSrefActive, function(stateOrName, activeClass) {
	          if (isString(stateOrName)) {
	            var ref = parseStateRef(stateOrName, $state.current.name);
	            addState(ref.state, $scope.$eval(ref.paramExpr), activeClass);
	          }
	        });
	      }

	      // Allow uiSref to communicate with uiSrefActive[Equals]
	      this.$$addStateInfo = function (newState, newParams) {
	        // we already got an explicit state provided by ui-sref-active, so we
	        // shadow the one that comes from ui-sref
	        if (isObject(uiSrefActive) && states.length > 0) {
	          return;
	        }
	        var deregister = addState(newState, newParams, uiSrefActive);
	        update();
	        return deregister;
	      };

	      $scope.$on('$stateChangeSuccess', update);

	      function addState(stateName, stateParams, activeClass) {
	        var state = $state.get(stateName, stateContext($element));
	        var stateHash = createStateHash(stateName, stateParams);

	        var stateInfo = {
	          state: state || { name: stateName },
	          params: stateParams,
	          hash: stateHash
	        };

	        states.push(stateInfo);
	        activeClasses[stateHash] = activeClass;

	        return function removeState() {
	          var idx = states.indexOf(stateInfo);
	          if (idx !== -1) states.splice(idx, 1);
	        };
	      }

	      /**
	       * @param {string} state
	       * @param {Object|string} [params]
	       * @return {string}
	       */
	      function createStateHash(state, params) {
	        if (!isString(state)) {
	          throw new Error('state should be a string');
	        }
	        if (isObject(params)) {
	          return state + toJson(params);
	        }
	        params = $scope.$eval(params);
	        if (isObject(params)) {
	          return state + toJson(params);
	        }
	        return state;
	      }

	      // Update route state
	      function update() {
	        for (var i = 0; i < states.length; i++) {
	          if (anyMatch(states[i].state, states[i].params)) {
	            addClass($element, activeClasses[states[i].hash]);
	          } else {
	            removeClass($element, activeClasses[states[i].hash]);
	          }

	          if (exactMatch(states[i].state, states[i].params)) {
	            addClass($element, activeEqClass);
	          } else {
	            removeClass($element, activeEqClass);
	          }
	        }
	      }

	      function addClass(el, className) { $timeout(function () { el.addClass(className); }); }
	      function removeClass(el, className) { el.removeClass(className); }
	      function anyMatch(state, params) { return $state.includes(state.name, params); }
	      function exactMatch(state, params) { return $state.is(state.name, params); }

	      update();
	    }]
	  };
	}

	angular.module('ui.router.state')
	  .directive('uiSref', $StateRefDirective)
	  .directive('uiSrefActive', $StateRefActiveDirective)
	  .directive('uiSrefActiveEq', $StateRefActiveDirective)
	  .directive('uiState', $StateRefDynamicDirective);

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:isState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
	 */
	$IsStateFilter.$inject = ['$state'];
	function $IsStateFilter($state) {
	  var isFilter = function (state, params) {
	    return $state.is(state, params);
	  };
	  isFilter.$stateful = true;
	  return isFilter;
	}

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:includedByState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
	 */
	$IncludedByStateFilter.$inject = ['$state'];
	function $IncludedByStateFilter($state) {
	  var includesFilter = function (state, params, options) {
	    return $state.includes(state, params, options);
	  };
	  includesFilter.$stateful = true;
	  return  includesFilter;
	}

	angular.module('ui.router.state')
	  .filter('isState', $IsStateFilter)
	  .filter('includedByState', $IncludedByStateFilter);
	})(window, window.angular);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var m;

	m = angular.module("lens.atoms", ["lens.atoms.block_grid", "lens.atoms.borders", "lens.atoms.buttons", "lens.atoms.colors", "lens.atoms.flexbox", "lens.atoms.forms", "lens.atoms.grid", "lens.atoms.icons", "lens.atoms.layout", "lens.atoms.responsive", "lens.atoms.tables", "lens.atoms.typography"]);

	__webpack_require__(5);

	__webpack_require__(6);

	__webpack_require__(7);

	__webpack_require__(8);

	__webpack_require__(12);

	__webpack_require__(13);

	__webpack_require__(14);

	__webpack_require__(15);

	__webpack_require__(16);

	__webpack_require__(17);

	__webpack_require__(18);

	__webpack_require__(19);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.atoms.block_grid", []);

	m.controller("BlockGridController", function($scope) {
	  return this;
	});

	m.directive("blockGrid", function() {
	  return {
	    controller: "BlockGridController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section id=\"grid\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">The Block Grid</h2>\n    <p class=\"m-b-1-xs\">The block grid is used when you need a grid of an unknown number of items. The recommended way to build block grids is with <code>ul</code> elements, but the classes work just fine on any element, like a <code>div</code>. Use your best judgement to keep the markup as semantic as possible.</p>\n    <p class=\"m-b-1-xs\">To build a block grid, start with a <code>&lt;ul class=\"block-grid block-n-xs\"&gt;</code>, where n is a number from 1-6. These divisions can be changed across breakpoints by applying one or more of our <a href=\"responsive.html\">grid suffix classes</a>. Then, inside that list, create your items with <code>&lt;li class=\"block-grid__item\"&gt;</code>. If you want the same grid division across all breakpoints, use the default <code>.block-n-xs</code> class. <em>Resize your browser to see the block grid suffixes in effect.</em></p>\n    <p class=\"m-b-3-xs\"><strong>Note:</strong> Do not put any style utility classes on the block grid containers, nest them inside the list items instead.</p>\n\n    <h3 id=\"Default\" class=\"guide-content-h3 m-b-1-xs\">No Gutters (Default)</h3>\n    <p class=\"m-b-3-xs\">By default, the block grid comes with no gutters.</p>\n    <ul class=\"block-grid block-4-xs block-5-md block-6-xl\">\n      <li class=\"block-grid__item\">\n        <div class=\"border-dark-xs round text-center-xs p-tb-05-xs\">1</div>\n      </li>\n      <li class=\"block-grid__item\">\n        <div class=\"border-dark-xs round text-center-xs p-tb-05-xs\">2</div>\n      </li>\n      <li class=\"block-grid__item\">\n        <div class=\"border-dark-xs round text-center-xs p-tb-05-xs\">3</div>\n      </li>\n      <li class=\"block-grid__item\">\n        <div class=\"border-dark-xs round text-center-xs p-tb-05-xs\">4</div>\n      </li>\n      <li class=\"block-grid__item\">\n        <div class=\"border-dark-xs round text-center-xs p-tb-05-xs\">5</div>\n      </li>\n      <li class=\"block-grid__item\">\n        <div class=\"border-dark-xs round text-center-xs p-tb-05-xs\">6</div>\n      </li>\n    </ul>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;ul class=\"block-grid block-4-xs block-5-md block-6-xl\"&gt;\n  &lt;li class=\"block-grid__item\"&gt;\n    &lt;div class=\"border-dark-xs round text-center-xs p-tb-05-xs\"&gt;1&lt;/div&gt;\n  &lt;/li&gt;\n  &lt;li class=\"block-grid__item\"&gt;\n    &lt;div class=\"border-dark-xs round text-center-xs p-tb-05-xs\"&gt;2&lt;/div&gt;\n  &lt;/li&gt;\n  &lt;li class=\"block-grid__item\"&gt;\n    &lt;div class=\"border-dark-xs round text-center-xs p-tb-05-xs\"&gt;3&lt;/div&gt;\n  &lt;/li&gt;\n  &lt;li class=\"block-grid__item\"&gt;\n    &lt;div class=\"border-dark-xs round text-center-xs p-tb-05-xs\"&gt;4&lt;/div&gt;\n  &lt;/li&gt;\n  &lt;li class=\"block-grid__item\"&gt;\n    &lt;div class=\"border-dark-xs round text-center-xs p-tb-05-xs\"&gt;5&lt;/div&gt;\n  &lt;/li&gt;\n  &lt;li class=\"block-grid__item\"&gt;\n    &lt;div class=\"border-dark-xs round text-center-xs p-tb-05-xs\"&gt;6&lt;/div&gt;\n  &lt;/li&gt;\n&lt;/ul&gt;</code></pre>\n    </div>\n\n    <h3 id=\"Gutters\" class=\"guide-content-h3 m-b-1-xs\">Auto Gutters</h3>\n    <p class=\"m-b-3-xs\">To add automatic gutters between items in the block grid, apply the class <code>.block-grid-gutters</code> alongside your <code>.block-grid</code> class.</p>\n    <ul class=\"block-grid block-2-xs block-3-lg block-6-xl block-grid-gutters\">\n      <li class=\"block-grid__item\">\n        <div class=\"border-dark-xs round text-center-xs p-tb-05-xs\">1</div>\n      </li>\n      <li class=\"block-grid__item\">\n        <div class=\"border-dark-xs round text-center-xs p-tb-05-xs\">2</div>\n      </li>\n      <li class=\"block-grid__item\">\n        <div class=\"border-dark-xs round text-center-xs p-tb-05-xs\">3</div>\n      </li>\n      <li class=\"block-grid__item\">\n        <div class=\"border-dark-xs round text-center-xs p-tb-05-xs\">4</div>\n      </li>\n      <li class=\"block-grid__item\">\n        <div class=\"border-dark-xs round text-center-xs p-tb-05-xs\">5</div>\n      </li>\n      <li class=\"block-grid__item\">\n        <div class=\"border-dark-xs round text-center-xs p-tb-05-xs\">6</div>\n      </li>\n    </ul>\n    <div class=\"guide-code\">\n  <pre><code class=\"language-html\">&lt;ul class=\"block-grid block-2-xs block-3-lg block-6-xl block-grid-gutters\"&gt;\n  &lt;li class=\"block-grid__item\"&gt;\n    &lt;div class=\"border-dark-xs round text-center-xs p-tb-05-xs\"&gt;1&lt;/div&gt;\n  &lt;/li&gt;\n  &lt;li class=\"block-grid__item\"&gt;\n    &lt;div class=\"border-dark-xs round text-center-xs p-tb-05-xs\"&gt;2&lt;/div&gt;\n  &lt;/li&gt;\n  &lt;li class=\"block-grid__item\"&gt;\n    &lt;div class=\"border-dark-xs round text-center-xs p-tb-05-xs\"&gt;3&lt;/div&gt;\n  &lt;/li&gt;\n  &lt;li class=\"block-grid__item\"&gt;\n    &lt;div class=\"border-dark-xs round text-center-xs p-tb-05-xs\"&gt;4&lt;/div&gt;\n  &lt;/li&gt;\n  &lt;li class=\"block-grid__item\"&gt;\n    &lt;div class=\"border-dark-xs round text-center-xs p-tb-05-xs\"&gt;5&lt;/div&gt;\n  &lt;/li&gt;\n  &lt;li class=\"block-grid__item\"&gt;\n    &lt;div class=\"border-dark-xs round text-center-xs p-tb-05-xs\"&gt;6&lt;/div&gt;\n  &lt;/li&gt;\n&lt;/ul&gt;</code></pre>\n    </div>\n  </section>\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>";


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.atoms.borders", []);

	m.controller("BordersController", function($scope) {
	  return this;
	});

	m.directive("borders", function() {
	  return {
	    controller: "BordersController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section id=\"borders\">\n    <h2 id=\"Border\" class=\"guide-content-subtitle m-b-1-xs\">Border</h2>\n    <p class=\"m-b-1-xs\">To adjust borders on elements, use the following classes: <code>.border-xs</code>, <code>.border-t-xs</code>, <code>.border-m-xs</code>, <code>.border-l-xs</code>, <code>.border-r-xs</code>. Use <code>dark</code>, <code>light</code> modifiers to change the color of the border.</p>\n    <div class=\"col\">\n      <div class=\"col col-40-sm\">\n        <p><strong>Sides</strong></p>\n        <ul class=\"list-unstyled m-b-3-xs\">\n          <li><code>t</code> = top</li>\n          <li><code>b</code> = bottom</li>\n          <li><code>l</code> = left</li>\n          <li><code>r</code> = right</li>\n        </ul>\n      </div>\n    </div>\n\n    <h4 class=\"guide-content-h4 m-b-1-xs\">Normal</h4>\n    <div class=\"border-xs inline-xs p-05-xs m-r-1-xs\">.border-xs</div>\n    <div class=\"border-t-xs inline-xs p-05-xs m-r-1-xs\">.border-t-xs</div>\n    <div class=\"border-b-xs inline-xs p-05-xs m-r-1-xs\">.border-b-xs</div>\n    <div class=\"border-l-xs inline-xs p-05-xs m-r-1-xs\">.border-l-xs</div>\n    <div class=\"border-r-xs inline-xs p-05-xs\">.border-r-xs</div>\n\n    <h4 class=\"guide-content-h4 m-b-1-xs m-t-3-xs\">Dark</h4>\n    <div class=\"border-dark-xs inline-xs p-05-xs m-r-1-xs\">.border-dark-xs</div>\n    <div class=\"border-t-dark-xs inline-xs p-05-xs m-r-1-xs\">.border-t-dark-xs</div>\n    <div class=\"border-b-dark-xs inline-xs p-05-xs m-r-1-xs\">.border-b-dark-xs</div>\n    <div class=\"border-l-dark-xs inline-xs p-05-xs m-r-1-xs\">.border-l-dark-xs</div>\n    <div class=\"border-r-dark-xs inline-xs p-05-xs\">.border-r-dark-xs</div>\n\n    <h4 class=\"guide-content-h4 m-b-1-xs m-t-3-xs\">Light</h4>\n    <div class=\"border-light-xs inline-xs p-05-xs m-r-1-xs\">.border-light-xs</div>\n    <div class=\"border-t-light-xs inline-xs p-05-xs m-r-1-xs\">.border-t-light-xs</div>\n    <div class=\"border-b-light-xs inline-xs p-05-xs m-r-1-xs\">.border-b-light-xs</div>\n    <div class=\"border-l-light-xs inline-xs p-05-xs m-r-1-xs\">.border-l-light-xs</div>\n    <div class=\"border-r-light-xs inline-xs p-05-xs\">.border-r-light-xs</div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"border-xs inline-xs p-05-xs m-r-1-xs\"&gt;.border-xs&lt;/div&gt;\n  &lt;div class=\"border-t-xs inline-xs p-05-xs m-r-1-xs\"&gt;.border-t-xs&lt;/div&gt;\n  &lt;div class=\"border-b-xs inline-xs p-05-xs m-r-1-xs\"&gt;.border-b-xs&lt;/div&gt;\n  &lt;div class=\"border-l-xs inline-xs p-05-xs m-r-1-xs\"&gt;.border-l-xs&lt;/div&gt;\n  &lt;div class=\"border-r-xs inline-xs p-05-xs m-r-1-xs\"&gt;.border-r-xs&lt;/div&gt;</code></pre>\n    </div>\n\n    <h2 id=\"Removal\" class=\"guide-content-subtitle m-b-1-xs\">Removing Borders</h2>\n    <p class=\"m-b-3-xs\">To get a little more control over borders at different breakpoints, we've included a <code>.border-none-xs</code> utility classes. These can be applied to all borders or to specific sides.</p>\n    <div class=\"border-dark-xs border-none-xs inline-xs p-05-xs m-r-1-xs\">.border-none-xs</div>\n    <div class=\"border-dark-xs border-none-t-xs inline-xs p-05-xs m-r-1-xs\">.border-none-t-xs</div>\n    <div class=\"border-dark-xs border-none-r-xs inline-xs p-05-xs m-r-1-xs\">.border-none-r-xs</div>\n    <div class=\"border-dark-xs border-none-b-xs inline-xs p-05-xs m-r-1-xs\">.border-none-b-xs</div>\n    <div class=\"border-dark-xs border-none-l-xs inline-xs p-05-xs\">.border-none-l-xs</div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"border-dark-xs border-none-xs inline-xs p-05-xs m-r-1-xs\"&gt;.border-none-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs border-none-t-xs inline-xs p-05-xs m-r-1-xs\"&gt;.border-t-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs border-none-r-xs inline-xs p-05-xs m-r-1-xs\"&gt;.border-r-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs border-none-b-xs inline-xs p-05-xs m-r-1-xs\"&gt;.border-b-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs border-none-l-xs inline-xs p-05-xs\"&gt;.border-l-xs&lt;/div&gt;</code></pre>\n    </div>\n\n    <h2 id=\"Rounded\" class=\"guide-content-subtitle m-b-1-xs\">Rounded Borders</h2>\n    <p class=\"m-b-3-xs\">Its never been easier to add border radius to different corners of an elements. Using <code>.round</code>, <code>.round-t</code>, <code>.round-b</code>, <code>.round-l</code>, <code>.round-r</code> will apply border radius to elements.</p>\n    <div class=\"border-dark-xs round inline-xs p-05-xs m-r-1-xs\">.round</div>\n    <div class=\"border-dark-xs round-t inline-xs p-05-xs m-r-1-xs\">.round-t</div>\n    <div class=\"border-dark-xs round-b inline-xs p-05-xs m-r-1-xs\">.round-b</div>\n    <div class=\"border-dark-xs round-l inline-xs p-05-xs m-r-1-xs\">.round-l</div>\n    <div class=\"border-dark-xs round-r inline-xs p-05-xs\">.round-r</div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"border-dark-xs round inline-xs p-05-xs m-r-1-xs\"&gt;.round&lt;/div&gt;\n  &lt;div class=\"border-dark-xs round-t inline-xs p-05-xs m-r-1-xs\"&gt;.round-t&lt;/div&gt;\n  &lt;div class=\"border-dark-xs round-b inline-xs p-05-xs m-r-1-xs\"&gt;.round-b&lt;/div&gt;\n  &lt;div class=\"border-dark-xs round-l inline-xs p-05-xs m-r-1-xs\"&gt;.round-l&lt;/div&gt;\n  &lt;div class=\"border-dark-xs round-r inline-xs p-05-xs\"&gt;.round-r&lt;/div&gt;</code></pre>\n    </div>\n\n    <h2 id=\"Circle\" class=\"guide-content-subtitle m-b-1-xs\">Circle</h2>\n    <p class=\"m-b-3-xs\">To turn an element into a circle, use the <code>.circle</code> class.</p>\n    <div class=\"border-dark-xs circle\" style=\"width: 100px; height: 100px;\"></div>\n    <div class=\"guide-code\">\n  <pre><code class=\"language-html\">&lt;div class=\"border-dark-xs circle\" style=\"width: 100px; height: 100px;\"&gt;&lt;/div&gt;</code></pre>\n    </div>\n  </section>\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>\n";


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.atoms.buttons", []);

	m.controller("ButtonsController", function($scope) {
	  return this;
	});

	m.directive("buttons", function() {
	  return {
	    controller: "ButtonsController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section id=\"Buttons\">\n\n    <h2 id=\"Default\" class=\"guide-content-subtitle m-b-1-xs\">Default</h2>\n    <p class=\"m-b-3-xs\">Use the class, <code>button</code> for this default style button. If you are using the <code>&lt;button&gt;</code> element, always specify a <code>type</code>. When using the <code>&lt;a&gt;</code> tag, include <code>role=\"button\"</code> for accessibility. Each button is available in multiple sizes, take note of examples for classes.</p>\n    <a class=\"m-b-05-xs button\" href>Normal</a>\n    <a class=\"m-b-05-xs button button--small-xs\" href>Small</a>\n    <a class=\"m-b-05-xs button button--xsmall-xs\" href>X-Small</a>\n    <a class=\"m-b-05-xs button button--large-xs\" href>Large</a>\n    <a class=\"m-b-05-xs button button--xlarge-xs\" href>X-Large</a>\n    <div class=\"guide-code m-b-4-xs\">\n      <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button\" href&gt;Normal&lt;/a&gt;</code></pre>\n      <span class=\"button--small\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--small-xs\" href&gt;Small&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--xsmall\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--xsmall-xs\" href&gt;X-Small&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--large\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--large-xs\" href&gt;Large&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--xlarge\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--xlarge-xs\" href&gt;X-Large&lt;/a&gt;</code></pre>\n      </span>\n    </div>\n\n\n\n    <h2 id=\"Primary\" class=\"guide-content-subtitle m-b-1-xs\">Primary</h2>\n    <p class=\"m-b-3-xs\">Primary buttons are used to indicate a <em>primary</em> action on the page. Use the class, <code>.button.button--primary</code>, to get a primary button on your page.</p>\n    <a class=\"m-b-05-xs button button--primary\" href>Normal</a>\n    <a class=\"m-b-05-xs button button--primary button--small-xs\" href>Small</a>\n    <a class=\"m-b-05-xs button button--primary button--xsmall-xs\" href>X-Small</a>\n    <a class=\"m-b-05-xs button button--primary button--large-xs\" href>Large</a>\n    <a class=\"m-b-05-xs button button--primary button--xlarge-xs\" href>X-Large</a>\n    <div class=\"guide-code m-b-4-xs\">\n      <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--primary\" href>Normal&lt;/a&gt;</code></pre>\n      <span class=\"button--small\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--primary button--small-xs\" href&gt;Small&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--xsmall\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--primary button--xsmall-xs\" href&gt;X-Small&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--large\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--primary button--large-xs\" href&gt;Large&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--xlarge\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--primary button--xlarge-xs\" href&gt;X-Large&lt;/a&gt;</code></pre>\n      </span>\n    </div>\n\n\n  <div class=\"guide-neutral-conditional\">\n    <h2 id=\"Neutral\" class=\"guide-content-subtitle m-b-1-xs\">Neutral</h2>\n    <p class=\"m-b-3-xs\">Neutral buttons are used for <em>neutral</em> buttons on the page, like for whitelabeling. To access these styles, use the class, <code>.button.button--neutral</code>.</p>\n    <a class=\"m-b-05-xs button button--neutral\" href>Normal</a>\n    <a class=\"m-b-05-xs button button--neutral button--small-xs\" href>Small</a>\n    <a class=\"m-b-05-xs button button--neutral button--xsmall-xs\" href>X-Small</a>\n    <a class=\"m-b-05-xs button button--neutral button--large-xs\" href>Large</a>\n    <a class=\"m-b-05-xs button button--neutral button--xlarge-xs\" href>X-Large</a>\n    <div class=\"guide-code m-b-4-xs\">\n      <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--neutral\" href&gt;Normal&lt;/a&gt;</code></pre>\n      <span class=\"button--small\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--neutral button--small-xs\" href&gt;Small&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--xsmall\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--neutral button--xsmall-xs\" href&gt;X-Small&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--large\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--neutral button--large-xs\" href&gt;Large&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--xlarge\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--neutral button--xlarge-xs\" href&gt;X-Large&lt;/a&gt;</code></pre>\n      </span>\n    </div>\n  </div>\n\n\n\n  <div class=\"guide-alert-conditional\">\n    <h2 id=\"Alert\" class=\"guide-content-subtitle m-b-1-xs\">Alert</h2>\n    <p class=\"m-b-3-xs\">Alert buttons are used to indicate a urgent or negative action on the page. To access these styles, use the class, <code>.button.button--alert</code>.</p>\n    <a class=\"m-b-05-xs button button--alert\" href>Normal</a>\n    <a class=\"m-b-05-xs button button--alert button--small-xs\" href>Small</a>\n    <a class=\"m-b-05-xs button button--alert button--xsmall-xs\" href>X-Small</a>\n    <a class=\"m-b-05-xs button button--alert button--large-xs\" href>Large</a>\n    <a class=\"m-b-05-xs button button--alert button--xlarge-xs\" href>X-Large</a>\n    <div class=\"guide-code m-b-4-xs\">\n      <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--alert\" href&gt;Normal&lt;/a&gt;</code></pre>\n      <span class=\"button--small\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--alert button--small-xs\" href&gt;Small&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--xsmall\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--alert button--xsmall-xs\" href&gt;X-Small&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--large\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--alert button--large-xs\" href&gt;Large&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--xlarge\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--alert button--xlarge-xs\" href&gt;X-Large&lt;/a&gt;</code></pre>\n      </span>\n    </div>\n  </div>\n\n\n  <div class=\"guide-inverse-conditional\">\n    <h2 id='Inverse' class=\"guide-content-subtitle m-b-1-xs\">Inverse</h2>\n    <p class=\"m-b-3-xs\">Inverse buttons are used when the background color a container is too dark for normal buttons to have enough contrast. Invert the style with the classes, <code>.button--inverse</code>. <code>.button--inverse-primary</code>. <code>.button--inverse-disabled</code>. <code>.button--inverse-primary-disabled</code>.</p>\n    <div class=\"bg-gray-7 p-2-xs p-b-05-xs\">\n    <a class=\"m-b-05-xs button button--inverse\" href>Inverse</a>\n    <a class=\"m-b-05-xs button button--inverse-primary\" href>Inverse Primary</a>\n    <a class=\"m-b-05-xs button button--inverse-disabled\" href>Inverse Disabled</a>\n    <a class=\"m-b-05-xs button button--inverse-primary-disabled\" href>Inverse Primary Disabled</a>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n      <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--inverse\" href&gt;Inverse&lt;/a&gt;\n&lt;a class=\"m-b-05-xs button button--inverse-primary\" href&gt;Inverse Primary&lt;/a&gt;\n&lt;a class=\"m-b-05-xs button button--inverse-disabled\" href&gt;Inverse Disabled&lt;/a&gt;\n&lt;a class=\"m-b-05-xs button button--inverse-primary-disabled\" href&gt;Inverse Primary Disabled&lt;/a&gt;</code></pre>\n    </div>\n  </div>\n\n\n  <div class=\"guide-disabled-conditional\">\n    <h2 id=\"Disabled\" class=\"guide-content-subtitle m-b-1-xs\">Disabled</h2>\n    <p class=\"m-b-3-xs\">Disabled buttons are used when the action on the page is blocked to the user. Get this button on a page by using the class, <code>.button.button--disabled-light</code>.</p>\n    <a class=\"m-b-05-xs button button--disabled button--disabled-light\" href>Normal</a>\n    <a class=\"m-b-05-xs button button--disabled button--disabled-light button--small-xs\" href>Small</a>\n    <a class=\"m-b-05-xs button button--disabled button--disabled-light button--xsmall-xs\" href>X-Small</a>\n    <a class=\"m-b-05-xs button button--disabled button--disabled-light button--large-xs\" href>Large</a>\n    <a class=\"m-b-05-xs button button--disabled button--disabled-light button--xlarge-xs\" href>X-Large</a>\n    <div class=\"guide-code m-b-3-xs\">\n      <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--disabled-light\" href&gt;Normal&lt;/a&gt;</code></pre>\n      <span class=\"button--small\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--disabled button--disabled-light button--small-xs\" href&gt;Small&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--xsmall\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--disabled button--disabled-light button--xsmall-xs\" href&gt;X-Small&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--large\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--disabled button--disabled-light button--large-xs\" href&gt;Large&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--xlarge\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--disabled button--disabled-light button--xlarge-xs\" href&gt;X-Large&lt;/a&gt;</code></pre>\n      </span>\n    </div>\n\n    <p class=\"m-b-3-xs\">Use the class, <code>.button.button--disabled-dark</code>, to get a disabled button that works well on a dark background.</p>\n    <a class=\"m-b-05-xs button button--disabled button--disabled-dark\" href>Normal</a>\n    <a class=\"m-b-05-xs button button--disabled button--disabled-dark button--small-xs\" href>Small</a>\n    <a class=\"m-b-05-xs button button--disabled button--disabled-dark button--xsmall-xs\" href>X-Small</a>\n    <a class=\"m-b-05-xs button button--disabled button--disabled-dark button--large-xs\" href>Large</a>\n    <a class=\"m-b-05-xs button button--disabled button--disabled-dark button--xlarge-xs\" href>X-Large</a>\n    <div class=\"guide-code m-b-4-xs\">\n      <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--disabled-dark\" href&gt;Normal&lt;/a&gt;</code></pre>\n      <span class=\"button--small\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--disabled button--disabled-dark button--small-xs\" href&gt;Small&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--xsmall\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--disabled button--disabled-dark button--xsmall-xs\" href&gt;X-Small&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--large\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--disabled button--disabled-dark button--large-xs\" href&gt;Large&lt;/a&gt;</code></pre>\n      </span>\n      <span class=\"button--xlarge\">\n        <pre><code class=\"language-html\">&lt;a class=\"m-b-05-xs button button--disabled button--disabled-dark button--xlarge-xs\" href&gt;X-Large&lt;/a&gt;</code></pre>\n      </span>\n    </div>\n  </div>\n\n\n  <div class=\"guide-split-button-conditional\">\n    <h2 id=\"Split\" class=\"guide-content-subtitle m-b-1-xs\">Split buttons</h2>\n    <p class=\"m-b-3-xs\">Split buttons are used when you need a button that contains two actions. To accomplish this, wrap your buttons in <code>&lt;div class=\"split-button\"&gt;</code>. Use <code>&lt;div class=\"split-button w-full\"&gt;</code> for your buttons to take up the full width of the container.</p>\n    <div class=\"split-button\">\n      <a class=\"m-b-05-xs button\" href ng-class=\"{active: active == 'left'}\" ng-click=\"active = 'left'\">Left</a>\n      <a class=\"m-b-05-xs button\" href ng-class=\"{active: active == 'middle'}\" ng-click=\"active = 'middle'\">Middle</a>\n      <a class=\"m-b-05-xs button\" href ng-class=\"{active: active == 'right'}\" ng-click=\"active = 'right'\">Right</a>\n    </div>\n    <div class=\"split-button\">\n      <a class=\"m-b-05-xs button button--small-xs\" href ng-class=\"{active: active == 'left'}\" ng-click=\"active = 'left'\">Left</a>\n      <a class=\"m-b-05-xs button button--small-xs\" href ng-class=\"{active: active == 'middle'}\" ng-click=\"active = 'middle'\">Middle</a>\n      <a class=\"m-b-05-xs button button--small-xs\" href ng-class=\"{active: active == 'right'}\" ng-click=\"active = 'right'\">Right</a>\n    </div>\n    <div class=\"split-button\">\n      <a class=\"m-b-05-xs button button--xsmall-xs\" href ng-class=\"{active: active == 'left'}\" ng-click=\"active = 'left'\">Left</a>\n      <a class=\"m-b-05-xs button button--xsmall-xs\" href ng-class=\"{active: active == 'middle'}\" ng-click=\"active = 'middle'\">Middle</a>\n      <a class=\"m-b-05-xs button button--xsmall-xs\" href ng-class=\"{active: active == 'right'}\" ng-click=\"active = 'right'\">Right</a>\n    </div>\n    <div>\n      <div class=\"split-button\">\n        <a class=\"m-b-05-xs button button--neutral\" href ng-class=\"{active: active == 'left'}\" ng-click=\"active = 'left'\">Left</a>\n        <a class=\"m-b-05-xs button button--neutral\" href ng-class=\"{active: active == 'middle'}\" ng-click=\"active = 'middle'\">Middle</a>\n        <a class=\"m-b-05-xs button button--neutral\" href ng-class=\"{active: active == 'right'}\" ng-click=\"active = 'right'\">Right</a>\n      </div>\n      <div class=\"split-button\">\n        <a class=\"m-b-05-xs button button--neutral button--small-xs\" href ng-class=\"{active: active == 'left'}\" ng-click=\"active = 'left'\">Left</a>\n        <a class=\"m-b-05-xs button button--neutral button--small-xs\" href ng-class=\"{active: active == 'middle'}\" ng-click=\"active = 'middle'\">Middle</a>\n        <a class=\"m-b-05-xs button button--neutral button--small-xs\" href ng-class=\"{active: active == 'right'}\" ng-click=\"active = 'right'\">Right</a>\n      </div>\n      <div class=\"split-button\">\n        <a class=\"m-b-05-xs button button--neutral button--xsmall-xs\" href ng-class=\"{active: active == 'left'}\" ng-click=\"active = 'left'\">Left</a>\n        <a class=\"m-b-05-xs button button--neutral button--xsmall-xs\" href ng-class=\"{active: active == 'middle'}\" ng-click=\"active = 'middle'\">Middle</a>\n        <a class=\"m-b-05-xs button button--neutral button--xsmall-xs\" href ng-class=\"{active: active == 'right'}\" ng-click=\"active = 'right'\">Right</a>\n      </div>\n    </div>\n    <div class=\"split-button w-full\">\n      <a class=\"m-b-05-xs button\" href ng-class=\"{active: active == 'left'}\" ng-click=\"active = 'left'\">Left</a>\n      <a class=\"m-b-05-xs button\" href ng-class=\"{active: active == 'middle'}\" ng-click=\"active = 'middle'\">Middle</a>\n      <a class=\"m-b-05-xs button\" href ng-class=\"{active: active == 'right'}\" ng-click=\"active = 'right'\">Right</a>\n    </div>\n      <div class=\"guide-code m-b-4-xs\">\n        <pre><code class=\"language-html\">&lt;div class=\"split-button\"&gt;\n  &lt;a class=\"m-b-05-xs button\" href&gt;Left&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button\" href&gt;Middle&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button\" href&gt;Right&lt;/a&gt;\n&lt;/div&gt;</code></pre>\n        <span class=\"button--small\">\n          <pre><code class=\"language-html\">\n&lt;div class=\"split-button\"&gt;\n  &lt;a class=\"m-b-05-xs button button--small-xs\" href&gt;Left&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button button--small-xs\" href&gt;Middle&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button button--small-xs\" href&gt;Right&lt;/a&gt;\n&lt;/div&gt;</code></pre>\n        </span>\n        <span class=\"button--xsmall\">\n          <pre><code class=\"language-html\">\n&lt;div class=\"split-button\"&gt;\n  &lt;a class=\"m-b-05-xs button button--xsmall-xs\" href&gt;Left&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button button--xsmall-xs\" href&gt;Middle&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button button--xsmall-xs\" href&gt;Right&lt;/a&gt;\n&lt;/div&gt;</code></pre>\n        </span>\n\n        <pre><code class=\"language-html\">&lt;div class=\"split-button\"&gt;\n  &lt;a class=\"m-b-05-xs button button--neutral\" href&gt;Left&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button button--neutral\" href&gt;Middle&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button button--neutral\" href&gt;Right&lt;/a&gt;\n&lt;/div&gt;</code></pre>\n\n        <span class=\"button--small\">\n          <pre><code class=\"language-html\">\n&lt;div class=\"split-button\"&gt;\n  &lt;a class=\"m-b-05-xs button button--neutral button--small-xs\" href&gt;Left&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button button--neutral button--small-xs\" href&gt;Middle&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button button--neutral button--small-xs\" href&gt;Right&lt;/a&gt;\n&lt;/div&gt;</code></pre>\n        </span>\n        <span class=\"button--xsmall\">\n          <pre><code class=\"language-html\">\n&lt;div class=\"split-button\"&gt;\n  &lt;a class=\"m-b-05-xs button button--neutral button--xsmall-xs\" href&gt;Left&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button button--neutral button--xsmall-xs\" href&gt;Middle&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button button--neutral button--xsmall-xs\" href&gt;Right&lt;/a&gt;\n&lt;/div&gt;</code></pre>\n        </span>\n\n        <pre><code class=\"language-html\">&lt;div class=\"split-button w-full\"&gt;\n  &lt;a class=\"m-b-05-xs button\" href&gt;Left&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button\" href&gt;Middle&lt;/a&gt;\n  &lt;a class=\"m-b-05-xs button\" href&gt;Right&lt;/a&gt;\n&lt;/div&gt;</code></pre>\n      </div>\n    </div>\n\n  </section>\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>\n\n";


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var brandColors, grayColors, m, template, uiColors;

	brandColors = __webpack_require__(9);

	uiColors = __webpack_require__(10);

	grayColors = __webpack_require__(11);

	m = angular.module("lens.atoms.colors", []);

	m.controller("ColorsController", function($scope) {
	  return this;
	});

	m.directive("colors", function() {
	  return {
	    controller: "ColorsController",
	    restrict: "E",
	    scope: {},
	    template: template,
	    link: function() {
	      brandColors('brandColorData', '#brandColorData', '.guide-colors-brand');
	      uiColors('uiColorData', '#uiColorData', '.guide-colors-ui');
	      return grayColors('grayColorData', '#grayColorData', '.guide-colors-gray');
	    }
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section id=\"brand-colors\">\n    <h2 id=\"Brand\" class=\"guide-content-subtitle m-b-1-xs\">Brand Colors</h2>\n    <p class=\"m-b-2-xs\">There are only 2 main brand colors for Looker. Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>\n    <table class=\"table-border-rows col-60-xl m-b-3-xs\">\n      <thead>\n        <th>Class</th>\n        <th>Property</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td><code>.brand-bg-[color]</code></td>\n          <td><code>background-color</code></td>\n        </tr>\n        <tr>\n          <td><code>.brand-color-[color]</code></td>\n          <td><code>color</code></td>\n        </tr>\n        <tr>\n          <td><code>.brand-border-[color]</code></td>\n          <td><code>border-color</code></td>\n        </tr>\n      </tbody>\n    </table>\n\n    <ul class=\"list-unstyled guide-color guide-colors-brand overflow-hidden-xs m-b-4-xs\"></ul><!-- List items built by JS -->\n  </section>\n\n\n  <section id=\"ui-colors\">\n    <h2 id=\"UI\" class=\"guide-content-subtitle m-b-1-xs\">UI Colors</h2>\n    <p class=\"m-b-2-xs\">Looker utilizes colors in various parts of our app UI. Most of our app is gray, so color is rather important. Each of the UI colors has utility classes you can use to apply the color to different parts of an element. Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>\n    <table class=\"table-border-rows col-60-xl m-b-3-xs\">\n      <thead>\n        <th>Class</th>\n        <th>Property</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td><code>.bg-[color]</code></td>\n          <td><code>background-color</code></td>\n        </tr>\n        <tr>\n          <td><code>.color-[color]</code></td>\n          <td><code>color</code></td>\n        </tr>\n        <tr>\n          <td><code>.border-[color]</code></td>\n          <td><code>border-color</code></td>\n        </tr>\n      </tbody>\n    </table>\n\n    <ul class=\"list-unstyled guide-color guide-colors-ui overflow-hidden-xs m-b-4-xs\"></ul><!-- List items built by JS -->\n  </section>\n\n\n\n  <section id=\"gray-colors\">\n    <h2 id=\"Gray\" class=\"guide-content-subtitle m-b-1-xs\">Gray Colors</h2>\n    <p class=\"m-b-2-xs\">Use the color class for any of these classes, just replace <code>[color]</code> with the name of the color you want.</p>\n    <table class=\"table-border-rows col-60-xl m-b-3-xs\">\n      <thead>\n        <th>Class</th>\n        <th>Property</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td><code>.bg-[color]</code></td>\n          <td><code>background-color</code></td>\n        </tr>\n        <tr>\n          <td><code>.color-[color]</code></td>\n          <td><code>color</code></td>\n        </tr>\n        <tr>\n          <td><code>.border-[color]</code></td>\n          <td><code>border-color</code></td>\n        </tr>\n      </tbody>\n    </table>\n\n    <ul class=\"list-unstyled guide-color guide-colors-gray overflow-hidden-xs m-b-4-xs\"></ul><!-- List items built by JS -->\n  </section>\n\n\n  </section>\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>\n\n\n\n\n<!-- Sass to JS goodness -->\n<div id=\"brandColorData\"></div>\n<div id=\"uiColorData\"></div>\n<div id=\"grayColorData\"></div>\n\n<script src=\"vendor/js/prism.js\"></script>\n<script src=\"vendor/js/sass-to-js.js\"></script>";


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	var brandColors = function brandColors(elementId, $elementId, guideClass) {
	  var colorDataEl = document.getElementById(elementId);
	  var colorData = sassToJs(colorDataEl);
	  var colorString = JSON.parse(window.getComputedStyle(document.querySelector($elementId), ':before').getPropertyValue('content'));
	  var colorJSON = JSON.parse(colorString);

	  for (var colorClass in colorJSON) {
	    var colorObj = colorJSON[colorClass];
	    var colorHexValue = colorObj;

	    // Create LI and add class name to it
	    var li = document.createElement("li");
	    li.className = 'guide-color-item float-l-xs m-b-3-xs col-100-sm col-50-lg col-33-xl';

	    // Create span to hold color
	    var colorSpan = document.createElement('span');
	    colorSpan.className = 'p-2-xs m-lr-1-xs block-xs round brand-bg-' + colorClass;

	    // Create code element to hold var function and hex
	    var nameSpan = document.createElement('span');
	    nameSpan.className = 'block-xs text-6-xs';

	    // Create em to hold hex value
	    var hexSpan = document.createElement('em');
	    hexSpan.className = 'block-xs text-6-xs color-text-color';

	    // Create var function for nameSpan
	    var colorName = document.createTextNode(colorClass);
	    var hexValue = document.createTextNode(colorObj);
	    nameSpan.appendChild(colorName);
	    hexSpan.appendChild(hexValue);

	    // Append everything into the LI
	    colorSpan.appendChild(nameSpan);
	    colorSpan.appendChild(hexSpan);
	    li.appendChild(colorSpan);

	    // Append LI's into the color UL
	    document.querySelector(guideClass).appendChild(li);
	  }
	};

	module.exports = brandColors;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	var uiColors = function uiColors(elementId, $elementId, guideClass) {

	  var colorDataEl = document.getElementById(elementId);
	  var colorData = sassToJs(colorDataEl);
	  var colorString = JSON.parse(window.getComputedStyle(document.querySelector($elementId), ':before').getPropertyValue('content'));
	  var colorJSON = JSON.parse(colorString);

	  for (var colorClass in colorJSON) {
	    var colorObj = colorJSON[colorClass];
	    var colorHexValue = colorObj;

	    // Create LI and add class name to it
	    var li = document.createElement("li");
	    li.className = 'guide-color-item float-l-xs m-b-3-xs col-100-sm col-33-lg col-20-xl';

	    // Create span to hold color
	    var colorSpan = document.createElement('span');
	    colorSpan.className = 'p-2-xs m-lr-1-xs block-xs round bg-' + colorClass;

	    // Create code element to hold var function and hex
	    var nameSpan = document.createElement('span');
	    nameSpan.className = 'block-xs text-6-xs';

	    // Create em to hold hex value
	    var hexSpan = document.createElement('em');
	    hexSpan.className = 'block-xs text-6-xs color-text-color';

	    // Create var function for nameSpan
	    var colorName = document.createTextNode(colorClass);
	    var hexValue = document.createTextNode(colorObj);
	    nameSpan.appendChild(colorName);
	    hexSpan.appendChild(hexValue);

	    // Append everything into the LI
	    colorSpan.appendChild(nameSpan);
	    colorSpan.appendChild(hexSpan);
	    li.appendChild(colorSpan);

	    // Append LI's into the color UL
	    document.querySelector(guideClass).appendChild(li);
	  }
	};

	module.exports = uiColors;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	var grayColors = function grayColors(elementId, $elementId, guideClass) {

	  var colorDataEl = document.getElementById(elementId);
	  var colorData = sassToJs(colorDataEl);
	  var colorString = JSON.parse(window.getComputedStyle(document.querySelector($elementId), ':before').getPropertyValue('content'));
	  var colorJSON = JSON.parse(colorString);

	  // Create LI and add class name to it
	  var li = document.createElement("li");
	  li.className = 'guide-color-item float-l-xs m-b-3-xs col-100-sm col-50-lg col-33-xl';

	  for (var colorClass in colorJSON) {
	    var colorObj = colorJSON[colorClass];
	    var colorHexValue = colorObj;

	    // Create span to hold color
	    var colorSpan = document.createElement('span');
	    colorSpan.className = 'p-2-xs m-lr-1-xs block-xs bg-' + colorClass;

	    // Create code element to hold var function and hex
	    var nameSpan = document.createElement('span');
	    nameSpan.className = 'block-xs text-6-xs';

	    // Create em to hold hex value
	    var hexSpan = document.createElement('em');
	    hexSpan.className = 'block-xs text-6-xs color-text-color';

	    // Create var function for nameSpan
	    var colorName = document.createTextNode(colorClass);
	    var hexValue = document.createTextNode(colorObj);
	    nameSpan.appendChild(colorName);
	    hexSpan.appendChild(hexValue);

	    // Append everything into the LI
	    colorSpan.appendChild(nameSpan);
	    colorSpan.appendChild(hexSpan);
	    li.appendChild(colorSpan);

	    // Append LI's into the color UL
	    document.querySelector(guideClass).appendChild(li);
	  }
	};

	module.exports = grayColors;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.atoms.flexbox", []);

	m.controller("FlexboxController", function($scope) {
	  return this;
	});

	m.directive("flexbox", function() {
	  return {
	    controller: "FlexboxController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section id=\"flexbox\">\n    <p class=\"m-b-4-xs\">Flexbox is perfect for aligning items inside components. It typically isn't used for large scale layouts but for smaller parts of a page or component. All of the flex box utility classes can be used with our breakpoint suffixes.</p>\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Flex Container</h2>\n    <p class=\"m-b-3-xs\">This is the parent of the items that will be laid out using flex box.</p>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Display</h3>\n    <p class=\"m-b-1-xs\">Defines the flex container and enables a flex context for all of its direct children. To apply this to a container with block, use <code>.flex-block-xs</code>. To apply it with inline, use <code>.flex-inline-xs</code></p>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"flex-block-xs\"&gt;\n  &lt;!-- Children --&gt;\n&lt;/div&gt;\n\n&lt;div class=\"flex-inline-xs\"&gt;\n  &lt;!-- Children --&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Flex Direction</h3>\n    <p class=\"m-b-2-xs\">This establishes the main-axis, which defines the direction items are palces in the container. Flex lays out in a single direction, either horizontal or vertical.</p>\n    <table class=\"table-border-rows m-b-2-xs\">\n      <thead>\n        <tr>\n          <th>Class</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><code>.flex-row-xs</code></td>\n          <td>(Default) Left to right</td>\n        </tr>\n        <tr>\n          <td><code>.flex-row-reverse-xs</code></td>\n          <td>Right to left</td>\n        </tr>\n        <tr>\n          <td><code>.flex-column-xs</code></td>\n          <td>Same as <code>.flex-row-xs</code> but top to bottom</td>\n        </tr>\n        <tr>\n          <td><code>.flex-column-reverse-xs</code></td>\n          <td>Same as <code>.flex-row-reverse-xs</code> but bottom to top</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"flex-block-xs border-xs p-1-xs\">\n      <div class=\"border-dark-xs text-center-xs m-r-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-r-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-r-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">4</div>\n    </div>\n    <div class=\"flex-block-xs flex-column-xs border-xs border-none-t-xs p-1-xs\">\n      <div class=\"border-dark-xs text-center-xs m-b-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-b-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-b-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">4</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"flex-block-xs border-xs p-1-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-r-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-r-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-r-05-xs\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs\"&gt;4&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-column-xs border-xs border-none-t-xs p-1-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-b-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-b-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-b-05-xs\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs\"&gt;4&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Flex Wrap</h3>\n    <p class=\"m-b-2-xs\">Flex items will all fit into one line by default. To change that behavior and allow them to wrap, you'll need to add some properties. Flex direction plays a role here by defining the direction new line are stacked.</p>\n    <table class=\"table-border-rows m-b-2-xs\">\n      <thead>\n        <tr>\n          <th>Class</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><code>.flex-nowrap-xs</code></td>\n          <td>(Default) Single-line with no wrapping</td>\n        </tr>\n        <tr>\n          <td><code>.flex-wrap-xs</code></td>\n          <td>Multi-line from left to right</td>\n        </tr>\n        <tr>\n          <td><code>.flex-wrap-reverse-xs</code></td>\n          <td>Multi-line from right to left</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"flex-block-xs flex-wrap-xs border-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 350px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 350px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 350px; height: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 350px; height: 50px; line-height: 50px;\">4</div>\n    </div>\n    <div class=\"flex-block-xs flex-wrap-reverse-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 350px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 350px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 350px; height: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 350px; height: 50px; line-height: 50px;\">4</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"flex-block-xs flex-wrap-xs border-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;4&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-wrap-reverse-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;4&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Justify Content</h3>\n    <p class=\"m-b-2-xs\">This defines the alignment along the main axis and helps distribute space around the flex items.</p>\n    <table class=\"table-border-rows m-b-2-xs\">\n      <thead>\n        <tr>\n          <th>Class</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><code>.flex-justify-start-xs</code></td>\n          <td>(Default) Items are packed toward the start line</td>\n        </tr>\n        <tr>\n          <td><code>.flex-justify-end-xs</code></td>\n          <td>Items are packed toward the end line</td>\n        </tr>\n        <tr>\n          <td><code>.flex-justify-center-xs</code></td>\n          <td>Items are centered along the line</td>\n        </tr>\n        <tr>\n          <td><code>.flex-justify-between-xs</code></td>\n          <td>Items are evenly distributed in the line. First item on the start line, last item on the end line.</td>\n        </tr>\n        <tr>\n          <td><code>.flex-justify-around-xs</code></td>\n          <td>Items are evently distributed in the line with equal space around them. Note that visually the spaces aren't equal because each item has equal space on both sides.</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"flex-block-xs flex-justify-start-xs border-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 150px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 100px; height: 50px; line-height: 50px;\">3</div>\n    </div>\n    <div class=\"flex-block-xs flex-justify-end-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 150px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 100px; height: 50px; line-height: 50px;\">3</div>\n    </div>\n    <div class=\"flex-block-xs flex-justify-center-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 150px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 100px; height: 50px; line-height: 50px;\">3</div>\n    </div>\n    <div class=\"flex-block-xs flex-justify-between-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 150px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 100px; height: 50px; line-height: 50px;\">3</div>\n    </div>\n    <div class=\"flex-block-xs flex-justify-around-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 150px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 100px; height: 50px; line-height: 50px;\">3</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"flex-block-xs flex-justify-start-xs border-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-justify-end-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-justify-center-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-justify-between-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-justify-around-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Align Items</h3>\n    <p class=\"m-b-2-xs\">This defines how flex items are laid out along the cross axis on the current line.</p>\n    <table class=\"table-border-rows m-b-2-xs\">\n      <thead>\n        <tr>\n          <th>Class</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><code>.flex-item-start-xs</code></td>\n          <td>Cross-start margin edge of the items is placed on the cross-start line</td>\n        </tr>\n        <tr>\n          <td><code>.flex-item-end-xs</code></td>\n          <td>Cross-end margin edge of the items is placed on the cross-end line</td>\n        </tr>\n        <tr>\n          <td><code>.flex-item-center-xs</code></td>\n          <td>Items are centered in the cross-axis</td>\n        </tr>\n        <tr>\n          <td><code>.flex-item-stretch-xs</code></td>\n          <td>(Default) Stretch to fill the container but still respects min/max-width</td>\n        </tr>\n        <tr>\n          <td><code>.flex-item-baseline-xs</code></td>\n          <td>Items are aligned such as their baselines align</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"flex-block-xs flex-item-start-xs border-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">1<br>2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">4<br>5</div>\n    </div>\n    <div class=\"flex-block-xs flex-item-end-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">1<br>2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">4<br>5</div>\n    </div>\n    <div class=\"flex-block-xs flex-item-center-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">1<br>2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">4<br>5</div>\n    </div>\n    <div class=\"flex-block-xs flex-item-stretch-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">1<br>2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">4<br>5</div>\n    </div>\n    <div class=\"flex-block-xs flex-item-baseline-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">1<br>2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 70px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 100px;\">4<br>5</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"flex-block-xs flex-item-start-xs border-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;1&lt;br&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;4&lt;br&gt;5&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-item-end-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;1&lt;br&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;4&lt;br&gt;5&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-item-center-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;1&lt;br&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;4&lt;br&gt;5&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-item-stretch-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;1&lt;br&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;4&lt;br&gt;5&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-item-baseline-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;1&lt;br&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 70px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 100px;\"&gt;4&lt;br&gt;5&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Align Content</h3>\n    <p class=\"m-b-2-xs\">This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns items within the main axis. Note: this property has no effect when there is only one line of flex items.</p>\n    <table class=\"table-border-rows m-b-2-xs\">\n      <thead>\n        <tr>\n          <th>Class</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><code>.flex-content-start-xs</code></td>\n          <td>Lines packed to the start of the container</td>\n        </tr>\n        <tr>\n          <td><code>.flex-content-end-xs</code></td>\n          <td>Lines packed to the end of the container</td>\n        </tr>\n        <tr>\n          <td><code>.flex-content-center-xs</code></td>\n          <td>Lines packed to the center of the container</td>\n        </tr>\n        <tr>\n          <td><code>.flex-content-around-xs</code></td>\n          <td>Lines evenly distributed with the first line at the start and the last at the end of the container.</td>\n        </tr>\n        <tr>\n          <td><code>.flex-content-between-xs</code></td>\n          <td>Lines evenly distributed with equal space around each line.</td>\n        </tr>\n        <tr>\n          <td><code>.flex-content-stretch-xs</code></td>\n          <td>(Default) Lines stretch to take up the remaining space</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"flex-block-xs flex-content-start-xs flex-wrap-xs border-xs p-05-xs\" style=\"min-height:300px;\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 500px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 150px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 200px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 300px; line-height: 50px;\">4</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 400px; line-height: 50px;\">5</div>\n    </div>\n    <div class=\"flex-block-xs flex-content-end-xs flex-wrap-xs border-xs p-05-xs\" style=\"min-height:300px;\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 500px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 150px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 200px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 300px; line-height: 50px;\">4</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 400px; line-height: 50px;\">5</div>\n    </div>\n    <div class=\"flex-block-xs flex-content-center-xs flex-wrap-xs border-xs p-05-xs\" style=\"min-height:300px;\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 500px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 150px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 200px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 300px; line-height: 50px;\">4</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 400px; line-height: 50px;\">5</div>\n    </div>\n    <div class=\"flex-block-xs flex-content-around-xs flex-wrap-xs border-xs p-05-xs\" style=\"min-height:300px;\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 500px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 150px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 200px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 300px; line-height: 50px;\">4</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 400px; line-height: 50px;\">5</div>\n    </div>\n    <div class=\"flex-block-xs flex-content-between-xs flex-wrap-xs border-xs p-05-xs\" style=\"min-height:300px;\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 500px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 150px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 200px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 300px; line-height: 50px;\">4</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 400px; line-height: 50px;\">5</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"flex-block-xs flex-content-start-xs flex-wrap-xs border-xs p-05-xs\" style=\"min-height:300px;\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 500px; line-height: 50px;\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 150px; line-height: 50px;\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 200px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 300px; line-height: 50px;\"&gt;4&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 400px; line-height: 50px;\"&gt;5&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-content-end-xs flex-wrap-xs border-xs p-05-xs\" style=\"min-height:300px;\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 500px; line-height: 50px;\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 150px; line-height: 50px;\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 200px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 300px; line-height: 50px;\"&gt;4&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 400px; line-height: 50px;\"&gt;5&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-content-center-xs flex-wrap-xs border-xs p-05-xs\" style=\"min-height:300px;\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 500px; line-height: 50px;\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 150px; line-height: 50px;\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 200px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 300px; line-height: 50px;\"&gt;4&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 400px; line-height: 50px;\"&gt;5&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-content-around-xs flex-wrap-xs border-xs p-05-xs\" style=\"min-height:300px;\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 500px; line-height: 50px;\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 150px; line-height: 50px;\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 200px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 300px; line-height: 50px;\"&gt;4&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 400px; line-height: 50px;\"&gt;5&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs flex-content-between-xs flex-wrap-xs border-xs p-05-xs\" style=\"min-height:300px;\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 500px; line-height: 50px;\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 150px; line-height: 50px;\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 200px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 300px; line-height: 50px;\"&gt;4&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; width: 400px; line-height: 50px;\"&gt;5&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n  </section>\n\n  <section id=\"Items\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Flex Items</h2>\n    <p class=\"m-b-1-xs\">These are the children of the parent container. Flex items are what take on the flexible box layout for components and pages.</p>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Order</h3>\n    <p class=\"m-b-1-xs\">By default, items are laid out in source order. By using the <code>order</code> property, we can control the order inside the flex container. Lens contains built in ordering classes of <code>.flex-order-[n]-xs</code>, where n is an integer from 1 to 6. Any item without an order will default to 1 and matching orders will be grouped together in the appropriate order. You can rearrange the order across breakpoints with breakpoint suffixes.</p>\n    <div class=\"flex-block-xs border-xs p-05-xs\">\n      <div class=\"flex-order-2-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">4</div>\n    </div>\n    <div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"flex-order-4-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"flex-order-1-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"flex-order-2-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">3</div>\n      <div class=\"flex-order-3-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">4</div>\n    </div>\n    <div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"flex-order-2-lg border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"flex-order-1-lg border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"flex-order-1-lg border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">3</div>\n      <div class=\"flex-order-2-lg border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">4</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"flex-block-xs border-xs p-05-xs\"&gt;\n  &lt;div class=\"flex-order-2-xs border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;4&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"flex-order-4-xs border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"flex-order-1-xs border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"flex-order-2-xs border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n  &lt;div class=\"flex-order-3-xs border-dark-xs text-center-xs m-05-xs\"&gt;4&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"flex-order-2-lg border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"flex-order-1-lg border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"flex-order-1-lg border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n  &lt;div class=\"flex-order-2-lg border-dark-xs text-center-xs m-05-xs\"&gt;4&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Flex Grow</h3>\n    <p class=\"m-b-1-xs\">This property lets an item grow if necessary. It accepts a unitless value that serves as a proportion. The default is <code>0</code>.</p>\n    <div class=\"flex-block-xs border-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"flex-grow-1-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"flex-grow-2-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">4</div>\n    </div>\n    <div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"flex-grow-6-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"flex-grow-3-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">3</div>\n      <div class=\"flex-grow-1-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">4</div>\n    </div>\n    <div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"flex-grow-2-lg border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"flex-grow-4-lg border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; height: 50px; line-height: 50px;\">4</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"flex-block-xs border-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"flex-grow-1-xs border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"flex-grow-2-xs border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;4&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"flex-grow-6-xs border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"flex-grow-3-xs border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n  &lt;div class=\"flex-grow-1-xs border-dark-xs text-center-xs m-05-xs\"&gt;4&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"flex-grow-2-lg border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"flex-grow-4-lg border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;4&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Flex Shrink</h3>\n    <p class=\"m-b-1-xs\">This property lets an item shrink if necessary. It accepts a unitless value that serves as a proportion. The default is <code>1</code>.</p>\n    <div class=\"flex-block-xs border-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 500px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"flex-shrink-2-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 500px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"flex-shrink-2-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 500px; height: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 500px; height: 50px; line-height: 50px;\">4</div>\n    </div>\n    <div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"flex-shrink-4-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 500px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"flex-shrink-3-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 500px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 500px; height: 50px; line-height: 50px;\">3</div>\n      <div class=\"flex-shrink-2-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 500px; height: 50px; line-height: 50px;\">4</div>\n    </div>\n    <div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 500px; height: 50px; line-height: 50px;\">1</div>\n      <div class=\"flex-shrink-2-lg border-dark-xs text-center-xs m-05-xs\" style=\"width: 500px; height: 50px; line-height: 50px;\">2</div>\n      <div class=\"flex-shrink-4-lg border-dark-xs text-center-xs m-05-xs\" style=\"width: 500px; height: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 500px; height: 50px; line-height: 50px;\">4</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"flex-block-xs border-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"flex-shrink-2-xs border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"flex-shrink-2-xs border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;4&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"flex-shrink-4-xs border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"flex-shrink-3-xs border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n  &lt;div class=\"flex-shrink-2-xs border-dark-xs text-center-xs m-05-xs\"&gt;4&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;1&lt;/div&gt;\n  &lt;div class=\"flex-shrink-2-lg border-dark-xs text-center-xs m-05-xs\"&gt;2&lt;/div&gt;\n  &lt;div class=\"flex-shrink-4-lg border-dark-xs text-center-xs m-05-xs\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\"&gt;4&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Flex Basis</h3>\n    <p class=\"m-b-1-xs\">This property defines the default size of an element before the remaining space is distributed. It can be a length or keyword, like \"auto\". The default is <code>auto</code>. To use percentages, use the same widths we have available in our <code>.col</code> classes, like <code>.flex-basis-20-xs</code>. To use our default spacing units, try <code>.flex-basis-s2-xs</code>.</p>\n    <div class=\"flex-block-xs border-xs p-05-xs\">\n      <div class=\"flex-basis-33-xs flex-basis-20-lg border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; line-height: 50px;\">1</div>\n      <div class=\"flex-basis-33-xs flex-basis-60-lg border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; line-height: 50px;\">2</div>\n      <div class=\"flex-basis-33-xs flex-basis-20-lg border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; line-height: 50px;\">3</div>\n    </div>\n    <div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"flex-basis-s2-xs flex-basis-50-lg border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; line-height: 50px;\">1</div>\n      <div class=\"flex-basis-s4-xs flex-basis-40-lg border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; line-height: 50px;\">2</div>\n      <div class=\"flex-basis-s6-xs flex-basis-10-lg border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; line-height: 50px;\">3</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"flex-block-xs border-xs p-05-xs\"&gt;\n  &lt;div class=\"flex-basis-33-xs flex-basis-20-lg border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; line-height: 50px;\"&gt;1&lt;/div&gt;\n  &lt;div class=\"flex-basis-33-xs flex-basis-60-lg border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; line-height: 50px;\"&gt;2&lt;/div&gt;\n  &lt;div class=\"flex-basis-33-xs flex-basis-20-lg border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; line-height: 50px;\"&gt;3&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"flex-basis-s2-xs border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; line-height: 50px;\"&gt;1&lt;/div&gt;\n  &lt;div class=\"flex-basis-s4-xs border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; line-height: 50px;\"&gt;2&lt;/div&gt;\n  &lt;div class=\"flex-basis-s6-xs border-dark-xs text-center-xs m-05-xs\" style=\"height: 50px; line-height: 50px;\"&gt;3&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Align Self</h3>\n    <p class=\"m-b-2-xs\">This allows individual flex items to have their own unique alignment within the container. This also overrides the container align-items property.</p>\n    <table class=\"table-border-rows m-b-2-xs\">\n      <thead>\n        <tr>\n          <th>Class</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><code>.flex-self-auto-xs</code></td>\n          <td>(Default) Auto align, which inherits the align-items property</td>\n        </tr>\n        <tr>\n          <td><code>.flex-self-start-xs</code></td>\n          <td>Cross-start margin edge of the items is placed on the cross-start line</td>\n        </tr>\n        <tr>\n          <td><code>.flex-self-end-xs</code></td>\n          <td>Cross-end margin edge of the items is placed on the cross-end line</td>\n        </tr>\n        <tr>\n          <td><code>.flex-self-center-xs</code></td>\n          <td>Items are centered in the cross-axis</td>\n        </tr>\n        <tr>\n          <td><code>.flex-self-stretch-xs</code></td>\n          <td>Stretch to fill the container but still respects min/max-width</td>\n        </tr>\n        <tr>\n          <td><code>.flex-self-baseline-xs</code></td>\n          <td>Items are aligned such as their baselines align</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"flex-block-xs border-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">1<br>2</div>\n      <div class=\"flex-self-start-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">4<br>5</div>\n    </div>\n    <div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">1<br>2</div>\n      <div class=\"flex-self-end-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">4<br>5</div>\n    </div>\n    <div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">1<br>2</div>\n      <div class=\"flex-self-center-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">4<br>5</div>\n    </div>\n    <div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">1<br>2</div>\n      <div class=\"flex-self-stretch-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">4<br>5</div>\n    </div>\n    <div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\">\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">1<br>2</div>\n      <div class=\"flex-self-baseline-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">3</div>\n      <div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\">4<br>5</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"flex-block-xs border-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;1&lt;br&gt;2&lt;/div&gt;\n  &lt;div class=\"flex-self-start-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;4&lt;br&gt;5&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;1&lt;br&gt;2&lt;/div&gt;\n  &lt;div class=\"flex-self-end-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;4&lt;br&gt;5&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;1&lt;br&gt;2&lt;/div&gt;\n  &lt;div class=\"flex-self-center-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;4&lt;br&gt;5&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;1&lt;br&gt;2&lt;/div&gt;\n  &lt;div class=\"flex-self-stretch-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;4&lt;br&gt;5&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"flex-block-xs border-xs border-none-t-xs p-05-xs\"&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;1&lt;br&gt;2&lt;/div&gt;\n  &lt;div class=\"flex-self-baseline-xs border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;3&lt;/div&gt;\n  &lt;div class=\"border-dark-xs text-center-xs m-05-xs\" style=\"width: 50px; line-height: 50px;\"&gt;4&lt;br&gt;5&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n  </section>\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>\n\n";


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.atoms.forms", []);

	m.controller("FormsController", function($scope) {
	  return this;
	});

	m.directive("forms", function() {
	  return {
	    controller: "FormsController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section id=\"forms\">\n\n    <!-- Labels -->\n    <h2 id=\"Labels\" class=\"guide-content-subtitle m-b-1-xs\">Labels</h2>\n    <p class=\"m-b-2-xs\">Use the <code>.form-label</code> class to set the default styles on a label. You can also change the text alignment with <code>.text-right-xs</code>.</p>\n    <div class=\"col-container col-max col-gutters\">\n      <div class=\"col col-30-lg\">\n        <form class=\"m-b-2-xs\">\n          <label class=\"form-label\">Form Label</label>\n          <label class=\"form-label text-right-lg\">Form Label</label>\n        </form>\n      </div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n    <pre><code class=\"language-html\">&lt;form&gt;\n  &lt;label class=\"form-label\"&gt;Form Label&lt;/label&gt;\n  &lt;label class=\"form-label text-right-xs\"&gt;Form Label&lt;/label&gt;\n&lt;/form&gt;</code></pre></div>\n\n\n    <!-- Text Inputs -->\n    <h2 id=\"Inputs\" class=\"guide-content-subtitle m-b-1-xs\">Text Inputs</h2>\n    <p class=\"m-b-2-xs\">Use the <code>.form-text-input</code> class to apply the default styling for text inputs. Inputs should always be paired with a label to make them accessible. You can use placeholder text for additional context when necessary. <strong>NEVER</strong> use placeholder text in place of a label.</p>\n\n    <form class=\"m-b-2-xs\">\n      <div class=\"col-container col-max col-gutters\">\n        <div class=\"col col-15-lg\">\n          <label for=\"form-text-input-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\">Label</label>\n        </div>\n        <div class=\"col col-50-lg\">\n            <input type=\"text\" class=\"form-text-input\" id=\"form-text-input-1\" placeholder=\"this is placeholder text\">\n        </div>\n      </div>\n    </form>\n    <div class=\"guide-code m-b-4-xs\">\n    <pre><code class=\"language-html\">&lt;form class=\"m-b-2-xs\"&gt;\n  &lt;div class=\"col-container col-max col-gutters\"&gt;\n    &lt;div class=\"col col-15-lg\"&gt;\n      &lt;label for=\"form-text-input-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\"&gt;Label&lt;/label&gt;\n    &lt;/div&gt;\n    &lt;div class=\"col col-50-lg\"&gt;\n        &lt;input type=\"text\" class=\"form-text-input\" id=\"form-text-input-1\" placeholder=\"this is placeholder text\"&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</code></pre>\n    </div>\n\n    <h4 class=\"guide-content-h4 m-b-1-xs\">Disabled Inputs</h4>\n    <p class=\"m-b-2-xs\">You may have an text input that needs to be disabled. To do that, use the class <code>.form-text-input-disabled</code> in addition to the default class.</p>\n\n    <form class=\"m-b-2-xs\">\n      <div class=\"col-container col-max col-gutters\">\n        <div class=\"col col-15-lg\">\n          <label for=\"form-text-input-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\">Disabled</label>\n        </div>\n        <div class=\"col col-50-lg\">\n            <input type=\"text\" readonly=\"true\" class=\"form-text-input form-text-input-disabled\" id=\"form-text-input-1\">\n        </div>\n      </div>\n    </form>\n    <div class=\"guide-code m-b-4-xs\">\n    <pre><code class=\"language-html\">&lt;form class=\"m-b-2-xs\"&gt;\n  &lt;div class=\"col-container col-max col-gutters\"&gt;\n    &lt;div class=\"col col-15-lg\"&gt;\n      &lt;label for=\"form-text-input-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\"&gt;Disabled&lt;/label&gt;\n    &lt;/div&gt;\n    &lt;div class=\"col col-50-lg\"&gt;\n        &lt;input type=\"text\" readonly=\"true\" class=\"form-text-input form-text-input-disabled\" id=\"form-text-input-1\"&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</code></pre>\n    </div>\n\n\n    <!-- Inputs Groups-->\n    <h2 id=\"Input-Groups\" class=\"guide-content-subtitle m-b-1-xs\">Inputs Groups</h2>\n    <p class=\"m-b-2-xs\">For a number that contains dashes, use our <code>.form-input-group</code> class on a <code>div</code> with <code>input.form-text-input</code> inside. Between each input, use <code>.form-input-group-addon</code> with a dash inside it.</p>\n\n    <div class=\"col-container\">\n      <div class=\"col-50-md\">\n        <form>\n          <div class=\"form-input-group\">\n            <input type=\"text\" class=\"form-text-input\">\n            <div class=\"form-input-group-addon\">-</div>\n            <input type=\"text\" class=\"form-text-input\">\n            <div class=\"form-input-group-addon\">-</div>\n            <input type=\"text\" class=\"form-text-input\">\n            <div class=\"form-input-group-addon\">-</div>\n            <input type=\"text\" class=\"form-text-input\">\n            <div class=\"form-input-group-addon\">-</div>\n            <input type=\"text\" class=\"form-text-input\">\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n    <pre><code class=\"language-html\">&lt;form&gt;\n  &lt;div class=\"form-input-group\"&gt;\n    &lt;input type=\"text\" class=\"form-text-input\"&gt;\n    &lt;div class=\"form-input-group-addon\"&gt;-&lt;/div&gt;\n    &lt;input type=\"text\" class=\"form-text-input\"&gt;\n    &lt;div class=\"form-input-group-addon\"&gt;-&lt;/div&gt;\n    &lt;input type=\"text\" class=\"form-text-input\"&gt;\n    &lt;div class=\"form-input-group-addon\"&gt;-&lt;/div&gt;\n    &lt;input type=\"text\" class=\"form-text-input\"&gt;\n    &lt;div class=\"form-input-group-addon\"&gt;-&lt;/div&gt;\n    &lt;input type=\"text\" class=\"form-text-input\"&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</code></pre>\n    </div>\n\n\n    <!-- Textareas -->\n    <h2 id=\"Textareas\" class=\"guide-content-subtitle m-b-1-xs\">Textareas</h2>\n    <p class=\"m-b-2-xs\">Use the <code>.form-textarea</code> class to get the default styling. When setting a typesize and width, we recommend aiming for a measure of 52-78 characters.</p>\n\n    <form class=\"m-b-2-xs\">\n      <div class=\"col-container col-max col-gutters\">\n        <div class=\"col col-15-lg\">\n          <label for=\"form-text-input-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\">Label</label>\n        </div>\n        <div class=\"col col-50-lg\">\n          <textarea name=\"form-textarea-1\" id=\"form-textarea-1\" class=\"form-textarea\"></textarea>\n        </div>\n      </div>\n    </form>\n    <div class=\"guide-code m-b-4-xs\">\n    <pre><code class=\"language-html\">&lt;form class=\"m-b-2-xs\"&gt;\n  &lt;div class=\"col-container col-max col-gutters\"&gt;\n    &lt;div class=\"col col-15-lg\"&gt;\n      &lt;label for=\"form-text-input-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\"&gt;Label&lt;/label&gt;\n    &lt;/div&gt;\n    &lt;div class=\"col col-50-lg\"&gt;\n      &lt;textarea name=\"form-textarea-1\" id=\"form-textarea-1\" class=\"form-textarea\"&gt;&lt;/textarea&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</code></pre>\n    </div>\n\n\n    <!-- Tokens -->\n    <h2 id=\"Textareas\" class=\"guide-content-subtitle m-b-1-xs\">Tokens</h2>\n    <p class=\"m-b-2-xs\">Tokens are great for using autocomplete inside an input or for anytime you need a token that can be closed. To use them, you'll need to copy the look of a text input for a div by including <code>.tokenfield.form-text-input</code> on it. Then inside, you'll have tokens, which are made up of divs with the <code>.tokenfield-token</code> class on them. Finally, you'll have a span with a class of <code>.tokenfield-token-label</code> and a close anchor.</p>\n\n    <div class=\"col-container col-max col-gutters\">\n      <div class=\"col col-50-lg\">\n        <form class=\"m-b-2-xs\">\n          <div class=\"tokenfield form-text-input\">\n            <input type=\"text\" tabindex=\"-1\" style=\"position: absolute; left: -10000px;\">\n            <div class=\"tokenfield-token\">\n              <span class=\"tokenfield-token-label\">Token A</span>\n              <a href=\"#\" class=\"tokenfield-token-close\" tabindex=\"-1\">&times;</a>\n            </div>\n            <div class=\"tokenfield-token\">\n              <span class=\"tokenfield-token-label\">Token B</span>\n              <a href=\"#\" class=\"tokenfield-token-close\" tabindex=\"-1\">&times;</a>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n    <pre><code class=\"language-html\">&lt;form class=\"m-b-2-xs\"&gt;\n  &lt;div class=\"tokenfield form-text-input\"&gt;\n    &lt;input type=\"text\" tabindex=\"-1\" style=\"position: absolute; left: -10000px;\"&gt;\n    &lt;div class=\"tokenfield-token\"&gt;\n      &lt;span class=\"tokenfield-token-label\"&gt;Token A&lt;/span&gt;\n      &lt;a href=\"#\" class=\"tokenfield-token-close\" tabindex=\"-1\"&gt;&times;&lt;/a&gt;\n    &lt;/div&gt;\n    &lt;div class=\"tokenfield-token\"&gt;\n      &lt;span class=\"tokenfield-token-label\"&gt;Token B&lt;/span&gt;\n      &lt;a href=\"#\" class=\"tokenfield-token-close\" tabindex=\"-1\"&gt;&times;&lt;/a&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</code></pre>\n    </div>\n\n\n    <!-- Selects -->\n    <h2 id=\"Selects\" class=\"guide-content-subtitle m-b-1-xs\">Selects</h2>\n    <p class=\"m-b-2-xs\">Use the <code>.form-select</code> class to get the default styling.</p>\n\n    <form class=\"m-b-2-xs\">\n      <div class=\"col-container col-max col-gutters\">\n        <div class=\"col col-15-lg\">\n          <label for=\"form-select-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\">Label</label>\n        </div>\n        <div class=\"col col-50-lg\">\n          <select id=\"form-select-1\" class=\"form-select\">\n            <option value=\"\">Item 1</option>\n            <option value=\"\">Item 2</option>\n            <option value=\"\">Item 3</option>\n            <option value=\"\">Item 4</option>\n          </select>\n        </div>\n      </div>\n    </form>\n    <div class=\"guide-code m-b-4-xs\">\n    <pre><code class=\"language-html\">&lt;form class=\"m-b-2-xs\"&gt;\n  &lt;div class=\"col-container col-max col-gutters\"&gt;\n    &lt;div class=\"col col-15-lg\"&gt;\n      &lt;label for=\"form-select-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\"&gt;Label&lt;/label&gt;\n    &lt;/div&gt;\n    &lt;div class=\"col col-50-lg\"&gt;\n      &lt;select id=\"form-select-1\" class=\"form-select\"&gt;\n        &lt;option value=\"\"&gt;Item 1&lt;/option&gt;\n        &lt;option value=\"\"&gt;Item 2&lt;/option&gt;\n        &lt;option value=\"\"&gt;Item 3&lt;/option&gt;\n        &lt;option value=\"\"&gt;Item 4&lt;/option&gt;\n      &lt;/select&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</code></pre>\n    </div>\n\n\n    <!-- Select Multiples -->\n    <h2 id=\"Selects\" class=\"guide-content-subtitle m-b-1-xs\">Select Multiple</h2>\n    <p class=\"m-b-2-xs\">Use the <code>.form-select-multiple</code> class and add the attribute, <code>multiple</code> to get the default styling. If you'd only like a user to be able to select one option, just remove the <code>multiple</code> attribute and add a <code>size</code> attribute that takes a value of how ever many options you want shown.</p>\n\n    <form class=\"m-b-2-xs\">\n      <div class=\"col-container col-max col-gutters m-b-2-xs\">\n        <div class=\"col col-15-lg\">\n          <label for=\"form-select-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\">Multiple</label>\n        </div>\n        <div class=\"col col-50-lg\">\n          <select id=\"form-select-1\" class=\"form-select-multiple\" multiple>\n            <option value=\"\">Item 1</option>\n            <option value=\"\">Item 2</option>\n            <option value=\"\">Item 3</option>\n            <option value=\"\">Item 4</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-container col-max col-gutters\">\n        <div class=\"col col-15-lg\">\n          <label for=\"form-select-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\">Single</label>\n        </div>\n        <div class=\"col col-50-lg\">\n          <select id=\"form-select-1\" class=\"form-select-multiple\" size=\"3\">\n            <option value=\"\">Item 1</option>\n            <option value=\"\">Item 2</option>\n            <option value=\"\">Item 3</option>\n          </select>\n        </div>\n      </div>\n    </form>\n    <div class=\"guide-code m-b-4-xs\">\n    <pre><code class=\"language-html\">&lt;form class=\"m-b-2-xs\"&gt;\n  &lt;div class=\"col-container col-max col-gutters m-b-2-xs\"&gt;\n    &lt;div class=\"col col-15-lg\"&gt;\n      &lt;label for=\"form-select-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\"&gt;Multiple&lt;/label&gt;\n    &lt;/div&gt;\n    &lt;div class=\"col col-50-lg\"&gt;\n      &lt;select id=\"form-select-1\" class=\"form-select-multiple\" multiple&gt;\n        &lt;option value=\"\"&gt;Item 1&lt;/option&gt;\n        &lt;option value=\"\"&gt;Item 2&lt;/option&gt;\n        &lt;option value=\"\"&gt;Item 3&lt;/option&gt;\n        &lt;option value=\"\"&gt;Item 4&lt;/option&gt;\n      &lt;/select&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n  &lt;div class=\"col-container col-max col-gutters\"&gt;\n    &lt;div class=\"col col-15-lg\"&gt;\n      &lt;label for=\"form-select-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\"&gt;Single&lt;/label&gt;\n    &lt;/div&gt;\n    &lt;div class=\"col col-50-lg\"&gt;\n      &lt;select id=\"form-select-1\" class=\"form-select-multiple\" size=\"3\"&gt;\n        &lt;option value=\"\"&gt;Item 1&lt;/option&gt;\n        &lt;option value=\"\"&gt;Item 2&lt;/option&gt;\n        &lt;option value=\"\"&gt;Item 3&lt;/option&gt;\n      &lt;/select&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</code></pre>\n    </div>\n\n\n    <!-- Radios -->\n    <h2 id=\"Radios\" class=\"guide-content-subtitle m-b-1-xs\">Radios</h2>\n    <p class=\"m-b-1-xs\">Use <code>div.form-radio</code> to wrap an <code>label.form-radio-label</code> inside. Within that label you'll nest <code>input.form-radio-input</code> to get a radio input with the correct styles.</p>\n\n    <form>\n      <div class=\"col-container col-gutters\">\n        <div class=\"col col-15-lg\">\n          <label class=\"form-label text-right-lg\">Radios</label>\n        </div>\n        <div class=\"col col-50-lg\">\n          <div class=\"form-radio\">\n            <label class=\"form-radio-label\">\n              <input type=\"radio\" name=\"radio-1\" class=\"form-radio-input\">\n              Radio selection 1\n            </label>\n          </div>\n          <div class=\"form-radio\">\n            <label class=\"form-radio-label\">\n              <input type=\"radio\" name=\"radio-1\" class=\"form-radio-input\">\n              Radio selection 2\n            </label>\n          </div>\n        </div>\n      </div>\n    </form>\n    <div class=\"guide-code m-b-4-xs\">\n    <pre><code class=\"language-html\">&lt;form&gt;\n  &lt;div class=\"col-container col-gutters\"&gt;\n    &lt;div class=\"col col-15-lg\"&gt;\n      &lt;label class=\"form-label text-right-lg\"&gt;Radios&lt;/label&gt;\n    &lt;/div&gt;\n    &lt;div class=\"col col-50-lg\"&gt;\n      &lt;div class=\"form-radio\"&gt;\n        &lt;label class=\"form-radio-label\"&gt;\n          &lt;input type=\"radio\" name=\"radio-1\" class=\"form-radio-input\"&gt;\n          Radio selection 1\n        &lt;/label&gt;\n      &lt;/div&gt;\n      &lt;div class=\"form-radio\"&gt;\n        &lt;label class=\"form-radio-label\"&gt;\n          &lt;input type=\"radio\" name=\"radio-1\" class=\"form-radio-input\"&gt;\n          Radio selection 2\n        &lt;/label&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</code></pre>\n    </div>\n\n\n    <!-- Checkboxes -->\n    <h2 id=\"Checkboxes\" class=\"guide-content-subtitle m-b-1-xs\">Checkboxes</h2>\n    <p class=\"m-b-1-xs\">Use <code>div.form-checkbox</code> to wrap an <code>label.form-checkbox-label</code> inside. Within that label you'll nest <code>input.form-checkbox-input</code> to get a radio input with the correct styles.</p>\n\n    <form>\n      <div class=\"col-container col-gutters\">\n        <div class=\"col col-15-lg\">\n          <label class=\"form-label text-right-lg\">Checkboxes</label>\n        </div>\n        <div class=\"col col-50-lg\">\n          <div class=\"form-checkbox\">\n            <label class=\"form-checkbox-label\">\n              <input type=\"checkbox\" name=\"checkbox-1\" class=\"form-checkbox-input\">\n              Checkbox 1\n            </label>\n          </div>\n          <div class=\"form-checkbox\">\n            <label class=\"form-checkbox-label\">\n              <input type=\"checkbox\" name=\"checkbox-1\" class=\"form-checkbox-input\">\n              Checkbox 2\n            </label>\n          </div>\n        </div>\n      </div>\n    </form>\n    <div class=\"guide-code m-b-4-xs\">\n    <pre><code class=\"language-html\">&lt;form&gt;\n  &lt;div class=\"col-container col-gutters\"&gt;\n    &lt;div class=\"col col-15-lg\"&gt;\n      &lt;label class=\"form-label text-right-lg\"&gt;Checkboxes&lt;/label&gt;\n    &lt;/div&gt;\n    &lt;div class=\"col col-50-lg\"&gt;\n      &lt;div class=\"form-checkbox\"&gt;\n        &lt;label class=\"form-checkbox-label\"&gt;\n          &lt;input type=\"checkbox\" name=\"checkbox-1\" class=\"form-checkbox-input\"&gt;\n          Checkbox 1\n        &lt;/label&gt;\n      &lt;/div&gt;\n      &lt;div class=\"form-checkbox\"&gt;\n        &lt;label class=\"form-checkbox-label\"&gt;\n          &lt;input type=\"checkbox\" name=\"checkbox-1\" class=\"form-checkbox-input\"&gt;\n          Checkbox 2\n        &lt;/label&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</code></pre>\n    </div>\n\n\n    <!-- Helpers -->\n    <h2 id=\"Helper\" class=\"guide-content-subtitle m-b-1-xs\">Helper Text</h2>\n    <p class=\"m-b-2-xs\">When necessary, you can place additional text below the input in a <code>div</code> with a <code>.form-helper</code> class to add helper text.</p>\n\n    <form class=\"m-b-2-xs\">\n      <div class=\"col-container col-max col-gutters\">\n        <div class=\"col col-15-lg\">\n          <label for=\"form-text-input-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\">Label</label>\n        </div>\n        <div class=\"col col-50-lg\">\n            <input type=\"text\" class=\"form-text-input\" id=\"form-text-input-1\" placeholder=\"this is placeholder text\">\n            <div class=\"form-helper\">You don't need to include http://</div>\n        </div>\n      </div>\n    </form>\n    <div class=\"guide-code m-b-4-xs\">\n    <pre><code class=\"language-html\">&lt;form class=\"m-b-2-xs\"&gt;\n  &lt;div class=\"col-container col-max col-gutters\"&gt;\n    &lt;div class=\"col col-15-lg\"&gt;\n      &lt;label for=\"form-text-input-1\" class=\"form-label text-right-lg m-b-05-xs m-b-0-lg\"&gt;Label&lt;/label&gt;\n    &lt;/div&gt;\n    &lt;div class=\"col col-50-lg\"&gt;\n        &lt;input type=\"text\" class=\"form-text-input\" id=\"form-text-input-1\" placeholder=\"this is placeholder text\"&gt;\n        &lt;div class=\"form-helper\"&gt;You don't need to include http://&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</code></pre>\n    </div>\n\n\n    <!-- Form Errors -->\n    <h2 id=\"Error\" class=\"guide-content-subtitle m-b-1-xs\">Form Error</h2>\n    <p class=\"m-b-2-xs\">Add the <code>.form-error</code> class to the form element to apply Lens's default for feedback styling. Additionally, add a <code>div</code> with the class of <code>.form-helper.form-helper-error</code> to inform the user what the feedback is.</p>\n\n    <div class=\"col-container col-max col-gutters\">\n      <div class=\"col col-50-lg\">\n        <form>\n          <select id=\"form-select-1\" class=\"form-select form-error\">\n            <option value=\"\">Item 1</option>\n            <option value=\"\">Item 2</option>\n            <option value=\"\">Item 3</option>\n            <option value=\"\">Item 4</option>\n          </select>\n          <div class=\"form-helper form-helper-error m-b-2-xs\">Get to the chopper!</div>\n          <input type=\"text\" class=\"form-text-input form-error\" id=\"form-text-input-1\">\n          <div class=\"form-helper form-helper-error\">Don't forget to this!</div>\n        </form>\n      </div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n    <pre><code class=\"language-html\">&lt;form&gt;\n  &lt;select id=\"form-select-1\" class=\"form-select form-error\"&gt;\n    &lt;option value=\"\"&gt;Item 1&lt;/option&gt;\n    &lt;option value=\"\"&gt;Item 2&lt;/option&gt;\n    &lt;option value=\"\"&gt;Item 3&lt;/option&gt;\n    &lt;option value=\"\"&gt;Item 4&lt;/option&gt;\n  &lt;/select&gt;\n  &lt;div class=\"form-helper form-helper-error m-b-2-xs\"&gt;Get to the chopper!&lt;/div&gt;\n  &lt;input type=\"text\" class=\"form-text-input form-error\" id=\"form-text-input-1\"&gt;\n  &lt;div class=\"form-helper form-helper-error\"&gt;Don't forget to this!&lt;/div&gt;\n&lt;/form&gt;</code></pre>\n    </div>\n\n\n    <!-- Switches -->\n    <h2 id=\"Switches\" class=\"guide-content-subtitle m-b-1-xs\">Switches</h2>\n    <p class=\"m-b-2-xs\">Switches are a stylized checkbox that lets a user toggle on/off some sort of option. To build one, wrap a div with the class of <code>.lk-switch-outer</code> around an input and a label. The input has the class <code>.lk-switch</code> and the label has the class <code>.lk-switch-label</code>. That label then has two spans inside it. These are <code>.lk-switch-on</code> and <code>.lk-switch-off</code>.</p>\n\n    <div class=\"col-container col-max col-gutters\">\n      <div class=\"col col-50-lg\">\n        <form>\n          <div class=\"lk-switch-outer\">\n            <input type=\"checkbox\" id=\"switch-1\" class=\"lk-switch\">\n            <label class=\"lk-switch-label\" for=\"switch-1\">\n              <span class=\"lk-switch-on\">On</span>\n              <span class=\"lk-switch-off\">Off</span>\n            </label>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"guide-code\">\n    <pre><code class=\"language-html\">&lt;form&gt;\n  &lt;div class=\"lk-switch-outer\"&gt;\n    &lt;input type=\"checkbox\" id=\"switch-1\" class=\"lk-switch\"&gt;\n    &lt;label class=\"lk-switch-label\" for=\"switch-1\"&gt;\n      &lt;span class=\"lk-switch-on\"&gt;On&lt;/span&gt;\n      &lt;span class=\"lk-switch-off\"&gt;Off&lt;/span&gt;\n    &lt;/label&gt;\n  &lt;/div&gt;\n&lt;/form&gt;</code></pre>\n    </div>\n  </section>\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>\n\n";


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.atoms.grid", []);

	m.controller("GridController", function($scope) {
	  return this;
	});

	m.directive("grid", function() {
	  return {
	    controller: "GridController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section id=\"grid\">\n    <h2 id=\"Grid\" class=\"guide-content-subtitle m-b-1-xs\">The Grid</h2>\n    <p class=\"m-b-1-xs\">We provide a mobile-first, fluid grid to help layout pages with ease. To start a new grid, create a div with the class of <code>.col-container</code>. Then add columns inside it using <code>.col .col-n-xs</code>, where n = 5-100 in increments of 5, with the addition of 33 and 66 to let us do columns in thirds.</p>\n    <p class=\"m-b-3-xs\"><strong>Important:</strong> Column classes should generally be used on container elements. It's bad practice to apply grid-based widths directly to elements such as form fields, headers or images. Also, avoid applying styles directly to a column element. Instead, nest your content within the column and apply styling there.</p>\n    <div class=\"col-container\">\n      <div class=\"col col-30-xs col-50-lg border-dark-xs\">.col .col-30-xs</div>\n      <div class=\"col col-20-xs col-30-lg border-dark-xs\">.col .col-20-xs</div>\n      <div class=\"col col-50-xs col-20-xl border-dark-xs\">.col .col-50-xs</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"col-container\"&gt;\n  &lt;div class=\"col col-30-xs border-dark-xs\"&gt;.col .col-30-xs&lt;/div&gt;\n  &lt;div class=\"col col-20-xs border-dark-xs\"&gt;.col .col-20-xs&lt;/div&gt;\n  &lt;div class=\"col col-50-xs border-dark-xs\"&gt;.col .col-50-xs&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h2 id=\"Nesting\" class=\"guide-content-subtitle m-b-1-xs\">Nesting Columns</h2>\n    <p class=\"m-b-3-xs\">Each column in our grid can hold another set of columns inside of it. To make things work properly nest another <code>.col-container</code> inside the <code>.col</code>.</p>\n    <div class=\"col-container\">\n      <div class=\"col col-50-xs border-xs\">\n        <span class=\"block-xs m-b-1-xs\">.col .col-50-xs</span>\n        <div class=\"col-container\">\n          <div class=\"col col-30-xs border-dark-xs\">.col .col-30-xs</div>\n          <div class=\"col col-30-xs border-dark-xs\">.col .col-30-xs</div>\n          <div class=\"col col-40-xs border-dark-xs\">.col .col-40-xs</div>\n        </div>\n      </div>\n      <div class=\"col col-50-xs border-xs\">\n        <span class=\"block-xs m-b-1-xs\">.col .col-50-xs</span>\n        <div class=\"col-container\">\n          <div class=\"col col-20-xs border-dark-xs\">.col .col-20-xs</div>\n          <div class=\"col col-60-xs border-dark-xs\">.col .col-60-xs</div>\n          <div class=\"col col-20-xs border-dark-xs\">.col .col-20-xs</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"col-container\"&gt;\n  &lt;div class=\"col col-50-xs border-xs\"&gt;\n    &lt;span class=\"block-xs m-b-1-xs\"&gt;.col .col-50-xs&lt;/span&gt;\n    &lt;div class=\"col-container\"&gt;\n      &lt;div class=\"col col-30-xs border-dark-xs\"&gt;.col .col-30-xs&lt;/div&gt;\n      &lt;div class=\"col col-30-xs border-dark-xs\"&gt;.col .col-30-xs&lt;/div&gt;\n      &lt;div class=\"col col-40-xs border-dark-xs\"&gt;.col .col-40-xs&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n  &lt;div class=\"col col-50-xs border-xs\"&gt;\n    &lt;span class=\"block-xs m-b-1-xs\"&gt;.col .col-50-xs&lt;/span&gt;\n    &lt;div class=\"col-container\"&gt;\n      &lt;div class=\"col col-20-xs border-dark-xs\"&gt;.col .col-20-xs&lt;/div&gt;\n      &lt;div class=\"col col-60-xs border-dark-xs\"&gt;.col .col-60-xs&lt;/div&gt;\n      &lt;div class=\"col col-20-xs border-dark-xs\"&gt;.col .col-20-xs&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h2 id=\"Gutters\" class=\"guide-content-subtitle m-b-1-xs\">Gutters</h2>\n    <p class=\"m-b-3-xs\">The Lens grid doesn't include gutter by default. But there are times when you want to include gutters between your grid. For those times, we have <code>.col-gutters</code>, which can be added next to <code>.col-container</code> to automatically assign gutters to the internal columns. You may also choose to apply gutters manually (for a little more control) by using our padding utility classes next to the column classes.</p>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Automatic Gutters</h3>\n    <p class=\"m-b-3-xs\">Gutters will not be applied to nested columns unless applied to its parent container.</p>\n    <div class=\"col-container col-gutters\">\n      <div class=\"col col-40-xs\">\n        <div class=\"border-dark-xs\">.col</div>\n      </div>\n      <div class=\"col col-60-xs\">\n        <div class=\"col-container\">\n          <div class=\"col col-33-xs border-dark-xs\">.col</div>\n          <div class=\"col col-33-xs border-dark-xs\">.col</div>\n          <div class=\"col col-33-xs border-dark-xs\">.col</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"col-container col-gutters\"&gt;\n  &lt;div class=\"col col-40-xs\"&gt;\n    &lt;div class=\"border-dark-xs\"&gt;.col&lt;/div&gt;\n  &lt;/div&gt;\n  &lt;div class=\"col col-60-xs\"&gt;\n    &lt;div class=\"col-container\"&gt;\n      &lt;div class=\"col col-33-xs border-dark-xs\"&gt;.col&lt;/div&gt;\n      &lt;div class=\"col col-33-xs border-dark-xs\"&gt;.col&lt;/div&gt;\n      &lt;div class=\"col col-33-xs border-dark-xs\"&gt;.col&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Manual Gutters</h3>\n    <p class=\"m-b-3-xs\">With manual gutters, any styling should be applied to a nested element, not the columns themselves.</p>\n    <div class=\"col-container\">\n      <div class=\"col col-30-xs p-r-1-xs\">\n        <div class=\"border-dark-xs\">.col</div>\n      </div>\n      <div class=\"col col-30-xs p-r-5-xs\">\n        <div class=\"border-dark-xs\">.col</div>\n      </div>\n      <div class=\"col col-40-xs\">\n        <div class=\"border-dark-xs\">.col</div>\n      </div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"col-container\"&gt;\n  &lt;div class=\"col col-30-xs p-r-1-xs\"&gt;\n    &lt;div class=\"border-dark-xs\"&gt;.col&lt;/div&gt;\n  &lt;/div&gt;\n  &lt;div class=\"col col-30-xs p-r-5-xs\"&gt;\n    &lt;div class=\"border-dark-xs\"&gt;.col&lt;/div&gt;\n  &lt;/div&gt;\n  &lt;div class=\"col col-40-xs\"&gt;\n    &lt;div class=\"border-dark-xs\"&gt;.col&lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h2 id=\"Centering\" class=\"guide-content-subtitle m-b-1-xs\">Centering Columns</h2>\n    <p class=\"m-b-3-xs\">Sometimes you want to center a single column within its container. This is possible by adding <code>.col-center</code> next to your <code>.col col-n-xs</code> class. You may also control column centering by using our margin and float utility classes. Simply apply <code>.m-auto-xs .float-none-xs</code> and you'll get the same styles as <code>.col-center</code>.</p>\n    <div class=\"col-container border-xs p-1-xs m-b-1-xs\">\n      <div class=\"col col-50-xs col-center border-dark-xs\">.col .col-50-xs .col-center</div>\n    </div>\n    <div class=\"col-container border-xs p-1-xs\">\n      <div class=\"col col-30-xs col-center border-dark-xs\">.col .col-30-xs .col-center</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"col-container border-xs p-1-xs m-b-1-xs\"&gt;\n  &lt;div class=\"col col-50-xs col-center border-dark-xs\"&gt;.col .col-50-xs .col-center&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"col-container border-xs p-1-xs\"&gt;\n  &lt;div class=\"col col-30-xs col-center border-dark-xs\"&gt;.col .col-30-xs .col-center&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h2 id=\"Offsets\" class=\"guide-content-subtitle m-b-1-xs\">Column Offsets</h2>\n    <p class=\"m-b-3-xs\">Move columns over by different grid widths by using <code>.col-offset-n-xs</code>. Keep in mind that the columns and offsets used within a <code>.col-container</code> shouldn't add up to more than 100.</p>\n    <div class=\"col-container border-xs p-1-xs m-b-1-xs\">\n      <div class=\"col col-40-xs border-dark-xs\">.col-40-xs</div>\n      <div class=\"col col-40-xs col-offset-20-xs border-dark-xs\">.col-40-xs .col-offset-30-xs</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"col-container border-xs p-1-xs m-b-1-xs\"&gt;\n  &lt;div class=\"col col-40-xs border-dark-xs\"&gt;.col-40-xs&lt;/div&gt;\n  &lt;div class=\"col col-40-xs col-offset-20-xs border-dark-xs\"&gt;.col-40-xs .col-offset-30-xs&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h2 id=\"Responsive\" class=\"guide-content-subtitle m-b-1-xs\">Responsive Breakpoint Classes</h2>\n    <p class=\"m-b-3-xs\">Our mobile first grid comes with a set of breakpoint class suffixes that can be used to override columns across breakpoints. For example, if a div needs to take up the full width of the page across all display sizes, use <code>.col-100-xs</code>. If that same div needs to be half width at the medium breakpoint and a quarter at our large breakpoints, add <code>.col-50-md</code> and <code>.col-33-lg</code>. Resize the browser to see the effect in action. Note that there are also suffixes for small and extra large. You can learn more about the breakpoints in our <a href=\"responsive.html\">responsive documentation</a></p>\n    <div class=\"col-container\">\n      <div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\">\n        <span class=\"block-xs hide-md hide-lg\">.col-100-xs</span>\n        <span class=\"hide-xs block-md hide-lg\">.col-50-md</span>\n        <span class=\"hide-xs block-lg\">.col-25-lg</span>\n      </div>\n      <div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\">\n        <span class=\"block-xs hide-md hide-lg\">.col-100-xs</span>\n        <span class=\"hide-xs block-md hide-lg\">.col-50-md</span>\n        <span class=\"hide-xs block-lg\">.col-25-lg</span>\n      </div>\n      <div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\">\n        <span class=\"block-xs hide-md hide-lg\">.col-100-xs</span>\n        <span class=\"hide-xs block-md hide-lg\">.col-50-md</span>\n        <span class=\"hide-xs block-lg\">.col-25-lg</span>\n      </div>\n      <div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\">\n        <span class=\"block-xs hide-md hide-lg\">.col-100-xs</span>\n        <span class=\"hide-xs block-md hide-lg\">.col-50-md</span>\n        <span class=\"hide-xs block-lg\">.col-25-lg</span>\n      </div>\n    </div>\n    <div class=\"guide-code\">\n  <pre><code class=\"language-html\">&lt;div class=\"col-container\"&gt;\n  &lt;div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\"&gt;\n    &lt;span class=\"block-xs hide-md hide-lg\"&gt;.col-100-xs&lt;/span&gt;\n    &lt;span class=\"hide-xs block-md hide-lg\"&gt;.col-50-md&lt;/span&gt;\n    &lt;span class=\"hide-xs block-lg\"&gt;.col-25-lg&lt;/span&gt;\n  &lt;/div&gt;\n  &lt;div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\"&gt;\n    &lt;span class=\"block-xs hide-md hide-lg\"&gt;.col-100-xs&lt;/span&gt;\n    &lt;span class=\"hide-xs block-md hide-lg\"&gt;.col-50-md&lt;/span&gt;\n    &lt;span class=\"hide-xs block-lg\"&gt;.col-25-lg&lt;/span&gt;\n  &lt;/div&gt;\n  &lt;div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\"&gt;\n    &lt;span class=\"block-xs hide-md hide-lg\"&gt;.col-100-xs&lt;/span&gt;\n    &lt;span class=\"hide-xs block-md hide-lg\"&gt;.col-50-md&lt;/span&gt;\n    &lt;span class=\"hide-xs block-lg\"&gt;.col-25-lg&lt;/span&gt;\n  &lt;/div&gt;\n  &lt;div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\"&gt;\n    &lt;span class=\"block-xs hide-md hide-lg\"&gt;.col-100-xs&lt;/span&gt;\n    &lt;span class=\"hide-xs block-md hide-lg\"&gt;.col-50-md&lt;/span&gt;\n    &lt;span class=\"hide-xs block-lg\"&gt;.col-25-lg&lt;/span&gt;\n  &lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n  </section>\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>\n\n";


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.atoms.icons", []);

	m.controller("IconsController", function($scope) {
	  return this;
	});

	m.directive("icons", function() {
	  return {
	    controller: "IconsController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n  <section>Coming Soon...</section>\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>";


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.atoms.layout", []);

	m.controller("LayoutController", function($scope) {
	  return this;
	});

	m.directive("layout", function() {
	  return {
	    controller: "LayoutController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section id=\"Floats\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Floats</h2>\n    <p class=\"m-b-1-xs\">To float elements, use the following classes: <code>.float-l-xs</code>, <code>.float-r-xs</code>, and <code>.float-none-xs</code></p>\n    <div class=\"col-container\">\n      <div class=\"col col-30-sm\">\n        <p><strong>Directions</strong></p>\n        <ul class=\"list-unstyled m-b-3-xs\">\n          <li><code>l</code> = left</li>\n          <li><code>r</code> = right</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-container\">\n      <div class=\"float-l-xs border-dark-xs\">.float-l-xs</div>\n      <div class=\"float-r-xs border-dark-xs\">.float-r-xs</div>\n    </div>\n    <div class=\"float-none-xs border-dark-xs m-t-05-xs\">.float-none-xs</div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"col-container\"&gt;\n  &lt;div class=\"float-l-xs border-dark-xs\"&gt;.float-l-xs&lt;/div&gt;\n  &lt;div class=\"float-r-xs border-dark-xs\"&gt;.float-r-xs&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"float-none-xs border-dark-xs m-t-05-xs\"&gt;.float-none-xs&lt;/div&gt;</code></pre>\n    </div>\n  </section>\n\n\n\n  <section id=\"Display\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Display</h2>\n    <p class=\"m-b-3-xs\">Use <code>.hide-xs</code>, <code>.block-xs</code>, <code>.inline-xs</code> and <code>.inline-block-xs</code> to change an element's display.</p>\n    <div class=\"hide-xs\">.hide-xs</div>\n    <div class=\"block-xs border-dark-xs m-b-05-xs\">.block-xs</div>\n    <div class=\"inline-xs border-dark-xs\">.inline-xs</div>\n    <div class=\"inline-block-xs border-dark-xs\">.inline-block-xs</div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"hide-xs\"&gt;.hide-xs&lt;/div&gt;\n&lt;div class=\"block-xs border-dark-xs\"&gt;.block-xs&lt;/div&gt;\n&lt;div class=\"inline-xs border-dark-xs\"&gt;.inline-xs&lt;/div&gt;\n&lt;div class=\"inline-block-xs border-dark-xs\"&gt;.inline-block-xs&lt;/div&gt;</code></pre>\n    </div>\n  </section>\n\n\n\n  <section id=\"Overflow\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Overflow</h2>\n    <p class=\"m-b-3-xs\">Use <code>.overflow-hidden-xs</code>, <code>.overflow-auto-xs</code>, <code>.overflow-scroll-xs</code> and <code>.overflow-visible-xs</code> to change an element's overflow.</p>\n    <div class=\"overflow-hidden-xs p-1-xs m-b-1-xs border-dark-xs\" style=\"height: 110px\">\n      <p>.overflow-hidden-xs</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maiores esse vel quia, voluptates quos. Tempora natus iste aperiam sequi mollitia, doloremque quas recusandae, rerum minima dolorum, veritatis vitae maxime.</p>\n    </div>\n    <div class=\"overflow-auto-xs p-1-xs m-b-1-xs border-dark-xs\" style=\"height: 110px\">\n      <p>.overflow-auto-xs</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maiores esse vel quia, voluptates quos. Tempora natus iste aperiam sequi mollitia, doloremque quas recusandae, rerum minima dolorum, veritatis vitae maxime.</p>\n    </div>\n\n    <div class=\"overflow-scroll-xs p-1-xs m-b-1-xs border-dark-xs\" style=\"height: 110px\">\n      <p>.overflow-scroll-xs</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maiores esse vel quia, voluptates quos. Tempora natus iste aperiam sequi mollitia, doloremque quas recusandae, rerum minima dolorum, veritatis vitae maxime.</p>\n    </div>\n\n    <div class=\"overflow-visible-xs p-1-xs m-b-3-xs border-dark-xs\" style=\"height: 110px\">\n      <p>.overflow-visible-xs</p>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum maiores esse vel quia, voluptates quos. Tempora natus iste aperiam sequi mollitia, doloremque quas recusandae, rerum minima dolorum, veritatis vitae maxime.</p>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"overflow-hidden-xs p-1-xs m-b-1-xs border-dark-xs\" style=\"height: 110px\"&gt;\n  &lt;p&gt;.overflow-hidden-xs&lt;/p&gt;\n  &lt;p&gt;...&lt;/p&gt;\n&lt;/div&gt;\n\n&lt;div class=\"overflow-auto-xs p-1-xs m-b-1-xs border-dark-xs\" style=\"height: 110px\"&gt;\n  &lt;p&gt;.overflow-auto-xs&lt;/p&gt;\n  &lt;p&gt;...&lt;/p&gt;\n&lt;/div&gt;\n\n&lt;div class=\"overflow-scroll-xs p-1-xs m-b-1-xs border-dark-xs\" style=\"height: 110px\"&gt;\n  &lt;p&gt;.overflow-scroll-xs&lt;/p&gt;\n  &lt;p&gt;...&lt;/p&gt;\n&lt;/div&gt;\n\n&lt;div class=\"overflow-visible-xs p-1-xs m-b-3-xs border-dark-xs\" style=\"height: 110px\"&gt;\n  &lt;p&gt;.overflow-visible-xs&lt;/p&gt;\n  &lt;p&gt;...&lt;/p&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n  </section>\n\n\n\n  <section id=\"Width/Height\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Width &amp; Height</h2>\n    <p class=\"m-b-3-xs\">Most widths will be set using our grid layout. However, Lens provides <code>.w-fit-xs</code> to set an elements max-width to 100%, additionally it has <code>.w-full-xs</code> and <code>.h-full-xs</code> to set an elements width to 100%. You can use <code>.w-auto-xs</code> to set an elements width to auto.</p>\n    <div class=\"w-fit-xs border-dark-xs p-1-xs m-b-1-xs\">.w-fit-xs</div>\n    <div class=\"w-full-xs border-dark-xs p-1-xs m-b-1-xs\">.w-full-xs</div>\n    <div class=\"border-xs p-05-xs m-b-1-xs\" style=\"height: 100px\">\n      <div class=\"h-full-xs col-20-xs border-dark-xs p-1-xs\">.h-full-xs</div>\n    </div>\n    <div class=\"w-auto-xs border-dark-xs p-1-xs\">.w-auto-xs</div>\n\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"w-fit-xs border-dark-xs p-1-xs m-b-1-xs\"&gt;.w-fit-xs&lt;/div&gt;\n&lt;div class=\"w-full-xs border-dark-xs p-1-xs m-b-1-xs\"&gt;.w-full-xs&lt;/div&gt;\n&lt;div class=\"border-xs p-05-xs m-b-1-xs\" style=\"height: 100px\"&gt;\n  &lt;div class=\"h-full-xs col-20-xs border-dark-xs p-1-xs\"&gt;.h-full-xs&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"w-auto-xs border-dark-xs p-1-xs\"&gt;.w-auto-xs&lt;/div&gt;\n  </code></pre>\n    </div>\n  </section>\n\n\n\n  <section id=\"Units\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Spacing Units and Naming</h2>\n    <p class=\"m-b-1-xs\">We use our spacial units across margin, padding, and positioning. These comes in values from 0-6 and a half space unit of 0.5. Each value represents a unit based on 1rem=16px. Each class uses a shorthand of its name to indicate properties and direction.</p>\n    <div class=\"col-container m-b-3-xs\">\n      <div class=\"col col-30-lg\">\n        <p><strong>Units</strong></p>\n        <ul class=\"list-unstyled\">\n          <li><code>0</code> = 0</li>\n          <li><code>0.5</code> = 0.5rem</li>\n          <li><code>1</code> = 1rem</li>\n          <li><code>2</code> = 1.5rem</li>\n          <li><code>3</code> = 2rem</li>\n          <li><code>4</code> = 3rem</li>\n        </ul>\n      </div>\n      <div class=\"col col-30-lg\">\n        <p><strong>Properties</strong></p>\n        <ul class=\"list-unstyled\">\n          <li><code>m</code> = margin</li>\n          <li><code>p</code> = padding</li>\n        </ul>\n      </div>\n      <div class=\"col col-30-lg\">\n        <p><strong>Sides</strong></p>\n        <ul class=\"list-unstyled\">\n          <li><code>t</code> = top</li>\n          <li><code>b</code> = bottom</li>\n          <li><code>l</code> = left</li>\n          <li><code>r</code> = right</li>\n          <li><code>lr</code> = left + right</li>\n          <li><code>tb</code> = top + bottom</li>\n        </ul>\n      </div>\n    </div>\n  </section>\n\n\n\n  <section id=\"Spacing\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Spacing</h2>\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Uniform Spacing</h3>\n    <p class=\"m-b-1-xs\">These classes are used to apply equal spacing around the entire element.</p>\n    <div class=\"col-container m-b-2-xs\">\n      <div class=\"col col-30-md\">\n        <p><strong>Margin</strong></p>\n        <ul class=\"list-unstyled\">\n          <li><code>.m-0-xs</code></li>\n          <li><code>.m-05-xs</code></li>\n          <li><code>.m-1-xs</code></li>\n          <li><code>.m-2-xs</code></li>\n          <li><code>.m-3-xs</code></li>\n          <li><code>.m-4-xs</code></li>\n        </ul>\n      </div>\n      <div class=\"col col-30-md\">\n        <p><strong>Padding</strong></p>\n        <ul class=\"list-unstyled\">\n          <li><code>.p-0-xs</code></li>\n          <li><code>.p-05-xs</code></li>\n          <li><code>.p-1-xs</code></li>\n          <li><code>.p-2-xs</code></li>\n          <li><code>.p-3-xs</code></li>\n          <li><code>.p-4-xs</code></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-container border-xs\">\n      <div class=\"border-dark-xs float-l-xs inline-block-xs m-05-xs\">m-05-xs</div>\n      <div class=\"border-dark-xs float-l-xs inline-block-xs m-1-xs\">m-1-xs</div>\n      <div class=\"border-dark-xs float-l-xs inline-block-xs m-2-xs\">m-2-xs</div>\n      <div class=\"border-dark-xs float-l-xs inline-block-xs m-3-xs\">m-3-xs</div>\n      <div class=\"border-dark-xs float-l-xs inline-block-xs p-05-xs\">p-05-xs</div>\n      <div class=\"border-dark-xs float-l-xs inline-block-xs p-1-xs\">p-1-xs</div>\n      <div class=\"border-dark-xs float-l-xs inline-block-xs p-2-xs\">p-2-xs</div>\n      <div class=\"border-dark-xs float-l-xs inline-block-xs p-3-xs\">p-3-xs</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"col-container border-xs\"&gt;\n  &lt;div class=\"border-dark-xs float-l-xs inline-block-xs m-05-xs\"&gt;m-05-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs float-l-xs inline-block-xs m-1-xs\"&gt;m-1-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs float-l-xs inline-block-xs m-2-xs\"&gt;m-2-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs float-l-xs inline-block-xs m-3-xs\"&gt;m-3-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs float-l-xs inline-block-xs p-05-xs\"&gt;p-05-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs float-l-xs inline-block-xs p-1-xs\"&gt;p-1-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs float-l-xs inline-block-xs p-2-xs\"&gt;p-2-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs float-l-xs inline-block-xs p-3-xs\"&gt;p-3-xs&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Individual Spacing</h3>\n    <p class=\"m-b-1-xs\">These classes are used to apply spacing to a particular side of an element.</p>\n    <div class=\"col-container m-b-2-xs\">\n      <div class=\"col col-50-lg\">\n        <p><strong>Margin</strong></p>\n        <ul class=\"list-unstyled\">\n          <li><code>.m-t-1-xs</code> <span class=\"m-l-1-xs\">margin-top</span></li>\n          <li><code>.m-b-1-xs</code> <span class=\"m-l-1-xs\">margin-bottom</span></li>\n          <li><code>.m-l-1-xs</code> <span class=\"m-l-1-xs\">margin-left</span></li>\n          <li><code>.m-r-1-xs</code> <span class=\"m-l-1-xs\">margin-right</span></li>\n          <li><code>.m-lr-1-xs</code> <span class=\"m-l-1-xs\">margin left + right</span></li>\n          <li><code>.m-tb-1-xs</code> <span class=\"m-l-1-xs\">margin top + bottom</span></li>\n          <li><code>.m-auto-xs</code> <span class=\"m-l-1-xs\">horizontal center</span></li>\n        </ul>\n      </div>\n      <div class=\"col col-50-lg\">\n        <p><strong>Padding</strong></p>\n        <ul class=\"list-unstyled\">\n          <li><code>.p-0-xs</code> <span class=\"m-l-1-xs\">padding-top</span></li>\n          <li><code>.p-05-xs</code> <span class=\"m-l-1-xs\">padding-bottom</span></li>\n          <li><code>.p-1-xs</code> <span class=\"m-l-1-xs\">padding-left</span></li>\n          <li><code>.p-2-xs</code> <span class=\"m-l-1-xs\">padding-right</span></li>\n          <li><code>.p-3-xs</code> <span class=\"m-l-1-xs\">padding left + right</span></li>\n          <li><code>.p-4-xs</code> <span class=\"m-l-1-xs\">padding top + bottom</span></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-container border-xs\">\n      <div class=\"border-dark-xs float-l-xs inline-block-xs m-t-3-xs\">m-t-3-xs</div>\n      <div class=\"border-dark-xs float-l-xs inline-block-xs m-t-4-xs\">m-t-4-xs</div>\n      <div class=\"border-dark-xs float-l-xs inline-block-xs p-l-3-xs\">p-l-3-xs</div>\n      <div class=\"border-dark-xs float-l-xs inline-block-xs p-l-4-xs\">p-l-4-xs</div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"col-container border-xs\"&gt;\n  &lt;div class=\"border-dark-xs float-l-xs inline-block-xs m-t-3-xs\"&gt;m-t-3-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs float-l-xs inline-block-xs m-t-4-xs\"&gt;m-t-4-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs float-l-xs inline-block-xs p-l-3-xs\"&gt;p-l-3-xs&lt;/div&gt;\n  &lt;div class=\"border-dark-xs float-l-xs inline-block-xs p-l-4-xs\"&gt;p-l-4-xs&lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n  </section>\n\n\n\n  <section id=\"Positioning\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Positioning</h2>\n    <p class=\"m-b-1-xs\">Positioning is simple with Lens. Just add <code>.relative-xs</code>, <code>.absolute-xs</code>, <code>.fixed-xs</code>, or <code>.static-xs</code> to control the type of positioning on an element. From there, you can apply values based on our spacing units of 0-6 and a half unit of 05. Use <code>.pos-t-n-xs</code>, where t is the side and n is one of our spacing units.</p>\n    <p class=\"m-b-1-xs\"><strong>Note:</strong> There is no demo for position fixed because it will always be fixed to the viewport, not a parent container.</p>\n    <div class=\"col-container m-b-3-xs\">\n      <div class=\"col col-50-sm\">\n        <ul class=\"list-unstyled\">\n          <li><code>.relative-xs</code> = relative</li>\n          <li><code>.absolute-xs</code> = absolute</li>\n          <li><code>.fixed-xs</code> = fixed</li>\n          <li><code>.static-xs</code> = static</li>\n          <li><code>.pos-t-n-xs</code> = top</li>\n          <li><code>.pos-b-n-xs</code> = bottom</li>\n          <li><code>.pos-l-n-xs</code> = left</li>\n          <li><code>.pos-r-n-xs</code> = right</li>\n        </ul>\n      </div>\n    </div>\n\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Z-Index</h3>\n    <p class=\"m-b-1-xs\">Use a z-index class to assign the stack order of elements. We've created classes for values 1-4, which end up as 100-400 in the property value.</p>\n    <div class=\"col-container m-b-3-xs\">\n      <div class=\"col col-50-sm\">\n        <ul class=\"list-unstyled\">\n          <li><code>.z-1-xs</code> = z-index: 100</li>\n          <li><code>.z-2-xs</code> = z-index: 200</li>\n          <li><code>.z-3-xs</code> = z-index: 300</li>\n          <li><code>.z-4-xs</code> = z-index: 400</li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"border-xs p-2-xs m-b-1-xs\">\n      <div class=\"relative-xs pos-t-2-xs pos-l-4-xs border-dark-xs inline-xs\">\n        .relative-xs .pos-t-2-xs .pos-l-4-xs\n      </div>\n    </div>\n    <div class=\"relative-xs border-xs p-3-xs m-b-1-xs\">\n      .relative-xs\n      <div class=\"absolute-xs pos-t-4-xs pos-l-4-xs border-dark-xs\">\n        .absolute-xs .pos-t-4-xs .pos-l-4-xs\n      </div>\n    </div>\n    <div class=\"relative-xs border-xs p-4-xs\">\n      <div class=\"absolute-xs pos-t-1-xs pos-l-2-xs border-dark-xs p-05-xs z-2-xs\" style=\"background: #fff\">\n        .absolute-xs .pos-t-1-xs .pos-l-2-xs\n      </div>\n      <div class=\"absolute-xs pos-t-4-xs pos-l-4-xs border-dark-xs p-05-xs z-1-xs\">\n        .absolute-xs .pos-t-4-xs .pos-l-4-xs\n      </div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"border-xs p-2-xs m-b-1-xs\"&gt;\n  &lt;div class=\"relative-xs pos-t-2-xs pos-l-4-xs border-dark-xs inline-xs\"&gt;\n    .relative-xs .pos-t-2-xs .pos-l-4-xs\n  &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"relative-xs border-xs p-3-xs m-b-1-xs\"&gt;\n  .relative-xs\n  &lt;div class=\"absolute-xs pos-t-4-xs pos-l-4-xs border-dark-xs\"&gt;\n    .absolute-xs .pos-t-4-xs .pos-l-4-xs\n  &lt;/div&gt;\n&lt;/div&gt;\n&lt;div class=\"relative-xs border-xs p-4-xs\"&gt;\n  &lt;div class=\"absolute-xs pos-t-1-xs pos-l-2-xs border-dark-xs p-05-xs z-2-xs\" style=\"background: #fff\"&gt;\n    .absolute-xs .pos-t-1-xs .pos-l-2-xs\n  &lt;/div&gt;\n  &lt;div class=\"absolute-xs pos-t-4-xs pos-l-4-xs border-dark-xs p-05-xs z-1-xs\"&gt;\n    .absolute-xs .pos-t-4-xs .pos-l-4-xs\n  &lt;/div&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n  </section>\n\n\n\n  <section id=\"Alignment\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Vertical Alignment</h2>\n    <p class=\"m-b-3-xs\">You can vertically align elements with the <code>.align-top-xs</code>, <code>.align-middle-xs</code>, or <code>.align-bottom-xs</code> classes.</p>\n\n    <div class=\"m-b-2-xs\">\n      <img src=\"http://placehold.it/50x50\" alt=\"Gratt Spore\" height=\"50px\" Width=\"50px\" class=\"align-top-xs m-r-1 circle\">\n      This is our friend Gratt Spore and the <code>img</code> tag has the class <code>align-top-xs</code> on it.\n    </div>\n    <div class=\"m-b-2-xs\">\n      <img src=\"http://placehold.it/50x50\" alt=\"Gratt Spore\" height=\"50px\" Width=\"50px\" class=\"align-middle-xs m-r-1 circle\">\n      This is our friend Gratt Spore and the <code>img</code> tag has the class <code>align-middle-xs</code> on it.\n    </div>\n    <div>\n      <img src=\"http://placehold.it/50x50\" alt=\"Gratt Spore\" height=\"50px\" Width=\"50px\" class=\"align-bottom-xs m-r-1 circle\">\n      This is our friend Gratt Spore and the <code>img</code> tag has the class <code>align-bottom-xs</code> on it.\n    </div>\n\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"m-b-2-xs\"&gt;\n  &lt;img src=\"img/gratt-spore.svg\" alt=\"Gratt Spore\" height=\"50px\" Width=\"50px\" class=\"align-top-xs m-r-1\"&gt;\n  This is our friend Gratt Spore and the &lt;code&gt;img&lt;/code&gt; tag has the class &lt;code&gt;align-top-xs&lt;/code&gt; on it.\n&lt;/div&gt;\n&lt;div class=\"m-b-2-xs\"&gt;\n  &lt;img src=\"img/gratt-spore.svg\" alt=\"Gratt Spore\" height=\"50px\" Width=\"50px\" class=\"align-middle-xs m-r-1\"&gt;\n  This is our friend Gratt Spore and the &lt;code&gt;img&lt;/code&gt; tag has the class &lt;code&gt;align-middle-xs&lt;/code&gt; on it.\n&lt;/div&gt;\n&lt;div&gt;\n  &lt;img src=\"img/gratt-spore.svg\" alt=\"Gratt Spore\" height=\"50px\" Width=\"50px\" class=\"align-bottom-xs m-r-1\"&gt;\n  This is our friend Gratt Spore and the &lt;code&gt;img&lt;/code&gt; tag has the class &lt;code&gt;align-bottom-xs&lt;/code&gt; on it.\n&lt;/div&gt;</code></pre></</div>\n  </section>\n\n\n\n  <section id=\"Rotation\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Rotation</h2>\n    <p class=\"m-b-3-xs\">You can rotate elements by using <code>.rotate-n-xs</code>, where n is 0, 45, 90, 135, 180, 225, 270, or 315. You can also change rotation across breakpoints (using our breakpoint suffixes) to accomodate different layouts.</p>\n\n    <span class=\"rotate-0-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"></span>\n    <span class=\"rotate-45-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"></span>\n    <span class=\"rotate-90-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"></span>\n    <span class=\"rotate-135-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"></span>\n    <span class=\"rotate-180-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"></span>\n    <span class=\"rotate-225-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"></span>\n    <span class=\"rotate-270-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"></span>\n    <span class=\"rotate-315-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs\" style=\"height:60px;\"></span>\n\n    <div class=\"guide-code\">\n  <pre><code class=\"language-html\">&lt;span class=\"rotate-0-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"&gt;&lt;/span&gt;\n&lt;span class=\"rotate-45-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"&gt;&lt;/span&gt;\n&lt;span class=\"rotate-90-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"&gt;&lt;/span&gt;\n&lt;span class=\"rotate-135-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"&gt;&lt;/span&gt;\n&lt;span class=\"rotate-180-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"&gt;&lt;/span&gt;\n&lt;span class=\"rotate-225-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"&gt;&lt;/span&gt;\n&lt;span class=\"rotate-270-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs m-r-2-xs\" style=\"height:60px;\"&gt;&lt;/span&gt;\n&lt;span class=\"rotate-315-xs border-dark-xs border-none-t-xs inline-block-xs p-2-xs\" style=\"height:60px;\"&gt;&lt;/span&gt;</code></pre></</div>\n  </section>\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>\n\n";


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.atoms.responsive", []);

	m.controller("ResponsiveController", function($scope) {
	  return this;
	});

	m.directive("responsive", function() {
	  return {
	    controller: "ResponsiveController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section id=\"responsive\">\n    <h2 id=\"Suffixes\" class=\"guide-content-subtitle m-b-1-xs\">Responsive Suffixes</h2>\n    <p class=\"m-b-1-xs\">Our grid classes, utility classes and typography are built in a way that give flexibility across breakpoints. To change things at different breakpoints, we have 5 suffixes to add to your classes: <code>-xs</code>, <code>-sm</code>, <code>-md</code>, <code>-lg</code>, and <code>-xl</code>.</p>\n    <p class=\"m-b-3-xs\">To see this in action, resize your browser and pay attention to how this grid layout changes.</p>\n    <div class=\"col-container\">\n      <div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\">\n        <span class=\"block-xs hide-md hide-lg\">.col-100-xs</span>\n        <span class=\"hide-xs block-md hide-lg\">.col-50-md</span>\n        <span class=\"hide-xs block-lg\">.col-25-lg</span>\n      </div>\n      <div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\">\n        <span class=\"block-xs hide-md hide-lg\">.col-100-xs</span>\n        <span class=\"hide-xs block-md hide-lg\">.col-50-md</span>\n        <span class=\"hide-xs block-lg\">.col-25-lg</span>\n      </div>\n      <div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\">\n        <span class=\"block-xs hide-md hide-lg\">.col-100-xs</span>\n        <span class=\"hide-xs block-md hide-lg\">.col-50-md</span>\n        <span class=\"hide-xs block-lg\">.col-25-lg</span>\n      </div>\n      <div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\">\n        <span class=\"block-xs hide-md hide-lg\">.col-100-xs</span>\n        <span class=\"hide-xs block-md hide-lg\">.col-50-md</span>\n        <span class=\"hide-xs block-lg\">.col-25-lg</span>\n      </div>\n    </div>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"col-container\"&gt;\n    &lt;div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\"&gt;\n      &lt;span class=\"block-xs hide-md hide-lg\"&gt;.col-100-xs&lt;/span&gt;\n      &lt;span class=\"hide-xs block-md hide-lg\"&gt;.col-50-md&lt;/span&gt;\n      &lt;span class=\"hide-xs block-lg\"&gt;.col-25-lg&lt;/span&gt;\n    &lt;/div&gt;\n    &lt;div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\"&gt;\n      &lt;span class=\"block-xs hide-md hide-lg\"&gt;.col-100-xs&lt;/span&gt;\n      &lt;span class=\"hide-xs block-md hide-lg\"&gt;.col-50-md&lt;/span&gt;\n      &lt;span class=\"hide-xs block-lg\"&gt;.col-25-lg&lt;/span&gt;\n    &lt;/div&gt;\n    &lt;div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\"&gt;\n      &lt;span class=\"block-xs hide-md hide-lg\"&gt;.col-100-xs&lt;/span&gt;\n      &lt;span class=\"hide-xs block-md hide-lg\"&gt;.col-50-md&lt;/span&gt;\n      &lt;span class=\"hide-xs block-lg\"&gt;.col-25-lg&lt;/span&gt;\n    &lt;/div&gt;\n    &lt;div class=\"col col-100-xs col-50-md col-25-lg border-dark-xs\"&gt;\n      &lt;span class=\"block-xs hide-md hide-lg\"&gt;.col-100-xs&lt;/span&gt;\n      &lt;span class=\"hide-xs block-md hide-lg\"&gt;.col-50-md&lt;/span&gt;\n      &lt;span class=\"hide-xs block-lg\"&gt;.col-25-lg&lt;/span&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;</code></pre>\n    </div>\n\n    <h2 id=\"Breakpoints\" class=\"guide-content-subtitle m-b-1-xs\">Breakpoints</h2>\n    <p class=\"m-b-1-xs\">Everything in Lens is built with a mobile first approach. This means that if you want the same style across all breakpoints you'd use the <code>-xs</code> suffix. Here's a rundown of which breakpoint applies to which suffix.</p>\n    <table class=\"table-border-rows w-full-xs m-b-4-xs\" style=\"text-align: left\">\n      <thead>\n        <th>Suffixes</th>\n        <th>Breakpoint</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td><code>-xs</code></td>\n          <td><code>@media screen</code></td>\n        </tr>\n        <tr>\n          <td><code>-sm</code></td>\n          <td><code>@media (min-width: 480px)</code></td>\n        </tr>\n        <tr>\n          <td><code>-md</code></td>\n          <td><code>@media (min-width: 680px)</code></td>\n        </tr>\n        <tr>\n          <td><code>-lg</code></td>\n          <td><code>@media (min-width: 960px)</code></td>\n        </tr>\n        <tr>\n          <td><code>-xl</code></td>\n          <td><code>@media (min-width: 1140px)</code></td>\n        </tr>\n      </tbody>\n    </table>\n\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">What can be suffixed?</h2>\n    <p class=\"m-b-1-xs\">We apply suffixes to a lot of classes within Lens, but not so many that we end up creating a bunch of wasted code. We decided that this list of utilities, text and grid classes gave us the most flexibility without going overboard.</p>\n    <table class=\"table-border-rows w-full-xs\" style=\"text-align: left\">\n      <thead>\n        <th>Element</th>\n        <th>Class Names</th>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Text Sizing</td>\n          <td><code>.text-[n]-xs</code></td>\n        </tr>\n        <tr>\n          <td>Text Alignment</td>\n          <td><code>.text-left-xs</code>, <code>.text-right-xs</code>, <code>.text-center-xs</code>, <code>.text-justify-xs</code></td>\n        </tr>\n        <tr>\n          <td>Display</td>\n          <td><code>.hide-xs</code>, <code>.block-xs</code>, <code>.inline-xs</code>, <code>.inline-block-xs</code></td>\n        </tr>\n        <tr>\n          <td>Floats</td>\n          <td><code>.float-l-xs</code>, <code>.float-r-xs</code>, <code>.float-none-xs</code></td>\n        </tr>\n        <tr>\n          <td>Overflow</td>\n          <td><code>.overflow-hidden-xs</code>, <code>.overflow-scroll-xs</code>, <code>.overflow-auto-xs</code>, <code>.overflow-visible-xs</code></td>\n        </tr>\n        <tr>\n          <td>Margin</td>\n          <td><code>.m-[n]-xs</code>, <code>.m-t-[n]-xs</code>, <code>.m-b-[n]-xs</code>, <code>.m-l-[n]-xs</code>, <code>.m-r-[n]-xs</code></td>\n        </tr>\n        <tr>\n          <td>Padding</td>\n          <td><code>.p-[n]-xs</code>, <code>.p-t-[n]-xs</code>, <code>.p-b-[n]-xs</code>, <code>.p-l-[n]-xs</code>, <code>.p-r-[n]-xs</code></td>\n        </tr>\n        <tr>\n          <td>Position</td>\n          <td><code>.relative-xs</code>, <code>.absolute-xs</code>, <code>.fixed-xs</code>, <code>.static-xs</code></td>\n        </tr>\n        <tr>\n          <td>Position Spacing</td>\n          <td><code>.pos-[n]-xs</code>, <code>.pos-t-[n]-xs</code>, <code>.pos-b-[n]-xs</code>, <code>.pos-l-[n]-xs</code>, <code>.pos-r-[n]-xs</code></td>\n        </tr>\n        <tr>\n          <td>Z-Index</td>\n          <td><code>.z-[n]-xs</code></td>\n        </tr>\n        <tr>\n          <td>Borders</td>\n          <td><code>.border-xs</code>, <code>.border-[shade]-xs</code>, <code>.border-[side]-xs</code>, <code>.border-[side]-[shade]-xs</code></td>\n        </tr>\n        <tr>\n          <td>Buttons</td>\n          <td><code>.button--[size]-xs</code></td>\n        </tr>\n        <tr>\n          <td>Grid</td>\n          <td><code>.col-[n]-xs</code></td>\n        </tr>\n        <tr>\n          <td>Grid Offsets</td>\n          <td><code>.col-offset-[n]-xs</code></td>\n        </tr>\n        <tr>\n          <td>Block Grid</td>\n          <td><code>.block-[n]-xs</code></td>\n        </tr>\n        <tr>\n          <td>Flex Box</td>\n          <td><code>.flex-xs</code></td>\n        </tr>\n        <tr>\n          <td>Width and Height</td>\n          <td><code>.w-full-xs</code>, <code>.w-fit-xs</code>, <code>.w-auto-xs</code>, <code>.h-full-xs</code></td>\n        </tr>\n        <tr>\n          <td>Veritcal Alignment</td>\n          <td><code>.align-top-xs</code>, <code>.align-middle-xs</code>, <code>.align-bottom-xs</code></td>\n        </tr>\n        <tr>\n          <td>Rotation</td>\n          <td><code>.rotate-[n]-xs</code></td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>\n\n";


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.atoms.tables", []);

	m.controller("TablesController", function($scope) {
	  return this;
	});

	m.directive("tables", function() {
	  return {
	    controller: "TablesController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section>\n    <h2 id=\"Rows\" class=\"guide-content-subtitle m-b-1-xs\">Just A Regular Table</h2>\n    <p class=\"m-b-2-xs\">Use a regular table by using a <code>&lt;table&gt;&lt;/table&gt;</code> element and not adding any extra table classes. Additionally, the width of columns in tables can be set by using Lens's <a href=\"grid.html\">grid classes</a>.</p>\n\n    <table class=\"m-b-2-xs col-100-lg\">\n      <tbody>\n        <tr>\n          <th class=\"col-80-xs\">Heading 1</th>\n          <th>Heading 2</th>\n          <th>Heading 3</th>\n        </tr>\n        <tr>\n          <td>hello</td>\n          <td>it's</td>\n          <td>me</td>\n        </tr>\n        <tr>\n          <td>I</td>\n          <td>was</td>\n          <td>wondering</td>\n        </tr>\n        <tr>\n          <td>if</td>\n          <td>after</td>\n          <td>all</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;table&gt;\n  &lt;tbody&gt;\n    &lt;tr&gt;\n      &lt;th class=\"col-80-xs\"&gt;Heading 1&lt;/th&gt;\n      &lt;th&gt;Heading 2&lt;/th&gt;\n      &lt;th&gt;Heading 3&lt;/th&gt;\n    &lt;/tr&gt;\n    &lt;tr&gt;\n      &lt;td&gt;hello&lt;/td&gt;\n      &lt;td&gt;it's&lt;/td&gt;\n      &lt;td&gt;me&lt;/td&gt;\n    &lt;/tr&gt;\n    &lt;tr&gt;\n      &lt;td&gt;I&lt;/td&gt;\n      &lt;td&gt;was&lt;/td&gt;\n      &lt;td&gt;wondering&lt;/td&gt;\n    &lt;/tr&gt;\n    &lt;tr&gt;\n      &lt;td&gt;if&lt;/td&gt;\n      &lt;td&gt;after&lt;/td&gt;\n      &lt;td&gt;all&lt;/td&gt;\n    &lt;/tr&gt;\n  &lt;/tbody&gt;\n&lt;/table&gt;</code></pre>\n    </div>\n\n\n    <h2 id=\"Rows\" class=\"guide-content-subtitle m-b-1-xs\">Striped Table</h2>\n    <p class=\"m-b-2-xs\">Use a striped table by adding the class <code>.table-striped</code>. Additionally, the width of columns in tables can be set by using Lens's <a href=\"grid.html\">grid classes</a>.</p>\n\n    <table class=\"table-striped m-b-2-xs col-100-lg\">\n      <tbody>\n        <tr>\n          <th class=\"col-80-xs\">Heading 1</th>\n          <th>Heading 2</th>\n          <th>Heading 3</th>\n        </tr>\n        <tr>\n          <td>hello</td>\n          <td>it's</td>\n          <td>me</td>\n        </tr>\n        <tr>\n          <td>I</td>\n          <td>was</td>\n          <td>wondering</td>\n        </tr>\n        <tr>\n          <td>if</td>\n          <td>after</td>\n          <td>all</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;table class=\"table-striped\"&gt;\n  &lt;tbody&gt;\n    &lt;tr&gt;\n      &lt;th class=\"col-80-xs\"&gt;Heading 1&lt;/th&gt;\n      &lt;th&gt;Heading 2&lt;/th&gt;\n      &lt;th&gt;Heading 3&lt;/th&gt;\n    &lt;/tr&gt;\n    &lt;tr&gt;\n      &lt;td&gt;hello&lt;/td&gt;\n      &lt;td&gt;it's&lt;/td&gt;\n      &lt;td&gt;me&lt;/td&gt;\n    &lt;/tr&gt;\n    &lt;tr&gt;\n      &lt;td&gt;I&lt;/td&gt;\n      &lt;td&gt;was&lt;/td&gt;\n      &lt;td&gt;wondering&lt;/td&gt;\n    &lt;/tr&gt;\n    &lt;tr&gt;\n      &lt;td&gt;if&lt;/td&gt;\n      &lt;td&gt;after&lt;/td&gt;\n      &lt;td&gt;all&lt;/td&gt;\n    &lt;/tr&gt;\n  &lt;/tbody&gt;\n&lt;/table&gt;</code></pre>\n    </div>\n\n\n    <h2 id=\"Default\" class=\"guide-content-subtitle m-b-1-xs\">Content Table</h2>\n    <p class=\"m-b-2-xs\">Use our content table style with the class <code>.table-content</code>. Use <code>.sub-text</code> for any sub text (like a description). Additionally, the width of columns in tables can be set by using Lens's <a href=\"grid.html\">grid classes</a>.</p>\n\n    <table class=\"table-content m-b-2-xs col-100-lg\">\n      <tbody>\n        <tr>\n          <th class=\"col-80-xs\">Heading 1</th>\n          <th>Heading 2</th>\n          <th>Heading 3</th>\n        </tr>\n        <tr>\n          <td>hello</td>\n          <td>it's</td>\n          <td>me</td>\n        </tr>\n        <tr>\n          <td>\n            <div>here</div>\n            <div class=\"sub-text\">A description or something.</div>\n          </td>\n          <td>I</td>\n          <td>am</td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"guide-code m-b-4-xs\">\n  <pre><code class=\"language-html\">&lt;table class=\"table-content\"&gt;\n  &lt;tbody&gt;\n    &lt;tr&gt;\n      &lt;th class=\"col-80-xs\"&gt;Heading 1&lt;/th&gt;\n      &lt;th&gt;Heading 2&lt;/th&gt;\n      &lt;th&gt;Heading 3&lt;/th&gt;\n    &lt;/tr&gt;\n    &lt;tr&gt;\n      &lt;td&gt;hello&lt;/td&gt;\n      &lt;td&gt;it's&lt;/td&gt;\n      &lt;td&gt;me&lt;/td&gt;\n    &lt;/tr&gt;\n    &lt;tr&gt;\n      &lt;td&gt;\n        &lt;div&gt;here&lt;/div&gt;\n        &lt;div class=\"sub-text\"&gt;A description or something.&lt;/div&gt;\n      &lt;/td&gt;\n      &lt;td&gt;I&lt;/td&gt;\n      &lt;td&gt;am&lt;/td&gt;\n    &lt;/tr&gt;\n  &lt;/tbody&gt;\n&lt;/table&gt;</code></pre>\n  </div>\n\n  </section>\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>\n\n";


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.atoms.typography", []);

	m.controller("TypographyController", function($scope) {
	  return this;
	});

	m.directive("typography", function() {
	  return {
	    controller: "TypographyController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section id=\"Headers\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Headers and Text Sizing</h2>\n    <p class=\"guide-content-description m-b-2-xs\">Headers are built using typical html elements <code>h1 - h6</code>. To give ourselves a bit more control, we've created utility classes for applying different sizes to the default elements so that we can control markup hierarchy while still applying the sizes we want visually (<code>.text-0-xs</code>, <code>.text-1-xs</code>, <code>.text-2-xs</code>, <code>.text-3-xs</code>, <code>.text-4-xs</code>, <code>.text-5-xs</code>, <code>.text-6-xs</code>, <code>.text-7-xs</code>). By default, headers have no margin/padding applied to them and are bold.</p>\n\n    <div><code>h1, .text-1-xs</code></div>\n    <div class=\"m-b-2-xs\"><h1>Looker is located in Santa Cruz, CA.</h1></div>\n\n    <div><code>h2, .text-2-xs</code></div>\n    <div class=\"m-b-2-xs\"><h2>Looker is located in Santa Cruz, CA.</h2></div>\n\n    <div><code>h3, .text-3-xs</code></div>\n    <div class=\"m-b-2-xs\"><h3>Looker is located in Santa Cruz, CA.</h3></div>\n\n    <div><code>h4, .text-4-xs</code></div>\n    <div class=\"m-b-2-xs\"><h4>Looker is located in Santa Cruz, CA.</h4></div>\n\n    <div><code>h5, .text-5-xs</code></div>\n    <div class=\"m-b-2-xs\"><h5>Looker is located in Santa Cruz, CA.</h5></div>\n\n    <div><code>h6, .text-6-xs</code></div>\n    <div class=\"m-b-2-xs\"><h6>Looker is located in Santa Cruz, CA.</h6></div>\n\n    <div><code>.text-7-xs</code></div>\n    <div class=\"m-b-2-xs\"><p class=\"text-7-xs\">Looker is located in Santa Cruz, CA.</p></div>\n\n    <div class=\"guide-code\">\n  <pre><code class=\"language-html\">&lt;h1 class=\"text-0-xs\"&gt;Looker is located in Santa Cruz, CA.&lt;/h1&gt;\n&lt;p class=\"text-0-xs\"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;\n&lt;h1&gt;Looker is located in Santa Cruz, CA.&lt;/h1&gt;\n&lt;p class=\"text-1-xs\"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;\n&lt;h2&gt;Looker is located in Santa Cruz, CA.&lt;/h2&gt;\n&lt;p class=\"text-2-xs\"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;\n&lt;h3&gt;Looker is located in Santa Cruz, CA.&lt;/h3&gt;\n&lt;p class=\"text-3-xs\"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;\n&lt;h4&gt;Looker is located in Santa Cruz, CA.&lt;/h4&gt;\n&lt;p class=\"text-4-xs\"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;\n&lt;h5&gt;Looker is located in Santa Cruz, CA.&lt;/h5&gt;\n&lt;p class=\"text-5-xs\"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;\n&lt;h6&gt;Looker is located in Santa Cruz, CA.&lt;/h6&gt;\n&lt;p class=\"text-6-xs\"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;\n&lt;p class=\"text-7-xs\"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;</code></pre></code></pre>\n    </div>\n\n    <div class=\"border-dark-xs m-b-1-xs p-1-xs\">\n      <p class=\"text-6-xs text-5-sm text-4-md text-3-lg\">\n        <span class=\"inline-block-xs hide-sm\">.text-6-xs</span>\n        <span class=\"hide-xs hide-md inline-block-sm\">.text-5-sm</span>\n        <span class=\"hide-xs hide-lg inline-block-md\">.text-4-md</span>\n        <span class=\"hide-xs inline-block-lg\">.text-3-lg</span>\n        <span class=\"m-r-1-xs p-r-1-xs border-r-dark-xs\"></span>\n        Resize your browser to see this text size change.\n      </p>\n    </div>\n    <div class=\"guide-code m-b-3-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"border-dark-xs m-b-3-xs p-1-xs\"&gt;\n  &lt;p class=\"text-6-xs text-5-sm text-4-md text-3-lg\"&gt;\n    &lt;span class=\"inline-block-xs hide-sm\"&gt;.text-6-xs&lt;/span&gt;\n    &lt;span class=\"hide-xs hide-md inline-block-sm\"&gt;.text-5-sm&lt;/span&gt;\n    &lt;span class=\"hide-xs hide-lg inline-block-md\"&gt;.text-4-md&lt;/span&gt;\n    &lt;span class=\"hide-xs inline-block-lg\"&gt;.text-3-lg&lt;/span&gt;\n    &lt;span class=\"m-r-1-xs p-r-1-xs border-r-dark-xs\"&gt;&lt;/span&gt;\n    Resize your browser to see this text size change.\n  &lt;/p&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n  </section>\n\n\n\n  <section id=\"Emphasis\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Emphasis</h2>\n    <p class=\"m-b-2-xs\">Using the following tags will add some emphasis to your text elements</p>\n\n    <div><code>.regular</code></div>\n    <p class=\"bold\"><span class=\"regular\">Looker is located in Santa Cruz, CA.</p>\n    <div class=\"guide-code m-b-3-xs\">\n  <pre><code class=\"language-html\">&lt;p class=\"bold\"&gt;&lt;span class=\"regular\"&gt;Looker is&lt;/span&gt; an online school that teaches you code&lt;/p&gt;</code></pre>\n    </div>\n\n    <div><code>strong, .bold</code></div>\n    <p class=\"bold\">Looker is located in Santa Cruz, CA.</p>\n    <div class=\"guide-code m-b-3-xs\">\n  <pre><code class=\"language-html\">&lt;p class=\"bold\"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;</code></pre>\n    </div>\n\n    <div><code>em, .italic</code></div>\n    <p class=\"italic\">Looker is located in Santa Cruz, CA.</p>\n    <div class=\"guide-code m-b-3-xs\">\n  <pre><code class=\"language-html\">&lt;p class=\"italic\"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;</code></pre>\n    </div>\n\n    <div><code>.caps</code></div>\n    <p class=\"caps\">Looker is located in Santa Cruz, CA.</p>\n    <div class=\"guide-code m-b-3-xs\">\n  <pre><code class=\"language-html\">&lt;p class=\"caps\"&gt;Looker is located in Santa Cruz, CA.&lt;/p&gt;</code></pre>\n    </div>\n  </section>\n\n\n\n  <section id=\"Alignment\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Text Alignment</h2>\n    <p class=\"m-b-2-xs\">Use the following classes to control text alignment in your layouts.</p>\n\n    <div><code>.text-left-xs</code></div>\n    <div class=\"p-2-xs border-dark-xs\">\n      <p class=\"text-left-xs\">Left aligned text</p>\n    </div>\n    <div class=\"guide-code m-b-3-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"p-2-xs border-dark-xs\"&gt;\n  &lt;p class=\"text-left-xs\"&gt;Left aligned text&lt;/p&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <div><code>.text-right-xs</code></div>\n    <div class=\"p-2-xs border-dark-xs\">\n      <p class=\"text-right-xs\">Right aligned text</p>\n    </div>\n    <div class=\"guide-code m-b-3-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"p-2-xs border-dark-xs\"&gt;\n  &lt;p class=\"text-right-xs\"&gt;Right aligned text&lt;/p&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <div><code>.text-center-xs</code></div>\n    <div class=\"p-2-xs border-dark-xs\">\n      <p class=\"text-center-xs\">Center aligned text</p>\n    </div>\n    <div class=\"guide-code m-b-3-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"p-2-xs border-dark-xs\"&gt;\n  &lt;p class=\"text-center-xs\"&gt;Center aligned text&lt;/p&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n\n    <div><code>.text-justify-xs</code></div>\n    <div class=\"p-2-xs border-dark-xs\">\n      <p class=\"text-justify-xs\">Justified aligned text. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>\n    </div>\n    <div class=\"guide-code m-b-3-xs\">\n  <pre><code class=\"language-html\">&lt;div class=\"p-2-xs border-dark-xs\"&gt;\n  &lt;p class=\"text-justify-xs\"&gt;Justified aligned text ...&lt;/p&gt;\n&lt;/div&gt;</code></pre>\n    </div>\n  </section>\n\n\n\n  <section id=\"Lists\">\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Lists</h2>\n    <p class=\"m-b-2-xs\">Lens comes with basic styles for unordered and ordered lists. You can remove the styling on either of them by using the class, <code>.list-unstyled</code>.</p>\n\n    <div class=\"m-b-2-xs\">\n      <div><code>ul</code></div>\n      <ul>\n        <li>List item 1</li>\n        <li>List item 2 </li>\n        <li>List item 3</li>\n        <li>List item 4</li>\n      </ul>\n    </div>\n\n    <div class=\"m-b-2-xs\">\n      <div><code>ol</code></div>\n      <ol>\n        <li>List item 1</li>\n        <li>List item 2 </li>\n        <li>List item 3</li>\n        <li>List item 4</li>\n      </ol>\n    </div>\n\n    <div class=\"m-b-2-xs\">\n      <div><code>.list-unstyled</code></div>\n      <ul class=\"list-unstyled\">\n        <li>List item 1</li>\n        <li>List item 2 </li>\n        <li>List item 3</li>\n        <li>List item 4</li>\n      </ul>\n    </div>\n\n    <div class=\"guide-code\">\n  <pre><code class=\"language-html\">&lt;ul&gt;\n  &lt;li&gt;List item 1&lt;/li&gt;\n  &lt;li&gt;List item 2 &lt;/li&gt;\n  &lt;li&gt;List item 3&lt;/li&gt;\n  &lt;li&gt;List item 4&lt;/li&gt;\n&lt;/ul&gt;\n\n&lt;ol&gt;\n  &lt;li&gt;List item 1&lt;/li&gt;\n  &lt;li&gt;List item 2 &lt;/li&gt;\n  &lt;li&gt;List item 3&lt;/li&gt;\n  &lt;li&gt;List item 4&lt;/li&gt;\n&lt;/ol&gt;\n\n&lt;ul class=\"list-unstyled\"&gt;\n  &lt;li&gt;List item 1&lt;/li&gt;\n  &lt;li&gt;List item 2 &lt;/li&gt;\n  &lt;li&gt;List item 3&lt;/li&gt;\n  &lt;li&gt;List item 4&lt;/li&gt;\n&lt;/ul&gt;</code></pre>\n    </div>\n  </section>\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>\n\n";


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.getting_started", []);

	m.controller("GettingStartedController", function($scope) {
	  return this;
	});

	m.directive("gettingStarted", function() {
	  return {
	    controller: "GettingStartedController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n\n  <section id=\"getting-started\">\n    <p class=\"guide-content-description m-b-4-xs\">Lens includes resources to create user interfaces consistent with the Looker brand and best practices. Here are few things to consider before you start using Lens on your next project.</p>\n\n    <h2 id=\"Markup\" class=\"guide-content-subtitle m-b-2-xs\">Markup Considerations</h2>\n    <p class=\"m-b-4-xs\">Lens contains a lot of utility classes that can be stacked up to quickly create layouts and components. While it may look a little messier than you are used to on the markup side of things, this saves us a ton of extra CSS. These classes also make it much more clear what styles are applied to an element to anyone looking at the markup. When building layouts and such with Lens, make sure you don't apply extra styles on containers and grid columns. Anything needing styles outside of utility classes should typically be nested inside those types of containers.</p>\n\n    <h2 id=\"BEM\" class=\"guide-content-subtitle m-b-2-xs\">BEM Class Naming</h2>\n    <p class=\"m-b-2-xs\">BEM is a well-known method of naming components — block, element, modifier. For those unfamiliar or who need a quick refresh, let’s briefly look at how BEM works. As an example, we’ll build a sandwich component.</p>\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Block</h3>\n    <p class=\"m-b-2-xs\">A block represents the main component. If you were building a tasty sandwich, the class name would be <code>.sandwich</code>. All the properties that would be shared by all different sandwiches would be included within <code>.sandwich</code>.</p>\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Element</h3>\n    <p class=\"m-b-2-xs\">An element is part of the main component and its class name is separated by two underscores. The bread of the sandwich would be reprented by the class <code>.sandwich__bread</code>. The cheese would be <code>.sandwich__cheese</code>. Be on the look out for smaller component possibilities within a larger component. If we were to take a look at sandwich condiments, which can be used on other things outside of sandwiches. We'd want to avoid a class name such as <code>.sandwich__condiment__mayo</code>. We could use something like <code>.sandwich__condiment--mayo</code> because a single dash doesn't represent anything in BEM. But, since condiments can be used on things other than sandwiches, we could make this a component in an of itself. In that case, we could name it <code>.condiment__mayo</code> and use that inside the sandwich element.</p>\n    <h3 class=\"guide-content-h3 m-b-1-xs\">Modifier</h3>\n    <p class=\"m-b-2-xs\">A modifier is a component or element variation that only slightly differes from the main element. The variation can be applied to the entire element or just a part of it. Since the properties that should apply to every sandwich are placed on the main <code>.sandwich</code> class, all sandwiches receive the <code>.sandwich</code> class as the base. If there is a variation of a sandwich &mdash; maybe it has wheat bread &mdash; the <code>.sandwich--wheat</code> class would be added the component in addition to the <code>.sandwich</code> class.</p>\n    <p class=\"m-b-4-xs\">If the sandwich has swiss cheese, a variation can be placed on the cheese element itself, like <code>.sandwich__cheese--swiss</code>.</p>\n\n    <h2 id=\"Utilities\" class=\"guide-content-subtitle m-b-2-xs\">Utility Classes</h2>\n    <p class=\"m-b-4-xs\">The one place we diverge from BEM is within our utility classes. These are immutable classes that use <code>!important</code> to ensure they never break. And for the most part are classes that only apply a single property, which is why we felt okay using the important declaration on them. Lens's utility classes should be used whenever possible to create the layout and style of a page or element. Each utility class end with a breakpoint suffix. Since Lens is built mobile-first, you'd apply the <code>-xs</code> suffix to make those styles work across all breakpoints. To modify those styles at a larger breakpoint, you'd apply an additional utility class that employs one of the other suffixes, such as <code>-sm</code>, <code>-md</code>, <code>-lg</code>, <code>-xl</code>. Whichever the highest suffix is, those styles will apply all the way up through any screen size. To learn more about these suffixes, take a gander at the <a href=\"responsive.html\">Responsive</a> page.</p>\n\n    <h2 id=\"Mixins\" class=\"guide-content-subtitle m-b-2-xs\">Mixins, Variables and Functions</h2>\n    <p class=\"m-b-4-xs\">Lens comes with different mixins, variables and functions that make it easy to apply its styles to elements or components that aren't contained within Lens. To learn more about the Sassy goodness within Lens, read through the <a href=\"sass.html\">Sass</a> page.</p>\n\n  </section>\n\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>\n";


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.index", []);

	m.controller("IndexController", function($scope) {
	  return this;
	});

	m.directive("index", function() {
	  return {
	    controller: "IndexController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section id=\"index\">\n    <p class=\"guide-content-description text-4-xs m-b-4-xs\">Lens is a front-end framework and style guide that is used internally at Looker to build our app. We've architected it in a way that gives the entire Engineering team a way to quickly prototype or write front-end code. It contains atomic helper classes and components that ensure everything we build is consistent and flexible. For most thing we build, additional CSS won't be necessary. Lens gets the entire Engineering team to speak the same language, whether engineer or designer.</p>\n\n    <h2 class=\"guide-content-subtitle m-b-2-xs\">Why build our own Design System?</h2>\n    <div class=\"col-container col-gutters m-b-4-xs\">\n      <div class=\"col col-50-md col-25-lg\">\n        <h3 class=\"guide-content-h3 m-b-1-xs\">Consistency</h3>\n        <p>With well defined documentation, everyone using Lens will be on the same page. Nobody will be wondering what class to create and what styles to duplicate because it's all contained within Lens.</p>\n      </div>\n      <div class=\"col col-50-md col-25-lg\">\n        <h3 class=\"guide-content-h3 m-b-1-xs\">Efficiency</h3>\n        <p>No longer waste time trying to get a layout to work by adding custom CSS. Let the atomic utility classes within Lens make your life easier again. Projects will get done quicker than ever.</p>\n      </div>\n      <div class=\"col col-50-md col-25-lg\">\n        <h3 class=\"guide-content-h3 m-b-1-xs\">Cleanliness</h3>\n        <p>Goodbye CSS bloat, hello clean code. Without a framework we end up duplicating various styles across multiple selectors that are specific to pages within our app. Lens lets you apply classes to markup and be done.</p>\n      </div>\n      <div class=\"col col-50-md col-25-lg\">\n        <h3 class=\"guide-content-h3 m-b-1-xs\">Rapidness</h3>\n        <p>Designers and Engineers can both create rapid prototypes to help get features off the ground. From there, its easy to change how things look and feel by just making simple changes to your markup.</p>\n      </div>\n    </div>\n\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Wanna get going?</h2>\n    <p class=\"m-b-2-xs\">Before diving into using Lens, make sure you familiarize yourself with a few guidelines and best practices.</p>\n    <a class=\"button button--primary button--large-xs m-b-4-xs w-full-xs w-auto-md\" href=\"getting-started.html\">Get Started</a>\n\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Installation</h2>\n    <p class=\"m-b-4-xs\">In your project directory: <code>coming soon</code></p>\n\n    <h2 class=\"guide-content-subtitle m-b-1-xs\">Download</h2>\n    <a href=\"https://github.com/looker/lens/archive/v0.8.0.zip\" class=\"button button--large-xs w-full-xs w-auto-lg\">Source Files</a>\n    <a href=\"http://looker.github.io/lens/css/Lens.css\" class=\"button button--large-xs w-full-xs w-auto-lg\">Compiled CSS</a>\n    <a href=\"http://looker.github.io/lens/css/Lens.min.css\" class=\"button button--large-xs w-full-xs w-auto-lg\">Compiled CSS (minified)</a>\n\n  </section>\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>";


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.login", []);

	m.controller("LoginController", function($scope) {
	  return this;
	});

	m.directive("login", function() {
	  return {
	    controller: "LoginController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"login-header brand-bg-gray\">\n  <div class=\"login-header-wrap\">\n    <h1 class=\"login-name color-white\">Lens</h1>\n    <p class=\"login-copy color-white\">The Looker Design System</p>\n  </div>\n</header>\n\n<section class=\"login-auth\">\n  <div class=\"login-auth-wrap\">\n    <h1 class=\"m-b-2-xs\">Login to Lens</h1>\n    <a href=\"/api/saml/login\" target=\"_self\" class=\"button button--primary\">Authenticate via Lookery</a>\n  </div>\n</section>";


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.release_notes", []);

	m.controller("ReleaseNotesController", function($scope) {
	  return this;
	});

	m.directive("releaseNotes", function() {
	  return {
	    controller: "ReleaseNotesController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section id=\"index\">\n    <div class=\"col-container border-b-xs p-b-2-xs\">\n      <div class=\"col col-10-md\">\n        <p class=\"text-color-light\">x.x.x</p>\n      </div>\n      <div class=\"col col-90-md\">\n        <p class=\"bold\">[Release Title]</p>\n        <p class=\"text-6-xs text-color-light\">[Release Date]</p>\n        <ul class=\"m-t-1-xs text-6-xs\">\n          <li>Some bullets about release</li>\n        </ul>\n      </div>\n    </div>\n  </section>\n  \n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>\n";


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.lens_main", []);

	m.controller("LensMainController", function($scope, $state) {
	  $scope.$watch(function() {
	    return $state.current.title;
	  }, function() {
	    $scope.title = $state.current.title;
	    return Prism.highlightAll();
	  });
	  return this;
	});

	m.directive("lensMain", function() {
	  return {
	    controller: "LensMainController",
	    restrict: "E",
	    scope: {},
	    template: template,
	    transclude: true
	  };
	});

	template = "<main class=\"guide-main\" role=\"main\">\n  <div class=\"guide-content\">\n\n    <h1 class=\"guide-content-title border-b-xs p-b-05-xs m-b-2-xs\">{{ title }}</h1>\n\n    <div class=\"col-container\">\n      <div class=\"col col-80-lg\">\n        <ng-transclude></ng-transclude>\n      </div>\n    </div>\n\n  </div>\n</main>";


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.main_nav", []);

	m.controller("MainNavController", function($scope) {
	  $scope.toggleAtomsNav = (function(_this) {
	    return function() {
	      $scope.showAtomsNav = !$scope.showAtomsNav;
	      if ($scope.showAtomsNav) {
	        _this.deactivate();
	        return _this.activate("atoms");
	      } else {
	        return _this.deactivate();
	      }
	    };
	  })(this);
	  return this;
	});

	m.directive("mainNav", function() {
	  return {
	    controller: "MainNavController",
	    restrict: "E",
	    scope: {},
	    template: template,
	    link: function(scope, $el, attrs, ctrl) {
	      $el.find(".guide-navigation-link").on("click", function() {
	        if ($(this).hasClass("guide-navigation-link-child")) {
	          return;
	        }
	        if ($(this).attr("id") !== "atoms" && scope.showAtomsNav) {
	          return scope.toggleAtomsNav();
	        }
	      });
	      ctrl.deactivate = function() {
	        $el.find(".guide-navigation-link").removeClass("active");
	      };
	      return ctrl.activate = function(id) {
	        $el.find("#" + id).addClass("active");
	      };
	    }
	  };
	});

	template = "<div id=\"guide_navigation\" class=\"guide-navigation\">\n  <nav id=\"navigation\" role=\"navigation\" tabindex=\"-1\">\n    <ul class=\"guide-navigation-list\">\n      <li class=\"guide-navigation-item\">\n        <a ui-sref=\"getting-started\" ui-sref-active=\"active\" class=\"guide-navigation-link\">Getting Started</a>\n      </li>\n      <li class=\"guide-navigation-item\">\n        <a ui-sref=\"sass\" ui-sref-active=\"active\" class=\"guide-navigation-link\">Sass</a>\n      </li>\n      <li class=\"guide-navigation-item\">\n        <a ui-sref=\"responsive\" ui-sref-active=\"active\" class=\"guide-navigation-link\">Responsive</a>\n      </li>\n      <li class=\"guide-navigation-item guide-navigation-item-parent\">\n        <a id=\"atoms\" class=\"guide-navigation-link\"ng-click=\"toggleAtomsNav()\">\n          Atoms\n          <span class=\"guide-navigation-icon\"></span>\n        </a>\n        <ul ng-show=\"showAtomsNav\" class=\"guide-navigation-list-child\">\n          <li class=\"guide-navigation-item-child\">\n            <a ui-sref=\"typography\" ui-sref-active=\"active\" class=\"guide-navigation-link guide-navigation-link-child\">Typography</a>\n          </li>\n          <li class=\"guide-navigation-item-child\">\n            <a ui-sref=\"grid\" ui-sref-active=\"active\" class=\"guide-navigation-link guide-navigation-link-child\">Grid</a>\n          </li>\n          <li class=\"guide-navigation-item-child\">\n            <a ui-sref=\"block-grid\" ui-sref-active=\"active\" class=\"guide-navigation-link guide-navigation-link-child\">Block Grid</a>\n          </li>\n          <li class=\"guide-navigation-item-child\">\n            <a ui-sref=\"layout\" ui-sref-active=\"active\" class=\"guide-navigation-link guide-navigation-link-child\">Layout</a>\n          </li>\n          <li class=\"guide-navigation-item-child\">\n            <a ui-sref=\"flexbox\" ui-sref-active=\"active\" class=\"guide-navigation-link guide-navigation-link-child\">Flexbox</a>\n          </li>\n          <li class=\"guide-navigation-item-child\">\n            <a ui-sref=\"buttons\" ui-sref-active=\"active\" class=\"guide-navigation-link guide-navigation-link-child\">Buttons</a>\n          </li>\n          <li class=\"guide-navigation-item-child\">\n            <a ui-sref=\"colors\" ui-sref-active=\"active\" class=\"guide-navigation-link guide-navigation-link-child\">Colors</a>\n          </li>\n          <li class=\"guide-navigation-item-child\">\n            <a ui-sref=\"borders\" ui-sref-active=\"active\" class=\"guide-navigation-link guide-navigation-link-child\">Borders</a>\n          </li>\n          <li class=\"guide-navigation-item-child\">\n            <a ui-sref=\"forms\" ui-sref-active=\"active\" class=\"guide-navigation-link guide-navigation-link-child\">Forms</a>\n          </li>\n          <li class=\"guide-navigation-item-child\">\n            <a ui-sref=\"icons\" ui-sref-active=\"active\" class=\"guide-navigation-link guide-navigation-link-child\">Icons</a>\n          </li>\n          <li class=\"guide-navigation-item-child\">\n            <a ui-sref=\"tables\" ui-sref-active=\"active\" class=\"guide-navigation-link guide-navigation-link-child\">Tables</a>\n          </li>\n        </ul>\n      </li>\n      <li class=\"guide-navigation-item\">\n        <a ui-sref=\"release-notes\" ui-sref-active=\"active\" class=\"guide-navigation-link\">Release Notes</a>\n      </li>\n    </ul>\n  </nav>\n</div>";


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	var m, template;

	m = angular.module("lens.sass", []);

	m.controller("SassController", function($scope) {
	  return this;
	});

	m.directive("sass", function() {
	  return {
	    controller: "SassController",
	    restrict: "E",
	    scope: {},
	    template: template
	  };
	});

	template = "<header class=\"guide-banner\" role=\"banner\">\n  <a ui-sref=\"index\" ui-sref-active=\"active\" class=\"guide-name\">Lens</a>\n  <div class=\"guide-skip-content\">\n    <a href=\"#navigation\">Skip to Navigation</a>\n  </div>\n  <a href=\"#\" id=\"hamburger\" class=\"hamburger-button\">\n    <span class=\"hamburger\"></span>\n  </a>\n</header>\n\n<lens-main>\n\n  <section>\n    <p class=\"guide-content-description m-b-4-xs\">Lens uses Sass to compile its CSS and has a <a href=\"http://bourbon.io/\">Bourbon</a> dependency to give us access to many handy mixins. On top of that, we include many variables, mixins and functions that are specific to our needs at Looker.</p>\n\n    <h2 id=\"Variables\" class=\"guide-content-subtitle m-b-1-xs\">Variables</h2>\n    <p class=\"m-b-2-xs\">Most of our variables are built using Sass maps, which means they aren't easily accessible with a simple variable name. We've made functions to make access to those variables easier, we'll cover those below. Here are the variables that use regular variable names:</p>\n\n    <h3 class=\"guide-content-h3 m-b-05-xs\">Typography</h3>\n    <p class=\"m-b-1-xs\">Used to set font family a font size.</p>\n    <p class=\"bold\">Font-family</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-element\n    font-family: $brand-font\n  </code></pre>\n    <p class=\"m-b-2-xs\"><code>$brand-font</code></p>\n\n    <p class=\"bold\">Font-weight</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-element\n    font-weight: $bold\n  </code></pre>\n    <p class=\"m-b-3-xs\"><code>$bold</code></p>\n    </div>\n\n    <h3 class=\"guide-content-h3 m-b-05-xs\">Borders</h3>\n    <p class=\"m-b-1-xs\">Used in the <a href=\"border.html\">border</a> utility classes.</p>\n    <p class=\"bold\">Border Color</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-element\n    border-color: $border-color-dark\n  </code></pre>\n    <p class=\"m-b-2-xs\"><code>\n      $border-color-dark<br />\n      $border-color-mid<br />\n      $border-color-normal<br />\n      $border-color-light\n    </code></p>\n\n    <p class=\"bold\">Border Radius</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-element\n    border-radius: $border-radius\n  </code></pre>\n    <p class=\"m-b-3-xs\"><code>\n      $border-radius<br />\n    </code></p>\n\n    <h3 class=\"guide-content-h3 m-b-05-xs\">Grid</h3>\n    <p class=\"m-b-1-xs\">Used in the <a href=\"grid.html\">grid</a> and <a href=\"responsive.html\">breakpoint</a> utility classes. Our <code>-xs</code> breakpoint doesn't have a variable because it is simply styling <code>@media screen</code>.</p>\n    <p class=\"bold\">Grid Container</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-element\n    border-color: $grid-width\n  </code></pre>\n    <p class=\"m-b-3-xs\"><code>\n      $grid-width\n    </code></p>\n\n    <p class=\"bold\">Breakpoints</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">+media(min-width $sm)\n    property: value\n  </code></pre>\n    <p class=\"m-b-4-xs\"><code>\n      $sm <br />\n      $md <br />\n      $lg <br />\n      $xl\n    </code></p>\n\n\n\n    <h2 id=\"Functions\" class=\"guide-content-subtitle m-b-1-xs\">Functions</h2>\n    <p class=\"m-b-2-xs\">The rest of our variables are made with Sass maps, so we've created handy functions that make accessing them super easy. <strong>Note:</strong> these don't use the typical <code>$</code> variable naming scheme, just the function name.</p>\n\n    <h3 class=\"guide-content-h3 m-b-05-xs\">Typography</h3>\n    <p class=\"m-b-1-xs\">Used in our <a href=\"typography.html\">font size</a> utility classes.</p>\n    <p class=\"bold\">Font Size</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-element\n    font-size: text-size(1)\n  </code></pre>\n    <p class=\"m-b-3-xs\"><code>\n      text-size(1)<br />\n      text-size(2)<br />\n      text-size(3)<br />\n      text-size(4)<br />\n      text-size(5)<br />\n      text-size(6)\n    </code></p>\n\n    <h3 class=\"guide-content-h3 m-b-05-xs\">Spacing</h3>\n    <p class=\"m-b-1-xs\">Used in our <a href=\"layout.html\">layout</a> utility classes.</p>\n    <p class=\"bold\">Spacing Units</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-element\n    margin: spacing(1)\n    padding: spacing(2)\n  </code></pre>\n    <p class=\"m-b-3-xs\"><code>\n      spacing(0)<br />\n      spacing(0.5)<br />\n      spacing(1)<br />\n      spacing(2)<br />\n      spacing(3)<br />\n      spacing(4)<br />\n      spacing(5)<br />\n      spacing(6)\n    </code></p>\n\n    <h3 class=\"guide-content-h3 m-b-05-xs\">Colors</h3>\n    <p class=\"m-b-1-xs\">Used in our <a href=\"color.html\">color</a> utility classes.</p>\n    <p class=\"bold\">Brand Colors</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-element\n    background-color: brand-color(purple)\n  </code></pre>\n    <p class=\"m-b-3-xs\"><code>\n      brand-color(purple)<br />\n      brand-color(gray)\n      brand-color(blue)\n    </code></p>\n\n    <p class=\"bold\">Gray Colors</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-element\n    fill: gray-color(gray-dark)\n  </code></pre>\n    <p class=\"m-b-3-xs\"><code>\n      gray-color(white)<br />\n      gray-color(gray-1)<br />\n      gray-color(gray-2)<br />\n      gray-color(gray-3)<br />\n      gray-color(gray-4)<br />\n      gray-color(gray-5)<br />\n      gray-color(gray-6)<br />\n      gray-color(gray-7)\n    </code></p>\n\n    <p class=\"bold\">UI Colors</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-element\n    background-color: ui-color(blue)\n  </code></pre>\n    <p class=\"m-b-3-xs\"><code>\n      ui-color(purple)<br />\n      ui-color(purple-light)<br />\n      ui-color(purple-dark)<br />\n      ui-color(red)<br />\n      ui-color(red-light)<br />\n      ui-color(red-dark)<br />\n      ui-color(green)<br />\n      ui-color(teal)<br />\n      ui-color(teal-dark)<br />\n      ui-color(yellow)<br />\n      ui-color(orange)<br />\n      ui-color(orange-dark)\n    </code></p>\n\n    <h2 id=\"Mixins\" class=\"guide-content-subtitle m-b-1-xs\">Mixins</h2>\n    <p class=\"m-b-2-xs\">Lens includes a few helpful mixins for common occuring styles or selectors.</p>\n\n    <p class=\"bold\">Clearfix</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-selector\n    +clearfix\n  </code></pre>\n    <p class=\"m-b-3-xs\"><code>\n      +clearfix\n    </code></p>\n\n    <p class=\"bold\">Positioning</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-selector\n    +absolute(top 0 left 10px)\n  </code></pre>\n    <p class=\"m-b-3-xs\"><code>\n      +absolute($direction $amount)\n      +relative($direction $amount)\n      +fixed($direction $amount)\n    </code></p>\n\n    <p class=\"bold\">Media</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-selector\n    +media(min-width $sm) {\n      property: value\n    }\n  </code></pre>\n    <p class=\"m-b-3-xs\"><code>\n      +media($rule $breakpoint)\n    </code></p>\n\n    <p class=\"bold\">Placeholder Style</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-selector\n    +placeholder-style\n      property: value\n  </code></pre>\n    <p class=\"m-b-3-xs\"><code>\n      +placeholder-style\n    </code></p>\n\n    <p class=\"bold\">Hover, Active, Focus</p>\n    <p>Can remove <code>:focus</code> by passing <code>false</code> into the mixin.</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-selector\n    +selected\n      property: value\n  </code></pre>\n    <p class=\"m-b-3-xs\"><code>\n      +selected<br />\n      +selected(false)\n    </code></p>\n\n    <p class=\"bold\">Width and Height</p>\n    <div class=\"guide-code\">\n  <pre class=\"m-tb-05-xs\"><code class=\"language-css\">.custom-selector\n    +width-height(100px, 200px)\n  </code></pre>\n    <p><code>\n      +width-height($width, $height)\n    </code></p>\n  </section>\n\n</lens-main>\n\n<main-nav></main-nav>\n\n<footer class=\"guide-contentinfo\" role=\"contentinfo\">\n  <p class=\"guide-contentinfo-copy\">Copyright &copy; 2017 Looker. All rights reserved.</p>\n</footer>";


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(30)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./_styleguide.sass", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/index.js!./_styleguide.sass");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(29)();
	// imports


	// module
	exports.push([module.id, "/*! Lens Version 0.1.0 */\n*, :after, :before {\n  box-sizing: border-box; }\n\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {\n  display: block; }\n\naudio, canvas, progress, video {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden], template {\n  display: none; }\n\na {\n  background-color: transparent; }\n  a:active, a:hover {\n    outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb, strong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode, kbd, pre, samp {\n  font-family: Monaco, monospace; }\n\nbutton, input, optgroup, select, textarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible;\n  text-transform: none; }\n\nselect {\n  text-transform: none; }\n\nbutton, html input[type=\"button\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\ninput[type=\"reset\"], input[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled], html input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n  input::-moz-focus-inner {\n    border: 0;\n    padding: 0; }\n  input[type=\"checkbox\"], input[type=\"radio\"] {\n    box-sizing: border-box;\n    padding: 0; }\n  input[type=\"number\"]::-webkit-inner-spin-button, input[type=\"number\"]::-webkit-outer-spin-button {\n    height: auto; }\n  input[type=\"search\"] {\n    -webkit-appearance: textfield;\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n    box-sizing: content-box; }\n    input[type=\"search\"]::-webkit-search-cancel-button, input[type=\"search\"]::-webkit-search-decoration {\n      -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd, th {\n  padding: 0; }\n\nhtml {\n  font-size: 100%;\n  line-height: 1.5;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-size: 14px;\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-weight: 400; }\n\nh1, h2, h3, h4, h5, h6 {\n  display: block;\n  font-weight: 300;\n  margin: 0;\n  line-height: 1.3;\n  text-rendering: optimizeLegibility; }\n\nh1 {\n  font-size: 21px; }\n\nh2 {\n  font-size: 18px; }\n\nh3 {\n  font-size: 15px; }\n\nh4 {\n  font-size: 14px; }\n\nh5 {\n  font-size: 13px; }\n\nh6 {\n  font-size: 12px; }\n\n@media screen {\n  .text-1-xs {\n    font-size: 21px !important; }\n  .text-2-xs {\n    font-size: 18px !important; }\n  .text-3-xs {\n    font-size: 15px !important; }\n  .text-4-xs {\n    font-size: 14px !important; }\n  .text-5-xs {\n    font-size: 13px !important; }\n  .text-6-xs {\n    font-size: 12px !important; }\n  .text-7-xs {\n    font-size: 11px !important; } }\n\n@media screen and (min-width: 480px) {\n  .text-1-sm {\n    font-size: 21px !important; }\n  .text-2-sm {\n    font-size: 18px !important; }\n  .text-3-sm {\n    font-size: 15px !important; }\n  .text-4-sm {\n    font-size: 14px !important; }\n  .text-5-sm {\n    font-size: 13px !important; }\n  .text-6-sm {\n    font-size: 12px !important; }\n  .text-7-sm {\n    font-size: 11px !important; } }\n\n@media screen and (min-width: 680px) {\n  .text-1-md {\n    font-size: 21px !important; }\n  .text-2-md {\n    font-size: 18px !important; }\n  .text-3-md {\n    font-size: 15px !important; }\n  .text-4-md {\n    font-size: 14px !important; }\n  .text-5-md {\n    font-size: 13px !important; }\n  .text-6-md {\n    font-size: 12px !important; }\n  .text-7-md {\n    font-size: 11px !important; } }\n\n@media screen and (min-width: 960px) {\n  .text-1-lg {\n    font-size: 21px !important; }\n  .text-2-lg {\n    font-size: 18px !important; }\n  .text-3-lg {\n    font-size: 15px !important; }\n  .text-4-lg {\n    font-size: 14px !important; }\n  .text-5-lg {\n    font-size: 13px !important; }\n  .text-6-lg {\n    font-size: 12px !important; }\n  .text-7-lg {\n    font-size: 11px !important; } }\n\n@media screen and (min-width: 1140px) {\n  .text-1-xl {\n    font-size: 21px !important; }\n  .text-2-xl {\n    font-size: 18px !important; }\n  .text-3-xl {\n    font-size: 15px !important; }\n  .text-4-xl {\n    font-size: 14px !important; }\n  .text-5-xl {\n    font-size: 13px !important; }\n  .text-6-xl {\n    font-size: 12px !important; }\n  .text-7-xl {\n    font-size: 11px !important; } }\n\nhr {\n  height: 0;\n  margin: 18px 0;\n  border-top: 1px solid #f6f6f7; }\n\np {\n  color: #77797E;\n  font-size: 14px;\n  line-height: 1.5; }\n\n.regular {\n  font-weight: normal !important; }\n\nstrong,\n.bold {\n  font-weight: 600 !important; }\n\nem,\n.italic {\n  font-style: italic !important; }\n\n.caps {\n  text-transform: uppercase; }\n\na {\n  color: #0E88F1;\n  cursor: pointer;\n  text-decoration: none; }\n  a:hover, a:active, a:focus {\n    color: #0b6dc1; }\n\ncode {\n  font-family: monospace;\n  font-size: 15px; }\n\naddress {\n  font-size: 0.875rem; }\n\n@media screen {\n  .text-left-xs {\n    text-align: left !important; }\n  .text-right-xs {\n    text-align: right !important; }\n  .text-center-xs {\n    text-align: center !important; }\n  .text-justify-xs {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 480px) {\n  .text-left-sm {\n    text-align: left !important; }\n  .text-right-sm {\n    text-align: right !important; }\n  .text-center-sm {\n    text-align: center !important; }\n  .text-justify-sm {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 680px) {\n  .text-left-md {\n    text-align: left !important; }\n  .text-right-md {\n    text-align: right !important; }\n  .text-center-md {\n    text-align: center !important; }\n  .text-justify-md {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 960px) {\n  .text-left-lg {\n    text-align: left !important; }\n  .text-right-lg {\n    text-align: right !important; }\n  .text-center-lg {\n    text-align: center !important; }\n  .text-justify-lg {\n    text-align: justify !important; } }\n\n@media screen and (min-width: 1140px) {\n  .text-left-xl {\n    text-align: left !important; }\n  .text-right-xl {\n    text-align: right !important; }\n  .text-center-xl {\n    text-align: center !important; }\n  .text-justify-xl {\n    text-align: justify !important; } }\n\nul,\nol {\n  color: #77797E;\n  margin: 0;\n  padding: 0 0 0 2rem; }\n\n.list-unstyled {\n  list-style: none;\n  padding: 0; }\n\n.icon-16 {\n  width: 16px;\n  height: 16px; }\n\n@media screen {\n  .border-xs {\n    border: solid 1px #e4e5e6 !important; }\n  .border-t-xs {\n    border-top: solid 1px #e4e5e6 !important; }\n  .border-b-xs {\n    border-bottom: solid 1px #e4e5e6 !important; }\n  .border-l-xs {\n    border-left: solid 1px #e4e5e6 !important; }\n  .border-r-xs {\n    border-right: solid 1px #e4e5e6 !important; }\n  .border-dark-xs {\n    border: solid 1px #d2d3d4 !important; }\n  .border-t-dark-xs {\n    border-top: solid 1px #d2d3d4 !important; }\n  .border-b-dark-xs {\n    border-bottom: solid 1px #d2d3d4 !important; }\n  .border-l-dark-xs {\n    border-left: solid 1px #d2d3d4 !important; }\n  .border-r-dark-xs {\n    border-right: solid 1px #d2d3d4 !important; }\n  .border-light-xs {\n    border: solid 1px #f6f6f7 !important; }\n  .border-t-light-xs {\n    border-top: solid 1px #f6f6f7 !important; }\n  .border-b-light-xs {\n    border-bottom: solid 1px #f6f6f7 !important; }\n  .border-l-light-xs {\n    border-left: solid 1px #f6f6f7 !important; }\n  .border-r-light-xs {\n    border-right: solid 1px #f6f6f7 !important; }\n  .border-none-xs {\n    border: none !important; }\n  .border-none-t-xs {\n    border-top: none !important; }\n  .border-none-b-xs {\n    border-bottom: none !important; }\n  .border-none-l-xs {\n    border-left: none !important; }\n  .border-none-r-xs {\n    border-right: none !important; }\n  .round {\n    border-radius: 2px !important; }\n    .round-t {\n      border-radius: 2px 2px 0 0 !important; }\n    .round-b {\n      border-radius: 0 0 2px 2px !important; }\n    .round-l {\n      border-radius: 2px 0 0 2px !important; }\n    .round-r {\n      border-radius: 0 2px 2px 0 !important; }\n  .circle {\n    border-radius: 9999px !important; } }\n\n@media screen and (min-width: 480px) {\n  .border-sm {\n    border: solid 1px #e4e5e6 !important; }\n  .border-t-sm {\n    border-top: solid 1px #e4e5e6 !important; }\n  .border-b-sm {\n    border-bottom: solid 1px #e4e5e6 !important; }\n  .border-l-sm {\n    border-left: solid 1px #e4e5e6 !important; }\n  .border-r-sm {\n    border-right: solid 1px #e4e5e6 !important; }\n  .border-dark-sm {\n    border: solid 1px #d2d3d4 !important; }\n  .border-t-dark-sm {\n    border-top: solid 1px #d2d3d4 !important; }\n  .border-b-dark-sm {\n    border-bottom: solid 1px #d2d3d4 !important; }\n  .border-l-dark-sm {\n    border-left: solid 1px #d2d3d4 !important; }\n  .border-r-dark-sm {\n    border-right: solid 1px #d2d3d4 !important; }\n  .border-light-sm {\n    border: solid 1px #f6f6f7 !important; }\n  .border-t-light-sm {\n    border-top: solid 1px #f6f6f7 !important; }\n  .border-b-light-sm {\n    border-bottom: solid 1px #f6f6f7 !important; }\n  .border-l-light-sm {\n    border-left: solid 1px #f6f6f7 !important; }\n  .border-r-light-sm {\n    border-right: solid 1px #f6f6f7 !important; }\n  .border-none-sm {\n    border: none !important; }\n  .border-none-t-sm {\n    border-top: none !important; }\n  .border-none-b-sm {\n    border-bottom: none !important; }\n  .border-none-l-sm {\n    border-left: none !important; }\n  .border-none-r-sm {\n    border-right: none !important; }\n  .round {\n    border-radius: 2px !important; }\n    .round-t {\n      border-radius: 2px 2px 0 0 !important; }\n    .round-b {\n      border-radius: 0 0 2px 2px !important; }\n    .round-l {\n      border-radius: 2px 0 0 2px !important; }\n    .round-r {\n      border-radius: 0 2px 2px 0 !important; }\n  .circle {\n    border-radius: 9999px !important; } }\n\n@media screen and (min-width: 680px) {\n  .border-md {\n    border: solid 1px #e4e5e6 !important; }\n  .border-t-md {\n    border-top: solid 1px #e4e5e6 !important; }\n  .border-b-md {\n    border-bottom: solid 1px #e4e5e6 !important; }\n  .border-l-md {\n    border-left: solid 1px #e4e5e6 !important; }\n  .border-r-md {\n    border-right: solid 1px #e4e5e6 !important; }\n  .border-dark-md {\n    border: solid 1px #d2d3d4 !important; }\n  .border-t-dark-md {\n    border-top: solid 1px #d2d3d4 !important; }\n  .border-b-dark-md {\n    border-bottom: solid 1px #d2d3d4 !important; }\n  .border-l-dark-md {\n    border-left: solid 1px #d2d3d4 !important; }\n  .border-r-dark-md {\n    border-right: solid 1px #d2d3d4 !important; }\n  .border-light-md {\n    border: solid 1px #f6f6f7 !important; }\n  .border-t-light-md {\n    border-top: solid 1px #f6f6f7 !important; }\n  .border-b-light-md {\n    border-bottom: solid 1px #f6f6f7 !important; }\n  .border-l-light-md {\n    border-left: solid 1px #f6f6f7 !important; }\n  .border-r-light-md {\n    border-right: solid 1px #f6f6f7 !important; }\n  .border-none-md {\n    border: none !important; }\n  .border-none-t-md {\n    border-top: none !important; }\n  .border-none-b-md {\n    border-bottom: none !important; }\n  .border-none-l-md {\n    border-left: none !important; }\n  .border-none-r-md {\n    border-right: none !important; }\n  .round {\n    border-radius: 2px !important; }\n    .round-t {\n      border-radius: 2px 2px 0 0 !important; }\n    .round-b {\n      border-radius: 0 0 2px 2px !important; }\n    .round-l {\n      border-radius: 2px 0 0 2px !important; }\n    .round-r {\n      border-radius: 0 2px 2px 0 !important; }\n  .circle {\n    border-radius: 9999px !important; } }\n\n@media screen and (min-width: 960px) {\n  .border-lg {\n    border: solid 1px #e4e5e6 !important; }\n  .border-t-lg {\n    border-top: solid 1px #e4e5e6 !important; }\n  .border-b-lg {\n    border-bottom: solid 1px #e4e5e6 !important; }\n  .border-l-lg {\n    border-left: solid 1px #e4e5e6 !important; }\n  .border-r-lg {\n    border-right: solid 1px #e4e5e6 !important; }\n  .border-dark-lg {\n    border: solid 1px #d2d3d4 !important; }\n  .border-t-dark-lg {\n    border-top: solid 1px #d2d3d4 !important; }\n  .border-b-dark-lg {\n    border-bottom: solid 1px #d2d3d4 !important; }\n  .border-l-dark-lg {\n    border-left: solid 1px #d2d3d4 !important; }\n  .border-r-dark-lg {\n    border-right: solid 1px #d2d3d4 !important; }\n  .border-light-lg {\n    border: solid 1px #f6f6f7 !important; }\n  .border-t-light-lg {\n    border-top: solid 1px #f6f6f7 !important; }\n  .border-b-light-lg {\n    border-bottom: solid 1px #f6f6f7 !important; }\n  .border-l-light-lg {\n    border-left: solid 1px #f6f6f7 !important; }\n  .border-r-light-lg {\n    border-right: solid 1px #f6f6f7 !important; }\n  .border-none-lg {\n    border: none !important; }\n  .border-none-t-lg {\n    border-top: none !important; }\n  .border-none-b-lg {\n    border-bottom: none !important; }\n  .border-none-l-lg {\n    border-left: none !important; }\n  .border-none-r-lg {\n    border-right: none !important; }\n  .round {\n    border-radius: 2px !important; }\n    .round-t {\n      border-radius: 2px 2px 0 0 !important; }\n    .round-b {\n      border-radius: 0 0 2px 2px !important; }\n    .round-l {\n      border-radius: 2px 0 0 2px !important; }\n    .round-r {\n      border-radius: 0 2px 2px 0 !important; }\n  .circle {\n    border-radius: 9999px !important; } }\n\n@media screen and (min-width: 1140px) {\n  .border-xl {\n    border: solid 1px #e4e5e6 !important; }\n  .border-t-xl {\n    border-top: solid 1px #e4e5e6 !important; }\n  .border-b-xl {\n    border-bottom: solid 1px #e4e5e6 !important; }\n  .border-l-xl {\n    border-left: solid 1px #e4e5e6 !important; }\n  .border-r-xl {\n    border-right: solid 1px #e4e5e6 !important; }\n  .border-dark-xl {\n    border: solid 1px #d2d3d4 !important; }\n  .border-t-dark-xl {\n    border-top: solid 1px #d2d3d4 !important; }\n  .border-b-dark-xl {\n    border-bottom: solid 1px #d2d3d4 !important; }\n  .border-l-dark-xl {\n    border-left: solid 1px #d2d3d4 !important; }\n  .border-r-dark-xl {\n    border-right: solid 1px #d2d3d4 !important; }\n  .border-light-xl {\n    border: solid 1px #f6f6f7 !important; }\n  .border-t-light-xl {\n    border-top: solid 1px #f6f6f7 !important; }\n  .border-b-light-xl {\n    border-bottom: solid 1px #f6f6f7 !important; }\n  .border-l-light-xl {\n    border-left: solid 1px #f6f6f7 !important; }\n  .border-r-light-xl {\n    border-right: solid 1px #f6f6f7 !important; }\n  .border-none-xl {\n    border: none !important; }\n  .border-none-t-xl {\n    border-top: none !important; }\n  .border-none-b-xl {\n    border-bottom: none !important; }\n  .border-none-l-xl {\n    border-left: none !important; }\n  .border-none-r-xl {\n    border-right: none !important; }\n  .round {\n    border-radius: 2px !important; }\n    .round-t {\n      border-radius: 2px 2px 0 0 !important; }\n    .round-b {\n      border-radius: 0 0 2px 2px !important; }\n    .round-l {\n      border-radius: 2px 0 0 2px !important; }\n    .round-r {\n      border-radius: 0 2px 2px 0 !important; }\n  .circle {\n    border-radius: 9999px !important; } }\n\n.brand-color-purple {\n  color: #41327B !important; }\n\n.brand-border-purple {\n  border-color: #41327B !important; }\n\n.brand-bg-purple {\n  background-color: #41327B !important; }\n\n.brand-color-gray {\n  color: #1C2027 !important; }\n\n.brand-border-gray {\n  border-color: #1C2027 !important; }\n\n.brand-bg-gray {\n  background-color: #1C2027 !important; }\n\n.brand-color-blue {\n  color: #0E88F1 !important; }\n\n.brand-border-blue {\n  border-color: #0E88F1 !important; }\n\n.brand-bg-blue {\n  background-color: #0E88F1 !important; }\n\n.color-purple-dark {\n  color: #2A1B60 !important; }\n\n.border-purple-dark {\n  border-color: #2A1B60 !important; }\n\n.bg-purple-dark {\n  background-color: #2A1B60 !important; }\n\n.color-purple {\n  color: #4C33AA !important; }\n\n.border-purple {\n  border-color: #4C33AA !important; }\n\n.bg-purple {\n  background-color: #4C33AA !important; }\n\n.color-purple-light {\n  color: #7E64E0 !important; }\n\n.border-purple-light {\n  border-color: #7E64E0 !important; }\n\n.bg-purple-light {\n  background-color: #7E64E0 !important; }\n\n.color-red-dark {\n  color: #92100E !important; }\n\n.border-red-dark {\n  border-color: #92100E !important; }\n\n.bg-red-dark {\n  background-color: #92100E !important; }\n\n.color-red {\n  color: #B00505 !important; }\n\n.border-red {\n  border-color: #B00505 !important; }\n\n.bg-red {\n  background-color: #B00505 !important; }\n\n.color-red-light {\n  color: #E1332C !important; }\n\n.border-red-light {\n  border-color: #E1332C !important; }\n\n.bg-red-light {\n  background-color: #E1332C !important; }\n\n.color-green {\n  color: #4BB86A !important; }\n\n.border-green {\n  border-color: #4BB86A !important; }\n\n.bg-green {\n  background-color: #4BB86A !important; }\n\n.color-teal-dark {\n  color: #39B2B2 !important; }\n\n.border-teal-dark {\n  border-color: #39B2B2 !important; }\n\n.bg-teal-dark {\n  background-color: #39B2B2 !important; }\n\n.color-teal {\n  color: #5DCCCC !important; }\n\n.border-teal {\n  border-color: #5DCCCC !important; }\n\n.bg-teal {\n  background-color: #5DCCCC !important; }\n\n.color-yellow {\n  color: #FFD822 !important; }\n\n.border-yellow {\n  border-color: #FFD822 !important; }\n\n.bg-yellow {\n  background-color: #FFD822 !important; }\n\n.color-orange-dark {\n  color: #E57200 !important; }\n\n.border-orange-dark {\n  border-color: #E57200 !important; }\n\n.bg-orange-dark {\n  background-color: #E57200 !important; }\n\n.color-orange {\n  color: #FB9331 !important; }\n\n.border-orange {\n  border-color: #FB9331 !important; }\n\n.bg-orange {\n  background-color: #FB9331 !important; }\n\n.color-white {\n  color: #fff !important; }\n\n.border-white {\n  border-color: #fff !important; }\n\n.bg-white {\n  background-color: #fff !important; }\n\n.color-gray-1 {\n  color: #F6F6F7 !important; }\n\n.border-gray-1 {\n  border-color: #F6F6F7 !important; }\n\n.bg-gray-1 {\n  background-color: #F6F6F7 !important; }\n\n.color-gray-2 {\n  color: #E4E5E6 !important; }\n\n.border-gray-2 {\n  border-color: #E4E5E6 !important; }\n\n.bg-gray-2 {\n  background-color: #E4E5E6 !important; }\n\n.color-gray-3 {\n  color: #D2D3D4 !important; }\n\n.border-gray-3 {\n  border-color: #D2D3D4 !important; }\n\n.bg-gray-3 {\n  background-color: #D2D3D4 !important; }\n\n.color-gray-4 {\n  color: #A4A6A9 !important; }\n\n.border-gray-4 {\n  border-color: #A4A6A9 !important; }\n\n.bg-gray-4 {\n  background-color: #A4A6A9 !important; }\n\n.color-gray-5 {\n  color: #77797E !important; }\n\n.border-gray-5 {\n  border-color: #77797E !important; }\n\n.bg-gray-5 {\n  background-color: #77797E !important; }\n\n.color-gray-6 {\n  color: #3C4345 !important; }\n\n.border-gray-6 {\n  border-color: #3C4345 !important; }\n\n.bg-gray-6 {\n  background-color: #3C4345 !important; }\n\n.color-gray-7 {\n  color: #1C2027 !important; }\n\n.border-gray-7 {\n  border-color: #1C2027 !important; }\n\n.bg-gray-7 {\n  background-color: #1C2027 !important; }\n\n.button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-radius: 2px;\n  cursor: pointer;\n  text-align: center;\n  display: inline-block;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  text-transform: none;\n  font-weight: normal;\n  letter-spacing: normal;\n  padding: 4px 12px;\n  margin: 0 12px 0 0;\n  transition: none;\n  text-decoration: none;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background-color: white;\n  border: 1px solid #E4E5E6;\n  color: #4C33AA; }\n  .button:hover, .button:active, .button:focus {\n    background-color: white;\n    color: #4C33AA;\n    border: 1px solid #7E64E0; }\n  .button:last-child {\n    margin-right: 0; }\n  .button--primary {\n    background-color: #4C33AA !important;\n    border-color: #4C33AA !important;\n    color: #fff !important; }\n    .button--primary:hover, .button--primary:active, .button--primary:focus {\n      background-color: #2A1B60 !important;\n      border-color: #2A1B60 !important;\n      color: #fff !important; }\n  .button--neutral {\n    background-color: #E4E5E6 !important;\n    border-color: #E4E5E6 !important;\n    color: #1C2027 !important; }\n    .button--neutral:hover, .button--neutral:active, .button--neutral:focus {\n      background-color: #cacccd !important;\n      border-color: #E4E5E6 !important;\n      color: #1C2027 !important; }\n  .button--alert {\n    background-color: #92100E !important;\n    border-color: #92100E !important;\n    color: #fff !important; }\n    .button--alert:hover, .button--alert:active, .button--alert:focus {\n      background-color: #B00505 !important;\n      border-color: #B00505 !important;\n      color: #fff !important; }\n  .button--inverse {\n    background-color: #fff !important;\n    border-color: #fff !important;\n    color: #4C33AA !important;\n    opacity: 0.88; }\n    .button--inverse:hover, .button--inverse:active, .button--inverse:focus {\n      background-color: #fff !important;\n      border-color: #fff !important;\n      color: #4C33AA !important;\n      opacity: 1 !important; }\n    .button--inverse-primary {\n      background-color: #7E64E0 !important;\n      border-color: #7E64E0 !important;\n      color: white !important;\n      opacity: 0.88; }\n      .button--inverse-primary:hover, .button--inverse-primary:active, .button--inverse-primary:focus {\n        opacity: 1 !important; }\n    .button--inverse-disabled {\n      cursor: not-allowed !important;\n      pointer-events: none !important;\n      opacity: 0.65 !important;\n      background-color: !important;\n      border-color: !important;\n      color: !important; }\n      .button--inverse-disabled:hover, .button--inverse-disabled:active, .button--inverse-disabled:focus {\n        background-color: !important;\n        border-color: !important;\n        color: !important; }\n    .button--inverse-primary-disabled {\n      cursor: not-allowed !important;\n      pointer-events: none !important;\n      opacity: 0.65 !important;\n      background-color: !important;\n      border-color: !important;\n      color: !important; }\n      .button--inverse-primary-disabled:hover, .button--inverse-primary-disabled:active, .button--inverse-primary-disabled:focus {\n        background-color: !important;\n        border-color: !important;\n        color: !important; }\n  .button--disabled {\n    cursor: not-allowed !important;\n    pointer-events: none !important;\n    opacity: 0.65 !important; }\n    .button--disabled-light {\n      background-color: !important;\n      border-color: !important;\n      color: !important; }\n      .button--disabled-light:hover, .button--disabled-light:active, .button--disabled-light:focus {\n        background-color: !important;\n        border-color: !important;\n        color: !important; }\n    .button--disabled-dark {\n      background-color: !important;\n      border-color: !important;\n      color: !important; }\n      .button--disabled-dark:hover, .button--disabled-dark:active, .button--disabled-dark:focus {\n        background-color: !important;\n        border-color: !important;\n        color: !important; }\n  .button--inline {\n    margin-top: 24px !important;\n    padding: 0 26px !important;\n    height: 47px !important;\n    line-height: 43px !important; }\n  @media screen {\n    .button--normal-xs {\n      font-size: 12px !important;\n      padding: 4px 12px !important; }\n      .button--normal-xs.square {\n        width: !important; }\n    .button--small-xs {\n      font-size: 11px !important;\n      padding: 5px 5px !important; }\n      .button--small-xs.square {\n        width: !important; }\n    .button--xsmall-xs {\n      font-size: 11px !important;\n      padding: 1px 5px !important; }\n      .button--xsmall-xs.square {\n        width: !important; } }\n  @media screen and (min-width: 480px) {\n    .button--normal-sm {\n      font-size: 12px !important;\n      padding: 4px 12px !important; }\n      .button--normal-sm.square {\n        width: !important; }\n    .button--small-sm {\n      font-size: 11px !important;\n      padding: 5px 5px !important; }\n      .button--small-sm.square {\n        width: !important; }\n    .button--xsmall-sm {\n      font-size: 11px !important;\n      padding: 1px 5px !important; }\n      .button--xsmall-sm.square {\n        width: !important; } }\n  @media screen and (min-width: 680px) {\n    .button--normal-md {\n      font-size: 12px !important;\n      padding: 4px 12px !important; }\n      .button--normal-md.square {\n        width: !important; }\n    .button--small-md {\n      font-size: 11px !important;\n      padding: 5px 5px !important; }\n      .button--small-md.square {\n        width: !important; }\n    .button--xsmall-md {\n      font-size: 11px !important;\n      padding: 1px 5px !important; }\n      .button--xsmall-md.square {\n        width: !important; } }\n  .split-button .button {\n    float: left;\n    z-index: 1;\n    margin: 0 !important;\n    border-radius: 0;\n    position: relative; }\n    .split-button .button + .button {\n      margin-left: -2px !important; }\n    .split-button .button:first-child {\n      border-radius: 2px 0 0 2px; }\n    .split-button .button:last-child {\n      border-radius: 0 2px 2px 0; }\n    .split-button .button:hover, .split-button .button:active, .split-button .button:focus {\n      z-index: 2; }\n      .split-button .button:hover:active, .split-button .button:hover.active, .split-button .button:active:active, .split-button .button:active.active, .split-button .button:focus:active, .split-button .button:focus.active {\n        background: #4C33AA;\n        border-color: #4C33AA;\n        color: white; }\n      .split-button .button:hover:after, .split-button .button:active:after, .split-button .button:focus:after {\n        content: \"\";\n        width: 1px;\n        height: calc(100% + 2px);\n        background-color: white;\n        position: absolute;\n        left: -1px;\n        top: -1px; }\n\n.split-button {\n  display: inline-block;\n  margin: 0 15px 0 0; }\n  .split-button:before, .split-button:after {\n    content: \" \";\n    display: table; }\n  .split-button:after {\n    clear: both; }\n  .split-button.w-full {\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: box; }\n    .split-button.w-full .button {\n      -webkit-box-flex: 1;\n      -moz-box-flex: 1;\n      box-flex: 1;\n      -webkit-flex: 1 0 auto;\n      -moz-flex: 1 0 auto;\n      -ms-flex: 1 0 auto;\n      flex: 1 0 auto; }\n\n.col {\n  float: left !important;\n  width: 100% !important; }\n  .col-gutters {\n    margin: 0 -15px; }\n    .col-gutters > .col {\n      padding: 0 15px; }\n  .col-container:before, .col-container:after {\n    content: \" \";\n    display: table; }\n  .col-container:after {\n    clear: both; }\n  .col-center {\n    float: none !important;\n    margin: 0 auto !important; }\n  .col-form {\n    margin: 0 -6px !important; }\n    .col-form > .col {\n      padding: 0 6px; }\n  @media screen {\n    .col-5-xs {\n      width: 5% !important; }\n    .col-offset-5-xs {\n      margin-left: 5% !important; }\n    .col-10-xs {\n      width: 10% !important; }\n    .col-offset-10-xs {\n      margin-left: 10% !important; }\n    .col-15-xs {\n      width: 15% !important; }\n    .col-offset-15-xs {\n      margin-left: 15% !important; }\n    .col-20-xs {\n      width: 20% !important; }\n    .col-offset-20-xs {\n      margin-left: 20% !important; }\n    .col-25-xs {\n      width: 25% !important; }\n    .col-offset-25-xs {\n      margin-left: 25% !important; }\n    .col-30-xs {\n      width: 30% !important; }\n    .col-offset-30-xs {\n      margin-left: 30% !important; }\n    .col-33-xs {\n      width: 33.3% !important; }\n    .col-offset-33-xs {\n      margin-left: 33.3% !important; }\n    .col-35-xs {\n      width: 35% !important; }\n    .col-offset-35-xs {\n      margin-left: 35% !important; }\n    .col-40-xs {\n      width: 40% !important; }\n    .col-offset-40-xs {\n      margin-left: 40% !important; }\n    .col-45-xs {\n      width: 45% !important; }\n    .col-offset-45-xs {\n      margin-left: 45% !important; }\n    .col-50-xs {\n      width: 50% !important; }\n    .col-offset-50-xs {\n      margin-left: 50% !important; }\n    .col-55-xs {\n      width: 55% !important; }\n    .col-offset-55-xs {\n      margin-left: 55% !important; }\n    .col-60-xs {\n      width: 60% !important; }\n    .col-offset-60-xs {\n      margin-left: 60% !important; }\n    .col-65-xs {\n      width: 65% !important; }\n    .col-offset-65-xs {\n      margin-left: 65% !important; }\n    .col-66-xs {\n      width: 66.6% !important; }\n    .col-offset-66-xs {\n      margin-left: 66.6% !important; }\n    .col-70-xs {\n      width: 70% !important; }\n    .col-offset-70-xs {\n      margin-left: 70% !important; }\n    .col-75-xs {\n      width: 75% !important; }\n    .col-offset-75-xs {\n      margin-left: 75% !important; }\n    .col-80-xs {\n      width: 80% !important; }\n    .col-offset-80-xs {\n      margin-left: 80% !important; }\n    .col-85-xs {\n      width: 85% !important; }\n    .col-offset-85-xs {\n      margin-left: 85% !important; }\n    .col-90-xs {\n      width: 90% !important; }\n    .col-offset-90-xs {\n      margin-left: 90% !important; }\n    .col-95-xs {\n      width: 95% !important; }\n    .col-offset-95-xs {\n      margin-left: 95% !important; }\n    .col-100-xs {\n      width: 100% !important; }\n    .col-offset-100-xs {\n      margin-left: 100% !important; } }\n  @media screen and (min-width: 480px) {\n    .col-5-sm {\n      width: 5% !important; }\n    .col-offset-5-sm {\n      margin-left: 5% !important; }\n    .col-10-sm {\n      width: 10% !important; }\n    .col-offset-10-sm {\n      margin-left: 10% !important; }\n    .col-15-sm {\n      width: 15% !important; }\n    .col-offset-15-sm {\n      margin-left: 15% !important; }\n    .col-20-sm {\n      width: 20% !important; }\n    .col-offset-20-sm {\n      margin-left: 20% !important; }\n    .col-25-sm {\n      width: 25% !important; }\n    .col-offset-25-sm {\n      margin-left: 25% !important; }\n    .col-30-sm {\n      width: 30% !important; }\n    .col-offset-30-sm {\n      margin-left: 30% !important; }\n    .col-33-sm {\n      width: 33.3% !important; }\n    .col-offset-33-sm {\n      margin-left: 33.3% !important; }\n    .col-35-sm {\n      width: 35% !important; }\n    .col-offset-35-sm {\n      margin-left: 35% !important; }\n    .col-40-sm {\n      width: 40% !important; }\n    .col-offset-40-sm {\n      margin-left: 40% !important; }\n    .col-45-sm {\n      width: 45% !important; }\n    .col-offset-45-sm {\n      margin-left: 45% !important; }\n    .col-50-sm {\n      width: 50% !important; }\n    .col-offset-50-sm {\n      margin-left: 50% !important; }\n    .col-55-sm {\n      width: 55% !important; }\n    .col-offset-55-sm {\n      margin-left: 55% !important; }\n    .col-60-sm {\n      width: 60% !important; }\n    .col-offset-60-sm {\n      margin-left: 60% !important; }\n    .col-65-sm {\n      width: 65% !important; }\n    .col-offset-65-sm {\n      margin-left: 65% !important; }\n    .col-66-sm {\n      width: 66.6% !important; }\n    .col-offset-66-sm {\n      margin-left: 66.6% !important; }\n    .col-70-sm {\n      width: 70% !important; }\n    .col-offset-70-sm {\n      margin-left: 70% !important; }\n    .col-75-sm {\n      width: 75% !important; }\n    .col-offset-75-sm {\n      margin-left: 75% !important; }\n    .col-80-sm {\n      width: 80% !important; }\n    .col-offset-80-sm {\n      margin-left: 80% !important; }\n    .col-85-sm {\n      width: 85% !important; }\n    .col-offset-85-sm {\n      margin-left: 85% !important; }\n    .col-90-sm {\n      width: 90% !important; }\n    .col-offset-90-sm {\n      margin-left: 90% !important; }\n    .col-95-sm {\n      width: 95% !important; }\n    .col-offset-95-sm {\n      margin-left: 95% !important; }\n    .col-100-sm {\n      width: 100% !important; }\n    .col-offset-100-sm {\n      margin-left: 100% !important; } }\n  @media screen and (min-width: 680px) {\n    .col-5-md {\n      width: 5% !important; }\n    .col-offset-5-md {\n      margin-left: 5% !important; }\n    .col-10-md {\n      width: 10% !important; }\n    .col-offset-10-md {\n      margin-left: 10% !important; }\n    .col-15-md {\n      width: 15% !important; }\n    .col-offset-15-md {\n      margin-left: 15% !important; }\n    .col-20-md {\n      width: 20% !important; }\n    .col-offset-20-md {\n      margin-left: 20% !important; }\n    .col-25-md {\n      width: 25% !important; }\n    .col-offset-25-md {\n      margin-left: 25% !important; }\n    .col-30-md {\n      width: 30% !important; }\n    .col-offset-30-md {\n      margin-left: 30% !important; }\n    .col-33-md {\n      width: 33.3% !important; }\n    .col-offset-33-md {\n      margin-left: 33.3% !important; }\n    .col-35-md {\n      width: 35% !important; }\n    .col-offset-35-md {\n      margin-left: 35% !important; }\n    .col-40-md {\n      width: 40% !important; }\n    .col-offset-40-md {\n      margin-left: 40% !important; }\n    .col-45-md {\n      width: 45% !important; }\n    .col-offset-45-md {\n      margin-left: 45% !important; }\n    .col-50-md {\n      width: 50% !important; }\n    .col-offset-50-md {\n      margin-left: 50% !important; }\n    .col-55-md {\n      width: 55% !important; }\n    .col-offset-55-md {\n      margin-left: 55% !important; }\n    .col-60-md {\n      width: 60% !important; }\n    .col-offset-60-md {\n      margin-left: 60% !important; }\n    .col-65-md {\n      width: 65% !important; }\n    .col-offset-65-md {\n      margin-left: 65% !important; }\n    .col-66-md {\n      width: 66.6% !important; }\n    .col-offset-66-md {\n      margin-left: 66.6% !important; }\n    .col-70-md {\n      width: 70% !important; }\n    .col-offset-70-md {\n      margin-left: 70% !important; }\n    .col-75-md {\n      width: 75% !important; }\n    .col-offset-75-md {\n      margin-left: 75% !important; }\n    .col-80-md {\n      width: 80% !important; }\n    .col-offset-80-md {\n      margin-left: 80% !important; }\n    .col-85-md {\n      width: 85% !important; }\n    .col-offset-85-md {\n      margin-left: 85% !important; }\n    .col-90-md {\n      width: 90% !important; }\n    .col-offset-90-md {\n      margin-left: 90% !important; }\n    .col-95-md {\n      width: 95% !important; }\n    .col-offset-95-md {\n      margin-left: 95% !important; }\n    .col-100-md {\n      width: 100% !important; }\n    .col-offset-100-md {\n      margin-left: 100% !important; } }\n  @media screen and (min-width: 960px) {\n    .col-5-lg {\n      width: 5% !important; }\n    .col-offset-5-lg {\n      margin-left: 5% !important; }\n    .col-10-lg {\n      width: 10% !important; }\n    .col-offset-10-lg {\n      margin-left: 10% !important; }\n    .col-15-lg {\n      width: 15% !important; }\n    .col-offset-15-lg {\n      margin-left: 15% !important; }\n    .col-20-lg {\n      width: 20% !important; }\n    .col-offset-20-lg {\n      margin-left: 20% !important; }\n    .col-25-lg {\n      width: 25% !important; }\n    .col-offset-25-lg {\n      margin-left: 25% !important; }\n    .col-30-lg {\n      width: 30% !important; }\n    .col-offset-30-lg {\n      margin-left: 30% !important; }\n    .col-33-lg {\n      width: 33.3% !important; }\n    .col-offset-33-lg {\n      margin-left: 33.3% !important; }\n    .col-35-lg {\n      width: 35% !important; }\n    .col-offset-35-lg {\n      margin-left: 35% !important; }\n    .col-40-lg {\n      width: 40% !important; }\n    .col-offset-40-lg {\n      margin-left: 40% !important; }\n    .col-45-lg {\n      width: 45% !important; }\n    .col-offset-45-lg {\n      margin-left: 45% !important; }\n    .col-50-lg {\n      width: 50% !important; }\n    .col-offset-50-lg {\n      margin-left: 50% !important; }\n    .col-55-lg {\n      width: 55% !important; }\n    .col-offset-55-lg {\n      margin-left: 55% !important; }\n    .col-60-lg {\n      width: 60% !important; }\n    .col-offset-60-lg {\n      margin-left: 60% !important; }\n    .col-65-lg {\n      width: 65% !important; }\n    .col-offset-65-lg {\n      margin-left: 65% !important; }\n    .col-66-lg {\n      width: 66.6% !important; }\n    .col-offset-66-lg {\n      margin-left: 66.6% !important; }\n    .col-70-lg {\n      width: 70% !important; }\n    .col-offset-70-lg {\n      margin-left: 70% !important; }\n    .col-75-lg {\n      width: 75% !important; }\n    .col-offset-75-lg {\n      margin-left: 75% !important; }\n    .col-80-lg {\n      width: 80% !important; }\n    .col-offset-80-lg {\n      margin-left: 80% !important; }\n    .col-85-lg {\n      width: 85% !important; }\n    .col-offset-85-lg {\n      margin-left: 85% !important; }\n    .col-90-lg {\n      width: 90% !important; }\n    .col-offset-90-lg {\n      margin-left: 90% !important; }\n    .col-95-lg {\n      width: 95% !important; }\n    .col-offset-95-lg {\n      margin-left: 95% !important; }\n    .col-100-lg {\n      width: 100% !important; }\n    .col-offset-100-lg {\n      margin-left: 100% !important; } }\n  @media screen and (min-width: 1140px) {\n    .col-5-xl {\n      width: 5% !important; }\n    .col-offset-5-xl {\n      margin-left: 5% !important; }\n    .col-10-xl {\n      width: 10% !important; }\n    .col-offset-10-xl {\n      margin-left: 10% !important; }\n    .col-15-xl {\n      width: 15% !important; }\n    .col-offset-15-xl {\n      margin-left: 15% !important; }\n    .col-20-xl {\n      width: 20% !important; }\n    .col-offset-20-xl {\n      margin-left: 20% !important; }\n    .col-25-xl {\n      width: 25% !important; }\n    .col-offset-25-xl {\n      margin-left: 25% !important; }\n    .col-30-xl {\n      width: 30% !important; }\n    .col-offset-30-xl {\n      margin-left: 30% !important; }\n    .col-33-xl {\n      width: 33.3% !important; }\n    .col-offset-33-xl {\n      margin-left: 33.3% !important; }\n    .col-35-xl {\n      width: 35% !important; }\n    .col-offset-35-xl {\n      margin-left: 35% !important; }\n    .col-40-xl {\n      width: 40% !important; }\n    .col-offset-40-xl {\n      margin-left: 40% !important; }\n    .col-45-xl {\n      width: 45% !important; }\n    .col-offset-45-xl {\n      margin-left: 45% !important; }\n    .col-50-xl {\n      width: 50% !important; }\n    .col-offset-50-xl {\n      margin-left: 50% !important; }\n    .col-55-xl {\n      width: 55% !important; }\n    .col-offset-55-xl {\n      margin-left: 55% !important; }\n    .col-60-xl {\n      width: 60% !important; }\n    .col-offset-60-xl {\n      margin-left: 60% !important; }\n    .col-65-xl {\n      width: 65% !important; }\n    .col-offset-65-xl {\n      margin-left: 65% !important; }\n    .col-66-xl {\n      width: 66.6% !important; }\n    .col-offset-66-xl {\n      margin-left: 66.6% !important; }\n    .col-70-xl {\n      width: 70% !important; }\n    .col-offset-70-xl {\n      margin-left: 70% !important; }\n    .col-75-xl {\n      width: 75% !important; }\n    .col-offset-75-xl {\n      margin-left: 75% !important; }\n    .col-80-xl {\n      width: 80% !important; }\n    .col-offset-80-xl {\n      margin-left: 80% !important; }\n    .col-85-xl {\n      width: 85% !important; }\n    .col-offset-85-xl {\n      margin-left: 85% !important; }\n    .col-90-xl {\n      width: 90% !important; }\n    .col-offset-90-xl {\n      margin-left: 90% !important; }\n    .col-95-xl {\n      width: 95% !important; }\n    .col-offset-95-xl {\n      margin-left: 95% !important; }\n    .col-100-xl {\n      width: 100% !important; }\n    .col-offset-100-xl {\n      margin-left: 100% !important; } }\n\n.block-grid {\n  padding: 0 !important;\n  list-style: none !important;\n  font-size: 0 !important;\n  display: block !important;\n  overflow: hidden !important;\n  margin-bottom: 2rem !important; }\n  .block-grid-gutters {\n    margin: -1rem -1rem 1rem -1rem !important; }\n    .block-grid-gutters .block-grid__item {\n      padding: 1rem !important; }\n  .block-grid__item {\n    display: block !important;\n    float: left !important;\n    font-size: 16px !important; }\n\n@media screen {\n  .block-1-xs .block-grid__item {\n    width: 100% !important; }\n    .block-1-xs .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-1-xs .block-grid__item:nth-of-type(1n + 1) {\n      clear: both !important; }\n  .block-2-xs .block-grid__item {\n    width: 50% !important; }\n    .block-2-xs .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-2-xs .block-grid__item:nth-of-type(2n + 1) {\n      clear: both !important; }\n  .block-3-xs .block-grid__item {\n    width: 33.33333% !important; }\n    .block-3-xs .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-3-xs .block-grid__item:nth-of-type(3n + 1) {\n      clear: both !important; }\n  .block-4-xs .block-grid__item {\n    width: 25% !important; }\n    .block-4-xs .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-4-xs .block-grid__item:nth-of-type(4n + 1) {\n      clear: both !important; }\n  .block-5-xs .block-grid__item {\n    width: 20% !important; }\n    .block-5-xs .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-5-xs .block-grid__item:nth-of-type(5n + 1) {\n      clear: both !important; }\n  .block-6-xs .block-grid__item {\n    width: 16.66667% !important; }\n    .block-6-xs .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-6-xs .block-grid__item:nth-of-type(6n + 1) {\n      clear: both !important; } }\n\n@media screen and (min-width: 480px) {\n  .block-1-sm .block-grid__item {\n    width: 100% !important; }\n    .block-1-sm .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-1-sm .block-grid__item:nth-of-type(1n + 1) {\n      clear: both !important; }\n  .block-2-sm .block-grid__item {\n    width: 50% !important; }\n    .block-2-sm .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-2-sm .block-grid__item:nth-of-type(2n + 1) {\n      clear: both !important; }\n  .block-3-sm .block-grid__item {\n    width: 33.33333% !important; }\n    .block-3-sm .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-3-sm .block-grid__item:nth-of-type(3n + 1) {\n      clear: both !important; }\n  .block-4-sm .block-grid__item {\n    width: 25% !important; }\n    .block-4-sm .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-4-sm .block-grid__item:nth-of-type(4n + 1) {\n      clear: both !important; }\n  .block-5-sm .block-grid__item {\n    width: 20% !important; }\n    .block-5-sm .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-5-sm .block-grid__item:nth-of-type(5n + 1) {\n      clear: both !important; }\n  .block-6-sm .block-grid__item {\n    width: 16.66667% !important; }\n    .block-6-sm .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-6-sm .block-grid__item:nth-of-type(6n + 1) {\n      clear: both !important; } }\n\n@media screen and (min-width: 680px) {\n  .block-1-md .block-grid__item {\n    width: 100% !important; }\n    .block-1-md .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-1-md .block-grid__item:nth-of-type(1n + 1) {\n      clear: both !important; }\n  .block-2-md .block-grid__item {\n    width: 50% !important; }\n    .block-2-md .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-2-md .block-grid__item:nth-of-type(2n + 1) {\n      clear: both !important; }\n  .block-3-md .block-grid__item {\n    width: 33.33333% !important; }\n    .block-3-md .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-3-md .block-grid__item:nth-of-type(3n + 1) {\n      clear: both !important; }\n  .block-4-md .block-grid__item {\n    width: 25% !important; }\n    .block-4-md .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-4-md .block-grid__item:nth-of-type(4n + 1) {\n      clear: both !important; }\n  .block-5-md .block-grid__item {\n    width: 20% !important; }\n    .block-5-md .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-5-md .block-grid__item:nth-of-type(5n + 1) {\n      clear: both !important; }\n  .block-6-md .block-grid__item {\n    width: 16.66667% !important; }\n    .block-6-md .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-6-md .block-grid__item:nth-of-type(6n + 1) {\n      clear: both !important; } }\n\n@media screen and (min-width: 960px) {\n  .block-1-lg .block-grid__item {\n    width: 100% !important; }\n    .block-1-lg .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-1-lg .block-grid__item:nth-of-type(1n + 1) {\n      clear: both !important; }\n  .block-2-lg .block-grid__item {\n    width: 50% !important; }\n    .block-2-lg .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-2-lg .block-grid__item:nth-of-type(2n + 1) {\n      clear: both !important; }\n  .block-3-lg .block-grid__item {\n    width: 33.33333% !important; }\n    .block-3-lg .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-3-lg .block-grid__item:nth-of-type(3n + 1) {\n      clear: both !important; }\n  .block-4-lg .block-grid__item {\n    width: 25% !important; }\n    .block-4-lg .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-4-lg .block-grid__item:nth-of-type(4n + 1) {\n      clear: both !important; }\n  .block-5-lg .block-grid__item {\n    width: 20% !important; }\n    .block-5-lg .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-5-lg .block-grid__item:nth-of-type(5n + 1) {\n      clear: both !important; }\n  .block-6-lg .block-grid__item {\n    width: 16.66667% !important; }\n    .block-6-lg .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-6-lg .block-grid__item:nth-of-type(6n + 1) {\n      clear: both !important; } }\n\n@media screen and (min-width: 1140px) {\n  .block-1-xl .block-grid__item {\n    width: 100% !important; }\n    .block-1-xl .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-1-xl .block-grid__item:nth-of-type(1n + 1) {\n      clear: both !important; }\n  .block-2-xl .block-grid__item {\n    width: 50% !important; }\n    .block-2-xl .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-2-xl .block-grid__item:nth-of-type(2n + 1) {\n      clear: both !important; }\n  .block-3-xl .block-grid__item {\n    width: 33.33333% !important; }\n    .block-3-xl .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-3-xl .block-grid__item:nth-of-type(3n + 1) {\n      clear: both !important; }\n  .block-4-xl .block-grid__item {\n    width: 25% !important; }\n    .block-4-xl .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-4-xl .block-grid__item:nth-of-type(4n + 1) {\n      clear: both !important; }\n  .block-5-xl .block-grid__item {\n    width: 20% !important; }\n    .block-5-xl .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-5-xl .block-grid__item:nth-of-type(5n + 1) {\n      clear: both !important; }\n  .block-6-xl .block-grid__item {\n    width: 16.66667% !important; }\n    .block-6-xl .block-grid__item:nth-of-type(1n) {\n      clear: none !important; }\n    .block-6-xl .block-grid__item:nth-of-type(6n + 1) {\n      clear: both !important; } }\n\n@media screen {\n  .block-xs {\n    display: block !important; }\n  .hide-xs {\n    display: none !important; }\n  .inline-xs {\n    display: inline !important; }\n  .inline-block-xs {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 480px) {\n  .block-sm {\n    display: block !important; }\n  .hide-sm {\n    display: none !important; }\n  .inline-sm {\n    display: inline !important; }\n  .inline-block-sm {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 680px) {\n  .block-md {\n    display: block !important; }\n  .hide-md {\n    display: none !important; }\n  .inline-md {\n    display: inline !important; }\n  .inline-block-md {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 960px) {\n  .block-lg {\n    display: block !important; }\n  .hide-lg {\n    display: none !important; }\n  .inline-lg {\n    display: inline !important; }\n  .inline-block-lg {\n    display: inline-block !important; } }\n\n@media screen and (min-width: 1140px) {\n  .block-xl {\n    display: block !important; }\n  .hide-xl {\n    display: none !important; }\n  .inline-xl {\n    display: inline !important; }\n  .inline-block-xl {\n    display: inline-block !important; } }\n\n@media screen {\n  .m-0-xs {\n    margin: 0rem !important; }\n  .m-05-xs {\n    margin: 0.3125rem !important; }\n  .m-1-xs {\n    margin: 0.625rem !important; }\n  .m-2-xs {\n    margin: 1.25rem !important; }\n  .m-3-xs {\n    margin: 1.5625rem !important; }\n  .m-4-xs {\n    margin: 3.125rem !important; }\n  .m-t-0-xs {\n    margin-top: 0rem !important; }\n  .m-t-05-xs {\n    margin-top: 0.3125rem !important; }\n  .m-t-1-xs {\n    margin-top: 0.625rem !important; }\n  .m-t-2-xs {\n    margin-top: 1.25rem !important; }\n  .m-t-3-xs {\n    margin-top: 1.5625rem !important; }\n  .m-t-4-xs {\n    margin-top: 3.125rem !important; }\n  .m-b-0-xs {\n    margin-bottom: 0rem !important; }\n  .m-b-05-xs {\n    margin-bottom: 0.3125rem !important; }\n  .m-b-1-xs {\n    margin-bottom: 0.625rem !important; }\n  .m-b-2-xs {\n    margin-bottom: 1.25rem !important; }\n  .m-b-3-xs {\n    margin-bottom: 1.5625rem !important; }\n  .m-b-4-xs {\n    margin-bottom: 3.125rem !important; }\n  .m-l-0-xs {\n    margin-left: 0rem !important; }\n  .m-l-05-xs {\n    margin-left: 0.3125rem !important; }\n  .m-l-1-xs {\n    margin-left: 0.625rem !important; }\n  .m-l-2-xs {\n    margin-left: 1.25rem !important; }\n  .m-l-3-xs {\n    margin-left: 1.5625rem !important; }\n  .m-l-4-xs {\n    margin-left: 3.125rem !important; }\n  .m-r-0-xs {\n    margin-right: 0rem !important; }\n  .m-r-05-xs {\n    margin-right: 0.3125rem !important; }\n  .m-r-1-xs {\n    margin-right: 0.625rem !important; }\n  .m-r-2-xs {\n    margin-right: 1.25rem !important; }\n  .m-r-3-xs {\n    margin-right: 1.5625rem !important; }\n  .m-r-4-xs {\n    margin-right: 3.125rem !important; }\n  .m-lr-0-xs {\n    margin-left: 0rem !important;\n    margin-right: 0rem !important; }\n  .m-lr-05-xs {\n    margin-left: 0.3125rem !important;\n    margin-right: 0.3125rem !important; }\n  .m-lr-1-xs {\n    margin-left: 0.625rem !important;\n    margin-right: 0.625rem !important; }\n  .m-lr-2-xs {\n    margin-left: 1.25rem !important;\n    margin-right: 1.25rem !important; }\n  .m-lr-3-xs {\n    margin-left: 1.5625rem !important;\n    margin-right: 1.5625rem !important; }\n  .m-lr-4-xs {\n    margin-left: 3.125rem !important;\n    margin-right: 3.125rem !important; }\n  .m-tb-0-xs {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important; }\n  .m-tb-05-xs {\n    margin-top: 0.3125rem !important;\n    margin-bottom: 0.3125rem !important; }\n  .m-tb-1-xs {\n    margin-top: 0.625rem !important;\n    margin-bottom: 0.625rem !important; }\n  .m-tb-2-xs {\n    margin-top: 1.25rem !important;\n    margin-bottom: 1.25rem !important; }\n  .m-tb-3-xs {\n    margin-top: 1.5625rem !important;\n    margin-bottom: 1.5625rem !important; }\n  .m-tb-4-xs {\n    margin-top: 3.125rem !important;\n    margin-bottom: 3.125rem !important; }\n  .m-auto-xs {\n    margin: 0 auto !important; } }\n\n@media screen and (min-width: 480px) {\n  .m-0-sm {\n    margin: 0rem !important; }\n  .m-05-sm {\n    margin: 0.3125rem !important; }\n  .m-1-sm {\n    margin: 0.625rem !important; }\n  .m-2-sm {\n    margin: 1.25rem !important; }\n  .m-3-sm {\n    margin: 1.5625rem !important; }\n  .m-4-sm {\n    margin: 3.125rem !important; }\n  .m-t-0-sm {\n    margin-top: 0rem !important; }\n  .m-t-05-sm {\n    margin-top: 0.3125rem !important; }\n  .m-t-1-sm {\n    margin-top: 0.625rem !important; }\n  .m-t-2-sm {\n    margin-top: 1.25rem !important; }\n  .m-t-3-sm {\n    margin-top: 1.5625rem !important; }\n  .m-t-4-sm {\n    margin-top: 3.125rem !important; }\n  .m-b-0-sm {\n    margin-bottom: 0rem !important; }\n  .m-b-05-sm {\n    margin-bottom: 0.3125rem !important; }\n  .m-b-1-sm {\n    margin-bottom: 0.625rem !important; }\n  .m-b-2-sm {\n    margin-bottom: 1.25rem !important; }\n  .m-b-3-sm {\n    margin-bottom: 1.5625rem !important; }\n  .m-b-4-sm {\n    margin-bottom: 3.125rem !important; }\n  .m-l-0-sm {\n    margin-left: 0rem !important; }\n  .m-l-05-sm {\n    margin-left: 0.3125rem !important; }\n  .m-l-1-sm {\n    margin-left: 0.625rem !important; }\n  .m-l-2-sm {\n    margin-left: 1.25rem !important; }\n  .m-l-3-sm {\n    margin-left: 1.5625rem !important; }\n  .m-l-4-sm {\n    margin-left: 3.125rem !important; }\n  .m-r-0-sm {\n    margin-right: 0rem !important; }\n  .m-r-05-sm {\n    margin-right: 0.3125rem !important; }\n  .m-r-1-sm {\n    margin-right: 0.625rem !important; }\n  .m-r-2-sm {\n    margin-right: 1.25rem !important; }\n  .m-r-3-sm {\n    margin-right: 1.5625rem !important; }\n  .m-r-4-sm {\n    margin-right: 3.125rem !important; }\n  .m-lr-0-sm {\n    margin-left: 0rem !important;\n    margin-right: 0rem !important; }\n  .m-lr-05-sm {\n    margin-left: 0.3125rem !important;\n    margin-right: 0.3125rem !important; }\n  .m-lr-1-sm {\n    margin-left: 0.625rem !important;\n    margin-right: 0.625rem !important; }\n  .m-lr-2-sm {\n    margin-left: 1.25rem !important;\n    margin-right: 1.25rem !important; }\n  .m-lr-3-sm {\n    margin-left: 1.5625rem !important;\n    margin-right: 1.5625rem !important; }\n  .m-lr-4-sm {\n    margin-left: 3.125rem !important;\n    margin-right: 3.125rem !important; }\n  .m-tb-0-sm {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important; }\n  .m-tb-05-sm {\n    margin-top: 0.3125rem !important;\n    margin-bottom: 0.3125rem !important; }\n  .m-tb-1-sm {\n    margin-top: 0.625rem !important;\n    margin-bottom: 0.625rem !important; }\n  .m-tb-2-sm {\n    margin-top: 1.25rem !important;\n    margin-bottom: 1.25rem !important; }\n  .m-tb-3-sm {\n    margin-top: 1.5625rem !important;\n    margin-bottom: 1.5625rem !important; }\n  .m-tb-4-sm {\n    margin-top: 3.125rem !important;\n    margin-bottom: 3.125rem !important; }\n  .m-auto-sm {\n    margin: 0 auto !important; } }\n\n@media screen and (min-width: 680px) {\n  .m-0-md {\n    margin: 0rem !important; }\n  .m-05-md {\n    margin: 0.3125rem !important; }\n  .m-1-md {\n    margin: 0.625rem !important; }\n  .m-2-md {\n    margin: 1.25rem !important; }\n  .m-3-md {\n    margin: 1.5625rem !important; }\n  .m-4-md {\n    margin: 3.125rem !important; }\n  .m-t-0-md {\n    margin-top: 0rem !important; }\n  .m-t-05-md {\n    margin-top: 0.3125rem !important; }\n  .m-t-1-md {\n    margin-top: 0.625rem !important; }\n  .m-t-2-md {\n    margin-top: 1.25rem !important; }\n  .m-t-3-md {\n    margin-top: 1.5625rem !important; }\n  .m-t-4-md {\n    margin-top: 3.125rem !important; }\n  .m-b-0-md {\n    margin-bottom: 0rem !important; }\n  .m-b-05-md {\n    margin-bottom: 0.3125rem !important; }\n  .m-b-1-md {\n    margin-bottom: 0.625rem !important; }\n  .m-b-2-md {\n    margin-bottom: 1.25rem !important; }\n  .m-b-3-md {\n    margin-bottom: 1.5625rem !important; }\n  .m-b-4-md {\n    margin-bottom: 3.125rem !important; }\n  .m-l-0-md {\n    margin-left: 0rem !important; }\n  .m-l-05-md {\n    margin-left: 0.3125rem !important; }\n  .m-l-1-md {\n    margin-left: 0.625rem !important; }\n  .m-l-2-md {\n    margin-left: 1.25rem !important; }\n  .m-l-3-md {\n    margin-left: 1.5625rem !important; }\n  .m-l-4-md {\n    margin-left: 3.125rem !important; }\n  .m-r-0-md {\n    margin-right: 0rem !important; }\n  .m-r-05-md {\n    margin-right: 0.3125rem !important; }\n  .m-r-1-md {\n    margin-right: 0.625rem !important; }\n  .m-r-2-md {\n    margin-right: 1.25rem !important; }\n  .m-r-3-md {\n    margin-right: 1.5625rem !important; }\n  .m-r-4-md {\n    margin-right: 3.125rem !important; }\n  .m-lr-0-md {\n    margin-left: 0rem !important;\n    margin-right: 0rem !important; }\n  .m-lr-05-md {\n    margin-left: 0.3125rem !important;\n    margin-right: 0.3125rem !important; }\n  .m-lr-1-md {\n    margin-left: 0.625rem !important;\n    margin-right: 0.625rem !important; }\n  .m-lr-2-md {\n    margin-left: 1.25rem !important;\n    margin-right: 1.25rem !important; }\n  .m-lr-3-md {\n    margin-left: 1.5625rem !important;\n    margin-right: 1.5625rem !important; }\n  .m-lr-4-md {\n    margin-left: 3.125rem !important;\n    margin-right: 3.125rem !important; }\n  .m-tb-0-md {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important; }\n  .m-tb-05-md {\n    margin-top: 0.3125rem !important;\n    margin-bottom: 0.3125rem !important; }\n  .m-tb-1-md {\n    margin-top: 0.625rem !important;\n    margin-bottom: 0.625rem !important; }\n  .m-tb-2-md {\n    margin-top: 1.25rem !important;\n    margin-bottom: 1.25rem !important; }\n  .m-tb-3-md {\n    margin-top: 1.5625rem !important;\n    margin-bottom: 1.5625rem !important; }\n  .m-tb-4-md {\n    margin-top: 3.125rem !important;\n    margin-bottom: 3.125rem !important; }\n  .m-auto-md {\n    margin: 0 auto !important; } }\n\n@media screen and (min-width: 960px) {\n  .m-0-lg {\n    margin: 0rem !important; }\n  .m-05-lg {\n    margin: 0.3125rem !important; }\n  .m-1-lg {\n    margin: 0.625rem !important; }\n  .m-2-lg {\n    margin: 1.25rem !important; }\n  .m-3-lg {\n    margin: 1.5625rem !important; }\n  .m-4-lg {\n    margin: 3.125rem !important; }\n  .m-t-0-lg {\n    margin-top: 0rem !important; }\n  .m-t-05-lg {\n    margin-top: 0.3125rem !important; }\n  .m-t-1-lg {\n    margin-top: 0.625rem !important; }\n  .m-t-2-lg {\n    margin-top: 1.25rem !important; }\n  .m-t-3-lg {\n    margin-top: 1.5625rem !important; }\n  .m-t-4-lg {\n    margin-top: 3.125rem !important; }\n  .m-b-0-lg {\n    margin-bottom: 0rem !important; }\n  .m-b-05-lg {\n    margin-bottom: 0.3125rem !important; }\n  .m-b-1-lg {\n    margin-bottom: 0.625rem !important; }\n  .m-b-2-lg {\n    margin-bottom: 1.25rem !important; }\n  .m-b-3-lg {\n    margin-bottom: 1.5625rem !important; }\n  .m-b-4-lg {\n    margin-bottom: 3.125rem !important; }\n  .m-l-0-lg {\n    margin-left: 0rem !important; }\n  .m-l-05-lg {\n    margin-left: 0.3125rem !important; }\n  .m-l-1-lg {\n    margin-left: 0.625rem !important; }\n  .m-l-2-lg {\n    margin-left: 1.25rem !important; }\n  .m-l-3-lg {\n    margin-left: 1.5625rem !important; }\n  .m-l-4-lg {\n    margin-left: 3.125rem !important; }\n  .m-r-0-lg {\n    margin-right: 0rem !important; }\n  .m-r-05-lg {\n    margin-right: 0.3125rem !important; }\n  .m-r-1-lg {\n    margin-right: 0.625rem !important; }\n  .m-r-2-lg {\n    margin-right: 1.25rem !important; }\n  .m-r-3-lg {\n    margin-right: 1.5625rem !important; }\n  .m-r-4-lg {\n    margin-right: 3.125rem !important; }\n  .m-lr-0-lg {\n    margin-left: 0rem !important;\n    margin-right: 0rem !important; }\n  .m-lr-05-lg {\n    margin-left: 0.3125rem !important;\n    margin-right: 0.3125rem !important; }\n  .m-lr-1-lg {\n    margin-left: 0.625rem !important;\n    margin-right: 0.625rem !important; }\n  .m-lr-2-lg {\n    margin-left: 1.25rem !important;\n    margin-right: 1.25rem !important; }\n  .m-lr-3-lg {\n    margin-left: 1.5625rem !important;\n    margin-right: 1.5625rem !important; }\n  .m-lr-4-lg {\n    margin-left: 3.125rem !important;\n    margin-right: 3.125rem !important; }\n  .m-tb-0-lg {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important; }\n  .m-tb-05-lg {\n    margin-top: 0.3125rem !important;\n    margin-bottom: 0.3125rem !important; }\n  .m-tb-1-lg {\n    margin-top: 0.625rem !important;\n    margin-bottom: 0.625rem !important; }\n  .m-tb-2-lg {\n    margin-top: 1.25rem !important;\n    margin-bottom: 1.25rem !important; }\n  .m-tb-3-lg {\n    margin-top: 1.5625rem !important;\n    margin-bottom: 1.5625rem !important; }\n  .m-tb-4-lg {\n    margin-top: 3.125rem !important;\n    margin-bottom: 3.125rem !important; }\n  .m-auto-lg {\n    margin: 0 auto !important; } }\n\n@media screen and (min-width: 1140px) {\n  .m-0-xl {\n    margin: 0rem !important; }\n  .m-05-xl {\n    margin: 0.3125rem !important; }\n  .m-1-xl {\n    margin: 0.625rem !important; }\n  .m-2-xl {\n    margin: 1.25rem !important; }\n  .m-3-xl {\n    margin: 1.5625rem !important; }\n  .m-4-xl {\n    margin: 3.125rem !important; }\n  .m-t-0-xl {\n    margin-top: 0rem !important; }\n  .m-t-05-xl {\n    margin-top: 0.3125rem !important; }\n  .m-t-1-xl {\n    margin-top: 0.625rem !important; }\n  .m-t-2-xl {\n    margin-top: 1.25rem !important; }\n  .m-t-3-xl {\n    margin-top: 1.5625rem !important; }\n  .m-t-4-xl {\n    margin-top: 3.125rem !important; }\n  .m-b-0-xl {\n    margin-bottom: 0rem !important; }\n  .m-b-05-xl {\n    margin-bottom: 0.3125rem !important; }\n  .m-b-1-xl {\n    margin-bottom: 0.625rem !important; }\n  .m-b-2-xl {\n    margin-bottom: 1.25rem !important; }\n  .m-b-3-xl {\n    margin-bottom: 1.5625rem !important; }\n  .m-b-4-xl {\n    margin-bottom: 3.125rem !important; }\n  .m-l-0-xl {\n    margin-left: 0rem !important; }\n  .m-l-05-xl {\n    margin-left: 0.3125rem !important; }\n  .m-l-1-xl {\n    margin-left: 0.625rem !important; }\n  .m-l-2-xl {\n    margin-left: 1.25rem !important; }\n  .m-l-3-xl {\n    margin-left: 1.5625rem !important; }\n  .m-l-4-xl {\n    margin-left: 3.125rem !important; }\n  .m-r-0-xl {\n    margin-right: 0rem !important; }\n  .m-r-05-xl {\n    margin-right: 0.3125rem !important; }\n  .m-r-1-xl {\n    margin-right: 0.625rem !important; }\n  .m-r-2-xl {\n    margin-right: 1.25rem !important; }\n  .m-r-3-xl {\n    margin-right: 1.5625rem !important; }\n  .m-r-4-xl {\n    margin-right: 3.125rem !important; }\n  .m-lr-0-xl {\n    margin-left: 0rem !important;\n    margin-right: 0rem !important; }\n  .m-lr-05-xl {\n    margin-left: 0.3125rem !important;\n    margin-right: 0.3125rem !important; }\n  .m-lr-1-xl {\n    margin-left: 0.625rem !important;\n    margin-right: 0.625rem !important; }\n  .m-lr-2-xl {\n    margin-left: 1.25rem !important;\n    margin-right: 1.25rem !important; }\n  .m-lr-3-xl {\n    margin-left: 1.5625rem !important;\n    margin-right: 1.5625rem !important; }\n  .m-lr-4-xl {\n    margin-left: 3.125rem !important;\n    margin-right: 3.125rem !important; }\n  .m-tb-0-xl {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important; }\n  .m-tb-05-xl {\n    margin-top: 0.3125rem !important;\n    margin-bottom: 0.3125rem !important; }\n  .m-tb-1-xl {\n    margin-top: 0.625rem !important;\n    margin-bottom: 0.625rem !important; }\n  .m-tb-2-xl {\n    margin-top: 1.25rem !important;\n    margin-bottom: 1.25rem !important; }\n  .m-tb-3-xl {\n    margin-top: 1.5625rem !important;\n    margin-bottom: 1.5625rem !important; }\n  .m-tb-4-xl {\n    margin-top: 3.125rem !important;\n    margin-bottom: 3.125rem !important; }\n  .m-auto-xl {\n    margin: 0 auto !important; } }\n\n@media screen {\n  .p-0-xs {\n    padding: 0rem !important; }\n  .p-05-xs {\n    padding: 0.3125rem !important; }\n  .p-1-xs {\n    padding: 0.625rem !important; }\n  .p-2-xs {\n    padding: 1.25rem !important; }\n  .p-3-xs {\n    padding: 1.5625rem !important; }\n  .p-4-xs {\n    padding: 3.125rem !important; }\n  .p-t-0-xs {\n    padding-top: 0rem !important; }\n  .p-t-05-xs {\n    padding-top: 0.3125rem !important; }\n  .p-t-1-xs {\n    padding-top: 0.625rem !important; }\n  .p-t-2-xs {\n    padding-top: 1.25rem !important; }\n  .p-t-3-xs {\n    padding-top: 1.5625rem !important; }\n  .p-t-4-xs {\n    padding-top: 3.125rem !important; }\n  .p-b-0-xs {\n    padding-bottom: 0rem !important; }\n  .p-b-05-xs {\n    padding-bottom: 0.3125rem !important; }\n  .p-b-1-xs {\n    padding-bottom: 0.625rem !important; }\n  .p-b-2-xs {\n    padding-bottom: 1.25rem !important; }\n  .p-b-3-xs {\n    padding-bottom: 1.5625rem !important; }\n  .p-b-4-xs {\n    padding-bottom: 3.125rem !important; }\n  .p-l-0-xs {\n    padding-left: 0rem !important; }\n  .p-l-05-xs {\n    padding-left: 0.3125rem !important; }\n  .p-l-1-xs {\n    padding-left: 0.625rem !important; }\n  .p-l-2-xs {\n    padding-left: 1.25rem !important; }\n  .p-l-3-xs {\n    padding-left: 1.5625rem !important; }\n  .p-l-4-xs {\n    padding-left: 3.125rem !important; }\n  .p-r-0-xs {\n    padding-right: 0rem !important; }\n  .p-r-05-xs {\n    padding-right: 0.3125rem !important; }\n  .p-r-1-xs {\n    padding-right: 0.625rem !important; }\n  .p-r-2-xs {\n    padding-right: 1.25rem !important; }\n  .p-r-3-xs {\n    padding-right: 1.5625rem !important; }\n  .p-r-4-xs {\n    padding-right: 3.125rem !important; }\n  .p-lr-0-xs {\n    padding-left: 0rem !important;\n    padding-right: 0rem !important; }\n  .p-lr-05-xs {\n    padding-left: 0.3125rem !important;\n    padding-right: 0.3125rem !important; }\n  .p-lr-1-xs {\n    padding-left: 0.625rem !important;\n    padding-right: 0.625rem !important; }\n  .p-lr-2-xs {\n    padding-left: 1.25rem !important;\n    padding-right: 1.25rem !important; }\n  .p-lr-3-xs {\n    padding-left: 1.5625rem !important;\n    padding-right: 1.5625rem !important; }\n  .p-lr-4-xs {\n    padding-left: 3.125rem !important;\n    padding-right: 3.125rem !important; }\n  .p-tb-0-xs {\n    padding-top: 0rem !important;\n    padding-bottom: 0rem !important; }\n  .p-tb-05-xs {\n    padding-top: 0.3125rem !important;\n    padding-bottom: 0.3125rem !important; }\n  .p-tb-1-xs {\n    padding-top: 0.625rem !important;\n    padding-bottom: 0.625rem !important; }\n  .p-tb-2-xs {\n    padding-top: 1.25rem !important;\n    padding-bottom: 1.25rem !important; }\n  .p-tb-3-xs {\n    padding-top: 1.5625rem !important;\n    padding-bottom: 1.5625rem !important; }\n  .p-tb-4-xs {\n    padding-top: 3.125rem !important;\n    padding-bottom: 3.125rem !important; } }\n\n@media screen and (min-width: 480px) {\n  .p-0-sm {\n    padding: 0rem !important; }\n  .p-05-sm {\n    padding: 0.3125rem !important; }\n  .p-1-sm {\n    padding: 0.625rem !important; }\n  .p-2-sm {\n    padding: 1.25rem !important; }\n  .p-3-sm {\n    padding: 1.5625rem !important; }\n  .p-4-sm {\n    padding: 3.125rem !important; }\n  .p-t-0-sm {\n    padding-top: 0rem !important; }\n  .p-t-05-sm {\n    padding-top: 0.3125rem !important; }\n  .p-t-1-sm {\n    padding-top: 0.625rem !important; }\n  .p-t-2-sm {\n    padding-top: 1.25rem !important; }\n  .p-t-3-sm {\n    padding-top: 1.5625rem !important; }\n  .p-t-4-sm {\n    padding-top: 3.125rem !important; }\n  .p-b-0-sm {\n    padding-bottom: 0rem !important; }\n  .p-b-05-sm {\n    padding-bottom: 0.3125rem !important; }\n  .p-b-1-sm {\n    padding-bottom: 0.625rem !important; }\n  .p-b-2-sm {\n    padding-bottom: 1.25rem !important; }\n  .p-b-3-sm {\n    padding-bottom: 1.5625rem !important; }\n  .p-b-4-sm {\n    padding-bottom: 3.125rem !important; }\n  .p-l-0-sm {\n    padding-left: 0rem !important; }\n  .p-l-05-sm {\n    padding-left: 0.3125rem !important; }\n  .p-l-1-sm {\n    padding-left: 0.625rem !important; }\n  .p-l-2-sm {\n    padding-left: 1.25rem !important; }\n  .p-l-3-sm {\n    padding-left: 1.5625rem !important; }\n  .p-l-4-sm {\n    padding-left: 3.125rem !important; }\n  .p-r-0-sm {\n    padding-right: 0rem !important; }\n  .p-r-05-sm {\n    padding-right: 0.3125rem !important; }\n  .p-r-1-sm {\n    padding-right: 0.625rem !important; }\n  .p-r-2-sm {\n    padding-right: 1.25rem !important; }\n  .p-r-3-sm {\n    padding-right: 1.5625rem !important; }\n  .p-r-4-sm {\n    padding-right: 3.125rem !important; }\n  .p-lr-0-sm {\n    padding-left: 0rem !important;\n    padding-right: 0rem !important; }\n  .p-lr-05-sm {\n    padding-left: 0.3125rem !important;\n    padding-right: 0.3125rem !important; }\n  .p-lr-1-sm {\n    padding-left: 0.625rem !important;\n    padding-right: 0.625rem !important; }\n  .p-lr-2-sm {\n    padding-left: 1.25rem !important;\n    padding-right: 1.25rem !important; }\n  .p-lr-3-sm {\n    padding-left: 1.5625rem !important;\n    padding-right: 1.5625rem !important; }\n  .p-lr-4-sm {\n    padding-left: 3.125rem !important;\n    padding-right: 3.125rem !important; }\n  .p-tb-0-sm {\n    padding-top: 0rem !important;\n    padding-bottom: 0rem !important; }\n  .p-tb-05-sm {\n    padding-top: 0.3125rem !important;\n    padding-bottom: 0.3125rem !important; }\n  .p-tb-1-sm {\n    padding-top: 0.625rem !important;\n    padding-bottom: 0.625rem !important; }\n  .p-tb-2-sm {\n    padding-top: 1.25rem !important;\n    padding-bottom: 1.25rem !important; }\n  .p-tb-3-sm {\n    padding-top: 1.5625rem !important;\n    padding-bottom: 1.5625rem !important; }\n  .p-tb-4-sm {\n    padding-top: 3.125rem !important;\n    padding-bottom: 3.125rem !important; } }\n\n@media screen and (min-width: 680px) {\n  .p-0-md {\n    padding: 0rem !important; }\n  .p-05-md {\n    padding: 0.3125rem !important; }\n  .p-1-md {\n    padding: 0.625rem !important; }\n  .p-2-md {\n    padding: 1.25rem !important; }\n  .p-3-md {\n    padding: 1.5625rem !important; }\n  .p-4-md {\n    padding: 3.125rem !important; }\n  .p-t-0-md {\n    padding-top: 0rem !important; }\n  .p-t-05-md {\n    padding-top: 0.3125rem !important; }\n  .p-t-1-md {\n    padding-top: 0.625rem !important; }\n  .p-t-2-md {\n    padding-top: 1.25rem !important; }\n  .p-t-3-md {\n    padding-top: 1.5625rem !important; }\n  .p-t-4-md {\n    padding-top: 3.125rem !important; }\n  .p-b-0-md {\n    padding-bottom: 0rem !important; }\n  .p-b-05-md {\n    padding-bottom: 0.3125rem !important; }\n  .p-b-1-md {\n    padding-bottom: 0.625rem !important; }\n  .p-b-2-md {\n    padding-bottom: 1.25rem !important; }\n  .p-b-3-md {\n    padding-bottom: 1.5625rem !important; }\n  .p-b-4-md {\n    padding-bottom: 3.125rem !important; }\n  .p-l-0-md {\n    padding-left: 0rem !important; }\n  .p-l-05-md {\n    padding-left: 0.3125rem !important; }\n  .p-l-1-md {\n    padding-left: 0.625rem !important; }\n  .p-l-2-md {\n    padding-left: 1.25rem !important; }\n  .p-l-3-md {\n    padding-left: 1.5625rem !important; }\n  .p-l-4-md {\n    padding-left: 3.125rem !important; }\n  .p-r-0-md {\n    padding-right: 0rem !important; }\n  .p-r-05-md {\n    padding-right: 0.3125rem !important; }\n  .p-r-1-md {\n    padding-right: 0.625rem !important; }\n  .p-r-2-md {\n    padding-right: 1.25rem !important; }\n  .p-r-3-md {\n    padding-right: 1.5625rem !important; }\n  .p-r-4-md {\n    padding-right: 3.125rem !important; }\n  .p-lr-0-md {\n    padding-left: 0rem !important;\n    padding-right: 0rem !important; }\n  .p-lr-05-md {\n    padding-left: 0.3125rem !important;\n    padding-right: 0.3125rem !important; }\n  .p-lr-1-md {\n    padding-left: 0.625rem !important;\n    padding-right: 0.625rem !important; }\n  .p-lr-2-md {\n    padding-left: 1.25rem !important;\n    padding-right: 1.25rem !important; }\n  .p-lr-3-md {\n    padding-left: 1.5625rem !important;\n    padding-right: 1.5625rem !important; }\n  .p-lr-4-md {\n    padding-left: 3.125rem !important;\n    padding-right: 3.125rem !important; }\n  .p-tb-0-md {\n    padding-top: 0rem !important;\n    padding-bottom: 0rem !important; }\n  .p-tb-05-md {\n    padding-top: 0.3125rem !important;\n    padding-bottom: 0.3125rem !important; }\n  .p-tb-1-md {\n    padding-top: 0.625rem !important;\n    padding-bottom: 0.625rem !important; }\n  .p-tb-2-md {\n    padding-top: 1.25rem !important;\n    padding-bottom: 1.25rem !important; }\n  .p-tb-3-md {\n    padding-top: 1.5625rem !important;\n    padding-bottom: 1.5625rem !important; }\n  .p-tb-4-md {\n    padding-top: 3.125rem !important;\n    padding-bottom: 3.125rem !important; } }\n\n@media screen and (min-width: 960px) {\n  .p-0-lg {\n    padding: 0rem !important; }\n  .p-05-lg {\n    padding: 0.3125rem !important; }\n  .p-1-lg {\n    padding: 0.625rem !important; }\n  .p-2-lg {\n    padding: 1.25rem !important; }\n  .p-3-lg {\n    padding: 1.5625rem !important; }\n  .p-4-lg {\n    padding: 3.125rem !important; }\n  .p-t-0-lg {\n    padding-top: 0rem !important; }\n  .p-t-05-lg {\n    padding-top: 0.3125rem !important; }\n  .p-t-1-lg {\n    padding-top: 0.625rem !important; }\n  .p-t-2-lg {\n    padding-top: 1.25rem !important; }\n  .p-t-3-lg {\n    padding-top: 1.5625rem !important; }\n  .p-t-4-lg {\n    padding-top: 3.125rem !important; }\n  .p-b-0-lg {\n    padding-bottom: 0rem !important; }\n  .p-b-05-lg {\n    padding-bottom: 0.3125rem !important; }\n  .p-b-1-lg {\n    padding-bottom: 0.625rem !important; }\n  .p-b-2-lg {\n    padding-bottom: 1.25rem !important; }\n  .p-b-3-lg {\n    padding-bottom: 1.5625rem !important; }\n  .p-b-4-lg {\n    padding-bottom: 3.125rem !important; }\n  .p-l-0-lg {\n    padding-left: 0rem !important; }\n  .p-l-05-lg {\n    padding-left: 0.3125rem !important; }\n  .p-l-1-lg {\n    padding-left: 0.625rem !important; }\n  .p-l-2-lg {\n    padding-left: 1.25rem !important; }\n  .p-l-3-lg {\n    padding-left: 1.5625rem !important; }\n  .p-l-4-lg {\n    padding-left: 3.125rem !important; }\n  .p-r-0-lg {\n    padding-right: 0rem !important; }\n  .p-r-05-lg {\n    padding-right: 0.3125rem !important; }\n  .p-r-1-lg {\n    padding-right: 0.625rem !important; }\n  .p-r-2-lg {\n    padding-right: 1.25rem !important; }\n  .p-r-3-lg {\n    padding-right: 1.5625rem !important; }\n  .p-r-4-lg {\n    padding-right: 3.125rem !important; }\n  .p-lr-0-lg {\n    padding-left: 0rem !important;\n    padding-right: 0rem !important; }\n  .p-lr-05-lg {\n    padding-left: 0.3125rem !important;\n    padding-right: 0.3125rem !important; }\n  .p-lr-1-lg {\n    padding-left: 0.625rem !important;\n    padding-right: 0.625rem !important; }\n  .p-lr-2-lg {\n    padding-left: 1.25rem !important;\n    padding-right: 1.25rem !important; }\n  .p-lr-3-lg {\n    padding-left: 1.5625rem !important;\n    padding-right: 1.5625rem !important; }\n  .p-lr-4-lg {\n    padding-left: 3.125rem !important;\n    padding-right: 3.125rem !important; }\n  .p-tb-0-lg {\n    padding-top: 0rem !important;\n    padding-bottom: 0rem !important; }\n  .p-tb-05-lg {\n    padding-top: 0.3125rem !important;\n    padding-bottom: 0.3125rem !important; }\n  .p-tb-1-lg {\n    padding-top: 0.625rem !important;\n    padding-bottom: 0.625rem !important; }\n  .p-tb-2-lg {\n    padding-top: 1.25rem !important;\n    padding-bottom: 1.25rem !important; }\n  .p-tb-3-lg {\n    padding-top: 1.5625rem !important;\n    padding-bottom: 1.5625rem !important; }\n  .p-tb-4-lg {\n    padding-top: 3.125rem !important;\n    padding-bottom: 3.125rem !important; } }\n\n@media screen and (min-width: 1140px) {\n  .p-0-xl {\n    padding: 0rem !important; }\n  .p-05-xl {\n    padding: 0.3125rem !important; }\n  .p-1-xl {\n    padding: 0.625rem !important; }\n  .p-2-xl {\n    padding: 1.25rem !important; }\n  .p-3-xl {\n    padding: 1.5625rem !important; }\n  .p-4-xl {\n    padding: 3.125rem !important; }\n  .p-t-0-xl {\n    padding-top: 0rem !important; }\n  .p-t-05-xl {\n    padding-top: 0.3125rem !important; }\n  .p-t-1-xl {\n    padding-top: 0.625rem !important; }\n  .p-t-2-xl {\n    padding-top: 1.25rem !important; }\n  .p-t-3-xl {\n    padding-top: 1.5625rem !important; }\n  .p-t-4-xl {\n    padding-top: 3.125rem !important; }\n  .p-b-0-xl {\n    padding-bottom: 0rem !important; }\n  .p-b-05-xl {\n    padding-bottom: 0.3125rem !important; }\n  .p-b-1-xl {\n    padding-bottom: 0.625rem !important; }\n  .p-b-2-xl {\n    padding-bottom: 1.25rem !important; }\n  .p-b-3-xl {\n    padding-bottom: 1.5625rem !important; }\n  .p-b-4-xl {\n    padding-bottom: 3.125rem !important; }\n  .p-l-0-xl {\n    padding-left: 0rem !important; }\n  .p-l-05-xl {\n    padding-left: 0.3125rem !important; }\n  .p-l-1-xl {\n    padding-left: 0.625rem !important; }\n  .p-l-2-xl {\n    padding-left: 1.25rem !important; }\n  .p-l-3-xl {\n    padding-left: 1.5625rem !important; }\n  .p-l-4-xl {\n    padding-left: 3.125rem !important; }\n  .p-r-0-xl {\n    padding-right: 0rem !important; }\n  .p-r-05-xl {\n    padding-right: 0.3125rem !important; }\n  .p-r-1-xl {\n    padding-right: 0.625rem !important; }\n  .p-r-2-xl {\n    padding-right: 1.25rem !important; }\n  .p-r-3-xl {\n    padding-right: 1.5625rem !important; }\n  .p-r-4-xl {\n    padding-right: 3.125rem !important; }\n  .p-lr-0-xl {\n    padding-left: 0rem !important;\n    padding-right: 0rem !important; }\n  .p-lr-05-xl {\n    padding-left: 0.3125rem !important;\n    padding-right: 0.3125rem !important; }\n  .p-lr-1-xl {\n    padding-left: 0.625rem !important;\n    padding-right: 0.625rem !important; }\n  .p-lr-2-xl {\n    padding-left: 1.25rem !important;\n    padding-right: 1.25rem !important; }\n  .p-lr-3-xl {\n    padding-left: 1.5625rem !important;\n    padding-right: 1.5625rem !important; }\n  .p-lr-4-xl {\n    padding-left: 3.125rem !important;\n    padding-right: 3.125rem !important; }\n  .p-tb-0-xl {\n    padding-top: 0rem !important;\n    padding-bottom: 0rem !important; }\n  .p-tb-05-xl {\n    padding-top: 0.3125rem !important;\n    padding-bottom: 0.3125rem !important; }\n  .p-tb-1-xl {\n    padding-top: 0.625rem !important;\n    padding-bottom: 0.625rem !important; }\n  .p-tb-2-xl {\n    padding-top: 1.25rem !important;\n    padding-bottom: 1.25rem !important; }\n  .p-tb-3-xl {\n    padding-top: 1.5625rem !important;\n    padding-bottom: 1.5625rem !important; }\n  .p-tb-4-xl {\n    padding-top: 3.125rem !important;\n    padding-bottom: 3.125rem !important; } }\n\n@media screen {\n  .float-l-xs {\n    float: left !important; }\n  .float-r-xs {\n    float: right !important; }\n  .float-none-xs {\n    float: none !important; } }\n\n@media screen and (min-width: 480px) {\n  .float-l-sm {\n    float: left !important; }\n  .float-r-sm {\n    float: right !important; }\n  .float-none-sm {\n    float: none !important; } }\n\n@media screen and (min-width: 680px) {\n  .float-l-md {\n    float: left !important; }\n  .float-r-md {\n    float: right !important; }\n  .float-none-md {\n    float: none !important; } }\n\n@media screen and (min-width: 960px) {\n  .float-l-lg {\n    float: left !important; }\n  .float-r-lg {\n    float: right !important; }\n  .float-none-lg {\n    float: none !important; } }\n\n@media screen and (min-width: 1140px) {\n  .float-l-xl {\n    float: left !important; }\n  .float-r-xl {\n    float: right !important; }\n  .float-none-xl {\n    float: none !important; } }\n\n@media screen {\n  .overflow-hidden-xs {\n    overflow: hidden !important; }\n  .overflow-auto-xs {\n    overflow: auto !important; }\n  .overflow-scroll-xs {\n    overflow: scroll !important; }\n  .overflow-visible-xs {\n    overflow: visible !important; } }\n\n@media screen and (min-width: 480px) {\n  .overflow-hidden-sm {\n    overflow: hidden !important; }\n  .overflow-auto-sm {\n    overflow: auto !important; }\n  .overflow-scroll-sm {\n    overflow: scroll !important; }\n  .overflow-visible-sm {\n    overflow: visible !important; } }\n\n@media screen and (min-width: 680px) {\n  .overflow-hidden-md {\n    overflow: hidden !important; }\n  .overflow-auto-md {\n    overflow: auto !important; }\n  .overflow-scroll-md {\n    overflow: scroll !important; }\n  .overflow-visible-md {\n    overflow: visible !important; } }\n\n@media screen and (min-width: 960px) {\n  .overflow-hidden-lg {\n    overflow: hidden !important; }\n  .overflow-auto-lg {\n    overflow: auto !important; }\n  .overflow-scroll-lg {\n    overflow: scroll !important; }\n  .overflow-visible-lg {\n    overflow: visible !important; } }\n\n@media screen and (min-width: 1140px) {\n  .overflow-hidden-xl {\n    overflow: hidden !important; }\n  .overflow-auto-xl {\n    overflow: auto !important; }\n  .overflow-scroll-xl {\n    overflow: scroll !important; }\n  .overflow-visible-xl {\n    overflow: visible !important; } }\n\n@media screen {\n  .w-auto-xs {\n    width: auto !important; }\n  .w-full-xs {\n    width: 100% !important; }\n  .h-full-xs {\n    height: 100% !important; }\n  .w-fit-xs {\n    max-width: 100% !important; } }\n\n@media screen and (min-width: 480px) {\n  .w-auto-sm {\n    width: auto !important; }\n  .w-full-sm {\n    width: 100% !important; }\n  .h-full-sm {\n    height: 100% !important; }\n  .w-fit-sm {\n    max-width: 100% !important; } }\n\n@media screen and (min-width: 680px) {\n  .w-auto-md {\n    width: auto !important; }\n  .w-full-md {\n    width: 100% !important; }\n  .h-full-md {\n    height: 100% !important; }\n  .w-fit-md {\n    max-width: 100% !important; } }\n\n@media screen and (min-width: 960px) {\n  .w-auto-lg {\n    width: auto !important; }\n  .w-full-lg {\n    width: 100% !important; }\n  .h-full-lg {\n    height: 100% !important; }\n  .w-fit-lg {\n    max-width: 100% !important; } }\n\n@media screen and (min-width: 1140px) {\n  .w-auto-xl {\n    width: auto !important; }\n  .w-full-xl {\n    width: 100% !important; }\n  .h-full-xl {\n    height: 100% !important; }\n  .w-fit-xl {\n    max-width: 100% !important; } }\n\n@media screen {\n  .relative-xs {\n    position: relative !important; }\n  .absolute-xs {\n    position: absolute !important; }\n  .fixed-xs {\n    position: fixed !important; }\n  .static-xs {\n    position: static !important; }\n  .pos-t-0-xs {\n    top: 0rem !important; }\n  .pos-t-05-xs {\n    top: 0.3125rem !important; }\n  .pos-t-1-xs {\n    top: 0.625rem !important; }\n  .pos-t-2-xs {\n    top: 1.25rem !important; }\n  .pos-t-3-xs {\n    top: 1.5625rem !important; }\n  .pos-t-4-xs {\n    top: 3.125rem !important; }\n  .pos-b-0-xs {\n    bottom: 0rem !important; }\n  .pos-b-05-xs {\n    bottom: 0.3125rem !important; }\n  .pos-b-1-xs {\n    bottom: 0.625rem !important; }\n  .pos-b-2-xs {\n    bottom: 1.25rem !important; }\n  .pos-b-3-xs {\n    bottom: 1.5625rem !important; }\n  .pos-b-4-xs {\n    bottom: 3.125rem !important; }\n  .pos-l-0-xs {\n    left: 0rem !important; }\n  .pos-l-05-xs {\n    left: 0.3125rem !important; }\n  .pos-l-1-xs {\n    left: 0.625rem !important; }\n  .pos-l-2-xs {\n    left: 1.25rem !important; }\n  .pos-l-3-xs {\n    left: 1.5625rem !important; }\n  .pos-l-4-xs {\n    left: 3.125rem !important; }\n  .pos-r-0-xs {\n    right: 0rem !important; }\n  .pos-r-05-xs {\n    right: 0.3125rem !important; }\n  .pos-r-1-xs {\n    right: 0.625rem !important; }\n  .pos-r-2-xs {\n    right: 1.25rem !important; }\n  .pos-r-3-xs {\n    right: 1.5625rem !important; }\n  .pos-r-4-xs {\n    right: 3.125rem !important; }\n  .z-1-xs {\n    z-index: 100 !important; }\n  .z-2-xs {\n    z-index: 200 !important; }\n  .z-3-xs {\n    z-index: 300 !important; }\n  .z-4-xs {\n    z-index: 400 !important; } }\n\n@media screen and (min-width: 480px) {\n  .relative-sm {\n    position: relative !important; }\n  .absolute-sm {\n    position: absolute !important; }\n  .fixed-sm {\n    position: fixed !important; }\n  .static-sm {\n    position: static !important; }\n  .pos-t-0-sm {\n    top: 0rem !important; }\n  .pos-t-05-sm {\n    top: 0.3125rem !important; }\n  .pos-t-1-sm {\n    top: 0.625rem !important; }\n  .pos-t-2-sm {\n    top: 1.25rem !important; }\n  .pos-t-3-sm {\n    top: 1.5625rem !important; }\n  .pos-t-4-sm {\n    top: 3.125rem !important; }\n  .pos-b-0-sm {\n    bottom: 0rem !important; }\n  .pos-b-05-sm {\n    bottom: 0.3125rem !important; }\n  .pos-b-1-sm {\n    bottom: 0.625rem !important; }\n  .pos-b-2-sm {\n    bottom: 1.25rem !important; }\n  .pos-b-3-sm {\n    bottom: 1.5625rem !important; }\n  .pos-b-4-sm {\n    bottom: 3.125rem !important; }\n  .pos-l-0-sm {\n    left: 0rem !important; }\n  .pos-l-05-sm {\n    left: 0.3125rem !important; }\n  .pos-l-1-sm {\n    left: 0.625rem !important; }\n  .pos-l-2-sm {\n    left: 1.25rem !important; }\n  .pos-l-3-sm {\n    left: 1.5625rem !important; }\n  .pos-l-4-sm {\n    left: 3.125rem !important; }\n  .pos-r-0-sm {\n    right: 0rem !important; }\n  .pos-r-05-sm {\n    right: 0.3125rem !important; }\n  .pos-r-1-sm {\n    right: 0.625rem !important; }\n  .pos-r-2-sm {\n    right: 1.25rem !important; }\n  .pos-r-3-sm {\n    right: 1.5625rem !important; }\n  .pos-r-4-sm {\n    right: 3.125rem !important; }\n  .z-1-sm {\n    z-index: 100 !important; }\n  .z-2-sm {\n    z-index: 200 !important; }\n  .z-3-sm {\n    z-index: 300 !important; }\n  .z-4-sm {\n    z-index: 400 !important; } }\n\n@media screen and (min-width: 680px) {\n  .relative-md {\n    position: relative !important; }\n  .absolute-md {\n    position: absolute !important; }\n  .fixed-md {\n    position: fixed !important; }\n  .static-md {\n    position: static !important; }\n  .pos-t-0-md {\n    top: 0rem !important; }\n  .pos-t-05-md {\n    top: 0.3125rem !important; }\n  .pos-t-1-md {\n    top: 0.625rem !important; }\n  .pos-t-2-md {\n    top: 1.25rem !important; }\n  .pos-t-3-md {\n    top: 1.5625rem !important; }\n  .pos-t-4-md {\n    top: 3.125rem !important; }\n  .pos-b-0-md {\n    bottom: 0rem !important; }\n  .pos-b-05-md {\n    bottom: 0.3125rem !important; }\n  .pos-b-1-md {\n    bottom: 0.625rem !important; }\n  .pos-b-2-md {\n    bottom: 1.25rem !important; }\n  .pos-b-3-md {\n    bottom: 1.5625rem !important; }\n  .pos-b-4-md {\n    bottom: 3.125rem !important; }\n  .pos-l-0-md {\n    left: 0rem !important; }\n  .pos-l-05-md {\n    left: 0.3125rem !important; }\n  .pos-l-1-md {\n    left: 0.625rem !important; }\n  .pos-l-2-md {\n    left: 1.25rem !important; }\n  .pos-l-3-md {\n    left: 1.5625rem !important; }\n  .pos-l-4-md {\n    left: 3.125rem !important; }\n  .pos-r-0-md {\n    right: 0rem !important; }\n  .pos-r-05-md {\n    right: 0.3125rem !important; }\n  .pos-r-1-md {\n    right: 0.625rem !important; }\n  .pos-r-2-md {\n    right: 1.25rem !important; }\n  .pos-r-3-md {\n    right: 1.5625rem !important; }\n  .pos-r-4-md {\n    right: 3.125rem !important; }\n  .z-1-md {\n    z-index: 100 !important; }\n  .z-2-md {\n    z-index: 200 !important; }\n  .z-3-md {\n    z-index: 300 !important; }\n  .z-4-md {\n    z-index: 400 !important; } }\n\n@media screen and (min-width: 960px) {\n  .relative-lg {\n    position: relative !important; }\n  .absolute-lg {\n    position: absolute !important; }\n  .fixed-lg {\n    position: fixed !important; }\n  .static-lg {\n    position: static !important; }\n  .pos-t-0-lg {\n    top: 0rem !important; }\n  .pos-t-05-lg {\n    top: 0.3125rem !important; }\n  .pos-t-1-lg {\n    top: 0.625rem !important; }\n  .pos-t-2-lg {\n    top: 1.25rem !important; }\n  .pos-t-3-lg {\n    top: 1.5625rem !important; }\n  .pos-t-4-lg {\n    top: 3.125rem !important; }\n  .pos-b-0-lg {\n    bottom: 0rem !important; }\n  .pos-b-05-lg {\n    bottom: 0.3125rem !important; }\n  .pos-b-1-lg {\n    bottom: 0.625rem !important; }\n  .pos-b-2-lg {\n    bottom: 1.25rem !important; }\n  .pos-b-3-lg {\n    bottom: 1.5625rem !important; }\n  .pos-b-4-lg {\n    bottom: 3.125rem !important; }\n  .pos-l-0-lg {\n    left: 0rem !important; }\n  .pos-l-05-lg {\n    left: 0.3125rem !important; }\n  .pos-l-1-lg {\n    left: 0.625rem !important; }\n  .pos-l-2-lg {\n    left: 1.25rem !important; }\n  .pos-l-3-lg {\n    left: 1.5625rem !important; }\n  .pos-l-4-lg {\n    left: 3.125rem !important; }\n  .pos-r-0-lg {\n    right: 0rem !important; }\n  .pos-r-05-lg {\n    right: 0.3125rem !important; }\n  .pos-r-1-lg {\n    right: 0.625rem !important; }\n  .pos-r-2-lg {\n    right: 1.25rem !important; }\n  .pos-r-3-lg {\n    right: 1.5625rem !important; }\n  .pos-r-4-lg {\n    right: 3.125rem !important; }\n  .z-1-lg {\n    z-index: 100 !important; }\n  .z-2-lg {\n    z-index: 200 !important; }\n  .z-3-lg {\n    z-index: 300 !important; }\n  .z-4-lg {\n    z-index: 400 !important; } }\n\n@media screen and (min-width: 1140px) {\n  .m-0-xl {\n    margin: 0rem !important; }\n  .m-05-xl {\n    margin: 0.3125rem !important; }\n  .m-1-xl {\n    margin: 0.625rem !important; }\n  .m-2-xl {\n    margin: 1.25rem !important; }\n  .m-3-xl {\n    margin: 1.5625rem !important; }\n  .m-4-xl {\n    margin: 3.125rem !important; }\n  .m-t-0-xl {\n    margin-top: 0rem !important; }\n  .m-t-05-xl {\n    margin-top: 0.3125rem !important; }\n  .m-t-1-xl {\n    margin-top: 0.625rem !important; }\n  .m-t-2-xl {\n    margin-top: 1.25rem !important; }\n  .m-t-3-xl {\n    margin-top: 1.5625rem !important; }\n  .m-t-4-xl {\n    margin-top: 3.125rem !important; }\n  .m-b-0-xl {\n    margin-bottom: 0rem !important; }\n  .m-b-05-xl {\n    margin-bottom: 0.3125rem !important; }\n  .m-b-1-xl {\n    margin-bottom: 0.625rem !important; }\n  .m-b-2-xl {\n    margin-bottom: 1.25rem !important; }\n  .m-b-3-xl {\n    margin-bottom: 1.5625rem !important; }\n  .m-b-4-xl {\n    margin-bottom: 3.125rem !important; }\n  .m-l-0-xl {\n    margin-left: 0rem !important; }\n  .m-l-05-xl {\n    margin-left: 0.3125rem !important; }\n  .m-l-1-xl {\n    margin-left: 0.625rem !important; }\n  .m-l-2-xl {\n    margin-left: 1.25rem !important; }\n  .m-l-3-xl {\n    margin-left: 1.5625rem !important; }\n  .m-l-4-xl {\n    margin-left: 3.125rem !important; }\n  .m-r-0-xl {\n    margin-right: 0rem !important; }\n  .m-r-05-xl {\n    margin-right: 0.3125rem !important; }\n  .m-r-1-xl {\n    margin-right: 0.625rem !important; }\n  .m-r-2-xl {\n    margin-right: 1.25rem !important; }\n  .m-r-3-xl {\n    margin-right: 1.5625rem !important; }\n  .m-r-4-xl {\n    margin-right: 3.125rem !important; }\n  .m-lr-0-xl {\n    margin-left: 0rem !important;\n    margin-right: 0rem !important; }\n  .m-lr-05-xl {\n    margin-left: 0.3125rem !important;\n    margin-right: 0.3125rem !important; }\n  .m-lr-1-xl {\n    margin-left: 0.625rem !important;\n    margin-right: 0.625rem !important; }\n  .m-lr-2-xl {\n    margin-left: 1.25rem !important;\n    margin-right: 1.25rem !important; }\n  .m-lr-3-xl {\n    margin-left: 1.5625rem !important;\n    margin-right: 1.5625rem !important; }\n  .m-lr-4-xl {\n    margin-left: 3.125rem !important;\n    margin-right: 3.125rem !important; }\n  .m-tb-0-xl {\n    margin-top: 0rem !important;\n    margin-bottom: 0rem !important; }\n  .m-tb-05-xl {\n    margin-top: 0.3125rem !important;\n    margin-bottom: 0.3125rem !important; }\n  .m-tb-1-xl {\n    margin-top: 0.625rem !important;\n    margin-bottom: 0.625rem !important; }\n  .m-tb-2-xl {\n    margin-top: 1.25rem !important;\n    margin-bottom: 1.25rem !important; }\n  .m-tb-3-xl {\n    margin-top: 1.5625rem !important;\n    margin-bottom: 1.5625rem !important; }\n  .m-tb-4-xl {\n    margin-top: 3.125rem !important;\n    margin-bottom: 3.125rem !important; }\n  .m-auto-xl {\n    margin: 0 auto !important; } }\n\n@media screen {\n  .align-top-xs {\n    vertical-align: top !important; }\n  .align-middle-xs {\n    vertical-align: middle !important; }\n  .align-bottom-xs {\n    vertical-align: bottom !important; } }\n\n@media screen and (min-width: 480px) {\n  .align-top-sm {\n    vertical-align: top !important; }\n  .align-middle-sm {\n    vertical-align: middle !important; }\n  .align-bottom-sm {\n    vertical-align: bottom !important; } }\n\n@media screen and (min-width: 680px) {\n  .align-top-md {\n    vertical-align: top !important; }\n  .align-middle-md {\n    vertical-align: middle !important; }\n  .align-bottom-md {\n    vertical-align: bottom !important; } }\n\n@media screen and (min-width: 960px) {\n  .align-top-lg {\n    vertical-align: top !important; }\n  .align-middle-lg {\n    vertical-align: middle !important; }\n  .align-bottom-lg {\n    vertical-align: bottom !important; } }\n\n@media screen and (min-width: 1140px) {\n  .align-top-xl {\n    vertical-align: top !important; }\n  .align-middle-xl {\n    vertical-align: middle !important; }\n  .align-bottom-xl {\n    vertical-align: bottom !important; } }\n\n.form-fieldset {\n  padding: 0;\n  border: 0;\n  margin: 0; }\n\n.form-error {\n  background-color: #fedada !important;\n  border-color: #fedada !important;\n  display: block;\n  margin-top: .5rem;\n  font-size: 12px; }\n\n.form-label, .form-helper {\n  display: block; }\n\n.form-label {\n  color: #3C4345;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.3;\n  padding-top: 0.3125rem; }\n  .form-label-required {\n    color: #B00505;\n    font-weight: 600; }\n\n.form-helper {\n  color: #77797E;\n  font-weight: normal;\n  font-size: 12px;\n  margin-top: 5px; }\n  .form-helper-error {\n    color: #B00505; }\n\n.form-text-input, .form-select {\n  height: 28px;\n  line-height: 28px; }\n\n.form-text-input, .form-textarea, .form-select, .form-select-multiple {\n  background-color: #fff;\n  transition: .2s;\n  margin: 0;\n  font-size: 12px;\n  padding: 4px 8px;\n  outline: none;\n  border: 1px solid #DDDDDD;\n  border-radius: 2px;\n  box-shadow: 0;\n  box-sizing: border-box;\n  color: #77797E;\n  width: 100%; }\n  .form-text-input::-webkit-input-placeholder, .form-textarea::-webkit-input-placeholder, .form-select::-webkit-input-placeholder, .form-select-multiple::-webkit-input-placeholder {\n    color: #A4A6A9; }\n  .form-text-input:-moz-placeholder, .form-textarea:-moz-placeholder, .form-select:-moz-placeholder, .form-select-multiple:-moz-placeholder {\n    color: #A4A6A9; }\n  .form-text-input::-moz-placeholder, .form-textarea::-moz-placeholder, .form-select::-moz-placeholder, .form-select-multiple::-moz-placeholder {\n    color: #A4A6A9; }\n  .form-text-input:-ms-input-placeholder, .form-textarea:-ms-input-placeholder, .form-select:-ms-input-placeholder, .form-select-multiple:-ms-input-placeholder {\n    color: #A4A6A9; }\n  .form-text-input .placeholder, .form-textarea .placeholder, .form-select .placeholder, .form-select-multiple .placeholder {\n    color: #A4A6A9; }\n  .form-text-input:focus, .form-textarea:focus, .form-select:focus, .form-select-multiple:focus {\n    background-color: #fff;\n    border-color: #A3D4DA;\n    box-shadow: 0px 0px 4px 0px rgba(163, 212, 218, 0.7); }\n\n.form-text-input-disabled {\n  background-color: #e8e8e8;\n  cursor: not-allowed; }\n\n.form-select {\n  -webkit-appearance: none !important;\n  -moz-appearance: none !important;\n  background-image: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii00NSA0NyAxNiA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IC00NSA0NyAxNiA4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGQ9Ik0tNDEuNSw0N2wtMi41LDNoMnYyaC0ybDIuNSwzbDIuNS0zaC0ydi0yaDJMLTQxLjUsNDd6Ii8+DQo8L3N2Zz4NCg==\");\n  background-size: 16px;\n  background-repeat: no-repeat;\n  background-position: right;\n  background-color: #fff;\n  outline: none;\n  line-height: 1; }\n  .form-select-multiple {\n    overflow: auto;\n    padding: 0;\n    height: auto; }\n    .form-select-multiple option {\n      padding: 2px 0 3px 16px; }\n\n.form-input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .form-input-group .form-text-input {\n    border-radius: 0; }\n    .form-input-group .form-text-input:first-child {\n      border-bottom-left-radius: 2px;\n      border-top-left-radius: 2px; }\n    .form-input-group .form-text-input:last-child {\n      border-bottom-right-radius: 2px;\n      border-top-right-radius: 2px; }\n\n.form-input-group-addon,\n.form-input-group-button,\n.form-input-group .form-text-input {\n  display: table-cell; }\n\n.form-input-group-addon {\n  padding: 4px 8px;\n  font-size: 12px;\n  font-weight: normal;\n  line-height: 1;\n  color: #77797E;\n  text-align: center;\n  background-color: #e8e8e8;\n  border: solid 1px #DDDDDD;\n  border-left: 0;\n  border-right: 0; }\n\n.tokenfield {\n  vertical-align: top;\n  padding: 3px; }\n  .tokenfield-token {\n    background-color: #E4E5E6;\n    display: inline-block;\n    white-space: nowrap;\n    cursor: default;\n    margin: 1px;\n    height: 18px;\n    border-radius: 2px;\n    display: inline-block;\n    vertical-align: top; }\n    .tokenfield-token:hover, .tokenfield-token:active, .tokenfield-token:focus {\n      background-color: #D2D3D4; }\n    .tokenfield-token-label {\n      display: inline-block;\n      line-height: 18px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      padding-left: 4px;\n      vertical-align: top; }\n    .tokenfield-token-close {\n      color: #000;\n      opacity: 0.2;\n      font-family: Arial;\n      display: inline-block;\n      line-height: 18px;\n      margin-left: 5px;\n      vertical-align: top;\n      padding-right: 4px;\n      font-weight: normal; }\n      .tokenfield-token-close:hover, .tokenfield-token-close:active, .tokenfield-token-close:focus {\n        color: #000;\n        opacity: 0.5;\n        cursor: pointer; }\n\n.form-radio,\n.form-checkbox {\n  padding-top: 5px;\n  display: block;\n  font-size: 12px;\n  min-height: 18px;\n  padding-left: 20px;\n  vertical-align: middle; }\n  .form-radio-input,\n  .form-checkbox-input {\n    position: relative;\n    bottom: 1px;\n    color: #A4A6A9;\n    display: inline;\n    margin-right: 6px;\n    margin-left: -20px; }\n  .form-radio-label,\n  .form-checkbox-label {\n    display: inline;\n    margin-bottom: 0;\n    cursor: pointer; }\n\n.lk-switch {\n  cursor: pointer;\n  margin: 4px 0 0;\n  position: absolute;\n  visibility: hidden; }\n  .lk-switch-outer {\n    position: relative; }\n  .lk-switch-label {\n    display: block;\n    position: relative;\n    cursor: pointer;\n    outline: none;\n    margin: 0;\n    user-select: none;\n    width: 42px;\n    height: 20px;\n    background-color: #7f889b;\n    border-radius: 8px;\n    overflow: hidden; }\n    .lk-switch-label:after {\n      content: \"\";\n      background-color: #fff;\n      border-radius: 16px;\n      width: 8px;\n      height: 8px;\n      position: absolute;\n      top: 6px;\n      left: 6px;\n      -webkit-transition: left 0.3s ease-in-out;\n      -moz-transition: left 0.3s ease-in-out;\n      transition: left 0.3s ease-in-out; }\n  .lk-switch-on, .lk-switch-off {\n    position: absolute;\n    top: 2px;\n    color: #fff;\n    font-size: 11px;\n    font-weight: 300;\n    text-transform: uppercase;\n    -webkit-transition: left 0.3s ease-in-out;\n    -moz-transition: left 0.3s ease-in-out;\n    transition: left 0.3s ease-in-out; }\n  .lk-switch-on {\n    left: -16px; }\n  .lk-switch-off {\n    left: 16px; }\n  .lk-switch:checked + .lk-switch-label {\n    background-color: #a07bc7; }\n    .lk-switch:checked + .lk-switch-label:after {\n      left: 28px; }\n    .lk-switch:checked + .lk-switch-label .lk-switch-on {\n      left: 6px; }\n    .lk-switch:checked + .lk-switch-label .lk-switch-off {\n      left: 42px; }\n\ntable {\n  max-width: 100%;\n  border-collapse: collapse; }\n  table th,\n  table td {\n    text-align: left;\n    vertical-align: middle; }\n  table th {\n    background: transparent;\n    font-size: 12px;\n    font-weight: 600;\n    color: #696969;\n    padding: 8px;\n    margin-bottom: 0.625rem; }\n  table td {\n    padding: 8px;\n    font-size: 12px;\n    color: #3a4245; }\n  table > td {\n    border-top: 1px solid #E4E5E6; }\n  table.table-striped th {\n    background: transparent;\n    border-bottom: 1px solid #E4E5E6;\n    font-size: 12px;\n    font-weight: 600;\n    color: #696969;\n    padding: 8px;\n    margin-bottom: 0.625rem; }\n  table.table-striped td {\n    padding: 8px;\n    font-size: 12px;\n    color: #3a4245; }\n  table.table-striped tr:nth-child(even) > td {\n    background-color: transparent;\n    border: none; }\n  table.table-striped tr:nth-child(odd) > td {\n    background-color: #f6f6f7;\n    border: none; }\n    table.table-striped tr:nth-child(odd) > td:first-child {\n      border-top-left-radius: 4px;\n      border-bottom-left-radius: 4px; }\n    table.table-striped tr:nth-child(odd) > td:last-child {\n      border-top-right-radius: 4px;\n      border-bottom-right-radius: 4px; }\n  table.table-content th {\n    border-bottom-width: 1px;\n    border-color: #d2d3d4;\n    padding: 0.3125rem;\n    padding-top: 0.625rem;\n    color: #77797E;\n    font-size: 11px;\n    font-weight: normal;\n    white-space: nowrap; }\n    table.table-content th:first-child {\n      padding-left: 0; }\n  table.table-content td {\n    font-size: 14px;\n    padding: 0.625rem 0.3125rem;\n    font-weight: normal;\n    border-top: 1px solid #E4E5E6; }\n    table.table-content td:first-child {\n      padding-left: 0; }\n    table.table-content td .sub-text {\n      font-size: 12px;\n      color: #7f7977;\n      font-weight: normal; }\n\n@media screen {\n  .rotate-0-xs {\n    -webkit-transform: rotate(0deg) !important;\n    transform: rotate(0deg) !important; }\n  .rotate-45-xs {\n    -webkit-transform: rotate(45deg) !important;\n    transform: rotate(45deg) !important; }\n  .rotate-90-xs {\n    -webkit-transform: rotate(90deg) !important;\n    transform: rotate(90deg) !important; }\n  .rotate-135-xs {\n    -webkit-transform: rotate(135deg) !important;\n    transform: rotate(135deg) !important; }\n  .rotate-180-xs {\n    -webkit-transform: rotate(180deg) !important;\n    transform: rotate(180deg) !important; }\n  .rotate-225-xs {\n    -webkit-transform: rotate(225deg) !important;\n    transform: rotate(225deg) !important; }\n  .rotate-270-xs {\n    -webkit-transform: rotate(270deg) !important;\n    transform: rotate(270deg) !important; }\n  .rotate-315-xs {\n    -webkit-transform: rotate(315deg) !important;\n    transform: rotate(315deg) !important; } }\n\n@media screen and (min-width: 480px) {\n  .rotate-0-sm {\n    -webkit-transform: rotate(0deg) !important;\n    transform: rotate(0deg) !important; }\n  .rotate-45-sm {\n    -webkit-transform: rotate(45deg) !important;\n    transform: rotate(45deg) !important; }\n  .rotate-90-sm {\n    -webkit-transform: rotate(90deg) !important;\n    transform: rotate(90deg) !important; }\n  .rotate-135-sm {\n    -webkit-transform: rotate(135deg) !important;\n    transform: rotate(135deg) !important; }\n  .rotate-180-sm {\n    -webkit-transform: rotate(180deg) !important;\n    transform: rotate(180deg) !important; }\n  .rotate-225-sm {\n    -webkit-transform: rotate(225deg) !important;\n    transform: rotate(225deg) !important; }\n  .rotate-270-sm {\n    -webkit-transform: rotate(270deg) !important;\n    transform: rotate(270deg) !important; }\n  .rotate-315-sm {\n    -webkit-transform: rotate(315deg) !important;\n    transform: rotate(315deg) !important; } }\n\n@media screen and (min-width: 680px) {\n  .rotate-0-md {\n    -webkit-transform: rotate(0deg) !important;\n    transform: rotate(0deg) !important; }\n  .rotate-45-md {\n    -webkit-transform: rotate(45deg) !important;\n    transform: rotate(45deg) !important; }\n  .rotate-90-md {\n    -webkit-transform: rotate(90deg) !important;\n    transform: rotate(90deg) !important; }\n  .rotate-135-md {\n    -webkit-transform: rotate(135deg) !important;\n    transform: rotate(135deg) !important; }\n  .rotate-180-md {\n    -webkit-transform: rotate(180deg) !important;\n    transform: rotate(180deg) !important; }\n  .rotate-225-md {\n    -webkit-transform: rotate(225deg) !important;\n    transform: rotate(225deg) !important; }\n  .rotate-270-md {\n    -webkit-transform: rotate(270deg) !important;\n    transform: rotate(270deg) !important; }\n  .rotate-315-md {\n    -webkit-transform: rotate(315deg) !important;\n    transform: rotate(315deg) !important; } }\n\n@media screen and (min-width: 960px) {\n  .rotate-0-lg {\n    -webkit-transform: rotate(0deg) !important;\n    transform: rotate(0deg) !important; }\n  .rotate-45-lg {\n    -webkit-transform: rotate(45deg) !important;\n    transform: rotate(45deg) !important; }\n  .rotate-90-lg {\n    -webkit-transform: rotate(90deg) !important;\n    transform: rotate(90deg) !important; }\n  .rotate-135-lg {\n    -webkit-transform: rotate(135deg) !important;\n    transform: rotate(135deg) !important; }\n  .rotate-180-lg {\n    -webkit-transform: rotate(180deg) !important;\n    transform: rotate(180deg) !important; }\n  .rotate-225-lg {\n    -webkit-transform: rotate(225deg) !important;\n    transform: rotate(225deg) !important; }\n  .rotate-270-lg {\n    -webkit-transform: rotate(270deg) !important;\n    transform: rotate(270deg) !important; }\n  .rotate-315-lg {\n    -webkit-transform: rotate(315deg) !important;\n    transform: rotate(315deg) !important; } }\n\n@media screen and (min-width: 1140px) {\n  .rotate-0-xl {\n    -webkit-transform: rotate(0deg) !important;\n    transform: rotate(0deg) !important; }\n  .rotate-45-xl {\n    -webkit-transform: rotate(45deg) !important;\n    transform: rotate(45deg) !important; }\n  .rotate-90-xl {\n    -webkit-transform: rotate(90deg) !important;\n    transform: rotate(90deg) !important; }\n  .rotate-135-xl {\n    -webkit-transform: rotate(135deg) !important;\n    transform: rotate(135deg) !important; }\n  .rotate-180-xl {\n    -webkit-transform: rotate(180deg) !important;\n    transform: rotate(180deg) !important; }\n  .rotate-225-xl {\n    -webkit-transform: rotate(225deg) !important;\n    transform: rotate(225deg) !important; }\n  .rotate-270-xl {\n    -webkit-transform: rotate(270deg) !important;\n    transform: rotate(270deg) !important; }\n  .rotate-315-xl {\n    -webkit-transform: rotate(315deg) !important;\n    transform: rotate(315deg) !important; } }\n\n@media screen {\n  .flex-block-xs {\n    display: flex !important; }\n  .flex-inline-xs {\n    display: flex-inline !important; }\n  .flex-row-xs {\n    flex-direction: row !important; }\n  .flex-row-reverse-xs {\n    flex-direction: row-reverse !important; }\n  .flex-column-xs {\n    flex-direction: column !important; }\n  .flex-column-reverse-xs {\n    flex-direction: column-reverse !important; }\n  .flex-wrap-xs {\n    flex-wrap: wrap !important; }\n  .flex-nowrap-xs {\n    flex-wrap: nowrap !important; }\n  .flex-wrap-reverse-xs {\n    flex-wrap: wrap-reverse !important; }\n  .flex-justify-start-xs {\n    justify-content: flex-start !important; }\n  .flex-justify-end-xs {\n    justify-content: flex-end !important; }\n  .flex-justify-center-xs {\n    justify-content: center !important; }\n  .flex-justify-between-xs {\n    justify-content: space-between !important; }\n  .flex-justify-around-xs {\n    justify-content: space-around !important; }\n  .flex-item-start-xs {\n    align-items: flex-start !important; }\n  .flex-item-end-xs {\n    align-items: flex-end !important; }\n  .flex-item-center-xs {\n    align-items: center !important; }\n  .flex-item-stretch-xs {\n    align-items: stretch !important; }\n  .flex-item-baseline-xs {\n    align-items: baseline !important; }\n  .flex-content-start-xs {\n    align-content: flex-start !important; }\n  .flex-content-end-xs {\n    align-content: flex-end !important; }\n  .flex-content-center-xs {\n    align-content: center !important; }\n  .flex-content-around-xs {\n    align-content: space-around !important; }\n  .flex-content-between-xs {\n    align-content: space-between !important; }\n  .flex-content-stretch-xs {\n    align-content: stretch !important; }\n  .flex-order-1-xs {\n    order: 1 !important; }\n  .flex-order-2-xs {\n    order: 2 !important; }\n  .flex-order-3-xs {\n    order: 3 !important; }\n  .flex-order-4-xs {\n    order: 4 !important; }\n  .flex-order-5-xs {\n    order: 5 !important; }\n  .flex-order-6-xs {\n    order: 6 !important; }\n  .flex-grow-0-xs {\n    flex-grow: 0 !important; }\n  .flex-grow-1-xs {\n    flex-grow: 1 !important; }\n  .flex-grow-2-xs {\n    flex-grow: 2 !important; }\n  .flex-grow-3-xs {\n    flex-grow: 3 !important; }\n  .flex-grow-4-xs {\n    flex-grow: 4 !important; }\n  .flex-grow-5-xs {\n    flex-grow: 5 !important; }\n  .flex-grow-6-xs {\n    flex-grow: 6 !important; }\n  .flex-shrink-1-xs {\n    flex-shrink: 1 !important; }\n  .flex-shrink-2-xs {\n    flex-shrink: 2 !important; }\n  .flex-shrink-3-xs {\n    flex-shrink: 3 !important; }\n  .flex-shrink-4-xs {\n    flex-shrink: 4 !important; }\n  .flex-shrink-5-xs {\n    flex-shrink: 5 !important; }\n  .flex-shrink-6-xs {\n    flex-shrink: 6 !important; }\n  .flex-basis-5-xs {\n    flex-basis: 5% !important; }\n  .flex-basis-10-xs {\n    flex-basis: 10% !important; }\n  .flex-basis-15-xs {\n    flex-basis: 15% !important; }\n  .flex-basis-20-xs {\n    flex-basis: 20% !important; }\n  .flex-basis-25-xs {\n    flex-basis: 25% !important; }\n  .flex-basis-30-xs {\n    flex-basis: 30% !important; }\n  .flex-basis-33-xs {\n    flex-basis: 33% !important; }\n  .flex-basis-35-xs {\n    flex-basis: 35% !important; }\n  .flex-basis-40-xs {\n    flex-basis: 40% !important; }\n  .flex-basis-45-xs {\n    flex-basis: 45% !important; }\n  .flex-basis-50-xs {\n    flex-basis: 50% !important; }\n  .flex-basis-55-xs {\n    flex-basis: 55% !important; }\n  .flex-basis-60-xs {\n    flex-basis: 60% !important; }\n  .flex-basis-65-xs {\n    flex-basis: 65% !important; }\n  .flex-basis-70-xs {\n    flex-basis: 70% !important; }\n  .flex-basis-75-xs {\n    flex-basis: 75% !important; }\n  .flex-basis-80-xs {\n    flex-basis: 80% !important; }\n  .flex-basis-85-xs {\n    flex-basis: 85% !important; }\n  .flex-basis-90-xs {\n    flex-basis: 90% !important; }\n  .flex-basis-95-xs {\n    flex-basis: 95% !important; }\n  .flex-basis-100-xs {\n    flex-basis: 100% !important; }\n  .flex-basis-auto-xs {\n    flex-basis: auto !important; }\n  .flex-basis-s0-xs {\n    flex-basis: 0rem !important; }\n  .flex-basis-s05-xs {\n    flex-basis: 0.3125rem !important; }\n  .flex-basis-s1-xs {\n    flex-basis: 0.625rem !important; }\n  .flex-basis-s2-xs {\n    flex-basis: 1.25rem !important; }\n  .flex-basis-s3-xs {\n    flex-basis: 1.5625rem !important; }\n  .flex-basis-s4-xs {\n    flex-basis: 3.125rem !important; }\n  .flex-self-auto-xs {\n    align-self: auto !important; }\n  .flex-self-start-xs {\n    align-self: flex-start !important; }\n  .flex-self-end-xs {\n    align-self: flex-end !important; }\n  .flex-self-center-xs {\n    align-self: center !important; }\n  .flex-self-stretch-xs {\n    align-self: stretch !important; }\n  .flex-self-baseline-xs {\n    align-self: baseline !important; } }\n\n@media screen and (min-width: 480px) {\n  .flex-block-sm {\n    display: flex !important; }\n  .flex-inline-sm {\n    display: flex-inline !important; }\n  .flex-row-sm {\n    flex-direction: row !important; }\n  .flex-row-reverse-sm {\n    flex-direction: row-reverse !important; }\n  .flex-column-sm {\n    flex-direction: column !important; }\n  .flex-column-reverse-sm {\n    flex-direction: column-reverse !important; }\n  .flex-wrap-sm {\n    flex-wrap: wrap !important; }\n  .flex-nowrap-sm {\n    flex-wrap: nowrap !important; }\n  .flex-wrap-reverse-sm {\n    flex-wrap: wrap-reverse !important; }\n  .flex-justify-start-sm {\n    justify-content: flex-start !important; }\n  .flex-justify-end-sm {\n    justify-content: flex-end !important; }\n  .flex-justify-center-sm {\n    justify-content: center !important; }\n  .flex-justify-between-sm {\n    justify-content: space-between !important; }\n  .flex-justify-around-sm {\n    justify-content: space-around !important; }\n  .flex-item-start-sm {\n    align-items: flex-start !important; }\n  .flex-item-end-sm {\n    align-items: flex-end !important; }\n  .flex-item-center-sm {\n    align-items: center !important; }\n  .flex-item-stretch-sm {\n    align-items: stretch !important; }\n  .flex-item-baseline-sm {\n    align-items: baseline !important; }\n  .flex-content-start-sm {\n    align-content: flex-start !important; }\n  .flex-content-end-sm {\n    align-content: flex-end !important; }\n  .flex-content-center-sm {\n    align-content: center !important; }\n  .flex-content-around-sm {\n    align-content: space-around !important; }\n  .flex-content-between-sm {\n    align-content: space-between !important; }\n  .flex-content-stretch-sm {\n    align-content: stretch !important; }\n  .flex-order-1-sm {\n    order: 1 !important; }\n  .flex-order-2-sm {\n    order: 2 !important; }\n  .flex-order-3-sm {\n    order: 3 !important; }\n  .flex-order-4-sm {\n    order: 4 !important; }\n  .flex-order-5-sm {\n    order: 5 !important; }\n  .flex-order-6-sm {\n    order: 6 !important; }\n  .flex-grow-0-sm {\n    flex-grow: 0 !important; }\n  .flex-grow-1-sm {\n    flex-grow: 1 !important; }\n  .flex-grow-2-sm {\n    flex-grow: 2 !important; }\n  .flex-grow-3-sm {\n    flex-grow: 3 !important; }\n  .flex-grow-4-sm {\n    flex-grow: 4 !important; }\n  .flex-grow-5-sm {\n    flex-grow: 5 !important; }\n  .flex-grow-6-sm {\n    flex-grow: 6 !important; }\n  .flex-shrink-1-sm {\n    flex-shrink: 1 !important; }\n  .flex-shrink-2-sm {\n    flex-shrink: 2 !important; }\n  .flex-shrink-3-sm {\n    flex-shrink: 3 !important; }\n  .flex-shrink-4-sm {\n    flex-shrink: 4 !important; }\n  .flex-shrink-5-sm {\n    flex-shrink: 5 !important; }\n  .flex-shrink-6-sm {\n    flex-shrink: 6 !important; }\n  .flex-basis-5-sm {\n    flex-basis: 5% !important; }\n  .flex-basis-10-sm {\n    flex-basis: 10% !important; }\n  .flex-basis-15-sm {\n    flex-basis: 15% !important; }\n  .flex-basis-20-sm {\n    flex-basis: 20% !important; }\n  .flex-basis-25-sm {\n    flex-basis: 25% !important; }\n  .flex-basis-30-sm {\n    flex-basis: 30% !important; }\n  .flex-basis-33-sm {\n    flex-basis: 33% !important; }\n  .flex-basis-35-sm {\n    flex-basis: 35% !important; }\n  .flex-basis-40-sm {\n    flex-basis: 40% !important; }\n  .flex-basis-45-sm {\n    flex-basis: 45% !important; }\n  .flex-basis-50-sm {\n    flex-basis: 50% !important; }\n  .flex-basis-55-sm {\n    flex-basis: 55% !important; }\n  .flex-basis-60-sm {\n    flex-basis: 60% !important; }\n  .flex-basis-65-sm {\n    flex-basis: 65% !important; }\n  .flex-basis-70-sm {\n    flex-basis: 70% !important; }\n  .flex-basis-75-sm {\n    flex-basis: 75% !important; }\n  .flex-basis-80-sm {\n    flex-basis: 80% !important; }\n  .flex-basis-85-sm {\n    flex-basis: 85% !important; }\n  .flex-basis-90-sm {\n    flex-basis: 90% !important; }\n  .flex-basis-95-sm {\n    flex-basis: 95% !important; }\n  .flex-basis-100-sm {\n    flex-basis: 100% !important; }\n  .flex-basis-auto-sm {\n    flex-basis: auto !important; }\n  .flex-basis-s0-sm {\n    flex-basis: 0rem !important; }\n  .flex-basis-s05-sm {\n    flex-basis: 0.3125rem !important; }\n  .flex-basis-s1-sm {\n    flex-basis: 0.625rem !important; }\n  .flex-basis-s2-sm {\n    flex-basis: 1.25rem !important; }\n  .flex-basis-s3-sm {\n    flex-basis: 1.5625rem !important; }\n  .flex-basis-s4-sm {\n    flex-basis: 3.125rem !important; }\n  .flex-self-auto-sm {\n    align-self: auto !important; }\n  .flex-self-start-sm {\n    align-self: flex-start !important; }\n  .flex-self-end-sm {\n    align-self: flex-end !important; }\n  .flex-self-center-sm {\n    align-self: center !important; }\n  .flex-self-stretch-sm {\n    align-self: stretch !important; }\n  .flex-self-baseline-sm {\n    align-self: baseline !important; } }\n\n@media screen and (min-width: 680px) {\n  .flex-block-md {\n    display: flex !important; }\n  .flex-inline-md {\n    display: flex-inline !important; }\n  .flex-row-md {\n    flex-direction: row !important; }\n  .flex-row-reverse-md {\n    flex-direction: row-reverse !important; }\n  .flex-column-md {\n    flex-direction: column !important; }\n  .flex-column-reverse-md {\n    flex-direction: column-reverse !important; }\n  .flex-wrap-md {\n    flex-wrap: wrap !important; }\n  .flex-nowrap-md {\n    flex-wrap: nowrap !important; }\n  .flex-wrap-reverse-md {\n    flex-wrap: wrap-reverse !important; }\n  .flex-justify-start-md {\n    justify-content: flex-start !important; }\n  .flex-justify-end-md {\n    justify-content: flex-end !important; }\n  .flex-justify-center-md {\n    justify-content: center !important; }\n  .flex-justify-between-md {\n    justify-content: space-between !important; }\n  .flex-justify-around-md {\n    justify-content: space-around !important; }\n  .flex-item-start-md {\n    align-items: flex-start !important; }\n  .flex-item-end-md {\n    align-items: flex-end !important; }\n  .flex-item-center-md {\n    align-items: center !important; }\n  .flex-item-stretch-md {\n    align-items: stretch !important; }\n  .flex-item-baseline-md {\n    align-items: baseline !important; }\n  .flex-content-start-md {\n    align-content: flex-start !important; }\n  .flex-content-end-md {\n    align-content: flex-end !important; }\n  .flex-content-center-md {\n    align-content: center !important; }\n  .flex-content-around-md {\n    align-content: space-around !important; }\n  .flex-content-between-md {\n    align-content: space-between !important; }\n  .flex-content-stretch-md {\n    align-content: stretch !important; }\n  .flex-order-1-md {\n    order: 1 !important; }\n  .flex-order-2-md {\n    order: 2 !important; }\n  .flex-order-3-md {\n    order: 3 !important; }\n  .flex-order-4-md {\n    order: 4 !important; }\n  .flex-order-5-md {\n    order: 5 !important; }\n  .flex-order-6-md {\n    order: 6 !important; }\n  .flex-grow-0-md {\n    flex-grow: 0 !important; }\n  .flex-grow-1-md {\n    flex-grow: 1 !important; }\n  .flex-grow-2-md {\n    flex-grow: 2 !important; }\n  .flex-grow-3-md {\n    flex-grow: 3 !important; }\n  .flex-grow-4-md {\n    flex-grow: 4 !important; }\n  .flex-grow-5-md {\n    flex-grow: 5 !important; }\n  .flex-grow-6-md {\n    flex-grow: 6 !important; }\n  .flex-shrink-1-md {\n    flex-shrink: 1 !important; }\n  .flex-shrink-2-md {\n    flex-shrink: 2 !important; }\n  .flex-shrink-3-md {\n    flex-shrink: 3 !important; }\n  .flex-shrink-4-md {\n    flex-shrink: 4 !important; }\n  .flex-shrink-5-md {\n    flex-shrink: 5 !important; }\n  .flex-shrink-6-md {\n    flex-shrink: 6 !important; }\n  .flex-basis-5-md {\n    flex-basis: 5% !important; }\n  .flex-basis-10-md {\n    flex-basis: 10% !important; }\n  .flex-basis-15-md {\n    flex-basis: 15% !important; }\n  .flex-basis-20-md {\n    flex-basis: 20% !important; }\n  .flex-basis-25-md {\n    flex-basis: 25% !important; }\n  .flex-basis-30-md {\n    flex-basis: 30% !important; }\n  .flex-basis-33-md {\n    flex-basis: 33% !important; }\n  .flex-basis-35-md {\n    flex-basis: 35% !important; }\n  .flex-basis-40-md {\n    flex-basis: 40% !important; }\n  .flex-basis-45-md {\n    flex-basis: 45% !important; }\n  .flex-basis-50-md {\n    flex-basis: 50% !important; }\n  .flex-basis-55-md {\n    flex-basis: 55% !important; }\n  .flex-basis-60-md {\n    flex-basis: 60% !important; }\n  .flex-basis-65-md {\n    flex-basis: 65% !important; }\n  .flex-basis-70-md {\n    flex-basis: 70% !important; }\n  .flex-basis-75-md {\n    flex-basis: 75% !important; }\n  .flex-basis-80-md {\n    flex-basis: 80% !important; }\n  .flex-basis-85-md {\n    flex-basis: 85% !important; }\n  .flex-basis-90-md {\n    flex-basis: 90% !important; }\n  .flex-basis-95-md {\n    flex-basis: 95% !important; }\n  .flex-basis-100-md {\n    flex-basis: 100% !important; }\n  .flex-basis-auto-md {\n    flex-basis: auto !important; }\n  .flex-basis-s0-md {\n    flex-basis: 0rem !important; }\n  .flex-basis-s05-md {\n    flex-basis: 0.3125rem !important; }\n  .flex-basis-s1-md {\n    flex-basis: 0.625rem !important; }\n  .flex-basis-s2-md {\n    flex-basis: 1.25rem !important; }\n  .flex-basis-s3-md {\n    flex-basis: 1.5625rem !important; }\n  .flex-basis-s4-md {\n    flex-basis: 3.125rem !important; }\n  .flex-self-auto-md {\n    align-self: auto !important; }\n  .flex-self-start-md {\n    align-self: flex-start !important; }\n  .flex-self-end-md {\n    align-self: flex-end !important; }\n  .flex-self-center-md {\n    align-self: center !important; }\n  .flex-self-stretch-md {\n    align-self: stretch !important; }\n  .flex-self-baseline-md {\n    align-self: baseline !important; } }\n\n@media screen and (min-width: 960px) {\n  .flex-block-lg {\n    display: flex !important; }\n  .flex-inline-lg {\n    display: flex-inline !important; }\n  .flex-row-lg {\n    flex-direction: row !important; }\n  .flex-row-reverse-lg {\n    flex-direction: row-reverse !important; }\n  .flex-column-lg {\n    flex-direction: column !important; }\n  .flex-column-reverse-lg {\n    flex-direction: column-reverse !important; }\n  .flex-wrap-lg {\n    flex-wrap: wrap !important; }\n  .flex-nowrap-lg {\n    flex-wrap: nowrap !important; }\n  .flex-wrap-reverse-lg {\n    flex-wrap: wrap-reverse !important; }\n  .flex-justify-start-lg {\n    justify-content: flex-start !important; }\n  .flex-justify-end-lg {\n    justify-content: flex-end !important; }\n  .flex-justify-center-lg {\n    justify-content: center !important; }\n  .flex-justify-between-lg {\n    justify-content: space-between !important; }\n  .flex-justify-around-lg {\n    justify-content: space-around !important; }\n  .flex-item-start-lg {\n    align-items: flex-start !important; }\n  .flex-item-end-lg {\n    align-items: flex-end !important; }\n  .flex-item-center-lg {\n    align-items: center !important; }\n  .flex-item-stretch-lg {\n    align-items: stretch !important; }\n  .flex-item-baseline-lg {\n    align-items: baseline !important; }\n  .flex-content-start-lg {\n    align-content: flex-start !important; }\n  .flex-content-end-lg {\n    align-content: flex-end !important; }\n  .flex-content-center-lg {\n    align-content: center !important; }\n  .flex-content-around-lg {\n    align-content: space-around !important; }\n  .flex-content-between-lg {\n    align-content: space-between !important; }\n  .flex-content-stretch-lg {\n    align-content: stretch !important; }\n  .flex-order-1-lg {\n    order: 1 !important; }\n  .flex-order-2-lg {\n    order: 2 !important; }\n  .flex-order-3-lg {\n    order: 3 !important; }\n  .flex-order-4-lg {\n    order: 4 !important; }\n  .flex-order-5-lg {\n    order: 5 !important; }\n  .flex-order-6-lg {\n    order: 6 !important; }\n  .flex-grow-0-lg {\n    flex-grow: 0 !important; }\n  .flex-grow-1-lg {\n    flex-grow: 1 !important; }\n  .flex-grow-2-lg {\n    flex-grow: 2 !important; }\n  .flex-grow-3-lg {\n    flex-grow: 3 !important; }\n  .flex-grow-4-lg {\n    flex-grow: 4 !important; }\n  .flex-grow-5-lg {\n    flex-grow: 5 !important; }\n  .flex-grow-6-lg {\n    flex-grow: 6 !important; }\n  .flex-shrink-1-lg {\n    flex-shrink: 1 !important; }\n  .flex-shrink-2-lg {\n    flex-shrink: 2 !important; }\n  .flex-shrink-3-lg {\n    flex-shrink: 3 !important; }\n  .flex-shrink-4-lg {\n    flex-shrink: 4 !important; }\n  .flex-shrink-5-lg {\n    flex-shrink: 5 !important; }\n  .flex-shrink-6-lg {\n    flex-shrink: 6 !important; }\n  .flex-basis-5-lg {\n    flex-basis: 5% !important; }\n  .flex-basis-10-lg {\n    flex-basis: 10% !important; }\n  .flex-basis-15-lg {\n    flex-basis: 15% !important; }\n  .flex-basis-20-lg {\n    flex-basis: 20% !important; }\n  .flex-basis-25-lg {\n    flex-basis: 25% !important; }\n  .flex-basis-30-lg {\n    flex-basis: 30% !important; }\n  .flex-basis-33-lg {\n    flex-basis: 33% !important; }\n  .flex-basis-35-lg {\n    flex-basis: 35% !important; }\n  .flex-basis-40-lg {\n    flex-basis: 40% !important; }\n  .flex-basis-45-lg {\n    flex-basis: 45% !important; }\n  .flex-basis-50-lg {\n    flex-basis: 50% !important; }\n  .flex-basis-55-lg {\n    flex-basis: 55% !important; }\n  .flex-basis-60-lg {\n    flex-basis: 60% !important; }\n  .flex-basis-65-lg {\n    flex-basis: 65% !important; }\n  .flex-basis-70-lg {\n    flex-basis: 70% !important; }\n  .flex-basis-75-lg {\n    flex-basis: 75% !important; }\n  .flex-basis-80-lg {\n    flex-basis: 80% !important; }\n  .flex-basis-85-lg {\n    flex-basis: 85% !important; }\n  .flex-basis-90-lg {\n    flex-basis: 90% !important; }\n  .flex-basis-95-lg {\n    flex-basis: 95% !important; }\n  .flex-basis-100-lg {\n    flex-basis: 100% !important; }\n  .flex-basis-auto-lg {\n    flex-basis: auto !important; }\n  .flex-basis-s0-lg {\n    flex-basis: 0rem !important; }\n  .flex-basis-s05-lg {\n    flex-basis: 0.3125rem !important; }\n  .flex-basis-s1-lg {\n    flex-basis: 0.625rem !important; }\n  .flex-basis-s2-lg {\n    flex-basis: 1.25rem !important; }\n  .flex-basis-s3-lg {\n    flex-basis: 1.5625rem !important; }\n  .flex-basis-s4-lg {\n    flex-basis: 3.125rem !important; }\n  .flex-self-auto-lg {\n    align-self: auto !important; }\n  .flex-self-start-lg {\n    align-self: flex-start !important; }\n  .flex-self-end-lg {\n    align-self: flex-end !important; }\n  .flex-self-center-lg {\n    align-self: center !important; }\n  .flex-self-stretch-lg {\n    align-self: stretch !important; }\n  .flex-self-baseline-lg {\n    align-self: baseline !important; } }\n\n@media screen and (min-width: 1140px) {\n  .flex-block-xl {\n    display: flex !important; }\n  .flex-inline-xl {\n    display: flex-inline !important; }\n  .flex-row-xl {\n    flex-direction: row !important; }\n  .flex-row-reverse-xl {\n    flex-direction: row-reverse !important; }\n  .flex-column-xl {\n    flex-direction: column !important; }\n  .flex-column-reverse-xl {\n    flex-direction: column-reverse !important; }\n  .flex-wrap-xl {\n    flex-wrap: wrap !important; }\n  .flex-nowrap-xl {\n    flex-wrap: nowrap !important; }\n  .flex-wrap-reverse-xl {\n    flex-wrap: wrap-reverse !important; }\n  .flex-justify-start-xl {\n    justify-content: flex-start !important; }\n  .flex-justify-end-xl {\n    justify-content: flex-end !important; }\n  .flex-justify-center-xl {\n    justify-content: center !important; }\n  .flex-justify-between-xl {\n    justify-content: space-between !important; }\n  .flex-justify-around-xl {\n    justify-content: space-around !important; }\n  .flex-item-start-xl {\n    align-items: flex-start !important; }\n  .flex-item-end-xl {\n    align-items: flex-end !important; }\n  .flex-item-center-xl {\n    align-items: center !important; }\n  .flex-item-stretch-xl {\n    align-items: stretch !important; }\n  .flex-item-baseline-xl {\n    align-items: baseline !important; }\n  .flex-content-start-xl {\n    align-content: flex-start !important; }\n  .flex-content-end-xl {\n    align-content: flex-end !important; }\n  .flex-content-center-xl {\n    align-content: center !important; }\n  .flex-content-around-xl {\n    align-content: space-around !important; }\n  .flex-content-between-xl {\n    align-content: space-between !important; }\n  .flex-content-stretch-xl {\n    align-content: stretch !important; }\n  .flex-order-1-xl {\n    order: 1 !important; }\n  .flex-order-2-xl {\n    order: 2 !important; }\n  .flex-order-3-xl {\n    order: 3 !important; }\n  .flex-order-4-xl {\n    order: 4 !important; }\n  .flex-order-5-xl {\n    order: 5 !important; }\n  .flex-order-6-xl {\n    order: 6 !important; }\n  .flex-grow-0-xl {\n    flex-grow: 0 !important; }\n  .flex-grow-1-xl {\n    flex-grow: 1 !important; }\n  .flex-grow-2-xl {\n    flex-grow: 2 !important; }\n  .flex-grow-3-xl {\n    flex-grow: 3 !important; }\n  .flex-grow-4-xl {\n    flex-grow: 4 !important; }\n  .flex-grow-5-xl {\n    flex-grow: 5 !important; }\n  .flex-grow-6-xl {\n    flex-grow: 6 !important; }\n  .flex-shrink-1-xl {\n    flex-shrink: 1 !important; }\n  .flex-shrink-2-xl {\n    flex-shrink: 2 !important; }\n  .flex-shrink-3-xl {\n    flex-shrink: 3 !important; }\n  .flex-shrink-4-xl {\n    flex-shrink: 4 !important; }\n  .flex-shrink-5-xl {\n    flex-shrink: 5 !important; }\n  .flex-shrink-6-xl {\n    flex-shrink: 6 !important; }\n  .flex-basis-5-xl {\n    flex-basis: 5% !important; }\n  .flex-basis-10-xl {\n    flex-basis: 10% !important; }\n  .flex-basis-15-xl {\n    flex-basis: 15% !important; }\n  .flex-basis-20-xl {\n    flex-basis: 20% !important; }\n  .flex-basis-25-xl {\n    flex-basis: 25% !important; }\n  .flex-basis-30-xl {\n    flex-basis: 30% !important; }\n  .flex-basis-33-xl {\n    flex-basis: 33% !important; }\n  .flex-basis-35-xl {\n    flex-basis: 35% !important; }\n  .flex-basis-40-xl {\n    flex-basis: 40% !important; }\n  .flex-basis-45-xl {\n    flex-basis: 45% !important; }\n  .flex-basis-50-xl {\n    flex-basis: 50% !important; }\n  .flex-basis-55-xl {\n    flex-basis: 55% !important; }\n  .flex-basis-60-xl {\n    flex-basis: 60% !important; }\n  .flex-basis-65-xl {\n    flex-basis: 65% !important; }\n  .flex-basis-70-xl {\n    flex-basis: 70% !important; }\n  .flex-basis-75-xl {\n    flex-basis: 75% !important; }\n  .flex-basis-80-xl {\n    flex-basis: 80% !important; }\n  .flex-basis-85-xl {\n    flex-basis: 85% !important; }\n  .flex-basis-90-xl {\n    flex-basis: 90% !important; }\n  .flex-basis-95-xl {\n    flex-basis: 95% !important; }\n  .flex-basis-100-xl {\n    flex-basis: 100% !important; }\n  .flex-basis-auto-xl {\n    flex-basis: auto !important; }\n  .flex-basis-s0-xl {\n    flex-basis: 0rem !important; }\n  .flex-basis-s05-xl {\n    flex-basis: 0.3125rem !important; }\n  .flex-basis-s1-xl {\n    flex-basis: 0.625rem !important; }\n  .flex-basis-s2-xl {\n    flex-basis: 1.25rem !important; }\n  .flex-basis-s3-xl {\n    flex-basis: 1.5625rem !important; }\n  .flex-basis-s4-xl {\n    flex-basis: 3.125rem !important; }\n  .flex-self-auto-xl {\n    align-self: auto !important; }\n  .flex-self-start-xl {\n    align-self: flex-start !important; }\n  .flex-self-end-xl {\n    align-self: flex-end !important; }\n  .flex-self-center-xl {\n    align-self: center !important; }\n  .flex-self-stretch-xl {\n    align-self: stretch !important; }\n  .flex-self-baseline-xl {\n    align-self: baseline !important; } }\n\n#brandColorData:before {\n  content: '{\"purple\":\"#41327B\",\"gray\":\"#1C2027\",\"blue\":\"#0E88F1\"}';\n  height: 0;\n  opacity: 0;\n  font-size: 0; }\n\n#uiColorData:before {\n  content: '{\"purple-dark\":\"#2A1B60\",\"purple\":\"#4C33AA\",\"purple-light\":\"#7E64E0\",\"red-dark\":\"#92100E\",\"red\":\"#B00505\",\"red-light\":\"#E1332C\",\"green\":\"#4BB86A\",\"teal-dark\":\"#39B2B2\",\"teal\":\"#5DCCCC\",\"yellow\":\"#FFD822\",\"orange-dark\":\"#E57200\",\"orange\":\"#FB9331\"}';\n  height: 0;\n  opacity: 0;\n  font-size: 0; }\n\n#grayColorData:before {\n  content: '{\"white\":\"#fff\",\"gray-1\":\"#F6F6F7\",\"gray-2\":\"#E4E5E6\",\"gray-3\":\"#D2D3D4\",\"gray-4\":\"#A4A6A9\",\"gray-5\":\"#77797E\",\"gray-6\":\"#3C4345\",\"gray-7\":\"#1C2027\"}';\n  height: 0;\n  opacity: 0;\n  font-size: 0; }\n\n@media screen {\n  .guide-banner {\n    position: fixed;\n    top: 0;\n    left: 0;\n    padding: 13px 1rem;\n    width: 100%;\n    line-height: 1; } }\n\n@media screen and (min-width: 960px) {\n  .guide-banner {\n    padding: 13px 1rem;\n    z-index: 50; } }\n\n@media screen {\n  .guide-skip-content a {\n    display: none; } }\n\n@media screen and (min-width: 960px) {\n  .guide-skip-content a {\n    position: absolute;\n    left: -9999em;\n    display: block;\n    margin-top: 0; }\n    .guide-skip-content a:focus {\n      left: 80px;\n      top: 24px; } }\n\n.guide-navigation {\n  padding-top: 0;\n  transition: height 300ms ease, padding 300ms ease; }\n  @media screen {\n    .guide-navigation {\n      position: fixed;\n      top: 50px;\n      bottom: 0;\n      height: 0;\n      padding-top: 0;\n      width: 100%;\n      z-index: 50; } }\n  @media screen and (min-width: 960px) {\n    .guide-navigation {\n      position: fixed;\n      top: 50px;\n      bottom: 0;\n      padding-top: 0;\n      width: 13rem;\n      height: auto;\n      z-index: 51; } }\n  .guide-navigation-active {\n    height: 100%; }\n  .guide-navigation nav {\n    position: absolute;\n    height: 100%;\n    overflow: hidden;\n    overflow-y: auto;\n    outline: 0; }\n    @media screen {\n      .guide-navigation nav {\n        width: 100%; } }\n    @media screen and (min-width: 960px) {\n      .guide-navigation nav {\n        width: 13rem; } }\n  .guide-navigation-list {\n    margin: 0; }\n    @media screen {\n      .guide-navigation-list {\n        padding: 0 0 0 0; } }\n    @media screen and (min-width: 960px) {\n      .guide-navigation-list {\n        padding: 0; } }\n    .guide-navigation-list-child {\n      margin: 0;\n      padding: 0; }\n  .guide-navigation-link {\n    display: block;\n    padding: 7px 32px 9px; }\n    .guide-navigation-link-child {\n      padding: 7px 32px; }\n    .guide-navigation-link-child {\n      padding-left: 50px; }\n\n@media screen and (min-width: 960px) {\n  .guide-main, .guide-contentinfo {\n    margin-left: 13rem;\n    padding-top: 45px; } }\n\n.guide-content {\n  margin: 1.5625rem; }\n  @media screen {\n    .guide-content {\n      margin-top: 5.25rem; } }\n  @media screen and (min-width: 960px) {\n    .guide-content {\n      margin-top: 1.5625rem; } }\n  .guide-content p {\n    font-size: 14px; }\n\n.guide-main {\n  min-height: calc(100vh - 8rem); }\n\n.guide-contentinfo-copy {\n  padding: 0.625rem 1.5625rem;\n  margin: 0;\n  font-size: 14px; }\n\n[class*=\"button--large\"] {\n  display: none; }\n\n[class*=\"button--xlarge\"] {\n  display: none; }\n\nbody {\n  background-color: #fff; }\n\n.guide-banner {\n  background-color: #1C2027; }\n\n.guide-skip-content a {\n  font-size: 0.75rem;\n  text-decoration: none; }\n\n.guide-name {\n  color: #fff;\n  font-weight: 300;\n  text-decoration: none; }\n  @media screen {\n    .guide-name {\n      font-size: 1.5rem; } }\n  @media screen and (min-width: 960px) {\n    .guide-name {\n      font-size: 1.5rem; } }\n  .guide-name:hover, .guide-name:active, .guide-name:focus {\n    color: #fff; }\n\n.guide-navigation {\n  background-color: #fff;\n  border-right: solid 1px #E4E5E6; }\n  .guide-navigation-icon {\n    position: absolute;\n    top: 9px;\n    right: 20px;\n    font-size: 15px;\n    transform: rotate(-45deg);\n    transition: transform 50ms ease-in-out; }\n  .guide-navigation-item-parent .guide-navigation-icon:after {\n    content: '\\D7'; }\n  .guide-navigation-item-parent--active {\n    background-color: #F6F6F7;\n    border-right: solid 1px #E4E5E6;\n    box-shadow: 7px 0 0 #41327B inset; }\n    .guide-navigation-item-parent--active .guide-navigation-link:hover, .guide-navigation-item-parent--active .guide-navigation-link:active, .guide-navigation-item-parent--active .guide-navigation-link:focus {\n      box-shadow: 7px 0 0 button-color(purple) inset;\n      border-right: none; }\n    .guide-navigation-item-parent--active .guide-navigation-list-child {\n      display: block; }\n  .guide-navigation-item-child {\n    background-color: #F6F6F7; }\n  .guide-navigation-list-child {\n    list-style: none;\n    border-right: solid 1px #E4E5E6; }\n  .guide-navigation-link {\n    color: #77797E;\n    font-size: 0.75rem;\n    text-decoration: none;\n    position: relative;\n    border-right: solid 1px transparent; }\n    .guide-navigation-link:focus {\n      color: #3C4345; }\n    .guide-navigation-link:hover, .guide-navigation-link:active, .guide-navigation-link.active {\n      background-color: #F6F6F7;\n      color: #3C4345;\n      border-right: solid 1px #E4E5E6; }\n    .guide-navigation-link.active {\n      box-shadow: 7px 0 0 button-color(purple) inset; }\n      .guide-navigation-link.active:hover, .guide-navigation-link.active:active, .guide-navigation-link.active:focus {\n        box-shadow: 7px 0 0 button-color(purple) inset; }\n      .guide-navigation-link.active .guide-navigation-icon {\n        position: absolute;\n        top: 9px;\n        right: 19px;\n        transform: rotate(0deg); }\n    .guide-navigation-link-child {\n      font-size: 0.75rem; }\n      .guide-navigation-link-child:focus, .guide-navigation-link-child:hover, .guide-navigation-link-child:active {\n        background-color: #F6F6F7;\n        color: #1C2027;\n        box-shadow: none !important;\n        border-right: none; }\n      .guide-navigation-link-child.active {\n        font-weight: 600;\n        box-shadow: none !important; }\n\n.guide-content {\n  background-color: #fff;\n  border-radius: 2px; }\n  .guide-content-title {\n    font-size: 21px !important; }\n  .guide-content-subtitle {\n    font-size: 18px !important; }\n  .guide-content-description {\n    font-size: 14px !important; }\n  .guide-content-h3 {\n    font-size: 15px !important; }\n  .guide-content-h4 {\n    font-size: 14px !important; }\n\n.guide-color {\n  margin: 0 -1rem; }\n  .guide-color-item > span {\n    color: rgba(255, 255, 255, 0.9);\n    font-family: Monaco, monospace; }\n    .guide-color-item > span em {\n      color: rgba(255, 255, 255, 0.5);\n      font-family: Helvetica, Arial, sans-serif; }\n    .guide-color-item > span.bg-gray, .guide-color-item > span.bg-gray-2, .guide-color-item > span.bg-gray-3, .guide-color-item > span.bg-gray-1, .guide-color-item > span.bg-white {\n      color: #3C4345; }\n      .guide-color-item > span.bg-gray em, .guide-color-item > span.bg-gray-2 em, .guide-color-item > span.bg-gray-3 em, .guide-color-item > span.bg-gray-1 em, .guide-color-item > span.bg-white em {\n        color: #778589; }\n    .guide-color-item > span.bg-white {\n      border: solid 1px #F6F6F7;\n      border-bottom: 0; }\n  .guide-color-item .bg-yellow {\n    color: #664900; }\n    .guide-color-item .bg-yellow em {\n      color: #e6a500; }\n  .guide-color-item .text-bg-white {\n    border: solid 1px #D2D3D4; }\n    .guide-color-item .text-bg-white span {\n      color: text-color(dark); }\n    .guide-color-item .text-bg-white em {\n      color: text-color(light); }\n\n.guide-colors-gray .guide-color-item span:first-child, .guide-colors-text .guide-color-item span:first-child {\n  border-radius: 2px 2px 0 0; }\n\n.guide-colors-gray .guide-color-item span:last-child, .guide-colors-text .guide-color-item span:last-child {\n  border-radius: 0 0 2px 2px; }\n\n.hamburger, .hamburger::before, .hamburger::after {\n  left: 0;\n  border-radius: 4px;\n  background-color: #A4A6A9;\n  width: 100%;\n  height: 2px;\n  position: absolute;\n  margin-top: -1px;\n  transition: background 300ms 0s ease, transform 300ms 0s ease, top 300ms 0.2s ease, bottom 300ms 0.2s ease; }\n\n.hamburger::before, .hamburger::after {\n  content: \" \"; }\n\n.hamburger::before {\n  top: -8px; }\n\n.hamburger::after {\n  bottom: -9px; }\n\n.hamburger-button {\n  border: 0;\n  background: none;\n  cursor: pointer;\n  position: absolute;\n  right: 1rem;\n  top: 0;\n  padding: 26px 0;\n  height: 30px;\n  width: 30px;\n  z-index: 1;\n  transition: opacity 600ms 0s ease, top 600ms 0s ease; }\n  @media screen and (min-width: 960px) {\n    .hamburger-button {\n      display: none; } }\n  .hamburger-button:hover .hamburger,\n  .hamburger-button:hover .hamburger::before,\n  .hamburger-button:hover .hamburger::after {\n    background-color: #F6F6F7; }\n  .hamburger-button-clicked .hamburger, .hamburger-button-clicked .hamburger-button:hover .hamburger {\n    background-color: transparent !important; }\n    .hamburger-button-clicked .hamburger::before, .hamburger-button-clicked .hamburger-button:hover .hamburger::before {\n      top: 0;\n      -webkit-transform: rotate(45deg);\n      -moz-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      -o-transform: rotate(45deg);\n      transform: rotate(45deg); }\n    .hamburger-button-clicked .hamburger::after, .hamburger-button-clicked .hamburger-button:hover .hamburger::after {\n      bottom: 1px;\n      -webkit-transform: rotate(-45deg);\n      -moz-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      -o-transform: rotate(-45deg);\n      transform: rotate(-45deg); }\n  .hamburger-button-clicked .hamburger,\n  .hamburger-button-clicked .hamburger::before,\n  .hamburger-button-clicked .hamburger::after {\n    transition: background 300ms 0s ease, transform 300ms 0.2s ease, top 300ms 0s ease, bottom 300ms 0s ease; }\n\n.subnav-container {\n  margin-top: -3.125rem !important; }\n  .subnav-container--fixed {\n    position: fixed;\n    top: 3.125rem;\n    right: -3px; }\n\n.subnav-item {\n  line-height: 1.7; }\n\n.subnav-link {\n  font-size: 12px; }\n  .subnav-link:focus {\n    font-weight: bold; }\n  .subnav-link--active {\n    font-weight: bold; }\n\n@media screen and (min-width: 0) and (max-width: 959px) {\n  .login-header {\n    padding: 30px; } }\n\n@media screen and (min-width: 960px) {\n  .login-header {\n    width: 65%;\n    height: 100vh;\n    float: left; } }\n\n@media screen and (min-width: 960px) {\n  .login-header-wrap {\n    position: relative;\n    top: 35%;\n    left: 20%; } }\n\n.login-copy {\n  font-size: 15px; }\n  @media screen and (min-width: 960px) {\n    .login-copy {\n      font-size: 18px; } }\n\n@media screen and (min-width: 0) and (max-width: 959px) {\n  .login-name {\n    font-size: 42px !important;\n    margin-left: -3px; } }\n\n@media screen and (min-width: 960px) {\n  .login-name {\n    font-size: 100px !important;\n    margin-left: -8px; } }\n\n@media screen and (min-width: 0) and (max-width: 959px) {\n  .login-auth {\n    padding: 30px; } }\n\n@media screen and (min-width: 960px) {\n  .login-auth {\n    float: left;\n    height: 100vh;\n    width: 35%;\n    padding-left: 60px;\n    padding-right: 60px; } }\n\n@media screen and (min-width: 1140px) {\n  .login-auth {\n    padding-left: 100px;\n    padding-right: 100px; } }\n\n@media screen and (min-width: 960px) {\n  .login-auth-wrap {\n    position: relative;\n    top: 35%; } }\n\n/**\n * GHColors theme by Avi Aryan (http://aviaryan.in)\n * Inspired by Github syntax coloring\n */\ncode {\n  color: #e3116c; }\n\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  color: #393A34;\n  font-family: Monaco, monospace;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  font-size: 13px;\n  line-height: 1.7;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none; }\n\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n  background: #b3d4fc; }\n\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n  background: #b3d4fc; }\n\n/* Code blocks */\npre[class*=\"language-\"] {\n  padding: 1rem;\n  margin: 1.5rem 0;\n  overflow: auto;\n  background-color: #f5f6f7;\n  border-radius: 2px; }\n\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n  padding: .2em;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  background: #f8f8f8;\n  border: 1px solid #dddddd; }\n\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #999988;\n  font-style: italic; }\n\n.token.namespace {\n  opacity: .7; }\n\n.token.string,\n.token.attr-value {\n  color: #e3116c; }\n\n.token.punctuation,\n.token.operator {\n  color: #393A34;\n  /* no highlight */ }\n\n.token.entity,\n.token.url,\n.token.symbol,\n.token.number,\n.token.boolean,\n.token.variable,\n.token.constant,\n.token.property,\n.token.regex,\n.token.inserted {\n  color: #36acaa; }\n\n.token.atrule,\n.token.keyword,\n.token.attr-name,\n.language-autohotkey .token.selector {\n  color: #00a4db; }\n\n.token.function,\n.token.deleted,\n.language-autohotkey .token.tag {\n  color: #9a050f; }\n\n.token.tag,\n.token.selector,\n.language-autohotkey .token.keyword {\n  color: #00009f; }\n\n.token.important,\n.token.function,\n.token.bold {\n  font-weight: bold; }\n\n.token.italic {\n  font-style: italic; }\n", ""]);

	// exports


/***/ }),
/* 29 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ })
/******/ ]);