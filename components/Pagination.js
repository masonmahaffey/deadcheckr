import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {classNames} from "./utility";

const highlighted = "relative z-10 inline-flex bg-gray-500 items-center ring-inset ring-gray-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer";
const standard = "relative hidden items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:z-20 focus:outline-offset-0 md:inline-flex cursor-pointer"

const usableLeft = "relative inline-flex items-center rounded-l-md px-2 py-2 text-white ring-1 ring-inset ring-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:z-20 focus:outline-offset-0 cursor-pointer"
const unusableLeft = "relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-600 focus:z-20 focus:outline-offset-0 cursor-not-allowed"

const usableRight = "relative inline-flex items-center rounded-r-md px-2 py-2 text-white ring-1 ring-inset ring-gray-600 hover:bg-gray-50 hover:text-gray-900 focus:z-20 focus:outline-offset-0 cursor-pointer"
const unusableRight = "relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-600 focus:z-20 focus:outline-offset-0 cursor-not-allowed"

export default function Pagination({ pagination, currentPage }) {

  function goToPage(e, selectedPage) {
    e.preventDefault();
    const nextPage = "?p=" + selectedPage;
    window.location.href = nextPage;
  }
  
  function backPage(e) {
    e.preventDefault();
    const np = currentPage - 1;
    const nextPage = currentPage <= 1 ? "?p=1": "?p=" + np;
    window.location.href = nextPage;
  }

  function nextPage(e) {
    e.preventDefault();
    const np = currentPage + 1;
    const nextPage = currentPage >= 45 ? "?p=45": "?p=" + np;
    window.location.href = nextPage;
  }
  return (
    <div className="flex items-center justify-between bg-gray-800 px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          onClick={(e) => backPage(e)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          onClick={(e) => nextPage(e)}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Showing <span className="font-medium">{currentPage <= 45 ? (currentPage * 10) - 10: 440}</span> to <span className="font-medium">{currentPage <= 45 ? currentPage == 45 ? 444: currentPage * 10: 444}</span> of{' '}
            <span className="font-medium">444</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              onClick={(e) => backPage(e)}
              className={classNames(currentPage <= 1 ? unusableLeft:usableLeft ,"")}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              onClick={(e) => goToPage(e, pagination.bottom[0])}
              aria-current="page"
              className={classNames(pagination.bottom[0] == currentPage ? highlighted: standard, "")}
            >
              {pagination.bottom[0]}
            </a>
            <a
              onClick={(e) => goToPage(e, pagination.bottom[1])}
              className={classNames(pagination.bottom[1] == currentPage ? highlighted: standard, "")}
            >
              {pagination.bottom[1]}
            </a>
            <a
              onClick={(e) => goToPage(e, pagination.bottom[2])}
              className={classNames(pagination.bottom[2] == currentPage ? highlighted: standard, "")}
            >
              {pagination.bottom[2]}
            </a>
            <span className={classNames(pagination.middle == currentPage ? highlighted: standard, "")}>
              {pagination.middle == 0 ? "...": pagination.middle}
            </span>
            <a
              onClick={(e) => goToPage(e, pagination.top[0])}
              className={classNames(pagination.top[0] == currentPage ? highlighted: standard, "")}
            >
              {pagination.top[0]}
            </a>
            <a
              onClick={(e) => goToPage(e, pagination.top[1])}
              className={classNames(pagination.top[1] == currentPage ? highlighted: standard, "")}
            >
              {pagination.top[1]}
            </a>
            <a
              onClick={(e) => goToPage(e, pagination.top[2])}
              className={classNames(pagination.top[2] == currentPage || currentPage > 45 ? highlighted: standard, "")}
            >
              {pagination.top[2]}
            </a>
            <a
              onClick={(e) => nextPage(e)}
              className={classNames(currentPage >= 45 ? unusableRight:usableRight ,"")}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
