import express from 'express';
import auth from '../../middlewares/auth';
import { HeartModel } from '../../model';

const router = express();

router.get('/hearts', auth, async (req, res) => {
  try {
    const hearts = await HeartModel.find({
      userId: req.body.userId,
    });
    res.json(hearts);
  } catch (error) {
    res.json(error);
  }
});

export default router;
