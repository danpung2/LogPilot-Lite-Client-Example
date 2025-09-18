# 🚀 LogPilot-Lite Example App

This project is a sample application that demonstrates how to use LogPilot-Lite.
It simulates a background task (cleaning up expired refresh tokens) that runs periodically.
If the task fails (with a 50% chance), the error is sent to LogPilot-Lite as a log entry.
The monitoring simulation periodically reads logs stored in LogPilot-Lite.

---

## 📦 Project Structure

```
LogPilot-Lite-Client-Example/
├── src/
│   └── producer-example.ts           # Example Producer Code
│   └── consumer-example.ts           # Example Consumer Code
├── .env                              # Config
├── package.json
└── README.md
```

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory:

```env
LOGPILOT_SERVER_URL=localhost:50051
LOGPILOT_CHANNEL=my-job
```

---

## 📥 Install Dependencies

Install the LogPilot-Lite client:

```bash
npm install logpilot-lite-client
```

---

## 🚀 Run the Example

Start the simulation:

```bash
// producer - run my job
npx tsx src/producer-example.ts

// consumer - monitoring my job
npx tsx src/consumer-example.ts
```

This will:

- Simulate a token cleanup job every 5 seconds.
- Randomly fail 50% of the time.
- Send log entries to LogPilot-Lite if the task fails.

- Simulate a monitoring that token cleanup job every 7 seconds.

---

## 🔍 Log Example Sent to LogPilot-Lite

```json
{
  "channel": "my-job",
  "level": "ERROR",
  "message": "Token cleanup job failed",
  "meta": {
    "attemptId": "ku3b14wtevl",
    "reason": "Database timeout"
  },
  "storage": "sqlite"
}
```

## 🔍 Log Example Received from LogPilot-Lite

```json
{
  "channel": "my-job",
  "level": "ERROR",
  "message": "Token cleanup job failed",
  "meta": { "attemptId": "ku3b14wtevl", "reason": "Database timeout" },
  "timestamp": 1750260125846
}
```

> See full documentation for `LogPilot-Lite` in the LogPilot-Lite main repository.

👉 [LogPilot-Lite](https://github.com/danpung2/LogPilot-Lite)

👉 [LogPilot-Lite-Client](https://github.com/danpung2/LogPilot-Lite-Client)
