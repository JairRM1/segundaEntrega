import carrito from "./assets/carrito.png"



function Main(props){
    return (
    <div style ={{textAlign: "center"}}>
        <img src={carrito} style ={{width:"100px"}} />
        <p style={{border: "1px solid black", width:"50px",margin:"auto"}}>0</p>
    </div>
    
    )
}

export default Main;