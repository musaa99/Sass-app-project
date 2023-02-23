import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const calculatePagesToRender = () => {
    const totalPages = Math.ceil(itemsCount / pageSize);
    // if we only have 1 page do not create page number buttons
    if (totalPages === 1) return null;

    let startPage, endPage;
    if (totalPages <= 6) {
      // less than 6 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 6 total pages so calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    const pageNumbers = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );
    return { pageNumbers, totalPages };
  };
  const pageData = calculatePagesToRender();

  // these are just buttons with numbers that tell the parent element which page to go to
  // they know nothing about what the pages have on them
  if (!pageData || pageData.totalPages < 2) return null;
  return (
    <div className="btn-group w-full flex justify-end">
      {pageData.pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          aria-label={"Page " + pageNumber}
          onClick={() => onPageChange(pageNumber, pageData.totalPages)}
          className={
            `${pageNumber === currentPage ? " active " : ""}` +
            "btn bg-white btn-sm hover:bg-[#07939BCC] border-slate-600 rounded-none "
          }
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
