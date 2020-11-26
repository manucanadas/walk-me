exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('walks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('walks').insert([
        {
          id: 1,
          title: 'Makara Walkway',
          description:
            'Makara Walkway is a popular half-day trail that soars high above the rocky shorelines of Makara Beach',
          duration: 1,
          distance: 3,
          suburb: 'Karori',
          difficulty: 5,
          path:
            '[[-122.48369693756104, 37.83381888486939],[-122.48348236083984, 37.83317489144141],[-122.48339653015138, 37.83270036637107],[-122.48356819152832, 37.832056363179625]]',
          img:
            'https://www.wellingtonregionaltrails.com/assets/Trails/Elements/Images/Makara-walkway-view__FocusFillWzcyMCw0NjgsInkiLDVd.jpg',
          coords: '-41.232617, 174.692406'
        },
        {
          id: 2,
          title: 'Northern Walkway',
          description:
            'The Northern Walkway is a half-day journey along Wellington’s outer Green Belt, from Johnsonville to the Botanic Gardens via Te Ahumairangi Hill (Tinakori Hill), Trelissick Park and Mount Kaukau.',
          duration: 2,
          distance: 6,
          suburb: 'Johnsonville',
          difficulty: 2,
          path:
            '[[-122.48369693756104, 37.83381888486939],[-122.48348236083984, 37.83317489144141],[-122.48339653015138, 37.83270036637107],[-122.48356819152832, 37.832056363179625]]',
          img:
            'https://cdn-assets.alltrails.com/uploads/photo/image/26349935/extra_large_8028e442d50e05abf799fbea94115730.jpg',
          coords: '-41.247232, 174.773512'
        },
        {
          id: 3,
          title: 'Mackenzie road track',
          description: 'Some steep steps and a zigzagging trail to meet up with Main Ridge Track.',
          duration: 3,
          distance: 9,
          suburb: 'Eastbourne',
          difficulty: 3,
          path:
            '[[-122.48369693756104, 37.83381888486939],[-122.48348236083984, 37.83317489144141],[-122.48339653015138, 37.83270036637107],[-122.48356819152832, 37.832056363179625]]',
          img:
            'https://www.wellingtonregionaltrails.com/assets/Trails/Elements/Images/east-harbour-regional-park-kaeaea-track-summit__FocusFillWzcyMCw0NjgsInkiLDVd.jpg',
          coords: '-41.297824, 174.904689'
        }
      ])
    })
}
