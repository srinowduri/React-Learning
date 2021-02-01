'use strict';
module.exports = {
  get: (url) => {
    return Promise.resolve({
      data: [
        {
          id: 0,
          name: 'iioog'
        },
        {
          id: 1,
          name: 'bjdf'
        }
      ]
    });
  },
  post: (url) => {
    return Promise.resolve({
      data: [
        {
          id: 0,
          name: 'ABC',
          level: 'Basics'
        }
      ]
    })
  }
}

