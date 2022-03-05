import { Card, CardActionArea, CardContent, Typography, Grid } from '@mui/material';
import { useNavigate} from 'react-router-dom';

export default function TeamsGridItem({ items }) {
  const navigate = useNavigate();
  const actionCardHandler = (item) => {
    navigate(`/teams/${item.id}`)
  };
  return (
  <>
    {
      Array.from(items).map((item) => (
        <Grid item xs={50} xl={12} sm={20} md={15} onClick={actionCardHandler.bind(this, item)} key={item.id}>
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
