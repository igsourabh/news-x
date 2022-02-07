import React, { useState } from "react";

const Contact = () => {
    const [progress, setprogress] = useState(10);

   
    
    const [state, setstate] = useState({
      name: "",
  
      email: "",
  
      message: "",
    });
    const [alert, setalert] = useState(false);
    let name, value;
    const handelChange = (element) => {
      name = element.target.name;
      value = element.target.value;
      setstate({ ...state, [name]: value });
    };
  
    const formSubmit = async (event) => {
      event.preventDefault();
      const { name, email, message } = state;
      if (name && email && message) {
        const res = await fetch(
          "https://database-c6c1a-default-rtdb.asia-southeast1.firebasedatabase.app/form.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
  
              email,
  
              message,
            }),
          }
        );
        if (res) {
          setstate({
            name: "",
  
            email: "",
  
            message: "",
          });
        }
      } else {
        setalert(true);
        setTimeout(() => {
          setalert(false);
        }, 1500);
      }
    };
  return (
    <>
      <section class="text-gray-400 bg-gray-900 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              class="absolute inset-0"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55086.67838912484!2d76.80301978431812!3d30.353297333226468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb6482e623f7b%3A0x1814169a97109fae!2sAmbala%20Cantt%2C%20Haryana!5e0!3m2!1sen!2sin!4v1644249362834!5m2!1sen!2sin"
            ></iframe>


            <div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p class="mt-1">
                  Ambala cantt, Haryana
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-indigo-400 leading-relaxed">sourabhvaish007@gmail.com</a>
                <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-white text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p class="leading-relaxed mb-5">
             Give your Feed back
            </p>
            <form method="POST">
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                onChange={handelChange}
                name="name"
                value={state.name}
                
                name="name"
                class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                onChange={handelChange}
                name="email"
                value={state.email}
                className="form-control"
                id="emailAddress"
            
              
                class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
             
                id="message"
                type="text"
                onChange={handelChange}
                name="message"
                value={state.message}
                class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button   onClick={formSubmit} class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            </form>

           
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
