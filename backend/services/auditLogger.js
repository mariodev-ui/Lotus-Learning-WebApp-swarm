const Audit = require('../models/Audit');

async function logAudit(user, action, details) {
    const auditLog = new Audit({
        user: user.id,
        action,
        details
    });
    await auditLog.save();
}

module.exports = { logAudit };
