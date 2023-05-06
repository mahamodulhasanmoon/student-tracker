const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const middleware = [
    morgan('dev',
    cors(),
    express.json())
]
module.exports= middleware