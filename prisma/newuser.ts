import { PrismaClient, UserRole } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('driver@piggyride.in', 10);
  await prisma.user.create({
    data: {
      email: 'driver@piggyride.in',
      password: hashedPassword,
      name: 'Driver',
      phone: '6364626263',
      role: UserRole.DRIVER,
      isActive: true,
    }
  });
  console.log('Driver user created!');
}
main().catch(console.error).finally(() => prisma.$disconnect());