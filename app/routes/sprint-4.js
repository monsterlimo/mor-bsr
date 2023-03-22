const _ = require('lodash')

module.exports = router => {
    router.post('/sprint-4/start', (req, res) => {
        res.redirect('/sprint-4/what-is-your-request-about')
    })

    router.post('/sprint-4/what-is-your-request-about', (req, res) => {
        if (req.session.data['enquiry-about'] == "mor") {
            res.redirect('/sprint-4/about-the-occurrence/mor-information')
        } else {
            res.redirect('/sprint-4/about-the-building/postcode-lookup')
        }
    })

    router.post('/sprint-4/about-the-occurrence/mor-information', (req, res) => {
        res.redirect('/sprint-4/about-the-building/postcode-lookup')
    })

    router.post('/sprint-4/about-the-building/postcode-lookup', (req, res) => {
        res.redirect('/sprint-4/about-the-building/choose-address')
    })

    router.post('/sprint-4/about-the-building/choose-address', (req, res) => {
        res.redirect('/sprint-4/about-the-building/confirm-address')
    })

    router.post('/sprint-4/about-the-building/confirm-address', (req, res) => {
        res.redirect('/sprint-4/about-the-person/enter-your-name')
    })
    
    router.post('/sprint-4/about-the-person/enter-your-name', (req, res) => {
        if (req.session.data['enquiry-about'] == "mor") {
            res.redirect('/sprint-4/about-the-person/enter-your-org-name')
        } else {
            res.redirect('/sprint-4/about-the-person/enter-your-contact-details')
        }
    })

    router.post('/sprint-4/about-the-person/enter-your-org-name', (req, res) => {
        res.redirect('/sprint-4/about-the-person/enter-your-contact-details')
    })

    router.post('/sprint-4/about-the-person/enter-your-contact-details', (req, res) => {
        res.redirect('/sprint-4/about-the-person/what-is-your-role')
    })

    // prof building in scope flow
    router.post('/sprint-4/about-the-person/what-is-your-role', (req, res) => {
        res.redirect('/sprint-4/building-in-scope/prof-number-of-floors')   
    })

    router.post('/sprint-4/building-in-scope/prof-number-of-floors', (req, res) => {
        res.redirect('/sprint-4/building-in-scope/prof-height-of-building')   
    })

    router.post('/sprint-4/building-in-scope/prof-height-of-building', (req, res) => {
        res.redirect('/sprint-4/building-in-scope/prof-number-of-units')   
    })

    // public building in scope


    router.post('/sprint-4/building-in-scope/prof-number-of-units', (req, res) => {
        res.redirect('/sprint-4/building-in-scope/is-the-building-occupied')   
    })









    router.post('/sprint-4/about-the-person/relationship-to-the-building', (req, res) => {
        res.redirect('/sprint-4/about-the-person/are-you-a-resident')
    })

    router.post('/sprint-4/about-the-person/are-you-a-resident', (req, res) => {
        res.redirect('/sprint-4/about-the-contact/enquiry-about')
    })

    router.post('/sprint-4/about-the-contact/enquiry-about', (req, res) => {
        if (req.session.data['enquiry-about'] == "mor") {
            res.redirect('/sprint-4/about-occurrence/declaration')
        } else {
            if (req.session.data['enquiry-about'] == "advice") {
                // advice
                res.redirect('/sprint-4/about-the-contact/about-a-building')
            } else {
                // complaint
                res.redirect('/sprint-4/about-the-building/do-you-know-the-address')
            }   
        }    
    })

    router.post('/sprint-4/about-the-contact/about-a-building', (req, res) => {
        if (req.session.data['about-a-building'] == "yes") {
            res.redirect('/sprint-4/about-the-building/do-you-know-the-address')
        } else {
            
            if (req.session.data['enquiry-about'] == "advice") {
                // advice
                res.redirect('/sprint-4/about-the-building/enter-description')
            } else {
                // complaint
                res.redirect('/sprint-4/about-the-ap/have-you-contacted-the-ap')
            }
        }    
    })

    router.post('/sprint-4/about-occurrence/declaration', (req, res) => {
        res.redirect('/sprint-4/about-occurrence/reporter-relationship')
    })

    router.post('/sprint-4/about-occurrence/reporter-relationship', (req, res) => {
        res.redirect('/sprint-4/about-the-building/do-you-know-the-address')
    })

    router.post('/sprint-4/about-the-building/do-you-know-the-address', (req, res) => {
        res.redirect('/sprint-4/about-the-building/is-the-building-occupied')
    })

    // at this point we need to show alternative
    // pages for cpaturing building info for professionals

    router.post('/sprint-4/about-the-building/is-the-building-occupied', (req, res) => {
        if (req.session.data['enquiry-about'] == "mor") {
            res.redirect('/sprint-4/about-the-building/prof-number-of-floors')
        } else {
            res.redirect('/sprint-4/about-the-building/how-big-is-the-building')
        }
    })

    // professional route start
    router.post('/sprint-4/about-the-building/prof-number-of-floors', (req, res) => {
        res.redirect('/sprint-4/about-the-building/prof-height-of-building')
    })

    router.post('/sprint-4/about-the-building/prof-height-of-building', (req, res) => {
        res.redirect('/sprint-4/about-the-building/prof-number-of-units')
    })

    router.post('/sprint-4/about-the-building/prof-number-of-units', (req, res) => {
        // here we can calculate if the building is a HRB
        res.redirect('/sprint-4/about-occurrence/occurrence-type')
    })
    // professional route end



    router.post('/sprint-4/about-the-building/how-big-is-the-building', (req, res) => {
        res.redirect('/sprint-4/about-the-building/number-of-units')
    })

    // force a rebuild of the prototype

    router.post('/sprint-4/about-the-building/number-of-units', (req, res) => {
        if (req.session.data['enquiry-about'] == "complaint" && req.session.data['building-status'] == "occupied") {
            res.redirect('/sprint-4/about-the-ap/have-you-contacted-the-ap')
        } else if (req.session.data['enquiry-about'] == "mor") {
            res.redirect('/sprint-4/about-occurrence/occurrence-type')
        } else {
            res.redirect('/sprint-4/about-the-building/enter-description')
        }
    })

    router.post('/sprint-4/about-occurrence/occurrence-type', (req, res) => {
        res.redirect('/sprint-4/about-occurrence/occurrence-date')
    })

    router.post('/sprint-4/about-occurrence/occurrence-date', (req, res) => {
        res.redirect('/sprint-4/about-occurrence/occurrence-reporter')
    })

    router.post('/sprint-4/about-occurrence/occurrence-reporter', (req, res) => {
        res.redirect('/sprint-4/about-occurrence/occurrence-details')
    })

    router.post('/sprint-4/about-occurrence/occurrence-details', (req, res) => {
        res.redirect('/sprint-4/add-evidence/do-you-have-any-evidence')
    })

    router.post('/sprint-4/about-the-ap/have-you-contacted-the-ap', (req, res) => {
        if (req.session.data['contacted-ap'] == "yes") {
            res.redirect('/sprint-4/about-the-ap/enter-ap-details')
        } else {
            res.redirect('/sprint-4/about-the-ap/enter-ap-justification')
        }
    })

    router.post('/sprint-4/about-the-ap/enter-ap-details', (req, res) => {
        res.redirect('/sprint-4/about-the-ap/ap-relationship')
    })

    router.post('/sprint-4/about-the-ap/ap-relationship', (req, res) => {
        res.redirect('/sprint-4/about-the-ap/when-contacted-ap')
    })

    router.post('/sprint-4/about-the-ap/when-contacted-ap', (req, res) => {
        res.redirect('/sprint-4/about-the-ap/enter-ap-justification')
    })

    router.post('/sprint-4/about-the-ap/enter-ap-justification', (req, res) => {
        res.redirect('/sprint-4/about-the-building/enter-description')
    })

    router.post('/sprint-4/about-the-building/enter-description', (req, res) => {
        if (req.session.data['enquiry-about'] == "advice") {
            res.redirect('/sprint-4/about-the-person/enter-your-name')
        } else {
            res.redirect('/sprint-4/add-evidence/do-you-have-any-evidence')
        }
    })

    router.post('/sprint-4/add-evidence/do-you-have-any-evidence', (req, res) => {
        if (req.session.data['supporting-evidence'] == "yes") {
            res.redirect('/sprint-4/add-evidence/upload-your-evidence')
        } else {
            // needs to go to contact
            res.redirect('/sprint-4/about-the-person/enter-your-name')
        }
    })

    router.post('/sprint-4/add-evidence/upload-your-evidence', (req, res) => {
        res.redirect('/sprint-4/add-evidence/enter-upload-description')
    })

    router.post('/sprint-4/add-evidence/enter-upload-description', (req, res) => {
        res.redirect('/sprint-4/add-evidence/anymore-evidence')
    })

    router.post('/sprint-4/add-evidence/anymore-evidence', (req, res) => {
        if (req.session.data['more-evidence'] == "yes") {
            res.redirect('/sprint-4/add-evidence/upload-your-evidence')
        } else {
            res.redirect('/sprint-4/add-evidence/review-uploads')
        }
    })

    router.post('/sprint-4/add-evidence/review-uploads', (req, res) => {
        //if (req.session.data['enquiry-about'] == "mor") {
            res.redirect('/sprint-4/about-the-person/enter-your-name')
        //} else {
        //    res.redirect('/sprint-4/about-the-ap/share-contact-with-ap')
        //}
    })

    router.post('/sprint-4/about-the-ap/share-contact-with-ap', (req, res) => {
        res.redirect('/sprint-4/check-your-answers')
    })

    router.post('/sprint-4/check-your-answers', (req, res) => {
        res.redirect('/sprint-4/confirmation')
    })
    
}
