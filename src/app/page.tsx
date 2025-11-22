"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAboutMetric from '@/components/sections/about/SplitAboutMetric';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Heart, HelpCircle, Home, Mail, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="floatingGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Luxe Haven"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845935173-1v7duox9.jpg"
          logoAlt="Luxe Haven Hotel"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",
            href: "contact"
          }}
          buttonClassName="px-6 py-2"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Welcome to Luxe Haven"
          description="Experience timeless elegance and world-class hospitality in our luxury hotel. Discover your sanctuary of comfort and sophistication."
          tag="Premium Hospitality"
          tagIcon={Star}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845935730-dpps489v.jpg",
              imageAlt: "Luxury suite bedroom"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845936517-7y3j534p.jpg",
              imageAlt: "Modern hotel interior"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845937211-l8yl49pi.jpg",
              imageAlt: "Premium accommodation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845938226-tx4c1qou.jpg",
              imageAlt: "Elegant room design"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845938961-pru89d3v.jpg",
              imageAlt: "Luxury resort bedroom"
            }
          ]}
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutMetric
          title="A Legacy of Excellence"
          description={[
            "For over two decades, Luxe Haven has been the premier destination for discerning travelers seeking exceptional comfort and impeccable service. Our commitment to excellence is reflected in every detail, from our beautifully appointed rooms to our attentive staff.",
            "We believe in creating unforgettable moments for our guests. Each visit to Luxe Haven is an opportunity to experience the perfect blend of modern amenities and timeless elegance."
          ]}
          metrics={[
            {
              label: "Years of Service",
              value: "25+"
            },
            {
              label: "Happy Guests",
              value: "50K+"
            }
          ]}
          showBorder={false}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Our Room Collections"
          description="Choose from our carefully curated selection of rooms, each designed to provide the ultimate comfort and luxury experience."
          tag="Room Types"
          tagIcon={Home}
          products={[
            {
              id: "1",
              name: "Standard Room",
              price: "$150/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845940103-ueobdfad.jpg",
              imageAlt: "Standard hotel room"
            },
            {
              id: "2",
              name: "Deluxe Suite",
              price: "$250/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845940615-sirpcl9z.jpg",
              imageAlt: "Deluxe hotel suite"
            },
            {
              id: "3",
              name: "Penthouse Suite",
              price: "$450/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845941176-nyuidss9.jpg",
              imageAlt: "Luxury penthouse suite"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardNine
          title="World-Class Amenities"
          description="Discover our premium facilities designed to enhance your stay and provide the ultimate hospitality experience."
          tag="Facilities"
          tagIcon={Sparkles}
          features={[
            {
              id: 1,
              title: "Infinity Pool & Spa",
              description: "Relax in our stunning infinity pool overlooking the city, followed by rejuvenating treatments at our world-class spa facility.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845941968-717y36wl.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845942651-0f9xjp9l.jpg"
              }
            },
            {
              id: 2,
              title: "Fine Dining Restaurant",
              description: "Indulge in culinary excellence at our award-winning restaurant, featuring international cuisine and an extensive wine selection.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845941968-717y36wl.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845942651-0f9xjp9l.jpg"
              }
            }
          ]}
          showStepNumbers={true}
          textboxLayout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Guest Experiences"
          description="See what our valued guests have to say about their stay at Luxe Haven."
          tag="Testimonials"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Travel Influencer",
              company: "Wanderlust Diaries",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845945492-layyafo3.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Anderson",
              role: "Business Executive",
              company: "Fortune 500 Company",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845946200-xs5sfjx5.jpg",
              imageAlt: "James Anderson"
            },
            {
              id: "3",
              name: "Michael Chen",
              role: "Hotel Critic",
              company: "Luxury Travel Magazine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845946895-82lhoyd3.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "4",
              name: "Emma Wilson",
              role: "Wedding Planner",
              company: "Elegant Celebrations",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845947570-14jrjozy.png",
              imageAlt: "Emma Wilson"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about booking, amenities, and your stay at Luxe Haven."
          tag="Help & Support"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What is your cancellation policy?",
              content: "We offer flexible cancellation up to 48 hours before arrival for a full refund. Cancellations made within 48 hours are subject to one night's charge."
            },
            {
              id: "2",
              title: "Do you offer airport transfers?",
              content: "Yes, we provide complimentary airport transfers for all guests. Please provide your flight details during check-in booking."
            },
            {
              id: "3",
              title: "Are pets allowed?",
              content: "We welcome well-behaved pets with a non-refundable pet fee of $50 per stay. Please notify us when making your reservation."
            },
            {
              id: "4",
              title: "What is included in room rates?",
              content: "All room rates include complimentary breakfast, WiFi, access to all amenities including the pool and fitness center, and daily housekeeping."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763845948607-9t63m3eg.jpg"
          imageAlt="Hotel reception"
          mediaPosition="left"
          animationType="smooth"
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Ready to Experience Luxury?"
          description="Subscribe to our newsletter for exclusive offers, updates about our latest rooms, and special promotions available only to our guests."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time. By subscribing, you agree to receive promotional emails from Luxe Haven."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Luxe Haven"
          columns={[
            {
              items: [
                {
                  label: "Rooms",
                  href: "rooms"
                },
                {
                  label: "Amenities",
                  href: "amenities"
                },
                {
                  label: "About",
                  href: "about"
                }
              ]
            },
            {
              items: [
                {
                  label: "Book Now",
                  href: "contact"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "FAQ",
                  href: "faq"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms & Conditions",
                  href: "#"
                },
                {
                  label: "Cancellation Policy",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}