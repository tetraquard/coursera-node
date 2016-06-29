# WEEK: Three

### Exercise 1

Developed a full-fledged REST API server with Express, Mongo and Mongoose.

### Exercise 2

Basic authentication approach to authenticate users at `basic-auth` folder.

### Exercise 3

Implementation of cookies and Express sessions to track authenticated user at `cookies` folder.

##### Install the cookie parser by typing the following at the prompt:
     `npm install cookie-parser --save`

###### Use of 'cookie-parser' module: 
Parses the cookies in the header of the incoming request messages

##### Install the express-session and session-file-store by typing the following at the prompt:
     `npm install express-session session-file-store --save`

###### Use of 'express-session' and 'session-file-store' modules: 
Express sessions allows to track authenticated users and clients to access secure resources on the server after authentication.

### Exercise 4

Implementation of User Authentication with Passport at `rest-server-passport` folder.

##### Install the express-session and session-file-store by typing the following at the prompt:
     `npm install passport passport-local passport-local-mongoose --save`
     `npm install jsonwebtoken --save`

###### Use of 'passport','passport-local' and 'passport-local-mongoose' modules: 
Passport module together with passport-local and passport-local-mongoose is used fo setting up local authentication within your server.

###### Use of 'jsonwebtoken' module: 
JSON web tokens for token-based user authentication

### Assignment

* Implemented the `verifyAdmin()` function in `verify.js`.
* Ordinary user is restricted only to perform the GET operation on the resources/REST API end points.
* A GET operation on http://localhost:3000/users by an Admin will return the details of the registered users


