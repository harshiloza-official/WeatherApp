import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';

export default function InfoBox({ info }) {

    const INIT_URL = "https://res.cloudinary.com/dta18h8e5/image/upload/v1727003370/wanderlust_dev/zznm9l9r75fo3yqgzm4i.jpg";
    const HOT_URL = "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0";  // Direct image URL
    const COLD_URL = "https://64.media.tumblr.com/f222c9df4b179f189ffc31ec457c6e1c/tumblr_p28jx7rWPg1viuar9o1_1280.gif";
    const RAIN_URL = "https://i.gifer.com/E3K8.gif";

    const getWeatherIcon = () => {
        if (info.humidity > 75 && info.temp < 20) {
            return <ThunderstormIcon />;
        } else if (info.temp > 30) {
            return <WbSunnyIcon />;
        } else if (info.temp <= 15) {
            return <AcUnitIcon />;
        } else {
            return <WbCloudyIcon />;
        }
    };

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 75 && info.temp < 20 ? RAIN_URL : info.temp > 30 ? HOT_URL : info.temp <= 15 ? COLD_URL : INIT_URL}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} - {info.temp} &deg;C {getWeatherIcon()}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <div>Max - {info.tempMax}&deg;C</div>
                            <div>Min - {info.tempMin}&deg;C</div>
                            <div>Humidity - {info.humidity}%</div><br />
                            <div>Weather is a kind of <b>{info.weatherDesc}</b> and it feels Like {info.feelsLike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
