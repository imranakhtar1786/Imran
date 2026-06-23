'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import {
  Mail,
  GitBranch,
  Link,
  Send,
  CheckCircle,
  Loader2,
  Phone
} from 'lucide-react';



export default function ContactApp() {


  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });


  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);



  const SHEET_URL = process.env.NEXT_PUBLIC_SHEET_URL;




  function validate() {


    let error = {};



    if (!form.name.trim()) {

      error.name = "Name is required";

    }
    else if (form.name.length < 3) {

      error.name = "Minimum 3 characters required";

    }




    if (!form.email.trim()) {

      error.email = "Email is required";

    }
    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {

      error.email = "Invalid email";

    }
    if (!form.phone.trim()) {

      error.phone = "Phone number required";

    }
    else if (
      !/^[6-9]\d{9}$/.test(form.phone)
    ) {

      error.phone = "Enter valid 10 digit number";

    }
    if (!form.message.trim()) {

      error.message = "Message required";

    }
    else if (form.message.length < 10) {

      error.message = "Message too short";

    }



    setErrors(error);

    return Object.keys(error).length === 0;

  }
  async function handleSubmit(e) {


    e.preventDefault();


    if (!validate()) return;


    setLoading(true);



    try {


      await fetch(SHEET_URL, {

        method: "POST",

        mode: "no-cors",

        headers: {
          "Content-Type": "application/json"
        },


        body: JSON.stringify(form)

      });



      setSent(true);


      setForm({

        name: '',
        email: '',
        phone: '',
        message: ''

      });


      setTimeout(() => {

        setSent(false);

      }, 3000);


    }
    catch (err) {

      console.log(err);

    }
    finally {

      setLoading(false);

    }


  }







  function handleChange(e) {


    setForm({

      ...form,

      [e.target.name]: e.target.value

    });


    setErrors({

      ...errors,

      [e.target.name]: ''

    });

  }








  const inputClass = `
  w-full
  px-3
  py-2
  rounded-lg
  bg-glass
  border
  border-[var(--os-glass-border)]
  text-sm
  text-[var(--os-text)]
  outline-none
  focus:ring-2
  focus:ring-[var(--os-accent)]
  `;








  return (


    <div className="h-full overflow-y-auto p-4">


      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        className="space-y-4"

      >



        <div className="text-center">


          <h2 className="text-lg font-bold text-[var(--os-text)]">

            Get in Touch

          </h2>


          <p className="text-xs text-muted mt-1">

            {profile.availability}

          </p>


        </div>








        <div className="grid gap-2">


          {

            [

              {
                icon: Mail,
                label: profile.email,
                href: `mailto:${profile.email}`
              },


              {
                icon: GitBranch,
                label: "GitHub",
                href: profile.links.github
              },


              {
                icon: Link,
                label: "LinkedIn",
                href: profile.links.linkedin
              }


            ].map((item) => (


              <a

                key={item.label}

                href={item.href}

                target="_blank"

                rel="noopener noreferrer"

                className="
flex
items-center
gap-3
p-3
rounded-xl
bg-glass
hover:bg-accent/10
transition
text-sm
text-muted"

              >


                <item.icon size={16} />

                {item.label}


              </a>


            ))


          }


        </div>










        <form

          onSubmit={handleSubmit}

          className="space-y-3"


        >




          <input

            name="name"

            placeholder="Your name"

            value={form.name}

            onChange={handleChange}

            className={inputClass}

          />


          {errors.name &&

            <p className="text-xs text-red-500">

              {errors.name}

            </p>

          }








          <input

            name="email"

            type="email"

            placeholder="Your email"

            value={form.email}

            onChange={handleChange}

            className={inputClass}

          />


          {errors.email &&

            <p className="text-xs text-red-500">

              {errors.email}

            </p>

          }










          <div className="relative">


            <Phone

              size={16}

              className="
absolute
left-3
top-3
text-muted"

            />


            <input

              name="phone"

              placeholder="Phone number"

              value={form.phone}

              onChange={handleChange}

              className="
w-full
pl-9
pr-3
py-2
rounded-lg
bg-glass
border
border-[var(--os-glass-border)]
text-sm
outline-none
focus:ring-2
focus:ring-[var(--os-accent)]
"

            />


          </div>



          {errors.phone &&

            <p className="text-xs text-red-500">

              {errors.phone}

            </p>

          }










          <textarea

            name="message"

            rows={4}

            placeholder="Your message"

            value={form.message}

            onChange={handleChange}

            className={`${inputClass} resize-none`}

          />


          {errors.message &&

            <p className="text-xs text-red-500">

              {errors.message}

            </p>

          }









          <button

            disabled={loading}

            type="submit"

            className="
w-full
flex
items-center
justify-center
gap-2
py-2.5
rounded-lg
bg-accent
text-white
text-sm
font-medium
transition
hover:opacity-90
disabled:opacity-60
"


          >


            {


              loading ? (

                <>

                  <Loader2

                    size={16}

                    className="animate-spin"

                  />

                  Sending...

                </>


              )


                :

                sent ?


                  (

                    <>

                      <CheckCircle size={16} />

                      Sent!

                    </>


                  )


                  :

                  (

                    <>

                      <Send size={16} />

                      Send Message

                    </>


                  )



            }



          </button>





        </form>





      </motion.div>


    </div>


  );


}