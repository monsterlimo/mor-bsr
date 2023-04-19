const _ = require('lodash')

module.exports = router => {
    router.post('/sprint-6-mor/start', (req, res) => {
        req.session.data = []
        res.redirect('/sprint-6-mor/about-the-building/is-the-building-occupied')
    })

    // ABOUT THE BUILDING

    // is the building occupied
    router.post('/sprint-6-mor/about-the-building/is-the-building-occupied', (req, res) => {
        if (req.session.data['building-status'] == "occupied" || req.session.data['building-status'] == "complete but not occupied") {
            res.redirect('/sprint-6-mor/about-the-building/do-you-have-a-hrb-number')
        } else {
            res.redirect('/sprint-6-mor/about-the-building/which-region')
        }  
    })

    // do you have a HRB number
    router.post('/sprint-6-mor/about-the-building/do-you-have-a-hrb-number', (req, res) => {
        if (req.session.data['has-building-reg-number'] == "yes") {
            res.redirect('/sprint-6-mor/about-the-building/enter-hrb-number')
        } else {
            res.redirect('/sprint-6-mor/about-the-building/postcode-lookup')
        }
    })

    // enter HRB number
    router.post('/sprint-6-mor/about-the-building/enter-hrb-number', (req, res) => {
        res.redirect('/sprint-6-mor/about-the-building/confirm-address')
    })

    router.post('/sprint-6-mor/about-the-building/postcode-lookup', (req, res) => {
        res.redirect('/sprint-6-mor/about-the-building/confirm-address')
    })

    // confirm building
    router.post('/sprint-6-mor/about-the-building/confirm-address', (req, res) => {
        res.redirect('/sprint-6-mor/about-the-person/enter-your-name')
    })

    // ABOUT YOU

    // what is your name
    router.post('/sprint-6-mor/about-the-person/enter-your-name', (req, res) => {
        res.redirect('/sprint-6-mor/about-the-person/enter-your-org-name')
    })

    // your org
    router.post('/sprint-6-mor/about-the-person/enter-your-org-name', (req, res) => {
        res.redirect('/sprint-6-mor/about-the-person/enter-your-contact-details')
    })

    // your contact details
    router.post('/sprint-6-mor/about-the-person/enter-your-contact-details', (req, res) => {
        res.redirect('/sprint-6-mor/about-the-person/relationship-to-the-building')
    })

    // role of your org
    router.post('/sprint-6-mor/about-the-person/relationship-to-the-building', (req, res) => {
        res.redirect('/sprint-6-mor/building-in-scope/number-of-floors')
    })

    // number of floors
    router.post('/sprint-6-mor/building-in-scope/number-of-floors', (req, res) => {
        res.redirect('/sprint-6-mor/building-in-scope/height-of-building')
    })

    // height of building
    router.post('/sprint-6-mor/building-in-scope/height-of-building', (req, res) => {
        res.redirect('/sprint-6-mor/building-in-scope/number-of-units')
    })

    // number residential units
    router.post('/sprint-6-mor/building-in-scope/number-of-units', (req, res) => {
        res.redirect('/sprint-6-mor/about-the-occurrence/occurrence-type')
    })

    // ABOUT THE OCCURRENCE

    // type of occurence
    router.post('/sprint-6-mor/about-the-occurrence/occurrence-type', (req, res) => {
        res.redirect('/sprint-6-mor/about-the-occurrence/occurrence-date')
    })

    // when did you become aware
    router.post('/sprint-6-mor/about-the-occurrence/occurrence-date', (req, res) => {
        res.redirect('/sprint-6-mor/about-the-occurrence/occurrence-details')
    })

    // enter occurence description
    router.post('/sprint-6-mor/about-the-occurrence/occurrence-details', (req, res) => {
        res.redirect('/sprint-6-mor/supporting-information/do-you-have-any-supporting-info')
    })

    // any supporting info
    router.post('/sprint-6-mor/supporting-information/do-you-have-any-supporting-info', (req, res) => {
        if (req.session.data['supporting-evidence'] == "yes") {
            res.redirect('/sprint-6-mor/supporting-information/upload-supporting-info')
        } else {
            res.redirect('/sprint-6-mor/check-your-answers')
        }
    })

    // upload supporting info
    router.post('/sprint-6-mor/supporting-information/upload-supporting-info', (req, res) => {
        res.redirect('/sprint-6-mor/supporting-information/review-uploads')
    })

    // check uploads
    router.post('/sprint-6-mor/supporting-information/review-uploads', (req, res) => {
        res.redirect('/sprint-6-mor/check-your-answers')
    })

    // check answers
    router.post('/sprint-6-mor/check-your-answers', (req, res) => {
        res.redirect('/sprint-6-mor/confirmation')
    })

}
