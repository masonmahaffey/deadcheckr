import { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from "./Pagination";
import {FaSkullCrossbones } from "react-icons/fa"
import {IoMdHappy} from "react-icons/io"
import {stringToColour} from "./utility"

export default function Main() {
  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState({bottom: [1,2,3], top: [7,8,9], middle: 0})
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  async function computePages(page) {
    if (page > 45) {
      alert("What are you ... like a hackerman or something?");
      page = 45;
    }

    // max is 444, min is 1
    let bottom;
    let top;
    let middle;

    // use ... in the middle, accent one of left 3 options
    if (page < 4) {
      bottom = [page+ 0, page + 1, page + 2];
      top = [page + 7 ,page + 8, page + 9];
      middle = 0;
      return {
        bottom,
        top,
        middle
      }
    }
    // use ... in the middle, accent one of right 3 options
    if (page > 42) {
      bottom = [page - 10,page - 9,page - 8];
      top = [page - 2,page - 1,page - 0];
      middle = 0;
      return {
        bottom,
        top,
        middle
      }
    }
    // else accent center and set numbers to 3 below and 3 above
    bottom = [page - 3,page - 2,page - 1];
    top = [page + 1,page + 2,page + 3];
    middle = page;
    return {
      bottom,
      top,
      middle
    }
  }

  useEffect(() => {
    const qs = (function(a) {
      if (a == "") return {};
      var b = {};
      for (var i = 0; i < a.length; ++i)
      {
          var p=a[i].split('=', 2);
          if (p.length == 1)
              b[p[0]] = "";
          else
              b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
      }
      return b;
    })(window.location.search.substring(1).split('&'));
    const page = parseInt(qs['p']) || 1;
    
    (async () => {
      const records = [];
      const hs = await getHouses(page);

      console.log("houses: ", hs.length)
      console.log("houses: ", hs)

      for(const house of hs) {
        if (house.swornMembers.length > 0) {

          for(const sm of house.swornMembers) {
            const swornMember = await getSwornMembers(sm);
            records.push({
              ...swornMember,
              house,
            });
          }
          
        } else {
          records.push({
            name: "This house has no sworn members",
            house
          })
        }
      }

      const p = await computePages(page);

      setCharacters(records);
      setCurrentPage(page);
      setPagination(p)
      setLoading(false);
    })()
  }, [])

  async function getHouses(page) {
    const housesRaw = await axios.get(`https://anapioficeandfire.com/api/houses?page=${page}&pageSize=10`);
    return await housesRaw.data
  }

  async function getSwornMembers(character) {
    const swornMembersRaw = await axios.get(character);
    return await swornMembersRaw.data
  }

  if (loading) {
    return (
      <div className="grid h-screen place-items-center" role="status">
          <svg aria-hidden="true" className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <>
      <div className='h-full'>
        <div>
          <main>
            <div style={{paddingBottom: '64px'}} className=" border-white/10 pt-5 mt-5">
              <div className='overflow-x'>
                <table className="w-full whitespace-nowrap text-left table-auto overflow-scroll">
                  <colgroup>
                    <col className="w-full sm:w-4/12" />
                    <col className="lg:w-4/12" />
                    <col className="lg:w-2/12" />
                    <col className="lg:w-1/12" />
                    <col className="lg:w-1/12" />
                  </colgroup>
                  <thead className="border-b border-white/10 text-sm leading-6 text-white">
                    <tr>
                      <th scope="col" className="py-2 pl-4 pr-8 sm:pl-6 lg:pl-8 font-light">
                        House
                      </th>
                      <th scope="col" className="py-2 pl-0 pr-4 text-right sm:pr-8 sm:text-left lg:pr-20 font-light">
                        Region
                      </th>
                      <th scope="col" className="hidden py-2 pl-0 pr-8 sm:table-cell font-light">
                        Member
                      </th>
                      <th scope="col" className="hidden py-2 pl-0 pr-8 md:table-cell lg:pr-20 font-light">
                        Titles
                      </th>
                      <th
                        scope="col"
                        className="hidden py-2 pl-0 sm:table-cell sm:pr-6 lg:pr-8 font-light"
                      >
                        <span className='ml-1'>Dead or Alive </span>
                      </th>
                      <th
                        scope="col"
                        className="hidden py-2 pl-0 pr-4 text-right sm:table-cell sm:pr-6 lg:pr-8 font-light"
                      >
                        
                        <span className='ml-1'>Death </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {characters.map((character, idx) => (
                      <tr key={idx} className="hover:bg-gray-800 cursor-pointer">
                        <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                          <div className="flex items-center gap-x-4">
                            <div className="truncate text-md leading-6 text-white font-black"><span style={{backgroundColor: stringToColour(character.house.name || ""), padding: "10px", marginRight: "10px"}}></span> {character.house.name || ""}</div>
                          </div>
                        </td>
                        <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                          <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                            {character.name != "This house has no sworn members" && <span className='text-white'>{character.house.region}</span>}
                            {character.name == "This house has no sworn members" && <span className="text-gray-500">{character.name}</span>}
                          </div>
                        </td>
                        <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                          <div className="flex gap-x-3">
                            
                            {character.name != "This house has no sworn members" && <span className="text-white">{character.name}</span>}
                            
                          </div>
                        </td>
                        
                        <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                          {character.titles ? character.titles.map((author, idx) => {
                              if (author.length == 0) {
                                return "No titles";
                              }
                              return (
                                <div key={idx}>
                                  <span style={{border: "2px solid" + stringToColour(author)}} className="inline-flex items-center rounded-md mb-3 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                                    {author}
                                  </span>
                                </div>
                                )
                            }) : <span>{character.name != "This house has no sworn members" && "No titles"}</span>}
                        </td>
                        <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                          {character.died && character.died.length > 0 ? 
                          
                            <div>
                              
                              <FaSkullCrossbones
                              className="h-5 w-5 text-white float-right"
                              ></FaSkullCrossbones>
                            </div>: character.name != "This house has no sworn members" ? <IoMdHappy
                            className="h-5 w-5 text-green-300 float-right"
                            ></IoMdHappy>: ""}
                        </td>
                        <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                          {character.died && character.died.length > 0 && 
                          
                            <div>
                              <div className='float-left'>{character.died}</div>
                            </div>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          
            <div style={{width: "100%", position: "fixed", bottom: '0px'}}>
              <Pagination currentPage={currentPage} pagination={pagination}/>
            </div>
  
          </main>
        </div>
      </div>
    </>
  )
}