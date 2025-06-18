# 🚀 LogPilot-Lite Example App

이 프로젝트는 **LogPilot-Lite**를 사용하는 예제 앱입니다.  
주기적으로 실행되는 백그라운드 작업(만료된 리프레시 토큰 정리)을 시뮬레이션하며,  
작업이 50% 확률로 실패할 경우, 그 오류를 LogPilot-Lite에 로그로 전송합니다.  
모니터링 시뮬레이션은 LogPilot-Lite에 저장된 로그를 주기적으로 읽습니다.

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
npm install "git+https://github.com/danpung2/LogPilot-Lite-Client.git"
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

> See full documentation for `LogPilotClient` in the LogPilot-Lite main repository.
