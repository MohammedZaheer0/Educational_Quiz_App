import React from 'react';
import Image from 'next/image';
import RecentQuizImg from '../../Assets/images/recentQuizImg.png'

const RecentQuizPage = () => {
  return (
    <>
        <div>
                <h2 className='text-[#1935CA] font-bold'>Recent Quizes</h2>
                <div className='my-4 grid grid-cols-2'>
                <div className='w-[85%]'>
                  <div className='cursor-pointer'>
                  <Image 
                    src={RecentQuizImg}
                    alt='RecentQuizImg'
                    priority
                    width='full'
                    height='full'
                  />
                  </div>
                  <p className='my-3 font-medium'>Protecting the Organisation from Cyber Attacks</p>

                  <p className='my-3 text-[13px] tracking-wide'>One of the most efficient ways to protect against cyber attacks and all types of data breaches is to train your employees on cyber attack prevention and</p>

                  <p className='my-3 text-[13px] tracking-wide'>The quiz consists of questions. To be successful with the quizzes, it’s important to conversant with the topic by paying attention to the short video <br /><br /> To start, click the <q>Start</q> button. When finished, click the <q>Submit</q> button.</p>
                  </div>

             <div>
             <div className='my-3 text-[#696F79]'>
                    <div className='flex justify-between'>
                      <h2 className='font-bold'>Date : </h2>
                      <p>28/07/2021</p>
                    </div>

                    <div className='flex justify-between my-4'>
                      <h2 className='font-bold'>Time Limit: </h2>
                      <p>Time Limit: </p>
                    </div>

                    <div className='flex justify-between my-4'>
                      <h2 className='font-bold'>Attempts:</h2>
                      <p>Twice</p>
                    </div>

                    <div className='flex justify-between my-4'>
                      <h2 className='font-bold'>Pass Points:</h2>
                      <p>80 Points</p>
                    </div>
                  </div>
            <div>
              <button className='my-2 text-[#fff] bg-[#1935CA] rounded-lg px-10 font-medium text-[15px] py-2 hover:bg-[#3b50cb]'>Start Quiz</button>
            </div>
             </div>


                </div>
        </div>
    </>
  )
}

export default RecentQuizPage
