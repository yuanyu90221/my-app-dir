const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');
// Do work here
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);
router.post('/add', 
  storeController.upload, 
  catchErrors(storeController.resize), 
  catchErrors(storeController.createStore)
);
router.post('/add/:id',
  storeController.upload, 
  catchErrors(storeController.resize),  
  catchErrors(storeController.updateStore)
);

router.get('/stores/:id/edit', catchErrors(storeController.editStore))
router.get('/reverse/:name', (req, res) => {
  // res.send('it works');
  const reverse = [...req.params.name].reverse().join('')
  // res.json(req.params);
  res.send(reverse);
})

router.get('/store/:slug', catchErrors(storeController.getStoreBySlug))
module.exports = router;
