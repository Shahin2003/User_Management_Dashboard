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

- **Dashboard Interface:**
  - Design a clean and intuitive dashboard layout with two tabs: User Details and Account Creation.

- **Tech Stack:**
  - Use either React or Vue.js for frontend development (Vue.js is preferred).
  - Implement styling using CSS/SCSS/SASS or Tailwind CSS (Tailwind CSS is preferred) without relying on any component libraries.
  - Optional but preferred: Use SSR (Server-Side Rendering) with Next.js or Nuxt.js.
  - Aim for a high Lighthouse score, striving for a score between 90 and 100 to optimize user experience.

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
