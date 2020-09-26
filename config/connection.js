const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/my-thoughts', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

module.exports = mongoose.connection;