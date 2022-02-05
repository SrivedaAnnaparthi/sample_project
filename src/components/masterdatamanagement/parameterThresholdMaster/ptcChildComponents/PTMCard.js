import * as React from 'react';
import { Grid, Typography, Modal, Button, Box, TextField, Stack } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import category from '../utils/category.json';
import phases from '../utils/phases.json';
import category2 from '../utils/category2.json';
import phases2 from '../utils/phases2.json';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	bgcolor: 'background.paper',
	border: '1px light #fff',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};

const style1 = {
	width: 400,
	pt: 2,
};

const columns = [
	{ id: 'name', label: 'S.No', minWidth: 10 },
	{ id: 'code', label: 'Parameter Name', minWidth: 40 },
	{
		id: 'population',
		label: 'Min(Value)',
		minWidth: 40,
		format: (value) => value.toLocaleString('en-US')
	},
	{
		id: 'size',
		label: 'Max(Value)',
		minWidth: 40,
		format: (value) => value.toLocaleString('en-US')
	},
	{
		id: 'density',
		label: 'Min(%)',
		minWidth: 40,
		format: (value) => value.toFixed(2)
	},
	{
		id: 'density',
		label: 'Max(%)',
		minWidth: 40,
		format: (value) => value.toFixed(2)
	},
	{
		id: 'modify',
		label: 'Modify',
		minWidth: 40,
		format: (value) => value.toFixed(2)
	}
];

function createData(name, code, population, size) {
	const density = population / size;
	return { name, code, population, size, density };
}

const rows = [createData('01'), createData('02')];

