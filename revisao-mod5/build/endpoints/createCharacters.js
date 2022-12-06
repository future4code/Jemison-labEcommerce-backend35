"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacter = void 0;
const data_1 = require("../data");
function createCharacter(req, res) {
    const { name, gender, description } = req.body;
    data_1.characters.push({
        id: Date.now(),
        name,
        gender,
        description
    });
    res.end(201).end();
}
exports.createCharacter = createCharacter;
//# sourceMappingURL=createCharacters.js.map