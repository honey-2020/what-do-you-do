var obj;

fetch('https://apis.scrimba.com/bored/api/activity')
    .then(response => response.json())
    .then(data => obj = data)
    .then(function(data) {

        var attivita = document.createElement("h2");
        var tipo = document.createElement("p");
        var link = document.createElement("small");


        attivita.innerHTML = obj.activity;
        document.body.appendChild(attivita);   

        tipo.innerHTML = obj.type;
        document.body.appendChild(tipo); 

        link.innerHTML = obj.link;
        document.body.appendChild(link);

    })