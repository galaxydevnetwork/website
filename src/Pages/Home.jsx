/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import React from 'react';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, HashtagIcon, SearchIcon, ServerIcon, SupportIcon } from '@heroicons/react/outline';
const ranks = [
  {
    name: 'Member',
    description:
      'The normal rank for people joining the server. one /sethome',
  },
  {
    name: 'VIP',
    description:
      "The rank for people who played the server for 3 days. Fly and changing tag and 3 /sethome will be enabled after achieving the rank.",
  },
  {
    name: 'VIP+',
    description:
      'The rank for people who play daily for 1 week. Fly, Changing tag, 10 /sethome achieving',
  },
  {
    name: 'Galaxy',
    description:
      'Galaxy, a rank for people who got it so randomly, most accurance is GalaxyDevel0per giving you the rank.',
  },
  {
    name: 'Staff',
    description:
      "It's a rank for staff working for galaxynetwork, moderating the chat, developing things and giving ideas. Every Permission",
  },
  {
    name: 'CO-OWNER',
    description:
      "This rank is only for the Co-owner, CO-Owners can also be GalaxyDevel0per's friend. Every permission",
  },
  {
    name: 'GalaxyDev',
    description:
      "This role is for GalaxyDevel0per and to not be used for people, this is only for the owner in GalaxyNetwork which is GalaxyDevel0per. Every permission",
  },
]

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
                    href="https://docs.galaxynetwork.ml/"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
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
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A way of understanding what the ranks are</h2>
            <p className="mt-4 text-gray-500">
              The ranks in the servers, you can learn them so then when you see them, you can understand what it is</p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {ranks.map((rank) => (
                <div key={rank.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{rank.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{rank.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/Servers"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="https://docs.galaxynetwork.ml"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
            </div>
          </div>
      </div>
    </div>
  </>
  )
}
