import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { readdirSync } from "fs";

// cannot use import syntax
const morgan = require("morgan");
require("dotenv").config();
