Template.jobItem.helpers({
  duration: function() {
  	if (this.job_stop == null) {
  		return " - ";
  	} else {
			return (this.job_stop - this.job_start) / 1000 + " s";
		}
  },
  totalDuration: function() {
  	if (this.job_stop == null) {
  		return " - ";
  	} else {
	  	return (this.job_stop - this.created_at) / 1000 + " s";
	  }
  },
  done: function() {
    return this.status === "Done";
  },
  jobIdDisplay: function() {
    if (this.status === "Done") {
      
      return "done!";
    } else {
      return this._id;
    }
  }
});