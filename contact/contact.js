const emailId = 'contact@snapdragonls.com'
const NL = '%0D%0A' //new line
const greeting = `Hello team Snapdragonls !` + NL + NL

function contact1(event) {
    const form = document.getElementById("contact1");
    event.preventDefault();
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const subject = `You have been contacted by: ${name}\n`

    const body =
        greeting +
        `We are interested to know more about SnapTransparency` + NL +
        `Please get back to us on below details` + NL + NL +
        `Name: ${name}` + NL +
        `Email: ${email}` + NL + NL

    if (name && email)
        sendEmail(subject, body)
}

function contact2(event) {
    const form = document.getElementById("contact2");
    event.preventDefault();
    const name = form.elements['name'].value;
    const phone = form.elements['phone'].value;
    const email = form.elements['email'].value;
    const subject = form.elements['subject'].value;
    const state = form.elements['state'].value;
    const company = form.elements['company'].value;
    const message = form.elements['message'].value;

    const body =
        greeting +
        `We are interested to know more about SnapTransparency` + NL +
        `Please get back to us on below details` + NL + NL +
        `Name: ${name}` + NL +
        `Phone: ${phone}` + NL +
        `Email: ${email}` + NL +
        `State: ${state}` + NL +
        `Company: ${company}` + NL +
        `message: ${message}` + NL + NL

    if (name && email && phone && subject && state && company && message)
        sendEmail(subject, body)
}

function applyJob(event) {
    const form = document.getElementById("apply-job");
    event.preventDefault();

    const name = form.elements['name'].value;
    const phone = form.elements['phone'].value;
    const email = form.elements['email'].value;
    const position = form.elements['position'].value;
    const date = form.elements['date'].value;
    const link = form.elements['link'].value;

    const body =
        greeting +
        `I am interested to work at snapdragonls` + NL +
        `Here are the details` + NL + NL +
        `Name: ${name}` + NL +
        `Phone: ${phone}` + NL +
        `Email: ${email}` + NL +
        `Position: ${position}` + NL +
        `Date: ${date}` + NL +
        `Link: ${link}` + NL + NL
        
    if (name && email && phone && position && date && link)
        sendEmail("JOB APPLICATION", body)
}

function sendEmail(subject, body) {
    document.location = "mailto:" + emailId + "?subject=" + subject + "&body=" + body;
}