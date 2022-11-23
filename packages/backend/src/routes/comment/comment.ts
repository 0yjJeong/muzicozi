import express from 'express';
import { date } from 'joi';
import auth from '../../middlewares/auth';
import { CommentModel } from '../../model';

const router = express.Router();

router.get('/id/:songId', async (req, res) => {
  try {
    const { songId } = req.params;
    const comments = await CommentModel.find({ songId })
      .sort({ createdAt: -1 })
      .populate('user')
      .exec();
    res.json(comments);
  } catch (error) {
    res.json(error);
  }
});

router.post('/add', auth, async (req, res) => {
  try {
    const { userId, songId, text } = req.body;
    const comment = new CommentModel({
      user: userId,
      songId,
      text,
      createdAt: Date.now(),
    });
    await comment.save();
    res.json(comment);
  } catch (error) {
    res.json({ error });
  }
});

router.post('/remove', auth, async (req, res) => {
  try {
    const { commentId } = req.body;
    const result = await CommentModel.findByIdAndDelete(commentId);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

router.post('/update', auth, async (req, res) => {
  try {
    const { userId, songId } = req.body;
    const result = await CommentModel.findOneAndUpdate(
      {
        user: userId,
        songId,
      },
      { text: req.body.text }
    );
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

export default router;
