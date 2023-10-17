import jwt from 'jsonwebtoken';

const createUser = async (req:any, res:any) => {
  const user = new User({
    name: req.body.name,
    userRole: req.body.userRole,
    its: req.body.its,
    password: req.body.password,
  });
  user.save();
  const token = jwt.sign({ id: user._id }, 'asdfghjkL007', { expiresIn: '1d' });
  res.send({ user, token });
};