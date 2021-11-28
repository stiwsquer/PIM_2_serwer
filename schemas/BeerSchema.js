const { EntitySchema } = require('typeorm');
const { Beer } = require('../models/Beer');

module.exports = new EntitySchema({
  name: 'Beer',
  target: Beer,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    name: {
      type: 'varchar',
    },
  },
});
