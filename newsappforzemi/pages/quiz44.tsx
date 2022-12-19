import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import { Header } from '../components/Header';


const questions=[
    {
      "question": "正しい読み方を選択してください。彼は今、新薬の研究開発に ( 挑んで ) いる?",
      "answerOptions": [
        { "answer": "はげんで" },
        { "answer": "のぞんで" },
        { "answer": "からんで "},
        { "answer": "いどんで" ,"isCorrect": true }
      ]
    },
    {
      "question": "私この映画は女性には  (不評)  だった?",
      "answerOptions": [
        { "answer": "ふべい" },
        { "answer": "ふびょう" },
        { "answer": "ふひょう", "isCorrect": true },
        { "answer": "ふへい" }
      ]
    },
    {
      "question": "住む場所によって家賃には  (若干)  の違いがある。?",
      "answerOptions": [
        { "answer": "しゃくがん" },
        { "answer": "じゃっかん", "isCorrect": true },
        { "answer": "じゃくかん" },
        { "answer": "じゃくがん" }
      ]
    },
   
    {
      "question": "(平静)  を装ってはいたが、内心は相当悔しかったに違いない。?",
      "answerOptions": [
        { "answer": "へいじょう" },
        { "answer": "びょうじょう" },
        { "answer": "びょうせい", "isCorrect": true },
        { "answer": "へいせい" }
      ]
    }
    ,
    {
      "question": "私が一人暮らしをしたいと言ったら、父は  (渋い)  顔をした?",
      "answerOptions": [
        { "answer": "しぶい" },
        { "answer": "つらい" },
        { "answer": "こわい", "isCorrect": true },
        { "answer": "にがい" }
      ]
    }
    ,
    {
      "question": "しっかり勉強して来週の試験に  (臨み)  たい。?",
      "answerOptions": [
        { "answer": "はげみ" },
        { "answer": "いどみ" },
        { "answer": "すすみ", "isCorrect": true },
        { "answer": "のぞみ" }
      ]
    }
    , {
      "question": "パソコンを処分するときは、データを完全に（　　　）するようにしてください。",
      "answerOptions": [
        { "answer": "削減" },
        { "answer": "免除" },
        { "answer": "消去", "isCorrect": true },
        { "answer": "追放" },
      ]
    }
    ,
    {
      "question": "この製品は  (かさばる)  ため、輸送費がかかる。?",
      "answerOptions": [
        { "answer": "大きくて場所をとる" },
        { "answer": "小さいがかなり重い" },
        { "answer": "運びにくい形をしている", isCorrect: true },
        { "answer": "運ぶのが大変なほど重い" }
      ]
    }
    ,
    {
      "question": "このイベントの  (趣旨)  がよくわからない。",
      "answerOptions": [
        { "answer": "素晴らしさ" },
        { "answer": "結論" },
        { "answer": "目的", "isCorrect": true },
        { "answer": "おもしろさ" }
      ]
    }
    ,
    {
      "question": "(むやみに)  知らない人に話しかけないほうがいい。",
      "answerOptions": [
        { "answer": "急に" },
        { "answer": "勝手に" },
        { "answer": "何度も", "isCorrect": true },
        { "answer": "よく考えないで" }
      ]
    }
    ,

  ]
  
export const quiz = () => {
  console.log(questions)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const handleSubmitButton = () => {
        let newScore = 0;
        for (let i = 0; i < questions.length; i++) {
          questions[i].answerOptions.map(
            (answer) =>
              answer.isCorrect &&
              answer.answer === selectedOptions[i]?.answerByUser &&
              (newScore += 1)
          );
        }
        setScore(newScore);
        setShowScore(true);
      };
    const handlePrevious = () => {
        const prevQues = currentQuestion - 1;
        prevQues >= 0 && setCurrentQuestion(prevQues);
      };
      
      const handleNext = () => {
        const nextQues = currentQuestion + 1;
        nextQues < questions.length && setCurrentQuestion(nextQues);
      };
     
      const handleAnswerOption = (answer: any) => {
        setSelectedOptions([
          (selectedOptions[currentQuestion] = { answerByUser: answer }),
        ]);
        setSelectedOptions([...selectedOptions]);
        console.log(selectedOptions);
      };
    return (
        <div>
            <Header/>
            <div className="flex flex-col w-screen px-5 h-screen bg-[#1f201f] justify-center items-center mx-auto lg:max-w-7xl rounded-md">
            {showScore ? (
                           <div>
                            <h1 className="text-3xl font-semibold text-center text-white">
                            You scored {score} out of {questions.length}
                            </h1>
                            <Link href="./quiz" className="p-2 mt-5">
                              <a className="text-3xl font-semibold text-center text-white bg-blue-500  rounded-md">Go back </a>
                            </Link>

                           </div> 
                        ) :
                         (
                         <>
                            <div className="flex flex-col items-start w-full">
                                <h4 className="mt-10 text-xl text-white/60">
                                Question {currentQuestion + 1} of {questions.length}
                                </h4>
                                <div className="mt-4 text-2xl text-white">
                                {questions[currentQuestion].question}
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                {questions[currentQuestion].answerOptions.map((answer, index) => (
                                <div
                                    key={index}
                                    className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-white/10 rounded-xl bg-white/5"
                                    onClick={(e) => handleAnswerOption(answer.answer)}
                                >
                                    <input
                                    type="radio"
                                    name={answer.answer}
                                    value={answer.answer}
                                    checked={
                                        answer.answer === selectedOptions[currentQuestion]?.answerByUser
                                    }
                                    onChange={(e) => handleAnswerOption(answer.answer)}
                                    className="w-6 h-6 bg-black"
                                    />
                                    <p className="ml-6 text-white">{answer.answer}</p>
                                </div>
                                ))}
                            </div>
                            <div className="flex justify-between w-full mt-4 text-white">
                                <button
                                onClick={handlePrevious}
                                className="w-[49%] py-3 bg-indigo-600 rounded-lg"
                                >
                                Previous
                                </button>
                                <button
                                onClick={
                                    currentQuestion + 1 === questions.length
                                    ? handleSubmitButton
                                    : handleNext
                                }
                                className="w-[49%] py-3 bg-indigo-600 rounded-lg"
                                >
                                {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
                                </button>
                            </div>
                            </>
                            )
            }   
    </div>
        </div>
  )
}

export default quiz


