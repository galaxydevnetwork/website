import React from "react";

function About() {
  return (
 <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
      <div class="">
        <h1 class="text-2xl"><b>About GalaxyNetwork</b></h1>
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p>GalaxyNetwork or GalaxyDevNetwork is a server which was made in 2022 by galaxydevel0per, combining servers into one, like Hypixel we make it like a Network, This is not about trying to compete with any server we want it to be like a server with freedom like allowing cracked users and bedrock users joining the server.</p>
        </div>
        <h1 class="space-y-6 text-xl"><b>About the SMP & Atlas</b></h1>
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p>The SMP & Atlas is a way of connecting to one server with two worlds, the original SMP and Atlas, since lot's of minecraft servers like the idea of SMPs, </p>
        </div>
        <div class="pt-8 text-base font-semibold leading-7">
          <p class="text-gray-900">Wanna return to home?</p>
          <p>
            <a href="/" class="text-sky-500 hover:text-sky-600">Go back Home</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default About;
