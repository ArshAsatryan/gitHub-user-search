// import UserInfo from './Components/Container';
// import Header from './Components/Header';
// import Search from './Components/SearchForm';
// import './__global.scss';
// import {createContext, useState, } from 'react';
// // import useFetch from 'hooks/useFetch/useFetch';

// export const ThemeContext = createContext(null)

// function App() {
//   const [theme,setTheme] = useState('dark')
//   const [userName, setUserName] = useState('')
//   const [data, setData] = useState()
//   // const {loading, data, error} = useFetch()
  
//   const toggleTheme = () =>  setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  
//   const onUser = (username) => setUserName(username)

 
// fetch(`https://api.github.com/users/ArshAsatryan`)
// .then(resp => resp.json())
// .then(result => setData(result))

//   return (
//     <ThemeContext.Provider value={{theme, toggleTheme}}>
//         <div className="App" id={theme}>
//             <Header onClick={toggleTheme} />
//             <Search onUser={onUser}/>
//             <UserInfo data={data}/>
//         </div>
//     </ThemeContext.Provider>
//   )
 
  

  
// }

// export default App;


import UserInfo from './Components/Container';
import Header from './Components/Header';
import Search from './Components/SearchForm';
import './__global.scss';
import { useState} from 'react';
import useFetch from 'hooks/useFetch/useFetch';

// export const ThemeContext = createContext(null)

const App = () => {
  const [theme,setTheme] = useState('dark')
  const [userName, setUserName] = useState('')
  const {loading, error, data} = useFetch(userName)

  const toggleTheme = () =>  setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  const onUser = (username) => setUserName(username)


  return (
    
        <div className="App" id={theme}>
            <Header onClick={toggleTheme} theme={theme}/>
            <Search onUser={onUser}/>
            <UserInfo data={data ? data : ''}  error={error ? error : ''} loading={loading ? loading : ''} />
        </div>
  
  )
 
}



export default App;