import { useState, useEffect } from 'react';
import ReactPaginate from "react-paginate";
import '../App.css'

function Images(props) {
    let { data } = props;


    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setpageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setpageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data])


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="images">
                {currentItems.map((img ,index) => {
                    return (
                        <div className='image' key={index}>
                            <img src={img.url} alt={img.titel} />
                        </div>
                    );
                })}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName='pagination'
                pageClassName='page-num'
                previousClassName='page-num'
                nextClassName='page-num'
                activeClassName='active'
            />
        </>
    );

}
export default Images