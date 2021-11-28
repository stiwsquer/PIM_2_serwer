const { app } = require('../loaders/loaders');
const { Like } = require('typeorm');
const { getConnection } = require('typeorm');
const { Beer } = require('../models/Beer');

app.get('/beer', paginatedResults(), async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const connection = getConnection();
  const beerRepository = connection.getRepository(Beer);
  res.paginatedResults.results = await beerRepository.find({
    where: [
      {
        name: Like(`%`),
      },
    ],
    skip: req.startIndex,
    take: req.limit,
  });

  console.log(res.paginatedResults.results);
  return res.json(res.paginatedResults);
});

app.get('/beer/:name', paginatedResults(), async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const { name } = req.params;
  const connection = getConnection();
  const beerRepository = connection.getRepository(Beer);
  res.paginatedResults.results = await beerRepository.find({
    where: [
      {
        name: Like(`%${name}%`),
      },
    ],
    skip: req.startIndex,
    take: req.limit,
  });

  return res.json(res.paginatedResults);
});

function paginatedResults() {
  return async (req, res, next) => {
    const results = {};
    if (!req.query.page || !req.query.limit) {
      res.paginatedResults = results;
      return next();
    }
    const page = parseInt(req.query.page, 10);
    const limit = parseInt(req.query.limit, 10);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const connection = getConnection();
    const beerRepository = connection.getRepository(Beer);
    const count = await beerRepository.count();

    if (endIndex < count) {
      results.next = {
        page: page + 1,
        limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit,
      };
    }

    req.startIndex = startIndex;
    req.limit = limit;
    res.paginatedResults = results;
    return next();
  };
}
