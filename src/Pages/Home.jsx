/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import React from 'react';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, HashtagIcon, SearchIcon, ServerIcon, SupportIcon } from '@heroicons/react/outline'
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText("galaxynetwork.ml");
  };


const features = [
  {
    name: 'Cracked, Bedrock and Java allowed!',
    description:
      'We allow everyone to play GalaxyNetwork, except the people who are unfair and try to bully people or break our rules,',
    icon: GlobeAltIcon,
  },
  {
    name: 'No Pay 2 Win',
    description:
      "We stand aganist p2w, so instead of getting the VIP+ with money it's time which gets you ranks.",
    icon: ScaleIcon,
  },
  {
    name: '24/7 Always',
    description:
      'We try to make it possible for people who want ',
    icon: LightningBoltIcon,
  },
  {
    name: 'Discord Server',
    description:
      'We have our own discord server, for people who wanna see the chat or just... Chill out! Talk with the people who wanna maybe become your friend.',
    icon: HashtagIcon,
  },
  {
    name: 'Hub',
    description:
      "We wanna connect all the servers into one, So we've connected it into one server to connect to the server you want. So we made the hub with the server locator",
    icon: ServerIcon,
  },
  {
    name: 'Support',
    description:
      "The owner or any staff will help you in any way, like if your experiencing some sort of problem or trying to report someone, we will try our best to resolve your problem or try to warn him to stop, mute him, kick him or if he didn't care we will ban him. We try to make GalaxyNetwork a place for people who wanna play Minecraft with Peace.",
    icon: SupportIcon,
  },
]

export default function Home() {
  return (
    <>
       <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <img src="https://play.tailwindcss.com/img/beams.jpg" alt="" class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div class="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center h-screen">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm: sm: md: lg: lg: xl:">
            <div className="sm:text-center lg:text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">The GalaxyNetwork that </span>
                <span className="block text-indigo-600 xl:inline">Actually works!</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                With a Plot Creative, SMP & Atlas, Skyblock and more coming soon, but now we have to wait until July for the server to work.
              </p>
              <div className="sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    onClick={handleClick}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Copy IP
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    </div>
    </div>
      <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A way of understanding the features of GalaxyNetwork
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
           GalaxyNetwork features about the Minecraft Server and the Discord Server.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  </>
  )
}
