'use strict';

 exports.get = function(event, context) {
   context.succeed({
     statusCode: 200,
     body: "Index action",
     headers: {'Content-Type': 'text/html'}
   });
 };
