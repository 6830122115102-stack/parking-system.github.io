'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Car, Lock, User, Smartphone } from 'lucide-react';
import toast from 'react-hot-toast';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center">
            <Car className="h-8 w-8 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            ระบบจอดรถ
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            เขาสระบบเพอใชงาน
          </p>
        </div>
      </div>
    </div>
  );
}
