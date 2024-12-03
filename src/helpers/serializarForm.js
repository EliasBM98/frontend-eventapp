

export const serializarForm = (formulario) => {
        const formData = new FormData(formulario)
        console.log(formData)
        const data = {}
        for(let [name, value] of formData){
            data[name]=value
        }
        return data
}
