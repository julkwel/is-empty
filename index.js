"use strict";

module.exports = {
    isEmpty
}

function isEmpty($value) {
    return !$value || (0 === $value.trim().length) || (!isNaN(parseInt($value)) && 0 === parseInt($value));
}
