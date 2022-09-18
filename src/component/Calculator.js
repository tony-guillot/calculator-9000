import { useState } from 'react';
import AmazingNumberButton from './AmazingNumberButton';
import BeautifullScreen from './BeautifullScreen'
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import Thetitle from './Thetitle';


function Calculator(){

    

    const [nombre1, setNombre1] = useState([]) 
    const [nombre2, setNombre2] = useState([])
    const [operation, setOperation] = useState()
    const [current, setCurrent] = useState(true)

    const handleclick= (Nombre) =>{
        if (current === true){
            console.log('ko')
            setNombre1([...nombre1, Nombre])
        }else{
            console.log('ok')
            setNombre2([...nombre2, Nombre]) 
        }
          
    }

    const clickOperation = (operation) =>{
        setCurrent(false)
        setOperation(operation)
    }

    const deleteNumber = () =>{

        setNombre1([]);
        setNombre2([]);
        setOperation([]);
    }

    // const result = () =>{

    //     let resultNombre1 = '';
    //     let resultNombre2 = '';

    //     for(let i =0; i< nombre1.length; i++){

    //         resultNombre1 += resultNombre1[i] 

    //     }

    //     for(let i =0; i<nombre2.length;i++){


    //     }

    // }

    
  

    return (
        
        
        <div className="App">
    
    <div className='title'>
        <Thetitle />
     </div>
    
          <div className='screen'>
    
            <BeautifullScreen nombre1={nombre1} operation={operation} nombre2={nombre2} />
          </div>
     
         <div className='number'>
        
          <AmazingNumberButton
           handleclick={handleclick}
            />
         </div>
    
        <div className='operation'>
            <GreatOperationButton clickOperation={clickOperation} deleteNumber={deleteNumber}  />
        </div>
        <div className='equal'>
            <MagnificientEqualButton />     
        </div>    
    </div>
    
    
      );
    }
    

export default Calculator;