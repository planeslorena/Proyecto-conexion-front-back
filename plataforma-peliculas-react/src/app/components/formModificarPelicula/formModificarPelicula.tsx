import Pelicula from "@/app/model/pelicula.model";
import { SubmitHandler, useForm } from "react-hook-form";

export const FormModificarPelicula = (props: any) => {
    const { pelicula , modificarPelicula} = props
    const { register, handleSubmit, formState: { errors } } = useForm<Pelicula>();
    const onSubmit: SubmitHandler<Pelicula> = (peliculaActualizada) => {
        console.log(pelicula)
       peliculaActualizada.actoresPrincipales.forEach((act,i) => {
            if (act == '') {
                peliculaActualizada.actoresPrincipales.splice(i);
            }
        });
        peliculaActualizada.listaGeneros.forEach((gen,i) => {
            if (gen  == '') {
                peliculaActualizada.listaGeneros.splice(i,1);
            }
        });


        const newpelicula = {
            ...peliculaActualizada,
            duracion: Number(peliculaActualizada.duracion),
            id: pelicula.id
        }
        console.log(newpelicula)
        modificarPelicula(newpelicula);

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className='form-label'>Titulo</label>
                <input className='form-control' {...register("titulo", { required: true })} defaultValue={pelicula.titulo} />
                {errors.titulo && <small className='texto-validaciones'>Por favor ingrese el titulo de la pelicula</small>}
            </div>
            <div>
                <label className='form-label label-cv'>Actores Principales</label>
                <div className='input-group'>
                    <input className='form-control' {...register("actoresPrincipales.0", {
                        required: "Por favor ingrese al menos un actor principal",
                        maxLength: { value: 30, message: "Este campo no puede exceder los 30 caracteres." }
                    })} defaultValue={pelicula.actoresPrincipales[0]}/>
                    <input className='form-control'{...register("actoresPrincipales.1")} defaultValue={pelicula.actoresPrincipales[1]}/>
                    <input className='form-control'{...register("actoresPrincipales.2")} defaultValue={pelicula.actoresPrincipales[2]}/>
                    <input className='form-control'{...register("actoresPrincipales.3")} defaultValue={pelicula.actoresPrincipales[3]}/>
                </div>
                {errors.actoresPrincipales && <small className='texto-validaciones'>{errors.actoresPrincipales.message}</small>}
            </div>
            <div>
                <label className='form-label'>Actores Principales</label>
                <div className='input-group'>
                    <input className='form-control' {...register("listaGeneros.0", {
                        required: "Por favor ingrese al menos un genero",
                        maxLength: { value: 30, message: "Este campo no puede exceder los 30 caracteres." }
                    })} defaultValue={pelicula.listaGeneros[0]}/>
                    <input className='form-control'{...register("listaGeneros.1")} defaultValue={pelicula.listaGeneros[1]} />
                    <input className='form-control'{...register("listaGeneros.2")} defaultValue={pelicula.listaGeneros[2]}/>
                </div>
                {errors.listaGeneros && <small className='texto-validaciones'>{errors.listaGeneros.message}</small>}
            </div>
            <div>
                <label className='form-label'>Duración</label>
                <input type = "number" className='form-control' {...register("duracion", {
                    required: "Por favor la duracion de la pelicula",
                    /*pattern: { value: /\d+/, message: "Este campo es númerico" }*/
                })} /*defaultValue={pelicula.duracion}*//>
                {errors.duracion && <small className='texto-validaciones'>{errors.duracion.message}</small>}
            </div>
            <div>
                <label className='form-label label-cv'>Imagen</label>
                <input className='form-control input-cv' {...register("imagen", { required: "Por favor ingrese la direccion de la imagen", })} defaultValue={pelicula.imagen}/>
                {errors.imagen && <small className='texto-validaciones'>{errors.imagen.message}</small>}
            </div>
            <div>
                <label className='form-label label-cv'>Fecha de lanzamiento</label>
                <input className='form-control input-cv' {...register("fechaLanzamiento", { required: "Por favor ingrese la fecha de lanzamiento", })} defaultValue={pelicula.fechaLanzamiento}/>
                {errors.fechaLanzamiento && <small className='texto-validaciones'>{errors.fechaLanzamiento.message}</small>}
            </div>
            <div>
                <label className='form-label label-cv'>Sinopsis</label>
                <textarea className='form-control input-cv' {...register("sinopsis")} name="textarea" defaultValue={pelicula.sinopsis} />
            </div>
            <input type="submit" className='btn' />
        </form>

    )
}
