# PiggyRide Backend Core

This is the core backend service that serves as the source of truth for the PiggyRide application.

## Project Structure

```
backend-core/
├── prisma/                  # Database schema and migrations
│   ├── schema.prisma       # Prisma schema definition
│   ├── migrations/         # Database migrations
│   └── seed.ts            # Database seeding script
├── src/
│   ├── types/             # TypeScript type definitions
│   │   └── enums.ts       # Shared enumerations
│   └── services/          # Core business logic services
├── dist/                  # Compiled TypeScript output
└── tests/                 # Test suites
```

## Database Schema Changes

The Prisma schema includes models for:
- Users (Parent, Teen, Driver, Admin)
- Locations (Schools, Pickup Points)
- Routes and Stops
- Trips and Rides
- Tracking and Device Management
- Payments and Transactions

### Recent Changes
- Added new enums for user roles and status
- Enhanced location types for school routes
- Added tracking and device management models
- Updated service layer implementation

## Environment Setup

1. Copy `.env.example` to `.env`
2. Configure required environment variables:
   - Database connection
   - Authentication settings
   - External service integrations
   - API configurations

## Database Management

### Migrations
```bash
# Generate new migration
npx prisma migrate dev --name <migration-name>

# Apply migrations
npx prisma migrate deploy

# Reset database (caution: destructive)
npx prisma migrate reset
```

### Backup
Database backups are stored in `sahal_backup.sql`

## Service Layer

Core services handle:
- User management and authentication
- Location and route management
- Trip and ride coordination
- Real-time tracking
- Payment processing

## Development Guidelines

1. Always create new branches for features/changes
2. Run tests before committing
3. Update migrations systematically
4. Document API changes
5. Maintain type safety

## API Documentation

Core endpoints are documented in the admin-dashboard service.
Reference API documentation for integration details.

## Security Notes

- Environment variables must be properly configured
- Database credentials should be kept secure
- Regular backups are essential
- Follow security best practices for authentication

## Version Control

- Main branch contains production-ready code
- Feature branches for new development
- Migration branches for database changes
- Regular backups of database schema

## Related Services

- admin-dashboard: Administrative interface
- dashboard: User interface
- mobile-app: Mobile client application
