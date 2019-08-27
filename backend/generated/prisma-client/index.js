"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Bobae",
    embedded: false
  },
  {
    name: "Clien",
    embedded: false
  },
  {
    name: "Ilbe",
    embedded: false
  },
  {
    name: "Bullpen",
    embedded: false
  },
  {
    name: "Etoland",
    embedded: false
  },
  {
    name: "SLRClub",
    embedded: false
  },
  {
    name: "TodayHumor",
    embedded: false
  },
  {
    name: "Cook",
    embedded: false
  },
  {
    name: "Gasengi",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
