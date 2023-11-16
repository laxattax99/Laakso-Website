const Resume = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Colin Laakso</h1>
      <h2 className="text-xl font-semibold mb-2">Full-Stack Engineer</h2>
      <p>laxattack99@live.com | 978-870-9718</p>
      <p>LinkedIn: colin-laakso | GitHub: laxattax99</p>
      <p>854 Metropolitan Ave, 1B | Brooklyn, NY 11211(willing to relocate)</p>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Education</h2>
        <p>Northeastern University, Boston, MA - Sep. 2017 – May 2022</p>
        <p>Bachelor of Science in Computer Science, cum laude</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Skills</h2>
        <p>
          Java, C#, .NET, Python, JavaScript (React, Angular, Next, Node), Go,
          C++, C, PowerShell, Processing, SQL (Postgres, SQL Server), MongoDB,
          Docker, Azure, Octopus, TeamCity, Jenkins, Auth0, Tailwind
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Experience</h2>

        <h3 className="text-lg font-semibold mt-2">
          Wood Mackenzie, Boston, MA - Aug. 2022 - Present
        </h3>
        <p>Software Engineer I</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Took initiative in rebuilding a discontinued web app from scratch,
            which enabled Wood Mackenzie analysts to create and view custom
            alerts for monitoring the output of power plants.
          </li>
          <li>
            Expanded Power APIs to include a wide range of historical power
            plant data going back up to two years while utilizing time triggered
            azure functions to keep these records up to date.
          </li>
          <li>
            Utilized legacy SSIS packages and Azure functions to create new ETL
            jobs that provided generator availability data to new EU power API
            endpoints.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-2">
          MORSE Corp, Cambridge, MA - 2021
        </h3>
        <p>Software Engineer Co-op</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Created a containerized API and Mongo database to keep a history of
            missions created for Airdrop Mission Planning (AMP).
          </li>
          <li>
            Improved systems of the Docker backend for AMP that included
            integration testing, Monte Carlo simulations, and APIs for mission
            calculation.
          </li>
          <li>
            Implemented new features to the .NET servers behind older AMP
            infrastructure to improve routing and overall performance.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-2">
          Avigilon, a Motorola Solutions Company, Somerville, MA - 2020
        </h3>
        <p>Cloud Services Engineer Co-op</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Designed, implemented, and tested an automated function in Azure to
            collect diagnostics data from cameras to check 3rd party camera
            compatibility with Avigilon’s proprietary software.
          </li>
          <li>
            Automated a monthly report regarding the prices of Azure resources
            to highlight overspending, ultimately reducing costs.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-2">
          Milliman Financial Risk Management, Hudson, MA - 2019
        </h3>
        <p>Software Developer Co-op</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Developed Software for servers in Milliman’s cloud computing
            infrastructure (CCI) to allow compatibility between Milliman cloud
            computing jobs and Microsoft Azure.
          </li>
          <li>
            Created new security features for older parts of Milliman’s CCI
            allowing better encryption mechanisms between client and server.
          </li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Personal Projects</h2>
        <ul className="list-disc list-inside mt-2">
          <li>
            Created version of the Arcade game Asteroids in Java and coded an
            artificial intelligence to play it using a neuro-evolution
            algorithm.
          </li>
          <li>
            Recreated the arcade game Missile Command using JavaScript and
            implemented a neuro-evolution algorithm to teach an AI how to play
            the game.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
