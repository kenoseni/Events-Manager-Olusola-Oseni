import React from 'react';

const Pages = (props) => {
  let limit = props.limit;
  let totalPage = Math.ceil(props.count/limit);
  let pages = [...Array(totalPage)].map((v,i)=>i);
  let { pathname } = props.history.location;
  const pageCount = parseInt(props.history.location.search.split('=')[1], 10);
  return(
    <nav aria-label="pagination example">
      <ul className="pagination pagination-lg justify-content-center">
        {/*<!--Previous button-->*/}
        <li className="page-item">
          <a className="page-link" tabIndex="-1" 
            onClick={() =>((pageCount > 1) ? 
              props.history.push({pathname, search: `?page=${pageCount - 1}`}) : 
              props.history.push({pathname, search: `?page=${1}`}))}>Previous
          </a>
        </li>

        {/*<!--Numbers-->*/}
        {pages.map((page, i) =>
          <li key={i} className={(page + 1 === pageCount ? "page-item active": "page-item")}>
            <a className="page-link" tabIndex="-1" 
              onClick={() => props.history.push({pathname, search: `?page=${page + 1}`})}>
              {page + 1}
            </a>
          </li>
        )} 
        {/*<!--Next button-->*/}
        <li className="page-item">
          <a className="page-link" tabIndex="-1" 
            onClick={() =>(pageCount < totalPage ? 
              props.history.push({pathname, search: `?page=${pageCount + 1}`}) : 
              props.history.push({pathname, search: `?page=${totalPage}`}))}>Next
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default Pages;
