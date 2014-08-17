Template.newJob.events({
  'submit form': function(e) {
    e.preventDefault();

    var keyFile = document.getElementById("key");
    var keyFileName = keyFile.files[0].name;
    var keyFileBlob = keyFile.files[0];

    var dataFile = document.getElementById("data");
    var dataFileName = dataFile.files[0].name;
    var dataFileBlob = dataFile.files[0];

    var job = { 
      status: 'Creating',
      key_file: keyFileName,
      data_file: dataFileName
    }

    Meteor.call('newJob', job, function(error, id) {
      if (error) {
        return alert(error.reason);
      } else {
        // upload files (make sep method?)
        saveFile(keyFileBlob, id + "/inputs/" + keyFileName);
        saveFile(dataFileBlob, id + "/inputs/" + dataFileName);
        
        updateJob(id)
      }
    });
  }
});

var updateJob = function(id) {
  Meteor.call('setStatusToPending', id, function(error) {
    if (error) {
      alert('roll back?');
    }
  })
}

var saveFile = function(blob, name, path, type, callback) {
  var fileReader = new FileReader()
  var method = 'readAsBinaryString'
  var encoding = 'binary'
  var type = type || 'binary'

  fileReader.onload = function(file) {  
    Meteor.call('uploadFileToS3', file.srcElement.result, name, path,
      encoding, blob.type, function(err, res) {
        if (err) {
          alert("error... need to roll-back");
        }
      });
  }

  fileReader[method](blob); 
}
