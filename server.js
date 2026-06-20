const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.json())

const accountSid = "YOUR_ACCOUNT_SID"

const authToken = "YOUR_AUTH_TOKEN"

const client =
require("twilio")(accountSid, authToken)



app.post("/set-reminder",(req,res)=>
{
    const phone = req.body.phone

    const startTime = req.body.startTime

    const endTime = req.body.endTime



    let count = 0



    let reminder =
    setInterval(async() =>
    {
        let now = new Date()

        let currentTime =
        now.getHours().toString().padStart(2,'0')
        + ":" +
        now.getMinutes().toString().padStart(2,'0')



        if(currentTime >= startTime &&
           currentTime <= endTime)
        {

            if(count < 10)
            {
                await client.messages.create(
                {
                    body:
                    "🏃 Time for exercise and drink water!",

                    from:
                    "YOUR_TWILIO_NUMBER",

                    to:
                    phone
                })

                console.log("SMS Sent")

                count++
            }

        }



        if(currentTime > endTime)
        {
            clearInterval(reminder)

            console.log("Reminder Ended")
        }

    },60000)



    res.json(
    {
        message:
        "Reminder Started Successfully ✅"
    })

})



app.listen(5000,()=>
{
    console.log(
    "Server running on port 5000"
    )
})