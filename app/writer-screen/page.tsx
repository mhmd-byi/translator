"use client";
import { Tab } from "@headlessui/react";
import {
  AtSymbolIcon,
  CodeBracketIcon,
  LinkIcon,
} from "@heroicons/react/20/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function WriterScreen() {
  return (
    <div className="flex flex-col justify-center py-12 mx-auto max-w-7xl p-6 lg:px-8">
        <div className="bg-white py-10 sm:py-10">
  <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-0 lg:px-0y xl:grid-cols-3">
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div className="flex items-center gap-x-6">
          {/* <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Abbas Badshah</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">30406688</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
      <form action="#">
        <Tab.Group>
          {({ selectedIndex }) => (
            <>
              <Tab.List className="flex items-center">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900",
                      "rounded-md border border-transparent px-3 py-1.5 text-sm font-medium"
                    )
                  }
                >
                  Write
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-900",
                      "ml-2 rounded-md border border-transparent px-3 py-1.5 text-sm font-medium"
                    )
                  }
                >
                  Preview
                </Tab>

                {/* These buttons are here simply as examples and don't actually do anything. */}
                {selectedIndex === 0 ? (
                  <div className="ml-auto flex items-center space-x-5">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Insert link</span>
                        <LinkIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Insert code</span>
                        <CodeBracketIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="-m-2.5 inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Mention someone</span>
                        <AtSymbolIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ) : null}
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                  <label htmlFor="comment" className="sr-only">
                    Comment
                  </label>
                  <div>
                    <textarea
                      rows={30}
                      name="comment"
                      id="comment"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Your Writing Pad"
                      defaultValue={""}
                    />
                  </div>
                </Tab.Panel>
                <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                  <div className="border-b">
                    <div className="mx-px mt-px px-3 pb-12 pt-2 text-sm leading-5 text-gray-800">
                      Preview content will render here.
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
