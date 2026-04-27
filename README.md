# Vehicle Control API

REST API for managing vehicle entry control and cargo verification, built with **NestJS**, **TypeScript** and **PostgreSQL**.

## About the Project

This API handles the registration and verification process of vehicles and their cargo categories. It tracks each vehicle's arrival, agent intervention, and the full verification workflow per cargo category — including authorization status, documentation, and delivery.

Inspired by a real system developed for a logistics and financial environment.

## Tech Stack

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=flat&logo=typeorm&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)

| Technology | Purpose |
|---|---|
| NestJS | REST API framework |
| TypeScript | Primary language |
| PostgreSQL | Database |
| TypeORM | ORM and database migrations |
| class-validator | DTO validation |

## Project Structure

```
src/
├── vehiculos/          # Vehicle registration and management
├── rubros/             # Cargo category catalog
├── vehiculo-rubros/    # Vehicle-category relationship and verification logic
├── common/             # Shared enums and interfaces
├── config/             # Environment configuration
└── database/           # Database connection module
```

## Domain Model

The system is built around three core entities:

- **Vehiculo** — represents a vehicle entry with arrival date, destination and agent intervention date
- **Rubro** — catalog of cargo categories (e.g. electronics, cosmetics, food)
- **VehiculoRubro** — links a vehicle to its cargo categories and tracks the full verification workflow

### Verification States

| Value | State |
|---|---|
| `0` | Pending |
| `-1` | In progress |
| `1` | Completed |

### Control Channel

| Value | Channel |
|---|---|
| `0` | Red |
| `1` | Green |
