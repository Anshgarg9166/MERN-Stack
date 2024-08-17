import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send('server is ready');
// })

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
          "id":1,
          "title":"title 1",
          "content":"about title 1"
        },
        {
            "id":2,
            "title":"title 2",
            "content":"about title 2"
        },
        {
        "id":3,
        "title":"title 3",
        "content":"about title 3"
        }
    ];
    res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
});