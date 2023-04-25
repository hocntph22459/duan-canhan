import Contact from "../models/contact";
export const getAllContact = async (req, res) => {
    try {
        const contact = await Contact.find()
        if (contact.length === 0) {
            return res.status(400).json({
                message: "Không có góp ý nào",
            });
        }
        return res.status(200).json({
            message: "thành công",
            data: contact
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};

export const getOneContact = async function (req, res) {
    try {
        const contact = await Contact.findById(req.params.id)
        if (!contact) {
            return res.status(400).json({
                message: "Không có góp ý nào",
            });
        }
        return res.status(200).json({
            message: "thành công",
            data: contact
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const createContact = async function (req, res) {
    try {
        const contact = await Contact.create(req.body);
        if (!contact) {
            return res.status(400).json({
                message: "Không thể thêm góp ý",
            });
        }
        // await User.findByIdAndUpdate(contact.UserId, {
        //     $addToSet: {
        //         contacts: contact._id,
        //     },
        // });
        return res.status(200).json({
            message: "Thêm góp ý thành công",
            data: contact,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const updateContact = async function (req, res) {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contact) {
            return res.status(400).json({
                message: "Cập nhật góp ý không thành công",
            });
        }
        return res.status(200).json({
            message: "Cập nhật góp ý thành công",
            data: contact,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};
export const removeContact = async function (req, res) {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Xóa góp ý thành công",
            contact,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        });
    }
};