
export const apiRest = async (url, method={}, body={}) => {
    let options={}

    if (method == 'post' || method == 'put') {
        options = {
            method,
            body: JSON.stringify(body)
  
        }
    } else if (method == 'get' || method == 'delete') {
        options = {
            method
        }
    }

    try {
        const resp = await fetch(url, options)

        console.log('conectando a la base de datos')
        if(resp.ok){
            return await resp.json()
        } else {
            throw ('Error en la conexion')
        };
    } catch (error) {
        throw error;
    }

}

