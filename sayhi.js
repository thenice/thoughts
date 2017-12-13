'use strict';

 exports.get = function(event, context) {
   context.succeed({
     statusCode: 200,
     body: "Say Hi, get method.",
     headers: {'Content-Type': 'text/html'}
   });
 };
