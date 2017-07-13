const start = require('../../../db');

const client = start.client;
const uuid = start.uuid;

// Function to create a mailbox which contains id

function createMailbox(callback) {
  const newMailbox = {
    id: uuid().toString(),
  };
  const query = ('INSERT INTO mailbox (id) values( ? )');
  client.execute(query, [newMailbox.id], (err, result) => {
    if (err) { return callback(err, null); }
    return callback(null, newMailbox);
  });
}

function checkIfMailboxExists(mailboxId, callback) {
 // console.log('mailboxId inside checkIfMailboxExists',mailboxId);
  const query = (`SELECT * from mailbox where id = ${mailboxId}`);
 // console.log('client.execute',client.execute(`SELECT * from mailbox`));
  client.execute(query, (err, result) => {
    if (err) { console.log('error returned'+err);return callback(err); }
    console.log('rowLength===>',result.rowLength);
    return callback(null, result.rowLength > 0);
  });
}
// Function to delete the mailbox with id. If id not exists returns no mailbox error
function deleteMailbox(mailboxId, callback) {
  const query = (`DELETE from  mailbox where id =${mailboxId}`);
  client.execute(query, (error, result) => {
    if (error) { callback(error, null); }
    return callback(null, { id: mailboxId });
  });
}


module.exports = {
  createMailbox,
  checkIfMailboxExists,
  deleteMailbox,
};
