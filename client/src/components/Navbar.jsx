import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../media/logo2.png';

// Yavaş yavaş git by Mansur Yavaş

const navigation = [
  { name: 'Ana Sayfa', href: 'http://localhost:3000/', current: true },
  { name: 'Özellikler', href: 'http://localhost:3000/#stats', current: false },
  { name: 'Paketler', href: 'http://localhost:3000/#package', current: false },
  { name: 'İletisim', href: 'http://localhost:3000/#contact', current: false },
  { name: 'Ücretsiz Deneyin', href: 'http://localhost:3000/login', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
    return (
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-items-end">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex justify-between w-full ">
                    <div className="flex  items-center">
                      <img
                        className="block h-16 w-auto lg:hidden"
                        src={logo}
                        alt="Your Company"
                      />
                      <img
                        className="hidden   h-16 w-auto lg:block mr-5"
                        src={logo}
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden pt-4 items-center sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
     
                </div>
              </div>
    
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      )
}

export default Navbar