import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom";
import { Endpoint } from "../routes";

const Heading = (props: {routes: Endpoint[]}) => {
    return (
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {props.routes.map(({path, name}) => {
                          return (
                            <NavLink
                              key={name}
                              to={path}
                              className={
                                ({isActive}) => {
                                  const style = " rounded-md px-3 py-2 text-sm font-medium"
                                  return isActive ? 'bg-gray-900 text-white' + style
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white' + style
                                }
                              }
                            >
                              {name}
                            </NavLink>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {props.routes.map(({name, path}) => (
                    <Disclosure.Button
                      key={name}
                    >
                      <NavLink
                        key={name}
                        to={path}
                        className={
                          ({isActive}) => {
                            const style = " rounded-md px-3 py-2 text-sm font-medium"
                            return isActive ? 'bg-gray-900 text-white' + style
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white' + style
                          }
                        }
                      >
                        {name}
                      </NavLink>
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    )
}

export default Heading;