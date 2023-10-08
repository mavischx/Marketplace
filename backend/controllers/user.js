const User = require('../models/user');

exports.getUser = (req, res, next) => {
    const userId = req.params.userId;
    console.log(userId);
    User.findByPk(userId).then((user) =>{
        if(!user){
            return res.status(404).send('User not found');
        }

        // res.render('user', {
        //     user: user,
        //     pageTitle: user.username,
        //     path: '/user'
        // });
        res.json(user);
    })
    .catch(err => {
        console.log(err)
    });
};

exports.register = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const skills = req.body.skills;
    const location = req.body.location;

    User.create({
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        skills: skills,
        location: location
    })

    .then(result => {
        console.log('Successfully register');
        // req.sesion.isLoggedIn = true;
        req.session.user = User;
        res.json(User);
        //res.redirect("/project");
    }).catch(err => {
        console.log(err);
    });
};

exports.getLogin = (req, res, next) => {
    res.render("/login", {
        path: "/login",
        pageTitle: "Login",
        isAuthenticated: false, 
    });
};

exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log("Received data from frontend:", email, password);

    User.findOne({ where:{
            email: email,
            password: password
        }
    }).then((user) =>{
        if (user){
            // req.sesion.isLoggedIn = true;
            req.session.user = user;
            // res.redirect('http://localhost:3001/');
            return res.json(user);
            }else{
                res.render('login', {message: "Invalid credentials!"});
            }
    });

    
};

exports.postLogout = (req, res, next) => {
    req.sesion.destroy((err) => {
        console.log(err);
        res.redirect("/login");
    });
};

exports.getEditUser = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/project');
    }
    const userId = req.params.userId;
    User.findByPk(userId).then((user) =>{
        if(!user){
            return res.status(404).send('User not found');
        }

        res.render('/edit-user', {
            pageTitle: 'Edit Profile',
            path: '/edit-user',
            user: user
        });

        // res.json(user);
    })
    .catch(err => {
        console.log(err)
    });
};


exports.postEditUser = (req, res, next) => {
    const userId = req.params.userId;
    const updatedUserFields = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        skills: req.body.skills,
        location: req.body.location,
    };

    // Find the user by their ID
    User.findOne({ where: { id: userId } })
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Update user fields
            user.firstName = updatedUserFields.firstName;
            user.lastName = updatedUserFields.lastName;
            user.username = updatedUserFields.username;
            user.email = updatedUserFields.email;
            user.password = updatedUserFields.password;
            user.skills = updatedUserFields.skills;
            user.location = updatedUserFields.location;

            // Save the updated user
            return user.save();
        })
        .then(updatedUser => {
            res.redirect('/user');
            // res.json(updatedUser);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while updating the user.' });
        });
};