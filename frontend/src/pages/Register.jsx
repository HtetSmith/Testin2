import '../styles/Form.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')           
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [password, setPassword] = useState('')     
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [agreeToTerms, setAgreeToTerms] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault() 
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
                        Sign Up and Start Learning
                    </h1>
                    <form onSubmit={handleSubmit}>
                        {/* Name input field */}
                        <div className="mb-6">
                            <label className="block text-gray-600 text-[16px] mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#8E56FF] bg-[#FFEDE2] text-[16px]"
                                required
                            />
                        </div>

                        {/* Email input field */}
                        <div className="mb-6">
                            <label className="block text-gray-600 text-[16px] mb-2">
                                Email address*
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#8E56FF] bg-[#FFEDE2] text-[16px]"
                                placeholder="name@gmail.com"
                                required
                            />
                        </div>

                        {/* Country and City fields in a grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="block text-gray-600 text-[16px] mb-2">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#8E56FF] bg-[#FFEDE2] text-[16px]"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 text-[16px] mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#8E56FF] bg-[#FFEDE2] text-[16px]"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password fields */}
                        <div className="mb-6">
                            <label className="block text-gray-600 text-[16px] mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#8E56FF] bg-[#FFEDE2] text-[16px]"
                                    placeholder="•••••••"
                                    required
                                />
                                <img
                                    src={showPassword ? '/src/assets/icons/visibilityoff.png' : '/src/assets/icons/visibility.png'}
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="pass-icon absolute right-3 top-1/2 transform cursor-pointer"
                                    alt="Toggle password visibility"
                                />
                            </div>
                        </div>

                        {/* Confirm Password field */}
                        <div className="mb-6">
                            <label className="block text-gray-600 text-[16px] mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-[#8E56FF] bg-[#FFEDE2] text-[16px]"
                                    placeholder="•••••••"
                                    required
                                />
                                <img
                                    src={showConfirmPassword ? '/src/assets/icons/visibilityoff.png' : '/src/assets/icons/visibility.png'}
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="pass-icon absolute right-3 top-1/2 transform cursor-pointer"
                                    alt="Toggle password visibility"
                                />
                            </div>
                        </div>

                        {/* Terms and Conditions checkbox */}
                        <div className="mb-6">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={agreeToTerms}
                                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                                    className="h-5 w-5 mr-2 border-gray-300 rounded bg-white focus:ring-0 accent-[#8E56FF] cursor-pointer"
                                    required
                                />
                                <span className="text-[16px] text-gray-600">
                                    By Signing Up I agree with{' '}
                                    <Link to="/terms" className="text-[#7453EC] underline font-bold">
                                        Terms & Conditions
                                    </Link>
                                </span>
                            </label>
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white font-bold text-[16px] py-2 rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
                        >
                            Register
                        </button>

                        {/* Login link */}
                        <p className="text-center mt-6 text-gray-600 text-[16px]">
                            Already have an Account?{' '}
                            <Link to="/login" className="text-[#7453EC] text-[16px] underline font-bold">
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register