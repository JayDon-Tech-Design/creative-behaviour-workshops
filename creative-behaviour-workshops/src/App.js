
import React from 'react';

export default function CreativeWorkshops() {
  return (
    <div className="min-h-screen bg-white text-black p-6 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Creative Behaviour Workshops</h1>
        <p className="mt-2 text-lg">Transforming emotion into expression, one student at a time.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
          <p>
            We deliver powerful, interactive workshops for SCMAH and mainstream secondary schools. Our sessions use music,
            art, and storytelling to explore emotional literacy, behaviour transformation, and creative confidence.
          </p>
        </div>

        <div className="p-4 border rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2">Who It’s For</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>SCMAH secondary students</li>
            <li>Students struggling with behaviour or regulation</li>
            <li>Creative students needing positive outlets</li>
            <li>Schools with behaviour challenges</li>
          </ul>
        </div>
      </section>

      <section className="p-4 border rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Workshop Packages</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold">Half-Day Workshop - £250</h3>
            <p>2.5 hours | Up to 15 students | Creative activities + group reflection</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Full-Day Workshop - £450</h3>
            <p>5 hours | Up to 20 students | Emotional tools, showcase, and feedback</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Custom Packages</h3>
            <p>Available for creative camps, drop-down days, and long-term partnerships.</p>
          </div>
        </div>
      </section>

      <section className="p-4 border rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-2">Why It Works</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Relatable and engaging content</li>
          <li>Emotion-focused tools that can be embedded long-term</li>
          <li>Creative, practical, and collaborative activities</li>
          <li>Led by experienced youth-focused creatives</li>
        </ul>
      </section>

      <section className="p-4 border rounded-2xl shadow text-center">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p>Email: <a href="mailto:youremail@yourdomain.com" className="text-blue-600 underline">youremail@yourdomain.com</a></p>
        <p>Phone: <a href="tel:+441234567890" className="text-blue-600 underline">+44 1234 567890</a></p>
        <p>Instagram: <a href="https://instagram.com/yourhandle" target="_blank" className="text-blue-600 underline">@yourhandle</a></p>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Creative Behaviour Workshops. All rights reserved.
      </footer>
    </div>
  );
}
