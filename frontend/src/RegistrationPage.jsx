// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import axios from 'axios';
// import './R.css';

// const RegistrationPage = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [dob, setDob] = useState('');
//   const [gender, setGender] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   const validateForm = () => {
//     if (!name || !email || !password || !dob || !gender || !mobileNumber) {
//       setError('All fields are required.');
//       return false;
//     }

//     const passwordRegex = /^[A-Za-z!@#$%^&*()_+=\-{}\[\]:;"'<>,.?\\|`~]+$/;
//     if (!passwordRegex.test(password)) {
//       setError('Password can only contain letters and special characters.');
//       return false;
//     }

//     return true;
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   if (!validateForm()) {
//   //     return;
//   //   }

//   //   try {
//   //     const response = await axios.post('http://localhost:5000/api/auth/register', {
//   //       name,
//   //       email,
//   //       password,
//   //       dob,
//   //       gender,
//   //       mobileNumber
//   //     });
//   //     if (response.data.success) {
//   //       setSuccess('Registration successful. Redirecting to Login page...');
//   //       setTimeout(() => {
//   //         navigate('/login');
//   //       }, 2000);
//   //     } else {
//   //       setError(response.data.message);
//   //     }
//   //   } catch (error) {
//   //     setError('An error occurred. Please try again.');
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form inputs before proceeding
//     if (!validateForm()) {
//       return;
//     }

//     try {
//       // Send registration data to the server
//       const response = await axios.post('http://localhost:5000/api/auth/register', {
//         name,
//         email,
//         password,
//         dob,
//         gender,
//         mobileNumber
//       });

//       // Check server response
//       if (response.data.success) {
//         // If registration is successful, show success message and redirect to login page
//         setSuccess('Registration successful. Redirecting to Login page...');
//         setTimeout(() => {
//           navigate('/login');
//         }, 2000); // Redirect after 2 seconds
//       } else {
//         // If server returns an error message, set error state with the message
//         setError(response.data.message);
//       }
//     } catch (error) {
//       // If an error occurs during API call, set error state
//       setError('An error occurred. Please try again.');
//     }
//   };


//   return (
//     <div className="registration-page">

//       <form onSubmit={handleSubmit}>
//         <h1>Student Registration</h1>
//         <div>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} maxLength={8} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <div>
//           <label>Date of Birth:</label>
//           <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
//         </div>
//         <div>
//           <label>Gender:</label>
//           <select value={gender} onChange={(e) => setGender(e.target.value)}>
//             <option value="">Select</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div>
//           <label>Mobile Number:</label>
//           <input type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
//         </div>
//         <button type="submit">Register</button>
//         <p>Already have an account? <Link to="/">Login</Link></p>
//       </form>
//       <div>
//         {error && <p className="error">{error}</p>}
//         {success && <p className="success">{success}</p>}
//       </div>


//     </div>
//   );
// };

// export default RegistrationPage;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import './R.css';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !email || !password || !dob || !gender || !mobileNumber) {
      toast.error('All fields are required.');
      return false;
    }

    const passwordRegex = /^[A-Za-z!@#$%^&*()_+=\-{}\[\]:;"'<>,.?\\|`~]+$/;
    if (!passwordRegex.test(password)) {
      toast.error('Password can only contain letters and special characters.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs before proceeding
    if (!validateForm()) {
      return;
    }

    try {
      // Send registration data to the server
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        dob,
        gender,
        mobileNumber
      });

      // Check server response
      if (response.data.success) {
        // If registration is successful, show success toast and redirect to login page
        toast.success('Registration successful. Redirecting to Login page...');
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Redirect after 2 seconds
      } else {
        // If server returns an error message, show error toast with the message
        toast.error(response.data.message);
      }
    } catch (error) {
      // If an error occurs during API call, show error toast
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="registration-page">
      <form onSubmit={handleSubmit}>
        <h1>Student Registration</h1>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} maxLength={8} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Mobile Number:</label>
          <input type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </div>
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default RegistrationPage;
