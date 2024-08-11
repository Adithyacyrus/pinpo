const express = require('express');
const app = express();

app.get('/getDetailsByPincode', async (req, res) => {
    const pincode = req.query.pincode;
    
    // Query your database to find details by pincode
    const details = await getDetailsFromDatabase(pincode);

    res.json(details);
});

async function getDetailsFromDatabase(pincode) {
    // Mockup database query
    return {
        area: 'Area Name',
        village: 'Village Name',
        mandal: 'Mandal Name',
        district: 'District Name',
        state: 'State Name',
        country: 'Country Name'
    };
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
