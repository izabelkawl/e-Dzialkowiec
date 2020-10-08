Database name:
<b>database</b>
  <br>
<b>Users</b>

_id, email,password, firstname, lastname, address, phone, password


<b>Allotments</b>

_id, image, number, size, width, height, status

<b>Handymans</b>

_id, name, price, unit, quanity, Provider

<b>Messages</b>

_id, User, Owner, content, date/time

<h2>BACKEND</h2>
<h3>models:</h3>

<h4>user:</h4>
email: String
firstname: String
lastname: String
addres: String
phone: Number 
passwors: String

<h4>allotment:</h4>
image: String
number: Number
size: Number
width: Number
height: Number
status: String

<h4>handyman:</h4>
profession: String
email: String
firstname: String
lastname: String
phone: Number

<h4>messages:</h4>
user:
owner:
content: String
time: Date

<h3>controllers:</h3>
createUser, POST
updateUser, PUT
deleteUser, DELETE
getUsers, GET
getUserById, GET

createAllotment, POST
updateAllotment, PUT
deleteAllotment, DELETE
getAllotments, GET
getAllotmentById, GET

createHandyman, POST
updateHandyman, PUT
deleteHandyman, DELETE
getHandymans, GET
getHandymanById, GET

createMessage, POST
updateMessage, PUT
deleteMessage, DELETE
getMessages, GET
getMessageById, GET

<h3>routes:</h3>
user-router
allotment-router
handyman-router
message-router

<h2>FRONTEND</h2>

