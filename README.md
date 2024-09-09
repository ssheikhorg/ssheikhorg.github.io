# Portfolio Projects - Python & Backend Development

Welcome to my portfolio! This repository contains a collection of projects that demonstrate my skills in Python programming, backend development, API design, and database management. Each project showcases different aspects of backend development, including RESTful APIs, data processing, security, deployment, and more.

## Table of Contents

- [About Me](#about-me)
- [Projects Overview](#projects-overview)
  - [1. RESTful API for E-commerce](#1-restful-api-for-e-commerce)
  - [2. Task Management Application](#2-task-management-application)
  - [3. Data Analysis Pipeline](#3-data-analysis-pipeline)
  - [4. Authentication & Authorization System](#4-authentication--authorization-system)
  - [5. Weather Forecast API](#5-weather-forecast-api)
- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Contact](#contact)

## About Me

I’m a Python developer passionate about building scalable and efficient backend solutions. I specialize in crafting RESTful APIs, implementing security best practices, working with relational and non-relational databases, and integrating third-party services. This repository is a showcase of my backend development expertise, designed using Python frameworks such as Flask and Django.

Feel free to explore the projects below and see how I handle different backend challenges!

## Projects Overview

### 1. RESTful API for E-commerce

**Description**: A fully-functional API for an e-commerce platform. It provides endpoints for user registration, authentication, product listing, order management, and payment processing.

**Key Features**:
- Token-based authentication (JWT)
- Role-based access control for admin and users
- CRUD operations for products, orders, and customers
- Stripe API integration for payments

**Tech Stack**:
- Python, Flask
- PostgreSQL
- JWT, Stripe API

**[View Project](link-to-project)**

---

### 2. Task Management Application

**Description**: A task management application with a RESTful API that allows users to manage tasks, set deadlines, and categorize tasks.

**Key Features**:
- User authentication and authorization
- Task creation, updating, deletion
- Filtering and sorting tasks by priority, due date, and status
- API documentation with Swagger

**Tech Stack**:
- Django REST Framework
- SQLite
- JWT Authentication

**[View Project](link-to-project)**

---

### 3. Data Analysis Pipeline

**Description**: A data processing pipeline that reads large datasets, processes data for insights, and outputs results to various formats. The project includes a REST API to serve data analytics to clients.

**Key Features**:
- ETL (Extract, Transform, Load) pipeline for data cleaning
- Data validation and schema management
- JSON and CSV output formats
- Scalable processing using Celery and Redis

**Tech Stack**:
- Python (Pandas, NumPy)
- Flask
- Celery, Redis

**[View Project](link-to-project)**

---

### 4. Authentication & Authorization System

**Description**: A comprehensive authentication and authorization system designed for backend services. It supports user registration, password reset, email verification, and OAuth2 integration.

**Key Features**:
- Secure user authentication with hashed passwords (bcrypt)
- JWT-based session management
- Email verification and password recovery workflows
- Google and GitHub OAuth2 integration

**Tech Stack**:
- Flask
- MongoDB
- OAuth2, JWT

**[View Project](link-to-project)**

---

### 5. Weather Forecast API

**Description**: A simple REST API that fetches real-time weather data from external sources and serves it to clients. This API can be integrated into web applications or IoT devices.

**Key Features**:
- External API integration (OpenWeatherMap API)
- Real-time weather data with caching for efficiency
- City search, and current weather details for a location

**Tech Stack**:
- Python, FastAPI
- Redis (for caching)
- OpenWeatherMap API

**[View Project](link-to-project)**

---

## Technologies

The following technologies and tools were used across the projects:

- **Languages**: Python
- **Frameworks**: Flask, Django, FastAPI
- **Databases**: PostgreSQL, SQLite, MongoDB
- **API Design**: RESTful API, OpenAPI/Swagger, OAuth2
- **Authentication**: JWT, OAuth2
- **Task Queues**: Celery, Redis
- **Testing**: PyTest, Postman
- **Deployment**: Docker, Heroku

## Setup Instructions

To run any of these projects locally, follow these general instructions:

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/portfolio-projects.git
