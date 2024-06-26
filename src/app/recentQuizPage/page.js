// 'use client';
// import React ,{useState} from 'react';
// import Image from 'next/image';
// import RecentQuizImg from '../../Assets/images/recentQuizImg.png';
// import ThumbsUp from '../../Assets/images/thumbs-up 1.png';
// import ThumbsDown from '../../Assets/images/thumbs-down 1.png';
// import RecentQuizModal from '@/components/CommonComponents/RecentQuizModel/Model';

// const questions = [
//   {
//     id:1,
//     question: "You see a non-familiar face in the access-controlled areas of our office, the person does not have the MGL ID/Visitor/Staff/Vendor tag with him. What would you do?",
//     answers: ["None of my business, let some body else take care of it", "Ask the person to leave the facility", "Escort the person to the security and raise a security incident", "Raise a security incident and go back doing your work"],
//     correctAnswer: "Raise a security incident and go back doing your work",
//   },
//   {
//     id:2,
//     question: "What is the capital of Germany?",
//     answers: ["Paris", "London", "Rome", "Berlin"],
//     correctAnswer: "Berlin",
//   },
//   {
//     id:3,
//     question: "You see a non-familiar face in the access-controlled areas of our office, the person does not have the MGL ID/Visitor/Staff/Vendor tag with him. What would you do?",
//     answers: ["None of my business, let some body else take care of it", "Ask the person to leave the facility", "Escort the person to the security and raise a security incident", "Raise a security incident and go back doing your work"],
//     correctAnswer: "Raise a security incident and go back doing your work",
//   },
//   {
//     id:4,
//     question: "What is the capital of Germany?",
//     answers: ["Paris", "London", "Rome", "Berlin"],
//     correctAnswer: "Berlin",
//   },
//   {
//     id:5,
//     question: "You see a non-familiar face in the access-controlled areas of our office, the person does not have the MGL ID/Visitor/Staff/Vendor tag with him. What would you do?",
//     answers: ["None of my business, let some body else take care of it", "Ask the person to leave the facility", "Escort the person to the security and raise a security incident", "Raise a security incident and go back doing your work"],
//     correctAnswer: "Raise a security incident and go back doing your work",
//   },
//   {
//     id:6,
//     question: "What is the capital of Germany?",
//     answers: ["Paris", "London", "Rome", "Berlin"],
//     correctAnswer: "Berlin",
//   },
//   {
//     id:7,
//     question: "You see a non-familiar face in the access-controlled areas of our office, the person does not have the MGL ID/Visitor/Staff/Vendor tag with him. What would you do?",
//     answers: ["None of my business, let some body else take care of it", "Ask the person to leave the facility", "Escort the person to the security and raise a security incident", "Raise a security incident and go back doing your work"],
//     correctAnswer: "Raise a security incident and go back doing your work",
//   },
//   {
//     id:8,
//     question: "What is the capital of Germany?",
//     answers: ["Paris", "London", "Rome", "Berlin"],
//     correctAnswer: "Berlin",
//   },
//   {
//     id:9,
//     question: "You see a non-familiar face in the access-controlled areas of our office, the person does not have the MGL ID/Visitor/Staff/Vendor tag with him. What would you do?",
//     answers: ["None of my business, let some body else take care of it", "Ask the person to leave the facility", "Escort the person to the security and raise a security incident", "Raise a security incident and go back doing your work"],
//     correctAnswer: "Raise a security incident and go back doing your work",
//   },
//   {
//     id:10,
//     question: "What is the capital of Germany?",
//     answers: ["Paris", "London", "Rome", "Berlin"],
//     correctAnswer: "Berlin",
//   },
//   {
//     id:11,
//     question: "You see a non-familiar face in the access-controlled areas of our office, the person does not have the MGL ID/Visitor/Staff/Vendor tag with him. What would you do?",
//     answers: ["None of my business, let some body else take care of it", "Ask the person to leave the facility", "Escort the person to the security and raise a security incident", "Raise a security incident and go back doing your work"],
//     correctAnswer: "Raise a security incident and go back doing your work",
//   },
//   {
//     id:12,
//     question: "What is the capital of Germany?",
//     answers: ["Paris", "London", "Rome", "Berlin"],
//     correctAnswer: "Berlin",
//   },
//   {
//     id:13,
//     question: "You see a non-familiar face in the access-controlled areas of our office, the person does not have the MGL ID/Visitor/Staff/Vendor tag with him. What would you do?",
//     answers: ["None of my business, let some body else take care of it", "Ask the person to leave the facility", "Escort the person to the security and raise a security incident", "Raise a security incident and go back doing your work"],
//     correctAnswer: "Raise a security incident and go back doing your work",
//   },
//   {
//     id:14,
//     question: "What is the capital of Germany?",
//     answers: ["Paris", "London", "Rome", "Berlin"],
//     correctAnswer: "Berlin",
//   },
//   {
//     id:15,
//     question: "You see a non-familiar face in the access-controlled areas of our office, the person does not have the MGL ID/Visitor/Staff/Vendor tag with him. What would you do?",
//     answers: ["None of my business, let some body else take care of it", "Ask the person to leave the facility", "Escort the person to the security and raise a security incident", "Raise a security incident and go back doing your work"],
//     correctAnswer: "Raise a security incident and go back doing your work",
//   },
// ];

