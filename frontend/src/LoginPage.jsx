// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './LoginPage.css'; // Optional: add some CSS for styling

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       //   const response = await axios.post('http://localhost:5000/api/auth/login', {
//       //     email,
//       //     password
//       //   });

//       //   if (response.data.success) {
//       //     // Store token in localStorage or context if needed
//       //     localStorage.setItem('token', response.data.token);

//       // Check if the user is admin
//       if (email === 'admin@12.com' && password === 'Password') {
//         // Redirect to admin dashboard
//         navigate('/admin');
//       } else {
//         setError('Invalid admin credentials.');
//       }
//       //   } else {
//       //     setError(response.data.message);
//       //   }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="login-page">

//       <form onSubmit={handleSubmit}>
//         <div>
//           <h2>Admin Login</h2>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {error && <p className="error">{error}</p>}
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import './LoginPage.css'; // Optional: add some CSS for styling

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate API call with hardcoded credentials for demo
      // Replace this with your actual API call using axios
      if (email === 'admin@12.com' && password === 'Password') {
        // Redirect to admin dashboard on successful login
        navigate('/admin');
      } else {
        // Show error toast for invalid credentials
        toast.error('Invalid admin credentials.');
      }
    } catch (error) {
      // Show error toast if an unexpected error occurs
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Admin Login</h2>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
