const router = require('express').Router();
const controller = require('../controllers/controllers');
const bodyParser = require('body-parser');

router.get('/', function (request, response) {
  response.status(200).send({
    status: 'OK'
  });
});

router.get('/areas', controller.selectAllAreas);

router.get('/areas/:area_id/restaurants', controller.selectRestaurantsByAreaId);

router.post('/areas/:area_id/restaurants', controller.postRestaurantByAreaId);

router.get('/restaurants/:restaurant_id/comments', controller.selectCommentsByRestaurantId);

module.exports = router;