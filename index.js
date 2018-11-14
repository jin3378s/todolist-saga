const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors());
app.use('/card',(req,res)=>{
  const exampleData = [
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
  ]
  res.send(exampleData);
})
app.listen(5000)