import { Dialog } from '@headlessui/react'
import { Disclosure } from '@headlessui/react'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.
import * as React from 'react';
import { useState } from 'react'


/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const navigation = [
  { name: 'Case Studies', href: '#' },
  { name: 'Industries', href: '#' },
  { name: 'Channel', href: '#' },
  { name: 'Story', href: '#' },
  { name: 'Sign In', href: '#' },
]

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:'#',    
    date: 'Mar 3, 2023',
    datetime: '2023-03-03',
    client: { title: 'Client A', href: '#' },
    
  },
  {
    id: 1,
    title: 'closers.io',
    href: '#',
    description:
      'Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:'#',    
    date: 'Mar 3, 2023',
    datetime: '2023-03-03',
    client: { title: 'Client A', href: '#' },
    
  },
  {
    id: 1,
    title: 'salesprocess.io',
    href: '#',
    description:
      'Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:'#',    
    date: 'Mar 3, 2023',
    datetime: '2023-03-03',
    client: { title: 'Client A', href: '#' },
  },
]
const faqs = [
  {
    question: "How long does the process take?",
    answer:
      "Somewhere from 2-6 weeks",
  },
  {
    question: "Will it work for me in XYZ niche?",
    answer:
      "Yes. This model works in any niche provided that the product is good and there is a level of desire.",
  },
]

