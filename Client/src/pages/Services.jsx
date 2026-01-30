import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, MapPin, CheckCircle, Clock, Star, 
  Users, Award, Camera, ArrowRight, MessageSquare,
  Facebook, Instagram, ExternalLink
} from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-indigo-500/30">
      
      {/* 1. PREMIUM HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Award size={120} />
            </div>
            
            <span className="inline-block py-1 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Establish Since 2010
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Premium Services <br/> For Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Community.</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
              Trusted by over 5,000+ local residents. We combine traditional values 
              with modern excellence to give you the service you deserve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95">
                <Phone size={20} /> Book Appointment
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
                View Price List
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION (The "Trust" Builder) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/40 border border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story & Values</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Started by <b>Jonathan Doe</b> in the heart of the city, our business was built on a simple 
              promise: treat every customer like family. What began as a one-man operation has grown 
              into a local landmark.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0"><CheckCircle size={20}/></div>
                <div>
                  <h4 className="text-white font-semibold">Locally Sourced</h4>
                  <p className="text-sm text-slate-500">Supporting our neighborhood vendors.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0"><Users size={20}/></div>
                <div>
                  <h4 className="text-white font-semibold">Expert Team</h4>
                  <p className="text-sm text-slate-500">Every staff member has 5+ years of experience.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-1 flex items-center justify-center min-h-[400px] overflow-hidden group">
            <div className="relative w-full h-full bg-slate-900 rounded-[2.4rem] overflow-hidden">
               {/* Replace with actual image */}
               <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80" alt="Shop Interior" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
               <div className="absolute bottom-8 left-8">
                 <p className="text-white font-bold text-2xl italic">"Excellence is not an act, but a habit."</p>
                 <p className="text-indigo-400 text-sm uppercase tracking-widest mt-2">— The Founder</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ENHANCED SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-slate-500">Tailored solutions for your everyday needs.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"><ArrowRight size={20} className="rotate-180"/></button>
            <button className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"><ArrowRight size={20}/></button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard title="Core Service" price="$49" desc="Our most popular service, delivered with precision and care." />
          <ServiceCard title="Premium" price="$89" desc="Personalized service designed for those who want the best." />
          <ServiceCard title="Quick Fix" price="$29" desc="Perfect for customers who are short on time but need reliability." />
          <ServiceCard title="Custom" price="Quote" desc="Tailored solutions based on your individual specific needs." />
        </div>
      </section>

      {/* 4. GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-slate-900/40 border border-white/10 rounded-[3rem] p-8 md:p-12">
          <div className="flex items-center gap-4 mb-10">
            <Camera className="text-indigo-400" />
            <h2 className="text-3xl font-bold text-white">Inside Our Studio</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-white/5 group relative">
                <img src={`https://images.unsplash.com/photo-1600880210819-35b6c3211e27?q=80&w=400&auto=format&fit=crop`} className="w-full h-full object-cover group-hover:scale-110 transition-duration-500" alt="Work" />
                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INFORMATION HUB (Hours & Location) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Hours Card */}
          <div className="bg-slate-900/40 border border-white/10 rounded-[2.5rem] p-8">
            <div className="flex items-center gap-3 text-white font-bold mb-8">
              <Clock className="text-indigo-400" /> Business Hours
            </div>
            <div className="space-y-4">
              <HourRow day="Mon - Fri" time="09:00 AM - 08:00 PM" />
              <HourRow day="Saturday" time="10:00 AM - 06:00 PM" />
              <HourRow day="Sunday" time="Closed" isClosed />
            </div>
          </div>

          {/* Location Card */}
          <div className="lg:col-span-2 bg-slate-900/40 border border-white/10 rounded-[2.5rem] p-8 flex flex-col md:flex-row gap-8">
             <div className="flex-1">
               <div className="flex items-center gap-3 text-white font-bold mb-4">
                 <MapPin className="text-emerald-400" /> Visit Us
               </div>
               <p className="text-slate-400 mb-6 text-lg">
                 123 Business Avenue, <br/>
                 Suite 456, New Delhi, 110001
               </p>
               <button className="flex items-center gap-2 text-indigo-400 font-bold hover:underline">
                 Get Directions <ExternalLink size={16}/>
               </button>
             </div>
             <div className="flex-1 bg-slate-800 rounded-2xl min-h-[200px] overflow-hidden grayscale contrast-125">
               {/* Map Placeholder */}
               <div className="w-full h-full bg-indigo-500/5 flex items-center justify-center text-slate-600 italic">
                 Interactive Map Integration
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. SOCIAL PROOF SECTION */}
      <section className="bg-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h2>
             <div className="flex justify-center gap-1 text-yellow-500">
               {[1,2,3,4,5].map(s => <Star key={s} size={20} fill="currentColor"/>)}
             </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial name="Sarah Jenkins" text="The attention to detail here is unmatched. I've been a regular for 3 years and wouldn't go anywhere else." />
            <Testimonial name="Michael Ross" text="Fast, professional, and very affordable for the quality you get. Highly recommended for busy professionals." />
            <Testimonial name="David G." text="The new booking system is great! Love the atmosphere and the friendly staff. 10/10 experience." />
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
           <div className="relative z-10">
             <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Experience <br/> the Difference?</h2>
             <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">Join our community today. We are currently accepting new clients for this month.</p>
             <div className="flex flex-wrap justify-center gap-4">
               <button className="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:scale-105 transition">Book Your Visit</button>
               <button className="bg-black/20 backdrop-blur-md border border-white/20 px-10 py-4 rounded-2xl font-bold hover:bg-black/30 transition">Contact Support</button>
             </div>
           </div>
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
           </div>
        </div>
      </section>

    </div>
  );
};

/* ---------------- HELPER COMPONENTS ---------------- */

const ServiceCard = ({ title, price, desc }) => (
  <div className="group bg-slate-900/40 border border-white/10 p-8 rounded-[2rem] hover:border-indigo-500/50 transition-all hover:-translate-y-2">
    <div className="flex justify-between items-start mb-6">
      <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
        <MessageSquare size={24} />
      </div>
      <span className="text-2xl font-black text-white">{price}</span>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-8">{desc}</p>
    <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold group-hover:bg-white group-hover:text-black transition-all">
      Enquire Now
    </button>
  </div>
);

const HourRow = ({ day, time, isClosed }) => (
  <div className="flex justify-between items-center py-3 border-b border-white/5">
    <span className="text-slate-400 font-medium">{day}</span>
    <span className={`font-bold ${isClosed ? 'text-rose-500' : 'text-white'}`}>{time}</span>
  </div>
);

const Testimonial = ({ name, text }) => (
  <div className="bg-slate-900/40 border border-white/10 p-8 rounded-[2rem]">
    <div className="flex gap-1 text-yellow-500 mb-4">
      {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor"/>)}
    </div>
    <p className="text-slate-300 italic mb-6">"{text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-500" />
      <span className="text-white font-bold">{name}</span>
    </div>
  </div>
);

export default ServicesPage;