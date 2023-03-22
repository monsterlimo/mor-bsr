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

    router.post('/sprint-4/about-the-building/which-region', (req, res) => {
        res.redirect('/sprint-4/about-the-building/enter-the-building-address')
    })

    router.post('/sprint-4/about-the-building/enter-the-building-address', (req, res) => {
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
        if (req.session.data['enquiry-about'] == "mor") {
            res.redirect('/sprint-4/about-the-person/what-is-your-role')
        } else {
            res.redirect('/sprint-4/about-the-person/what-is-your-relationship-to-the-building')
        }
    })

    router.post('/sprint-4/about-the-person/what-is-your-relationship-to-the-building', (req, res) => {
        res.redirect('/sprint-4/building-in-scope/number-of-floors')   
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

    router.post('/sprint-4/building-in-scope/number-of-floors', (req, res) => {
        res.redirect('/sprint-4/building-in-scope/number-of-units')   
    })

    router.post('/sprint-4/building-in-scope/number-of-units', (req, res) => {
        res.redirect('/sprint-4/building-in-scope/is-the-building-occupied')   
    })

    router.post('/sprint-4/building-in-scope/prof-number-of-units', (req, res) => {
        res.redirect('/sprint-4/building-in-scope/is-the-building-occupied')   
    })

    router.post('/sprint-4/building-in-scope/is-the-building-occupied', (req, res) => {
        if (req.session.data['enquiry-about'] == "mor") {
            // mor => about the occurrence
            res.redirect('/sprint-4/about-the-occurrence/occurrence-type')
        } else if (req.session.data['enquiry-about'] == "complaint") {
            // complaint => reminder about scope of bsr
            res.redirect('/sprint-4/about-the-complaint/complaint-details')
        } else {
            // advice => enter advice needed
            res.redirect('/sprint-4/about-the-advice-required/enter-advice-required')
        }
    })

    router.post('/sprint-4/about-the-advice-required/enter-advice-required', (req, res) => {
        res.redirect('/sprint-4/check-your-answers')
    })

    router.post('/sprint-4/about-the-complaint/scope-of-bsr', (req, res) => {
        res.redirect('/sprint-4/about-the-complaint/complaint-details')
    })

    router.post('/sprint-4/about-the-complaint/complaint-details', (req, res) => {
        res.redirect('/sprint-4/supporting-information/do-you-have-any-supporting-info')
    })

    router.post('/sprint-4/about-the-occurrence/occurrence-type', (req, res) => {
        res.redirect('/sprint-4/about-the-occurrence/occurrence-date')
    })

    router.post('/sprint-4/about-the-occurrence/occurrence-date', (req, res) => {
        res.redirect('/sprint-4/about-the-occurrence/occurrence-reporter')
    })

    router.post('/sprint-4/about-the-occurrence/occurrence-reporter', (req, res) => {
        res.redirect('/sprint-4/about-the-occurrence/occurrence-details')
    })

    router.post('/sprint-4/about-the-occurrence/occurrence-details', (req, res) => {
        res.redirect('/sprint-4/supporting-information/do-you-have-any-supporting-info')
    })

    router.post('/sprint-4/supporting-information/do-you-have-any-supporting-info', (req, res) => {
        if (req.session.data['supporting-evidence'] == "yes") {
            res.redirect('/sprint-4/supporting-information/upload-supporting-info')
        } else {
            
            if (req.session.data['enquiry-about'] == "complaint") {
                // no complaint goes to AP
                res.redirect('/sprint-4/about-the-ap/have-you-contacted-the-ap')
            } else {
                res.redirect('/sprint-4/check-your-answers')
            }
        }
    })

    router.post('/sprint-4/supporting-information/upload-supporting-info', (req, res) => {
        res.redirect('/sprint-4/supporting-information/review-uploads')
    })

    router.post('/sprint-4/supporting-information/review-uploads', (req, res) => {
        if (req.session.data['enquiry-about'] == "complaint") {
            // no complaint goes to AP
            res.redirect('/sprint-4/about-the-ap/have-you-contacted-the-ap')
        } else {
            res.redirect('/sprint-4/check-your-answers')
        }
    })

    router.post('/sprint-4/about-occurrence/reporter-relationship', (req, res) => {
        res.redirect('/sprint-4/about-the-building/do-you-know-the-address')
    })

    router.post('/sprint-4/about-the-building/do-you-know-the-address', (req, res) => {
        res.redirect('/sprint-4/about-the-building/is-the-building-occupied')
    })

    router.post('/sprint-4/about-the-ap/have-you-contacted-the-ap', (req, res) => {
        if (req.session.data['contacted-ap'] == "yes") {
            res.redirect('/sprint-4/about-the-ap/enter-ap-details')
        } else {
            res.redirect('/sprint-4/about-the-ap/share-details-with-ap')
        }
    })

    router.post('/sprint-4/about-the-ap/enter-ap-details', (req, res) => {
        res.redirect('/sprint-4/about-the-ap/ap-relationship')
    })

    router.post('/sprint-4/about-the-ap/ap-relationship', (req, res) => {
        res.redirect('/sprint-4/about-the-ap/when-contacted-ap')
    })

    router.post('/sprint-4/about-the-ap/when-contacted-ap', (req, res) => {
        res.redirect('/sprint-4/about-the-ap/share-details-with-ap')
    })

    router.post('/sprint-4/about-the-ap/share-details-with-ap', (req, res) => {
        res.redirect('/sprint-4/check-your-answers')
    })

    router.post('/sprint-4/check-your-answers', (req, res) => {
        res.redirect('/sprint-4/confirmation')
    })
}
