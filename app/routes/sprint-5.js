const _ = require('lodash')

module.exports = router => {
    router.post('/sprint-5/start', (req, res) => {
        res.redirect('/sprint-5/about-the-person/type-of-person')
    })

    router.post('/sprint-5/about-the-person/type-of-person', (req, res) => {
        if (req.session.data['type-of-person'] == "public") {
            res.redirect('/sprint-5/about-the-request/about-request-public')
        } else {
            res.redirect('/sprint-5/about-the-request/about-request-professional')
        }
    })

    router.post('/sprint-5/about-the-request/about-request-public', (req, res) => {
        res.redirect('/sprint-5/about-the-request/about-a-building')
    })

    router.post('/sprint-5/about-the-request/about-request-professional', (req, res) => {
        if (req.session.data['enquiry-about'] == "mor") {
            res.redirect('/sprint-5/about-the-occurrence/mor-information')
        } else {
            res.redirect('/sprint-5/about-the-request/about-a-building')
        }
    })

    router.post('/sprint-5/about-the-occurrence/mor-information', (req, res) => {
        res.redirect('/sprint-5/building-in-scope/prof-is-the-building-occupied')
    })

    router.post('/sprint-5/building-in-scope/prof-is-the-building-occupied', (req, res) => {
        if (req.session.data['building-status'] == "occupied" || req.session.data['building-status'] == "complete but not occupied") {
            res.redirect('/sprint-5/about-the-building/do-you-have-a-hrb-number')
        } else {
            res.redirect('/sprint-5/about-the-building/which-region')
        }  
    })

    router.post('/sprint-5/about-the-building/do-you-have-a-hrb-number', (req, res) => {
        if (req.session.data['has-building-reg-number'] == "yes") {
            res.redirect('/sprint-5/about-the-building/enter-hrb-number')
        } else {
            res.redirect('/sprint-5/about-the-building/postcode-lookup')
        }
    })

    router.post('/sprint-5/about-the-building/enter-hrb-number', (req, res) => {
        res.redirect('/sprint-5/about-the-building/confirm-address')
    })

    router.post('/sprint-5/about-the-request/about-a-building', (req, res) => {
        if (req.session.data['about-a-building'] == "yes") {
            res.redirect('/sprint-5/about-the-building/postcode-lookup')
        } else {
            res.redirect('/sprint-5/about-the-person/enter-your-name')
        }
    })

    


    router.post('/sprint-5/about-the-building/postcode-lookup', (req, res) => {
        res.redirect('/sprint-5/about-the-building/confirm-address')
    })

    router.post('/sprint-5/about-the-building/confirm-address', (req, res) => {
        res.redirect('/sprint-5/about-the-person/enter-your-name')
    })

    router.post('/sprint-5/about-the-building/which-region', (req, res) => {
        res.redirect('/sprint-5/about-the-building/enter-the-building-address')
    })

    router.post('/sprint-5/about-the-building/enter-the-building-address', (req, res) => {
        res.redirect('/sprint-5/about-the-person/enter-your-name')
    })

    router.post('/sprint-5/about-the-person/enter-your-name', (req, res) => {
        if (req.session.data['enquiry-about'] == "mor") {
            res.redirect('/sprint-5/about-the-person/enter-your-org-name')
        } else {
            res.redirect('/sprint-5/about-the-person/enter-your-contact-details')
        }
    })

    router.post('/sprint-5/about-the-person/enter-your-org-name', (req, res) => {
        res.redirect('/sprint-5/about-the-person/enter-your-contact-details')
    })

    router.post('/sprint-5/about-the-person/enter-your-contact-details', (req, res) => {
        if (req.session.data['enquiry-about'] == "mor") {
            res.redirect('/sprint-5/about-the-person/what-is-your-role')
        } else if (req.session.data['enquiry-about'] == "complaint") {
            if (req.session.data['about-a-building'] == "yes") {
                res.redirect('/sprint-5/about-the-ap/share-details-with-ap')
            } else {
                res.redirect('/sprint-5/about-the-complaint/complaint-details')
            }
        } else {
            if (req.session.data['about-a-building'] == "yes") {
                res.redirect('/sprint-5/about-the-person/what-is-your-relationship-to-the-building')
            } else {
                res.redirect('/sprint-5/about-the-request/enter-advice-required')
            }
        }
    })

    router.post('/sprint-5/about-the-ap/share-details-with-ap', (req, res) => {
        res.redirect('/sprint-5/about-the-person/what-is-your-relationship-to-the-building')
    })

    // only appears for public
    router.post('/sprint-5/about-the-person/what-is-your-relationship-to-the-building', (req, res) => {
        if (req.session.data['enquiry-about'] == "advice") {
            if (req.session.data['building-region']) {
                res.redirect('/sprint-5/building-in-scope/number-of-floors') 
            } else {
                res.redirect('/sprint-5/about-the-request/enter-advice-required') 
            } 
        } else {
            if (req.session.data['building-resident'] == "yes") {
                res.redirect('/sprint-5/building-in-scope/any-building-work') 
            } else {
                res.redirect('/sprint-5/building-in-scope/is-the-building-occupied')   
            }
        }
        
        /*
        if (req.session.data['building-resident'] == "yes") {
            if (req.session.data['enquiry-about'] == "advice") {
                if (req.session.data['building-region']) {
                    res.redirect('/sprint-5/building-in-scope/number-of-floors') 
                } else {
                    res.redirect('/sprint-5/about-the-request/enter-advice-required') 
                }
            } else {
                res.redirect('/sprint-5/building-in-scope/any-building-work')  
            }
             
        } else {
            res.redirect('/sprint-5/building-in-scope/is-the-building-occupied')   
        }
        */
    })

    router.post('/sprint-5/building-in-scope/any-building-work', (req, res) => {
        if (req.session.data['building-region']) {
            res.redirect('/sprint-5/building-in-scope/number-of-floors')   
        } else {
            res.redirect('/sprint-5/about-the-complaint/complaint-details')   
        }
    })

    router.post('/sprint-5/about-the-person/what-is-your-role', (req, res) => {
        if (req.session.data['building-region']) {
            res.redirect('/sprint-5/building-in-scope/prof-number-of-floors')   
        } else {
            res.redirect('/sprint-5/about-the-occurrence/occurrence-type')   
        }
    })

    router.post('/sprint-5/building-in-scope/is-the-building-occupied', (req, res) => {
        res.redirect('/sprint-5/building-in-scope/any-building-work')
    })

    router.post('/sprint-5/building-in-scope/prof-number-of-floors', (req, res) => {
        res.redirect('/sprint-5/building-in-scope/prof-height-of-building')   
    })

    router.post('/sprint-5/building-in-scope/prof-height-of-building', (req, res) => {
        res.redirect('/sprint-5/building-in-scope/prof-number-of-units')   
    })

    // public building in scope

    router.post('/sprint-5/building-in-scope/number-of-floors', (req, res) => {
        res.redirect('/sprint-5/building-in-scope/number-of-units')   
    })

    router.post('/sprint-5/building-in-scope/number-of-units', (req, res) => {
        if (req.session.data['enquiry-about'] == "advice") {
            res.redirect('/sprint-5/about-the-request/enter-advice-required')   
        } else {
            res.redirect('/sprint-5/about-the-complaint/complaint-details')   
        }
    })

    router.post('/sprint-5/building-in-scope/prof-number-of-units', (req, res) => {
        res.redirect('/sprint-5/about-the-occurrence/occurrence-type')   
    })

    

    router.post('/sprint-5/about-the-request/enter-advice-required', (req, res) => {
        res.redirect('/sprint-5/check-your-answers')
    })

    router.post('/sprint-5/about-the-complaint/scope-of-bsr', (req, res) => {
        res.redirect('/sprint-5/about-the-complaint/complaint-details')
    })

    router.post('/sprint-5/about-the-complaint/complaint-details', (req, res) => {
        res.redirect('/sprint-5/supporting-information/do-you-have-any-supporting-info')
    })

    router.post('/sprint-5/about-the-occurrence/occurrence-type', (req, res) => {
        res.redirect('/sprint-5/about-the-occurrence/occurrence-date')
    })

    router.post('/sprint-5/about-the-occurrence/occurrence-date', (req, res) => {
        res.redirect('/sprint-5/about-the-occurrence/occurrence-who-reported')
    })

    router.post('/sprint-5/about-the-occurrence/occurrence-who-reported', (req, res) => {
        if (req.session.data['who-reported-occurrence'] == "i did") {
            res.redirect('/sprint-5/about-the-occurrence/occurrence-details')
        } else {
            res.redirect('/sprint-5/about-the-occurrence/occurrence-reporter')
        }
    })

    router.post('/sprint-5/about-the-occurrence/occurrence-reporter', (req, res) => {
        res.redirect('/sprint-5/about-the-occurrence/occurrence-details')
    })

    router.post('/sprint-5/about-the-occurrence/occurrence-details', (req, res) => {
        res.redirect('/sprint-5/supporting-information/do-you-have-any-supporting-info')
    })

    router.post('/sprint-5/supporting-information/do-you-have-any-supporting-info', (req, res) => {
        if (req.session.data['supporting-evidence'] == "yes") {
            res.redirect('/sprint-5/supporting-information/upload-supporting-info')
        } else {
            
            if (req.session.data['enquiry-about'] == "complaint") {
                // no complaint goes to AP
                res.redirect('/sprint-5/about-the-ap/have-you-contacted-the-ap')
            } else {
                res.redirect('/sprint-5/check-your-answers')
            }
        }
    })

    router.post('/sprint-5/supporting-information/upload-supporting-info', (req, res) => {
        res.redirect('/sprint-5/supporting-information/review-uploads')
    })

    router.post('/sprint-5/supporting-information/review-uploads', (req, res) => {
        if (req.session.data['enquiry-about'] == "complaint") {
            // no complaint goes to AP
            res.redirect('/sprint-5/about-the-ap/have-you-contacted-the-ap')
        } else {
            res.redirect('/sprint-5/check-your-answers')
        }
    })

    router.post('/sprint-5/about-occurrence/reporter-relationship', (req, res) => {
        res.redirect('/sprint-5/about-the-building/do-you-know-the-address')
    })

    router.post('/sprint-5/about-the-building/do-you-know-the-address', (req, res) => {
        res.redirect('/sprint-5/about-the-building/is-the-building-occupied')
    })

    router.post('/sprint-5/about-the-ap/have-you-contacted-the-ap', (req, res) => {
        if (req.session.data['contacted-ap'] == "yes") {
            res.redirect('/sprint-5/about-the-ap/enter-ap-details')
        } else {
            res.redirect('/sprint-5/check-your-answers')
        }
    })

    router.post('/sprint-5/about-the-ap/enter-ap-details', (req, res) => {
        //res.redirect('/sprint-5/about-the-ap/ap-relationship')
        res.redirect('/sprint-5/about-the-ap/when-contacted-ap')
    })

    // router.post('/sprint-5/about-the-ap/ap-relationship', (req, res) => {
    //    res.redirect('/sprint-5/about-the-ap/when-contacted-ap')
    // })

    router.post('/sprint-5/about-the-ap/when-contacted-ap', (req, res) => {
        res.redirect('/sprint-5/check-your-answers')
    })

   

    router.post('/sprint-5/check-your-answers', (req, res) => {
        res.redirect('/sprint-5/confirmation')
    })
}
