import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const CustomModal = ({isModalDisplay,setIsModalDisplay}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleCloseModal = () => {
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.add('closing'); // Apply closing animation
    setTimeout(() => {
      setIsModalDisplay(false); // After animation, set isOpen to false to close the modal
    }, 300); // Make sure to adjust the timeout duration to match the animation duration in CSS
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to a server)
    console.log('Submitted data:', { firstName, lastName, email });
    toast.success("Registration Successfully")
    handleCloseModal();
  };

  return (



        <div className="modal-background" onClick={handleCloseModal}>
          <div  className={`modal-content ${isModalDisplay ? '' : 'closing'}`}  onClick={(e) => e.stopPropagation()}>
            <h2>Claim It Now</h2>
            <form onSubmit={handleSubmit}>
              <div className='d-flex align-items-center gap-1 justify-content-center'>
<span className='text-danger h4' >*</span>                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder='First Name'
                  required
                />
              </div>
              <div className='d-flex align-items-center gap-1 justify-content-center'>
<span className='text-danger h4' >*</span>                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder='Last Name'
                  required
                />
              </div>
              <div className='d-flex align-items-center gap-1 justify-content-center'>
<span className='text-danger h4' >*</span>                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email'
                  required
                />
              </div>
              <div>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>


  );
};

export default CustomModal;
