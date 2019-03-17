const load = () => {
    axios.get('http://roodkristo.ikt.khk.ee/cockpit/api/collections/get/loomad')
        .then((response) => {
        console.log(response.data.entries);

        let content = document.createElement('li');

        response.data.entries.forEach((element, index,) => {
            let div = document.createElement('div');
            let t = document.createTextNode(element.nimi);

            let k = document.createTextNode(element.kirjeldus);
            let v = document.createTextNode(element.vanus);
            let s = document.createTextNode(element.sugu);
            let va = document.createTextNode(element.varjupaigas_alates);
            let sk = document.createTextNode(element.ster_kastr);
            let nupp = document.createElement('a');
            let p = document.createElement('p');
            let img = document.createElement('img');
            let img2 = document.createElement('img');
            let modal = document.createElement('div');
            let modalkast = document.createElement('div');
            img.src = element.pilt.path;
            img2.src = element.pilt.path;


            div.appendChild(img);
            p.appendChild(t);
            div.appendChild(p);
            div.setAttribute("class", "loom"+index);
            modalkast.setAttribute("id", "myModal"+index);
            modalkast.setAttribute("class", "modal");
            modal.setAttribute("class","modalInfo"+index);
            nupp.setAttribute("id", "myBtn"+index);
            nupp.href="#";
            /*modal.appendChild(v);*/
            modal.appendChild(img2);
            modal.appendChild(document.createTextNode("Vanus: "));
            modal.appendChild(v);
            modal.appendChild(document.createElement("br"));
            modal.appendChild(document.createTextNode("Sugu: "));
            modal.appendChild(s);
            modal.appendChild(document.createElement("br"));
            modal.appendChild(document.createTextNode("Varjupaigas alatest: "));
            modal.appendChild(va);
            modal.appendChild(document.createElement("br"));
            modal.appendChild(document.createTextNode("Steriliseeritud/Kastreeritud: "));
            modal.appendChild(sk);
            modal.appendChild(document.createElement("br"));
            modal.appendChild(document.createTextNode("Kirjeldus: "));
            modal.appendChild(k);

            document.querySelector(".animalprofiles").appendChild(modalkast);

            document.querySelector("#app").appendChild(nupp);
            document.querySelector("#myBtn"+index).appendChild(div);
            document.querySelector("#myModal"+index).appendChild(modal);
            /*document.querySelector(".myBtn"+index).appendChild(modalkast);*/
            // Get the modal
            var modals = modals+index;
            modals = document.getElementById("myModal"+index);



// Get the button that opens the modal
            var btn = btn+index;
            btn = document.getElementById("myBtn"+index);


// When the user clicks the button, open the modal

            btn.onclick = function() {
                modals.style.display = "block";
            }


// When the user clicks anywhere outside of the modal, close it
            window.addEventListener("click", function(event){
                if (event.target == modals) {
                    modals.style.display = "none";
                }
            });

        })
    })
    .catch((error) => {
        console.log(error)
})
};

window.onload = load;


