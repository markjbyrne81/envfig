"use strict";

let config = require('../config/config');

class envfig {

    constructor(options) {

        this.config = options.config;

        this.nameSpace = options.nameSpace;
        
        this.options = options;
    }
}