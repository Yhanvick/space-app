import { useState, useEffect } from "react";  // Importa los hooks useState y useEffect de React
import { CircularProgress } from '@mui/material'; // Para mostrar el cargador
import "./apod.css";

function ApodCard({ title, url, explanation }) {
    return (
        <div className='apodcard'>
            <h1 className='apod-title'>{title}</h1>
            <img src={url} alt={title} className="apod-img"/>
            <p className='apod-explanation'>{explanation}</p>
        </div>
    );
}

function Apod() {
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=...";
    const [apod, setApod] = useState(null); 
    // useEffect se ejecuta después de que el componente se haya montado
    useEffect(() => {
        const fetchData = async () => {  // Función asíncrona para obtener los datos de la API
            try {
                const data = await fetch(API_URL);  // Fetch realiza la solicitud a la API
                const res = await data.json();  // Convierte la respuesta en formato JSON
                setApod(res);  // qui estoy almacenando toda la respuesta que la API devuelve y que tiene la inofrmacion sobre la foto del dia como mi title, la url y explicación
            } catch (err) {
                console.error(err);  // Si ocurre un error, se muestra en la consola
            }
        };
        fetchData();  // Llama a la función `fetchData` para obtener los datos de la API
    }, []);  // El array vacío `[]` indica que useEffect solo se ejecuta una vez, cuando el componente se monta
    return (
        <div className="apod-container">
            {console.log(apod)} 
            {!apod ? (
                <CircularProgress sx={{ color: "beige" }} />
            ) : (
                <ApodCard title={apod.title} url={apod.url} explanation={apod.explanation} />
            )}
        </div>
    );
}

export default Apod;