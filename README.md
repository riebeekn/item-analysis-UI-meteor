# Item Analysis UI - Meteor

A very simple throw-away UI for interacting with the [Meteor branch of the item analysis meteor worker](https://github.com/riebeekn/item-analysis-worker/tree/mongo) app.

## Installation (local)
* Copy /lib/env_var.js.template to env_var.js and fill in the appropriate values.
* Update the mongo URL in run_local.sh.
* Run the app via the run_local.sh script:
```
$ ./run_local.sh
```

## Installation (Heroku)
To install the application on Heroku, run the install script, filling in the appropriate values:

```
$ ./install |app-name| |aws bucket| |aws key| |aws secret|
```

* Descriptions of the parameters that get passed into the script are:
    * app-name - the name of the Heroku application to create.
    * aws bucket - the AWS bucket to upload input files to.
    * aws key - the AWS key for the AWS account in which the bucket lives.
    * aws secret - the AWS secret for the AWS account in which the bucket lives.
* An example of possible valid values for the script would be:

```
$ ./install.sh item-analysis-ui my-aws-bucket my-aws-key my-aws-secret
```
