const mongoose  = require('mongoose');

const URI = 'mongodb://localhost/api-EPS'

mongoose.connect(URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    // useCreateIndex: true
})
.then(db => console.log(`bd conectada...`))
.catch(err => console.error(err));
