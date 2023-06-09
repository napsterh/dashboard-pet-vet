import { useState, useEffect } from "react"
import Error from "./error"


const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {


  const [ mascota, setMascota ] = useState('')
  const [ dueno, setDueno ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ alta, setAlta ] = useState('')
  const [ sintomas, setSintomas ] = useState('')

  const [ error, setError ] = useState(false)

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha;
  }

  useEffect(() => {
    if( Object.keys(paciente).length > 0 ){
      setMascota(paciente.mascota)
      setDueno(paciente.dueno)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if([ mascota, dueno, email, alta, sintomas ].includes('')){
      setError(true)
      return
    }

    setError(false)

    const objPaciente = {
      mascota,
      dueno,
      email,
      alta,
      sintomas
    }

  if(paciente.id){
    //Editando registro
    objPaciente.id = paciente.id;

    const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState )
    setPacientes(pacientesActualizados)
    setPaciente({})
  }else {
    //nuevo registro
    objPaciente.id = generarId(); 
    setPacientes([...pacientes, objPaciente]);
  }

    //Reiniciar form
    setMascota('')
    setDueno('')
    setEmail('')
    setAlta('')
    setSintomas('')

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administrar</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        { error &&  
          <Error
            mensaje='Todos los campos son obligatorios'
          /> 
        }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={mascota}
            onChange={ (e) => setMascota(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="dueno" className="block text-gray-700 uppercase font-bold">
            Nombre del Dueño
          </label>
          <input
            id="dueno"
            type="text"
            placeholder="Nombre del dueño"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={dueno}
            onChange={ (e) => setDueno(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de contacto del dueño"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Email de contacto del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={ (e) => setAlta(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
          />
        </div>
        <input
          type="submit"
          value={ paciente.id ? 'Editar paciente' : 'Agregar paciente' }
          className="bg-green-600 w-full p-3 text-white uppercase font-bold hover:bg-green-700 cursor-pointer transition-colors"
        />
      </form>
    </div>
  )
}

export default Formulario