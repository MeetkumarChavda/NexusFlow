

# NexusFlow

NexusFlow is a web application designed to manage property listings, reservations, and user interactions seamlessly. The project includes a **Next.js frontend** and a **Django backend**, with state management handled by Zustand and API interactions secured using JWT tokens.

## Features
- Property listings with detailed filters (location, category, guests, etc.)
- Reservation management with real-time availability checks
- User authentication and add property to favorites functionality
- WebSocket for real-time communication in chat features

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Installation and Setup](#installation-and-setup)
4. [Backend Setup (Django)](#backend-setup-django)
5. [Frontend Setup (Next.js)](#frontend-setup-nextjs)
6. [Contributing](#contributing)

---

## Project Overview

The NexusFlow project enables users to browse property listings and make reservations, while landlords can manage their properties. The real-time chat system allows communication between property owners and potential guests.

---

## Tech Stack

**Frontend:** 
- [Next.js](https://nextjs.org/)
- [Zustand (State management)](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [React](https://react.dev/learn)

**Backend:** 
- [Django](https://www.djangoproject.com/)
- [Django REST Framework (API)](https://www.django-rest-framework.org/)
- [WebSockets (for real-time communication)](https://websockets.readthedocs.io/en/stable/)
- [JWT (Authentication)](https://jwt.io/introduction)

**Database:** 
- SQLite

---

## Installation and Setup

### Prerequisites

Ensure that the following tools are installed on your machine:
- [Node.js](https://nodejs.org/en/) (for frontend)
- [Python](https://www.python.org/) (for backend)

### Backend Setup (Django)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MeetkumarChavda/NexusFlow.git
   cd backend
   ```

2. **Set up a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a superuser (admin)**:
   ```bash
   python manage.py createsuperuser
   ```

6. **Run the Django development server**:
   ```bash
   python manage.py runserver
   ```

   The backend API will be available at `http://127.0.0.1:8000/`.

### Frontend Setup (Next.js)

1. **Clone the frontend repository**:
   ```bash
   git clone https://github.com/MeetkumarChavda/NexusFlow.git
   cd nexusflow-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set environment variables**:
   Create a `.env.local` file in the root directory with the following variables:
   ```bash
   NEXT_PUBLIC_API_HOST=http://127.0.0.1:8000  # Django backend URL
   NEXT_PUBLIC_WS_HOST=http://127.0.0.1:8000     # WebSocket URL
   ```

4. **Run the Next.js development server**:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:3000/`.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a Pull Request.

---
