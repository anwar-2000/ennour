import  React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import classes from './Product.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';  

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Product =(props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
   
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
         
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           { props.description}
          </Typography>
        </CardContent>
        <Button onClick={handleOpen}>Open modal</Button>
      <Modal  className={classes.modalwidth}                   
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={classes.boxModal}>
          <Typography id="modal-modal-title">
          <InnerImageZoom src={props.ficheTech}  />
          </Typography>
        </Box>                                                          
      </Modal>
      </CardActionArea>
    </Card>
   
  );
}
export default Product 