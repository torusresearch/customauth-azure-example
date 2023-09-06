# CustomAuth SDK - Azure AD B2C Example

This example shows how to use the CustomAuth SDK with Azure AD B2C.

## Prerequisites

- Azure AD B2C login setup is required. See [Azure AD B2C documentation](https://docs.microsoft.com/en-us/azure/active-directory-b2c/overview) for more information.
- [Node.js](https://nodejs.org/en/) version 16

## Azure B2C Setup
In this example, since the azure account is already setup to run the code.
But if you want your own Azure B2C AD setup, refer to this guide.

1. Create and setup your own tenant
https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/create-new-tenant

2. Change the AD (Active Directory) and make a new app registration
add redirect uri which can be compatible with this application
https://learn.microsoft.com/en-us/azure/active-directory-b2c/tutorial-register-applications?tabs=app-reg-ga

3. Set up the user flow. In this example we used the signup & signin flow.
https://learn.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows?pivots=b2c-user-flow

4. If you want to add more identity providers besides google (for example facebook, etc..) refer to this as well
https://learn.microsoft.com/en-us/azure/active-directory-b2c/identity-provider-facebook?pivots=b2c-user-flow

5. Now it's good to go, you can get the code grant flow endpoint refering to this document
if you want to use your own endpoint instead of the one in example app, change the domain at src/constants/index.tsx
https://learn.microsoft.com/en-us/azure/active-directory-b2c/authorization-code-flow

## Repository Setup

1. Clone the repository and navigate to the example directory.

   ```bash
    git clone https://github.com/torusresearch/customauth-azure-example
    cd customauth-azure-example
   ```

2. Install dependencies for client and run the client.

   ```bash
    npm install
    npm start
   ```

   Note: make sure to update the `.env` file with your Azure AD B2C credentials.

3. In a new terminal, Install dependencies for server and run the server.

   ```bash
    cd server
    npm install
    npm start
   ```

   Note: make sure to update the `.env` file with your credentials.

### Flow Diagram

![Flow Diagram](https://github.com/torusresearch/customauth-azure-example/assets/6962565/3362da09-6497-47cb-80bf-f9b465800a54)
