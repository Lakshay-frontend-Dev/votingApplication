const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   age: {
      type: Number,
      required: true
   },
   mobile: {
      type: String,
   },
   email: {
      type: String,
   },
   address: {
      type: String,
      required: true
   },
   aadharCard: {
      type: String,
      required: true,
      unique:true
   },
   password: {
      type: String,
      required: true,
      unique:true
   },
   role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'voter'
   },
   isVoter: {
      type: Boolean,
      default: false
   }

});

const user = mongoose.model('user', userSchema);
module.exports = user;