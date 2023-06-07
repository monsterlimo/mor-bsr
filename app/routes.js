//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
require('./routes/sprint-3')(router)
require('./routes/sprint-4')(router)
require('./routes/sprint-5')(router)
require('./routes/sprint-9')(router)
require('./routes/sprint-10')(router)