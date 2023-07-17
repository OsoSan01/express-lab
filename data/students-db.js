const students = [
    {name:'Peter', course:'Defense Dark Arts', graduated: true},
    {name:'Luna', course:'Magical Creatures', graduated: true},
    {name:'Croockshanks', course:'Potions', graduated: false },
    {name:'Minerva', course:'Defense Dark Arts', graduated: false},
    {name:'Lilly', course:'Magical Creatures', graduated: false},
    {name:'Hagrid', course:'Potions', graduated: true},
    {name:'Sirius', course:'Magical Creatures', graduated: false}  
  ];


  module.exports= {
    getAll :function (){
        return students;
    }
};