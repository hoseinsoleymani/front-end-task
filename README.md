# Task Manager App

This is a task manager app built using Vite, React, MSW for mocking API calls, Cypress and React Testing Library for testing, and pnpm as the package manager.

## Main Features
- **Tasks Manager**: Allows users to manage their tasks efficiently.
- **Add/Delete/Update Tasks**: Users can add new tasks, delete existing tasks or update task details.
- **Filter Tasks**: Provides options to filter tasks based on different criteria.
- **Sort Tasks**: By Id and Alphabet.
- **Protected Route**: Implements authentication and provides protected routes for authorized users only.
- **Save Tasks as a mock data**.
- **Component Test by Cypress**: Includes component tests using Cypress for ensuring functionality and reliability.
- **Type Safe**: Utilizes TypeScript for static typing and enhanced code quality.

## Prerequisites
Make sure you have:

**Node.js > 16 installed**. You can download it from the official [Node.js website](https://nodejs.org/).
**Version of pnpm used:** 6.14.7 ([Download here](https://www.npmjs.com/package/pnpm/v/6.14.7))

## Installation
1. Install pnpm by running the following command:
   ```bash
   npm install -g pnpm
   ```

2. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-manager-app.git
   ```

3. Navigate to the project directory:
   ```bash
   cd task-manager-app
   ```

4. Install dependencies:
   ```bash
   pnpm install
   ```

## Usage
### Development
To start the development server, run:
```bash
pnpm dev
```

### Testing
To run tests using Cypress and React Testing Library, run:
```bash
pnpm test
```

### Build
To build the app for production, run:
```bash
pnpm build
```

### Preview
To preview the production build locally, run:
```bash
pnpm preview
```

### Linting
To lint the codebase, run:
```bash
pnpm lint
```

## Contribution Guide

1. Fork the repository on GitHub.
2. Clone your fork locally.
3. Create a new branch with a descriptive name: git checkout -b feature/my-new-feature.
4. Make your changes and commit them: git commit -m 'Add some feature'.
5. Push to the branch: git push origin feature/my-new-feature.
6. Submit a pull request with full remarks documenting your changes.

We welcome contributions from everyone! If you have any questions or need assistance with contributing to this project, please feel free to reach out.