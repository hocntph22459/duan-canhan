import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { signinSchema, signupSchema } from "../validates/auth";

export const Signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const { error } = signupSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                message: "Tài khoản đã tồn tại",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user:any = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        user.password = undefined;
        return res.status(201).json({
            message: "Đăng ký thành công",
            user,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
};

export const Signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const { error } = signinSchema.validate({ email, password }, { abortEarly: false });

        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({
                message: errors,
            });
        }

        const user:any = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Tài khoản không tồn tại",
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Không đúng mật khẩu",
            });
        }
        const token = jwt.sign({ _id: user._id }, "hocclnh", { expiresIn: "1h" });

        user.password = undefined;

        return res.status(200).json({
            message: "Đăng nhập thành công",
            accessToken: token,
            user,
        });
    } catch (error) {
        return res.status(404).json({
            message: error.message,
        })
    }
};