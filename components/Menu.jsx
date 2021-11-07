import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { auth } from '../config/firebaseConfig';
import { signOut } from 'firebase/auth';

export default function DropDownMenu() {
  return (
    <div className="absolute z-50 w-40 mr-12 right-1 -top-2">
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-gray-200 border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              <button
                onClick={() => signOut(auth)}
                className={`text-gray-50 bg-red-700 font-bold flex rounded-md items-center w-full px-2 py-2 hover:bg-red-600`}
              >
                <DeleteInactiveIcon className="w-5 h-5 " aria-hidden="true" />
                Sign out
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </div>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  );
}
