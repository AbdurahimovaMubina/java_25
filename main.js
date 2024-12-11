// const BASE_URL = 'https://api.nationalize.io/'
// let params = '?name='

// let ism = 'mubina'

// let FULL_API = BASE_URL +params+ ism

// const getData = async () => {
//     const res = await fetch(FULL_API)
//     const data = await res.json()

//     console.log(data);   
// }
// getData()

const body = document.querySelector('.container')


const __API = 'https://ipinfo.io/json'

const getData = async () => {
    const res = await fetch(__API)
    const data = await res.json()  
    render(data); 
    // console.log(data);
                      
};

getData();

function render(obj) {
    let [first, second] = obj.loc.split(',')
    
    let src_link = `https://www.google.com/maps?q=${first},${second}&z=15&output=embed`
    
    const iframe = document.createElement('iframe')
    iframe.classList.add('map')
    iframe.src = src_link
    iframe.width = 600   
    iframe.height = 400    

    let loc = document.querySelector('.title')
    loc.textContent = `Kenglik: ${obj.loc}`

    let country = document.querySelector('.country')
    country.textContent = `Mamlakat: ${obj.country}`

     let region = document.querySelector('.region')
    region.textContent = `Shahar: ${obj.region}`

    let ip = document.querySelector('.ip')
    ip.textContent = `IP Manzil: ${obj.ip}`

    let org = document.querySelector('.org')
    org.textContent = `Internet provayder: ${obj.org}`


    body.appendChild(iframe)
}
