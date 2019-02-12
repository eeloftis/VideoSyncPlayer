'use strict';

/**
 * Decodes an encoded url
 * 
 * @param {string} url 
 * @returns decoded url
 */
export const urldecode = (url) => {
    return decodeURIComponent(url.replace(/\+/g, ' '));
};

/**
 * Grabs query params that match the param
 * 
 * @param {string} param 
 * @returns string of all query params seperated by commas
 */
export const $_GET = (param) => {
    let query = window.location.search.substring(1);
    let lets = query.split('&');
    let values = [];
    for (let i = 0; i < lets.length; i++) {
        let pair = lets[i].split('=');
        if (urldecode(pair[0]) === param) {
            values.push(urldecode(pair[1]));
        }
    }
    return values.join(',');
};


export default () => {

    // 
    // jQuery PLUGIN
    //
    $.fn.extend({
        exists: function() {
            return this.length !== 0;
        }
    });



    //
    // Cookies
    //
;


    /**
     * Used by TWIG templates onload event
     * 
     * @param {any} image 
     */
    function insertImages(image) {
        let $image = $(image);
        $image.addClass('image-loaded');
    }

    window.insertImages = insertImages;

};

export function clone (obj) {
  const copy = {}
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr]
  }
  return copy
}

export function defaults (obj, defaultObject) {
  obj = clone(obj || {})
  for (const k in defaultObject) {
    if (obj[k] === undefined) obj[k] = defaultObject[k]
  }
  return obj
}

export function insertAfter (refNode, nodeToInsert) {
  const sibling = refNode.nextSibling
  if (sibling) {
    const parent = refNode.parentNode
    parent.insertBefore(nodeToInsert, sibling)
  } else {
    parent.appendChild(nodeToInsert)
  }
}

export function insertBefore (refNode, nodeToInsert) {
  const parent = refNode.parentNode
  parent.insertBefore(nodeToInsert, refNode)
}

export function forEach (items, fn) {
  if (!items) return
  if (items.forEach) {
    items.forEach(fn)
  } else {
    for (let i = 0; i < items.length; i++) {
      fn(items[i], i, items)
    }
  }
}

export function debounce (ms, fn) {
  let timeout
  const debouncedFn = function () {
    clearTimeout(timeout)
    timeout = setTimeout(fn, ms)
  }
  return debouncedFn
}
