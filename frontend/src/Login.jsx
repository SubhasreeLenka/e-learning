// // // Login.js
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate, Link } from 'react-router-dom';
// // import './Login.css'; // Assuming you have a CSS file for styling

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   // const handleLogin = async (e) => {
// //   //   e.preventDefault();
// //   //   try {
// //   //     const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
// //   //     if (response.data.token) {
// //   //       localStorage.setItem('auth-token', response.data.token);
// //   //       navigate('/students');
// //   //     } else {
// //   //       setError('Invalid credentials');
// //   //     }
// //   //   } catch (error) {
// //   //     setError('An error occurred. Please try again.');
// //   //     console.error('There was an error logging in!', error);
// //   //   }
// //   // };
// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
// //       if (response.data.token) {
// //         localStorage.setItem('auth-token', response.data.token);
// //         navigate('/home');
// //       } else {
// //         setError('Invalid credentials');
// //       }
// //     } catch (error) {
// //       if (error.response) {
// //         // The request was made and the server responded with a status code
// //         console.error('Server responded with status code:', error.response.status);
// //         setError('Server error. Please try again later.');
// //       } else if (error.request) {
// //         // The request was made but no response was received
// //         console.error('No response received:', error.request);
// //         setError('No response from server. Please try again later.');
// //       } else {
// //         // Something happened in setting up the request that triggered an error
// //         console.error('Error setting up request:', error.message);
// //         setError('An error occurred. Please try again.');
// //       }
// //     }
// //   };


// //   return (
// //     <div className="login-page">

// //       <form onSubmit={handleLogin}>
// //         <div>
// //           <h2>Login</h2>
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </div>
// //         <div>
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //         </div>
// //         {error && <p className="error">{error}</p>}
// //         <button type="submit">Login</button>

// //         <p>
// //           Don't have an account? <Link to="/signup">Sign up now</Link>
// //         </p>
// //       </form>

// //     </div>
// //   );
// // };

// // export default Login;
// // Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import './Login.css'; // Assuming you have a CSS file for styling

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

//       if (response.data.token) {
//         localStorage.setItem('auth-token', response.data.token);
//         sessionStorage.setItem('name', response.data.name); // Store the name in session storage
//         sessionStorage.setItem('userId', response.data.userId); // Optionally store userId for later use
//         navigate('/home');
//       } else {
//         setError('Invalid credentials');
//       }
//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         console.error('Server responded with status code:', error.response.status);
//         setError('Server error. Please try again later.');
//       } else if (error.request) {
//         // The request was made but no response was received
//         console.error('No response received:', error.request);
//         setError('No response from server. Please try again later.');
//       } else {
//         // Something happened in setting up the request that triggered an error
//         console.error('Error setting up request:', error.message);
//         setError('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="login-page">
//       <form onSubmit={handleLogin}>
//         <div>
//           <h2>Login</h2>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Login</button>
//         <p>
//           Don't have an account? <Link to="/signup">Sign up now</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import './Login.css'; // Assuming you have a CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      if (response.data.token) {
        localStorage.setItem('auth-token', response.data.token);
        sessionStorage.setItem('name', response.data.name); // Store the name in session storage
        sessionStorage.setItem('userId', response.data.userId); // Optionally store userId for later use
        navigate('/home');
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with status code:', error.response.status);
        toast.error('Server error. Please try again later.');
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        toast.error('No response from server. Please try again later.');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error setting up request:', error.message);
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <div>
          <h2>Login</h2>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign up now</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
