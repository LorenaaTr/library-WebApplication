using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Partners
    {
        [Key]
        public int PartnerId { get; set; }
        public String BussinessName { get; set; } = null!;
        public String CeoName { get; set; } = null!;

        public String email { get; set; } = null!;
        public String City { get; set; } = null!;
        public int books { get; set; }
      

    }
}
