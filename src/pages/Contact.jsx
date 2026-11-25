import { ContactForm, FormError, FormFields, FormSuccess, SubmitButton } from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      {/* Hero CTA Section */}
      <header className="pt-32 pb-12 md:pb-16 px-4 bg-black">
        <div className="mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8 font-light">
            Join the Movement
            <br />
            {" "}
            <span className="text-white/50">
              Shaping Africa's Rise
            </span>
          </h1>
          <div className="w-24 h-px bg-white/30 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            Support initiatives that strengthen communities, empower women and youth, expand education, build peace and security, restore ecosystems, and mobilize capital for green industrialization and climate prosperity.
          </p>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed mt-6 font-serif italic">
            Together we can transform Africa into the world's leading hub for sustainable growth and cultural leadership.
          </p>
        </div>
      </header>
      {/* Contact Form Section */}
      <section className="section-padding bg-black">
        <div className="max-w-3xl mx-auto">
          {/* Form */}
          <div className="border border-white/10 p-8">
            <ContactForm action="https://formspree.io/f/mdkqdppg" className="space-y-6">
              {/* Success Message */}
              <FormSuccess className="p-6 border text-center">
                <p className="font-light text-lg">
                  Thank you for reaching out! We'll be in touch soon.
                </p>
              </FormSuccess>
              {/* Error Message */}
              <FormError className="p-6 border text-center">
                <p className="font-light text-lg">
                  Something went wrong. Please try again or email us directly.
                </p>
              </FormError>
              <FormFields>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Name *
                    </label>
                    {" "}
                    <input id="name" name="name" type="text" required placeholder="Your full name" className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    {" "}
                    <input id="email" name="_replyto" type="email" required placeholder="your.email@example.com" className="form-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="organization" className="form-label">
                    Organization / Institution
                  </label>
                  {" "}
                  <input id="organization" name="organization" type="text" placeholder="Organization or institution name" className="form-input" />
                </div>
                <div>
                  <label htmlFor="subject" className="form-label">
                    How would you like to contribute?
                  </label>
                  {" "}
                  <select id="subject" name="subject" className="form-input">
                    <option value="" className="bg-black">
                      Select an area of interest
                    </option>
                    {" "}
                    <option value="partnership" className="bg-black">
                      Partnership Opportunity
                    </option>
                    {" "}
                    <option value="investment" className="bg-black">
                      Climate Investment
                    </option>
                    {" "}
                    <option value="speaking" className="bg-black">
                      Speaking Engagement
                    </option>
                    {" "}
                    <option value="advisory" className="bg-black">
                      Strategic Advisory
                    </option>
                    {" "}
                    <option value="media" className="bg-black">
                      Media Inquiry
                    </option>
                    {" "}
                    <option value="volunteer" className="bg-black">
                      Volunteer / Support
                    </option>
                    {" "}
                    <option value="other" className="bg-black">
                      Other
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  {" "}
                  <textarea id="message" name="message" rows="5" required placeholder="Share how you'd like to be part of Africa's green transition..." className="form-input"></textarea>
                </div>
                {/* Honeypot for spam protection */}
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                <div className="text-center">
                  <SubmitButton className="w-full py-4 bg-white text-black text-sm uppercase tracking-[0.2em] hover:bg-white/90 transition-all duration-300 font-medium">
                    Join the Movement
                  </SubmitButton>
                </div>
              </FormFields>
            </ContactForm>
          </div>
          {/* Contact Info Strip */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div>
                <h3 className="uppercase text-white/30 mb-4">
                  Email
                </h3>
                <a href="mailto:office@ramadiallondiaye.com" className="text-white/70 hover:text-white transition-colors font-light">
                  {" "}office@ramadiallondiaye.com{" "}
                </a>
              </div>
              <div>
                <h3 className="uppercase text-white/30 mb-4">
                  Follow
                </h3>
                <div className="flex justify-center gap-6">
                  <a href="#" className="text-white/70 hover:text-white transition-colors font-light">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div>
                <h3 className="uppercase text-white/30 mb-4">
                  Inquiries
                </h3>
                <p className="text-white/70 font-light">
                  Speaking · Advisory · Partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quote Section */}
      <section className="relative w-full overflow-hidden">
        <img src="/assets/portrait-professional-side.webp" alt="Dr. Ramatoulaye Diallo N'Diaye" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
        {/* Strong gradient overlay: Very dark at bottom for text readability, transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t via-black/70 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
          <div className="w-16 h-px mb-10"></div>
          <blockquote className="font-serif text-2xl md:text-4xl lg:text-5xl leading-tight font-light max-w-4xl italic text-white">
            "Women carry the future. Youth accelerate it."
          </blockquote>
          <div className="w-16 h-px mt-10 mb-6"></div>
          <p className="text-xs uppercase text-white/80">
            — Dr. Ramatoulaye Diallo N'Diaye
          </p>
        </div>
      </section>
    </>
  )
}
