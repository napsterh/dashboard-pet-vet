
   const Paciente = ({paciente, setPaciente, eliminarPaciente }) => {

      const {
         mascota,
         dueno,
         email,
         alta,
         sintomas,
         id
      } = paciente

      const handleEliminar = () => {
         const respuesta = confirm('Deseas eliminar este paciente?')

         if(respuesta){
            eliminarPaciente(id)
         }
      } 

   return (
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <>
               <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                  <span className="font-normal normal-case">{mascota}</span>
               </p>
               <p className="font-bold mb-3 text-gray-700 uppercase">Dueño: {''}
                  <span className="font-normal normal-case">{dueno}</span>
               </p>
               <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                  <span className="font-normal normal-case">{email}</span>
               </p>
               <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {''}
                  <span className="font-normal normal-case">{alta}</span>
               </p>
               <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                  <span className="font-normal normal-case">{sintomas}</span>
               </p>
               <div className="flex justify-between mt-5">
                  <button
                     type="button"
                     className="py-2 px-2 bg-green-600 hover:bg-green-700 text-white font-bold uppercase rounded-lg"
                     onClick={ () => setPaciente(paciente) }
                  >Editar</button>
                  <button
                     type="button"
                     className="py-2 px-2 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                     onClick={ handleEliminar }
                  >Eliminar</button>
               </div>
            </>
      </div>
   )
}

export default Paciente