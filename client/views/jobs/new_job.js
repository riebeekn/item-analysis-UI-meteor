Template.newJob.events({
  'submit form': function(e) {
    e.preventDefault();

    var job = {
      status: 'Pending',
      data_file: './sample_data_files/ctt_data.csv',
      key_file: './sample_data_files/ctt_data.key.csv',
      worker: 'localhost-fromUI'
    }

    Meteor.call('newJob', job, function(error, id) {
      if (error)
        return alert(error.reason);
    });
  }
});
