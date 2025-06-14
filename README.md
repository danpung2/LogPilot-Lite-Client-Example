# 🚀 LogPilot-Lite Example App

이 프로젝트는 **LogPilot-Lite**를 사용하는 예제 앱입니다.  
주기적으로 실행되는 백그라운드 작업(만료된 리프레시 토큰 정리)을 시뮬레이션하며,  
작업이 50% 확률로 실패할 경우, 그 오류를 LogPilot-Lite에 로그로 전송합니다.  
로그 전송은 공식 gRPC 클라이언트를 통해 이루어집니다.

---

## 📦 Project Structure

```
LogPilot-Lite-Client-Example/
├── install-client.js      # GitHub Private Repo에서 LogPilot-Lite Client 설치
├── src/
│   └── index.ts           # Example App Main Code
├── .env                   # 환경 변수 파일 (서버 주소 등)
├── package.json
└── README.md
```

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory:

```env
GITHUB_TOKEN=ghp_abc123yourtoken
LOGPILOT_GRPC_URL=localhost:50051
```

> The `GITHUB_TOKEN` must have at least **read access** to the LogPilot-Lite private repository.

---

## 📥 Install Dependencies

Install the LogPilot-Lite gRPC client and other dependencies:

```bash
node install-client.js
npm install
```

---

## 🚀 Run the Example

Start the simulation:

```bash
npx tsx src/index.ts
```

This will:

- Simulate a token cleanup job every 5 seconds.
- Randomly fail 50% of the time.
- Send log entries to LogPilot-Lite if the task fails.

---

## 🔍 Log Example Sent to LogPilot-Lite

```json
{
  "channel": "token-cleanup",
  "level": "ERROR",
  "message": "Token cleanup job failed",
  "meta": {
    "jobId": "cleanup-12345",
    "error": "Simulated failure"
  },
  "storage": "sqlite"
}
```

> See full documentation for `LogPilotClient` in the LogPilot-Lite main repository.
