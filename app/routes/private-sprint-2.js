const _ = require('lodash')

module.exports = router => {
    router.post('/private-sprint-2/start', (req, res) => {
        req.session.data['enquiry-about'] = "mor";
        req.session.data['building-status'] = "occupied"
        res.redirect('/private-sprint-2/about-the-building/have-existing-applications')
    })


    router.post('/private-sprint-2/about-the-building/have-existing-applications', (req, res) => {
        if (req.session.data['existing-application'] == "bcr") {
            res.redirect('/private-sprint-2/about-the-building/enter-bcr-number')
        } else if (req.session.data['existing-application'] == "hrb") {
            res.redirect('/private-sprint-2/about-the-building/enter-hrb-number')
        } else {
            res.redirect('/private-sprint-2/about-the-building/is-the-building-occupied')
        }
    })

    router.post('/private-sprint-2/about-the-building/is-the-building-occupied', (req, res) => {
        if (req.session.data['building-status'] == "in design") {
            res.redirect('/private-sprint-2/about-the-building/design-status')
        } else {
            res.redirect('/private-sprint-2/about-the-building/have-an-address')
        }
    })

    router.post('/private-sprint-2/about-the-building/design-status', (req, res) => {
        if (req.session.data['design-status'] == "yes") {
            res.redirect('/private-sprint-2/about-the-building/enter-bcr-number')
        } else {
            res.redirect('/private-sprint-2/about-the-building/mor-not-required')
        }
    })

    router.post('/private-sprint-2/about-the-building/have-an-address', (req, res) => {
        if (req.session.data['has-address'] == "yes") {
            res.redirect('/private-sprint-2/about-the-building/postcode-lookup')
        } else {
            res.redirect('/private-sprint-2/about-the-building/choose-how-to-locate-building')
        }
    })
/*
    router.post('/private-sprint-2/about-the-building/have-an-address', (req, res) => {
        if (req.session.data['has-address'] == "yes") {
            res.redirect('/private-sprint-2/about-the-building/postcode-lookup')
        } else {
            res.redirect('/private-sprint-2/about-the-building/choose-how-to-locate-building')
        }
    })

 
    router.post('/private-sprint-2/about-the-building/choose-how-to-locate-building', (req, res) => {
        res.redirect('/private-sprint-2/about-the-person/your-details')
    })

    router.post('/private-sprint-2/about-the-building/building-location', (req, res) => {
        res.redirect('/private-sprint-2/about-the-person/your-details')
    })
*/
    router.post('/private-sprint-2/about-the-building/enter-hrb-number', (req, res) => {
        res.redirect('/private-sprint-2/about-the-building/confirm-address')
    })

    router.post('/private-sprint-2/about-the-building/enter-bcr-number', (req, res) => {
        res.redirect('/private-sprint-2/about-the-building/confirm-address')
    })

    router.post('/private-sprint-2/about-the-building/postcode-lookup', (req, res) => {
        res.redirect('/private-sprint-2/about-the-building/choose-address')
    })

    router.post('/private-sprint-2/about-the-building/choose-address', (req, res) => {
        if (req.session.data['building-status'] == "in design" || req.session.data['building-status'] == "in construction") {
            res.redirect('/private-sprint-2/about-the-person/select-organisation')
        } else {
            req.session.data['has-building-reg-number'] = "yes"
            res.redirect('/private-sprint-2/about-the-building/confirm-address')
        }
    })

    router.post('/private-sprint-2/about-the-building/confirm-address', (req, res) => {
        res.redirect('/private-sprint-2/about-the-person/select-organisation')
    })

    router.post('/private-sprint-2/about-the-building/which-region', (req, res) => {
        if (req.session.data['building-region'] == "england") {
            res.redirect('/private-sprint-2/about-the-building/enter-the-building-address')
        } else {
            res.redirect('/private-sprint-2/about-the-building/not-in-england')
        }
    })

    router.post('/private-sprint-2/about-the-building/enter-the-building-address', (req, res) => {
        res.redirect('/private-sprint-2/about-the-person/select-organisation')
    })

    router.post('/private-sprint-2/about-the-person/select-organisation', (req, res) => {
        res.redirect('/private-sprint-2/about-the-person/your-details')
    })

    router.post('/private-sprint-2/about-the-person/your-details', (req, res) => {
        res.redirect('/private-sprint-2/about-the-occurrence/risk-or-event')
    })

    router.post('/private-sprint-2/about-the-occurrence/risk-or-event', (req, res) => {
        res.redirect('/private-sprint-2/about-the-occurrence/occurrence-type')
    })
/*


    router.post('/private-sprint-2/about-the-person/enter-your-contact-details', (req, res) => {
        res.redirect('/private-sprint-2/about-the-person/your-role')
    })

    router.post('/private-sprint-2/about-the-person/your-role', (req, res) => {
        const roles = req.session.data['reporter-role'];

        if (roles) {
            if (roles.length == 1) {
                roles.forEach(role => {
                    if (role == "other") {
                        res.redirect('/private-sprint-2/about-the-person/not-able-to-submit')
                    } else {
                        if (req.session.data['has-building-reg-number'] == "yes") {
                            res.redirect('/private-sprint-2/about-the-occurrence/occurrence-type')
                        } else {
                            res.redirect('/private-sprint-2/building-in-scope/number-of-floors')
                        }
                    }
                });
            } else {
                if (req.session.data['has-building-reg-number'] == "yes") {
                    res.redirect('/private-sprint-2/about-the-occurrence/occurrence-type')
                } else {
                    res.redirect('/private-sprint-2/building-in-scope/number-of-floors')
                }
            }
        } else {
            res.redirect('/private-sprint-2/about-the-occurrence/occurrence-type')
        }        
    })

    */

    router.post('/private-sprint-2/building-in-scope/number-of-floors', (req, res) => {
        res.redirect('/private-sprint-2/building-in-scope/height-of-building')   
    })

    router.post('/private-sprint-2/building-in-scope/height-of-building', (req, res) => {
        res.redirect('/private-sprint-2/building-in-scope/number-of-units')   
    })

    router.post('/private-sprint-2/building-in-scope/height-of-building', (req, res) => {
        res.redirect('/private-sprint-2/building-in-scope/number-of-units')   
    })

    router.post('/private-sprint-2/building-in-scope/number-of-units', (req, res) => {
        const height = req.session.data['building-height']
        const floors = req.session.data['number-floors']
        const units = req.session.data['number-units']
        const inScope = (height >= 18 || floors >= 7) && units >= 2;

        if (inScope) {
            res.redirect('/private-sprint-2/about-the-occurrence/occurrence-type')
        } else {
            res.redirect('/private-sprint-2/building-in-scope/not-in-scope')
        }
    })

    router.post('/private-sprint-2/about-the-occurrence/occurrence-type', (req, res) => {
        res.redirect('/private-sprint-2/about-the-occurrence/occurrence-date')
    })

    router.post('/private-sprint-2/about-the-occurrence/occurrence-date', (req, res) => {
        res.redirect('/private-sprint-2/about-the-occurrence/occurrence-details')
    })

    router.post('/private-sprint-2/about-the-occurrence/occurrence-details', (req, res) => {
        res.redirect('/private-sprint-2/supporting-information/upload-supporting-info')
    })

    router.post('/private-sprint-2/supporting-information/upload-supporting-info', (req, res) => {
        console.log(req.session.data['filesUploaded'])
        console.log("before: " + typeof(req.session.data['filesUploaded']))

        if (typeof(req.session.data['filesUploaded']) == "string") {
            // convert string to object
            var myArray = [];
            myArray.push(req.session.data['filesUploaded'])
            req.session.data['filesUploaded'] = myArray

            console.log("after: " + typeof(req.session.data['filesUploaded']))
        }
        res.redirect('/private-sprint-2/check-your-answers')
    })
    /*
    router.post('/private-sprint-2/supporting-information/review-uploads', (req, res) => {
        res.redirect('/private-sprint-2/check-your-answers')
    })
    */
    router.post('/private-sprint-2/check-your-answers', (req, res) => {
        res.redirect('/private-sprint-2/confirmation')
    })
    
}
