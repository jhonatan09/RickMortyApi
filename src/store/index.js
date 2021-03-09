import React, {useState, useEffect} from "react"
const DataContext = React.createContext()


function DataContextProvider(props) {

  const [active, setActive] = useState(true)
    const [charName, setCharName] = useState([])
    const [characters, setCharacters] = useState([])
    const [infos, setInfos] = useState([])
    const [pages, setPages] = useState()
    const [data,setData] = useState([])
    const [Newpages, setPagesNew] = useState([1])


    const [loader, setLoader] = useState(false)

    const [errpApi, setErroApi] = useState(false)

  


    const hadleClick = (charNameSearch) => {
      if(charNameSearch != null){
        setLoader(true)
        fetch("https://rickandmortyapi.com/graphql", {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            query: `
              query {
                  characters(page: 1, filter: { name: "${charNameSearch}" }) {
                  info {
                      count
                      pages
                      next
                  }
                  results {
                      id
                    name
                    status
                    species
                    gender
                    image
                  }
                  }
                  location(id: 1) {
                  id
                  }
                  episodesByIds(ids: [1, 2]) {
                  id
                  }
              }
            `
          })
        })
        .then(res => res.json())
        .then(data => {
          
          setInfos(data.data.characters.results)
          setPages(data.data.characters.info.pages)
          setCharacters(charNameSearch)
          setLoader(false)
          
        })
        .catch(() => {
          setLoader(false)
          setErroApi(true)
        })
      }
  }

  const NewPage = (numberPerPage) => {
    setLoader(true)
        fetch("https://rickandmortyapi.com/graphql", {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            query: `
              query {
                  characters(page: ${numberPerPage}, filter: { name: "${characters}" }) {
                  info {
                      count
                      pages
                      next
                  }
                  results {
                      id
                    name
                    status
                    species
                    gender
                    image
                  }
                  }
                  location(id: 1) {
                  id
                  }
                  episodesByIds(ids: [1, 2]) {
                  id
                  }
              }
            `
          })
        })
        .then(res => res.json())
        .then(data => {
          
          setInfos(data.data.characters.results)
          setLoader(false)
        })
        .catch(() => {
          setLoader(false)
          setErroApi(true)
        })

  }

  

    return (
        <DataContext.Provider value={{charName, setCharName, hadleClick, infos, loader, errpApi, pages, NewPage, active, setActive, data,setData ,setLoader}}>
            {props.children}
        </DataContext.Provider>
    )

}




export {DataContextProvider, DataContext}
