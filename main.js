/*
var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
]

document.write(elements.map(function(element) {
    return element.length;
}));

document.write(elements.map((element) => {
    return element.length;
}));
*/

function createScreen () {

    var newDiv = document.createElement("DIV");

    newDiv.classList.add('new-screen')

    var containerDiv = document.getElementById('btn-container');

    containerDiv.appendChild(newDiv);

    var form = document.createElement("FORM");

    form.setAttribute("action", "https://www.twitch.tv/terrorfps1");
    form.setAttribute("target", "_blank");
    form.classList.add('form')

    newDiv.appendChild(form);

    var labels = {
        labelNome: document.createElement("LABEL"),
        labelIdade: document.createElement("LABEL"),
        labelEmail: document.createElement("LABEL"),
        "inners": [
            "Digite seu nome aqui: ",
            "Digite sua idade aqui: ",
            "Digite seu email aqui: "
        ]
    }

    labels.labelNome.setAttribute("for", "nome");
    labels.labelNome.innerHTML = labels.inners[0];


    labels.labelIdade.setAttribute("for", "idade");
    labels.labelIdade.innerHTML = labels.inners[1];

    labels.labelEmail.setAttribute("for", "email");
    labels.labelEmail.innerHTML = labels.inners[2];



    var inputs = {
        inpNome: document.createElement("INPUT"),
        inpIdade: document.createElement("INPUT"),
        inpEmail: document.createElement("INPUT")
    }

    inputs.inpNome.setAttribute("type", "text");
    inputs.inpNome.setAttribute("name", "nome");
    inputs.inpNome.setAttribute("id", "nome");
    inputs.inpNome.setAttribute("placeholder", "Coloque seu nome aqui");

    inputs.inpIdade.setAttribute("type", "date");
    inputs.inpIdade.setAttribute("name", "idade");
    inputs.inpIdade.setAttribute("id", "idade");

    inputs.inpEmail.setAttribute("type", "email");
    inputs.inpEmail.setAttribute("name", "email");
    inputs.inpEmail.setAttribute("id", "email");
    inputs.inpEmail.setAttribute("placeholder", "Coloque seu email aqui");

    form.appendChild(labels.labelNome);
    form.appendChild(inputs.inpNome);
    form.appendChild(labels.labelIdade)
    form.appendChild(inputs.inpIdade);
    form.appendChild(labels.labelEmail);
    form.appendChild(inputs.inpEmail);

    var btn = document.createElement("BUTTON");

    btn.setAttribute("type", "submit")
    btn.classList.add('btn-1')
    btn.innerHTML = "Clique aqui"

    form.appendChild(btn)



}


