import express from 'express'
import fs from 'fs'
import cors from "cors"
import stream from 'stream'


const app = express()
app.listen(3030, () => console.log("server started at: http://localhost:3030/"));

app.use(cors())

app.get('/media/*', (req, res) => {
    const r = fs.createReadStream("." + req.url) // or any other way to get a readable stream
    const ps = new stream.PassThrough() // <---- this makes a trick with stream error handling
    stream.pipeline(
        r,
        ps, // <---- this makes a trick with stream error handling
        (err) => {
            if (err) {
                console.log(err) // No such file or any other kind of error
                return res.sendStatus(400);
            }
        })
    ps.pipe(res) // <---- this makes a trick with stream error handling
})

app.get("/education", (req, res, next) => {
    res.json([
        {
            id: "pict",
            logo: "/media/pictLogo.png",
            clg: "SCTR's Pune Institute Of Computer Technology, Pune",
            courseDetail: "(B.E)",
            branch: "Information Technology",
            from: "2021",
            to: "2024",
            status: "pursuing",
            grade: "",
            logoTxt: "PICT",
            alt: "PICT_LOGO"
        },
        {
            id: "vpp",
            logo: "/media/vppLogo.png",
            clg: "Vidya Prathishthan's Polytechnic College, Indapur",
            courseDetail: "(MSBTE)",
            branch: "Computer Engineering",
            from: "2018",
            to: "2021",
            status: "completed",
            grade: "95.43%",
            logoTxt: "VPP",
            alt: "VPP_LOGO"
        },
        {
            id: "mgm",
            logo: "/media/mgmLogo.png",
            clg: "Mahatma Gandhi Vidyalay, Paranda, Osmanabad",
            courseDetail: "(SSC)",
            branch: "10th",
            from: "2015",
            to: "2018",
            status: "completed",
            grade: "73%",
            logoTxt: "MGM",
            alt: "MGM_LOGO"
        }
    ]);
})