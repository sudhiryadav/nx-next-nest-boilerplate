# Nx Monorepo Template with Next.js and NestJS

A modern monorepo template using Nx, featuring:
- Next.js frontend application
- NestJS backend application
- Shared UI components library
- Shared utilities library

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sudhiryadav/nx-next-nest-boilerplate.git
cd nx-next-nest-boilerplate
```

2. Install dependencies:
```bash
yarn install
```

## 📦 Project Structure

```
├── apps/
│   ├── frontend/     # Next.js frontend application
│   └── backend/      # NestJS backend application
├── libs/
│   ├── ui/          # Shared UI components
│   └── utils/       # Shared utilities
```

## 🛠️ Available Scripts

### Frontend
```bash
yarn nx serve frontend    # Start frontend development server
yarn nx build frontend   # Build frontend for production
yarn nx lint frontend    # Lint frontend code
```

### Backend
```bash
yarn nx serve backend    # Start backend development server
yarn nx build backend   # Build backend for production
yarn nx lint backend    # Lint backend code
```

### Shared Libraries
```bash
yarn nx build ui        # Build UI library
yarn nx build utils     # Build utils library
```

## 🔧 Development

### Adding New Features
- Use `yarn nx g` to generate new components, services, or modules
- Follow the Nx documentation for best practices

### Code Style
- ESLint and Prettier are configured for consistent code style
- Run `yarn nx lint` to check code style

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Nx](https://nx.dev/) for the amazing monorepo tooling
- [Next.js](https://nextjs.org/) for the frontend framework
- [NestJS](https://nestjs.com/) for the backend framework
