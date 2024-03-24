const helmetConfig = {
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'", "cdn.jsdelivr.net", "www.gstatic.com", "localhost", "http://localhost", "https://omsoms.kr/*"],
            scriptSrc: ["'self'", "cdn.jsdelivr.net", "www.gstatic.com", "localhost", "http://localhost", "https://omsoms.kr/*"],
            objectSrc: ["'none'"],
            'form-action': ["*"],
            upgradeInsecureRequests: [],
        },
    },
};

module.exports = helmetConfig;