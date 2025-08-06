// routes/call.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

// Environment variables
const VAPI_API_KEY = process.env.VAPI_API_KEY;
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID;

// Function to make a single scheduled call to Vapi.ai
const makeScheduledCall = async (phoneNumber, assistantId, scheduleTime) => {
  try {
    const response = await axios.post(
      'https://api.vapi.ai/call',
      {
        assistantId: assistantId, 
        phoneNumberId: PHONE_NUMBER_ID,
        customer: {
          number: phoneNumber,
        },
        schedulePlan: {
          earliestAt: scheduleTime.toISOString(),
        },
      },
      {
        headers: {
          Authorization: `Bearer ${VAPI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log(`✅ Call to ${phoneNumber} scheduled successfully! Call ID: ${response.data.id}`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error(`❌ Failed to schedule call for ${phoneNumber}:`, error.response?.data || error.message);
    return { success: false, details: error.response?.data || error.message };
  }
};

// --- Your existing POST /api/call route for manual testing ---
router.post('/call', async (req, res) => {
  const { phoneNumber } = req.body;
  const manualAssistantId = process.env.ASSISTANT_ID; // This still uses the single ASSISTANT_ID from .env for manual tests

  if (!phoneNumber) {
    return res.status(400).json({
      error: 'phoneNumber is required in request body',
    });
  }

  // Schedule the call for a few minutes from now to test
  const scheduleTime = new Date(new Date().getTime() + 1 * 60000); // 1 minute from now

  const result = await makeScheduledCall(phoneNumber, manualAssistantId, scheduleTime);
  
  if (result.success) {
    res.status(200).json({
      message: '✅ Call initiated successfully!',
      data: result.data,
    });
  } else {
    res.status(500).json({
      error: 'Failed to make call',
      details: result.details,
    });
  }
});

// --- New function to run the campaign ---
const startCallCampaign = async (businessList) => {
    console.log('🚀 Starting automated call campaign...');
    
    // We will schedule the first call for 2 minutes from now
    const baseScheduleTime = new Date(new Date().getTime() + 3 * 60000); 
    
    let delayInMinutes = 0;

    for (const business of businessList) {
        // Add a delay for each new call
        const scheduledTime = new Date(baseScheduleTime.getTime() + delayInMinutes * 60000);
        
        // We will add 5 minutes to the delay for the next call
        delayInMinutes += 7;

        console.log(`Scheduling call for ${business.name} at: ${scheduledTime.toLocaleTimeString()}`);
        await makeScheduledCall(business.number, business.assistantId, scheduledTime);
    }
    console.log('✅ Campaign finished scheduling calls.');
};

module.exports = { router, startCallCampaign };