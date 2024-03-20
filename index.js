// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-1" });

// Create S3 service object
s3 = new AWS.S3({ apiVersion: "2006-03-01" });


var params = {
    Bucket: 'mybuck2211' /* target bucket name */
  };
  s3.listObjectsV2(params, function(err, data) {
    if (err) console.log(err, err.stack); 
    else     console.log(data);         
  });
