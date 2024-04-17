const checkPassword = require('./checkPassword');
const isInGroup = require('./isInGroup');
const isNotSelf = require('./isNotSelf');
const isGroupOwner = require('./isGroupOwner');
const canAccessBucket = require('./canAccessBucket');

module.exports = {
    checkPassword,
    isInGroup,
    isNotSelf,
    isGroupOwner,
    canAccessBucket,
};
