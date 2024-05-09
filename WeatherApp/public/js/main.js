const submitBtn = document.getElementById("submitBtn")

const getInfo = (e) => {
    e.preventDefault();
    let url = `api.openweathermap.org/data/2.5/weather?q=multan&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
}

submitBtn.addEventListener("click",getInfo)
