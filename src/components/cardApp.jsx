//console.log(import.meta.env.VITE_API_KEY);

import { Transform, Translate } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

const API_WEATHER = `https://api.weatherapi.com/v1/current.json?key=266d9382006146e48a9134427231605&lang=es&q=`;

export function Card() {
  const [city, setCity] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "Coloque una Ciudad que exista", 
  });
  const [loading, setLoading] = useState(false);

  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    condition: "",
    conditionText: "",
    icon: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setError({ error: false, message: "" });
    setLoading(true);

    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };

      const res = await fetch(API_WEATHER + city);
      const data = await res.json();

      if (data.error) {
        throw { message: data.error.message };
      }

      console.log(data);

      setWeather({
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        realFeel: data.current.feelslike_c,
        condition: data.current.condition.code,
        humidity: data.current.humidity,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      });
    } catch (error) {
      console.log(error);
      setError({ error: true, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      id="Contenedor"
      maxWidth="s"
      sx={{ m: 0, gap: 0, paddingTop: 0, boxsizing: "border-box" , alignItems:"center" , justifyContent:"center" , textAlign:"center" }}
    >
      <Typography
        id="Titulo"
        variant="h5"
        component="h1"
        align="center"
        color="white"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        gutterBottom
      >
        Un Salto al Clima 
      </Typography>
      <Box
        sx={{ display: "grid", gap: 0.5 , paddingTop: 0 , justifyContent:"center" , alignItems:"center" , background:"transparent" }}
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
        
      >
        <TextField
          id="city"
          label="Ciudad"
          variant="outlined"
          size="small"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
          error={error.error}
          helperText={error.message}
      
        />

        <LoadingButton
          id="boton"
          type="submit"
          variant="contained"
          loading={loading}
          loadingIndicator="Buscando..."

          
        >
          Buscar
        </LoadingButton>
      </Box>

      {weather.city && (
        <Box
          id="box"
          sx={{
            mt: 0,
            display: "grid",
            gap: 0,
            textAlign: "center",
            color:"white",
            
          }}
        >
          <Typography 
            id="ciudad"
            variant="h6"
            component="h6"
            color="white"
          >
            {weather.city}, {weather.country}
          </Typography>
          <Box
            id="imagen"
            component="img"
            alt={weather.conditionText} 
            src={weather.icon}
            sx={{ margin: "0 auto" }}
          />
          <Typography
            id="temperatura"
            variant="h6"
            component="h6"
          >
            {weather.temperature} °C
          </Typography>
          <Typography
            id="condicion"
            variant="h6"
            component="h6"
          >
            {weather.conditionText} 
          </Typography>
          <Typography
            id="sensacion"
            variant="h6"
            component="h6"
          >
           Sensación Térmica {weather.realFeel} °C 
          </Typography>
          <Typography
            id="humedad"
            variant="h6"
            component="h6"
          >
            {weather.humidity} % Humedad Relativa
          </Typography>
        </Box>
      )}

      <Typography
        id="sello"
        textAlign="center"
        sx={{ mt: 0, fontSize: "12px" }}
      >
        Powered by:{" "}
        <a
          href="https://www.weatherapi.com/"
          title="Weather API"
        >
          WeatherAPI.com
        </a>
      </Typography>
    </Container>
  );
}