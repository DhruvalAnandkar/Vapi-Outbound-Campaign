Vapi Outbound Call Campaign Project
This project demonstrates an automated outbound call campaign using Vapi's AI receptionist. The goal is to showcase the value of an AI receptionist to local businesses by calling them after hours and highlighting missed lead opportunities.

Table of Contents
Project Overview

Features

Setup Instructions (Local)

Prerequisites

Installation

Configuration

Running the Application (Local)

Deployment to Render

Project Structure

Campaign Details

License

Project Overview
This Node.js application orchestrates an outbound call campaign using the Vapi API. It reads a list of businesses from a JSON file, schedules calls to them with a specified delay, and uses a pre-defined AI assistant to deliver a message about after-hours lead capture.

The project includes:

An Express.js server to handle API requests.

Integration with the Vapi API for scheduling outbound calls.

A configurable list of target businesses.

Logic for A/B testing different AI assistant scripts.

Features
Automated Outbound Calling: Schedules calls to a list of phone numbers.

Configurable Call Timing: Allows setting delays between calls.

A/B Testing: Supports using multiple Vapi AI assistants/scripts for comparison.

Dynamic Business List: Reads target businesses from a businessList.json file.

Vapi Integration: Leverages Vapi's robust platform for AI voice interaction.

Setup Instructions (Local)
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (LTS version recommended)

npm (Node Package Manager, comes with Node.js)

A Vapi Account with an API Key, a configured Phone Number ID, and at least two Assistant IDs (for A/B testing).

Installation
Clone the repository:

git clone https://github.com/DhruvalAnandkar/Vapi-Outbound-Campaign.git
cd Vapi-Outbound-Campaign

Install dependencies:

npm install

Configuration
Create a .env file:
In the root of your project directory, create a file named .env. This file will store your sensitive API keys and other configurations.

VAPI_API_KEY="YOUR_VAPI_API_KEY"
PHONE_NUMBER_ID="YOUR_VAPI_PHONE_NUMBER_ID"
ASSISTANT_ID1="YOUR_FIRST_VAPI_ASSISTANT_ID" # e.g., for the "Riley" persona
ASSISTANT_ID2="YOUR_SECOND_VAPI_ASSISTANT_ID" # e.g., for the "Zoe" persona

Important: Do NOT commit your .env file to version control (it's already included in .gitignore).

Prepare businessList.json:
Ensure you have a businessList.json file in the root of your project. This file should contain an array of objects, each representing a business to call. Example structure:

[
  {
    "name": "Stonecreek Dental Care",
    "number": "+14192810760"
  },
  {
    "name": "Ashland Dental Arts",
    "number": "+14194960132"
  }
  // ... more businesses
]

Ensure phone numbers are in E.164 format (e.g., +1XXXXXXXXXX).

Running the Application (Local)
Start the server:

npm start

You should see output similar to:
🚀 Server running at http://localhost:3000
To start campaign, visit http://localhost:3000/api/start-campaign in your browser.

Trigger the campaign:
Open your web browser and navigate to:
http://localhost:3000/api/start-campaign

The server will then begin scheduling calls with Vapi, and you will see logs in your terminal confirming each scheduled call.

Deployment to Render
This application is designed to be easily deployed to a platform like Render for continuous operation.

GitHub Repository: Ensure your project is pushed to a GitHub repository. The package.json file must be in the root of the repository.

Render Web Service: Create a new Web Service on Render.com and connect it to your GitHub repository.

Root Directory: In Render's service settings, ensure the "Root Directory" is set to vapi-test-project (or the name of your main project folder if it's not in the root of your repo).

Environment Variables: Add all your VAPI_API_KEY, PHONE_NUMBER_ID, ASSISTANT_ID1, and ASSISTANT_ID2 as environment variables in Render's dashboard.

Build & Start Commands: Render will automatically detect npm install for the build command and node index.js (from your start script in package.json) for the start command.

Trigger Live Campaign: Once deployed and live, trigger the campaign by visiting your Render service's public URL followed by /api/start-campaign (e.g., https://your-service-name.onrender.com/api/start-campaign).

Project Structure
.
├── index.js                  # Main application entry point
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Dependency lock file
├── .env                      # Environment variables (local only, ignored by Git)
├── .gitignore                # Specifies files/folders to ignore in Git
├── businessList.json         # List of businesses to call
└── routes/                   # API routes
    └── call.js               # Handles the call scheduling logic

Campaign Details
Target Audience: Local service businesses (med spas, dental offices, home services, law firms) in the Ashland, Ohio area.

Call Timing: Scheduled after typical business hours to demonstrate missed lead opportunities.

AI Assistant Personas:

Riley (Friendly & Patient): Designed for a conversational approach.

Zoe (Direct & Efficient): Designed for a concise, to-the-point message.

Call Scheduling: Calls are scheduled with a 7-minute delay between each to simulate a realistic outbound campaign.

License
This project is open-source and available under the ISC License.
