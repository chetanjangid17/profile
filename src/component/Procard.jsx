import React from 'react'

function Procard({tittle,para,ima,ln}) {
  return (
    <div className="card">
        <div className="">
        <div >
    <div className="  text-white ">
    <div className=" rounded overflow-hidden  shadow-md shadow-black ">
    <div className="px-6 py-4 mx">
        <h3 className=" text-xl sm:text-3xl text-center text-gray-600 ">{tittle}r</h3>
        <p className="sm:text-xl text-xs text-left py-2 m-3"> {para}
</p>
</div>
<div className=" ">

<a href={ln}>
<img className='  mx-[auto]  hover:scale-110 duration-500 px-2 py-4 ' src ={ima} alt ="Logo Image" style={{width:'400px', height:'275px'}}>

</img>  
</a>
</div>
    </div>
    </div>
        </div>
    </div>
    </div>
  )
}

export default Procard