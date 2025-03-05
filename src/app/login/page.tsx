/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useAuthStore } from '@/lib/store/auth';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const setToken = useAuthStore((state) => state.setToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    setLoading(true);
    try {
      // Use the data parameter here
      console.log(data);
      // Add your login logic here
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className="flex w-full h-screen items-center flex-col justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 bg-white p-8  rounded-xl shadow-lg m-1">
          <Image src="/logo1.jpg" alt="Logo" width={80} height={80} className="mx-auto" />
          <h2 className="text-2xl text-center font-bold">Welcome to Admin</h2>
          <p className="mt-1 text-gray-600 text-center">
            Sign in to your account to continue
          </p>
        

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              className={`w-full h-fit p-2 border rounded-md focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
              className={`w-full h-fit p-2 border rounded-md focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 ${errors.password ? 'border-red-500' : ''}`}
            />
            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password.message as string}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-bold py-2 rounded-md"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
        </div>

      </div>
  );
}