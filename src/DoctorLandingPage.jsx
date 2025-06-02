import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Stethoscope, Star } from "lucide-react";

export default function DoctorLandingPage() {
  return (
    <div className='min-h-screen bg-blue-50 p-4 text-gray-800'>
      <header className='text-center py-8'>
        <h1 className='text-4xl font-bold mb-2'>Dr. Sunny Ch</h1>
        <p className='text-lg'>
          MBBS, MD - General Medicine | 15+ years of experience
        </p>
      </header>
      <main className='grid gap-6 max-w-4xl mx-auto'>
        <Card>
          <CardContent>
            <div className='flex items-center gap-4'>
              <Stethoscope className='text-blue-600 w-10 h-10' />
              <div>
                <h2 className='text-xl font-semibold'>Expertise</h2>
                <p>
                  Internal Medicine, Diabetes, Hypertension, Fever Management
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className='flex items-center gap-4'>
              <Star className='text-yellow-500 w-10 h-10' />
              <div>
                <h2 className='text-xl font-semibold'>Patient Reviews</h2>
                <p>
                  "Very attentive and professional. Solved my health issue
                  quickly!"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='text-center'>
            <h2 className='text-xl font-semibold mb-2'>Book an Appointment</h2>
            <Button className='mr-2'>
              <Mail className='w-4 h-4 mr-1' /> Email
            </Button>
            <Button>
              <Phone className='w-4 h-4 mr-1' /> Call
            </Button>
          </CardContent>
        </Card>
      </main>
      <footer className='text-center mt-10 text-sm text-gray-600'>
        &copy; 2025 Dr. Abhishek. All rights reserved.
      </footer>
    </div>
  );
}
