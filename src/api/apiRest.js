
/**
 * Funcion para hacer consultas a la api.
 * 
 * @param {String} url - Url base que normalmente se pasará con un endpoint según convenga.
 * @param {Object} method - método con el que se va a hacer la consulta ('GET', 'DELETE', 'POST', 'PUT')
 * @param {Object} body - pasado en 'POST' 'PUT' será la información que se envía a la bbdd
 * @returns {Promise} - Promesa cumplida si se realiza la consulta o error si falla
 */

export const apiRest = async (url, method, body) => {
    
    let options={}

    if (method == 'POST' || method == 'PUT') {
        options = {
            method,
            body: JSON.stringify(body),
            mode: 'cors',
            headers:{
                "Content-Type": "application/json"
            }
        //Ojo al enviar un multipartform ya no envias un json puede ser necesario eliminar el header meter un if para decir que tipo de data envias
        }
    } else if (method == 'GET' || method == 'DELETE') {
        options = {
            mode: 'cors',
            method
        }
    }

    try {
        const resp = await fetch(url, options)
        if(resp.ok){
            console.log('entra en ok')
            return resp.json()
        } else {
            throw ('Error en la conexion')
        };
    } catch (error) {
        //console.log(error)
        throw error;
    }

}