// const RecentQuizPage = () => {

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState([]);
//   const [score, setScore] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const handleAnswerSelect = (answer) => {
//     const newAnswers = [...userAnswers, answer];
//     setUserAnswers(newAnswers);

//     if (answer === questions[currentQuestionIndex].correctAnswer) {
//       setScore(score + 1);
      
//     }

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setQuizCompleted(true);
//       closeModal();
//     }
//   };

//   const resetQuiz = () => {
//     setCurrentQuestionIndex(0);
//     setUserAnswers([]);
//     setScore(0);
//     setQuizCompleted(false);
//     openModal();
//   };


//   return (
//     <>
//         <div className='px-3'>
//                 <h2 className='text-[#1935CA] font-bold'>Recent Quizes</h2>
//                 <div className=' my-4 grid lg:grid-cols-[60%_40%] grid-cols-1'>
//                 <div className='lg:w-[80%] w-[95%] '>
//                   <div className='cursor-pointer'>
//                   <Image 
//                     src={RecentQuizImg}
//                     alt='RecentQuizImg'
//                     priority
//                     width='full'
//                     height='full'
//                   />
//                   </div>

//                   <div className='flex justify-between items-center w-[100%]'>
//                   <p className='my-3 font-medium lg:w-[70%] xl:w-[80%] w-[70%] sm:w-[80%]'>Protecting the Organisation from Cyber Attacks</p>

//                   <div className='flex lg:w-[30%] xl:w-[20%] w-[30%] sm:w-[20%] items-center justify-between'>
//                     <div className='flex  items-center text-[#6FD181]'>
//                       <div className='mr-1'><Image 
//                         src={ThumbsUp}
//                         priority
//                         alt='ThumbsUp'
//                         width='full'
//                         height='full'
//                       /></div>
//                       <small>145</small>
//                     </div>
                    
//                     <div className='ml-4 flex items-center text-[#DFDFE3]'>
//                       <div className='mr-1'><Image 
//                         src={ThumbsDown}
//                         priority
//                         alt='ThumbsUp'
//                         width='full'
//                         height='full'
//                       /></div>
//                       <small>6</small>
//                     </div>
//                   </div>
//                   </div>

//                   <p className='my-3 text-[13px] tracking-wide'>One of the most efficient ways to protect against cyber attacks and all types of data breaches is to train your employees on cyber attack prevention and</p>

//                   <p className='my-3 text-[13px] tracking-wide'>The quiz consists of questions. To be successful with the quizzes, it’s important to conversant with the topic by paying attention to the short video <br /><br /> To start, click the <q>Start</q> button. When finished, click the <q>Submit</q> button.</p>
//                   </div>

//              <div>
//              <div className='my-3 text-[#696F79] text-[14px] md:text-[16px] '>
//                     <div className='flex justify-between'>
//                       <h2 className='font-bold'>Date : </h2>
//                       <p>28/07/2021</p>
//                     </div>

//                     <div className='flex justify-between my-4'>
//                       <h2 className='font-bold'>Time Limit: </h2>
//                       <p>15 Mins </p>
//                     </div>

//                     <div className='flex justify-between my-4'>
//                       <h2 className='font-bold'>Attempts:</h2>
//                       <p>Twice</p>
//                     </div>

//                     <div className='flex justify-between my-4'>
//                       <h2 className='font-bold'>Pass Points:</h2>
//                       <p>80 Points</p>
//                     </div>
//                   </div>
//             <div>
//               <button onClick={openModal} className='my-2 text-[#fff] bg-[#1935CA] rounded-lg px-10 font-medium text-[15px] py-2 hover:bg-[#3b50cb]'>Start Quiz</button>
//             </div>
//              </div>


//                 </div>
//         </div>

//         <RecentQuizModal isOpen={isModalOpen} onClose={closeModal}>
        
