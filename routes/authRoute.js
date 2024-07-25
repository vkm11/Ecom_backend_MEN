import  express  from "express";
import { registerController, loginController, testController, forgotPasswordController } from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";

// Router Object
const router = express.Router()

// Routing
// REGISTER || METHOD POST
router.post('/register', registerController)

// Login || POST
router.post('/login', loginController)

// Forgot Password || POST
router.post('/forgot-password', forgotPasswordController)

// test routes
router.get('/test', requireSignIn, isAdmin, testController)

// test routes
router.get('/user-auth', requireSignIn, (req, res)=>{
    res.status(200).send({ok : true});
})
export default router