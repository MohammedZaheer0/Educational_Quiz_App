import React from 'react';
import Image from 'next/image';
import RecentQuizImg from '../../Assets/images/recentQuizImg.png';
import ThumbsUp from '../../Assets/images/thumbs-up 1.png'
import ThumbsDown from '../../Assets/images/thumbs-down 1.png'

const RecentQuizPage = () => {
  return (
    <>
        <div className='px-3'>
                <h2 className='text-[#1935CA] font-bold'>Recent Quizes</h2>
                <div className=' my-4 grid lg:grid-cols-[60%_40%] grid-cols-1'>
                <div className='lg:w-[80%] w-[95%] '>
                  <div className='cursor-pointer'>
                  <Image 
                    src={RecentQuizImg}
                    alt='RecentQuizImg'
                    priority
                    width='full'
                    height='full'
                  />
                  </div>

                  <div className='flex justify-between items-center w-[100%]'>
                  <p className='my-3 font-medium lg:w-[70%] xl:w-[80%] w-[70%] sm:w-[80%]'>Protecting the Organisation from Cyber Attacks</p>

                  <div className='flex lg:w-[30%] xl:w-[20%] w-[30%] sm:w-[20%] items-center justify-between'>
                    <div className='flex  items-center text-[#6FD181]'>
                      <div className='mr-1'><Image 
                        src={ThumbsUp}
                        priority
                        alt='ThumbsUp'
                        width='full'
                        height='full'
                      /></div>
                      <small>145</small>
                    </div>
                    
                    <div className='ml-4 flex items-center text-[#DFDFE3]'>
                      <div className='mr-1'><Image 
                        src={ThumbsDown}
                        priority
                        alt='ThumbsUp'
                        width='full'
                        height='full'
                      /></div>
                      <small>6</small>
                    </div>
                  </div>
                  </div>

                  <p className='my-3 text-[13px] tracking-wide'>One of the most efficient ways to protect against cyber attacks and all types of data breaches is to train your employees on cyber attack prevention and</p>

                  <p className='my-3 text-[13px] tracking-wide'>The quiz consists of questions. To be successful with the quizzes, it’s important to conversant with the topic by paying attention to the short video <br /><br /> To start, click the <q>Start</q> button. When finished, click the <q>Submit</q> button.</p>
                  </div>

             <div>
             <div className='my-3 text-[#696F79] text-[14px] md:text-[16px] '>
                    <div className='flex justify-between'>
                      <h2 className='font-bold'>Date : </h2>
                      <p>28/07/2021</p>
                    </div>

                    <div className='flex justify-between my-4'>
                      <h2 className='font-bold'>Time Limit: </h2>
                      <p>15 Mins </p>
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
