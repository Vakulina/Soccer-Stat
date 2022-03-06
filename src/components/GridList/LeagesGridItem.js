import { Card, CardActionArea, CardContent, Typography, Grid } from '@mui/material';
import { useNavigate} from 'react-router-dom';
export default function LeagesGridItem({ items }) {
  const navigate = useNavigate();
  const actionCardHandler = (item) => {
    navigate(`/leages/${item.id}`)
  };
  return (
  <>
    {
      Array.from(items).map((item) => (
        <Grid item xs={50} xl={20} sm={30} md={20} onClick={actionCardHandler.bind(this, item)} key={item.id}>
          <Card >
            <CardActionArea sx={{ minHeight: 140 }}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2" >
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.area.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
</>
  );
}
