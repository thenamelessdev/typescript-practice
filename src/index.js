import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";
const filename = fileURLToPath(import.meta.url);
const foldername = dirname(filename);
const app = express();
const TsConfPatch = join(foldername, "/../tsconfig.json");
const TsConf = readFileSync(TsConfPatch, "utf-8");
const TsConfJson = JSON.parse(TsConf);
console.log(TsConfJson);
app.get("/", (req, res) => {
    res.sendFile(foldername + "/public/main.html");
});
app.get("/tsconf", (req, res) => {
    res.json(TsConfJson);
});
app.listen(8080);
