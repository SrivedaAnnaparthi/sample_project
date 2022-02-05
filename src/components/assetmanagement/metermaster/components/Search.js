import React, { useState, useEffect } from "react";
import axios from "axios"
import { Table, TableCell, TableHead, TableRow, TableBody } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { CssBaseline } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px light #fff',
  p: 4,
};
function Search() {
  const [posts, setPosts] = useState([])




  useEffect(() => {

    axios.get("https://fakestoreapi.com/products")
      .then(res => {

        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  })
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);

  }

  const handleClose = () => setOpen(false);
  return (
    <div>
     
    <CssBaseline/>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Meter S.No</TableCell>
            <TableCell>Consumer No</TableCell>
            <TableCell>Consumer Name</TableCell>
            <TableCell>MeterSub-Category</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id} >

              <TableCell>
                <Button onClick={handleOpen}>{post.id}</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style} >
                    {posts.filter(item => item.id === posts.id)}
                    <h4> ID:{post.id}</h4>
                    <h4>Title:{post.title}</h4>
                    <h4>category:{post.category}</h4>
                    <h4>Rating:{post.rating.count}</h4>
                  </Box>
                </Modal>
              </TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{post.category}</TableCell>

              <TableCell>{post.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
export default Search;
