const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.post('/mycontact', ContactController.store);
router.get('/mycontact', ContactController.index);
router.get('/mycontact/:id', ContactController.show);
router.put('/mycontact/:id', ContactController.update);
router.delete('/mycontact/:id', ContactController.delete);

module.exports = router;
