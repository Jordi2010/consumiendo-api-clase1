
//ESTE MÉTODO SIRVE PARA CARGAR INFORMACIÓN DE UNA API

async function getData(){

    //await es para esperar a que se cargue la información y se cargue la respuesta
    try {
        const response = await fetch(/*"LA URL DE LA API"*/"https://rickandmortyapi.com/api/character")
        const data = await response.json()
        console.log(data);
        //console.log(response)
        //const article = document.createRange.createConst

        data.results.forEach(element => {
            const article = document.createRange().createContextualFragment(`
                <article>
                    <div class="image-container">
                        <img src="${element.image}"></img>
                    </div>
                    <h2>$(element.name)</h2>
                    <span>$(element.status)</span>
                </article>
                `)
                const main = document.querySelector("main")
                main.append(article)
        });
    } catch (error) {
        console.log('Ha ocurrido un error en la petición $(error)');
    }
}

getData()