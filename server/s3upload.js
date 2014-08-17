Meteor.methods({
  uploadFileToS3: function(blob, name, path, encoding, type) {

    var knox = Meteor.require('knox');
    
    var client = knox.createClient({
      key: process.env.AWS_ACCESS_KEY_ID,
      secret: process.env.AWS_SECRET_ACCESS_KEY,
      bucket: process.env.AWS_BUCKET
    });

    Future = Meteor.require('fibers/future');
    var fut = new Future();
    var buffer = new Buffer(blob, 'binary');
    client.putBuffer(buffer, name, {
      'Content-Length':blob.length,
      'Content-Type':type,
      'x-amz-acl': 'public-read'
    },  function(err, res) {
          fut.return(name);
        }
    );
    fut.wait();
  }
});
