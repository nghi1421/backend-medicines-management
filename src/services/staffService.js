const db = require('../models');
const Staff = db.staffs;

const getStaffs = async () => {
    try {
        const staffs = await Staff.findAll();
        return {
            code: 0,
            data: staffs,
        }
    }
    catch (error) {
        return {
            code: 1,
            errorMessage: error
        }
    }
}

const searchStaff = async (query) => {
    try {  
        const staffs = await Staff.findAll({ where: query });
        return {
            code: 0,
            data: staffs,
        }
    }
    catch (error) {
       return {
            code: 1,
            errorMessage: error
        }
    }
}

const createStaff = async (data) => {
    try {
        const staff = await Staff.create({
            name: data.name,
            email: data.email,
            positionId: data.position_id,
            phoneNumber: data.phone_number,
            gender: data.gender,
            address: data.address,
        })
        return {
            code: 0,
            data: staff,
        }
    } catch (error) {
        return {
            code: 1,
            errorMessage: error
        }
    }
}

const updateStaff = async (staffId, data) => {
    try {
        await Staff.update( {
            name: data.name,
            email: data.email,
            positionId: data.position_id,
            phoneNumber: data.phone_number,
            gender: data.gende,
            address: data.address,
        }, { where: { id: staffId } });

        return {
            code: 0,
            message: 'Update staff successfully'
        }
    }
    catch (error) {
        return {
            code: 1,
            errorMessage: error
        }
    }
}

const deleteStaff = async (staffId) => {
    try {
        await Staff.destroy({
            where: { id: staffId }
        });

        return {
            code: 0,
            message: 'Update staff successfully'
        }
    } catch (error) {
        return {
            code: 2,
            errorMessage: error
        }
    }
}

module.exports = {
    getStaffs,
    searchStaff,
    createStaff,
    updateStaff,
    deleteStaff,
}