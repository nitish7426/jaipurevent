import React from "react";

const About = () => {
  return (
    <section className="container py-12 md:py-16 space-y-6 md:space-y-8 lg:space-y-10 text-center md:text-start">
      <h1 className="heading font-cursive">About Us</h1>

      <div className="space-y-4 paragraph">
        <p className="text-2xl text-black md:text-3xl">
          Welcome to Our Balloon Decoration Business!
        </p>
        <p>
          At our balloon decoration business, we are driven by a passion for
          transforming ordinary events into extraordinary experiences. With
          meticulous attention to detail and a commitment to excellence, our
          team of talented balloon artists specializes in creating captivating
          and memorable decorations.
        </p>

        <p>
          We believe that every event is unique and deserves to be adorned with
          breathtaking balloon arrangements. From vibrant balloon arches that
          create a grand entrance to whimsical centerpieces that add a touch of
          magic, we bring dreams to life. Our imaginative sculptures and
          creative designs will leave guests in awe and create an unforgettable
          atmosphere.
        </p>

        <p>
          Customer satisfaction is at the heart of what we do. We take the time
          to understand your vision, theme, and preferences, ensuring that our
          balloon decorations perfectly align with your event. Our friendly and
          dedicated team collaborates closely with you, offering guidance and
          creative ideas to make your vision a reality.
        </p>
        <p>
          Safety and quality are paramount in our business. We use high-quality
          balloons and employ rigorous installation techniques to ensure the
          stability and longevity of our creations. Your safety and the
          enjoyment of your guests are our top priorities.
        </p>

        <p>
          We take pride in our exceptional customer service and the lasting
          memories we help create. Our goal is to exceed your expectations,
          leaving you and your guests with a sense of wonder and joy. Whether
          it's a birthday party, wedding, corporate event, or any special
          occasion, we are here to elevate your celebration with our mesmerizing
          balloon decorations.
        </p>

        <p>
          Thank you for considering our services. We look forward to being a
          part of your next unforgettable event and bringing the magic of
          balloons to life.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="heading ">Founder</h3>
        <p className="text-3xl md:text-4xl font-cursive">Pawan Kumar</p>
      </div>

      <div className="space-y-6 py-6">
        <h2 className="heading">Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.6002270723584!2d75.8364423!3d26.9161798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7ca17c8c28d%3A0xbb816ce24af157ab!2sJaipur%20Event!5e0!3m2!1sen!2sin!4v1684499897365!5m2!1sen!2sin"
          className="w-full"
          width={600}
          height={450}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default About;
