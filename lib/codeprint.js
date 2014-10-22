(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory();
    });
  } else if (typeof exports !== 'undefined') {
    module.exports = factory();
  } else {
    root.codeprint = factory();
  }

}(this, function () {
  'use strict';

  // code goes here
  var codeprint = function (options) {

  };

  return codeprint;
}));
