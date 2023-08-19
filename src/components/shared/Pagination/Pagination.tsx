import ReactPaginate from "react-paginate";

interface PaginationProps {
    paginationHandler: (data: { selected: number }) => void
    pageCount: number;
}

export const LIMIT = "10";
export function Pagination({ paginationHandler, pageCount }: PaginationProps) {
    return (
        <div className="flex items-center justify-center my-10">
            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={paginationHandler}
                pageClassName={"px-3 py-1 flex items-center justify-center"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                breakClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                containerClassName={"flex items-center justify-center bg-white p-1 px-5 shadow-[0_8px_16px_0px_#6264F03D] rounded-full"}
                breakLinkClassName={"page-link"}
                activeClassName={"bg-primary-300 text-white shadow-[0_8px_16px_0px_#6264F03D] rounded-full"}
            />
        </div>

    );
}
