/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import React from 'react';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, HashtagIcon, SearchIcon, ServerIcon, SupportIcon } from '@heroicons/react/outline';
const project = [
  {
    name: 'GalaxyDevNetwork',
    description:
      "The Project full of other projects made inside GalaxyDevNetwork",
  },
  {
    name: 'meme20200',
    description:
      'The oldest project yet the newest project',
  },
  {
    name: 'GalaxyDev',
    description:
      "The first project which started GalaxyDevNetwork and revived meme20200 and it's a Discord Bot",
  }
]

const features = [
  {
    name: 'Projects',
    description:
      'We make projects for you to use like meme20200 a minehut server developed by us!',
    icon: GlobeAltIcon,
  },
  {
    name: 'No Paying',
    description:
      "We will not let you pay for us, but you can support us ❤️",
    icon: ScaleIcon,
  },
  {
    name: 'Impossible = Possible',
    description:
      'We make things that are impossible into possible',
    icon: LightningBoltIcon,
  },
  {
    name: 'Discord Server',
    description:
      'We have a Discord Server so you can be notified about when a new project or update has been made! or you can chat and chill!',
    icon: HashtagIcon,
  },
  {
    name: 'meme20200',
    description:
      "We wanna let you play meme20200 with more things, that's why we began meme20200, for you to have fun!",
    icon: ServerIcon,
  },
  {
    name: 'Support',
    description:
      "You can get help from our staff team! Helpers, Mods, Admins, CO-OWNERS even the OWNER is here to help you :)",
    icon: SupportIcon,
  },
]

export default function Home() {
  return (
    <>
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center h-screen">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm: sm: md: lg: lg: xl:">
            <div className="justify-center item-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">The GalaxyNetwork that </span>
                <span className="block text-indigo-600 xl:inline">Actually works!</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                With projects like <a href="https://www.meme20200.tk">meme20200</a> & GalaxyDev
              </p>
              <div className="sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="https://galaxynetwork.page.link/discord"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Join our Discord
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
          <div>
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Rank</h2>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A way of understanding what Projects we currently have</h2>
            <p className="mt-4 text-gray-500">
              The projects we make so you can use them!</p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {projects.map((project) => (
                <div key={project.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{project.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{project.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Then hop on the server.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="https://galaxynetwork.page.link/discord"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Join our Discord!
              </a>
            </div>
            </div>
          </div>
      </div>
    </div>
  </>
  )
}
