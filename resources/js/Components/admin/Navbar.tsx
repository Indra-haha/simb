import { useState } from "react";
import SidebarToggle from "../SidebarToggle";
import ThemeToggle from "../ThemeToggle";
import Dropdown from "@/Components/Dropdown";
import { usePage } from "@inertiajs/react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  type PageProps = {
    auth: { user: { name: string } };
  };
  const { props } = usePage<PageProps>();
  const user = props.auth.user;
  return (
    <header className="h-16 bg-white dark:bg-[#2D3748] border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 sticky top-0 z-50">

      <SidebarToggle open={open} setOpen={setOpen} />

      {/* Right: Icons */}
      <div className="flex items-center gap-4">

        <ThemeToggle />

        {/* User Avatar */}
        <Dropdown>
          <Dropdown.Trigger>
            <span className="inline-flex rounded-md">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
              >
                {user.name}

                <svg
                  className="-me-0.5 ms-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </Dropdown.Trigger>

          <Dropdown.Content>
            <Dropdown.Link
              href={route('profile.edit')}
            >
              Profile
            </Dropdown.Link>
            <Dropdown.Link
              href={route('logout')}
              method="post"
              as="button"
            >
              Log Out
            </Dropdown.Link>
          </Dropdown.Content>
        </Dropdown>

      </div>
    </header>
  );
}
