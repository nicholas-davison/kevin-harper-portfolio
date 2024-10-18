
const creditsData = [
    { year: 2022, artist: 'Artist 1', album: 'Album 1', credit: 'Credit 1' },
    { year: 2023, artist: 'Artist 2', album: 'Album 2', credit: 'Credit 2' },
    { year: 2024, artist: 'Artist 3', album: 'Album 3', credit: 'Credit 3' },
  ];
  
  const StaticSpreadsheet = () => {
    return (
      <div className="px-5 overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Year</th>
              <th className="border border-gray-300 px-4 py-2">Artist</th>
              <th className="border border-gray-300 px-4 py-2">Album/Single</th>
              <th className="border border-gray-300 px-4 py-2">Credit</th>
            </tr>
          </thead>
          <tbody>
            {creditsData.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{item.year}</td>
                <td className="border border-gray-300 px-4 py-2">{item.artist}</td>
                <td className="border border-gray-300 px-4 py-2">{item.album}</td>
                <td className="border border-gray-300 px-4 py-2">{item.credit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default StaticSpreadsheet;