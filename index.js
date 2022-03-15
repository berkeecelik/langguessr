// const franc = require("franc");
// const langs = require("langs");
import { franc } from "franc";
import langs from "langs";
import { concatWords } from "./arrayUtils.js";

const words = process.argv.slice(2);

const sentence = concatWords(words); 
const langCode = franc(sentence);
const finalResult = langs.where("3", langCode).name;

console.log(finalResult);