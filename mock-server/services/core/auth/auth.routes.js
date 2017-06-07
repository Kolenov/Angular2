// REWRITE EXAMPLE
const express = require('express');
const jsonServer = require('json-server');
const router = express.Router();

router.use(jsonServer.rewriter({
	'/auth/login': '/auth/login',
	'/auth/logout': '/auth/logout',
	'/auth/userInfo': '/auth/userInfo'
}));

module.exports = router;
