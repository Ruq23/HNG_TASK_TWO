const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors')
const methodOverride = require('method-override')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

// app.use(cors({
//     origin: '*'
// }));

// app.use(function(req, res, next) {
//     res.setHeader("Content-Type", "application/json");
//     next();
// });

const operation_type = ['addition', 'subtraction', 'multiplication', 'division']




app.get('/', (req, res) => {
    res.render('calculator.ejs', { operation_type })
})
app.post('/', (req, res) => {
    const slackUsername = "Faruq22"
    const { xinput, yinput, operation_type } = req.body
    const x = (parseInt(xinput))
    const y = (parseInt(yinput))
    // console.log(typeof realx)
    if(operation_type == 'addition') {
        res.send(`{"slackUsername": "${slackUsername}", "result": ${x + y}, "operation_type: ${operation_type}}`)
    }if(operation_type == 'subtraction') {
        res.send(`{"slackUsername": "${slackUsername}", "result": ${x - y}, "operation_type: ${operation_type}}`)
    }if(operation_type == 'multiplication') {
        res.send(`{"slackUsername": "${slackUsername}", "result": ${x * y}, "operation_type: ${operation_type}}`)
    }if(operation_type == 'division') {
        res.send(`{"slackUsername": "${slackUsername}", "result": ${x / y}, "operation_type: ${operation_type}}`)
    }
})

app.listen(3000, () => {
    console.log('Listening on Port 3000')
})

