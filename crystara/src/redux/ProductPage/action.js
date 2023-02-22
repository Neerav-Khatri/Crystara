import axios from "axios"

export const getAllProductsNavbarAPI=async()=>{
    let res = await axios.get(
      `https://naughty-frog-cummerbund.cyclic.app/collection`
    );
    return res.data
}

export const getCountryFlag=async(country="in")=>{
    let res = await axios.get(`https://countryflagsapi.com/png/${country}`);
    return res.data
}