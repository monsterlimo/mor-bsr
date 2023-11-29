const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

addFilter('uppercase', function (content) {
    return content.toUpperCase()
})

