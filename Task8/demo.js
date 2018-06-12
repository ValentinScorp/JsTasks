// ======================== P1 ========================
// Make a request to free API with next parameters:
// Method = GET ; URL = https://api.appery.io/rest/1/db/collections/testCollection ;
// Headers = "X-Appery-Database-Id: 58226eeee4b0a696f3532f3d"
// Result should be an array of objects with next structure:
// obj : { name: String, title: String, number: Number, flag: Boolean } ,
// there will be also _id , _createdAt and _updatedAt fields,
// those are internal fields user shouldn't see it.
// Map result on the page as you see fit so all 4 main properties will be visible

// ======================== P2 ========================

// open sendgrid.com site and register free account
// open settings -> API keys -> create api "Full Access" key for usage
// open documentation (https://sendgrid.com/docs/index.html) and find under API -> SendGrid v3 API Documentation
// After page loads you will see main page that describes
// how to send an email through sendgrid service.
// Create a request that sends an email to your email account using apikey you created earlier

function addDivToBody(key, value, margin) {
  var div = document.createElement('div');
  div.innerHTML = key + ': ' + value;
  div.style.marginLeft = margin;
  document.body.appendChild(div);
}

function sendRequest() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var resp = JSON.parse(this.responseText);
      for (var i in resp) {
        addDivToBody('element', i, '0px');
        addDivToBody('name', resp[i].name, '50px');
        addDivToBody('title', resp[i].title, '50px');
        addDivToBody('number', resp[i].number, '50px');
        addDivToBody('flag', resp[i].flag, '50px');
      }
    }
  };

  httpRequest.open('GET', 'https://api.appery.io/rest/1/db/collections/testCollection', false);
  httpRequest.setRequestHeader('X-Appery-Database-Id', '58226eeee4b0a696f3532f3d');
  httpRequest.send();

  if (httpRequest.status != 200) {
    alert(httpRequest.status + ': ' + httpRequest.statusText);
  }
}

function sendEmail() {
  var data = JSON.stringify({
    "personalizations": [{
      "to": [
        {
          "email": "valentin.blo@gmail.com"
        }
      ],
      "subject": "Hello, World!"
    }],
  "from": {
    "email": "from_address@example.com"
  },
  "content": [
    {
      "type": "text/plain",
      "value": "without jquery"
    }
  ]
});

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open('POST', 'https://api.sendgrid.com/v3/mail/send');
  xhr.setRequestHeader('authorization',
      'Bearer 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');
  xhr.setRequestHeader('content-type', 'application/json');

  xhr.send(data);
}
