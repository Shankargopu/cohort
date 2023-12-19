const express = require("express");
const app = express();
app.use(express.json());

const users = [
    {
        name: "jhon",
        kidneys: [{
            healthy: false
        }]
    }
]

//get count of all kidneys, healthy kidneys and unhealthy kidneys
app.get('/', (req, res) => {
    console.log(users[0].kidneys)
    const jhonKidnyes = users[0].kidneys;
    const numberOfkindeys = jhonKidnyes.length;
    const healthyKdneys = jhonKidnyes.filter((kidney) => kidney.healthy)
    const numberOfHealthyKidneys = healthyKdneys.length;
    const numberOfUnhealthyKidneys = jhonKidnyes.length - numberOfHealthyKidneys;
    res.status(200).json({
        numberOfkindeys, numberOfHealthyKidneys, numberOfUnhealthyKidneys
    })
})

//add new kidney
app.post('/', (req, res) => {
    console.log(req.body);
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({ healthy: isHealthy });
    res.status(200).json({
        message: "Done!"
    })
})

//make all unhealthy kidneys to healthy kidneys.
app.put('/', (req, res) => {
    const kidneys = users[0].kidneys;
    const unhealthyKidneys = checkIfThereAnyUnhealthyKidneys(kidneys);
    if (unhealthyKidneys) {
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.status(200).json({
            message: "Ok"
        })
    } else {
        res.status(411).send({
            message: "You have no unhealthy kidneys"
        })
    }



})

//delete all unhealthy kidneys
app.delete('/', (req, res) => {
    const kidneys = users[0].kidneys;
    const isUnhealthyKidneys = checkIfThereAnyUnhealthyKidneys(kidneys)
    if (!isUnhealthyKidneys) {
        res.status(411).send({
            message: "You have no unhealthy kidneys"
        })
        return;
    }
    const healthyKidneys = kidneys.filter((kidney) => kidney.healthy)
    users[0].kidneys = healthyKidneys;
    res.status(200).json({
        message: "done!"
    })
})


function checkIfThereAnyUnhealthyKidneys(kidneys) {
    let isUnhealthyKidneys = false;
    const unhealthyKidneys = kidneys.filter((kidney) => {
        return kidney.healthy == false;
    })
    if (unhealthyKidneys.length) {
        isUnhealthyKidneys = true;
    }
    return isUnhealthyKidneys;

}
app.listen(3000, () => {
    console.log(`Server started at PORT 3000`);
})