const emailId = 'contact@snapdragonls.com'

function contact1(event) {
    const form = document.getElementById("contact1");
    event.preventDefault();
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const subject = `You have been contacted by: ${name}\n`
    const body =
        `Name: ${name}\n
    Email: ${email}\n`

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
        `
    Name: ${name}\n
    Phone: ${phone}\n
    Email: ${email}\n
    State: ${state}\n
    Company: ${company}\n\n
    message: ${message}\n
    `
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
        `
        Name: ${name}\n
        Phone: ${phone}\n
        Email: ${email}\n
        Position: ${position}\n
        Date: ${date}\n\n
        Link: ${link}\n
        `
    if (name && email && phone && position && date && link)
        sendEmail("JOB APPLICATION", body)
}

function sendEmail(subject, body) {
    document.location = "mailto:" + emailId + "?subject=" + subject + "&body=" + body;
}