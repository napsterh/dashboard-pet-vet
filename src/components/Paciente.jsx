
const Paciente = () => {
   return (
      <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
         <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">Homer</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">Luna</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">rome.1205h@gmail.com</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {''}
            <span className="font-normal normal-case">12 de mayo 2023</span>
         </p>
         <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem </span>
         </p>
      </div>
   )
}

export default Paciente