using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Book
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Title is required")]
        public required string Title { get; set; }

        [Required(ErrorMessage = "Author is required")]
        public required string Author { get; set; }

        public required string Description { get; set; }

        [Required(ErrorMessage = "Category is required")]
        public required string Category { get; set; }

        [Required(ErrorMessage = "Rate is required")]
        public required float Rate { get; set; }

        [Required(ErrorMessage = "Price is required")]
        public required float Price { get; set; }
    }
}
