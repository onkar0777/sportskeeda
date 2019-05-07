const express = require('express');

const app = express();

const map = {
    'A': 1,
    'B': 2,
    'C': 3
}

app.get('/col_num', (req, res) => {
    const str = req.query.colName;
    colNo = 0;
    for (i = 0; i < str.length; i++) {
        colNo += map[str[i]] * Math.pow(26, (str.length - 1 - i));
    }
    res.json({
        colName: req.query.colName,
        colNumber: colNo
    });
})

app.listen(3000, () => {
    console.log("server is listening at 3000");
})