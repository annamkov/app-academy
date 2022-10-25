
let sayHelloTo = require('./send-messages/say-hello-to');
let giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato');
let { msg1, msg2, msg3 } = require('./messages');

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);