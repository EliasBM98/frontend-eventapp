/**
 * Formateo de una fecha a dd-mm-yyyy
 * 
 * @param {string} dateString - fecha en formato iso 
 * @returns - fehca formato dd-mm-yyyy
 */
export const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-Es")
}


/**
 * Convierte fecha formateada a input yyyy-mm-dd
 * 
 * @param {string} dateString -fecha formato iso 
 * @returns {string} - fecha en formato input
 */
export const formatDateForInputs = (dateString) => {
    if(!dateString) return ''
    const date = new Date(dateString)
    return date.toISOString().split('T')[0]
}

