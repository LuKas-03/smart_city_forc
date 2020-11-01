

const handleErrors = (response) => {
  if(!response.ok) {
      response.json().then((result)=>{
         if(result.errorCode === -1 ){
           console.log("result err", result);
         }
     })
     let error = new Error(response.statusText);
			 error.status = response.status;
			 console.log("response not Ok", response);
     throw error;
    }
    return response;
}

/*
  Обертка над базовым fetch убирающая дублирование параметров
*/
export default (url, customConfig) => {
    const defaultConfig = {
      method: "GET",
      credentials: "same-origin",
    }
    const config = Object.assign(defaultConfig, customConfig);
    return fetch('http://localhost:9000' + url, config)
      .then((response)=> handleErrors(response, url))
      .then(res => res.json())
      .catch(err => {
        if(process.env.NODE_ENV === 'development') { // TODO: сохранять ошибку куда-либо
          console.error(err);
        }
        throw err;
      });
  }
