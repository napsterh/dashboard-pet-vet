import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPaciente}) => {
   return (
      <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">

         { pacientes && pacientes.length ? (
            <>
               <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
               <p className="text-xl mt-5 mb-10 text-center">
                  Administra tus {''}
                  <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
               </p>
               {pacientes.map( (paciente, index) => (
                  <Paciente
                     paciente={paciente}
                     key={index}
                     setPaciente={setPaciente}
                  />
               ))}
            </>
         ) : (
            <>
               <h2 className="font-black text-center text-3xl">No hay Pacientes</h2>
               <p className="text-xl mt-5 mb-10 text-center">
                  Comienza agregando pacientes {''}
                  <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
               </p>
            </>
         )}
      </div>
   )
}

export default ListadoPacientes