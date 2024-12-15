import StaticSpreadsheet from "../components/credits-spreadsheet";


export default function CreditsPage() {
    return (
      <div>
        <div 
          className="h-64 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/console1.jpg)',
            backgroundPosition: 'center 20%'
          }}
        >
        </div>
        <h1 className="text-4xl text-center pt-5 font-bold mb-6">Full List of Credits</h1>
          <StaticSpreadsheet/>
      </div>
    );
  }

  //https://api.developer.muso.ai/v4/profile/ca60ab1a-0c3a-4c10-bc52-a2206ef0127c/credits