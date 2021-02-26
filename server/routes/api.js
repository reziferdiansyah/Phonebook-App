var express = require('express');
var router = express.Router();
var firebase = require("firebase");

//Fetch instances
router.get('/phonebooks', function (req, res) {
    const userReference = firebase.database().ref("/PhoneBook/");
    //Attach an asynchronous callback to read the data
    userReference.on("value", function (snapshot) {
        res.json(snapshot.val());
        userReference.off("value");
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        res.send("The read failed: " + errorObject.code);
    });
});

router.post('/phonebooks', function (req, res, next) {
    var { name, phone } = req.body;
    let _id = Date.now();

    const referencePath = '/PhoneBook/' + _id + '/';
    const userReference = firebase.database().ref(referencePath);
    userReference.set({ Name: name, Phone: phone }, function (error) {
        if (error) {
            res.send("Data could not be saved." + error);
        } else {
            res.status(201).json({
                status: "SUCCESS",
                data: {
                    ID, name, phone
                }
            })
        }
    })
});

router.put('/phonebooks/:id', function (req, res, next) {
    var _id = req.params.id
    var { name, phone } = req.body

    var referencePath = '/PhoneBook/' + _id + '/';
    var userReference = firebase.database().ref(referencePath);
    userReference.update({ Name: name, Phone: phone }, function (error) {
        if (error) {
            res.send("Data could not be updated." + error);
        } else {
            res.status(201).json({
                status: "SUCCESS",
                data: {
                    name, phone
                }
            });
        }
    });

})

router.delete('/phonebooks/:id', function (req, res, next) {
    var _id = req.params.id
    var referencePath = '/PhoneBook/' + _id + '/';
    var userReference = firebase.database().ref(referencePath);
    userReference.remove((error) => {
        if (error) {
            res.send("Data could not be deleted." + error);
        } else {
            res.send("Data deleted successfully.");
        }
    })
})

module.exports = router;