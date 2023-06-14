function Header() {
  return (
    <div className="relative overflow-hidden bg-gray-700/10 pl-5 pt-5 pb-5">
      <nav
        className="relative flex items-center justify-between sm:h-10 "
        aria-label="Global"
      >
        <div className="flex flex-shrink-0 flex-grow items-center ">
          <div className="flex w-full items-center justify-between md:w-auto">
            <a href="#" aria-label="Home" className="flex items-center">
              {/* <MdHeartBroken
              className="h-7 w-7 text-red-600 group-hover:text-red-500"
              ></MdHeartBroken> */}
              <img className="main-logo" alt="logo" style={{position: "relative", top: '-4px'}} src="https://openclipart.org/image/800px/296918"/>

              
            
              <div className="leading-5 ml-1 mt-1 mb-2">
                <span style={{fontWeight: '800'}} className="block text-white main-logo-text">
                  deadcheck<span>r</span>
                </span>
                {/* <small className="text-white">Track which characters have survived!</small> */}
                <span style={{fontSize: '20px', fontWeight: '1000'}} className="text-white block xl:inline"></span>
                {/* <img alt="logo" style={{width: "20px"}} src="https://openclipart.org/image/800px/296918"/> */}
              </div>
            </a>
            
          </div>
        </div>
        
      </nav>
            
    </div>
  );
}

export default Header;
