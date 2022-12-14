"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const createCharacter_1 = __importDefault(require("./endpoints/createCharacter"));
const deleteCharacter_1 = __importDefault(require("./endpoints/deleteCharacter"));
const getAllCharacters_1 = __importDefault(require("./endpoints/getAllCharacters"));
app_1.app.get('/character', getAllCharacters_1.default);
app_1.app.put('/character', createCharacter_1.default);
app_1.app.delete('/character/:id', deleteCharacter_1.default);
//# sourceMappingURL=index.js.map