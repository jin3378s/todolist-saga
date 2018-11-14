const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
app.use('/card',(req,res)=>{
  res.send([
    {
      title: 'make a to do list',
      assignTo : 'jinsuk',
      assignBy : 'jinsuk',
      work : 'make a todo list with redux'
    },
    {
      title: 'make a to do list',
      assignTo : 'jinsuk',
      assignBy : 'jinsuk',
      work : 'make a todo list with redux'
    },
    {
      title: 'make a to do list',
      assignTo : 'jinsuk',
      assignBy : 'jinsuk',
      work : 'make a todo list with redux'
    },
    {
      title: 'make a to do list',
      assignTo : 'jinsuk',
      assignBy : 'jinsuk',
      work : 'make a todo list with redux'
    }, {
      title: 'make a to do list',
      assignTo : 'jinsuk',
      assignBy : 'jinsuk',
      work : 'make a todo list with redux'
    },
    {
      title: 'make a to do list',
      assignTo : 'jinsuk',
      assignBy : 'jinsuk',
      work : 'make a todo list with redux'
    },
    {
      title: 'make a to do list',
      assignTo : 'jinsuk',
      assignBy : 'jinsuk',
      work : 'make a todo list with redux'
    },
    {
      title: 'make a to do list',
      assignTo : 'jinsuk',
      assignBy : 'jinsuk',
      work : 'make a todo list with redux'
    }
  ])
});

app.listen(5000,()=>{
  console.log('server on' +5000)
})