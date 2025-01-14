# 📧 .env Configuration Guide

This document explains the purpose of each environment variable in the `.env` file and how to obtain the required values.

## Environment Variables

### 1. `VITE_API_KEY`
- **Description**: This key is used to authenticate requests to the Currents API, which provides access to news and current events.
- **Where to get it**:
  1. Visit the [Currents API website](https://currentsapi.services/).
  2. Create an account or log in.
  3. Navigate to the API Keys section in your dashboard.
  4. Copy your API key and paste it into this field.

### 2. `VITE_API_BASE_URL`
- **Description**: This is the base URL for the Currents API. It is used to construct requests to the API.
- **Default Value**: `https://api.currentsapi.services/v1`
  - You do not need to change this unless the API provider specifies otherwise.

### 3. `VITE_API_GIT_AUTH`
- **Description**: This URL points to a local GitHub authentication backend. It is used for cloning and managing authentication services for the project.
- **Where to get it**:
  1. Clone the GitHub authentication backend repository:
     ```bash
     git clone http://localhost:5555
     ```
  2. Ensure the backend is running locally on port `5555`.
  3. Confirm the URL matches your local setup.

---

## Setting Up the `.env` File

1. Create a `.env` file in the root of your project if it does not already exist.
2. Add the following configuration:
   ```env
   VITE_API_KEY = "<Your_API_Key>"
   VITE_API_BASE_URL = "https://api.currentsapi.services/v1"
   VITE_API_GIT_AUTH = "http://localhost:5555"
   ```
3. Replace `<Your_API_Key>` with the actual API key from the Currents API.

## Troubleshooting
- **API Key Issues**: Double-check that the API key is correctly copied and has the required permissions.
- **Git Authentication URL**: Verify that the authentication backend is running and accessible at `http://localhost:5555`.
