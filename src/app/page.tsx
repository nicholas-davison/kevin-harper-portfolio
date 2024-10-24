import Image from 'next/image';
import Link from 'next/link';
import AlbumArt from './components/albumArt';

export default function Home() {
  return (
    <div>
      <div 
        className="flex h-screen bg-cover bg-center justify-start items-start"
        style={{ 
          backgroundImage: 'url(/K4.jpeg)',
          backgroundPosition: 'center 20%' 
        }}
      >
        <ul className="text-white text-xl md:text-4xl mt-28 md:mt-32 ml-10 md:ml-16">
          <li>Production</li>
          <li>Tracking</li>
          <li>Mixing</li>
        </ul>
      </div>
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
            <p>With 17 years of experience in the music industry, Kevin Harper is a seasoned recording engineer known for bringing a professional edge and creative flair to every project. Specializing in both studio recording and live sound, they have worked with a diverse range of artists, consistently delivering high-quality audio that meets the unique vision of each musician. Kevin's keen ear and technical expertise make him a trusted and sought-after engineer for artists of all genres.</p>
            <br/>
            <p>"Working with Kevin has been an absolute pleasure. They understood exactly what I wanted and helped bring my sound to life. He even stocks his house with coffee AND juice! Couldn’t have asked for a better engineer!" – Michael Sylvasie</p>
            <br/>
            <p>"Kevin's attention to detail is second to none. Every session with him feels effortless, and the final result is always beyond expectations." – Paul Worley</p>
          </div>
        </div>
      </div>
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
      <div 
          className='h-auto p-16 bg-cover'       
          style={{ 
            backgroundImage: 'url(/lines.jpg)',
            backgroundPosition: 'center 20%' 
        }}>
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
            src="https://open.spotify.com/embed/track/6F5uLZW5dDdBdRtk59Fodr?utm_source=generator&theme=0" 
            className="w-full md:w-2/3" 
            height="352" 
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            />
      </div>
    </div>
  );
}

/*     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          > 
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div> */