//         <h1 className='font-mexium text-center text-[#4A4A4A] my-3 text-xl'>Question {questions[currentQuestionIndex].id}</h1>
//         <h2 className="text-[15px] mb-4 text-[#4A4A4A] px-4">
//           {questions[currentQuestionIndex].question}
//         </h2>
//         <ul className='text-[#4A4A4A] px-4'>
//           {questions[currentQuestionIndex].answers.map((answer, index) => (
//             <li key={index} className="mb-2 py-2 ">
//               <button
//                 onClick={() => handleAnswerSelect(answer)}
//                 className="border-[1px] bg-gray-50 hover:bg-[#1935CA] hover:text-[#fff] rounded-lg w-full text-left p-4 text-[15px]"
//               >
//                 {answer}
//               </button>
//             </li>
//           ))}
//         </ul>
//         <p className='text-[#4A4A4A] text-center text-[15px] my-3'>{questions[currentQuestionIndex].id} of 15 questions</p>
//       </RecentQuizModal>
//       {quizCompleted && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold">Quiz Completed!</h2>
//           <p>Your score: {score} / {questions.length}</p>
//           <button
//             onClick={resetQuiz}
//             className="mt-2 p-2 bg-green-500 text-white rounded-lg"
//           >
//             Retake Quiz
//           </button>
//         </div>
//       )}
//     </>
//   )
// }

// export default RecentQuizPage







'use client';
import React ,{useRef, useState} from 'react';
import Image from 'next/image';
import RecentQuizImg from '../../Assets/images/recentQuizImg.png';
import ThumbsUp from '../../Assets/images/thumbs-up 1.png';
import ThumbsDown from '../../Assets/images/thumbs-down 1.png';
import RecentQuizModal from '../../components/CommonComponents/RecentQuizModel/Model'
import QuizData from '@/constants/QuizData';


const RecentQuizPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  
  let [index,setIndex] = useState(0);
  const [question,setQuestion] = useState(QuizData[index]);
  const [lock,setLock] = useState(false);
  const [score,setScore] = useState(0);
  const [result,setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);
  
  let option_array = [Option1,Option2,Option3,Option4]

  const checkAns = (e,ans) => {
    if(lock===false){
      if(question.ans===ans){
        e.target.classList.add('correct');
        setLock(true);
        setScore(prev=>prev+1);  
      }
      else{
        e.target.classList.add('wrong');
        setLock(true);
        option_array[question.ans-1].current.classList.add('correct');
      }
    }
  }

  const next = () => {
    if(lock===true){

        if(index === QuizData.length-1){
            setResult(true);
            return 0;  
        }

        setIndex(++index);
        setQuestion(QuizData[index]);
        setLock(false);
        option_array.map((option) => {
          option.current.classList.remove('wrong');
          option.current.classList.remove('correct');
          return null;
        })
      }
  }
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  

  const reset  = () => {
    setIndex(0);
    setQuestion(QuizData[0]);
    setScore(0);
    setLock(false);
    setResult(false)
  }
  
  
  return (
    <>
        <div className='px-3 maindiv'>
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
              <button onClick={openModal} className='my-2 text-[#fff] bg-[#1935CA] rounded-lg px-10 font-medium text-[15px] py-2 hover:bg-[#222b69]'>Start Quiz</button>
            </div>
             </div>


                </div>
        </div>

        <RecentQuizModal isOpen={isModalOpen} onClose={closeModal}>

       {result ? <></> : <div>
        <h1 className='font-mexium text-center text-[#4A4A4A] my-3 text-xl'>Question {index+1}</h1>
        <h2 className="text-[15px] mb-4 text-[#4A4A4A] px-4">
          {question.question}
        </h2>
        <ul className='text-[#4A4A4A] px-4'>
            <li onClick={(e) => {checkAns(e,1)}} ref={Option1} className="md:mb-4 mb-3 md:py-4 py-3 border-[1px] bg-gray-50 rounded-lg w-full text-left p-4 text-[15px]">{question.option1}</li>

            <li onClick={(e) => {checkAns(e,2)}} ref={Option2} className="md:mb-4 mb-3 md:py-4 py-3 border-[1px] bg-gray-50 rounded-lg w-full text-left p-4 text-[15px]">{question.option2}</li>

            <li onClick={(e) => {checkAns(e,3)}} ref={Option3} className="md:mb-4 mb-3 md:py-4 py-3 border-[1px] bg-gray-50 rounded-lg w-full text-left p-4 text-[15px]">{question.option3}</li>

            <li onClick={(e) => {checkAns(e,4)}} ref={Option4} className="md:mb-4 mb-3 md:py-4 py-3 border-[1px] bg-gray-50 rounded-lg w-full text-left p-4 text-[15px]">{question.option4}</li>
        </ul>
        <button onClick={next} className='bg-[#1935CA] text-[#fff] block mx-auto py-2 px-8 rounded-lg text-[15px] hover:bg-[#222b69]'>Next</button>
        <p className='text-[#4A4A4A] text-center text-[15px] my-3'>{index+1} of {QuizData.length} questions</p>
        </div>}

        {result? <div className='px-4'>
            <h2 className='text-xl font-medium'>You Scored {score} out of {QuizData.length} questions</h2>
            <button onClick={reset} className='border-[1px] my-4 py-2 px-4 rounded-lg bg-[#1935CA] text-[#fff]'>Reset</button>
       </div>: <></>}
        
      </RecentQuizModal>
      
    </>
  )
}

export default RecentQuizPage

