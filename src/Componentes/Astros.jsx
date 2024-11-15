import { useState, useEffect } from "react";  // Importa los hooks useState y useEffect de React
import { CircularProgress } from "@mui/material";
import "./Astros.css";  // Importa el archivo de estilos CSS para el componente


// Componente que recibe las props `name` y `craft` y renderiza los datos
function AstroCard({ name, craft }) {
    return (
        <div className='astrocard'>
            <p className='astro-name'>{name}</p>
            <p className='astro-craft'>{craft}</p>
        </div>
    );
}

function Astros() {
    const API_URL = 'http://api.open-notify.org/astros.json';  // Define la URL de la API
    const [astros, setAstros] = useState(null);  // Declara el estado `astros` con un valor inicial de `null`
    // useEffect se ejecuta después de que el componente se haya montado
    useEffect(() => {
        const fetchData = async () => {  // Función asíncrona para obtener los datos de la API
            try {
                const data = await fetch(API_URL);  // Fetch realiza la solicitud a la API
                const res = await data.json();  // Convierte la respuesta en formato JSON
                console.log(res);
                setAstros(res.people);  // Actualiza el estado con los datos de los astronautas
            } catch (err) {
                console.error(err);  // Si ocurre un error, se muestra en la consola
            }
        };
        fetchData();  // Llama a la función `fetchData` para obtener los datos de la API
    }, []);  // El array vacío `[]` indica que useEffect solo se ejecuta una vez, cuando el componente se monta

    return (
        <>
        <div className="astros-container">
            <h1 className="header">Astros en el Espacio</h1>
            {console.log(astros)}
            {!astros ? (
                <CircularProgress sx={{ color: "beige" }} />
            ) : (
                astros.map((astro, idx) => (
                    <AstroCard key={idx} {...astro} />
                ))
            )}
        </div></>
    );
}

export default Astros;  // Exporta el componente Astros para ser utilizado en otros archivos