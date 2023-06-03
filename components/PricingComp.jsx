import React from "react";
import { useRouter } from "next/router";

const PricingComp = ({ user }) => {
  const router = useRouter();
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("http://localhost:3000/api/razorpay", {
      method: "POST",
    }).then((t) => t.json());
    console.log(data);
    var options = {
      key: "rzp_test_nD1fgw4FForLB5", // Enter the Key ID generated from the Dashboard
      name: "Manu Arora Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        alert("Payment Successful!");
        localStorage.setItem("sub", "super");
        router.push("/disease");
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const makePayment2 = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("http://localhost:3000/api/razorpay2", {
      method: "POST",
    }).then((t) => t.json());
    console.log(data);
    var options = {
      key: "rzp_test_nD1fgw4FForLB5", // Enter the Key ID generated from the Dashboard
      name: "Manu Arora Pvt Ltd",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        alert("Payment Successful!");
        localStorage.setItem("sub", "pro");
        router.push("/disease");
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          {/* <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div> */}
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* <!-- Pricing Card --> */}
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Free</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best option for personal use.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">₹0</span>
                <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>100 requests/month</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Community (<span class="font-semibold">Read Access</span>)
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="18"
                    height="18"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#F44336"
                      d="M21.5 4.5H26.501V43.5H21.5z"
                      transform="rotate(45.001 24 24)"
                    ></path>
                    <path
                      fill="#F44336"
                      d="M21.5 4.5H26.5V43.501H21.5z"
                      transform="rotate(135.008 24 24)"
                    ></path>
                  </svg>
                  <span>
                    Community (<span class="font-semibold">Edit Access</span>)
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="18"
                    height="18"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#F44336"
                      d="M21.5 4.5H26.501V43.5H21.5z"
                      transform="rotate(45.001 24 24)"
                    ></path>
                    <path
                      fill="#F44336"
                      d="M21.5 4.5H26.5V43.501H21.5z"
                      transform="rotate(135.008 24 24)"
                    ></path>
                  </svg>
                  <span>Ads Free</span>
                </li>
              </ul>
              <a
                href="#"
                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>
            {/* <!-- Pricing Card --> */}
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Super</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best for medium scale uses.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">₹500</span>
                <span
                  class="text-gray-500 dark:text-gray-400"
                  // dark:text-gray-400
                >
                  /month
                </span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>1000 requests/month</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Community (<span class="font-semibold">Read Access</span>)
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Community (<span class="font-semibold">Edit Access</span>)
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Ads Free</span>
                </li>
              </ul>
              <div
                onClick={() => {
                  makePayment();
                }}
                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Get started
              </div>
            </div>
            {/* <!-- Pricing Card --> */}
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Pro</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Best for large scale uses.
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">₹2000</span>
                <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              {/* <!-- List --> */}
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Unlimited requests</span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Community (<span class="font-semibold">Read Access</span>)
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Community (<span class="font-semibold">Edit Access</span>)
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  {/* <!-- Icon --> */}
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Ads Free</span>
                </li>
              </ul>
              <div
                onClick={() => {
                  makePayment2();
                }}
                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Get started
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingComp;
