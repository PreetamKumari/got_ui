import ReactPaginate from "react-paginate";

const Pagination = ({ pagenumber, setPageNumber}) => {
	const pageCount = parseInt(Math.ceil(52/9));
	return <ReactPaginate 
	className="pagination justify-content-center gap-4 my-4"
	nextLabel = "Next"
	previousLabel= "Prev"
	nextClassName="btn btn-light"
	previousClassName="btn btn-light"
	pageClassName="page-item"
	pageLinkClassName="page-link"
	activeClassName="active"
	onPageChange={(data)=> {
		console.log(data)
		setPageNumber(data.selected)}}
	pageCount = {pageCount}/>
}

export default Pagination;