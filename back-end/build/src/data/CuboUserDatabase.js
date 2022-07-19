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
exports.CuboUserData = void 0;
const MainDatabaseConnection_1 = require("./MainDatabaseConnection");
class CuboUserData extends MainDatabaseConnection_1.MainDatabaseConnection {
    constructor() {
        super();
        this.TABLE_NAME = "Cubo_Users";
        this.insertUser = (newCuboUser) => __awaiter(this, void 0, void 0, function* () {
            try {
                let newUser = {
                    first_name: newCuboUser.firstName,
                    last_name: newCuboUser.lastName,
                    participation: newCuboUser.participation
                };
                yield this.connection(this.TABLE_NAME).insert(newUser);
            }
            catch (error) {
                if (error.sqlMessage)
                    throw new Error(error.sqlMessage);
                else {
                    throw new Error("Error acessing database");
                }
            }
        });
        this.selectAllUsers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield this.connection(this.TABLE_NAME).select('id').select('first_name as firstName').select('last_name as lastName').select('participation');
                let totalParticipation = yield this.connection(this.TABLE_NAME).sum('participation as totalParticipation');
                let response = {
                    users: users,
                    totalParticipation: totalParticipation[0].totalParticipation
                };
                return response;
            }
            catch (error) {
                if (error.sqlMessage)
                    throw new Error(error.sqlMessage);
                else {
                    throw new Error("Error acessing database");
                }
            }
        });
        this.deleteAllUsers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection.schema.dropTable(this.TABLE_NAME);
                yield this.connection.schema.createTable(this.TABLE_NAME, function (table) {
                    table.increments('id').primary();
                    table.string("first_name", 255).notNullable();
                    table.string("last_name", 255).notNullable();
                    table.integer("participation").notNullable();
                });
            }
            catch (error) {
                if (error.sqlMessage)
                    throw new Error(error.sqlMessage);
                else {
                    throw new Error("Error accessing database");
                }
            }
        });
    }
}
exports.CuboUserData = CuboUserData;
//# sourceMappingURL=CuboUserDatabase.js.map