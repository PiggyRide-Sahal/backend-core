// file not needed since all services use own auth service but might be useful for future reference
import { PrismaClient, Prisma } from '@prisma/client';
import { UserRole } from '../shared/types/enums'; // Adjust path if needed
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

function generateToken(user: Prisma.UserGetPayload<{}>) {
  return jwt.sign(
    { 
      userId: user.id,
      role: user.role
    },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '24h' }
  );
}

function transformUserResponse(user: Prisma.UserGetPayload<{include: { parent: true }
}>) {
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

export const authService = {
  async login({ email, password }: { email: string; password: string }) {
    const user = await prisma.user.findFirst({
      where: { email },
      include: { parent: true }
    });

    if (!user) throw new Error('User not found');

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new Error('Invalid password');

    return {
      token: generateToken(user),
      user: transformUserResponse(user)
    };
  }
};
