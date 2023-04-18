import Nav from "./NabBar/Nav";
import CarWitget from "./CarWitget/CarWitget";
import ItemListConteiner from "./ItemListConteiner/ItemListConteiner";

function Contenedor(props) {
   return (
    <div 
      style={{
        backgroundColor: "purple",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh"
      }}
    >
    <Nav />
    <CarWitget />
    <ItemListConteiner saludo={'¡Vamos a aprender matemáticas!'} />
    </div>
   );
}

export default Contenedor;