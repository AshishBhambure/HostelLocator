const nodemailer = require('nodemailer');
// const logo = require('./StudyNotionLogo.png');
const mailSender = async (email,title,body)=>{
    
try{
    require('dotenv').config();
    let transporter = nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS,
        }
    })

    let info = await transporter.sendMail(
        {
            from:' HostelPr || ashishbhambure999@gmail.com' ,
            to:email ,
            subject:title ,
            html:`
            <img src="https://i.ibb.co/7Xyj3PC/logo.png"></img>
            <h2>  ${body} </h2>
            ` ,
            
            

        }

    )
    console.log(" Mail Info-->" , info);
    return info;
}
catch(e){
    console.log(e);
}
}

module.exports = mailSender;
