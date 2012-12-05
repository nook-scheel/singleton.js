// ==========================================================================
// Project:   singleton
// Copyright: ©2012 Pumpkin Inc. All rights reserved.
// ==========================================================================
(function(window) {
  var K = function() {},
      instance,
      document = window.document;
  
  // Constructor that supports either Singleton([]) or new
  // Singleton([]);
  // 
  // Takes a array as the argument.

  var Singleton = function(array) {
    var self;

    if(typeof instance !== 'undefined') {
      instance.innerArray = array || instance.innerArray;
      return instance;
    } else if(this instanceof Singleton) {
      self = this;
    } else {
      self = new K();
    }

    self.innerArray = array;
    self.elements = {};
    return instance = self;
  }

  K.prototype = Singleton.prototype;
  
  Singleton.prototype.list = function() {
    return this.innerArray;
  };

  window.Singleton = Singleton;
})(this);
