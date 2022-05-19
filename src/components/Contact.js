import React from 'react'
import {Link, Outlet} from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <h2 className='text-center'>Contact Us</h2>
      <table className='table' width="100%">
        <tr>
          <td>
              <ul>
                <li><Link to="noida">Noida</Link></li>
                <li><Link to="delhi">Delhi</Link></li>
              </ul>
          </td>
          <td>
            <Outlet/>
          </td>
        </tr>
      </table>
    </>
  )
}
