# CustomAuth SDK - Azure AD B2C Example

This example shows how to use the CustomAuth SDK with Azure AD B2C.

## Prerequisites

- Azure AD B2C login setup is required. See [Azure AD B2C documentation](https://docs.microsoft.com/en-us/azure/active-directory-b2c/overview) for more information.
- [Node.js](https://nodejs.org/en/) version 16

## Setup

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
