"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
// file not needed since all services use own auth service but might be useful for future reference
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
function generateToken(user) {
    return jsonwebtoken_1.default.sign({
        userId: user.id,
        role: user.role
    }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '24h' });
}
function transformUserResponse(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        parent: user.parent ? {
            id: user.parent.id,
            // Add other parent fields as needed
        } : null
    };
}
exports.authService = {
    async login({ email, password }) {
        const user = await prisma.user.findFirst({
            where: { email },
            include: { parent: true }
        });
        if (!user)
            throw new Error('User not found');
        const isValidPassword = await bcryptjs_1.default.compare(password, user.password);
        if (!isValidPassword)
            throw new Error('Invalid password');
        return {
            token: generateToken(user),
            user: transformUserResponse(user)
        };
    }
};
