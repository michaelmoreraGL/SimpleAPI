import request from 'supertest';

  const url = 'http://localhost:9999/api';

describe('app.test', () => {
    test('initiate', () => {
      expect('1').toEqual('1');
    });
});

describe('Test Get Endpoint', () => {
  it('Get Hit with num 1', async () => {
    const res = await request(url)
      .get('/foo/' + 1)
    expect(res.statusCode).toEqual(501)
  })
  it('Get Hit with num 2', async () => {
    const res = await request(url)
      .get('/foo/' + 2)
    expect(res.statusCode).toEqual(200)
  })
  it('Get Hit with num 4', async () => {
    const res = await request(url)
      .get('/foo/' + 4)
    expect(res.statusCode).toEqual(200)
  })
  it('Get Hit with num 6', async () => {
    const res = await request(url)
      .get('/foo/' + 6)
    expect(res.statusCode).toEqual(200)
  })
})

describe('Test Post Endpoint', () => {
  it('Post Hit with num 1', async () => {
    const res = await request(url)
      .post('/foo/').send({'id':1})
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('bar');
  })
  it('Post Hit with num 2', async () => {
    const res = await request(url)
      .post('/foo/').send({'id':2})
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('bass');
  })
  it('Post Hit with num 6', async () => {
    const res = await request(url)
      .post('/foo/').send({'id':6})
    expect(res.statusCode).toEqual(200)
  })
  it('Post Hit with no num', async () => {
    const res = await request(url)
      .post('/foo/').send({'id':'this'})
    expect(res.statusCode).toEqual(400)
  })
})