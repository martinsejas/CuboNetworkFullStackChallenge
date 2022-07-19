"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainDatabaseConnection = void 0;
const knex_1 = __importDefault(require("knex"));
class MainDatabaseConnection {
    constructor() {
        this.schemaName = process.env.DB_NAME;
        this.connection = (0, knex_1.default)({
            client: "mysql",
            connection: {
                database: process.env.DB_NAME,
                password: process.env.DB_PASSWORD,
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                port: Number(process.env.DB_PORT),
                multipleStatements: true
            }
        });
    }
}
exports.MainDatabaseConnection = MainDatabaseConnection;
//# sourceMappingURL=MainDatabaseConnection.js.map