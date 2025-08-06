import List from './List/List.jsx'
import UserGreeting from "./UserGreeting/UserGreeting.jsx";


function App() {

  const fruits = [{id:1, name: "Apple", calories: 31},
                  {id:2, name: "Mangga", calories: 85},
                  {id:3, name: "Jeruk", calories: 32},
                  {id:4, name: "Alpukat", calories: 76},

  ];

  const vegetables = [{id:5, name: "Kacang", calories: 98},
                      {id:6, name: "Wortel", calories: 45},
                      {id:7, name: "Sawi", calories: 21},
                      {id:8, name: "Terong", calories: 76},
                      {id:9, name: "Kangkung", calories: 54}
  ]


  return(
    <>
    <UserGreeting isLoggedIn= {true} username='Luqman'/>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  )

}

export default App
