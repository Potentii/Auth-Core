// *Getting the Schema class:
const { Schema } = require('mongoose');
// *Getting the common regex:
const COMMON_REGEX = require('../../../tools/common-regex');



// *Exporting this module as a function:
module.exports = () => {



   const Application = new Schema({
      name: {
         type: String,
         required: true,
         unique: true,
         match: [/^[a-zA-Z0-9\_\-]+$/, 'Invalid service name']
      },

      token: {
         type: String,
         required: true,
      },

      salt: {
         type: String,
         required: true,
         match: [COMMON_REGEX.UUIDV4, 'Invalid salt. It must be an UUID-V4 string.']
      },

      date: {
         type: Date,
         required: true,
         default: Date.now
      }
   });



   // *Exporting the schema:
   return Application;
};
