
import express from "express";
const router = express.Router();
import { 
    getContacts,
getContact,
addContactPage,
addContact,
updateContactPage,
updateContact,
deleteContact
 } from "../controller/contacts.controller.js";

router.get('/', getContacts)

// Show By ID 
router.get('/show-contact/:id', getContact)

// ADD page 
router.get('/add-contact', addContactPage)

//  ADD in DB 
router.post('/add-contact', addContact)

// Get Data for update 
router.get('/update-contact/:id', updateContactPage)
//  Update data Page get by id 
router.post('/update-contact/:id', updateContact)
// Delete contact 
router.get('/delete-contact/:id', deleteContact)

// Export the router (using CommonJS syntax)
// module.exports = router;
export default router;