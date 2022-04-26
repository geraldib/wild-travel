
export const updateFields = (agency, req) => {
    agency.name = req.body.name ? req.body.name : agency.name;
    agency.surname = req.body.surname ? req.body.surname : agency.surname;
    agency.phone = req.body.phone ? req.body.phone : agency.phone;
    agency.email = req.body.email ? req.body.email : agency.email;
}
