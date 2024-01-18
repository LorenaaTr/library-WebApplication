import React from 'react'
import AdminSidebar from '../../../Components/AdminSidebar/AdminSidebar'
import AdminHeader from '../../../Components/AdminHeader/AdminHeader'


const AdminHome = () => {
  return (
    <>
    <AdminHeader/>
    <AdminSidebar/>
    <div className='singlepage'>
        <div className='singlepagecontainer'>
        </div>
    </div>
    </>
  )
}

export default AdminHome