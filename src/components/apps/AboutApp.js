'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { profile } from '@/data/profile';
import { GitBranch, Link, Mail, MapPin, Briefcase, X } from 'lucide-react';


const SOCIAL_ICONS = {
  github: GitBranch,
  linkedin: Link,
  mail: Mail
};



export default function AboutApp() {


  const [imageOpen,setImageOpen] = useState(false);



  return (

    <div className="h-full overflow-y-auto p-5">



      <motion.div

        initial={{opacity:0,y:10}}

        animate={{opacity:1,y:0}}

        className="
        flex
        flex-col
        items-center
        text-center
        mb-6"

      >



        {/* Profile Image */}

        <button

          onClick={()=>setImageOpen(true)}

          className="
          w-28
          h-28
          rounded-2xl
          overflow-hidden
          mb-4
          shadow-lg
          border
          border-[var(--os-glass-border)]
          cursor-pointer
          bg-transparent
          p-0
          "

        >


          <Image

            src="/profile-img.png"

            alt="Imran Akhtar"

            width={300}

            height={300}

            className="
            w-full
            h-full
            object-cover
            hover:scale-110
            transition-transform
            duration-300
            "

            priority

          />


        </button>







        <h1 className="text-xl font-bold text-[var(--os-text)]">

          {profile.name}

        </h1>


        <p className="text-accent font-medium">

          {profile.role}

        </p>


        <p className="text-muted text-sm mt-1">

          {profile.tagline}

        </p>



      </motion.div>







      <div className="
      flex 
      flex-wrap 
      justify-center 
      gap-3 
      mb-6 
      text-xs 
      text-muted">


        <span className="flex items-center gap-1">

          <MapPin size={12}/>

          {profile.location}

        </span>



        <span className="flex items-center gap-1">

          <Briefcase size={12}/>

          {profile.experience}

        </span>



        <span className="text-green-400">

          {profile.availability}

        </span>


      </div>






      <p className="
      text-sm
      text-muted
      leading-relaxed
      mb-6">


        {profile.bio}


      </p>







      <div className="flex justify-center gap-3">


        {profile.social.map((s)=>{


          const Icon = SOCIAL_ICONS[s.icon] || Mail;


          return (

            <a

              key={s.name}

              href={s.url}

              target="_blank"

              rel="noopener noreferrer"

              className="
              w-10
              h-10
              rounded-xl
              bg-glass
              flex
              items-center
              justify-center
              text-accent
              hover:bg-accent/20
              transition"

            >

              <Icon size={18}/>


            </a>

          )


        })}



      </div>








      {/* Image Popup */}


      {imageOpen && (


        <div

          onClick={()=>setImageOpen(false)}

          className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-black/70
          backdrop-blur-sm
          "

        >



          <div

            onClick={(e)=>e.stopPropagation()}

            className="
            relative
            max-w-[90%]
            max-h-[90%]
            "

          >



            <button

              onClick={()=>setImageOpen(false)}

              className="
              absolute
              -top-3
              -right-3
              w-9
              h-9
              rounded-full
              bg-white
              text-black
              flex
              items-center
              justify-center
              cursor-pointer
              "

            >

              <X size={18}/>


            </button>





            <Image

              src="/profile.png"

              alt="Imran Akhtar Large"

              width={700}

              height={700}

              className="
              rounded-2xl
              object-contain
              shadow-2xl
              "

              priority

            />


          </div>



        </div>


      )}




    </div>


  );


}