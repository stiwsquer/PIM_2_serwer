const { app } = require('../loaders/loaders');
// const { Like } = require('typeorm');
// const { getConnection } = require('typeorm');
// const { Beer } = require('../models/Beer');

// app.get('/beer', paginatedResults(), async (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   const connection = getConnection();
//   const beerRepository = connection.getRepository(Beer);
//   res.paginatedResults.results = await beerRepository.find({
//     where: [
//       {
//         name: Like(`%`),
//       },
//     ],
//     skip: req.startIndex,
//     take: req.limit,
//   });

//   return res.json(res.paginatedResults);
// });

// app.get('/beer/:name', paginatedResults(), async (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   const { name } = req.params;
//   const connection = getConnection();
//   const beerRepository = connection.getRepository(Beer);
//   res.paginatedResults.results = await beerRepository.find({
//     where: [
//       {
//         name: Like(`%${name}%`),
//       },
//     ],
//     skip: req.startIndex,
//     take: req.limit,
//   });

//   return res.json(res.paginatedResults);
// });

// function paginatedResults() {
//   return async (req, res, next) => {
//     const results = {};
//     if (!req.query.page || !req.query.limit) {
//       res.paginatedResults = results;
//       return next();
//     }
//     const page = parseInt(req.query.page, 10);
//     const limit = parseInt(req.query.limit, 10);

//     const startIndex = (page - 1) * limit;
//     const endIndex = page * limit;

//     const connection = getConnection();
//     const beerRepository = connection.getRepository(Beer);
//     const count = await beerRepository.count();

//     if (endIndex < count) {
//       results.next = {
//         page: page + 1,
//         limit,
//       };
//     }

//     if (startIndex > 0) {
//       results.previous = {
//         page: page - 1,
//         limit,
//       };
//     }

//     req.startIndex = startIndex;
//     req.limit = limit;
//     res.paginatedResults = results;
//     return next();
//   };
// }

