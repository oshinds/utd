var config = require('./config');
var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
const from_email = new helper.Email('automailer@tenseeddigital.com');
const to_email = new helper.Email(config.EMAIL_ADDRESS);
const subject = 'Business Enquiry';


function sendMail(dataObj){
	var content = new helper.Content('text/plain', JSON.stringify(dataObj));
	var mail = new helper.Mail(from_email, subject, to_email, content);
	
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON(),
	});

	sg.API(request, function(error, response) {
	  console.log(response.statusCode);
	  console.log(response.body);
	});
}

export default sendMail;