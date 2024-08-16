import React from 'react'

export default function Card({username = 'Ansh'}) {
  return (
    <div>
      {/* <img src="https://media.istockphoto.com/id/917722424/photo/luxury-car-burning-tyres.jpg?b=1&s=612x612&w=0&k=20&c=cU3YjBa1iAYGG7TCa3HwqssYKHzJKdFBcvi_7k4RwIM=" alt="" />
      <h1 className='text-3xl bg-green-500 p-3 rounded'>card for photos</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, veritatis!</p> */}
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/27579564/pexels-photo-27579564/free-photo-of-a-woman-laying-on-her-back-in-a-white-hoodie.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. Its easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
   </figure>
    </div>
  )
}

