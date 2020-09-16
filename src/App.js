import React,{useState} from 'react';
import Header from "./Header";
import Button from "./Button";
import Refresh from "./Refresh";


function App() {

  const List = [
    {firstName: 'Will', secondName: 'Truhtanberg'},
    {firstName:'Bob', secondName: 'MydaBob'},
    {firstName:'Lesia', secondName: 'Petrov'}
  ]
      // setCounter(counter + 1)

  const [counter, setCounter] = useState([0, 0, 0])

    let counterPlus = (index) => {
      const newArr = counter.map((el, i) => {
          if(index === i){
              return el + 1}
          return el;
        })

        setCounter(newArr);
    }

    let counterMinus = (index) => {
      const newArr1 = counter.map((el,i) =>{
          if ( index === i ){
              return el - 1;
          }
          return el;
      })
        setCounter(newArr1);
    }


    const refresh = (index) => {
        const newArrRefr = counter.map((el, i) => {
            if(index === i){
                return el = 0;
            }
            return el;
        })

       setCounter(newArrRefr);
    }

    const refreshAll = () => {
      setCounter(counter.map(el => el = 0));
    }

    const addCounter = () => {
     const arr2 = counter;
     arr2.push(0);
      console.log(arr2);
     setCounter(arr2);
    }


  return (

      <div>

        <h1>Poehali!</h1>


           <div >

               {List.map(el =>  <Header el={el} key={el.firstName}/>)}


           </div>


        <div>

          {counter.map((el, index) => <Button  refreshAll={refreshAll} refresh={refresh} counterMinus={counterMinus} index={index} counterPlus={counterPlus} el={el} key={Math.random()}/>)}

        </div>

          <div>

              <button onClick={addCounter}>Add Counter</button>

          </div>

      </div>
  );
}

export default App;
