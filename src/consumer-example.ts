import { LogPilotConsumer } from "logpilot-lite-client";
import dotenv from "dotenv";

dotenv.config();

const consumer = new LogPilotConsumer(
	"consumer-example-monitor",
	process.env.LOGPILOT_CHANNEL || "refresh-token-job",
	"sqlite"
);

async function monitorLogs() {
	try {
		const logs = await consumer.consume();
		if (logs && logs.length > 0) {
			logs.map((log: any) => console.log("🧭 Consumed log:", log));
		}
	} catch (err) {
        console.error("consumed error: " + err);
    }
}

setInterval(monitorLogs, 7000);