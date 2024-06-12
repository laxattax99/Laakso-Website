const Resume = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Colin Laakso</h1>
      <h2 className="text-xl font-semibold mb-2">Full-Stack Engineer</h2>
      <p>colinlax.net | laxattack99@live.com | 978-870-9718</p>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Education</h2>
        <p>Northeastern University, Boston, MA - Sep. 2017 – May 2022</p>
        <p>Bachelor of Science in Computer Science, cum laude</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Skills</h2>
        <p>Languages: C#, .NET, Python, SQL, JavaScript (React, Angular, Next, Node), Java, Go, C++, C, PowerShell</p>
        <p>Technologies: MongoDB, Docker, Azure, Octopus, TeamCity, Tailwind, Databricks, Auth0</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-bold">Experience</h2>

        <h3 className="text-lg font-semibold mt-2">
          Wood Mackenzie, Boston, MA & New York, NY - Aug. 2022 – May 2024
        </h3>
        <p>Software Engineer | Short Term Power</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Improved the process of collecting inputs to a new Python-based predictive ML wind model for wind forecasting, streamlined the output process, and deployed the model to Databricks where I set up scheduling for both training and wind forecast generation. This deployment increased the model's training speed and scalability, while also serving more accurate wind generation forecasts to clients.
          </li>
          <li>
            Spearheaded the complete rebuild of a discontinued web app using PostgreSQL, .NET, and React, enabling analysts to create/view custom alerts for power plant monitoring, which they had been unable to do since 2018.
          </li>
          <li>
            Expanded .NET-based Power APIs by integrating time-triggered Azure functions to collect historical power plant data from internal SQL databases, resulting in more comprehensive data availability for clients.
          </li>
          <li>
            Designed new .NET and Azure function based ETL jobs to replace legacy SQL SSIS packages, enhancing data infrastructure scalability and adding crucial generator data to our APIs for clients to view generator availability.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-2">
          ALTO Visuals, Los Angeles, CA - Feb. 2024 – May 2024
        </h3>
        <p>Project Lead | Treatment Feedback</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Architected a scalable, container-based web app for analyzing marketing documents, providing AI-generated creative feedback using OpenAI, reshaping client marketing strategies.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-2">
          MORSE Corp, Cambridge, MA - Jan. 2021 – Jul. 2021
        </h3>
        <p>Software Engineer | Airdrop Mission Planning</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Developed a containerized API in Python and a MongoDB database to maintain a history of missions for Airdrop Mission Planning (AMP), giving clients more comprehensive mission information.
          </li>
          <li>
            Added new endpoints and features to older mission planning infrastructure written in C#, enhancing the functionality and extending the capabilities of existing mission planning and calculation APIs.
          </li>
          <li>
            Contributed to backend systems for AMP, including integration testing and mission calculation APIs, doubling test coverage and adding more options for clients to simulate missions.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-2">
          Avigilon, a Motorola Solutions Company, Somerville, MA - Jan. 2020 – Sep. 2020
        </h3>
        <p>Cloud Services Engineer | DevOps and Full-Stack Teams</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Designed and implemented an automated Azure job in C# to collect diagnostics data from cameras to check third-party camera compatibility with Avigilon’s proprietary software, allowing Avigilon to report to customers which third party cameras they were able to incorporate into their camera networks.
          </li>
          <li>
            Automated a C# based Azure job to generate a monthly report regarding the prices of Azure resources to highlight overspending, ultimately reducing cloud costs by around 30%.
          </li>
          <li>
            Collaborated with project managers to implement new UI features using React, enhancing and expanding the user interface of our Avigilon website. Additionally, streamlined CI/CD pipelines with PowerShell in the DevOps team to improve deployment efficiency and reliability on Azure.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-2">
          Milliman Financial Risk Management, Hudson, MA - Jan. 2019 – Jul. 2019
        </h3>
        <p>Software Developer | Cloud Team</p>
        <ul className="list-disc list-inside mt-2">
          <li>
            Developed a Gateway for Milliman’s cloud computing infrastructure (CCI) to allow compatibility between Milliman cloud computing jobs and Microsoft Azure, while also implementing single sign on for CCI using impersonation.
          </li>
          <li>
            Collaborated with colleagues on an application that mirrored files on an FTP server with a client’s local file system while maintaining revision numbers for each file.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;