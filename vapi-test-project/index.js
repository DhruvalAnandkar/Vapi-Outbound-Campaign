// index.js
require('dotenv').config(); // This line makes process.env available
const express = require('express');
const fs = require('fs').promises; // Import the file system module with promises
const path = require('path'); // Import the path module to build file paths
const app = express();

// Import both the router and the new campaign function
const { router: callRoutes, startCallCampaign } = require('./routes/call');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health Check
app.get('/', (req, res) => {
    res.send('✅ Vapi Call API is working!');
});

// --- Your original route for single calls ---
app.use('/api', callRoutes);

// --- New route to start the full campaign ---
app.get('/api/start-campaign', async (req, res) => {
    // Fetch IDs from process.env
    const assistant1 = process.env.ASSISTANT_ID1;
    const assistant2 = process.env.ASSISTANT_ID2;
    
    // Basic check to make sure IDs are loaded
    if (!assistant1 || !assistant2) {
        console.error("❌ Error: Assistant IDs not loaded from .env. Check your .env file!");
        return res.status(500).send("Error: Assistant IDs not configured.");
    }
    
    let businessList;
    try {
        // Construct the file path and read the JSON file content
        const filePath = path.join(__dirname, 'businessList.json');
        const fileContent = await fs.readFile(filePath, 'utf-8');
        // Parse the JSON content into a JavaScript object
        businessList = JSON.parse(fileContent);

        // Map the placeholder IDs from the JSON file to the actual IDs from .env
        businessList.forEach(business => {
            if (business.assistantId === "ASSISTANT_ID1") {
                business.assistantId = assistant1;
            } else if (business.assistantId === "ASSISTANT_ID2") {
                business.assistantId = assistant2;
            }
        });
    } catch (error) {
        console.error("❌ Error loading or parsing businessList.json:", error);
        return res.status(500).send("Error loading business list.");
    }

    await startCallCampaign(businessList);
    res.status(200).send('✅ Vapi call campaign has started scheduling!');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log('To start campaign, visit http://localhost:3000/api/start-campaign in your browser.');
});