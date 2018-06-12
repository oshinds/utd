var config = require('./config');
var helper = require('sendgrid').mail;
var from_email = new helper.Email('automailer@tenseeddigital.com');
var to_email = new helper.Email(config.EMAIL_ADDRESS);
var subject = 'Business Enquiry';
var content = new helper.Content('text/plain', 'Hello, Email!');
var mail = new helper.Mail(from_email, subject, to_email, content);

var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON(),
});

function sendMail(){
	sg.API(request, function(error, response) {
	  console.log(response.statusCode);
	  console.log(response.body);
	  console.log(response.headers);
	});
}

export default sendMail;