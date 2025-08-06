# 📞 Vapi Outbound Call Campaign Project

This project demonstrates an automated outbound call campaign using **Vapi's AI receptionist**. The goal is to showcase the value of an AI receptionist to **local businesses** by calling them **after hours** and highlighting **missed lead opportunities**.

---

## 📚 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Setup Instructions (Local)](#setup-instructions-local)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application (Local)](#running-the-application-local)
- [🚀 Deployment to Render](#deployment-to-render)
- [📁 Project Structure](#project-structure)
- [📞 Campaign Details](#campaign-details)
- [📄 License](#license)

---

## 🧠 Project Overview

This **Node.js** application orchestrates an outbound call campaign using the **Vapi API**. It reads a list of businesses from a `JSON` file, schedules calls to them with a specified delay, and uses pre-defined AI assistants to deliver a message about **after-hours lead capture**.

### The project includes:
- An **Express.js** server to handle API requests.
- Integration with the **Vapi API** for scheduling outbound calls.
- A **configurable list of target businesses**.
- **A/B testing** with different AI assistant scripts.

---

## ✨ Features

- **📞 Automated Outbound Calling:** Schedules calls to a list of phone numbers.
- **⏱️ Configurable Call Timing:** Allows setting delays between calls.
- **🧪 A/B Testing:** Supports using multiple Vapi AI assistants/scripts for comparison.
- **📄 Dynamic Business List:** Reads target businesses from a `businessList.json` file.
- **🤖 Vapi Integration:** Leverages Vapi's robust platform for AI voice interaction.

---

## 🛠️ Setup Instructions (Local)

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)
- A [Vapi Account](https://www.vapi.ai/) with:
  - **API Key**
  - **Phone Number ID**
  - At least **two Assistant IDs** (for A/B testing)

---

### 📥 Installation


git clone https://github.com/DhruvalAnandkar/Vapi-Outbound-Campaign.git
cd Vapi-Outbound-Campaign
npm install

## ⚙️ Configuration
1. Create a .env file in the root of your project:

VAPI_API_KEY="YOUR_VAPI_API_KEY"
PHONE_NUMBER_ID="YOUR_VAPI_PHONE_NUMBER_ID"
ASSISTANT_ID1="YOUR_FIRST_VAPI_ASSISTANT_ID"   # e.g., for "Riley"
ASSISTANT_ID2="YOUR_SECOND_VAPI_ASSISTANT_ID"  # e.g., for "Zoe"

2. Prepare businessList.json:

Create a file in the root with the following format:
[
  {
    "name": "Stonecreek Dental Care",
    "number": "+14192810760"
  },
  {
    "name": "Ashland Dental Arts",
    "number": "+14194960132"
  }
]

☎️ Ensure all phone numbers are in E.164 format (e.g., +1XXXXXXXXXX)

## ▶️ Running the Application (Local)
Start the server:

npm start
You should see:

🚀 Server running at http://localhost:3000
Trigger the campaign by visiting:

http://localhost:3000/api/start-campaign
🧠 The server will start scheduling calls and log each scheduled attempt.

## 🚀 Deployment to Render
This app is Render-ready for seamless cloud deployment.

🧾 Steps:
1. Push the project to GitHub.
2. Go to Render and create a new Web Service.

3. Connect it to your GitHub repo.

4. In the Render service settings:

Root Directory: Set to vapi-test-project (or the name of your main folder).

Environment Variables: Add:

VAPI_API_KEY

PHONE_NUMBER_ID

ASSISTANT_ID1

ASSISTANT_ID2

Build Command: (auto-detected)
npm install

Start Command:
node index.js

Once deployed, trigger the campaign via:
https://your-service-name.onrender.com/api/start-campaign

## 📁 Project Structure
.
├── index.js                  # Main application entry point
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Dependency lock file
├── .env                      # Environment variables (excluded from Git)
├── .gitignore                # Git exclusions
├── businessList.json         # List of businesses to call
└── routes/                   # API routes
    └── call.js               # Call scheduling logic

## 📞 Campaign Details
🎯 Target Audience: Local service businesses in Ashland, Ohio

e.g., med spas, dental offices, home services, law firms

🕓 Call Timing: After typical business hours

🧑‍💼 AI Assistant Personas:

Riley – Friendly & Patient (conversational tone)

Zoe – Direct & Efficient (concise messaging)

⏳ Delay Between Calls: 7 minutes between each call to simulate a natural campaign

📄 License
This project is licensed under the ISC License.

👨‍💻 Built with ❤️ by Dhruval Anandkar
