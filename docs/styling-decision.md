# Styling Decision Document

## Introduction

This document outlines the styling decisions and guidelines for our frontend application to ensure consistency and maintainability.

## Color Palette

- **Primary**: #007bff
- **Secondary**: #6c757d
- **Success**: #28a745
- **Danger**: #dc3545
- **Warning**: #ffc107
- **Info**: #17a2b8

## Typography

- **Font Family**: Open Sans, sans-serif
- **Base Font Size**: 16px
- **Heading Levels**:
  - H1: 2.5rem (40px)
  - H2: 2rem (32px)
  - H3: 1.75rem (28px)
  - H4: 1.5rem (24px)
  - H5: 1.25rem (20px)
  - H6: 1.125rem (18px)

## Layout

- **Container Width**: 
  - Small devices (landscape phones, 576px and up): 540px
  - Medium devices (tablets, 768px and up): 720px
  - Large devices (desktops, 992px and up): 960px
  - X-Large devices (large desktops, 1200px and up): 1140px

## Components

### Buttons

- **Primary Button**: 
  ```css
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  ```

- **Secondary Button**:
  ```css
  .btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
  }
  ```

### Forms

- **Input Fields**:
  ```css
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.25rem;
  }
  ```

### Navigation

- **Navbar**:
  ```css
  .navbar {
    background-color: #343a40;
    color: #fff;
  }
  ```

## Conclusion

This document serves as a reference for all developers working on the frontend application. By following these guidelines, we can ensure that our application has a consistent and professional look and feel.
