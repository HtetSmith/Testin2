import '../styles/Form.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Login() {
  // State to manage input values and visibility toggle
    const [email, setEmail] = useState('')           
    const [password, setPassword] = useState('')     
    const [keepSignedIn, setKeepSignedIn] = useState(false) 
    const [showPassword, setShowPassword] = useState(false) 
  // Function to handle form submission
    const handleSubmit = (e) => 
        {
            e.preventDefault() 
        }
  // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword) // Switch between true and false
    }
    return (
        <div className="form-container">
            <div className="form-box">
                <div className="form-left">
                    <img
                        src="/src/assets/photos/LearningSystem.png"
                        alt="Learning illustration"
                        className="form-illustration"
                    />
                </div>
                <div className="form-right">
                    <h1 className="text-[32px] font-bold mb-6 text-center">
                        Log in to continue your learning journey
                    </h1>
                    <form onSubmit={handleSubmit}>
                        {/* Email input field */}
                        <div className="mb-6">
                            <label className="block text-gray-600 text-[16px] mb-2">
                                Email address*
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border-2 rounded-lg  focus:outline-none focus:border-[#8E56FF] bg-[#FFEDE2] text-[16px]"
                                placeholder="name@gmail.com"
                                required
                            />
                        </div>
                        {/* Password input field with visibility toggle */}
                        <div className="mb-6">
                            <label className="block text-gray-600 text-[16px] mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                type={showPassword ? 'text' : 'password'}  // Toggle between text and password
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#8E56FF] bg-[#FFEDE2] text-[16px]"
                                placeholder="•••••••"
                                required
                                />
                                {/* Icon for showing/hiding password */}
                                <img
                                src={
                                    showPassword
                                    ? '/src/assets/icons/visibilityoff.png'  // Eye-off icon when password is visible
                                    : '/src/assets/icons/visibility.png'     // Eye icon when password is hidden
                                }
                                onClick={togglePasswordVisibility}  // Toggle visibility on icon click
                                className="pass-icon absolute right-3 top-1/2 transform  cursor-pointer"
                                alt="Toggle password visibility"
                                />
                            </div>
                        </div>
                        {/* Checkbox for "Keep me signed in" */}
                        <div className="flex items-center justify-between mb-6">
                            <label className="flex items-center ">
                                <input
                                type="checkbox"
                                checked={keepSignedIn}
                                onChange={(e) => setKeepSignedIn(e.target.checked)}
                                className="h-5 w-5 mr-2 border-gray-300 rounded bg-white focus:ring-0 accent-[#8E56FF] cursor-pointer text-slate-950"
                                />
                                <span className="text-[16px] text-gray-600">Keep me signed in</span>
                            </label>
                            <Link to="/forgot-password" className="text-[16px] text-[#7453EC] underline ">
                                Forgot password
                            </Link>
                        </div>
                        {/* Submit button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white font-bold text-[16px] py-2 rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
                        >
                            LOGIN
                        </button>
                        {/* Divider for alternative login methods */}
                        <div className="text-center my-4 text-gray-500">OR</div>
                        {/* Google login button */}
                        <button
                        type="button"
                        className="w-full border-2 border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                        >
                            <img src="/src/assets/icons/google.png" alt="Google" className="w-5 h-5" />
                            Sign in with Google
                        </button>
                        {/* Register link */}
                        <p className="text-center mt-6 text-gray-600 text-[16px]">
                        First time here?{' '}
                        <Link to="/register" className="text-[#7453EC] text-[16px] underline font-bold">
                            Register
                        </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login
