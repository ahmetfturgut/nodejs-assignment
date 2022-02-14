const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');
const app = require('../../src/loaders/express');
const recordRepository = require('../../src/repository/recordRepository');
const { config } = require('../../src/config/config');
const setupTestDBAndConnection = require('../utils/setupTestDBAndConnection');

setupTestDBAndConnection();

describe('Record API', () => {
	describe('POST /api/v1/record/search', () => {

		let filter;

		beforeEach(async () => {
			filter = {
				"startDate": "2016-11-26",
				"endDate": "2018-02-02",
				"minCount": 2500,
				"maxCount": 3000
			};
		});

		it('API test => should fetch records when request is ok', done => {
			request(app)
				.post('/api/v1/record/search')
				.send(filter)
				.expect(httpStatus.OK)
				.end((err, res) => {
					expect(res.body).to.have.a.property('code');
					expect(res.body).to.have.a.property('msg');
					expect(res.body).to.have.a.property('records');
					const { code, msg, records } = res.body;
					expect(code).to.be.equal(0);
					expect(msg).to.include('Success');
					done(err);
				});
		});


		it('Validation test => startDate should report bad format', done => { 
			filter.startDate = "01-01-2022" 
			request(app)
				.post('/api/v1/record/search')
				.send(filter)
				.expect(httpStatus.UNPROCESSABLE_ENTITY)
				.end((err, res) => { 
					expect(res.body).to.have.a.property('errors');
					const { message } = res.body.errors[0];
					expect(message).to.include('\"startDate\" must be in YYYY-MM-DD format');
					done(err);
				});
		});



	});
});