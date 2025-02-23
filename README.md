# **Note App (MERN + WebSockets + Redis + MongoDB)**

This is a full-stack Note application built with React, Node.js, WebSockets, Redis, and MongoDB.

## **Features**

- Real-time Note updates using WebSockets
- Notes storage in Redis cache for quick retrieval
- Automatic migration of Notes to MongoDB when cache exceeds 50 items
- REST API for fetching all Notes
- Responsive UI with React and Tailwind CSS

---

## **Project Setup**

### **1. Clone the Repository**

```sh
git clone https://github.com/dattahari7/Note-App.git
cd Note-App
```

### **2. Backend Setup**

#### Install dependencies

```sh
cd backend
npm install
```

#### **Set Up Environment Variables (.env)**

This project requires a few environment variables to be set in order to run the app correctly. These variables define the REDIS and MongoDB configuration for backend.

```sh
PORT=5000
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_USERNAME=default
REDIS_PASSWORD=your_redis_password
MONGO_URI=your_mongodb_uri
MONGO_DB_NAME=assignment
MONGO_COLLECTION_NAME=assignment_dattahari
```

#### **Start the Backend Server**

```sh
npm run dev
```

### **3. Frontend Setup**

#### **Install dependencies**

```sh
cd frontend
npm install
```

#### **Set Up Environment Variables (.env)**

This project requires a few environment variables to be set in order to run the app correctly. These variables define the API and Socket URLs used in the frontend.

```sh
NOTE_APP_SOCKET_URL=your_socket_url
NOTE_APP_API_URL=your_api_url
```

#### **Start the Frontend Server**

```sh
npm start
```

## **API Endpoints**

### **1. Fetch All Tasks**

```http
GET /api/fetchAllTasks
```

#### **Response:**

```json
[
  { "id": "1", "content": "Note 1" },
  { "id": "2", "content": "Note 2" }
]
```

### **2. WebSocket Events**

#### **Client to Server: Add Task**

```json
{
  "event": "add",
  "data": "New Task"
}
```

#### **Server to Client: Task Added**

```json
{
  "event": "taskAdded",
  "data": { "id": "timestamp", "content": "New Task" }
}
```
