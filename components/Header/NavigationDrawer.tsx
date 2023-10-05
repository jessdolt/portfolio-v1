import React from "react"
import { Transition, Dialog } from "@headlessui/react"
import { Fragment, useMemo, useState } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

interface NavigationDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} as="div" className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 "
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 "
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-auto bg-white py-4 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-end">
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 
                        focus:outline-none  focus:ring-offset-2"
                            onClick={onClose}
                          >
                            <span className="sr-only">Close Panel</span>
                            <XMarkIcon className="w-5 text-black" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="flex flex-col items-center justify-between h-full">
                        <div className="my-8 space-y-4">
                          <Link
                            href="/"
                            className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-75"
                          >
                            About
                          </Link>
                          <Link
                            href="/"
                            className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-75"
                          >
                            Work
                          </Link>
                          <Link
                            href="/"
                            className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-75"
                          >
                            Contact Me
                          </Link>
                        </div>
                        <div className="text-center py-4 border-t border-t-black/60">
                          <p className="text-xl font-bold">Jess Roque</p>
                          <p>Currently full-stack developer</p>
                          <p>Based in Pasig, Metro Manila, Ph</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default NavigationDrawer
