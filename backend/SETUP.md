# Areeb Backend - Setup & Testing Guide

## Quick Start

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

Copy the example environment file and update it:

```bash
cp .env.example .env
```

Update `.env` with your configuration:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/areeb
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=30d
FRONTEND_URL=http://localhost:5173
```

### 3. Start MongoDB

**Option A: Local MongoDB**
```bash
# Install MongoDB if not already installed
# macOS
brew install mongodb-community
brew services start mongodb-community

# Ubuntu/Debian
sudo apt-get install mongodb
sudo systemctl start mongodb

# Windows
# Download and install from https://www.mongodb.com/try/download/community
```

**Option B: MongoDB Atlas (Cloud)**
1. Create a free account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get your connection string
4. Update `MONGODB_URI` in `.env` with the connection string

### 4. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server should start on `http://localhost:5000`

### 5. Verify Server is Running

```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## Testing the API

### Option 1: Using Postman

1. Import the collection: `Areeb_API_Collection.postman_collection.json`
2. The collection includes all endpoints with example requests
3. Variables are automatically set (token stored after login)
4. Test flow:
   - Register → Login → Complete Onboarding → Assessment → Plan → Progress

### Option 2: Using cURL

**Register a user:**
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "faculty": "Engineering",
    "major": "Computer Science"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

Save the token from the response, then use it in subsequent requests:

**Get current user:**
```bash
curl http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Option 3: Using Thunder Client (VS Code Extension)

1. Install Thunder Client extension in VS Code
2. Import the Postman collection
3. Set the base URL to `http://localhost:5000`
4. Test endpoints

## Complete User Flow Testing

Follow this sequence to test the complete user journey:

### 1. Authentication
```bash
# Register
POST /api/auth/register
{
  "email": "user@example.com",
  "password": "password123",
  "faculty": "Engineering",
  "major": "CS"
}

# Login (save the token)
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "password123"
}
```

### 2. Onboarding
```bash
# Complete onboarding
POST /api/profile/onboarding
{
  "learningGoals": "Become a frontend developer",
  "studyStyle": "visual",
  "availableHours": 10,
  "selectedTrack": "frontend",
  "skillLevel": "intermediate",
  "name": "John Doe"
}
```

### 3. Assessment Flow
```bash
# Submit quick check
POST /api/assessment/quick-check
{
  "answers": {
    "1": "a",
    "2": "b",
    "3": "c",
    "4": "a",
    "5": "c"
  },
  "track": "frontend"
}

# Analyze topics (based on quick check)
POST /api/assessment/analyze-topics

# Get AI quiz questions
GET /api/assessment/ai-quiz

# Submit AI quiz
POST /api/assessment/ai-quiz/submit
{
  "answers": {
    "1": "a",
    "2": "b",
    "3": "b",
    "4": "a",
    "5": "b",
    "6": "a",
    "7": "a",
    "8": "a",
    "9": "a",
    "10": "a"
  }
}

# Get results
GET /api/assessment/results
```

### 4. Learning Plan
```bash
# Create a learning plan
POST /api/plans
{
  "planType": "balanced"
}

# Get current plan
GET /api/plans/current

# Get full roadmap
GET /api/roadmap
```

### 5. Progress Tracking
```bash
# Get progress
GET /api/progress

# Mark task as complete
POST /api/progress/task
{
  "taskId": 1
}

# Update phase progress
PUT /api/progress/phase
{
  "phaseId": 1,
  "progress": 50,
  "completedTopics": ["HTML Basics", "CSS Fundamentals"]
}

# Get achievement stats
GET /api/progress/stats
```

## Troubleshooting

### MongoDB Connection Issues

**Error: `MongooseServerSelectionError: connect ECONNREFUSED`**

Solution:
1. Ensure MongoDB is running: `brew services list` (macOS) or `sudo systemctl status mongodb` (Linux)
2. Check if MongoDB is listening on the correct port (27017)
3. Verify `MONGODB_URI` in `.env` is correct

**Error: Authentication failed**

Solution:
1. If using MongoDB Atlas, ensure your IP is whitelisted
2. Check username and password in connection string
3. Verify database user has correct permissions

### Server Won't Start

**Error: `Port 5000 already in use`**

Solution:
1. Change `PORT` in `.env` to another port (e.g., 5001)
2. Or kill the process using port 5000:
   ```bash
   # macOS/Linux
   lsof -ti:5000 | xargs kill -9
   
   # Windows
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   ```

### JWT Issues

**Error: `Not authorized, token failed`**

Solution:
1. Ensure you're including the token in the Authorization header
2. Format: `Authorization: Bearer <token>`
3. Check if token has expired (default: 30 days)
4. Re-login to get a new token

### Validation Errors

**Error: `Validation failed`**

Solution:
1. Check the `errors` array in the response
2. Ensure all required fields are provided
3. Verify data types match (e.g., email format, password length)

## Database Management

### View Data in MongoDB

**Using MongoDB Compass (GUI):**
1. Download from https://www.mongodb.com/products/compass
2. Connect to `mongodb://localhost:27017`
3. Browse the `areeb` database

**Using MongoDB Shell:**
```bash
mongosh
use areeb
db.users.find().pretty()
db.profiles.find().pretty()
db.assessments.find().pretty()
```

### Reset Database

To start fresh:
```bash
mongosh
use areeb
db.dropDatabase()
```

Then restart the server and re-register users.

## Development Tips

### Hot Reload

The `npm run dev` script uses Nodemon for automatic server restart when files change.

### API Testing Workflow

1. Register → Get token
2. Use token for all subsequent requests
3. Follow the user flow: Auth → Onboarding → Assessment → Plan → Progress
4. Check database to verify data is saved correctly

### Adding New Endpoints

1. Create controller function in `controllers/`
2. Add route in appropriate `routes/` file
3. Import route in `server.js`
4. Test with Postman/cURL
5. Update API documentation

## Production Deployment

### Checklist

- [ ] Change `JWT_SECRET` to a secure random string
- [ ] Set `NODE_ENV=production`
- [ ] Use MongoDB Atlas or hosted MongoDB
- [ ] Set strong passwords for database
- [ ] Enable CORS only for your frontend domain
- [ ] Set up error logging (e.g., Sentry)
- [ ] Add rate limiting
- [ ] Enable HTTPS
- [ ] Set up monitoring

### Environment Variables for Production

```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/areeb?retryWrites=true&w=majority
JWT_SECRET=your-very-long-random-secret-key-min-32-characters
JWT_EXPIRE=30d
FRONTEND_URL=https://yourdomain.com
```

## Next Steps

1. ✅ Backend is complete and functional
2. ⏳ Integrate frontend with backend APIs
3. ⏳ Add real AI integration (OpenAI, Anthropic)
4. ⏳ Implement file upload for avatars
5. ⏳ Add email verification
6. ⏳ Write comprehensive tests
7. ⏳ Deploy to production

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT.io](https://jwt.io/)
- [Postman Documentation](https://learning.postman.com/)

## Support

For issues or questions, check:
1. Server logs for error messages
2. MongoDB logs if database issues
3. Postman console for request/response details
4. Backend README.md for API documentation
