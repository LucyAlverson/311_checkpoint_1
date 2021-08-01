GET /users

router.get('/users', function (req, res) {
    res.send('all users')
  })

GET /users/;id

router.get('/users/:id', function (req, res) {
    res.send('user.id')
  })


POST /users

// POST method route
 router.post('/users/:id', function (req, res) {
    res.json(user)('POST request to the homepage')
  })


PUT /users/;id

// POST method route
router.post('/users', function (req, res) {
    res.send('POST request to the homepage')
  })

DELETE /users/;id
//Delete one user by its id
router.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })