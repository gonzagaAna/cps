const express = require('express');
const helmet = require('helmet');
const app = express();
//const PORT = 3000;
const PORT = process.env.PORT || 3000; //3000 é default

//MIDLEWARE PARA DEFIDNIR CONTENT-SECURITY-POLICY
app.use(
    helmet({
        contentSecurityPolicy:{
            directives:{
                defaultSrc: ["'self'"], //APENAS CURSOS DO PRÓPRIO DOMÍNIO
                scriptSrc: ["'self'", "'unsafe-inline'"], //BLOQUEIA SCRIPTS INLINE E EXTERNOS N AUTORIZADOS
                styleSrc: ["'self'", "https://fonts.google.com"], 
                fontSrc: ["'self'", "https://font.gstatic.com"]

            }
        }
    })
);

app.use(express.static("public"));
app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})

// escrever no console:
// document.write("<script>alert('XXS)</script>")