1. Setup Backend
bash
Copy
Edit
cd backend
npm init -y
npm install express mongoose cors dotenv
mkdir models routes controllers
echo. > server.js
echo. > .env


cd ../frontend
npx create-react-app .
npm install axios react-router-dom
npm install react-router-dom

Step 2: Create Folders
bash
Copy
Edit
mkdir src/components src/pages
touch src/App.js src/index.js