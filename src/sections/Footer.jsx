import React from 'react'

const Footer = () => {
  return (
    <section id='social' className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p> Terms and Conditions</p>
            <p> | </p>
            <p> Privacy Policy</p>
        </div>

        <div className='flex gap-3'>
            <div className='social-icon'>
                <a href='https://codeforces.com/profile/rahuyadav' target='_blank'>
                    <img src="/assets/codeforces.svg" alt="Codeforces" className='w-9 h-1/2'/>
                </a>
            </div>

            <div className='social-icon'>
                {/* <div className='bg-yellow-50 rounded-full w-9 h-9'> */}
                    <a href='https://www.codechef.com/users/rahul2483yadav' target='_blank'>
                        <img src="/assets/codechef.jpg" alt="CodeChef" className='w-14 h-14 rounded-full'/>
                    </a>
                {/* </div> */}
            </div>

            <div className='social-icon'>
                <a href="https://leetcode.com/u/rahul2483yadav/" target='_blank'>
                    <img src="assets\leetcode.png" alt="Leetcode" className='w-12 h-12'/>
                </a>
            </div>

            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/rahulyadav59" target='_blank'>
                    <img src="assets\LinkedIn.png" alt="linkedin" className='w-12 h-12'/>
                </a>
            </div>

            <div className='social-icon'>
                <a href='https://github.com/rahuly-2023' target='_blank'>
                    <img src="/assets/github.svg" alt="github" className='w-12 h-1/2'/>
                </a>
            </div>


        </div>

        <p className='text-white-500'>© 2024 Rahul. All rights reserved.</p>
    </section>
  )
}

export default Footer
