
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        

        signIn(email,password)
        .then(result =>{
            const loginUser = result.user;
            console.log(loginUser);
            const user = {email}
            axios.post('http://localhost:5000/jwt',user,{withCredentials: true})
            .then(res => {
                console.log(res.data);
                if(res.data.success){
                    navigate(location?.state ? location?.state : '/')
                }
            })

        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className="hero min-h-screen my-5">
            <div className="hero-content flex justify-between">
                <div className="w-1/2 mr-16">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <h1>New User <Link className='text-red-300' to={'/signUp'}>SignUp</Link></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;