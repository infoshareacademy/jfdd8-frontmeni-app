export default [
  {
    food: 'apple',


    calories: [
      {
        type: 'success', value: 60
      },
      {
        type: 'danger', value: 40
      }
    ]}
  ]


export dietPlan = [
  {
    date: '2018-01-01',
    food: [
      {
        name: 'apple',
        calories: 200
      },
      {
        type: 'orange',
        calories: 300
      }
    ],
    excercise: [
      {
        type: 'pushup',
        calories: 20
      }
    ]
  },
  {
    date: '2018-01-03',
    food: [
      {
        type: 'apple',
        calories: 200
      },
      {
        type: 'orange',
        calories: 300
      }
    ],
    excercise: [
      {
        name: 'pushup',
        caloriesBurnt: 20
      }
    ]
  }
]