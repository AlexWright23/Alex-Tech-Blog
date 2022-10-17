const router = require('express').Router();
const { Post, User } = require('../models');
const sequelize = require('../config/connection');