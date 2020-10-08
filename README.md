Database name: database
Users

_id, email,password, firstname, lastname, address, phone, password


Allotments

_id, image, number, size, width, height, status

Handymans

_id, name, price, unit, quanity, Provider

Messages

_id, User, Owner, content, date/time

BACKEND
models:

user:
email: String
firstname: String
lastname: String
addres: String
phone: Number 
passwors: String

allotment:
image: String
number: Number
size: Number
width: Number
height: Number
status: String

handyman:
profession: String
email: String
firstname: String
lastname: String
phone: Number

messages:
user:
owner:
content: String
time: Date

controllers:
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

routes:
user-router
allotment-router
handyman-router
message-router

FRONTEND

