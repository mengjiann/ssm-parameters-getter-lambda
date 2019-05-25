const AWS = require('aws-sdk');
const ssm = new AWS.SSM({ apiVersion: '2014-11-06' });

exports.handler = (event, context, callback) => {
  console.log('Received event = %o', event);

  const params = {
    "Names": event.param,
    "WithDecryption": event.withDecryption
  }
  
  ssm.getParameters(params, function(err, data) {
    if (err) {    	
    	console.log(err, err.stack); 
    	callback(new Error("Error requesting for parameters."))
    } else {
      var result = {}
  		data.Parameters.forEach(function(parameter){
		      result[parameter.Name] = parameter.Value;
  		});
  		
  		if(result.length < event.param.length)
  			callback(new Error("Missing retrieving parameters"))
      
      return callback(null, result);
    }
  });
};