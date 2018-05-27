const mongodb = require('mongodb')

module.exports = function(app, db) {
  const ansysDB = db.db('ansys_mongo')

  app.post('/api/addData', ({body: {data, label, type}}, res) => {
    const friq = {data, label, type};
    
    ansysDB.collection('friq').insert(friq, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.post('/api/deleteData', ({body: {id}}, res) => {
    ansysDB.collection('friq').remove({_id: new mongodb.ObjectID(id)}, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send({ 'result': 'ok' });
      }
    });
  });

  app.get('/api/getData', (req, res, next) => {    
    ansysDB.collection('friq').find({}).toArray((err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result || []);
      }
    });
  });
};