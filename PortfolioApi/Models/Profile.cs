namespace PortfolioApi.Models
{
    public class Profile
    {
        public int Id { get; set; } // Database primary key
        public string? Name { get; set; }
        public string? Gamerscore { get; set; }
        public string? Zone { get; set; }
        public string? Location { get; set; }
        public string? JoinDate { get; set; }
        public string? Bio { get; set; }
    }
}