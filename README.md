# Lao Urban Planning Information System (upip)

This project is a prototype for the Lao Urban Planning Information System (upip), designed to demonstrate the potential of a document storage and management system for urban planning workflows in Laos.

## Project Overview

The upip prototype demonstrates:

1. **Project Management** - View and manage urban planning projects
2. **Task-Based Organization** - Documents organized according to the 8 tasks of the Lao urban planning process
3. **Document Repository** - Upload, view, and download urban planning documents
4. **Progress Tracking** - Monitor project completion status across all tasks

## Internationalization

The application fully supports both English and Korean languages:

- Uses Vue I18n for internationalization
- Automatically detects browser language preference
- Allows manual language selection with a dropdown in the navigation bar
- Stores language preference in localStorage

## Features

- **Project Dashboard**: View all urban planning projects with filtering and sorting capabilities
- **Project Details**: View comprehensive project information including progress and team members
- **Task Management**: Manage documents and subtasks for each planning step
- **Document Upload**: Upload and manage planning documents
- **Legal Database Link**: Quick access to the Lao legal database for reference

## Technical Setup

This is a Vue.js application built with:
- Vue 3
- Vue Router
- Pinia for state management
- Vue I18n for internationalization

### Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## Project Structure

The application is organized with the following structure:

- `src/views/` - Main page components
- `src/components/` - Reusable UI components
- `src/router/` - Route definitions
- `src/assets/` - CSS and static assets
- `src/locales/` - Translation files for internationalization

## Note

This is a frontend prototype only. In a full implementation, this would connect to a backend API for data persistence and user authentication.
