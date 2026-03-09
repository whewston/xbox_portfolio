using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace PortfolioApi.Migrations
{
    /// <inheritdoc />
    public partial class AddAllPortfolioData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Interests",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Subtitle = table.Column<string>(type: "text", nullable: true),
                    Details = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Interests", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LearnMores",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Subtitle = table.Column<string>(type: "text", nullable: true),
                    Details = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LearnMores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Profiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Gamerscore = table.Column<string>(type: "text", nullable: true),
                    Zone = table.Column<string>(type: "text", nullable: true),
                    Location = table.Column<string>(type: "text", nullable: true),
                    JoinDate = table.Column<string>(type: "text", nullable: true),
                    Bio = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Profiles", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Experiences",
                columns: new[] { "Id", "Company", "Date", "Details", "Title" },
                values: new object[,]
                {
                    { 1, "Cardiff University", "2023 - 2026", "Studying Applied Software Engineering. Built an AI triage system for Signum Health (.NET, React, Python), a patient tracking system for the Welsh Blood Service (SpringBoot, Thymeleaf), and an accessible game discovery platform.", "Client Projects & BSc Software Engineering" },
                    { 2, "Self-Employed", "Ongoing", "Designed and deployed a personal portfolio using Spring Boot, CI/CD, and Docker. Created a house renting site handling 100+ monthly visitors, and developed a custom WordPress site for a local business.", "Freelance Web Developer" },
                    { 3, "CyberFirst", "August 2022", "Attended the CyberFirst program in Belfast, gaining valuable insights into the cybersecurity industry, threat landscapes, and defensive strategies.", "CyberFirst Attendee" },
                    { 4, "Bumble Hole Foods", "Summer 2025", "Managed booking and dispatch for 100+ weekly deliveries. Optimised warehouse layout to reduce picking time by 15% and maintained inventory organisation across 300+ SKUs.", "Warehouse Assistant" }
                });

            migrationBuilder.InsertData(
                table: "Interests",
                columns: new[] { "Id", "Details", "Subtitle", "Title" },
                values: new object[,]
                {
                    { 1, "Second Team Captain for Cardiff University, where I coach 25+ players and organize weekly training sessions. I also coach the Girls 15s team in East Wales for national competitions, training 16 athletes, and serve as a qualified International referee, officiating at the Touch Euros.", "Cardiff Uni & Wales Touch Association", "Touch Rugby" },
                    { 2, "Served for 5 years and was promoted to Cadet Flight Sergeant. During my service, I led training for 15+ junior cadets in the Part II syllabus and participated in 5+ flight and gliding field days.", "KSW CCF", "Air Cadets" },
                    { 3, "Started as a mentor for 8 first-year students, supporting their academic and social transition. Promoted to Senior Student Mentor, where I oversee 6 new mentors and coordinate structured development sessions.", "Cardiff University", "Student Mentoring" },
                    { 4, "Active player in the local Padel community. Enjoy the strategic, fast-paced nature of the game and regularly participate in matches to stay sharp and maintain fitness.", "Recreational & Competitive", "Padel" }
                });

            migrationBuilder.InsertData(
                table: "LearnMores",
                columns: new[] { "Id", "Details", "Subtitle", "Title" },
                values: new object[,]
                {
                    { 1, "I grew up playing the Xbox 360, and its 'Metro' UI remains one of the most iconic, snappy, and satisfying digital interfaces ever designed. I built this portfolio as a tribute to that era, proving that highly interactive, controller-style navigation can still feel incredible on the modern web.", "The Inspiration", "Project Desire" },
                    { 2, "This entire dashboard is built in React. The layout relies heavily on CSS Grid for the authentic, tightly-packed Metro tile system. I utilized React Portals to ensure the pop-up modals break out of their containment blocks and render perfectly centered over the sliding canvas.", "React & CSS Grid", "Frontend Architecture" },
                    { 3, "The architecture is powered by a custom .NET Minimal API backed by a PostgreSQL database, managed with Entity Framework Core. The frontend fetches data dynamically, allowing the portfolio to be updated via database entries rather than hardcoded React state.", "C# .NET & PostgreSQL", "Backend Infrastructure" },
                    { 4, "To make it feel like a real console, I implemented a custom spatial navigation system. The app calculates physical distances between DOM elements so you can use your D-Pad (Arrow Keys) to naturally glide between tiles, Q/E to change tabs, and Enter to select—just like having a controller in your hands.", "Spatial Navigation", "Keyboard Controls" },
                    { 5, "The Settings tab is currently a fun visual easter egg, but future updates will wire these tiles to global React Contexts. This will allow users to toggle dark modes, change accent colors, and manage the website's background audio just like a real Xbox system menu.", "Future Features", "Settings Page" }
                });

            migrationBuilder.InsertData(
                table: "Profiles",
                columns: new[] { "Id", "Bio", "Gamerscore", "JoinDate", "Location", "Name", "Zone" },
                values: new object[] { 1, "Hey, I'm a passionate Software Engineer who loves building clean, interactive user interfaces.<br/><br/>When I'm not writing React code or hunting down CSS bugs, you can usually find me exploring new tech stacks, designing game UI clones, or trying to beat my high scores.<br/><br/>My primary weapon of choice is JavaScript, but I'm always leveling up my skills in the backend and cloud infrastructure.", "15,420", "2010", "UK", "William Hewston", "Software Development" });

            migrationBuilder.InsertData(
                table: "Skills",
                columns: new[] { "Id", "Details", "Subtitle", "Title" },
                values: new object[,]
                {
                    { 1, "Experienced in building responsive and accessible user interfaces. Skilled in React, TailwindCSS, Bootstrap, and WordPress, with a focus on delivering high accessibility scores.", "React, JavaScript, HTML/CSS", "Frontend Development" },
                    { 2, "Proficient in server-side development using Java (Spring Boot), Python (Flask), and C# (.NET). Experienced in relational database management with PostgreSQL, MySQL, and MariaDB.", "Java, Python, C#, SQL", "Backend & Databases" },
                    { 3, "Strong understanding of DevOps practices including continuous integration and deployment using Jenkins. Familiar with containerisation (Docker), infrastructure as code (Terraform), Git source control, and Agile methodologies.", "Git, Docker, CI/CD", "Tools & DevOps" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Interests");

            migrationBuilder.DropTable(
                name: "LearnMores");

            migrationBuilder.DropTable(
                name: "Profiles");

            migrationBuilder.DeleteData(
                table: "Experiences",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Experiences",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Experiences",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Experiences",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Skills",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
