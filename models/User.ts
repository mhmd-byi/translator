const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  its: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

const modelName = 'User';
export default mongoose.models[modelName] || mongoose.model(modelName, userSchema);
