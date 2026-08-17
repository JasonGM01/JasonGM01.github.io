https://jason-gm-01-github-q7lgb6s36-jasongm01s-projects.vercel.app/

# Personal Portfolio Website

A full-stack personal portfolio built with Next.js and MongoDB to showcase my projects, technical skills, education, interests, and contact information.

The project also serves as a hands-on environment for practicing full-stack web development, authentication, API development, responsive design, and deployment.

## Features

- Dynamic portfolio content backed by MongoDB
- 20+ React/Next.js components
- Responsive layouts for desktop and mobile devices
- User registration and authentication
- Secure password hashing with bcrypt
- JWT-based authentication using JOSE
- Cookie-based user sessions
- Protected content for authenticated users
- Role-based access controls for administrative features
- Admin-only content management
- Next.js API routes for retrieving and updating application data
- Deployed using Vercel

## Tech Stack

### Frontend
- Next.js
- React
- JavaScript
- CSS

### Backend
- Next.js API Routes
- MongoDB

### Authentication
- bcrypt
- JOSE
- JSON Web Tokens (JWT)
- Cookie-based sessions

### Development & Deployment
- Git
- GitHub
- Browser Developer Tools
- Vercel

## Authentication Flow

The application implements a custom authentication system.

1. A user creates an account with their credentials.
2. The password is hashed with bcrypt before being stored.
3. During login, bcrypt compares the submitted password against the stored hash.
4. After successful authentication, JOSE generates a signed JWT.
5. The token is stored in a cookie and used to verify the user's session.
6. Protected pages verify the session before allowing access.
7. Administrative functionality additionally checks the user's role before allowing content changes.

## Application Structure

The website contains sections for:

- About
- Hobbies and interests
- Technical skills
- Education
- Software and technical projects
- Contact information
- User registration and login
- Administrative content management

Portfolio information is stored in MongoDB and retrieved through application routes so content can be rendered dynamically rather than being entirely hard-coded into the frontend.

## Development

The project was created as a practical way to expand my experience with full-stack development.

During development, I used browser Developer Tools and Next.js documentation to diagnose issues involving:

- CSS layouts and component structure
- Responsive behavior
- Authentication state
- Session handling
- Protected content
- Administrative authorization

One authentication challenge involved determining why protected content remained inaccessible after an unsuccessful login. Debugging the authentication state led to improvements in session handling and administrative authorization.

## Running Locally

### Prerequisites

- Node.js
- npm
- MongoDB database

### Installation

Clone the repository:

```bash
git clone https://github.com/JasonGM01/JasonGM01.github.io.git