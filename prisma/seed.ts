import { PrismaClient, UserRole } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'


async function main() {
  //await prisma.wallet.deleteMany()
  //await prisma.admin.deleteMany()
  //await prisma.parent.deleteMany()
  //await prisma.user.deleteMany()
  // Create Admin User
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@sahalcabs.com',
      password: hashedPassword, // In real app, this should be hashed
      name: 'Admin User',
      phone: '9945062063',
      role: UserRole.ADMIN,
      admin: {
        create: {} // Creates associated admin profile
      }
    }
  })
  console.log('Admin user created:', adminUser);

  // Create Test Parent
/*   const parentUser = await prisma.user.create({
    data: {
      email: 'parent@test.com',
      password: 'parent123',
      name: 'Test Parent',
      phone: '+919876543211',
      role: UserRole.PARENT,
      parent: {
        create: {
          wallet: {
            create: {
              balance: 1000
            }
          }
        }
      }
    }
  })
 */
  // Create Test Driver
  /* 
  const driverUser = await prisma.user.create({
    data: {
      email: 'driver@test.com',
      password: 'driver123',
      name: 'Test Driver',
      phone: '+919876543212',
      role: UserRole.DRIVER,
      driver: {
        create: {
          verifications: {
            create: {
              status: 'PENDING',
              documents: {
                create: {
                  type: 'DRIVING_LICENSE',
                  number: 'DL123456',
                  fileUrl: 'https://example.com/license.pdf',
                }
              }
            }
          }
        }
      }
    }
  })
 */
  // Create Test Locations
 /*  const school = await prisma.location.create({
    data: {
      name: 'Test School',
      address: '123 School St',
      latitude: 12.9716,
      longitude: 77.5946,
      type: 'SCHOOL',
      contactNumber: '+919876543213',
      operatingHours: {
        monday: '8:00-16:00',
        tuesday: '8:00-16:00',
        wednesday: '8:00-16:00',
        thursday: '8:00-16:00',
        friday: '8:00-16:00'
      }
    }
  }) */

  // Create Test Route
/*   const route = await prisma.route.create({
    data: {
      name: 'School Route 1',
      description: 'Morning pickup route',
      routeType: 'ADMIN_CREATED',
      frequency: 'DAILY',
      daysOfWeek: [1,2,3,4,5],
      startDate: new Date(),
      baseFare: 100,
      pricingType: 'FIXED',
      totalSeats: 4,
      availableSeats: 4,
      farePerSeat: 25,
      stops: {
        create: [
          {
            location: { connect: { id: school.id } },
            sequence: 1,
            arrivalTime: new Date()
          }
        ]
      }
    }
  }) */

//  console.log({ adminUser, parentUser, driverUser, school, route })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    
    await prisma.$disconnect()
  })
