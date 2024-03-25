const helmetConfig = {
    contentSecurityPolicy: {
        directives: {
            defaultSrc: [
                "'self'", 
                "cdn.jsdelivr.net", 
                "www.gstatic.com", 
                "localhost", 
                "http://localhost", 
                "https://omsoms.kr/*", 
                "https://firebaseinstallations.googleapis.com/*", 
                "https://fcmregistrations.googleapis.com/*"
            ],
            scriptSrc: [
                "'self'", 
                "cdn.jsdelivr.net", 
                "www.gstatic.com", 
                "localhost", 
                "http://localhost", 
                "https://omsoms.kr/*", 
                "https://firebaseinstallations.googleapis.com/*", 
                "https://fcmregistrations.googleapis.com/*"
            ],
            objectSrc: ["'none'"],
            'form-action': ["*"],
            upgradeInsecureRequests: [],
        },
    },
};

module.exports = helmetConfig;