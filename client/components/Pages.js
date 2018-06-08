import React from 'react';

const Pages = (props) => {
  let totalPage = Math.ceil(props.count/6);
  let pages = [...Array(totalPage)].map((v,i)=>i);
  let { pathname } = props.history.location;
  const pageCount = parseInt(props.history.location.search.split('=')[1], 10);
  console.log(pageCount)
  
  return(
    <nav aria-label="pagination example">
      <ul className="pagination pagination-lg justify-content-center">
        {/*<!--Previous button-->*/}
        <li className="page-item">
          <a className="page-link" tabIndex="-1" onClick={() =>((pageCount > 1) ? props.history.push({pathname, search: `?page=${pageCount - 1}`}): props.history.push({pathname, search: `?page=${1}`}))}>Previous</a>
        </li>

        {/*<!--Numbers-->*/}
        {pages.map((page, i) =>
          <li key={i} className="page-item">
            <a className="page-link" onClick={() => props.history.push({pathname, search: `?page=${page + 1}`})}>{page + 1}</a>
          </li>
        )} 
        {/*<!--Next button-->*/}
        <li className="page-item">
          <a className="page-link" onClick={() =>(pageCount < totalPage ? props.history.push({pathname, search: `?page=${pageCount + 1}`}): props.history.push({pathname, search: `?page=${totalPage}`}))}>Next</a>
        </li>
      </ul>
    </nav>
  )
}
export default Pages;
