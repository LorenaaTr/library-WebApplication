using System;
using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        public string Name { get; set; } = null!;

        [Required]
        public string Surname { get; set; } = null!;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = null!;

        [Required]
        public string City { get; set; } = null!;

        [Required]
        [DataType(DataType.Date)]
        public DateTimeOffset Birthday { get; set; }

        [Required]
        public string Username { get; set; } = null!;

        [Required]
        public string Password { get; set; } = null!;

        [Required]
        public bool IsStudent { get; set; }

        [Required]
        public bool AcceptTerms { get; set; }
    }
}
