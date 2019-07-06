const excelToJson = require('convert-excel-to-json');
const path = require('path');

function getXls (req, res) {

	const result = excelToJson({
		sourceFile: path.join(__dirname,'../file_example_XLS_50.xls'),
		header:{
			// Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
			rows: 1 // 2, 3, 4, etc.
		},
		columnToKey: {
			A: 'First Name',
			B: 'Last Name',
			C: 'Gender',
			D: 'Country',
			E: 'Age',
			F: 'Date',
			G: 'Id'
		}
	});

	console.log('result',result);
	res.json({data:result});
}

module.exports = {getXls};