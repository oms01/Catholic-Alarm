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
            connectSrc: [
                "'self'", 
                "https://fcmregistrations.googleapis.com/*", 
                "https://firebaseinstallations.googleapis.com/*",
                "https://fcmregistrations.googleapis.com/*",
                "https://fcmregistrations.googleapis.com/v1/projects/attention-b4db3/registrations",
                "https://fcmregistrations.googleapis.com/v1/projects/attention-b4db3/registrations/e7rSCMEuHxaPeSneUnPb34:APA91bGiex14-K-bme9Ag5IW-i8VlqfqKellU4qTBRSKibaaC43QBcWXtZfKeaasOgE3LAZlA-zi4eFNfYkyU2pEXhvIhl0VxIRjVn0Ow3hEeeYYaPYMuf8lkXhfBHXoyk1qRk8bTOM6",
                "https://firebaseinstallations.googleapis.com/v1/projects/attention-b4db3/installations"
            ],
            objectSrc: ["'none'"],
            'form-action': ["*"],
            upgradeInsecureRequests: [],
        },
    },
};

module.exports = helmetConfig;