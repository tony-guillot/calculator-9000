function AmazingNumberButton(props){

    var handleclickChild = (e) =>{

        props.handleclick(e.target.value)
    }
    const number = [9,8,7,6,5,4,3,2,1];

    return (
        <div>
             {
                number.map((item, index) => {
                    return (
                        <button value={item}  key={item} onClick={handleclickChild}>{item}</button>
                        )
                    })
                }

                <button value={0} onClick={handleclickChild}>0</button>
        </div>
            
            
    )

    
}

     
    
export default AmazingNumberButton