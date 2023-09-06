# CustomAuth SDK - Azure AD B2C Example

This example shows how to use the CustomAuth SDK with Azure AD B2C.

## Prerequisites

- Azure AD B2C login setup is required. See [Azure AD B2C documentation](https://docs.microsoft.com/en-us/azure/active-directory-b2c/overview) for more information.
- [Node.js](https://nodejs.org/en/) version 16

## Azure B2C Setup

This example assumes that the Azure account is already set up to run the code. However, if you wish to establish your own Azure B2C AD setup, please refer to the following formalized steps for guidance.

1. Create and Set Up Your Own Tenant:

- Follow the instructions outlined in the official Microsoft Azure documentation to create and set up your own Azure Active Directory tenant: [Create New Tenant](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/create-new-tenant)

2. Change the Active Directory (AD) and Register a New Application:

- After setting up your tenant, proceed to create a new application registration in your Azure B2C AD.
- Ensure that you add a redirect URI that is compatible with the application you are developing.
- Refer to the official documentation for detailed guidance on creating and configuring an application registration:
  [Tutorial: Register Applications](https://learn.microsoft.com/en-us/azure/active-directory-b2c/tutorial-register-applications?tabs=app-reg-ga)

3. Set Up the User Flow:

- Configure user flows within your Azure B2C AD. In this example, we have used the signup and sign in flow.
- Follow the documentation to create user flows: [Tutorial: Create User Flows](https://learn.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows?pivots=b2c-user-flow)

4. Adding Additional Identity Providers:

- If you wish to incorporate identity providers other than Google (e.g., Facebook, etc.), you can refer to the relevant documentation for guidance: [Identity Provider - Facebook](https://learn.microsoft.com/en-us/azure/active-directory-b2c/identity-provider-facebook?pivots=b2c-user-flow)

5. Accessing the Code Grant Flow Endpoint:

- Your Azure B2C setup is now ready to use. To obtain the code grant flow endpoint, refer to the official documentation: [Authorization Code Flow](https://learn.microsoft.com/en-us/azure/active-directory-b2c/authorization-code-flow)
- If you intend to use your own endpoint instead of the one provided in the example application, make the necessary adjustments in the src/constants/index.tsx file.

By following these steps, you will have successfully set up your Azure B2C AD for your specific application needs.

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
