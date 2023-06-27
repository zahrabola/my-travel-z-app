
////https://rapidapi.com/apidojo/api/travel-advisor?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel 
/* 
resturant list in boundary - 
*/
/* copies fromrapid api */ 
import axios from 'axios';
const URLtravel = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const GetPlacesData = async ( sw, ne ) => {
    try {
        const {data: {data}} = await axios.get(URLtravel, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '8213bd53bbmsheef81f1d6808d94p1a2e3djsnc7301be69b83',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
       
        return data;
    } catch (error) {
      console.log(error);
    }
}
/*
const options = {
  
  from rapid apiTFUYF
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', 
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    restaurant_tagcategory_standalone: '10591',
    restaurant_tagcategory: '10591',
    limit: '30',
    currency: 'USD',
    open_now: 'false',
    lunit: 'km',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Key': '8213bd53bbmsheef81f1d6808d94p1a2e3djsnc7301be69b83',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


from rapid api
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}*/
/* async = in useeffect .then */