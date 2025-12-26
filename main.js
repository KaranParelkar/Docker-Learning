const express = require('express')
const app = express();
const port = process.env.port || 8000

app.get('/',(req,res) => {
    return res.json({message:"Hey , i am Karan's node container2 for learning caching layer "});
});

app.listen(port, () => console.log(`Server started on port,${port}`))