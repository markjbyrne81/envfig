"use strict";

let handler = {
  get(target, key) {
    if (typeof target[key] === 'object' && target[key] !== null) {     
      return new Proxy(target[key], handler);
    } 
    else {
      console.log(key);

      if (!process.env[key]) {
        return target[key];
      }

      let envVar = process.env[key];

      switch (typeof target[key]) {
        case 'string':
          return envVar ? envVar : target[key];
        case 'object':
          return target[key] === null && envVar ? envVar : target[key];
        case 'null':
          return envVar ? envVar : target[key];
        case 'number':
          return Number.isInteger(envVar) ? Number.parseInt(envVar) : Number.parseFloat(envVar);
        case 'boolean':
          return envVar === 'false' ? false : true;
      }
    }
  }
}

module.exports = (config) => {
  return new Proxy(config, handler);
};