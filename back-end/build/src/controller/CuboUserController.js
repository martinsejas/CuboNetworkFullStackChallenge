"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuboUserController = void 0;
class CuboUserController {
    constructor(cuboUserBusiness) {
        this.cuboUserBusiness = cuboUserBusiness;
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { firstName, lastName, participation } = req.body;
                let newCuboUser = {
                    firstName,
                    lastName,
                    participation
                };
                yield this.cuboUserBusiness.createNewUser(newCuboUser);
                res.status(201).send("User successfully created!");
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
        this.getAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let cuboUsers = yield this.cuboUserBusiness.getAllUsers();
                res.status(200).send(cuboUsers);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
        this.deleteAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.cuboUserBusiness.deleteAllUsers();
                res.status(200).send("Users deleted!");
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
}
exports.CuboUserController = CuboUserController;
//# sourceMappingURL=CuboUserController.js.map