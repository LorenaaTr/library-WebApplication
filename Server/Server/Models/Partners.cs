using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Partners
    {
        [Key]
        public String BussinessName { get; set; } = null!;
        public String CeoName { get; set; } = null!;

        public String City{ get; set; } = null!;
        public String State { get; set; } = null!;
        public String Street { get; set; } = null!;
        public int ZipCode { get; set; } 




    }
}