const beers = [
  {
    id: '2e5c0375-71c2-4a04-9120-7ec54642fe29',
    name: 'Abita Amber',
  },
  {
    id: '041497a5-6fdb-4b66-a80f-c200e050d4c3',
    name: 'Augustiner Amber Lager',
  },
  {
    id: '51824b44-c65e-4058-b491-5bf60b7e7d62',
    name: 'Bass Ale',
  },
  {
    id: '2b005f86-5af9-445c-9216-53d28628e09a',
    name: 'Blatz Beer',
  },
  {
    id: '4c689bd1-0b44-49f7-ae46-c08569147dc9',
    name: 'Corona Premier',
  },
  {
    id: '5a44d0e6-f9d1-4eed-ad2a-add5fcc67ffd',
    name: 'Deschutes Mirror Pond Ale',
  },
  {
    id: '5845a365-6185-410b-b5a0-2bb069a14688',
    name: 'Efes Pils',
  },
  {
    id: 'a9972c5d-5e4b-41ce-a3f5-91dfb545325d',
    name: 'Flying Dog In Heat Wheat',
  },
  {
    id: '5d3239ce-1802-4c67-9239-7ae35b82da1d',
    name: 'Genesee Red',
  },
  {
    id: '9cfb15b4-4ce9-419b-b49b-cfa312d13a3f',
    name: 'Harbin',
  },
  {
    id: 'e37f08ca-d7c4-497a-81e8-4a29df436435',
    name: 'Iron City',
  },
  {
    id: 'c02ae0e9-18c5-4b3b-9107-39193814b861',
    name: 'Lech',
  },
  {
    id: '7e249358-e5e5-4dc3-bb86-3a824fa3a61f',
    name: 'Miller Lite',
  },
  {
    id: '1af61c6a-f505-41ae-811d-501432dd2fe5',
    name: 'Natural Light',
  },
  {
    id: 'a0180599-a200-4bf4-ae6e-2472e7965be4',
    name: 'Pabst Blue Ribbon',
  },
  {
    id: 'd2fd7fbc-55fc-40bb-b305-d12026ef1bd3',
    name: 'Schlitz Light',
  },
  {
    id: '9f7c46cb-8d5d-4db6-bd92-04cc94a55963',
    name: 'Southpaw Light',
  },
  {
    id: '064341ed-4566-4754-840d-b5244f72213d',
    name: 'Widmer Hefeweizen',
  },
  {
    id: '92e22277-bbaf-4616-94b2-3af2e93e55d4',
    name: 'Yuengling Lord Chesterfield Ale  ',
  },
  {
    id: '6259a19b-a877-41a8-9123-316942aeebb6',
    name: 'Sierra Nevada Anniversary Ale',
  },

  {
    id: '2e5c0375-7sdf1c2-4a04-9120-7ec54642fe29',
    name: 'Abita Amber',
  },
  {
    id: '04sdf1497a5-6fdb-4b66-a80f-c200e050d4c3',
    name: 'Augustiner Amber Lager',
  },
  {
    id: '51824b44-sdfc65e-4058-b491-5bf60b7e7d62',
    name: 'Bass Ale',
  },
  {
    id: '2b005sff86-5af9-445c-9216-53d28628e09a',
    name: 'Blatz Beer',
  },
  {
    id: '4c689sdfsdbd1-0b44-49f7-ae46-c08569147dc9',
    name: 'Corona Premier',
  },
  {
    id: '5a44d0e6-f9d1-4eed-ad2sdfa-add5fcc67ffd',
    name: 'Deschutes Mirror Pond Ale',
  },
  {
    id: '5845a365-sdfs6185-410b-b5a0-2bb069a14688',
    name: 'Efes Pils',
  },
  {
    id: 'a9972sdfsc5d-5e4b-41ce-a3f5-91dfb545325d',
    name: 'Flying Dog In Heat Wheat',
  },
  {
    id: '5d3239cesdf-1802-4c67-9239-7ae35b82da1d',
    name: 'Genesee Red',
  },
  {
    id: '9cfb15b4sdf-4ce9-419b-b49b-cfa312d13a3f',
    name: 'Harbin',
  },
  {
    id: 'e37f08ca-d7c4-4sdf97a-81e8-4a29df436435',
    name: 'Iron City',
  },
  {
    id: 'c02ae0sdfe9-18c5-4b3b-9107-39193814b861',
    name: 'Lech',
  },
  {
    id: '7e249358-e5e5-4dc3-bb86-3a824sdffa3a61f',
    name: 'Miller Lite',
  },
  {
    id: '1af61sdfc6a-f505-41ae-811d-501432dd2fe5',
    name: 'Natural Light',
  },
  {
    id: 'a0180599-asdf200-4bf4-ae6e-2472e7965be4',
    name: 'Pabst Blue Ribbon',
  },
  {
    id: 'd2fd7fbc-55fc-40bb-b305-d12026efsdf1bd3',
    name: 'Schlitz Light',
  },
  {
    id: '9f7c46sdfcb-8d5d-4db6-bd92-04cc94a55963',
    name: 'Southpaw Light',
  },
  {
    id: '064341ed-4566-4754-840d-b5sdf244f72213d',
    name: 'Widmer Hefeweizen',
  },
  {
    id: '92e2227sdf7-bbaf-4616-94b2-3af2e93e55d4',
    name: 'Yuengling Lord Chesterfield Ale  ',
  },
  {
    id: '6259a19b-a877-41sdfa8-9123-316942aeebb6',
    name: 'Sierra Nevada Anniversary Ale',
  },
];

app.get('/beer', paginatedResults(), async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  return res.json(res.paginatedResults);
});

app.get('/beer/:name', paginatedResults(), async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  return res.json(res.paginatedResults);
});

function paginatedResults() {
  return async (req, res, next) => {
    const { name } = req.params;
    const results = {};
    if (!req.query.page || !req.query.limit) {
      if (name)
        results.results = beers.filter((beer) => beer.name.includes(name));
      else results.results = beers;
      res.paginatedResults = results;
      return next();
    }

    const page = parseInt(req.query.page, 10);
    const limit = parseInt(req.query.limit, 10);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const searchedBeers = name
      ? beers.filter((beer) =>
          beer.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        )
      : beers;
    results.results = searchedBeers.slice(startIndex, endIndex);

    if (endIndex < searchedBeers.length) {
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
