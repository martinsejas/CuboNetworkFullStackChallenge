"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ValidateSchema_1 = require("./controller/validations/ValidateSchema");
const CuboUserSchema_1 = require("./controller/validations/CuboUserSchema");
const CuboUserBusiness_1 = require("./business/CuboUserBusiness");
const CuboUserController_1 = require("./controller/CuboUserController");
const CuboUserDatabase_1 = require("./data/CuboUserDatabase");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const cuboUserBusiness = new CuboUserBusiness_1.CuboUserBusiness(new CuboUserDatabase_1.CuboUserData());
const cuboUserController = new CuboUserController_1.CuboUserController(cuboUserBusiness);
app.post("/users", (0, ValidateSchema_1.validateSchema)(CuboUserSchema_1.CuboUserSchema), cuboUserController.createUser);
app.get("/users", cuboUserController.getAllUsers);
app.delete("/users", cuboUserController.deleteAllUsers);
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http:localhost:${address.port}`);
    }
    else {
        console.log("Error starting server");
    }
});
//# sourceMappingURL=index.js.map