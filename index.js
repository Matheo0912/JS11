document.getElementById("find").addEventListener("click", function () {
    var url = "https://dattebayo-api.onrender.com/characters"
    var bilde = document.getElementById("navn").value.toLowerCase()


    fetch(url)
        .then(response => response.json())
        .then(data => {
            let found = false;
            data.characters.forEach(element => {
                console.log(element);

                if (element.name.toLowerCase().includes(bilde)) {
                    document.getElementById("output").src = element.images[0];
                    document.getElementById("output1").innerHTML = element.personal.birthdate;
                    document.getElementById("output2").innerHTML = element.uniqueTraits[0];
                    found = true;
                }
            });
            
            if (!found) {
                alert("Character not found")
            }
        })
})