const express = require("express");
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/**
 * Session routes
 */
routes.post('/sessions', SessionController.create);


/**
 * Ongs routes
 */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

/**
 * Incidents routes
 */
routes.get('/insidents', IncidentController.index);
routes.post('/insidents', IncidentController.create);
routes.delete('/insidents/:id', IncidentController.delete);

/**
 * Profiles routes
 */
routes.get('/profile', ProfileController.index);


module.exports = routes;