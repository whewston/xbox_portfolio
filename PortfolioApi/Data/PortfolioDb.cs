using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models;

namespace PortfolioApi.Data
{
    public class PortfolioDb : DbContext
    {
        public PortfolioDb(DbContextOptions<PortfolioDb> options) : base(options) { }

        // These become your actual PostgreSQL tables
        public DbSet<Profile> Profiles => Set<Profile>();
        public DbSet<Experience> Experiences => Set<Experience>();
        public DbSet<Skill> Skills => Set<Skill>();
        public DbSet<LearnMore> LearnMores => Set<LearnMore>();
        public DbSet<Interest> Interests => Set<Interest>();

        // This seeds the database with your initial CV data!
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Profile>().HasData(
                new Profile 
                { 
                    Id = 1, 
                    Name = "William Hewston", 
                    Gamerscore = "15,420", 
                    Zone = "Software Development", 
                    Location = "UK", 
                    JoinDate = "2010", 
                    Bio = "Hey, I'm a passionate Software Engineer who loves building clean, interactive user interfaces.<br/><br/>When I'm not writing React code or hunting down CSS bugs, you can usually find me exploring new tech stacks, designing game UI clones, or trying to beat my high scores.<br/><br/>My primary weapon of choice is JavaScript, but I'm always leveling up my skills in the backend and cloud infrastructure." 
                }
            );

            modelBuilder.Entity<Experience>().HasData(
                new Experience { Id = 1, Title = "Client Projects & BSc Software Engineering", Company = "Cardiff University", Date = "2023 - 2026", Details = "Studying Applied Software Engineering. Built an AI triage system for Signum Health (.NET, React, Python), a patient tracking system for the Welsh Blood Service (SpringBoot, Thymeleaf), and an accessible game discovery platform." },
                new Experience { Id = 2, Title = "Freelance Web Developer", Company = "Self-Employed", Date = "Ongoing", Details = "Designed and deployed a personal portfolio using Spring Boot, CI/CD, and Docker. Created a house renting site handling 100+ monthly visitors, and developed a custom WordPress site for a local business." },
                new Experience { Id = 3, Title = "CyberFirst Attendee", Company = "CyberFirst", Date = "August 2022", Details = "Attended the CyberFirst program in Belfast, gaining valuable insights into the cybersecurity industry, threat landscapes, and defensive strategies." },
                new Experience { Id = 4, Title = "Warehouse Assistant", Company = "Bumble Hole Foods", Date = "Summer 2025", Details = "Managed booking and dispatch for 100+ weekly deliveries. Optimised warehouse layout to reduce picking time by 15% and maintained inventory organisation across 300+ SKUs." }
            );

            modelBuilder.Entity<Skill>().HasData(
                new Skill { Id = 1, Title = "Frontend Development", Subtitle = "React, JavaScript, HTML/CSS", Details = "Experienced in building responsive and accessible user interfaces. Skilled in React, TailwindCSS, Bootstrap, and WordPress, with a focus on delivering high accessibility scores." },
                new Skill { Id = 2, Title = "Backend & Databases", Subtitle = "Java, Python, C#, SQL", Details = "Proficient in server-side development using Java (Spring Boot), Python (Flask), and C# (.NET). Experienced in relational database management with PostgreSQL, MySQL, and MariaDB." },
                new Skill { Id = 3, Title = "Tools & DevOps", Subtitle = "Git, Docker, CI/CD", Details = "Strong understanding of DevOps practices including continuous integration and deployment using Jenkins. Familiar with containerisation (Docker), infrastructure as code (Terraform), Git source control, and Agile methodologies." }
            );

            modelBuilder.Entity<LearnMore>().HasData(
                new LearnMore { Id = 1, Title = "Project Desire", Subtitle = "The Inspiration", Details = "I grew up playing the Xbox 360, and its 'Metro' UI remains one of the most iconic, snappy, and satisfying digital interfaces ever designed. I built this portfolio as a tribute to that era, proving that highly interactive, controller-style navigation can still feel incredible on the modern web." },
                new LearnMore { Id = 2, Title = "Frontend Architecture", Subtitle = "React & CSS Grid", Details = "This entire dashboard is built in React. The layout relies heavily on CSS Grid for the authentic, tightly-packed Metro tile system. I utilized React Portals to ensure the pop-up modals break out of their containment blocks and render perfectly centered over the sliding canvas." },
                new LearnMore { Id = 3, Title = "Backend Infrastructure", Subtitle = "C# .NET & PostgreSQL", Details = "The architecture is powered by a custom .NET Minimal API backed by a PostgreSQL database, managed with Entity Framework Core. The frontend fetches data dynamically, allowing the portfolio to be updated via database entries rather than hardcoded React state." },
                new LearnMore { Id = 4, Title = "Keyboard Controls", Subtitle = "Spatial Navigation", Details = "To make it feel like a real console, I implemented a custom spatial navigation system. The app calculates physical distances between DOM elements so you can use your D-Pad (Arrow Keys) to naturally glide between tiles, Q/E to change tabs, and Enter to select—just like having a controller in your hands." },
                new LearnMore { Id = 5, Title = "Settings Page", Subtitle = "Future Features", Details = "The Settings tab is currently a fun visual easter egg, but future updates will wire these tiles to global React Contexts. This will allow users to toggle dark modes, change accent colors, and manage the website's background audio just like a real Xbox system menu." }
            );

            modelBuilder.Entity<Interest>().HasData(
                new Interest { Id = 1, Title = "Touch Rugby", Subtitle = "Cardiff Uni & Wales Touch Association", Details = "Second Team Captain for Cardiff University, where I coach 25+ players and organize weekly training sessions. I also coach the Girls 15s team in East Wales for national competitions, training 16 athletes, and serve as a qualified International referee, officiating at the Touch Euros." },
                new Interest { Id = 2, Title = "Air Cadets", Subtitle = "KSW CCF", Details = "Served for 5 years and was promoted to Cadet Flight Sergeant. During my service, I led training for 15+ junior cadets in the Part II syllabus and participated in 5+ flight and gliding field days." },
                new Interest { Id = 3, Title = "Student Mentoring", Subtitle = "Cardiff University", Details = "Started as a mentor for 8 first-year students, supporting their academic and social transition. Promoted to Senior Student Mentor, where I oversee 6 new mentors and coordinate structured development sessions." },
                new Interest { Id = 4, Title = "Padel", Subtitle = "Recreational & Competitive", Details = "Active player in the local Padel community. Enjoy the strategic, fast-paced nature of the game and regularly participate in matches to stay sharp and maintain fitness." }
            );
        }
    }
}