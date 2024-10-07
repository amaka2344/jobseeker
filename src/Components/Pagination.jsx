import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <React.Fragment>
      <div className="text-center">
        <ul className="pagination">
          {/* Previous button */}
          <li className={currentPage === 1 ? "disabled" : ""}>
            <a href="#!" onClick={handlePreviousClick}>
              <i className="fa fa-chevron-left"></i>
            </a>
          </li>

          {/* Render page numbers dynamically */}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (number) => (
              <li
                key={number}
                className={number === currentPage ? "active" : ""}
              >
                <a href="#!" onClick={() => handlePageClick(number)}>
                  {number}
                </a>
              </li>
            )
          )}

          {/* Next button */}
          <li className={currentPage === totalPages ? "disabled" : ""}>
            <a href="#!" onClick={handleNextClick}>
              <i className="fa fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Pagination;
