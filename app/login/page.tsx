'use client'
import React, { useState } from 'react';
import MainLayout from "@/src/Layouts/MainLayout/MainLayout";

import './login.scss';

const Login = () => {

  return (
    <section>
      <div className="flex justify-end">
        <button className="btn-primary w-[200px]">Login</button>
      </div>
      <div className='flex flex-col justify-center mt-5 p-5'>
        <button className='btn-third'>MetaMask</button>
        <button className='btn-third mt-3'>Wallet Connect</button>
        <button className='btn-third mt-3'>Email login</button>
      </div>
    </section>
  );
};

export default function LoginComponent() {
  return <MainLayout>
    <Login />
  </MainLayout>
};