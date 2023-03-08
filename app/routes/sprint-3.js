const _ = require('lodash')

module.exports = router => {
    router.post('/sprint-3/start', (req, res) => {
        res.redirect('/sprint-3/about-the-building/which-region')
    })

    router.post('/sprint-3/about-the-building/which-region', (req, res) => {
        res.redirect('/sprint-3/about-the-person/relationship-to-the-building')
    })

    router.post('/sprint-3/about-the-person/relationship-to-the-building', (req, res) => {
        res.redirect('/sprint-3/about-the-person/are-you-a-resident')
    })

    router.post('/sprint-3/about-the-person/are-you-a-resident', (req, res) => {
        res.redirect('/sprint-3/about-the-contact/enquiry-about')
    })

    router.post('/sprint-3/about-the-contact/enquiry-about', (req, res) => {
        if (req.session.data['enquiry-about'] == "mor") {
            res.redirect('/sprint-3/about-occurrence/declaration')
        } else {
            res.redirect('/sprint-3/about-the-building/do-you-know-the-address')
        }    
    })

    router.post('/sprint-3/about-occurrence/declaration', (req, res) => {
        res.redirect('/sprint-3/about-occurrence/reporter-relationship')
    })

    router.post('/sprint-3/about-occurrence/reporter-relationship', (req, res) => {
        res.redirect('/sprint-3/about-the-building/do-you-know-the-address')
    })

    router.post('/sprint-3/about-the-building/do-you-know-the-address', (req, res) => {
        res.redirect('/sprint-3/about-the-building/is-the-building-occupied')
    })

    router.post('/sprint-3/about-the-building/is-the-building-occupied', (req, res) => {
        res.redirect('/sprint-3/about-the-building/how-big-is-the-building')
    })

    router.post('/sprint-3/about-the-building/how-big-is-the-building', (req, res) => {
        res.redirect('/sprint-3/about-the-building/number-of-units')
    })

    router.post('/sprint-3/about-the-building/number-of-units', (req, res) => {
        if (req.session.data['enquiry-about'] == "complaint" && req.session.data['building-status'] == "occupied") {
            res.redirect('/sprint-3/about-the-ap/have-you-contacted-the-ap')
        } else if (req.session.data['enquiry-about'] == "mor") {
            res.redirect('/sprint-3/about-occurrence/occurrence-type')
        } else {
            res.redirect('/sprint-3/about-the-building/enter-description')
        }
    })

    router.post('/sprint-3/about-occurrence/occurrence-type', (req, res) => {
        res.redirect('/sprint-3/about-occurrence/occurrence-date')
    })

    router.post('/sprint-3/about-occurrence/occurrence-date', (req, res) => {
        res.redirect('/sprint-3/about-occurrence/occurrence-reporter')
    })

    router.post('/sprint-3/about-occurrence/occurrence-reporter', (req, res) => {
        res.redirect('/sprint-3/about-occurrence/occurrence-details')
    })

    router.post('/sprint-3/about-occurrence/occurrence-details', (req, res) => {
        res.redirect('/sprint-3/add-evidence/do-you-have-any-evidence')
    })

    router.post('/sprint-3/about-the-ap/have-you-contacted-the-ap', (req, res) => {
        if (req.session.data['contacted-ap'] == "yes") {
            res.redirect('/sprint-3/about-the-ap/enter-ap-details')
        } else {
            res.redirect('/sprint-3/about-the-ap/enter-ap-justification')
        }
    })

    router.post('/sprint-3/about-the-ap/enter-ap-details', (req, res) => {
        res.redirect('/sprint-3/about-the-ap/ap-relationship')
    })

    router.post('/sprint-3/about-the-ap/ap-relationship', (req, res) => {
        res.redirect('/sprint-3/about-the-ap/when-contacted-ap')
    })

    router.post('/sprint-3/about-the-ap/when-contacted-ap', (req, res) => {
        res.redirect('/sprint-3/about-the-ap/enter-ap-justification')
    })

    router.post('/sprint-3/about-the-ap/enter-ap-justification', (req, res) => {
        res.redirect('/sprint-3/about-the-building/enter-description')
    })

    router.post('/sprint-3/about-the-building/enter-description', (req, res) => {
        if (req.session.data['enquiry-about'] == "advice") {
            res.redirect('/sprint-3/about-the-person/enter-your-name')
        } else {
            res.redirect('/sprint-3/add-evidence/do-you-have-any-evidence')
        }
    })

    router.post('/sprint-3/add-evidence/do-you-have-any-evidence', (req, res) => {
        if (req.session.data['supporting-evidence'] == "yes") {
            res.redirect('/sprint-3/add-evidence/upload-your-evidence')
        } else {
            res.redirect('/sprint-3/about-the-ap/share-contact-with-ap')
        }
    })

    router.post('/sprint-3/add-evidence/upload-your-evidence', (req, res) => {
        res.redirect('/sprint-3/add-evidence/enter-upload-description')
    })

    router.post('/sprint-3/add-evidence/enter-upload-description', (req, res) => {
        res.redirect('/sprint-3/add-evidence/anymore-evidence')
    })

    router.post('/sprint-3/add-evidence/anymore-evidence', (req, res) => {
        if (req.session.data['more-evidence'] == "yes") {
            res.redirect('/sprint-3/add-evidence/upload-your-evidence')
        } else {
            res.redirect('/sprint-3/add-evidence/review-uploads')
        }
    })

    router.post('/sprint-3/add-evidence/review-uploads', (req, res) => {
        if (req.session.data['enquiry-about'] == "mor") {
            res.redirect('/sprint-3/about-the-person/enter-your-name')
        } else {
            res.redirect('/sprint-3/about-the-ap/share-contact-with-ap')
        }
        
    })

    router.post('/sprint-3/about-the-ap/share-contact-with-ap', (req, res) => {
        res.redirect('/sprint-3/about-the-person/enter-your-name')
    })

    router.post('/sprint-3/about-the-person/enter-your-name', (req, res) => {
        res.redirect('/sprint-3/about-the-person/enter-your-contact-number')
    })

    router.post('/sprint-3/about-the-person/enter-your-contact-number', (req, res) => {
        res.redirect('/sprint-3/about-the-person/enter-your-email')
    })

    router.post('/sprint-3/about-the-person/enter-your-email', (req, res) => {
        res.redirect('/sprint-3/check-your-answers')
    })

    router.post('/sprint-3/check-your-answers', (req, res) => {
        res.redirect('/sprint-3/confirmation')
    })
    
}
