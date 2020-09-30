const router = require('express').Router();
const { addThought, removeThought, updateThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);
router
    .route('/:userId/:thoughtId')
    .put(updateThought)
    .delete(removeThought);
    
router.route('/reactions/:userId/:thoughtId').put(addReaction);

    router.route('reactions/:userId/:thoughtId/:reactionId').delete(removeReaction);


module.exports = router;