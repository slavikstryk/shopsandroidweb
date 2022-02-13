using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShopsAndroidWeb.Data.Entities

{
    public class DeliveredProducts
    {
        [Key]
        public int Id { get; set; }
        [Required] [StringLength(255)]
        public string? ProductName { get; set; }
        public string? BuyersName { get; set; }
        public string? BuyersLastName { get; set; }
        public string? ProductPrice { get; set; }
        public string? BuyersEmail { get; set; }
        public string? BuyersPhone { get; set; }
        public string? DeliveryAdress { get; set; }
        public string? Status { get; set; }
    }
}
