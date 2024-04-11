import { login } from "@/app/services/Login";
import { SubmitHandler, useForm } from "react-hook-form";

export const Login = () => {

    interface UsuarioLogin {
        username: string,
        password: string,
    }
    
    const { register, handleSubmit, formState: { errors } } = useForm<UsuarioLogin>();
    const onSubmit: SubmitHandler<UsuarioLogin> = async (datos) => {
        const resp = await login(datos);
        alert(resp.accessToken);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className='form-label'>Usuario</label>
                <input className='form-control' {...register("username", { required: true })} />
            </div>
            <div>
                <label className='form-label'>Contraseña</label>
                <input className='form-control' {...register("password", { required: true })} />
            </div>
                   
            <input type="submit" className='btn' />
        </form>
    )
}