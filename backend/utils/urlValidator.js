const url = require('url');

function validateUrl(input) {
    try {
        new URL(input);
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = { validateUrl };
