import React from "react";
import './pagination.css';

export default function Pagination({itemsPerPage, allItems, paginate, currentPage}) {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(allItems/itemsPerPage);i++)
        pageNumbers.push(i);

    let className;
    function activePage(item, currentPage) {
        window.scrollTo(0,0)
        if(item===currentPage)
            className='active';
        else
            className='pagination-item';
    }

    return(
        <div>
            <nav>
                <ul className='pagination-box'>
                    {pageNumbers.map((item)=>(
                        <li onClick={activePage(item, currentPage)}>
                            <div onClick={()=>paginate(item)} className={className}>{item}</div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}