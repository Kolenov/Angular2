const express = require('express');
const router = express.Router();
const url = require('url');
const _ = require('lodash');

module.exports = (server) => {
	router.get('/courses', (req, res, next) => {
        let url_parts = url.parse(req.originalUrl, true),
            query = url_parts.query,
            queryData = query.query,
            from = query.start,
            to = +query.start + +query.count,
            sort = query.sort,
            queryStr = query.query,
            courses = server.db.getState().courses,
            coursesCount;

        console.log('from', from);
        console.log('to', to);

        coursesCount = courses.length;

        if (courses.length < to) {
            to = courses.length;
        }

        if ((from || from === 0) && to && !queryData) {
            courses = courses.slice(from, to);
		}

        if (queryData) {
            courses = _.filter(courses, function(item) {
                return _.chain(item)
                    .get('name')
                    .toLower()
                    .includes(queryData)
                    .value();
            });

            coursesCount = courses.length;

            if (from && to) {
                courses = courses.slice(from, to);
            }
        }

        console.log(courses);

        res.json({courses: courses, count: coursesCount});
    });

    router.get('/courses/count', (req, res, next) => {
        res.json({count: 1});
    });

    router.get('/courses/users', (req, res, next) => {
        const users = [{
            "id": 1,
            "firstName": "Polly",
            "lastName": "Sosa"
        }, {
            "id": 2,
            "firstName": "Greta",
            "lastName": "Richardson"
        }, {
            "id": 3,
            "firstName": "Deana",
            "lastName": "Bruce"
        }, {
            "id": 4,
            "firstName": "Patsy",
            "lastName": "Bright"
        }, {
            "id": 5,
            "firstName": "Laura",
            "lastName": "Kirby"
        }];
        
        res.json(users);
    });
	
	return router;
};
