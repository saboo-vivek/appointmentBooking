// const User = db.customers

// function createCustomer(req, res, next) {
//         if (!req.body.name || !req.body.phone || !req.body.email) {
//             return res.status(400).send({
//                 message: "Bad Data"
//             })
//         }
//         const customerObject = {
//             name: req.body.name,
//             phone: req.body.phone,
//             email: req.body.email,
//         }
//         Customer.create(customerObject).then((data) => {
//             res.status(200).send(data)
//         }).catch((err) => {
//             res.status(500).send(err);
//         })
//     }
//     function findAllCustomer(req, res) {
//         Customer.findAll().then((data) => {
//             res.status(200).send(data)
//         })
//     }
//     function findCustomer(req, res) {
//         Customer.findByPk(req.params.email).then(data => {
//             res.send(data);
//         }).catch(error => {
//             res.status(500).send(error);
//         })
//     }
//     function updateCustomer(req, res) {
//         const newData = {
//             name: name,
//             phone:phone,
//             email: req.params.email
//         }
//         customerModel.update(newData,
//             {
//                 where: { email: req.params.email }
//             }).then(() => {
//                 res.send("updated data successfully")
//             }).catch(error => {
//                 res.status(500).send(error);
//             })
//     }
//     function deleteCustomer(req, res) {
//         Customer.destroy({ where: { email: req.params.email } }).then(() => {
//             res.send("updated data successfully")
//         }).catch(error => {
//             res.status(500).send(error);
//         })
//     }

    const user=require('/customer_model');

    exports.getUserForm=(req,res)=>{
        
        console.log("hello")
        res.send('hello')
    }