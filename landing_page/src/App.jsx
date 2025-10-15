
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Features from './pages/Features/Features';
import './App.css';

const carModels = [
  {
    id: 1,
    name: "BMW M4 Competition",
    price: "Starting at $74,700",
    power: "503 hp",
    acceleration: "0-60 mph in 3.4s",
  image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "BMW i8",
    price: "Starting at $147,500",
    power: "369 hp",
    acceleration: "0-60 mph in 4.2s",
  image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "BMW X7",
    price: "Starting at $77,850",
    power: "375 hp",
    acceleration: "0-60 mph in 5.8s",
    image: "https://di-uploads-pod23.dealerinspire.com/bmwofowingsmills/uploads/2024/04/BMW-MY25-X7-Overview-Tech-Carousel-04-Desktop-ezgif.com-avif-to-png-converter-1440x860.png" // BMW X7 verified
  }
];

const statsData = [
  { number: "106", label: "Years of Excellence" },
  { number: "140+", label: "Countries" },
  { number: "31", label: "Production Sites" }
];

function Home() {
  return (
    <Hero mainCar={carModels[0]} slogan="THE ULTIMATE DRIVING MACHINE" />
  );
}

function FeaturesPage() {
  return (
    <Features
      features={[
        { title: "BMW Performance", description: "Experience unrivaled power and precision", icon: "🏎️" },
        { title: "German Engineering", description: "Masterfully crafted with attention to detail", icon: "⚙️" },
        { title: "Luxury Interior", description: "Premium materials and cutting-edge technology", icon: "💺" },
        { title: "Advanced Safety", description: "State-of-the-art safety features for peace of mind", icon: "🛡️" }
      ]}
    />
  );
}

function ModelsPage() {
  return (
    <About stats={statsData} models={carModels} />
  );
}


function AboutPage() {
  return (
    <section style={{ padding: '2rem' }}>
      <img className='vintage' src="https://wallpapers.com/images/hd/bmw-old-car-a57voq5gpti3y7ie.jpg" alt="" /><br /> <br />
      <h2>About BMW</h2>
      <p>BMW is a German multinational company which produces luxury vehicles and motorcycles. The company was founded in 1916 and is headquartered in Munich, Bavaria, Germany.
       Vintage BMW cars represent the early era of the German automaker **Bayerische Motoren Werke (BMW)**, known for their elegance, performance, and engineering precision. Models from the **1930s to the 1970s**, such as the **BMW 328 Roadster (1936)** and the **BMW 2002 (1968)**, played a major role in establishing BMW’s reputation for sporty yet luxurious vehicles. These classics featured sleek designs, powerful engines, and advanced technology for their time. Today, vintage BMWs are highly valued by collectors and enthusiasts for their **timeless design, craftsmanship, and driving experience**, symbolizing the heritage and innovation that define the BMW brand.
      </p><br />
      <h2>Why BMW doesn't have a Super Car</h2>
      <p>Alright, here’s a fun **roast-style answer** for you 😎🔥 —  

        BMW doesn’t *need* to make “supercars” — because every BMW already *drives like one*. While other brands are busy showing off with flashy doors, neon lights, and names that sound like Wi-Fi passwords, BMW just builds machines that *do the talking on the road*.  

        Lamborghini? Loud enough to wake the dead, but can’t handle a single speed bump.  
        Ferrari? Looks fast — until it sees a BMW M5 at a red light.  
        McLaren? Beautiful, but spends more time in the service center than on the street.  
        Audi? Trying too hard to copy BMW’s homework but still can’t get the “ultimate driving machine” right.  
        Mercedes? More like “luxury sofa on wheels” — comfy, but not thrilling.  

        BMW doesn’t chase supercar status — it *creates legends* like the **M3, M5, and M8**, cars that can smoke half the “supercars” while carrying groceries and blasting your favorite playlist.  

       <h3> In short: BMW doesn’t need to flex — it is the flex. 💪🚘💨 </h3></p>
    </section>
  );
}

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
                <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
