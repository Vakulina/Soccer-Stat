import { Card, CardActionArea, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function TeamsGridItem({ items }) {
  const navigate = useNavigate();
  const actionCardHandler = (item) => {
    navigate(`/teams/${item.id}`)
  };

  return (
    <>
      {
        Array.from(items).map((item) => (
          <Grid item xs={50} xl={12} sm={20} md={12} onClick={actionCardHandler.bind(this, item)} key={item.id}>
            <Card >
              <CardActionArea sx={{ minHeight: 140 }}>
                <CardContent >
                  <Typography gutterBottom variant="subtitle2" component="h2"
                    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }} >
                    {item.name}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="150"
                  width='180'
                  sx={{ objectFit: 'contain', marginBottom: '1rem' }}
                  image={item.crestUrl}
                  alt={`эмблема соревнования ${item.name}`}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </>
  );
}
