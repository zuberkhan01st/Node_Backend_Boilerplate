Node MVC Starter 🚀



A production-ready Node.js MVC boilerplate with Express and MongoDB to kickstart your backend projects.



✨ Features





MVC Architecture: Clean separation of concerns



Express.js: Robust server with middleware



Mongoose: MongoDB object modeling



Environment Variables: .env support



Email Service: SMTP/Brevo integration



Production Ready: Optimized for deployment



JWT Support: Authentication ready



Error Handling: Centralized error management



🛠 Installation

As Global CLI Tool

npm install -g node-mvc-starter
node-mvc-starter create my-app

As Project Dependency

npm install node-mvc-starter
npx node-mvc-starter init



📂 Project Structure

.
├── config/         # Configuration files
│   ├── db.js       # Database connection
│   └── env.js      # Environment setup
├── controllers/    # Business logic
├── models/         # MongoDB schemas
├── routes/         # API endpoints
├── services/       # Reusable services
├── utils/          # Helpers & utilities
├── middlewares/    # Custom middleware
├── tests/          # Test cases
├── .env.example    # Environment template
├── app.js          # Main application
└── package.json



⚡ Quick Start





Create new project

npx node-mvc-starter my-project
cd my-project





Install dependencies

npm install





Setup environment

cp .env.example .env
# Edit .env with your credentials





Start development server

npm run dev



🔧 Configuration

.env Example

# Server
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/yourdb

# Email (SMTP)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your@email.com
SMTP_PASS=yourpassword
SMTP_FROM=no-reply@yourdomain.com

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d



🚀 Available Scripts







Command



Description





npm start



Start production server





npm run dev



Start dev server (nodemon)





npm run lint



Run ESLint





npm run format



Format code with Prettier





npm test



Run tests



📦 Included Middlewares





Body parser (JSON/URL-encoded)



CORS configuration



Helmet security



Rate limiting



Request logging



Error handling



🤝 Contributing





Fork the repository



Create your feature branch (git checkout -b feature/AmazingFeature)



Commit your changes (git commit -m 'Add some AmazingFeature')



Push to the branch (git push origin feature/AmazingFeature)



Open a Pull Request

Please read CONTRIBUTING.md for details on our code of conduct.



📄 License

This project is licensed under the MIT License - see the LICENSE file for details.



📬 Contact

Zuber Khan - @zkcreations
Maintained by: ZK Creations

🔗 NPM Package: https://www.npmjs.com/package/node-mvc-starter
