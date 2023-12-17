namespace Server.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public string Category { get; set;}
        public float Rate { get; set; }
        public float Price { get; set; }    
    }
}
