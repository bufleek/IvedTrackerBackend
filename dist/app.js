"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_1 = __importDefault(require("./socket"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res) => {
    res.send('home');
});
app.listen(process.env.PORT || 8080, () => { console.log("express running on 8080"); });
socket_1.default();
