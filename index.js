
// //node keyword require allows us to import modules
// const myModule = require('./myModule.js')
// const fs = require('fs')

// fs.readFile('story.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.log('There was a problem reading the file.')
//     } else {
//         console.log(data)
//     }
// })

// // console.log(myModule.beBasic())

// myModule.count()

// let i = 0;

// count = () => {
//     console.log(i)
//     i++
// }
// const myTimer = setInterval(count, 1000)

// const today = new Date()

// console.log(today);
const moment = require('moment')

// moment().set({'month': 6, 'year': 1997, 'date': 7})
console.log(moment('06-07-1997').format('dddd [the] Do [of] MMMM [in the year] YYYY'))

// Wednesday the 11th of September in the year 1985