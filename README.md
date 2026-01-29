# Testing React Apps

## About this Project

This is a React app built with the following technologies and libraries:

- Auth0
- Tailwind
- RadixUI
- React Router
- React Query
- Redux Toolkit

Please follow these instructions carefully to setup this project on your machine.

## Setting up Auth0 for Authentication

1. **Sign up for an Auth0 Account:**

   If you don't already have an Auth0 account, you can sign up for one at [https://auth0.com/](https://auth0.com/). Auth0 offers a free tier that you can use for your project.

2. **Create a New Application:**
   - Log in to your Auth0 account.
   - Go to the Auth0 Dashboard.
   - Click on "Applications" in the left sidebar.
   - Click the "Create Application" button.
   - Give your application a name (e.g., "My React App").
   - Select "Single Page Web Applications" as the application type.

3. **Configure Application Settings:**
   - On the application settings page, configure the following settings:
     - Allowed Callback URLs: `http://localhost:5173`
     - Allowed Logout URLs: `http://localhost:5173`
     - Allowed Web Origins: `http://localhost:5173`
   - Save the changes.

4. **Obtain Auth0 Domain and ClientID:**
   - On the application settings page, you will find your Auth0 Domain and Client ID near the top of the page.
   - Copy the Auth0 Domain (e.g., `your-auth0-domain.auth0.com`) and Client ID (e.g., `your-client-id`).

5. **Create a `.env.local` File:**
   - In the root directory of the project, you'll find a sample `.env` file. Make a copy and save it as `.env.local`.
   - Replace the Auth0 Domain and Client ID with the actual values you obtained from Auth0.

## Running the App

Now that you have set up Auth0 and configured your environment variables, you can run the React app using the following commands:

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm start
```

This will start the back-end process at `http://localhost:3000`. If port 3000 is in use on your machine, update the port number in the following files and run `pnpm start` again:

- json-server.json
- src/main.tsx

## Course notes

### Which things of a component have to be tested?

- How they render
- How they respond to user actions
- No tests is better than bad tests

> We have to test what they do, not how they are implemented. It doesn't matter if they use hooks, contexts, reducers, etc, those things are implementation details.

### Unit Tests vs Integration Tests

- We have to test hooks or reducers in isolation just if they are used by several components or they have complex logic.
- Since components are composed by different units (hooks, utilities, etc), component tests are `Integration Tests`.
  - (-) Slower
  - (+) More confidence
  - (+) More robust

### Visual Tests

> [!IMPORTANT]
> **Don't test styles!** - Test the behaviour.

- **Can be fragile:** a tiny change of colors, typography, etc can break a test.
- **Don't deliver value:** passing visual tests don't guarantee that our application looks good.

## IDE Extensions

- Vitest `vitest.explorer`
- Vitest Snippets `deinsoftware.vitest-snippets`
- Testing Library Snippets `deinsoftware.testing-library-snippets`
