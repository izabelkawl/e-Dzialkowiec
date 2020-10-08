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
<p>email: String</p>
<p>firstname: String</p>
<p>lastname: String</p>
<p>addres: String</p>
<p>phone: Number </p>
<p>passwors: String</p>

<h4>allotment:</h4>
<p>image: String</p>
<p>number: Number</p>
<p>size: Number</p>
<p>width: Number</p>
<p>height: Number</p>
<p>status: String</p>

<h4>handyman:</h4>
<p>profession: String</p>
<p>email: String</p>
<p>firstname: String</p>
<p>lastname: String</p>
<p>phone: Number</p>

<h4>messages:</h4>
<p>user:</p>
<p>owner:</p>
<p>content: String</p>
<p>time: Date</p>
 <br>
<h3>controllers:</h3>
<p>createUser, POST</p>
<p>updateUser, PUT</p>
<p>deleteUser, DELETE</p>
<p>getUsers, GET</p>
<p>getUserById, GET</p>

<p>createAllotment, POST</p>
<p>updateAllotment, PUT</p>
<p>deleteAllotment, DELETE</p>
<p>getAllotments, GET</p>
<p>getAllotmentById, GET</p>

<p>createHandyman, POST</p>
<p>updateHandyman, PUT</p>
<p>deleteHandyman, DELETE</p>
<p>getHandymans, GET</p>
<p>getHandymanById, GET</p>

<p>createMessage, POST</p>
<p>updateMessage, PUT</p>
<p>deleteMessage, DELETE</p>
<p>getMessages, GET</p>
<p>getMessageById, GET</p>
 <br>
<h3>routes:</h3>
<p>user-router</p>
<p>allotment-router</p>
<p>handyman-router</p>
<p>message-router</p>
 <br>
 <hr>
<h2>FRONTEND</h2>

