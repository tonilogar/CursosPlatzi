const db = require('mongoose');

db.Promise = global.Promise;

//mongodb+srv://tonilogar:velociraptor27082006@cluster0.f4l55.mongodb.net/<dbname>?retryWrites=true&w=majority'
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
});
console.log('[db] Conectada con éxito');
}

module.exports = connect;