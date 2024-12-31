"use client";

import { useState } from 'react';
import Link from 'next/link';
import RoleSelector from './RoleSelector';
import SellerTypeSelector from './SellerTypeSelector';
import GoogleSignInButton from './GoogleSignInButton';
import AuthDivider from './AuthDivider';
import RegistrationForm from './RegistrationForm';

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<'buyer' | 'seller' | null>(null);
  const [sellerType, setSellerType] = useState<'individual' | 'business' | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    businessName: '',
    businessAddress: '',
    registrationNumber: ''
  });

  const handleSubmit = (data: typeof formData) => {
    console.log('Signup data:', { ...data, role, sellerType });
  };

  if (step === 1) {
    return (
      <div className="space-y-6">
        <GoogleSignInButton />
        <AuthDivider />
        <RoleSelector 
          onRoleSelect={(selectedRole) => {
            setRole(selectedRole);
            setStep(selectedRole === 'seller' ? 2 : 3);
          }} 
        />
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="space-y-6">
        <SellerTypeSelector
          onTypeSelect={(type) => {
            setSellerType(type);
            setStep(3);
          }}
        />
        <button
          onClick={() => setStep(1)}
          className="text-sm text-blue-600 hover:text-blue-500"
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <RegistrationForm
        role={role!}
        sellerType={sellerType}
        onSubmit={handleSubmit}
        onBack={() => setStep(role === 'seller' ? 2 : 1)}
      />
    </div>
  );
}