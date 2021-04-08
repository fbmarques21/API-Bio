//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//Import Bio Controller
var RegistoController = require('./RegistoController');

// Bio routes
router.route('/bio')
    .get(RegistoController.index)
    .post(RegistoController.add);

router.route('/bio/:bio_id')
    .get(RegistoController.view)
    .patch(RegistoController.update)
    .put(RegistoController.update)
    .delete(RegistoController.delete);

//Export API routes
module.exports = router;