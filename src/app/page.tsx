"use client"
import Image from 'next/image';
import Link from 'next/link';
import AlbumArt from './components/albumArt';
import React from 'react';
import Parallax from './components/parallax';

export default function Home() {
/*   const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []); */


  return (
    <div>
      {/* Cover Photo */}
      <Parallax imageUrl="/KevinNew.jpeg" speed={0.05} cover={true}>
        <ul className="text-white text-3xl md:text-6xl mt-[-20px] md:mt-[-50px] ml-6 md:ml-16 bg-black bg-opacity-50 p-4 rounded-lg">
          <li className='mb-2'>Production</li>
          <li className='my-2'>Tracking</li>
          <li className='my-2'>Mixing</li>
        </ul>
      </Parallax>

      {/* About */}
      <div 
        id="about"
        className="flex flex-col h-100 scroll-mt-24"
      >
        <h1 className="text-2xl mt-5 ml-10 md:text-4xl md:m-22"> About </h1>
        <div className="flex">
        <Image
            src="/K4.jpeg"
            alt="Kevin Harper Profile Picture"
            width={200}
            height={300}
            className=" m-10 hidden md:block object-cover rounded-lg" 
          />
          <div className="flex flex-col m-10">
            <p>With 17 years of experience in the music industry, Kevin Harper is a seasoned recording engineer known for bringing a professional edge and creative flair to every project. Specializing in both studio recording and live sound, they have worked with a diverse range of artists, consistently delivering high-quality audio that meets the unique vision of each musician. Kevin&#39;s keen ear and technical expertise make him a trusted and sought-after engineer for artists of all genres.</p>
            <br/>
            <br/>
          </div>
        </div>
      </div>

      {/* Album Art */}
      <div className="h-auto bg-black flex flex-col items-center justify-center">
          <AlbumArt/>
          <Link href="/credits">
            <button 
              className="bg-orange-200 hover:bg-orange-300 hover:scale-105 transition-transform duration-300 py-3 px-6 mb-5 rounded-xl text-2xl"
              >
              Full List of Credits 
              <i className="fa-solid fa-right-long pl-3 text-2xl"></i>
            </button>
          </Link>
      </div>
      <Parallax imageUrl="/lines.jpg" speed={0.015} cover={false}>

      {/* Spotify Players */}
{/*       <div 
          className='h-auto p-16 bg-cover'    
           style={{ 
            backgroundImage: 'url(/lines.jpg)',
            backgroundPosition: 'center 20%' 
        }}> */}
          <iframe 
            style={{borderRadius:"12px"}}
            src="https://open.spotify.com/embed/track/6y9k1hTsiqA2zlpxhlGZrH?utm_source=generator&theme=0"
            className="w-full md:w-2/3" 
            height="352" 
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"/>
          <br></br>
          <iframe 
            style={{borderRadius:"12px" , marginLeft: 'auto'}} 
            src="https://open.spotify.com/embed/track/5bJWTsIWfR3kz1LalWeGd2?utm_source=generator&theme=0" 
            className="w-full md:w-2/3" 
            height="352"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"/>
          <br></br>
          <iframe 
            style={{borderRadius:"12px"}}
            src="https://open.spotify.com/embed/track/0qyWAhGuyqxs78EoknxAfe?utm_source=generator&theme=0" 
            className="w-full md:w-2/3" 
            height="352" 
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            />
            <br></br>
            <iframe 
              style={{borderRadius:"12px" , marginLeft: 'auto'}} 
              src="https://open.spotify.com/embed/track/55DCX1FPBbKSvQqMHrg7kf?utm_source=generator&theme=0" 
              className="w-full md:w-2/3" 
              height="352" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            />
      {/* </div> */}
      </Parallax>
    </div>
  );
}