const PTMCard = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const [value, setValue] = React.useState(null);

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const [newCategory, setNewCategory] = useState('');
	const [phase, setPhase] = useState([]);
	const [newPhase, setNewPhase] = useState([]);

	const [newCategory2, setNewCategory2] = useState('');
	const [phase2, setPhase2] = useState([]);
	const [newPhase2, setNewPhase2] = useState([]);

	const onCategory = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		const pse = phases.filter((cir) => {
			return cir.reg_name === e.target.value;
		});
		console.log(pse);
		setPhase(pse);
		setNewCategory(e.target.value);
	};

	const onCategory2 = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		const pse2 = phases2.filter((cir2) => {
			return cir2.reg2_name === e.target.value;
		});
		console.log(pse2);
		setPhase2(pse2);
		setNewCategory2(e.target.value);
	};

	const onPhase = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		setNewPhase(e.target.value);
	};

	const onPhase2 = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		setNewPhase2(e.target.value);
	};

	const submitData = (event) => {
		event.preventDefault();

		console.log(newCategory);
		console.log(newPhase);
		console.log(newCategory2);
		console.log(newPhase2);
	};

	// generate the link when both dropdowns are selected

	return (
		<Box sx={{ display: 'flex', p: 1, m: 2, bgcolor: 'background.paper', flexDirection: 'column' }}>
			<div align="left">
				<Button variant="contained" onClick={handleOpen}>Add Parameter</Button>
				<Modal
					hideBackdrop
					open={open}
					onClose={handleClose}
					aria-labelledby="child-modal-title"
					aria-describedby="child-modal-description"
				>
					<Box sx={style}>
						<Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
							<Grid item xs={6}>
								<Typography variant='h6'  >Add New Parameter</Typography>
							</Grid>
							<Grid item xs={4}>

							</Grid>
							<Grid item xs={2}>
								<Button onClick={handleClose}><CloseIcon /></Button>
							</Grid>
							<Grid item xs={6}>
								<Box sx={{ minWidth: 120 }}>
									<FormControl fullWidth>
										<TextField
											select
											fullWidth
											variant="standard"
											color="primary"
											label="Meter Subcategory"
											onChange={onCategory2}
											value={newCategory2}
											name="category2"
										>
											{category2.map((reg2) => (
												<MenuItem value={reg2.name} key={reg2.reg2_id}>
													{reg2.name}
												</MenuItem>
											))}
										</TextField>
									</FormControl>
								</Box>
							</Grid>
							<Grid item xs={6}>
								<Box sx={{ minWidth: 120 }}>

									<TextField
										select
										fullWidth
										variant="standard"
										color="primary"
										label="Meter Phase"
										onChange={onPhase2}
										value={newPhase2}
										name="phase2"
									>
										{phase2.map((pse2) => (
											<MenuItem value={pse2.name} key={pse2.phase2_id}>
												{pse2.name}
											</MenuItem>
										))}
									</TextField>

								</Box>
							</Grid>
							<Grid item xs={6}>
								<TextField id="outlined-basic" label="Parameter Name" variant="outlined" />
							</Grid>
							<Grid item xs={6}>
								<TextField id="outlined-basic" label="User Name" variant="outlined" />
							</Grid>
							<Grid item xs={6}>
								<TextField
									fullWidth
									id="outlined-number"
									label="Minimum(Value)"
									type="number"
									InputLabelProps={{
										shrink: true
									}}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									fullWidth
									id="outlined-number"
									label="Maximum(Value)"
									type="number"
									InputLabelProps={{
										shrink: true
									}}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									fullWidth
									id="outlined-number"
									label="Minimum(%)"
									type="number"
									InputLabelProps={{
										shrink: true
									}}
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									fullWidth
									id="outlined-number"
									label="Maximum(%)"
									type="number"
									InputLabelProps={{
										shrink: true
									}}
								/>
							</Grid>
							<Grid item xs={6}>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<DatePicker
										label="Effective Date"
										value={value}
										onChange={(newValue) => {
											setValue(newValue);
										}}
										renderInput={(params) => <TextField {...params} />}
									/>
								</LocalizationProvider>
							</Grid>
							<Grid item xs={6}>
							</Grid>
							<Grid item xs={3}>

							</Grid>
							<Grid item xs={3}>
								<Stack spacing={2} direction="row">
									<Button variant="contained">Submit</Button>
								</Stack>
							</Grid>
							<Grid item xs={3}>
								<Stack spacing={2} direction="row">
									<Button variant="contained">Clear</Button>
								</Stack>
							</Grid>
							<Grid item xs={3}>

							</Grid>

						</Grid>

					</Box>
				</Modal>
			</div>
			<Typography variant="h6" align="left" sx={{ pt: 2, m: 0 }}>
				Please Select:
			</Typography>

			<Grid container direction="row" sx={{ flexGrow: 1, p: 1, m: 0 }} spacing={2}>
				<form>
					<Grid item xs={12}>
						<Box sx={style1}>
							<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

								<Grid item xl={6} md={6} xs={12} sm={6}>
									<TextField
										select
										fullWidth
										variant="standard"
										color="primary"
										label="Meter Subcategory"
										onChange={onCategory}
										value={newCategory}
										name="category"
									>
										{category.map((reg) => (
											<MenuItem value={reg.name} key={reg.reg_id}>
												{reg.name}
											</MenuItem>
										))}
									</TextField>
								</Grid>

								<Grid item xl={6} md={6} xs={12} sm={6}>
									<TextField
										select
										fullWidth
										variant="standard"
										color="primary"
										label="Meter Phase"
										onChange={onPhase}
										value={newPhase}
										name="phase"
									>
										{phase.map((pse) => (
											<MenuItem value={pse.name} key={pse.phase_id}>
												{pse.name}
											</MenuItem>
										))}
									</TextField>
								</Grid>


							</Grid>
						</Box>
					</Grid>
				</form>
			</Grid>
			<Grid sx={{ pt: 1, pb: 2 }}>
				<TextField id="outlined-search" label="Search..." type="search" />
			</Grid>
			<Paper sx={{ width: '100%', overflow: 'hidden' }} variant="outlined" square>
				<TableContainer sx={{ maxHeight: 440 }}>
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								{columns.map((column) => (
									<TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
								return (
									<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
										{columns.map((column) => {
											const value = row[column.id];
											return (
												<TableCell key={column.id} align={column.align}>
													{column.format && typeof value === 'number' ? (
														column.format(value)
													) : (
														value
													)}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 25, 100]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</Box>
	);
};

export default PTMCard;
