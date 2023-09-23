import  express  from "express";
import { registerController, loginController, testController } from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";

// Router Object
const router = express.Router()

// Routing
// REGISTER || METHOD POST
router.post('/register', registerController)

// Login || POST
router.post('/login', loginController)

// test routes
router.get('/test', requireSignIn, isAdmin, testController)

export default router