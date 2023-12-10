using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public enum Student
    {
        Yes,
        No
    }
    public class User
    {
        [Key]

        public int ID { get; set; }
        public string Name { get; set; } = null!;
        public string Surname { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string City { get; set; } = null!;
        public DateTime Birthday { get; set; }
        public string Password { get; set; } = null!;
        public Student isStudent { get; set; } 
        public bool acceptedterms { get; set; } 
    }
}
