// import { useState } from "react";
// import PageTransition from "../components/PageTransition";
// import { bookingApi } from "../services/api";

// function Booking() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     serviceType: "Wedding Photography",
//     date: "",
//     message: ""
//   });
//   const [status, setStatus] = useState({ type: "", text: "" });

//   const handleChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       await bookingApi.create(form);
//       setStatus({ type: "success", text: "Booking submitted successfully." });
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         serviceType: "Wedding Photography",
//         date: "",
//         message: ""
//       });
//     } catch (error) {
//       setStatus({
//         type: "error",
//         text: error.response?.data?.message || "Booking failed"
//       });
//     }
//   };

//   return (
//     <PageTransition>
//       <section className="section-space">
//         <div className="container-luxe max-w-3xl">
//           <h1 className="heading-luxe text-center">Book Your Session</h1>
//           <form onSubmit={submit} className="card-luxe mt-10 space-y-4">
//             <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full rounded-xl2 border border-black/20 dark:border-white/20 bg-transparent px-4 py-3" />
//             <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full rounded-xl2 border border-black/20 dark:border-white/20 bg-transparent px-4 py-3" />
//             <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required className="w-full rounded-xl2 border border-black/20 dark:border-white/20 bg-transparent px-4 py-3" />
//             <select name="serviceType" value={form.serviceType} onChange={handleChange} className="w-full rounded-xl2 border border-black/20 dark:border-white/20 bg-transparent px-4 py-3">
//               <option>Wedding Photography</option>
//               <option>Portrait Sessions</option>
//               <option>Fashion Editorials</option>
//               <option>Product Photography</option>
//               <option>Corporate Branding</option>
//               <option>Event Coverage</option>
//             </select>
//             <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full rounded-xl2 border border-black/20 dark:border-white/20 bg-transparent px-4 py-3" />
//             <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={5} className="w-full rounded-xl2 border border-black/20 dark:border-white/20 bg-transparent px-4 py-3" />
//             <button className="btn-primary">Submit Booking</button>
//             {status.text && (
//               <p className={status.type === "success" ? "text-green-500" : "text-red-500"}>
//                 {status.text}
//               </p>
//             )}
//           </form>
//         </div>
//       </section>
//     </PageTransition>
//   );
// }

// export default Booking;

import React from 'react'

const Booking = () => {
  return (
    <div>
      
    </div>
  )
}

export default Booking

