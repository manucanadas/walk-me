exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('comments')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1,
          date: new Date().getTime(),
          user_id: 2,
          text: 'terrible walk, was fuck*n raining the entire time',
          img:
            'https://i2.wp.com/blog.mypacer.com/wp-content/uploads/2019/11/long-walk-3.jpg?resize=500%2C320&ssl=1',
          enjoyment: 1,
          walk_id: 1,
          flagged: true
        },
        {
          id: 2,
          date: new Date().getTime(),
          user_id: 3,
          text: 'Just loved this walk, beautiful views! the trail was easy on my knees',
          img:
            'https://m.economictimes.com/thumb/msid-59295501,width-1200,height-900,resizemode-4,imgsize-307335/magazines/panache/taking-regular-walks-will-help-slow-down-alzheimers-disease-risk/walk_640x480_thinkstock.jpg',
          enjoyment: 5,
          walk_id: 3,
          flagged: false
        },
        {
          id: 3,
          date: new Date().getTime(),
          user_id: 1,
          text: 'Really happy with the range of bird species I saw! lovely',
          img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRXay1zY8jJr-I7MdfEkQHbwG5gIEFfE3FSEHL70n5PzVhx-i169bbS-Fw7oXpI7bDRao-KG29iGDvthY54drNITNpSjwaYgI&usqp=CAU&ec=45732300',
          enjoyment: 3,
          walk_id: 2,
          flagged: false
        }
      ])
    })
}
