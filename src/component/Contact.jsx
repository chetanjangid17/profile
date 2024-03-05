import React from "react";
const Contact =()=> {
   return(
    <div name="Contact" className="w-full h-screen flex  justify-center items-center ">
        <form method = "POST" action="https://getform.io/f/nelzY7bK" className="flex flex-col max-w-[600px] w-full">
            <div className=" sm:text-center text-center ">
                <p className="  text-4xl font-bold inline border-b-4 hover:border-pink-600 text-white ">Contact</p>
                <br/>
                

            </div>
            <p className="py-4 text-white px-1">hey!!! you have quered here then you fill the form and sending the me at this email address .</p>
            <input className="bg-white p-1 " type="text" placeholder="Name" name="name"/>
            <input className="bg-white p-2 my-4" type="email" placeholder="Email" name="Email"/>
            <textarea name="message" placeholder="Message" rows="10"></textarea>
            <button className="my-4 px-4 py-3 text-white border-2 mx-auto flex items-center hover:bg-purple-500 hover:border-purple-500">Let's Connect with me</button>
        </form>
    </div>
   )
}
export default Contact