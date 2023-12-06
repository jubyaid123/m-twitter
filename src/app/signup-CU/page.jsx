"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Signup_CU = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault() == true;
  
    if(password !== confirmPassword){
      alert('Passwords do not match');
      setPassword('');
      setConfirmPassword('');
      return;
    }else{
      alert('Thank you for signing up to MTWITTER. You will be contacted about the status of your application')
      e.preventDefault() == false;
    }
     {/*
    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        }),
      });
  
      if (response.ok) {
        window.location.href = '/calendar';
      } else {
        console.error('Error creating user:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  */}
  
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-3xl mb-4">Corporate Sign Up</h2>
      <form onSubmit={handleSignUp} className="text-center">
        <div className="mb-4 flex flex-col items-center">
          <div className='mb-2'>
            <label className="text-lg black">First Name:</label>
          </div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-64 py-2 px-4 border rounded text-black"
            required
          />
        </div>
        <div className="mb-4 flex flex-col items-center">
        <div className="mb-2">
          <label className="text-lg black">Last Name:</label>
        </div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-64 py-2 px-4 border rounded text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-lg block">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-64 py-2 px-4 border rounded text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-lg block">Password:</label>
          <input

            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-64 py-2 px-4 border rounded text-black"
            required
          />
        </div>
        <div className = "mb-4">
        <label className="text-lg block"> Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-64 py-2 px-4 border rounded text-black"
            required
          />
        </div> 
        <button type="submit" className="mb-4 bg-white hover:bg-dark-teal-700 text-black font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </form>
      <div>
        <p className="mb-3">
          Already have an account? login <Link href= "/login" className='blue_gradient'>here</Link>
        </p>
        <p>
          Want to Sign up as an Ordinary User? click<Link href= "/signup" className="blue_gradient"> here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup_CU