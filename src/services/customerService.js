const db = require('../models');
const Customer = db.customers;

const getCustomers = async () => {
    try {
        const customers = await Customer.findAll();
        return {
            code: 0,
            data: customers,
        }
    }
    catch (error) {
        return {
            code: 1,
            errorMessage: error
        }
    }
}

const searchCustomer = async (query) => {
    try {  
        const customer = await Customer.findAll({ where: query });
        return {
            code: 0,
            data: customer,
        }
    }
    catch (error) {
       return {
            code: 1,
            errorMessage: error
        }
    }
}

const createCustomer = async (data) => {
    try {
        const customer = await Customer.create({
            name: data.name,
            email: data.email,
            phoneNumber: data.phone_number,
            address: data.address,
        })
        return {
            code: 0,
            data: customer,
        }
    } catch (error) {
        return {
            code: 1,
            errorMessage: error
        }
    }
}

const updateCustomer = async (customerId, data) => {
    try {
        let customer = await Customer.findByPk(customerId);

        if (customer) {
            customer.name = data.name;
            customer.email = data.email;
            customer.phoneNumber = data.phone_number;
            customer.address = data.address;
            customer.save();
            return {
                code: 0,
                message: 'Update customer successfully'
            }
        }
        else {
            return {
                code: 1,
                errorMessage: 'Customer not found'
            }
        }
    }
    catch (error) {
        return {
            code: 2,
            errorMessage: error
        }
    }
}

const deleteCustomer = async (customerId) => {
    try {
        await Customer.destroy({
            where: { id: customerId }
        });

        return {
            code: 0,
            message: 'Update customer successfully'
        }
    } catch (error) {
        return {
            code: 2,
            errorMessage: error
        }
    }
}

module.exports = {
    getCustomers,
    searchCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
}