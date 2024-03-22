const helmetConfig = {
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "cdn.jsdelivr.net", "www.gstatic.com", "localhost", "http://localhost"],
            objectSrc: ["'none'"],
            'form-action': ["*"],
            upgradeInsecureRequests: [],
        },
    },
};

module.exports = helmetConfig;