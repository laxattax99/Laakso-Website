const Resume = () => {
  return (
    <div className="bg-white p-8 shadow-md rounded-md">
      <header>
        <h1 className="text-3xl font-bold">Colin Laakso</h1>
        <p className="text-gray-600">Full-Stack Engineer</p>
        <p className="text-gray-600">laxattack99@live.com</p>
        <p className="text-gray-600">978-870-9718</p>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Education</h2>
        <p className="mt-2">
          Northeastern University, Boston, MA Sep. 2017 – May 2022
          <br />
          Bachelor of Science in Computer Science, cum laude
        </p>
        <p className="mt-2">
          Related Courses: Software Development, Web Development, Artificial
          Intelligence, Networks and Distributed Systems, Object-Oriented
          Design, Algorithms and Data, Programming Languages, Computer Systems,
          Embedded Design, Database Design
        </p>
        <p className="mt-2">Honors: GPA: 3.60/4.00, Dean’s List</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Skills</h2>
        <p className="mt-2">
          Languages: Proficient in: Java, C#, .NET, Python, JavaScript, React
          <br />
          Familiar with: C++, C, Angular, Node, PowerShell, Processing, SQL,
          Scheme
        </p>
        <p className="mt-2">
          Software: Docker, Azure, Octopus, TeamCity, Git, Jira, VirtualBox,
          Jenkins
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Experience</h2>
        <div className="mt-2">
          <h3 className="text-lg font-bold">
            Wood Mackenzie, Boston, MA Sep. 2022 - Present
          </h3>
          <p>Software Engineer I</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Took initiative in rebuilding a discontinued web app from scratch,
              which enabled Wood Mackenzie analysts to create and view custom
              alerts for monitoring the output of power plants
            </li>
            <li>
              Expanded Power APIs to include a wide range of historical power
              plant data going back up to two years while utilizing
              time-triggered Azure functions to keep these records up to date
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-bold">
            MORSE Corp, Cambridge, MA Jan. 2021 - Jun. 2021
          </h3>
          <p>Software Engineer</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Created a containerized API and Mongo database to keep a history
              of missions created for Airdrop Mission Planning (AMP)
            </li>
            <li>
              Improved systems of the Docker backend for AMP that included
              integration testing, Monte Carlo simulations, and APIs for mission
              calculation
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-bold">
            Avigilon, a Motorola Solutions Company, Somerville, MA Jan. 2020 -
            Aug. 2020
          </h3>
          <p>Cloud Services Engineer</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Designed an automated function in Azure to collect diagnostics
              data from cameras to check 3rd party camera compatibility with
              Avigilon’s proprietary software
            </li>
            <li>
              Automated a monthly report regarding the prices of Azure resources
              to highlight overspending, ultimately reducing costs
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-bold">
            Milliman Financial Risk Management, Hudson, MA Jan. 2019 - Jun. 2019
          </h3>
          <p>Software Developer</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              Developed Software for servers in Milliman’s cloud computing
              infrastructure (CCI) to allow compatibility between Milliman cloud
              computing jobs and Microsoft Azure
            </li>
            <li>
              Created new security features for older parts of Milliman’s CCI
              allowing better encryption mechanisms between client and server
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Personal Projects</h2>
        <div className="mt-2">
          <ul className="list-disc list-inside mt-2">
            <li>
              Created a simple version of the Arcade game Asteroids in Java and
              coded an artificial intelligence to play it using a
              neuro-evolution algorithm
            </li>
            <li>
              Recreated the arcade game Missile Command using JavaScript and
              implemented a neuro-evolution algorithm to teach an AI how to play
              the game
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
