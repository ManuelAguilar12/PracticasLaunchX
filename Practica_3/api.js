const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./nofound.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeInfo = data.abilities;
            let nombrePokemon = data.species.name;
            pokeImage(pokeImg);
            pokeData(pokeInfo);
            pokeNombre(nombrePokemon);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData = (abilities) => {
    let pokeAbilities = document.getElementById("abilities");
    const abilitiesName = abilities.map(item => item.ability.name);
    pokeAbilities.innerHTML = "<p>" + "Lista de Habilidades:" + "</p>" + "<p>" + abilitiesName + "</p>" + "<br>";

}

const pokeNombre = (species) => {
    const pokeNomb = document.getElementById("quienes");
    const nombreP = species;
    const nombrep2 = nombreP.toUpperCase();
    pokeNomb.innerHTML = "<p>" + nombrep2 + "</p>";
}