const people = [
  { name: 'Option A', title: 'Reults', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },

]
const primaryFeatures = [
  {
    name: '1-on-1 Account Manager',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Custom sales systems.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Money back guarantee.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ServerIcon,
  },
]
const secondaryFeatures = [
  {
    name: '1-on-1 Account Manager',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Custom sales systems',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Money back guarantee',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
  },
}
const testimonials = [
  [
    [
      {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
]
const footerNavigation = {
  solutions: [
    { name: 'Producc', href: '#' },
  ],
  support: [
    { name: 'Contact Us', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  legal: [
    { name: 'Refund Policy', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Get a Price <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main>

        {/* Hero section */}
        <div className="relative isolate pt-14">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
          </svg>
          <div className="mx-auto max-w-7xl px-24 py-12 sm:py-12 lg:items-center lg:gap-x-10 lg:px-8 lg:py-12">
            
            {/* YouTube Video */}

            <div class="flex justify-center">
              <iframe class=" h-96 w-full object-cover object-center" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

          <div className="pb-24 pt-12 px-6 sm:px-6 sm:pb-32 sm:pt-12 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <br />
            The Solution To Capital-Efficient, Explosive Growth Using Paid Ads: How To Get 50X-100X ROI In Any Market.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
            commodo do ea.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
            </div>
          </div>
          </div>
        </div>       

        {/* Logo cloud */}
        <div className="bg-white pt-12 pb-18 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
              We have worked with over 3000 happy clients.
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>



        {/* Copy section */}
      
        <div>
          <div className="bg-white py-12 sm:py-8">
            <div className="mx-auto max-w-7xl px-1 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h1 className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Who is this for?</h1>
                <div className="mt-10 max-w-xl gap-8 text-base leading-7 text-gray-700 lg:max-w-none">
                  <div>
                    <p className="text-justify px-12">
                      Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                      vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                      erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                      semper sed amet vitae sed turpis id.
                    </p>
                    <p className="mt-8 text-justify px-12">
                      Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                      fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                      adipiscing egestas.
                    </p>
                  </div>
                  
                  <div>

                    <p className="mt-8 text-justify px-12">

                    You identify as Halsey or Raf Simons of your market and you refuse to lose.

                    You are an agency owner or coach trying to dominate your market and you are looking for the current most efficient marketing and sales process in the world. 
                    
                    </p>

                    <p className="mt-8 text-justify px-12">
                    You are looking for lean and mean. You are looking to make real money.

                    </p>

                    <p className="mt-8 text-justify px-12">
                    You are a REAL entrepreneur who understands REAL CASH FLOW.

                    You are a rockstar business person and you are getting squeezed at the low end of the market - you need to transition upstream and dominate, and you need a new mechanism to service the top end. 
                    
                    </p>
                    

                    <p className="mt-8 text-justify px-12">

                    You don’t want to be beholden to platforms if they change their mind about a certain part of their algo. You need a deep and robust strategy for marketing, no matter the climate.

                    You do NOT do things below your line and you are looking for the best information in the world to help you out. 

                    </p>

                    <p className="mt-8 text-justify px-12">
                    You do NOT do things below your line and you are looking for the best information in the world to help you out. 

                    </p>

                    <p className="mt-8 text-justify px-12">

                    You love recessions because they wipe away all the fakes and annoying competitors. 

                    You win, no matter the circumstances. 

                    Maybe, you may have got jolted by the Great P and you need to rejig some things to get back to action.

                    </p>


                  </div>
                
                <div className="mt-10 flex">
                  <a
                    href="https://calendly.com/lxmoore/rain-making-application-call"
                    className="rounded-md mx-auto bg-teal-600 py-4 px-6 text-2xl font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white py-12 sm:py-8">
            <div className="mx-auto max-w-7xl px-1 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h1 className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">The Best Time To Be Alive And Gain Ground:</h1>
                <div className="mt-10 max-w-xl gap-8 text-base leading-7 text-gray-700 lg:max-w-none">
                  <div>
                    <p className="text-center px-12">
                    Recession, war, inflation are stressing most everyone and forcing adaptation. 
                    </p>
                    
                    <p className="text-center py-4 px-12">
                    A period of austerity always follows the period of excess and the recent 10 years have been excessive:
                    </p>

                    <p className="text-center py-4 px-12">
                    Borrowed money, 100x revenue multiples with no regard for margins, smart people working on businesses that shouldn’t exist in the first place have created a lot of uselessness and a healthy recession is required to bring people back down from Pluto and restore some soundness to the economy. 
                    </p>
                    
                    <div class="flex justify-center">
                      <img className="mx-auto" src="https://i.imgur.com/EcG8wsy.png" />
                    </div>

                    <div class="flex justify-center">
                      <img className="mx-auto" src="https://i.imgur.com/9QFQqIo.png"/>
                    </div>

                    <p className="mt-8 text-center px-12">
                    Money printing and inflation is the force that is applied to the economy to straighten things out.
                    </p>

                    <div class="flex justify-center">
                      <img className="mx-auto" src="https://i.imgur.com/yj1Bjd9.png"/>
                    </div>

                    <p className="text-center py-4 px-12">
                    As a result of this force, businesses are required to recruit or invent new technology to either achieve profits for offers at pre-pandemic prices, or adapt their price to 3x that of the pre-pandemic if they keep the same cost structure. You need to pay for the eggs that have ballooned in price (even the media says otherwise).
                    </p>

                    <p className="text-center py-4 px-12">
                    <strong>The most savvy are using this as an opportunity to both increase price and increase margin faster than their competitors to completely dominate their market now and in the future.</strong>
                    </p>

                    <p className="text-center py-4 px-12">
                    The most savvy are using this as an opportunity to both increase price and increase margin faster than their competitors to completely dominate their market now and in the future.
                    </p>

                    <p className="text-center py-4 px-12">
                    At the product level, design and engineering is being facilitated with A.I., reducing the resources required to achieve product resonance, so margins are improving. 
                    </p>

                    <img className="mx-auto" src="https://i.imgur.com/t0VzAWs.png"/>

                    <p className="text-center py-4 px-12">
                    At the marketing and sales level, technologies like direct response copywriting (long form sales letters), video, and paid traffic platforms are being and will continue to be used to drastically increase the efficiency of distribution for any offer.
                    </p>

                    <img className="mx-auto" src="https://imgur.com/irsSkwi.png"/>

                    <p className="text-center py-4 px-12">
                    As a result, the superstar salespeople will transition to superstar marketers levered up with dynamic video sales letters, marketing teams will collapse down to only a few people, sales teams will collapse down to only a few people empowered by the video sales letter, and everyone on the team will be rewarded handsomely due to the efficiency gains if they adapt quickly.
                    </p>

                    <p className="mt-8 text-justify px-12">
                    In the limit, salespeople will not even be needed to sell since the dynamic sales letters and videos will do most of the work. 
                    </p>

                    <img className="mx-auto" src="https://imgur.com/NQTdGeF.png"/>

                    <p className="mt-8 text-justify px-12">
                    During this short downturn, traffic prices are extremely cheap. This presents an opportunity for the most adaptive. He/she who moves the quickest gets the biscuit since no one else is advertising. 
                    </p>

                    <p className="mt-8 text-justify px-12">
                    <strong> Advertising: </strong>
                    The arena in which all business is played is the Metaverse - the online platforms. 
                    </p>

                    <p className="mt-8 text-justify px-12">Meta, Google, Twitter, Amazon, TikTok, plus a few others are introducing regulation to increase their own profits and durability in their advertising business:
                    </p>

                    <p className="mt-8 text-justify px-12">
                    Outbound prospecting channels are getting more regulated and difficult to use (example of this is LinkedIn and Meta limiting the number of connection requests one can make per day or charging for a message). 
                    </p>

                    <p className="mt-8 text-justify px-12">
                    Organic traffic methods that utilize short-form content are getting more difficult to exploit since most everyone is pumping out free content (because they are too scared to run ads), and since there are still a limited number of eyeballs on the platforms, the competition is increasing, making it difficult to get reach unless you do extreme stunts or become a commentator on recent events.
                    </p>

                    <img className="mx-auto pt-4" src="https://imgur.com/QtFmsFD.png"/>

                    <p className="mt-8 text-justify px-12">
                    In-person conferences are great, however, when compared to leveraging precise advertising and long-form direct response copywriting techniques, they are terrible. Why do one-to-one when you can quite easily do one-to-many and reach many more people? Also, there are travel constraints and new laws preventing people from moving that could be implemented at any time. It’s too risky to depend only on in-person events.
                    </p>

                    <p className="mt-8 text-justify px-12">
                    So, if one must advertise, how do we do it and get insane returns?
                    </p>

                    <p className="mt-8 text-justify px-12">
                    The platforms and algorithms have become so advanced that anyone who can click a button/press play can get in front of their ideal audience, so simply understanding how to use the ad platforms is no longer an advantage. 
                    </p>

                    
                    
                    
                    <p className="mt-8 text-justify px-12">So, if one must advertise, how do we do it and get insane returns?</p>
                   
                    <p className="mt-8 text-justify px-12">The platforms and algorithms have become so advanced that anyone who can click a button/press play can get in front of their ideal audience, so simply understanding how to use the ad platforms is no longer an advantage. </p>
              
                    <p className="mt-8 text-justify px-12">Now that most everyone is onboarded to the platforms, and the algorithms are more mature, and most everyone must be advertising, the plane in which competition is done is at the content quality/copywriting level, and few people are good at copywriting (selling through written word and through video). This means that they can’t get real returns on their ads. </p>
                  
                    <p className="mt-8 text-justify px-12">There is nothing more powerful than ads when growing a business. </p>
                  
                    <p className="mt-8 text-justify px-12">So, how do you win?</p>

                    <p className="mt-8 text-justify px-12">Here’s the truth: </p>

                    <p className="mt-8 text-justify px-12"><strong>You can achieve capital-efficient, explosive growth, find product-market-fit, and make a hilarious 50-100x ROI on your advertising in any environment for any offer if you leverage paid ads and viral dynamic sales letters.</strong></p>
                    
                    <p className="mt-8 text-justify px-12">What is a viral dynamic ad? Below are some examples:</p>

                    <img className="mx-auto" src="https://imgur.com/AxRYq73.png"/>

                    <img className="mx-auto" src="https://imgur.com/1sKik9e.png"/>

                    <img className="mx-auto" src="https://imgur.com/AutMmB0.png"/>

                    <img className="mx-auto" src=" https://imgur.com/Fy9qnrT.png"/>

                    <p className="mt-8 text-justify px-12">Up until now, the method to assemble the viral dynamic sales letter and do direct response copywriting using paid ad platforms has yet to be defined - in general. We solved this and this is the only place on the planet that has access to this technology. </p>
                   
                    <p className="mt-8 text-justify px-12">When 2020 hit, the Meta platform got strangled by Apple, which cut off the tracking and made advertisers fly blind. </p>
              
                    <p className="mt-8 text-justify px-12">The currency diverged and the prices of houses soared, and the value of savings and cash was cut significantly, and the price of the traffic 3xd.</p>
                  
                    <p className="mt-8 text-justify px-12">People who invested in growth stocks and crypto made a “killing” - that they later lost - which distracted everyone from doing real business.</p>
                  
                    <p className="mt-8 text-justify px-12">Employees didn’t feel like working anymore since they were making more money trading crypto or stocks than they were doing real work, so there was a downturn.</p>

                    <p className="mt-8 text-justify px-12">Travel bans and restrictions made it difficult for people to even engage with each other and go to work</p>

                    <p className="mt-8 text-justify px-12">Some employees got sick which prevented them from working. A bit of a mess.</p>
                    
                    <p className="mt-8 text-justify px-12">The whole experience forced businesses to get as efficient as possible to focus on the best levers in the business and best tech today - which were the viral dynamic sales letter and paid ads.</p>

                    <p className="mt-8 text-justify px-12">You now want to spin up a few claims, test them with some organic and paid traffic, validate a claim, define a new offer and spin up a viral sales letter. </p>

                    <p className="mt-8 text-justify px-12">At some point, you want to be getting 50-100x ROI on my ads and moving quickly. And people who use this formula are getting 50-100x as well since the strategy below has been proven.

</p>

                    <p className="mt-8 text-justify px-12">I was forced to really define the viral dynamic sales letter process because my business depended on it.</p>

                    <p className="mt-8 text-justify px-12">
                    <strong>The Dynamic Sales Letter/Banger Ad: </strong>
                    A single sales letter or ad that targets a specific market segment for a specific offer, that has viral effects (gets shared</p>
                    
                    <p className="mt-8 text-justify px-12">that drops the cost per thousand impressions at the traffic level and increases paid ads efficiency, 
</p>

                    <p className="mt-8 text-justify px-12">that lasts for years (and reduces the need to continually update creative), </p>

                    <p className="mt-8 text-justify px-12">that decreases the sales cycle length and cost to sell (since the prospects get sold through the video or written document), 
</p>

                    <p className="mt-8 text-justify px-12">that drops the resources required to train and ramp salespeople (since the pitch is in video form and salespeople just regurgitate copy), 
</p>

                    <p className="mt-8 text-justify px-12">It decreases the overhead required to run sales and marketing (since all marketing and sales is consolidated into a single asset written by a single person distributed through a single platform, routed to a single web page, and tracked using a single tool.) 
</p>

                    <p className="mt-8 text-justify px-12">This all results in extreme capital efficiency and explosive growth. It’s sales done with a single video instead of an entire orchestra of people. 

</p>

                    <p className="mt-8 text-justify px-12">It’s way more efficient than anything else that I’ve ever seen.
</p>

                    <p className="mt-8 text-justify px-12">Here is a model that illustrates the effects of a Viral Dynamic Sales Letter on a business with a $50k price point.</p>

                    <p className="mt-8 text-justify px-12"></p>

                    <p className="mt-8 text-justify px-12"></p>

                    <p className="mt-8 text-justify px-12"></p>

                    <p className="mt-8 text-justify px-12"></p>
                    
                    <img className="mx-auto" src="https://imgur.com/yYHjCXm.png"/>

                    <img className="mx-auto" src="https://imgur.com/1sKik9e.png"/>

                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h1 className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Core Concept</h1>
                <div className="mt-10 max-w-xl gap-8 text-base leading-7 text-gray-700 lg:max-w-none">
                  <div>
                    <p className="text-justify px-12">
                    Last client went from $0 to closing $40k USD within 16 days of the offer launching (collected ≈ 30k USD - 100% margins, all organic)

                    Once we get the case studies we will go to paid ads and turn it parabolic.
                    </p>
                    <p className="mt-8 text-justify px-12">
                    Another client:
                    Generated $160k of pipeline in the first 14 days of working together.
                    </p>

                    <p className="mt-8 text-justify px-12">
                    Not to mention the fact that this exact protocol grew these companies:
                    Salesprocess.io to $5M in 14 months
                    Closers.io to $3M/month
                    Copilot.AI to $1M ARR and an $80M valuation 
                    Kinobody from $2M to $12M in 24 months
                    Press Advantage to $1M in 12 months
                    </p>


                    <p className="mt-8 text-justify px-12">
                    The goal of this document is to help you rapidly scale to hundreds of thousands of dollars per month and find product market fit easily.
                    </p>

                    

                    <p className="mt-8 text-justify px-12">
                    The most adaptive will experience a short period of downturn during which time they will transition to new models and use new tech, then experience a period of explosive, and profitable growth. 
                    </p>

                    <img className="mx-auto" src="https://i.imgur.com/9QFQqIo.png"/>

                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>



        {/* Case study section */}

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Check out our case studies</h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Case Study Name.
              </p>
              <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                {posts.map((post) => (
                  <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                      <img
                        src={post.imageUrl}
                        alt=""
                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div>
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={post.datetime} className="text-gray-500">
                          {post.date}
                        </time>
                        <a
                          href={post.client.href}
                          className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {post.client.title}
                        </a>
                      </div>
                      <div className="group relative max-w-xl">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href={post.href}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                        </h3>
                        <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                      </div>
                      
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Text section */}

        <div className="bg-white px-24 py-12 sm:py-24">
          <div className="relative overflow-hidden pt-16 lg:pt-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <img
                  className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                  src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                  alt=""
                />
                <div className="relative" aria-hidden="true">
                  <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                </div>
          </div>
          </div>
          <div className="pt-8"></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <p className="text-base font-semibold leading-7 text-teal-600">Deploy faster</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
                <div>
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                    vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                    erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                    semper sed amet vitae sed turpis id.
                  </p>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                    adipiscing egestas.
                  </p>
                </div>
                <div>
                  <p>
                    Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                    eget. Est augue maecenas risus nulla ultrices congue nunc tortor.
                  </p>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                    adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex">
                <a
                  href="#"
                  className="rounded-md bg-teal-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
         
        </div>

        <div className="bg-white px-24 py-12 sm:py-24">
          <div className="relative overflow-hidden pt-16 lg:pt-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <img
                  className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                  src="https://i.imgur.com/EcG8wsy.png"
                  alt=""
                />
                <div className="relative" aria-hidden="true">
                  <div className="absolute -inset-x-20 bottom-0" />
                </div>
          </div>
          </div>
          <div className="pt-8"></div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <p className="text-base font-semibold leading-7 text-teal-600">Deploy faster</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
                <div>
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                    vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                    erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                    semper sed amet vitae sed turpis id.
                  </p>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                    adipiscing egestas.
                  </p>
                </div>
                <div>
                  <p>
                    Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                    eget. Est augue maecenas risus nulla ultrices congue nunc tortor.
                  </p>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                    adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                </div>
              </div>
              <div className="mt-10 flex">
                <a
                  href="#"
                  className="rounded-md bg-teal-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="flex justify-start py-12 px-12 flex-row">
          <div className="mx-auto flex-1 max-w-7xl px-8 py-4 sm:py-8 lg:py-12">
            <p>Donec sollicitudin nec neque vel suscipit. Donec elit neque, porta sed leo nec, accumsan porta leo. Suspendisse imperdiet erat a ante ornare, quis lacinia eros lobortis. Vivamus dignissim malesuada vulputate. Mauris quis sapien eget lacus venenatis bibendum. Integer nec massa gravida, bibendum enim vitae, commodo elit. Praesent vitae laoreet lacus. Nulla viverra tincidunt ornare. Maecenas nec dolor fringilla neque malesuada mollis a at magna. Cras augue nibh, pharetra ac augue non, interdum tristique nisi. Aliquam tincidunt porttitor euismod. Mauris a blandit metus. Donec mattis facilisis neque at luctus.</p>
          </div>
          <div className=" w-1/3">
            <img className="mx-auto h-72" src="https://media.gettyimages.com/id/200334504-001/photo/usa-washington-mt-rainier-national-park-wildflowers-and-hiker.jpg?s=612x612&w=gi&k=20&c=YGIirXTR7vPg9OepRPTLmJ9eM5aSRST-ngxKT9NyLw8=" />
          </div>
        </div>
      
        {/* Options section */}

        <div className="px-24 pt-12 sm:px-6 lg:px-32 border-rounded">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">Offer</h1>
              <p className="mt-2 text-sm text-gray-700">
                Option A vs. Option B
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                href="https://calendly.com/lxmoore/rain-making-application-call"
                className="block rounded-md bg-teal-600 py-2 px-3 text-center text-2xl font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Book a Call
              </button>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Name
                      </th>
                      <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                        Title
                      </th>
                      <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                        Email
                      </th>
                      <th scope="col" className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900">
                        Role
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {person.name}
                        </td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-500">{person.title}</td>
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-teal-600">Grow faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to skyrocket your sales
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
              pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-teal-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a href={feature.href} className="text-sm font-semibold leading-6 text-teal-600">
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sign up to see more of our clients results and case studies.
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
               Notify me
              </button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#42ff91" />
                  <stop offset={1} stopColor="#186ed8" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="relative isolate mt-32 sm:mt-56 sm:pt-32">
          <svg
            className="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
                width={200}
                height={200}
                x="50%"
                y={0}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-50">
              <path
                d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)" />
          </svg>
          <div className="relative">
            <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
              <svg viewBox="0 0 1313 771" aria-hidden="true" className="ml-[max(50%,38rem)] w-[82.0625rem]">
                <path
                  id="bc169a03-3518-42d4-ab1e-d3eadac65edc"
                  fill="url(#85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3)"
                  d="M360.508 589.796 231.671 770.522 0 498.159l360.508 91.637 232.034-325.485c1.485 150.396 51.235 393.965 238.354 165.069C1064.79 143.261 1002.42-107.094 1171.72 46.97c135.44 123.252 148.51 335.641 138.11 426.428L971.677 339.803l24.062 411.461-635.231-161.468Z"
                />
                <defs>
                  <linearGradient
                    id="85a0eca5-25f1-4ab9-af84-4e2d8d9cdbf3"
                    x1="1313.17"
                    x2="-88.881"
                    y1=".201"
                    y2="539.417"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#88fc9f" />
                    <stop offset={1} stopColor="##29a6ff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end">
              <svg
                viewBox="0 0 1313 771"
                aria-hidden="true"
                className="ml-[-22rem] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)]"
              >
                <use href="#bc169a03-3518-42d4-ab1e-d3eadac65edc" />
              </svg>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-xl sm:text-center">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-teal-600">Testimonials</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  We have worked with 3000 amazing clients to date.
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                  <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                    <p>{`“${featuredTestimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 py-4 px-6">
                    <img
                      className="h-10 w-10 flex-none rounded-full bg-gray-50"
                      src={featuredTestimonial.author.imageUrl}
                      alt=""
                    />
                    <div className="flex-auto">
                      <div className="font-semibold">{featuredTestimonial.author.name}</div>
                      <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                    </div>
                    <img className="h-10 w-auto flex-none" src={featuredTestimonial.author.logoUrl} alt="" />
                  </figcaption>
                </figure>
                {testimonials.map((columnGroup, columnGroupIdx) => (
                  <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                    {columnGroup.map((column, columnIdx) => (
                      <div
                        key={columnIdx}
                        className={classNames(
                          (columnGroupIdx === 0 && columnIdx === 0) ||
                            (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                            ? 'xl:row-span-2'
                            : 'xl:row-start-1',
                          'space-y-8'
                        )}
                      >
                        {column.map((testimonial) => (
                          <figure
                            key={testimonial.author.handle}
                            className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                          >
                            <blockquote className="text-gray-900">
                              <p>{`“${testimonial.body}”`}</p>
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-x-4">
                              <img
                                className="h-10 w-10 rounded-full bg-gray-50"
                                src={testimonial.author.imageUrl}
                                alt=""
                              />
                              <div>
                                <div className="font-semibold">{testimonial.author.name}</div>
                                <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                              </div>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ section */}

        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">{faq.question}</span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                              ) : (
                                <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>



        {/* CTA section */}

        <div className="bg-white">
          <div className="py-4 px-6 sm:px-6 sm:py-8 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Skyrocket your sales.
                <br />
                Book a call today.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
                commodo do ea.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://calendly.com/lxmoore/rain-making-application-call"
                  className="rounded-md bg-teal-600 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                  Book a Call
                </a>
            </div>
          </div>
        </div>
      </div>

      
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-gray-900 sm:mt-32" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <img
              className="h-7"
              src="#"
              alt="Leo Moore"
            />
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Pricing</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Case Studies</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Refunds</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Get on the list to hear about all our client wins.
              </p>
            </div>
            <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:w-56 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-teal-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              {footerNavigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2023 LeoX, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
