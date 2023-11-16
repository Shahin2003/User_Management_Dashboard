# User Management Dashboard

## Overview

This web application features a user management dashboard with two tabs: User Details and Account Creation. The User Details tab displays user information fetched from a placeholder database in a searchable table format, while the Account Creation tab consists of a form for username and password input. This project aims to provide a clean and intuitive dashboard layout for managing user data.

## Requirements

- **User Details Tab:**
  - Fetch user data from a placeholder database.
  - Implement a searchable table displaying user information: Username, Email, Phone, ID, and Creation date.
  - Enable a click action on any user in the search results to open a popup/modal with a button to generate a report for the selected user.

- **Account Creation Tab:**
  - Create a form with fields for username and password.
  - Implement dummy request handling upon form submission.

- **Tech Stack:**
  - Used Vue.js for frontend development.
  - Implement styling using Tailwind CSS.

## Usage

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd user-management-dashboard

2. **install dependencies:**
    ```bash
         vue create vue-tailwind-dashboard

4. **install tailwind css**
      ```bash
       npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p

   ```bash
5. **npm run serve**
