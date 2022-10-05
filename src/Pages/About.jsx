import React from "react";

function About() {
  return (
 <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mx-auto max-w-md">
      <div class="">
        <h1 class="text-2xl"><b>About GalaxyNetwork</b></h1>
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p>GalaxyDevNetwork is a project made by GalaxyDevel0per which is to connect all projects into one project</p>
        </div>
        <h1 class="space-y-6 text-xl"><b>About meme20200</b></h1>
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p>meme20200 is a Minehut Server developed by GalaxyDevel0per (minecraft_20200) & co-owners are: jkeker, DeadzWRLD & Trollare, This was developed in 2020 and still stands today!</p>
        </div>
        <h1 class="space-y-6 text-xl"><b>About GalaxyDev</b></h1>
        <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
          <p>GalaxyDev is a Discord Bot which started GalaxyDevNetwork and revived meme20200, It has problems and may not be updated later this year </p>
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
