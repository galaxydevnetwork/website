import React from 'react';

function Footer() {
  return(
    
<footer class="bg-gray-800">
    <div class="grid grid-cols-2 gap-8 py-8 px-6">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase text-center">GalaxyNetwork</h2>
            <ul class="text-gray-300 text-center">
                <li class="mb-4">
                    <a href="About" class=" hover:underline">About</a>
                </li>
                <li class="mb-4">
                    <a href="Servers" class="hover:underline">Servers</a>
                </li>
                <li class="mb-4">
                    <a href="/" class="hover:underline">Home</a>
                </li>
                <li class="mb-4">
                    <a href="https://docs.galaxynetwork.ml/">Documentation</a>
                </li>
                <li class="mb-4">
                    <a href="https://blog.galaxynetwork.ml/">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase text-center">Help center</h2>
            <ul class="text-gray-300 text-center">
                <li class="mb-4">
                    <a href="https://discord.gg/pvMdwVhekf" class="hover:underline">Discord Server</a>
                </li>
                <li class="mb-4">
                    <a href="https://twitter.com/GLXYDEVNETWORK" class="hover:underline">Twitter</a>
                </li>
              <li class="mb-4"><a href="#" class="hover:underline">
                    <a href="https://discord.gg/pvMdwVhekf" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-300 sm:text-center">© 2022 <a href="https://galaxynetwork.ml/">GalaxyDevNetwork</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a href="https://github.com/galaxydevnetwork" class="text-gray-400 hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="https://discord.gg/pvMdwVhekf" class="text-gray-400 hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</footer>
  )
}
export default Footer;
