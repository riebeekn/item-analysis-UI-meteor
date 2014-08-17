Jobs = new Meteor.Collection('jobs');

Meteor.methods({
  newJob: function(jobAttributes) {

    // pick out the whitelisted keys
    var now = new Date().getTime();
    var job = _.extend(_.pick(jobAttributes, 
    	'status', 'data_file', 'key_file', 'worker'), {
      updated_at: now,
      created_at: now
    });

    var jobId = Jobs.insert(job);

    return jobId;
  },

  setStatusToPending: function(id) {
    console.log(id);
    Jobs.update(id, {$set: {status: "Pending"}});
  }
});