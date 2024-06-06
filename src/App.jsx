import { useRef, useState } from 'react';
import { LuListTodo } from "react-icons/lu";
import { TfiClose } from "react-icons/tfi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsFillTrash2Fill } from "react-icons/bs";
import { PiMoonThin, PiSunDimThin } from "react-icons/pi";

import './App.css';
import { Trans, useTranslation } from 'react-i18next';

function App() 
{
  //------------------translation
  const { t , i18n } = useTranslation();

  const language = [
    {code:'en',name:'English'},
    {code:'ar',name:'Arabic'}
  ]

console.log(i18n.language);





//----------------------------------------
  const [theme , setTheme]= useState('light')
  // useEffect(function () 
  //   {
  //     if (theme==='light') {
  //        document.documentElement.classList.add('dark')
  //     }else
  //     {
  //       document.documentElement.classList.remove('dark')
  //     }
  //   },[theme])
    const handleSwitchTheme = ()=>
    {
      setTheme(theme==='dark'?'light':'dark')
      console.log(theme);
    }


  const [todos,setTodo]= useState([])

  const inputRef = useRef()
  
  const handleAddTodo =()=>
    {
      const text = inputRef.current.value
      if (!text) 
      {
        return alert('please, Put Some Acitivity')  
      } 
        const newItem = {completed : false , text}
        setTodo([...todos,newItem])
        inputRef.current.value = ''
    }
    const handleItemDone = ( index )=>
    {
      console.log('Index is => ' + index);
      const newTodos = [...todos]
      newTodos[index].completed = !newTodos[index].completed
      setTodo(newTodos)  
    }
    const removeTodo = (index)=>
    {
      const newTodos = [...todos]
      newTodos.splice(index,1)
      setTodo(newTodos)
    }
    const deleteAllItems = ()=>
    {
      const newTodos = [...todos]
      newTodos.length = 0
      setTodo(newTodos)
    }

  return <>
      
      <div className={`App 
         ${theme==='dark'? `bg-teal-900 text-white` : ''} 
        border min-h-[30rem] p-10 mt-10 max-w-[80%] max-sm:max-w-[100%] mx-auto border-zinc-700 shadow-md shadow-gray-200
         rounded-md`}>
        <div>

        <div className='flex justify-between mb-4'>
            
            <div className='flex gap-4 pe-10 pt-10'>
                {
                  language.map((language)=>
                  {
                    return<button key={language.code} 
                    className='px-3 border-2 border-teal-700 hover:border-emerald-500 hover:bg-teal-600 rounded-xl hover:text-white py-1 font-semibold font-mono'
                     onClick={ ()=> i18n.changeLanguage(language.code)}>

                        {language.name}
                      </button>
                  })
                }
                </div>
            <div className='flex items-center'>
              <button onClick={handleSwitchTheme} className="cursor-pointer transition-all 
                  bg-gray-700 text-white px-2 py-2 rounded-full border-green-400
                  border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                  active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl
                   hover:shadow-green-300 shadow-green-300 active:shadow-none">
                {theme==='dark'?<PiSunDimThin className='text-yellow-300'/> :<PiMoonThin />}
              </button>
            </div>
          </div>

          <h1 className='text-center text-4xl font-mono font-extrabold flex justify-center'>
            <span className='text-center pt-1 pe-2'>
            <LuListTodo  className='text-teal-600' />
          </span> <Trans i18nKey={'todo'}>Todo List</Trans></h1>
        </div>


      <div className='flex justify-center pt-10 gap-2'>
        <input ref={inputRef} className='input border w-[50%] max-sm:w-[100%] border-black h-9 px-4 border-t-0 border-e-0
        hover:border-t-[1px] hover:border-e-[1px] hover:border-b-0 hover:border-s-0
        text-teal-600 font-mono font-semibold 
        shadow-inner
        ' placeholder={`${i18n.language==='en'?`Enter Your Activity`:`أدخل مهامك`}`} type="text" />
        <button
          onClick={handleAddTodo}
          type='submit'
          className='border px-5 border-teal-500 rounded-sm text-teal-600 font-mono
        hover:bg-teal-500 hover:text-white
        '><Trans i18nKey={'add'}>Add</Trans></button>
      </div>


      <ul className='lists border mt-4 w-[80%] mx-auto max-sm:w-[100%]'>
       <div className='flex justify-between '>
         <p className='font-mono font-semibold text-teal-600 flex p-3'>
          {t('list')} 
          <span className='pt-1 ps-1'>
            <MdOutlineKeyboardDoubleArrowRight/>
          </span>
        </p>
        <div className='mt-3 me-4'>
          <button onClick={()=>deleteAllItems()} className='px-2 border border-x-0 border-teal-400 flex hover:border-rose-400'> 
          <Trans i18nKey={'clear'}>Clear All</Trans>
          <span className='pt-1 ps-2'><BsFillTrash2Fill className='text-teal-500  hover:text-rose-400'/></span></button>
        </div>
        </div>
        {
         todos.length !== 0?  todos.map(({text , completed} ,index)=>
         {
             return <div className={`flex justify-between font-mono break-words`} key={index}>
              <li
                onClick={()=>handleItemDone(index)} 
                className={` overflow-auto break-words cursor-pointer ps-1`}>
                 -&gt;<span className={`ps-2 ${completed?'true text-rose-600 line-through':''}`}>{text}</span> 
              </li> 
             <span className='pt-1' onClick={()=>removeTodo(index)}><TfiClose className='text-rose-600 me-3 cursor-pointer' /></span></div>
         }): <>
         <div className='pt-4'>
          <h2 id='search' className={`font-mono text-center ${i18n.language==='ar'?`font-extrabold`:`font-medium`}`}>
          <Trans i18nKey={'emtyMessage'}>No Activity was added, You Can Add Some, Now.</Trans>
            </h2>
         </div>
         </>
         
        }
      </ul>
    </div>
  </>
    

  
}

export default App;
