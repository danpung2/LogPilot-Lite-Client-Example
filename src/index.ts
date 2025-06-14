import { LogPilotClient } from "logpilot-lite-client";
import dotenv from "dotenv";

dotenv.config();

const client = new LogPilotClient(process.env.LOGPILOT_SERVER_URL || "localhost:50051");

async function simulateTokenCleanup() {
  console.log("⏱️ Job started: cleaning expired refresh tokens...");

  const success = Math.random() > 0.5;

  const datetime = new Date();

  if (!success) {
    console.error(`[${datetime.toISOString()}] ❌ Job failed. Logging error...`);
    await client.send({
      channel: process.env.LOGPILOT_CHANNEL || "refresh-token-job",
      level: "ERROR",
      message: "Failed to clean expired refresh tokens",
      meta: {
        attemptId: Math.random().toString(36).substring(2),
        reason: "Database timeout",
      },
      storage: "sqlite",
    });
  } else {
    console.log(`[${datetime.toISOString()}] ✅ Job succeeded.`);
  }
}

setInterval(simulateTokenCleanup, 5000);
