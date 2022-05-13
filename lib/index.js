"use strict";

module.exports = isEmpty

/**
 * Test empty array, object, string, or null value
 *
 * @param {string} $value
 *
 * @returns {boolean}
 */
function isEmpty($value) {
    if (($value instanceof Map) || ($value instanceof Set)) { // map or set
        return $value.size === 0;
    }

    if ($value instanceof Object) { // for any object
        return Object.keys($value).length === 0;
    }

    // others
    return !$value || (0 === $value.toString().trim().length) || (!isNaN(parseInt($value)) && 0 === parseInt($value));
}
