fetch("https://api.kinopoisk.dev/v1.3/movie?page=2&limit=6" , {
    method: "GET", 
    headers: {
        'X-API-KEY' : 'A32AZC0-3BDMNDX-N1NC3E6-8QFZP7H'
    }
})
.then(response => response.json())
.then(data => {
    const image_list = data.docs;
    const container = document.querySelector('.recomend-titles')
        for (let i = 0; i < image_list.length; i++) {
        const film = image_list[i];
        console.log(film)
        html_temp = 
        `
            <div class="cards">
                    <div class="card-img">
                    <img src="${film.poster.previewUrl}" alt="ничего не получилось" width="40%">
                    </div>
                <p class="card-title"><span>название: </span>${film.name}</p>
                <p class="year"><span>год выпуска: </span>${film.year}</p>
            </div>
        `

        container.innerHTML += html_temp;
        }
  
})
.catch(error => {
    console.log(error)
});



