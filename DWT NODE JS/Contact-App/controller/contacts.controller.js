// Import the Contact model
import Contact from "../models/contacts.model.js"

export const getContacts = async (req, res)=>{ 
    
    const contacts = await Contact.find()
    res.render('home', { contacts })
}

export const getContact = async (req, res)=>{  
    const contact = await Contact.findById(req.params.id)
    // res.json(contact);
    res.render('show-contact', { contact })
}

export const addContactPage = (req, res)=>{ res.render('add-contact')}

export const addContact = async (req, res)=>{

    let data = {
        first_name: req.body['form-fname'],
        last_name: req.body['form-lname'],
        email: req.body['form-email'],
        phone: req.body['form-phone'],
        address: req.body['form-address']
    }
    let contact = await Contact.insertOne(data);

  
    res.redirect('/')

}

export const updateContactPage = async (req, res)=>{ 
    const contact = await Contact.findById(req.params.id)
    res.render('update-contact', { contact })
 }

 export const updateContact = async (req, res)=>{
    let data = {
        first_name: req.body['form-fname'],
        last_name: req.body['form-lname'],
        email: req.body['form-email'],
        phone: req.body['form-phone'],
        address: req.body['form-address']
    }
    const contact = await Contact.findByIdAndUpdate(req.params.id, data)
    res.redirect("/")
}

export const deleteContact = async (req, res)=>{
    await Contact.findByIdAndDelete(req.params.id);
    res.redirect("/")
}