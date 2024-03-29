import React, { useState } from "react";

function Nav() {
  return (
    <>
      <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
          <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
              <a href="/" class="flex items-center">
                  <img src="https://raw.githubusercontent.com/galaxydevnetwork/website/main/galaxynetwork.png" class="mr-3 h-6 sm:h-9" alt="GalaxyDevNetwork Logo"></img>
                  <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">GalaxyDevNetwork</span>
              </a>
              <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                      <span class="sr-only">Open main menu</span>
                      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button>
              <div id="mega-menu-full" class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
                  <ul class="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
                      <li>
                          <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                      </li>
                      <li>
                          <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Links <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                      </li>
                      <li>
                          <a href="projects" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                      </li>
                      <li>
                          <a href="about" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                      </li>
                  </ul>
              </div>
          </div>
          <div id="mega-menu-full-dropdown" class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
              <div class="grid py-5 px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
                  <ul aria-labelledby="mega-menu-full-dropdown-button">
                      <li>
                          <a href="/" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                              <div class="font-semibold">GalaxyDevNetwork</div>
                              <span class="text-sm font-light text-gray-500 dark:text-gray-400">It's this website, totally this website</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://galaxynetwork.page.link/discord" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                              <div class="font-semibold">GalaxyDevNetwork Discord</div>
                              <span class="text-sm font-light text-gray-500 dark:text-gray-400">The discord server with all projects made from GalaxyDevNetwork into one!</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://blog.galaxynetwork.ml" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                              <div class="font-semibold">GalaxyDevNetwork Blog</div>
                              <span class="text-sm font-light text-gray-500 dark:text-gray-400">Blogs that are made in GalaxyDevNetwork about new updates about our projects</span>
                          </a>
                      </li>
                  </ul>
                  <ul>

                      <li>
                          <a href="https://www.meme20200.tk" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                              <div class="font-semibold">meme20200</div>
                              <span class="text-sm font-light text-gray-500 dark:text-gray-400">meme20200 A Advanced Minehut Dupe SMP</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://teams.meme20200.tk" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                              <div class="font-semibold">meme20200 Teams</div>
                              <span class="text-sm font-light text-gray-500 dark:text-gray-400">Create Teams within meme20200 Minehut Server and view it here!</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://meme20200.fandom.com" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                              <div class="font-semibold">meme20200 Wiki</div>
                              <span class="text-sm font-light text-gray-500 dark:text-gray-400">Learn more about meme20200 here!</span>
                          </a>
                      </li>
                  </ul>
                  <ul class="hidden md:block">
                      <li>
                          <a href="http://galaxydevnetwork.github.io/galaxydev/" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                              <div class="font-semibold">GalaxyDev</div>
                              <span class="text-sm font-light text-gray-500 dark:text-gray-400">The discord bot which came from the galaxy neighbourhood</span>
                          </a>
                      </li>
                      <li>
                          <a href="http://galaxydevnetwork.github.io/galaxydev/blog" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                              <div class="font-semibold">GalaxyDev Blogs</div>
                              <span class="text-sm font-light text-gray-500 dark:text-gray-400">Blogs that are made from the devel0per who made it</span>
                          </a>
                      </li>
                      <li>
                          <a href="https://galaxydevnetwork.github.io/galaxydev/docs/intro" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                              <div class="font-semibold">GalaxyDev Docs</div>
                              <span class="text-sm font-light text-gray-500 dark:text-gray-400">Learn the powers of this discord bot</span>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    </>
  );
}

export default Nav;
