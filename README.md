# Walk Me!  (name TBC)

## Getting Started

## Wireframes

## API
/api/v1/register
//adding a user - registering them
POST (req, res) registerUser {

}

/api/v1/login
//logging in a user and getting user info from DB
GET (res) logIn {

}


/api/v1/walks ------
// let us see all walks on the page

GET walks (res) {
  id
  title
  img
  coord {
    tart: {lat, long} 
    end: {lat, long}0
  }
}


/api/v1/walk/:name
//shows individual walk with all details and comments

GET walk (res) {
  id
  title
  description
  duration
  distance
  suburb
  dog-friendly
  difficulty-rating
  img
  coord {
    start: {lat, long} 
    end: {lat, long}0
  }
  comment [
    {
      date: 'date string'
      username: 'string'
      text: 'string'
      img: 'string'
      enjoyment-rating: integer
    }
  ]
}

POST comment (req, res) {
  comment {
      date: 'date string'
      username: 'string'
      text: 'string'
      img: 'string'
      enjoyment-rating: integer
    }
    
}


/api/v1/walks/saved
//shows the logged in persons saved walks

GET user (res) {
  id
  username
}

GET user-walk (res) {
  user_id
  saved_walks {
    walk_id
  }
   {
  completed_walks {
   walk_id
  }
}


## Global State
The global state object looks a bit like this:

```javascript

const globalState = {
  search: {
    lat: float(7),
    long: float(7),
    text: string,
  },
  walks: [{
    0: {
      id: int,
      title: string,
      description: string,
      duration: int,
      distance: int,
      suburb: string,
      dogFriendly: bool,
      difficultyRating: int,
      path: string,
      img: string,
      coords: {
        start: string({lat, long})
        end: string({lat, long})
      },
      comments: [
        0: {
          date: dateString,
          username: string,
          text: string,
          img: string,
          enjoymentRating: int,
        }
      ]
    }
  }],
  auth: {
    loggedIn: bool,
    user: {
      id: int,
      username: string,
    }
  },
  completedWalks: [integer, integer],
  savedWalks: [integer, integer],
}

```

## Database

![database diagram](/screenshots/dbDiagram.png)
