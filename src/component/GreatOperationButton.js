function GreatOperationButton(props) {

  var operationChild = (e) => {
    console.log(e);
    props.clickOperation(e.target.value);
    
  };

  var supprimer = () =>{
        
    props.deleteNumber();
    console.log('test')
     }

  const operator = ["+", "-", "x", "/"];
  
  

 return(

     <div>
            {
               operator.map((item,index) => {

                return(
                    <button value={item} key={item} onClick={operationChild}> {item}</button>
                )

               }) 
            }
            
            <button value={'AC'} onClick={supprimer}>AC</button>
        </div>

    )
}


export default GreatOperationButton;
