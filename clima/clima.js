const axion = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axion.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b54ee0286bc83af4b8099d54ec7545e0`)

    // console.log(resp.data.main.temp);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}