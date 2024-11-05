
const creditsData = [
  { year: 2024, artist: 'Various Artists', album: 'Summer Party Country 2024', credit: 'Editing' },
  { year: 2024, artist: 'Lady A', album: 'Stop Draggin\' My Heart Around', credit: 'Editing, Engineer' },
  { year: 2024, artist: 'Various Artists', album: 'Soundtrack to Summer 2024', credit: 'Editing, Engineer' },
  { year: 2024, artist: 'Big Smo', album: 'Say My Name', credit: 'Assistant Engineer' },
  { year: 2024, artist: 'Lainey Wilson / Wynonna', album: 'Refugee', credit: 'Editing' },
  { year: 2024, artist: 'Various Artists', album: 'Queens of Country [2024]', credit: 'Editing' },
  { year: 2024, artist: 'Various Artists', album: 'POV: breaking up in the country', credit: 'Editing, Engineer' },
  { year: 2024, artist: 'Big Smo', album: 'Never Get Old', credit: 'Assistant Engineer' },
  { year: 2024, artist: 'Big Smo', album: 'Movin\' On Up', credit: 'Assistant Engineer' },
  { year: 2024, artist: 'The Erwins', album: 'Life Story', credit: 'Engineer' },
  { year: 2023, artist: 'Dan + Shay', album: 'Keeping Score', credit: 'Engineer' },
  { year: 2023, artist: 'Josh Preston', album: 'Josh Preston', credit: 'Mixing' },
  { year: 2023, artist: 'JT Harper', album: 'JT Harper', credit: 'Digital Editing, Assistant Engineer' },
  { year: 2023, artist: 'Dailey & Vincent', album: 'I\'ll Leave My Heart in Tennessee', credit: 'Engineer' },
  { year: 2023, artist: 'Various Artists', album: 'Hot Country Christian 2023', credit: 'Assistant Engineer, Editing' },
  { year: 2022, artist: 'Dailey & Vincent', album: 'Let\'s Sing Some Country!', credit: 'Engineer' },
  { year: 2022, artist: 'Various Artists', album: '2020 Grammy Nominees', credit: 'Engineer, Studio Personnel' },
  { year: 2022, artist: 'Big Smo', album: 'We the People', credit: 'Assistant Engineer' },
  { year: 2022, artist: 'Blake Shelton', album: 'If I\'m Honest', credit: 'Engineer' },
  { year: 2022, artist: 'Blake Shelton', album: 'Came Here to Forget', credit: 'Engineer' },
  { year: 2021, artist: 'Various Artists', album: 'Shanti Samsara', credit: 'Engineer, Horn Engineer' },
  { year: 2021, artist: 'Chris Isaak', album: 'First Comes the Night', credit: 'Assistant Engineer' },
  { year: 2020, artist: 'Big Smo', album: 'We the People', credit: 'Assistant Engineer' },
  { year: 2020, artist: 'Billband', album: 'Towards Daybreak', credit: 'Assistant Engineer' },
  { year: 2020, artist: 'Yoko Ono / Plastic Ono Band', album: 'Take Me to the Land of Hell', credit: 'Assistant Engineer, Bottle' },
  { year: 2019, artist: 'Blake Shelton', album: 'Fully Loaded: God\'s Country', credit: 'Engineer' },
  { year: 2019, artist: 'Dan + Shay', album: 'Dan + Shay', credit: 'Assistant, Assistant Engineer, Engineer' },
  { year: 2019, artist: 'Ute Lemper', album: 'Forever: The Love Poems of Pablo Neruda', credit: 'Assistant Engineer' },
  { year: 2018, artist: 'Hem', album: 'Departure & Farewell', credit: 'Engineer, Mixing' },
  { year: 2018, artist: 'Underwater Tiger', album: 'Where Miles Become Meaning', credit: 'Engineer, Mixing' },
  { year: 2017, artist: 'Charles Kelley', album: 'The Driver', credit: 'Engineer, Editing, Assistant' },
  { year: 2017, artist: 'Big Smo', album: 'We the People', credit: 'Assistant Engineer' },
  { year: 2016, artist: 'Blake Shelton', album: 'If I\'m Honest', credit: 'Engineer' },
  { year: 2016, artist: 'Blake Shelton', album: 'Came Here to Forget', credit: 'Engineer' },
  { year: 2016, artist: 'Charles Kelley', album: 'The Driver', credit: 'Engineer, Editing, Assistant' },
  { year: 2016, artist: 'Ravi Coltrane', album: 'Spirit Fiction', credit: 'Assistant' },
  { year: 2016, artist: 'Jools Holland', album: 'Jools Holland\'s Big Band Rhythm & Blues', credit: 'Layout Concept' },
  { year: 2016, artist: 'Ayurveda', album: 'H. Luminous', credit: 'Engineer' },
  { year: 2016, artist: 'Various Artists', album: '2016 POP Hits', credit: 'Engineer' },
  { year: 2015, artist: 'Jools Holland', album: 'Small World Big Band', credit: 'Assistant' },
  { year: 2015, artist: 'Kavita Shah', album: 'Visions', credit: 'Engineer' },
  { year: 2014, artist: 'Kurt Elling', album: '1619 Broadway: The Brill Building Project', credit: 'Assistant' },
  { year: 2014, artist: 'Lee Brice', album: 'I Don\'t Dance', credit: 'Assistant' },
  { year: 2013, artist: 'Blake Shelton', album: 'Friends', credit: 'Engineer' },
  { year: 2013, artist: 'Ute Lemper', album: 'Forever: The Love Poems of Pablo Neruda', credit: 'Assistant Engineer' },
  { year: 2013, artist: 'Nicky Schrire', album: 'Space and Time', credit: 'Assistant Engineer' },
  { year: 2013, artist: 'Laurent Courthaliac / Laurent Courthaliac Trio', album: 'Pannonica', credit: 'Assistant' },
  { year: 2013, artist: 'Big Smo', album: 'We the People', credit: 'Assistant Engineer' },
  { year: 2013, artist: 'Hem', album: 'Departure & Farewell', credit: 'Engineer, Mixing' },
  { year: 2013, artist: 'The Next Collective', album: 'Cover Art', credit: 'Assistant Engineer' },
  { year: 2013, artist: 'Billband', album: 'Towards Daybreak', credit: 'Assistant Engineer' },
  { year: 2013, artist: 'Yoko Ono / Plastic Ono Band', album: 'Take Me to the Land of Hell', credit: 'Assistant Engineer, Bottle' },
  { year: 2012, artist: 'Blake Shelton', album: 'Cheers, It\'s Christmas', credit: 'Engineer, Mixing' },
  { year: 2012, artist: 'Marcus Miller', album: 'Renaissance', credit: 'Assistant Engineer' },
  { year: 2012, artist: 'Ravi Coltrane', album: 'Spirit Fiction', credit: 'Assistant' },
  { year: 2012, artist: 'Various Artists', album: 'Over the Moon: The Broadway Lullaby Project', credit: 'Assistant Engineer' },
  { year: 2011, artist: 'Ayurveda', album: 'H. Luminous', credit: 'Engineer' },
  { year: 2011, artist: 'John Scofield', album: 'Überjam Deux', credit: 'Assistant Engineer' },
  { year: 2010, artist: 'Jools Holland', album: 'Small World Big Band', credit: 'Assistant' },
  { year: 2006, artist: 'Nightmares on Wax', album: 'In a Space Outta Sound', credit: 'Vocals' },
  { year: 2002, artist: 'Ayurveda', album: 'H. Luminous', credit: 'Engineer' },
  { year: 2001, artist: 'Jools Holland', album: 'Small World Big Band', credit: 'Assistant' },
  { year: 2001, artist: 'Jools Holland', album: 'Jools Holland\'s Big Band Rhythm & Blues', credit: 'Layout Concept' },
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




  