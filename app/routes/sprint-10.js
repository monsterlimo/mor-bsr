const _ = require('lodash')

module.exports = router => {
    router.post('/sprint-10/start', (req, res) => {
        req.session.data['enquiry-about'] = "mor";
        res.redirect('/sprint-10/about-the-building/is-the-building-occupied')
    })

    router.post('/sprint-10/about-the-building/is-the-building-occupied', (req, res) => {
        if (req.session.data['building-status'] == "in design" || req.session.data['building-status'] == "in construction") {
            res.redirect('/sprint-10/about-the-building/have-an-address')
        } else {
            res.redirect('/sprint-10/about-the-building/do-you-have-a-hrb-number')
        }
    })

    router.post('/sprint-10/about-the-building/have-an-address', (req, res) => {
        if (req.session.data['has-address'] == "yes") {
            res.redirect('/sprint-10/about-the-building/postcode-lookup')
        } else {
            res.redirect('/sprint-10/about-the-building/choose-how-to-locate-building')
        }
    })

    router.post('/sprint-10/about-the-building/choose-how-to-locate-building', (req, res) => {
        res.redirect('/sprint-10/about-the-person/your-details')
    })

    router.post('/sprint-10/about-the-building/do-you-have-a-hrb-number', (req, res) => {
        if (req.session.data['has-building-reg-number'] == "yes") {
            res.redirect('/sprint-10/about-the-building/enter-hrb-number')
        } else {
            res.redirect('/sprint-10/about-the-building/have-an-address')
        }
    })

    router.post('/sprint-10/about-the-building/building-location', (req, res) => {
        res.redirect('/sprint-10/about-the-person/your-details')
    })

    router.post('/sprint-10/about-the-building/enter-hrb-number', (req, res) => {
        res.redirect('/sprint-10/about-the-building/confirm-address')
    })

    router.post('/sprint-10/about-the-building/postcode-lookup', (req, res) => {
        res.redirect('/sprint-10/about-the-building/choose-address')
    })

    router.post('/sprint-10/about-the-building/choose-address', (req, res) => {
        if (req.session.data['building-status'] == "in design" || req.session.data['building-status'] == "in construction") {
            res.redirect('/sprint-10/about-the-person/your-details')
        } else {
            req.session.data['has-building-reg-number'] = "yes"
            res.redirect('/sprint-10/about-the-building/confirm-address')
        }
    })

    router.post('/sprint-10/about-the-building/confirm-address', (req, res) => {
        res.redirect('/sprint-10/about-the-person/your-details')
    })

    router.post('/sprint-10/about-the-building/which-region', (req, res) => {
        if (req.session.data['building-region'] == "england") {
            res.redirect('/sprint-10/about-the-building/enter-the-building-address')
        } else {
            res.redirect('/sprint-10/about-the-building/not-in-england')
        }
    })

    router.post('/sprint-10/about-the-building/enter-the-building-address', (req, res) => {
        res.redirect('/sprint-10/about-the-person/your-details')
    })

    router.post('/sprint-10/about-the-person/your-details', (req, res) => {
        res.redirect('/sprint-10/about-the-person/your-role')
    })

    router.post('/sprint-10/about-the-person/enter-your-contact-details', (req, res) => {
        res.redirect('/sprint-10/about-the-person/your-role')
    })

    router.post('/sprint-10/about-the-person/your-role', (req, res) => {
        const roles = req.session.data['reporter-role'];

        if (roles) {
            if (roles.length == 1) {
                roles.forEach(role => {
                    if (role == "other") {
                        res.redirect('/sprint-10/about-the-person/not-able-to-submit')
                    } else {
                        if (req.session.data['has-building-reg-number'] == "yes") {
                            res.redirect('/sprint-10/about-the-occurrence/occurrence-type')
                        } else {
                            res.redirect('/sprint-10/building-in-scope/number-of-floors')
                        }
                    }
                });
            } else {
                if (req.session.data['has-building-reg-number'] == "yes") {
                    res.redirect('/sprint-10/about-the-occurrence/occurrence-type')
                } else {
                    res.redirect('/sprint-10/building-in-scope/number-of-floors')
                }
            }
        } else {
            res.redirect('/sprint-10/about-the-occurrence/occurrence-type')
        }        
    })

    router.post('/sprint-10/building-in-scope/number-of-floors', (req, res) => {
        res.redirect('/sprint-10/building-in-scope/height-of-building')   
    })

    router.post('/sprint-10/building-in-scope/height-of-building', (req, res) => {
        res.redirect('/sprint-10/building-in-scope/number-of-units')   
    })

    router.post('/sprint-10/building-in-scope/height-of-building', (req, res) => {
        res.redirect('/sprint-10/building-in-scope/number-of-units')   
    })

    router.post('/sprint-10/building-in-scope/number-of-units', (req, res) => {
        const height = req.session.data['building-height']
        const floors = req.session.data['number-floors']
        const units = req.session.data['number-units']
        const inScope = (height >= 18 || floors >= 7) && units >= 2;

        if (inScope) {
            res.redirect('/sprint-10/about-the-occurrence/occurrence-type')
        } else {
            res.redirect('/sprint-10/building-in-scope/not-in-scope')
        }
    })

    router.post('/sprint-10/about-the-occurrence/occurrence-type', (req, res) => {
        res.redirect('/sprint-10/about-the-occurrence/occurrence-date')
    })

    router.post('/sprint-10/about-the-occurrence/occurrence-date', (req, res) => {
        res.redirect('/sprint-10/about-the-occurrence/occurrence-details')
    })

    router.post('/sprint-10/about-the-occurrence/occurrence-details', (req, res) => {
        res.redirect('/sprint-10/supporting-information/upload-supporting-info')
    })

    router.post('/sprint-10/supporting-information/upload-supporting-info', (req, res) => {
        console.log(req.session.data['filesUploaded'])
        console.log("before: " + typeof(req.session.data['filesUploaded']))

        if (typeof(req.session.data['filesUploaded']) == "string") {
            // convert string to object
            var myArray = [];
            myArray.push(req.session.data['filesUploaded'])
            req.session.data['filesUploaded'] = myArray

            console.log("after: " + typeof(req.session.data['filesUploaded']))
        }
        res.redirect('/sprint-10/supporting-information/review-uploads')
    })

    router.post('/sprint-10/supporting-information/review-uploads', (req, res) => {
        res.redirect('/sprint-10/check-your-answers')
    })

    router.post('/sprint-10/check-your-answers', (req, res) => {
        res.redirect('/sprint-10/confirmation')
    })
    
}
