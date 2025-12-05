"use client"
import Image from "next/image";

const NotFound= () => {
  return (
    <div className="flex flex-col items-center">
        <h1 className="text-9xl text-shadow-secondary ">404</h1>
        <p>Page not found</p>
        <Image
        src='/404-notfound.png'
        alt="404 image"
        width={500}
        height={500}
        className="animate-bounce"
        />
    </div>
  )
}

export default NotFound;