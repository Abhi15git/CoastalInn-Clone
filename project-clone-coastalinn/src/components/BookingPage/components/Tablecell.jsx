


export default function Tablecell({props}){
    const {item,el,setAvailroom,setHover} = props;

    

    function calculateAvailability(el,item){
        
        const date = `${el.getDate()}/${el.getMonth()+1}/${el.getFullYear()}`;
        let res = item.totalroom;
        item.bookings.forEach(element => {
            
            if(element[date]){
               res = element.available;
               return;
            }
        });
        if(!res){
            setHover(false);
        return "Sold";
        }
    else{
        setAvailroom(res)
        return item.price;
    }
    }

    return (
    <>
        {!item.bookings.length ? <div style={{color:"rgb(81,161,171)"}} >{item.price}</div> : calculateAvailability(el,item)==="Sold"? <div>Sold</div> : <div style={{color:"rgb(81,161,171)"}} >{el.getDay()>4 ? calculateAvailability(el,item)+100 : calculateAvailability(el,item)}</div>}
      </>  
    )
}



