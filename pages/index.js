import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="w-full h-full bg-[#F3F3F3] flex justify-center items-center">
        <div className="w-[500px] h-[600px] bg-white rounded-[25px]">
          <div className="w-full">
            <h1 className="text-center text-[50px] mt-[30px]">로그인</h1>
          </div>
          <form className="flex flex-col items-center">
            <div className="flex mt-[80px] w-[350px] h-[40px] border-[1px] border-black">
              <div className="w-[15%] h-full flex justify-center items-center"> 
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V24C2 24.5304 2.21071 25.0391 2.58579 25.4142C2.96086 25.7893 3.46957 26 4 26H28C28.5304 26 29.0391 25.7893 29.4142 25.4142C29.7893 25.0391 30 24.5304 30 24V8C30 7.46957 29.7893 6.96086 29.4142 6.58579C29.0391 6.21071 28.5304 6 28 6V6ZM25.8 8L16 14.78L6.2 8H25.8ZM4 24V8.91L15.43 16.82C15.5974 16.9361 15.7963 16.9984 16 16.9984C16.2037 16.9984 16.4026 16.9361 16.57 16.82L28 8.91V24H4Z" fill="black"/>
                </svg>
              </div>
              <div className="w-[85%] h-full border-l-[1px] border-black">
                  <input type="text" placeholder="Email address" className="w-full h-full pl-[5px] text-[24px] focus:outline-[#28AEFA]"/>
              </div>
            </div>
            <div className="flex mt-[35px] w-[350px] h-[40px] border-[1px] border-black">
              <div className="w-[15%] h-full flex justify-center items-center"> 
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 2C19.5946 1.99968 18.2087 2.32857 16.9532 2.96031C15.6978 3.59205 14.6079 4.50908 13.7707 5.63792C12.9335 6.76675 12.3723 8.07599 12.1322 9.46074C11.8921 10.8455 11.9797 12.2672 12.388 13.612L2 24V30H8L18.388 19.612C19.6259 19.9878 20.9303 20.0922 22.2122 19.9183C23.4941 19.7443 24.7235 19.2961 25.8165 18.604C26.9095 17.912 27.8405 16.9925 28.546 15.9081C29.2515 14.8237 29.7149 13.6 29.9047 12.3203C30.0945 11.0407 30.0062 9.7351 29.6458 8.49264C29.2854 7.25019 28.6613 6.10003 27.8162 5.12056C26.9711 4.14109 25.9247 3.35532 24.7485 2.81681C23.5722 2.2783 22.2937 1.9997 21 2V2ZM21 18C20.3115 17.9996 19.6268 17.8979 18.968 17.698L17.821 17.35L16.974 18.197L13.793 21.378L12.414 20L11 21.414L12.379 22.793L10.793 24.379L9.414 23L8 24.414L9.379 25.793L7.172 28H4V24.828L13.802 15.026L14.65 14.179L14.302 13.032C13.8746 11.623 13.9023 10.1151 14.3814 8.72277C14.8604 7.33045 15.7662 6.12463 16.97 5.27683C18.1739 4.42902 19.6144 3.98242 21.0867 4.00053C22.559 4.01864 23.9881 4.50056 25.1707 5.37772C26.3533 6.25488 27.2292 7.48262 27.6738 8.8863C28.1184 10.29 28.1091 11.7981 27.6471 13.1962C27.1852 14.5942 26.2941 15.811 25.1008 16.6735C23.9074 17.5359 22.4724 18.0001 21 18V18Z" fill="black"/>
                  <path d="M22 12C23.1046 12 24 11.1046 24 10C24 8.89543 23.1046 8 22 8C20.8954 8 20 8.89543 20 10C20 11.1046 20.8954 12 22 12Z" fill="black"/>
                </svg>
              </div>
              <div className="w-[85%] h-full border-l-[1px] border-black">
                  <input type="password" placeholder="Password" className="w-full h-full pl-[5px] text-[24px] focus:outline-[#28AEFA]"/>
              </div>
            </div>
            <input type="submit" className="w-[300px] h-[70px] bg-[#68B7F1] rounded-full text-white text-[30px] mt-[80px] hover:cursor-pointer" value="SUBMIT"/>
          </form>
          <div className="flex flex-col text-center text-[13px] mt-[10px] text-[#50B1E8] underline">
            <Link href="">
              <a>비밀번호를 잊어버리셨습니까?</a>
            </Link>
            <Link href="">
              <a className='mt-[5px]'>계정생성</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
