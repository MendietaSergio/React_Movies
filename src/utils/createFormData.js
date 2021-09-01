//cambia el formate a los datos ingresados.

const createFormData = (data) => {//recibe una data
    const formData = new FormData();//crea un nuevo FormData
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);//pushea la data.
    });
    return formData; 
    //retorna formData, lo mismo que nos mandó pero en el formato que necesita el backend
  };
  
  export default createFormData;