import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./cards.css";

export default function Cards({ info }) {
    return (
        <div className="cards">
            <Card sx={{ maxWidth: 345 }} style={{ width: "50vh" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image="https://www.texasstandard.org/wp-content/uploads/2023/02/DustStormSarah.jpg"
                        alt="Weather Image"
                        style={{ objectFit: "cover" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature: {info.temp}&#176;C
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Max Temperature: {info.maxtemp}&#176;C
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Min Temperature: {info.mintemp}&#176;C
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Humidity: {info.humidity}%
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Feels Like: {info.feelslike}&#176;C
                        </Typography>
                        <br />
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Weather: {info.weather}
                        </Typography>
                        <br />
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
