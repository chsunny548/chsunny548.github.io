import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Stethoscope, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function DoctorLandingPage() {
  return (
    <div className="font-sans">
      <section className="bg-blue-50 py-20 text-center">
        <motion.h1 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>Dr. Jane Smith</motion.h1>
        <motion.p className="text-lg mb-6 text-gray-600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Compassionate Care for a Healthier Tomorrow
        </motion.p>
        <Button className="text-white bg-blue-600 hover:bg-blue-700">Book Appointment</Button>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Dr. Smith</h2>
        <p className="text-gray-700">Dr. Jane Smith is a board-certified family physician with over 15 years of experience in providing comprehensive healthcare. She believes in treating patients with empathy and offers personalized medical care tailored to individual needs.</p>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-10">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "General Checkups",
              "Pediatric Care",
              "Women's Health",
              "Immunizations",
              "Chronic Disease Management",
              "Telehealth Consultations"
            ].map(service => (
              <Card key={service}>
                <CardContent className="p-4 flex items-center gap-3">
                  <Stethoscope className="text-blue-500" />
                  <span>{service}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-10">What Patients Say</h2>
          <div className="space-y-8">
            {[
              {
                name: "Emily R.",
                feedback: "Dr. Smith truly cares about her patients. She listens and provides thoughtful care.",
              },
              {
                name: "Michael T.",
                feedback: "Professional, kind, and knowledgeable. Highly recommended!",
              }
            ].map(({ name, feedback }) => (
              <Card key={name} className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500" fill="yellow" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-2">"{feedback}"</p>
                  <span className="text-sm font-semibold">- {name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <Phone /> <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail /> <span>dr.jane@example.com</span>
          </div>
        </div>
      </section>
    </div>
  )
}
