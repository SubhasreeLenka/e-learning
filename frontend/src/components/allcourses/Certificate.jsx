// import React, { useEffect, useState } from 'react';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';
// import './certificate.css';
// import axios from 'axios';

// const Certificate = ({ courseName }) => {
//   const [name, setName] = useState('');

//   useEffect(() => {
//     // Fetch username from the database
//     const fetchUsername = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/auth/users'); // Adjust the endpoint based on your backend route
//         setName(response.data.users);
//       } catch (error) {
//         console.error('Error fetching username:', error);
//       }
//     };

//     fetchUsername();
//   }, []);

//   const generatePDF = () => {
//     const input = document.getElementById('certificate');
//     html2canvas(input)
//       .then((canvas) => {
//         const imgData = canvas.toDataURL('image/png');
//         const pdf = new jsPDF();
//         pdf.addImage(imgData, 'PNG', 0, 0);
//         pdf.save(`${name}_certificate.pdf`); // Save with a dynamic filename using fetched name
//       });
//   };

//   return (
//     <div>
//       <div id="certificate" className="certificate">
//         <h1>Certificate of Completion</h1>
//         <p>This is to certify that</p>
//         <h2>{name}</h2>
//         <p>has successfully completed the course</p>
//         <h3>{courseName}</h3>
//         <p>Date: {new Date().toLocaleDateString()}</p> {/* Add current date */}
//       </div>
//       <button onClick={generatePDF} className="generate-btn">Download Certificate</button>
//     </div>
//   );
// };

// export default Certificate;
import React, { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './certificate.css';
import axios from 'axios';

const Certificate = ({ courseName }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    const storedName = sessionStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    } else {
      console.error('No name found in session storage');
    }
  }, []);

  const generatePDF = () => {
    const input = document.getElementById('certificate');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'px', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${name}_certificate.pdf`); // Save with a dynamic filename using fetched name
    });
  };

  return (
    <div className="certificate-container">
      <div id="certificate" className="certificate">
        <div className="certificate-header">
          <h1>Certificate of Completion</h1>
          <p>Presented to</p>
          <h2>{name}</h2>
        </div>
        <div className="certificate-body">
          <p>for successfully completing the course</p>
          <h3>{courseName}</h3>
          <p>
            This certificate is awarded to acknowledge the commitment, hard work, and proficiency demonstrated in completing the training and mastering the course materials.
          </p>
          <p>
            The course covered essential topics, practical exercises, and assessments to ensure comprehensive understanding and application of the knowledge gained.
          </p>
          <p>
            Issued on: {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className="certificate-footer">
          <p>Signature:</p>
          <p>______________________</p>
          <p>Course Instructor</p>
        </div>
      </div>
      <button onClick={generatePDF} className="generate-btn">Download Certificate</button>
    </div>
  );
};

export default Certificate;
