import {List, ListItem, ListItemText, Typography  } from '@mui/material'


function NavBar(props) {

    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <Typography color="inherit" variant="subtitle1">
                        Лиги
               </Typography>
                </ListItemText>


                <ListItemText inset>
                    <Typography color="inherit" variant="subtitle1">
                        Команды
               </Typography>
                </ListItemText>



            </ListItem >

        </List>
    )
}


export default NavBar;