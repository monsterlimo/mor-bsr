const _ = require('lodash')

module.exports = router => {
    router.post('/sprint-3/start', (req, res) => {
        res.redirect('/sprint-3/about-the-building/which-region')
    })

    router.post('/sprint-3/about-the-building/which-region', (req, res) => {
        res.redirect('/sprint-3/about-the-person/who-are-you')
    })

    router.post('/sprint-3/about-the-person/who-are-you', (req, res) => {
        res.redirect('/sprint-3/about-the-person/are-you-a-resident')
    })

    router.post('/sprint-3/about-the-person/are-you-a-resident', (req, res) => {
        res.redirect('/sprint-3/about-the-contact/request-about')
    })

    router.post('/sprint-3/about-the-contact/request-about', (req, res) => {
        res.redirect('/sprint-3/about-the-building/do-you-know-the-address')
    })

    router.post('/sprint-3/about-the-building/do-you-know-the-address', (req, res) => {
        res.redirect('/sprint-3/about-the-building/enter-the-building-address')
    })

    router.post('/sprint-3/about-the-building/enter-the-building-address', (req, res) => {
        res.redirect('/sprint-3/about-the-building/is-building-a-hrb')
    })

    router.post('/sprint-3/about-the-building/is-building-a-hrb', (req, res) => {
        res.redirect('/sprint-3/about-the-building/is-the-building-occupied')
    })

    router.post('/sprint-3/about-the-building/is-the-building-occupied', (req, res) => {
        res.redirect('/sprint-3/about-the-building/enter-complaint-description')
    })

    router.post('/sprint-3/about-the-building/enter-complaint-description', (req, res) => {
        res.redirect('/sprint-3/about-the-ap/share-contact-with-ap')
    })

    router.post('/sprint-3/about-the-ap/share-contact-with-ap', (req, res) => {
        res.redirect('/sprint-3/about-the-ap/have-you-contacted-the-ap')
    })

    router.post('/sprint-3/about-the-ap/have-you-contacted-the-ap', (req, res) => {
        res.redirect('/sprint-3/about-the-ap/enter-ap-details')
    })

    router.post('/sprint-3/about-the-ap/enter-ap-details', (req, res) => {
        res.redirect('/sprint-3/about-the-ap/enter-ap-justification')
    })

    router.post('/sprint-3/about-the-ap/enter-ap-justification', (req, res) => {
        res.redirect('/sprint-3/add-evidence/do-you-have-any-evidence')
    })

    router.post('/sprint-3/add-evidence/do-you-have-any-evidence', (req, res) => {
        res.redirect('/sprint-3/add-evidence/upload-your-evidence')
    })

    router.post('/sprint-3/add-evidence/upload-your-evidence', (req, res) => {
        res.redirect('/sprint-3/add-evidence/enter-upload-description')
    })

    router.post('/sprint-3/add-evidence/enter-upload-description', (req, res) => {
        res.redirect('/sprint-3/add-evidence/review-uploads')
    })

    router.post('/sprint-3/add-evidence/review-uploads', (req, res) => {
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
