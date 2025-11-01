# 🧠 Node.js — Setup & MVC Project Structure

## 📦 1. Node.js Installation & Setup

**Installed Node.js and verified installation:**
```bash
node -v
npm -v
Created a new project folder and initialized it:

bash
Copy code
npm init -y
Added basic files like index.js.

🧾 2. First Node.js Program
Created a simple JavaScript file (index.js):

js
Copy code
console.log("Hello, Node.js!");
To run the file:

bash
Copy code
node index.js
🧰 3. .gitignore File
Created a .gitignore file to ignore unnecessary files from Git tracking:

bash
Copy code
node_modules/
dist/
.env
⚙️ 4. Converting JS to TypeScript
Installed TypeScript:

bash
Copy code
npm install -g typescript
Initialized TypeScript configuration:

bash
Copy code
tsc --init
Converted index.js → index.ts

ts
Copy code
const message: string = "Hello from TypeScript!";
console.log(message);
Compiled and ran:

bash
Copy code
tsc index.ts
node index.js
🧩 5. MVC Architecture Overview
MVC (Model-View-Controller) is a design pattern that separates application logic into layers:

Component	Purpose
Model	Handles data and database logic.
View	(Optional in backend) Handles UI or response format.
Controller	Handles HTTP requests/responses and calls services.

🧱 6. Folder Structure
Example structure for a clean Node.js project:

pgsql
Copy code
project/
├── controllers/
│   └── userController.ts
├── services/
│   └── userService.ts
├── routes/
│   └── userRoutes.ts
├── models/
│   └── userModel.ts
├── app.ts
├── package.json
├── tsconfig.json
└── .gitignore
⚙️ 7. Example Flow
🧑‍💼 Controller
Handles request/response.

ts
Copy code
import { Request, Response } from "express";
import { getAllUsers } from "../services/userService";

export const getUsers = (req: Request, res: Response) => {
  const users = getAllUsers();
  res.json(users);
};
🧩 Service
Handles business logic.

ts
Copy code
export const getAllUsers = () => {
  return ["John", "Jane", "Doe"];
};
🛣️ Route
Connects HTTP endpoints to controllers.

ts
Copy code
import express from "express";
import { getUsers } from "../controllers/userController";
const router = express.Router();

router.get("/users", getUsers);
export default router;
🚀 8. Running the Project
Start the TypeScript compiler in watch mode:

bash
Copy code
tsc --watch
Run your app:

bash
Copy code
node dist/app.js
✅ You Learned Today
Installing and setting up Node.js

Running your first JS program

Creating a .gitignore file

Converting JS → TypeScript

Understanding MVC architecture

Creating controllers, routes, modules, and services
