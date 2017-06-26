
/**
 * Module dependencies.
 */

var thunkify = require('thunkify-wrap');
var get = thunkify(require('request').get);
var resolve = require('path').resolve;
var pathModule = require('path');
var isUri = require('valid-url').isUri;
var fs = require('fs');

/**
 * Get pack.
 *
 * @param {string}
 *
 * @return {array}
 */

exports.get = function *(path) {
  if (fs.existsSync(resolve(process.cwd(), path)) && fs.statSync(path).isDirectory()) {
    // example:
    // { title: 'fika',
    //   emojis:
    //   [ { name: 'fika-bulle', src: 'http://i.imgur.com/ZeIf2cu.png' },
    //     { name: 'fika-croissant', src: 'http://i.imgur.com/UC3QP4q.png' },
    //     { name: 'fika-punschrulle', src: 'http://i.imgur.com/jY9w1DC.png' },
    //     { name: 'fika-semla', src: 'http://i.imgur.com/rU8iYTa.png' },
    //     { name: 'fika-wiener', src: 'http://i.imgur.com/VXlhDIg.png' } ] }
    var files = fs.readdirSync(path);
    var obj = {
      title: path,
      emojis: []
    };
    files
      .filter(function(entry) {
        return entry.endsWith('.jpg') ||
          entry.endsWith('.jpeg') ||
          entry.endsWith('.gif') ||
          entry.endsWith('.png');
      })
      .forEach(function(entry) {
        obj.emojis.push({
          name : pathModule.basename(entry, pathModule.extname(entry)),
          src:  pathModule.resolve(path) + pathModule.sep + entry
        });
      });
    return obj;
  }
  return;
};
