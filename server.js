const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/app/wm/demo/lic/", (req, res) => {
    console.log("Solicitud recibida desde la extensión:", req.query);

    res.json({
        "status": "success",
        "message": "",
        "data": {
            "remainingdays": 365,
            "expires_on": "2026-02-15",
            "mobile": req.query.phonenumber || "573046384844"
        },
        "set": "set",
        "SOAP": "KzkxOTA0OTc0MDQzMQ==",
        "reviewlink": "https://chrome.google.com/webstore/detail/wa-biz-free-bulk-sender/njlokjfmljicmjpongdkpgkpcemppmbn/review",
        "deactivated": false
    });
});

app.listen(port, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${port}`);
});

