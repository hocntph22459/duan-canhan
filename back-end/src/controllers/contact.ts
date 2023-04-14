import Contact from "../models/contact";

// export const getAll = async (req, res) => {
//     const { _sort = "createAt", _order = "asc", _limit = 10, _page = 1 } = req.query;
//     const options = {
//         page: _page,
//         limit: _limit,
//         sort: {
//             [_sort]: _order === "desc" ? -1 : 1,
//         },
//     };
//     try {
//         const contacts = await contact.paginate({}, options);
//         if (contacts.length === 0) {
//             return res.json({
//                 message: "Không có góp ý nào",
//             });
//         }
//         return res.json(contacts);
//     } catch (error) {
//         return res.status(400).json({
//             message: error,
//         });
//     }
// };

export const getAll = async (req, res) => {
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

export const get = async function (req, res) {
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
export const create = async function (req, res) {
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
export const update = async function (req, res) {
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
export const remove = async function (req, res) {
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